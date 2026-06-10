import {
    svg_item_config,
    SVGItem,
    Category,
    Language,
    languages,
    text_map,
    validateConfig,
    HpsuDashboardConfig,
} from "./svg_item_config";

import type { HomeAssistant } from "@ha/types";

import { property, state } from "lit/decorators.js";
import { html, LitElement, css, nothing } from "lit";

declare global {
    interface Window {
        loadCardHelpers(): Promise<{
            createCardElement(config: Record<string, unknown>): Promise<{
                constructor: { getConfigElement(): Promise<unknown> };
            }>;
        }>;
    }
}

const ensureArray = <T>(value: T | T[] | undefined): (T | undefined)[] => {
    return Array.isArray(value) ? value : [value];
};

export class HpsuDashboardCardEditor extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    @property({ attribute: false }) public config!: HpsuDashboardConfig;

    @state() private language: Language = "en";
    @state() private svgItemConfig: SVGItem[] = [];

    private static helpersLoaded = false;

    public setConfig(config: HpsuDashboardConfig): void {
        this.config = validateConfig(config);
        this.svgItemConfig = svg_item_config.map(svg_item => ({
            ...svg_item,
            entityId: this.config.entities?.[svg_item.id] ?? null
        }));
    }

    public connectedCallback(): void {
        super.connectedCallback();
        void HpsuDashboardCardEditor.loadHaComponents();
    }

    // HACK: Creating an entities card config element forces Home Assistant to
    // lazily register the ha-selector / ha-entity-picker components.
    private static async loadHaComponents(): Promise<void> {
        if (HpsuDashboardCardEditor.helpersLoaded) {
            return;
        }
        HpsuDashboardCardEditor.helpersLoaded = true;
        try {
            const cardHelpers = await window.loadCardHelpers();
            const entitiesCard = await cardHelpers.createCardElement({ type: "entities", entities: [] });
            await entitiesCard.constructor.getConfigElement();
        } catch (e) {
            HpsuDashboardCardEditor.helpersLoaded = false;
            console.error("Failed to load Home Assistant card helpers.", e);
        }
    }

    protected willUpdate(changedProperties: Map<PropertyKey, unknown>): void {
        if (changedProperties.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (languages as string[]).includes(lang) ? lang as Language : "en";
        }
    }

    protected render() {
        if (!this.config || this.svgItemConfig.length === 0) {
            return nothing;
        }

        const categories: Record<string, SVGItem[]> = {};
        let lastCategory: Category | undefined = this.svgItemConfig[0].category;

        if (lastCategory) {
            this.svgItemConfig.forEach(item => {
                lastCategory = item.category ?? lastCategory;
                const category = lastCategory![this.language];

                if (!categories[category]) {
                    categories[category] = [];
                }
                categories[category].push(item);
            });
        }

        const texts = text_map[this.language];
        return html`
            <div class="card-config">
                <ha-expansion-panel
                    .header=${"HPSU Devices"}
                >
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{ device: {} }}
                        .value=${this.config.canDevice}
                        @value-changed=${this._entityChanged}
                        id="can-device-selector"
                        .placeholder=${texts.selectCanDevice}>
                    </ha-selector>
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{ device: {} }}
                        .value=${this.config.uartDevice}
                        @value-changed=${this._entityChanged}
                        id="uart-device-selector"
                        .placeholder=${texts.selectUartDevice}>
                    </ha-selector>
                </ha-expansion-panel>
                ${Object.keys(categories).map(category => html`
                    <ha-expansion-panel
                        .header=${category}
                    >
                        ${categories[category].map(svg_item => html`
                            <ha-selector
                                .hass=${this.hass}
                                .selector=${{
                                    entity: {
                                        include_entities: this.getRelevantEntityIds(svg_item)
                                    }
                                }}
                                .placeholder=${svg_item.texts[this.language]?.desc || "<missing>"}
                                .value=${svg_item.entityId}
                                @value-changed=${this._entityChanged}
                                data-id=${svg_item.id}
                            >
                            </ha-selector>
                        `)}
                    </ha-expansion-panel>
                `)}
            </div>
        `;
    }

    private getRelevantEntityIds(svg_item: SVGItem): string[] {
        const relevantEntityIds: string[] = [];

        const targetDeviceId = svg_item.device === "UART" ? this.config.uartDevice : this.config.canDevice;
        const targetUnit = ensureArray(svg_item.unit);

        for (const entityId in this.hass.states) {
            if (!Object.prototype.hasOwnProperty.call(this.hass.states, entityId)) {
                continue;
            }

            const entity = this.hass.states[entityId];
            const domain = entityId.substring(0, entityId.indexOf('.'));

            if (svg_item.device && targetDeviceId) {
                const entityRegistryEntry = this.hass.entities[entityId];

                if (!entityRegistryEntry || entityRegistryEntry.device_id !== targetDeviceId) {
                    continue;
                }
            }

            if (svg_item.domain !== undefined && svg_item.domain !== domain) {
                continue;
            }

            if (domain !== "select") {
                const unitOfMeasurement = entity.attributes.unit_of_measurement;

                if (!targetUnit.includes(unitOfMeasurement)) {
                    continue;
                }
            }
            relevantEntityIds.push(entityId);
        }

        return relevantEntityIds;
    }

    private _entityChanged(event: CustomEvent<{ value: string }>): void {
        event.stopPropagation();
        const picker = event.target as HTMLElement;
        const updatedEntities = { ...this.config.entities } as Record<string, string>;

        let canDevice = this.config.canDevice;
        if (picker.id === "can-device-selector") {
            canDevice = event.detail.value;
        }

        let uartDevice = this.config.uartDevice;
        if (picker.id === "uart-device-selector") {
            uartDevice = event.detail.value;
        }

        const entityId = picker.getAttribute("data-id");
        if (entityId) {
            updatedEntities[entityId] = event.detail.value;
        }

        this.config = {
            ...this.config,
            canDevice: canDevice,
            uartDevice: uartDevice,
            entities: HpsuDashboardCardEditor.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig)
        };

        this.dispatchEvent(
            new CustomEvent('config-changed', {
                detail: { config: this.config },
                bubbles: true,
                composed: true,
            })
        );
    }

    private static sortRecordBySvgOrder(data: Record<string, string>, svgItems: SVGItem[]): Record<string, string> {
        const dataKeys = Object.keys(data);
        const sortedEntries: [string, string][] = svgItems
            .filter(item => dataKeys.includes(item.id))
            .map(item => [item.id, data[item.id]]);
        return Object.fromEntries(sortedEntries) as Record<string, string>;
    }

    static get styles() {
        return css`
            .card-config {
                display: flex;
                flex-direction: column;
                padding: 16px;
            }
            ha-selector, ha-device-picker, ha-entity-picker {
                margin: 5px;
                display: block;
            }
        `;
    }
}
