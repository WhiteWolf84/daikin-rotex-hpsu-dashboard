import {
    svg_item_config,
    SVGItem,
    Language,
    languages,
    text_map,
    no_error_states,
    state_abbreviations,
    validateConfig,
    HpsuDashboardConfig,
    TextAlign,
} from "./svg_item_config";
import { HpsuDashboardCardEditor } from "./editor";

import type { HomeAssistant } from "@ha/types";

import { html, LitElement, css, CSSResultGroup, nothing, TemplateResult } from "lit";
import { property, state } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { HassEntity } from "home-assistant-js-websocket";

declare global {
    interface HTMLElementTagNameMap {
        "hpsu-dashboard-card-editor": HpsuDashboardCardEditor;
    }
}

export enum DashboardState {
    Loading = 'loading',
    Ready = 'ready',
    Error = 'error',
}

export class HPSUDashboardCard extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    private config!: HpsuDashboardConfig;

    @state() private _state: DashboardState = DashboardState.Loading;
    @state() private language: Language = "en";
    @state() private svgContent: string | null = null;

    private svg_item_config: SVGItem[] = [];
    private clickHandlersAdded = false;

    public setConfig(config: HpsuDashboardConfig): void {
        this.config = validateConfig(config);
        this.svg_item_config = svg_item_config.map(svg_item => ({
            ...svg_item,
            entityId: this.config.entities?.[svg_item.id] ?? null
        }));
    }

    public static getConfigElement(): HpsuDashboardCardEditor {
        return document.createElement("hpsu-dashboard-card-editor");
    }

    public static getStubConfig(): Partial<HpsuDashboardConfig> {
        return { entities: {} };
    }

    public getCardSize(): number {
        return 12;
    }

    protected willUpdate(changed: Map<PropertyKey, unknown>): void {
        if (changed.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (languages as string[]).includes(lang) ? lang as Language : "en";
        }
    }

    protected async firstUpdated(): Promise<void> {
        await this.createDashboard();
    }

    private async createDashboard(): Promise<void> {
        const url = this.makeURL("hpsu.svg");
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch '${url}' (${response.status})`);
            }
            const rawSvgString = await response.text();
            const svgWithLabels = this.createSvgWithLabels(rawSvgString);
            if (!svgWithLabels) {
                throw new Error("The SVG was not parsed correctly.");
            }
            this.svgContent = svgWithLabels;
            this._state = DashboardState.Ready;
        } catch (e) {
            console.error(e);
            this.svgContent = null;
            this._state = DashboardState.Error;
        }
    }

    private addClickHandlers(): void {
        const setClickHandler = (elementId: string, getEntityId: () => string | null | undefined) => {
            const element = this.shadowRoot?.getElementById(elementId);
            if (element) {
                element.addEventListener("click", () => {
                    const entityId = getEntityId();
                    if (entityId) {
                        this.handleStateClick(entityId);
                    }
                });
                element.setAttribute("cursor", "pointer");
            }
        };

        this.svg_item_config.forEach(svg_item => {
            if (svg_item.valueBox) {
                const id = `${svg_item.valueBox.id}_text`;
                // Resolve the entity at click time, so reconfiguring the card
                // does not leave handlers pointing at stale entity ids.
                setClickHandler(id, () => this.findEntityIdById(svg_item.id));
            }
        });

        const pressureEqualization = () => this.findEntityIdById("pressure_equalization");
        setClickHandler("eev_arrow_left", pressureEqualization);
        setClickHandler("eev_arrow_right", pressureEqualization);
    }

    protected updated(): void {
        if (this.isPanelView()) {
            this.setAttribute('panel-view', '');
        } else {
            this.removeAttribute('panel-view');
        }

        if (this._state === DashboardState.Ready) {
            this.updateLabels();
            this.updateOpacity();
            this.updateDynamics();

            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }

    static styles: CSSResultGroup = css`
        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        /* ---- dynamic schema animations ------------------------------- */

        @keyframes hpsu-arrow-pulse {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 1; }
        }
        @keyframes hpsu-pump-pulse {
            0%, 100% { scale: 1; filter: brightness(1); }
            50% { scale: 1.06; filter: brightness(1.25); }
        }
        @keyframes hpsu-compressor-glow {
            0%, 100% { filter: brightness(1); }
            50% { filter: brightness(1.5) drop-shadow(0 0 8px #ffd24d); }
        }
        @keyframes hpsu-fan-flutter {
            0%, 100% { scale: 1 1; filter: brightness(1); }
            50% { scale: 0.88 1; filter: brightness(1.18); }
        }
        @keyframes hpsu-buh-glow {
            0%, 100% { filter: brightness(1) drop-shadow(0 0 2px #d4aa00); }
            50% { filter: brightness(1.6) drop-shadow(0 0 10px #ff9900); }
        }

        /* Smooth opacity changes for valve arrow groups. */
        #dhw-open-arrows, #dhw-closed-arrows,
        #bpv-open-arrows, #bpv-closed-arrows,
        [id^="Flow-Arrow-"] {
            transition: opacity 0.8s ease;
        }

        /* Marching flow arrows while water is flowing. */
        :host([flowing]) [id^="Flow-Arrow-"] {
            animation: hpsu-arrow-pulse var(--hpsu-flow-period, 1.5s) ease-in-out infinite;
        }
        :host([flowing]) #Flow-Arrow-2,
        :host([flowing]) #Flow-Arrow-6 { animation-delay: calc(var(--hpsu-flow-period, 1.5s) / -8 * 1); }
        :host([flowing]) #Flow-Arrow-3,
        :host([flowing]) #Flow-Arrow-7 { animation-delay: calc(var(--hpsu-flow-period, 1.5s) / -8 * 2); }
        :host([flowing]) #Flow-Arrow-4,
        :host([flowing]) #Flow-Arrow-8 { animation-delay: calc(var(--hpsu-flow-period, 1.5s) / -8 * 3); }

        /* Circulation pump pulses while running. */
        #g3 { transform-box: fill-box; transform-origin: center; }
        :host([pump-on]) #g3 {
            animation: hpsu-pump-pulse var(--hpsu-pump-period, 1.6s) ease-in-out infinite;
        }

        /* Compressor glows while running. */
        #compressor_on_off_group { transform-box: fill-box; transform-origin: center; }
        :host([compressor-on]) #compressor_on_off_group {
            animation: hpsu-compressor-glow 2.4s ease-in-out infinite;
        }

        /* Fan is drawn side-on: flutter instead of a rotation. */
        #fan { transform-box: fill-box; transform-origin: center; }
        :host([fan-on]) #fan {
            animation: hpsu-fan-flutter var(--hpsu-fan-period, 0.6s) ease-in-out infinite;
        }

        /* Backup heater rod glows while heating. */
        :host([buh-on]) #buh-rod {
            animation: hpsu-buh-glow 1.8s ease-in-out infinite;
        }

        /* EEV arrows pulse during pressure equalization. */
        :host([eev-on]) #eev_arrow_left,
        :host([eev-on]) #eev_arrow_right {
            animation: hpsu-arrow-pulse 1.2s ease-in-out infinite;
        }

        /* Mode/state labels fade smoothly between their signal colors. */
        #mode_of_operating_value_text,
        #operating_mode_value_text {
            transition: fill 0.8s ease;
        }

        /* DHW tank shifts from blue to red as it warms up. */
        #water-tank {
            filter: hue-rotate(var(--hpsu-tank-hue, 0deg));
            transition: filter 2s ease;
        }

        @media (prefers-reduced-motion: reduce) {
            :host [id^="Flow-Arrow-"], :host #g3, :host #fan,
            :host #compressor_on_off_group, :host #buh-rod,
            :host #eev_arrow_left, :host #eev_arrow_right {
                animation: none !important;
            }
        }

        /* --------------------------------------------------------------- */

        :host([panel-view]) {
            display: block;
            max-height: 100vh;
            overflow: auto;
        }

        :host([panel-view]) svg {
            display: block;
            width: calc(100vw - var(--mdc-drawer-width, 256px));
            max-height: 100vh;
            overflow: auto;
        }

        @media (min-width: 768px) {
            :host([panel-view]) svg {
                max-height: calc(100vh - var(--header-height, 64px));
            }
        }

        @media (max-width: 767px) {
            :host([panel-view]) svg {
                width: auto;
                height: calc(100vh - var(--header-height, 56px));
            }
        }
        `;

    protected render(): TemplateResult {
        switch (this._state) {
            case DashboardState.Error:
                return html`<ha-card>${text_map[this.language].errorLoading}</ha-card>`;
            case DashboardState.Ready:
                return html`
                    <hpsu-dashboard-card-container>
                        ${this.svgContent ? unsafeSVG(this.svgContent) : nothing}
                    </hpsu-dashboard-card-container>
                `;
            default:
                return html``;
        }
    }

    private createSvgWithLabels(svgString: string): string | null {
        if (!svgString) {
            return null;
        }

        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDoc.documentElement;

        if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
            console.error("The SVG was not parsed correctly.");
            return null;
        }

        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        (svgElement as unknown as SVGSVGElement).style.display = "block";

        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }

    private createStateLabels(svgDoc: Document): void {
        this.svg_item_config.forEach(svg_item => {
            svg_item.valueBox = svg_item.value_rect_id ? svgDoc.getElementById(svg_item.value_rect_id) : null;
            if (svg_item.valueBox) {
                const group = svg_item.valueBox.parentNode;
                if (group) {
                    svg_item.entityId = this.config.entities?.[svg_item.id] ?? null;

                    const valueText = this.createText(svg_item.valueBox);
                    svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;

                    if (svg_item.labelBox) {
                        const labelText = this.createText(svg_item.labelBox);
                        group.appendChild(labelText);

                        labelText.setAttribute("font-size", "35");
                        labelText.setAttribute("fill", "rgb(191, 191, 191)");

                        labelText.textContent = svg_item.texts[this.language]?.label ?? `${svg_item.id} <missing>`;
                        this.layoutText(labelText, svg_item.labelBox, "middle", 3);
                    }
                    group.appendChild(valueText);
                } else {
                    console.warn(`Rect with ID ${svg_item.value_rect_id} parent not found.`);
                }
            }
        });
    }

    private createText(box: Element): SVGTextElement {
        const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement.id = `${box.id}_text`;

        textElement.setAttribute("dominant-baseline", "middle");
        textElement.setAttribute("stroke-width", "1");

        const transform = box.getAttribute('transform');
        if (transform) {
            textElement.setAttribute("transform", transform);
        }
        return textElement;
    }

    private layoutText(text: Element, box: Element, align?: TextAlign, yOffset?: number): void {
        const xPos = parseFloat(box.getAttribute('x') ?? "0");
        const yPos = parseFloat(box.getAttribute('y') ?? "0");
        const width = parseFloat(box.getAttribute('width') ?? "0");
        const height = parseFloat(box.getAttribute('height') ?? "0");

        if (align === "left") {
            text.setAttribute("x", xPos.toString());
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", (xPos + width / 2).toString());
            text.setAttribute("text-anchor", "middle");
        }
        if (yOffset !== undefined) {
            text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
        }
    }

    private updateLabels(): void {
        if (!this.config || !this.svg_item_config.length) {
            return;
        }

        this.svg_item_config.forEach(svg_item => {
            const newState = svg_item.entityId ? this.hass.states[svg_item.entityId] : null;

            const parentBox = svg_item.parent ? this.shadowRoot?.getElementById(svg_item.parent) : null;
            if (parentBox) {
                parentBox.style.display = newState ? "block" : "none";
            }

            if (svg_item.valueBox) {
                const id = `${svg_item.valueBox.id}_text`;
                const valueText = this.shadowRoot?.getElementById(id);
                if (valueText) {
                    const fontSize: string = svg_item.fontSize || "56";

                    if (!newState) {
                        valueText.textContent = "N/D";
                        valueText.setAttribute("fill", "orange");
                        valueText.setAttribute("font-size", "30px");
                        valueText.setAttribute("display", svg_item.optional === true ? "none" : "block");
                    } else if (newState.state === "unknown" || newState.state === "unavailable") {
                        valueText.textContent = "N/A";
                        valueText.setAttribute("fill", "orange");
                        valueText.setAttribute("font-size", "30px");
                    } else {
                        valueText.setAttribute("font-size", fontSize);

                        if (this.isBooleanSensor(svg_item.entityId)) {
                            const lang_map = text_map[this.language];
                            valueText.textContent = newState.state === "on" ? lang_map.on : (
                                newState.state === "off" ? lang_map.off : "<invalid>"
                            );
                            valueText.setAttribute("fill", newState.state === "on" ? "yellow" : "silver");
                        } else {
                            let entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                            entityState = state_abbreviations[entityState] ?? entityState;

                            const suffix = svg_item.texts[this.language]?.suffix;
                            valueText.textContent = suffix ? suffix + entityState : entityState;

                            const isError = svg_item.id === "error_code"
                                && !no_error_states.includes(newState.state);
                            let fill = isError ? "red" : "silver";
                            if (svg_item.id === "mode_of_operating" || svg_item.id === "operating_mode") {
                                fill = this.getModeColor(newState.state) ?? "silver";
                            }
                            valueText.setAttribute("fill", fill);
                        }
                    }

                    this.layoutText(valueText, svg_item.valueBox, svg_item.align, svg_item.offset);
                } else {
                    console.warn(`Label not found for entity: ${svg_item.entityId}`);
                }
            }

            if (svg_item.id === "pressure_equalization") {
                const color = newState && newState.state === "on" ? '#00ff0080' : '#7f7f7f';
                this.setFill("eev_arrow_left", color);
                this.setFill("eev_arrow_right", color);
            } else if (svg_item.id === "buh_power") {
                const color = newState && this.isPositiveNumber(newState.state) ? '#d4aa00ff' : '#7f7f7f';
                this.setFill("buh-control", color);
            }
        });
    }

    /**
     * Maps a heat pump state/mode text (de/en/it) to a signal color so the
     * label itself shows at a glance what the system is doing.
     */
    private getModeColor(state: string): string | null {
        const s = state.toLowerCase();
        if (/abtau|defrost|sbrina/.test(s)) return "#9be8ff";
        if (/heiz|heat|riscal/.test(s)) return "#ff8a50";
        if (/kühl|kuehl|cool|raffr/.test(s)) return "#55c8ff";
        if (/warmwasser|hot water|dhw|acs|sanitar/.test(s)) return "#ffd24d";
        if (/standby|bereitschaft|aus|off|spento/.test(s)) return "#9e9e9e";
        if (/sommer|summer|estate/.test(s)) return "#d4e157";
        if (/absenk|reduc|riduz|nacht|night|nott/.test(s)) return "#b39ddb";
        if (/auto/.test(s)) return "#80cbc4";
        return null;
    }

    private setFill(elementId: string, color: string): void {
        this.shadowRoot?.getElementById(elementId)?.setAttribute('fill', color);
    }

    private updateOpacity(): void {
        if (!this.config) {
            return;
        }

        const dhwOpenArrows = this.shadowRoot?.getElementById("dhw-open-arrows");
        const dhwClosedArrows = this.shadowRoot?.getElementById("dhw-closed-arrows");
        const bpvOpenArrows = this.shadowRoot?.getElementById("bpv-open-arrows");
        const bpvClosedArrows = this.shadowRoot?.getElementById("bpv-closed-arrows");

        if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;

        const flowRate = this.getNumericState("flow_rate");
        const mixerState = this.getNumericState("mixer");
        const bpvState = this.getNumericState("bypass");

        dhwOpenArrows.style.opacity = (flowRate > 0 ? (mixerState / 100.0) : 0).toString();
        dhwClosedArrows.style.opacity = (flowRate > 0 ? ((100.0 - mixerState) / 100.0) : 0).toString();
        bpvOpenArrows.style.opacity = (flowRate > 0 ? (bpvState / 100.0) : 0).toString();
        bpvClosedArrows.style.opacity = (flowRate > 0 ? ((100.0 - bpvState) / 100.0) : 0).toString();

        for (let index = 1; index <= 8; ++index) {
            const arrow = this.shadowRoot?.getElementById(`Flow-Arrow-${index}`);
            if (arrow) {
                arrow.style.opacity = (flowRate > 0 ? 1 : 0).toString();
            }
        }
    }

    private getNumericState(itemId: string): number {
        const entityId = this.config.entities?.[itemId];
        const entity = entityId ? this.hass.states[entityId] : null;
        const value = entity ? parseFloat(entity.state) : NaN;
        return isNaN(value) ? 0 : value;
    }

    private getBinaryState(itemId: string): boolean {
        const entityId = this.config.entities?.[itemId];
        return entityId ? this.hass.states[entityId]?.state === "on" : false;
    }

    /**
     * Drives the CSS animations of the schema: pulsing flow arrows, pump,
     * compressor and backup heater activity, fan flutter and the tank color.
     * Animation speeds scale with the measured values.
     */
    private updateDynamics(): void {
        const clamp = (value: number, min: number, max: number) =>
            Math.min(max, Math.max(min, value));

        const flowRate = this.getNumericState("flow_rate");
        const compressorOn = this.getBinaryState("compressor_status");
        const pumpPercent = this.getNumericState("circulation_pump");
        const pumpOn = this.getBinaryState("circulation_pump_status") || pumpPercent > 0;
        const fanRpm = this.getNumericState("fan_speed");
        const fanOn = fanRpm > 0 || (!this.config.entities?.["fan_speed"] && compressorOn);
        const buhEntity = this.config.entities?.["buh_power"];
        const buhOn = buhEntity ? this.isPositiveNumber(this.hass.states[buhEntity]?.state) : false;
        const eevOn = this.getBinaryState("pressure_equalization");

        this.toggleAttribute("flowing", flowRate > 0);
        this.toggleAttribute("compressor-on", compressorOn);
        this.toggleAttribute("pump-on", pumpOn);
        this.toggleAttribute("fan-on", fanOn);
        this.toggleAttribute("buh-on", buhOn);
        this.toggleAttribute("eev-on", eevOn);

        // Faster water flow, fan or pump speed -> faster animation.
        const flowPeriod = flowRate > 0 ? clamp(1500 / flowRate, 0.5, 3) : 1.5;
        const fanPeriod = fanRpm > 0 ? clamp(400 / fanRpm, 0.2, 1.2) : 0.6;
        const pumpPeriod = pumpPercent > 0 ? clamp(120 / pumpPercent, 0.8, 3) : 1.6;
        this.style.setProperty("--hpsu-flow-period", `${flowPeriod.toFixed(2)}s`);
        this.style.setProperty("--hpsu-fan-period", `${fanPeriod.toFixed(2)}s`);
        this.style.setProperty("--hpsu-pump-period", `${pumpPeriod.toFixed(2)}s`);

        // DHW tank color relative to the configured DHW setpoint: blue when
        // far below it, red when reached. The hue rotates "the long way"
        // (blue -> cyan -> green -> yellow -> red, the classic thermal scale)
        // so intermediate temperatures never look pink/magenta.
        const tankTemp = this.getNumericState("storage_temperature");
        const setpointEntity = this.config.entities?.["storage_setpoint"];
        const setpoint = setpointEntity ? this.getNumericState("storage_setpoint") : 48;
        const range = 18;
        const warmth = tankTemp > 0 && setpoint > 0
            ? clamp((tankTemp - (setpoint - range)) / range, 0, 1)
            : 0;
        this.style.setProperty("--hpsu-tank-hue", `${Math.round(warmth * -215)}deg`);
    }

    private handleStateClick(entityId: string): void {
        this.dispatchEvent(
            new CustomEvent("hass-more-info", {
                detail: { entityId },
                bubbles: true,
                composed: true,
            })
        );
    }

    private makeURL(filename: string): string {
        const repoName = "daikin-rotex-hpsu-dashboard";
        const scriptElement = document.querySelector(`script[src*="/hacsfiles/${repoName}/"]`) as HTMLScriptElement | null;

        const scriptUrl = scriptElement?.src ?? "";
        const hacsTag = new URLSearchParams(scriptUrl.split("?")[1]).get("hacstag");

        if (hacsTag) {
            return `/hacsfiles/${repoName}/${filename}?hacstag=${hacsTag}`;
        } else {
            return `/local/${repoName}/dist/${filename}?v=${Date.now()}`;
        }
    }

    private isPanelView(): boolean {
        let node: Element | null | undefined = this;
        while (node) {
            if (node.tagName?.toLowerCase() === "hui-panel-view") {
                return true;
            }
            node = (node.getRootNode() as ShadowRoot)?.host;
        }
        return false;
    }

    private formatNumber(entity: HassEntity, digits: number): string {
        if (!entity || !entity.state) return "--";
        const number = Number(entity.state);
        if (isNaN(number)) return entity.state;
        const formatted = new Intl.NumberFormat(this.hass.language, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits,
        }).format(number);
        const suffix = entity.attributes?.unit_of_measurement;
        return suffix ? `${formatted} ${suffix}` : formatted;
    }

    private isBooleanSensor(entityId: string | null | undefined): boolean {
        return entityId?.startsWith("binary_sensor.") ?? false;
    }

    private isPositiveNumber(value: string | undefined): boolean {
        return !!value && !isNaN(Number(value)) && Number(value) > 0;
    }

    private findEntityIdById(id: string): string | null | undefined {
        return this.svg_item_config.find(item => item.id === id)?.entityId;
    }
}

customElements.define("hpsu-dashboard-card", HPSUDashboardCard);
customElements.define("hpsu-dashboard-card-editor", HpsuDashboardCardEditor);

interface CustomCardEntry {
    type: string;
    name: string;
    description: string;
    preview?: boolean;
    documentationURL?: string;
}

declare global {
    interface Window {
        customCards?: CustomCardEntry[];
    }
}

window.customCards = window.customCards || [];
window.customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true,
    documentationURL: "https://github.com/wrfz/daikin-rotex-hpsu-dashboard",
});
