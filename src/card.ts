import {
    svg_item_config,
    SVGItem,
    Language,
    isLanguage,
    text_map,
    no_error_states,
    state_abbreviations,
    resolveId,
    validateConfig,
    layoutFile,
} from "./svg_item_config";
import { HpsuDashboardCardEditor } from "./editor";

import type { LovelaceCardConfig } from "@ha/data/lovelace/config/card";
import type { HomeAssistant } from "@ha/types";

import { html, LitElement, css, CSSResultGroup, nothing, TemplateResult } from "lit";
import { property, query, state } from "lit/decorators.js";
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

type NodeProcessor = (child: Element, parent: SVGGElement | SVGSVGElement) => boolean;

export class HPSUDashboardCard extends LitElement {
    @property({ attribute: false }) public hass!: HomeAssistant;
    private config!: LovelaceCardConfig;

    @state() private _state: DashboardState = DashboardState.Loading;
    @state() private language: Language = "en";
    @state() private svgContent: string | null = null;

    private svg_item_config: SVGItem[] = [];
    private clickHandlersAdded = false;
    private loadedLayoutFile: string | null = null;
    private loadedStyleSignature: string | null = null;
    // Optional box/text styling provided by the SVG layout itself (data-* attributes on the <svg> root).
    private layoutStyle: { radius?: string; fill?: string; stroke?: string; strokeWidth?: string; text?: string; label?: string; ownStates?: boolean } = {};

    @query('ha-card')
    private haCardElement!: HTMLElement;

    public setConfig(config: LovelaceCardConfig) {
        this.config = validateConfig(config);
        this.svg_item_config = svg_item_config.map(svg_item => ({
            ...svg_item,
            values: svg_item.values.map(value => ({
                ...value,
                entityId: this.config.entities?.[value.id] || null
            }))
        }));
        this.updateLanguage();

        if (this.hasUpdated && this._state === DashboardState.Ready) {
            this.updateAnimations();
        }

        // Layout switched while the card is already shown (e.g. in the card editor): reload the SVG.
        if (this.hasUpdated && this.loadedLayoutFile !== null && (layoutFile(this.config.layout) !== this.loadedLayoutFile || this.styleSignature() !== this.loadedStyleSignature)) {
            this.clickHandlersAdded = false;
            this._state = DashboardState.Loading;
            this.svgContent = null;
            void this.updateComplete.then(() => this.createDashboard());
        }
    }

    public static getStubConfig(): Partial<LovelaceCardConfig> {
        return { entities: {} };
    }

    public getCardSize(): number {
        return 12;
    }

    protected willUpdate(changed: Map<PropertyKey, unknown>): void {
        if (changed.has("hass")) {
            this.updateLanguage();
        }
    }

    // The config language wins over the Home Assistant language; unsupported languages fall back to English.
    private updateLanguage(): void {
        const configLang = this.config?.language as string | undefined;
        const lang = configLang || this.hass?.language?.split("-")[0];
        this.language = isLanguage(lang) ? lang : "en";
    }

    protected async firstUpdated(): Promise<void> {
        await this.createDashboard();
    }

    private async createDashboard(): Promise<void> {
        const file = layoutFile(this.config?.layout);
        const url = this.makeURL(file);
        try {
            const response = await fetch(url, { cache: "no-cache" }); // always revalidate, layouts are updated independently of the JS
            if (!response.ok) {
                throw new Error(`Failed to fetch '${url}' (${response.status})`);
            }
            const rawSvgString = await response.text();
            this.loadedLayoutFile = file;
            this.loadedStyleSignature = this.styleSignature();
            const svgWithLabels = this.createSvgWithLabels(rawSvgString);
            if (!svgWithLabels) {
                throw new Error("The SVG was not parsed correctly.");
            }
            this.svgContent = svgWithLabels;
            this._state = DashboardState.Ready;
        } catch (e) {
            console.error(e);
            this.svgContent = null;
            // show an error instead of an empty card that keeps "loading"
            this._state = DashboardState.Error;
        }
    }

    private addClickHandlers(): void {
        // The entity is resolved at click time, so reconfiguring the card
        // does not leave handlers pointing at stale entity ids.
        const setClickHandler = (elementId: string, valueId: string) => {
            const element = this.shadowRoot!.getElementById(elementId);
            if (element) {
                element.addEventListener("click", () => {
                    const entityId = this.findEntityIdById(valueId);
                    if (entityId) {
                        this.handleStateClick(entityId);
                    }
                });
                element.setAttribute("cursor", "pointer");
            }
        };

        this.svg_item_config.forEach(svg_item => {
            svg_item.values.forEach(value_item => {
                if (value_item.valueBox) {
                    setClickHandler(`${value_item.valueBox.id}_text`, value_item.id);
                }
            });
        });

        // Layouts without status texts show on/off on the symbol itself; clicking it opens the details.
        setClickHandler("compressor-symbol", "compressor_status");
        setClickHandler("pump-symbol", "circulation_pump_status");
        setClickHandler("eev-symbol", "pressure_equalization");
    }

    protected updated(changedProperties: Map<string | number | symbol, unknown>): void {
        if (this.isPanelView()) {
            this.setAttribute('panel-view', '');
        } else {
            this.removeAttribute('panel-view');
        }

        if (this._state == DashboardState.Ready) {
            this.updateLabels();
            this.updateOpacity();
            this.updateAnimations();
            this.updateDynamicStyle();

            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }

    protected static getConfigElement(): HpsuDashboardCardEditor {
        return document.createElement("hpsu-dashboard-card-editor");
    }


    static styles: CSSResultGroup = css`
        .card-config {
            display: flex;
            flex-direction: column;
            padding: 16px;
        }
        h2 {
            font-size: 20px;
            margin-bottom: 16px;
        }
        paper-input {
            margin-bottom: 16px;
        }

        svg {
            display: block;
            width: 100%;
            height: 100%;
        }

        /* heat pump state, operating mode and COP fade between their signal colours */
        text[data-signal] {
            transition: fill 0.8s ease;
        }

        @media (prefers-reduced-motion: reduce) {
            svg * {
                animation-play-state: paused !important;
            }
        }

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
        return this.renderContent();
    }

    private renderContent(): TemplateResult {
        switch (this._state) {
            case DashboardState.Error:
                return html`<ha-card>${text_map[this.language].errorLoading}</ha-card>`;
            case DashboardState.Ready:
                return html`<ha-card>${this.svgContent ? unsafeSVG(this.svgContent) : nothing}</ha-card>`;
            default:
                return html`<ha-card></ha-card>`;
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

        this.layoutStyle = {
            radius: svgElement.getAttribute("data-box-radius") ?? undefined,
            fill: svgElement.getAttribute("data-box-fill") ?? undefined,
            stroke: svgElement.getAttribute("data-box-stroke") ?? undefined,
            strokeWidth: svgElement.getAttribute("data-box-stroke-width") ?? undefined,
            text: svgElement.getAttribute("data-text-color") ?? undefined,
            label: svgElement.getAttribute("data-label-color") ?? undefined,
            // the SVG styles the states itself (CSS on [data-state]); the card only sets the state
            ownStates: svgElement.hasAttribute("data-own-state-style"),
        };

        this.applyStyleOverrides(svgElement);

        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";

        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }

    // Style overrides from the card config (editor tab "appearance"). They only replace single values of the
    // layout; the defaults and the look stay in the SVG.
    private styleSignature(): string {
        const c = this.config ?? ({} as LovelaceCardConfig);
        return JSON.stringify([c.background, c.box, c.text]);
    }

    private parseColor(value: string | undefined): number[] | undefined {
        if (!value) return undefined;
        const hex = value.trim().match(/^#([0-9a-f]{3,8})$/i);
        if (hex) {
            let h = hex[1];
            if (h.length === 3 || h.length === 4) h = h.split("").map(x => x + x).join("");
            const n = parseInt(h.slice(0, 6), 16);
            return [(n >> 16) & 255, (n >> 8) & 255, n & 255, h.length === 8 ? parseInt(h.slice(6, 8), 16) / 255 : 1];
        }
        const m = value.match(/rgba?\(([^)]+)\)/);
        if (m) {
            const p = m[1].split(",").map(x => parseFloat(x));
            return [p[0], p[1], p[2], p[3] ?? 1];
        }
        return undefined;
    }

    // colour from the config (or the layout's own colour if only the opacity is set) with the opacity applied
    private composeColor(color: unknown, opacity: number | undefined, base: string | undefined): string | undefined {
        if (color === undefined && opacity === undefined) return undefined;
        const own = Array.isArray(color) && color.length >= 3 ? color.map(Number) : undefined;
        const fallback = this.parseColor(base);
        const rgb = own ?? fallback?.slice(0, 3);
        if (!rgb) return undefined;
        const alpha = opacity !== undefined ? Math.min(100, Math.max(0, Number(opacity))) / 100 : (own ? 1 : (fallback?.[3] ?? 1));
        return alpha >= 1 ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
    }

    private applyStyleOverrides(svgElement: Element): void {
        const cfg = this.config ?? ({} as LovelaceCardConfig);

        if (cfg.box) {
            const fill = this.composeColor(cfg.box.fill, cfg.box.fill_opacity, this.layoutStyle.fill);
            const border = this.composeColor(cfg.box.border, cfg.box.border_opacity, this.layoutStyle.stroke);
            if (fill) this.layoutStyle.fill = fill;
            if (border) this.layoutStyle.stroke = border;
        }
        if (cfg.text) {
            const value = this.composeColor(cfg.text.value_color, undefined, undefined);
            const label = this.composeColor(cfg.text.label_color, undefined, undefined);
            if (value) this.layoutStyle.text = value;
            if (label) this.layoutStyle.label = label;
        }

        // background: the SVG draws it from --bg-color / --bg-opacity (with its own defaults)
        const style = (svgElement as SVGElement).style;
        if (cfg.background?.show === false) {
            svgElement.setAttribute("data-bg", "off");
        } else if (cfg.background) {
            const color = this.composeColor(cfg.background.color, undefined, undefined);
            if (color) style.setProperty("--bg-color", color);
            if (cfg.background.opacity !== undefined) {
                style.setProperty("--bg-opacity", String(Math.min(100, Math.max(0, Number(cfg.background.opacity))) / 100));
            }
        }
    }

    private strToFloat(str: string): number {
        if (str === "" || str === undefined || str === null || str.trim() === "") {
            return 0;
        }
        return parseFloat(str);
    }

    private createStateLabels(svgDoc: Document): void {
        const haCard = this.haCardElement;
        if (!haCard) {
            return;
        }

        let style = getComputedStyle(haCard);
        let rootStyle = getComputedStyle(document.body); // Oder document.documentElement

        let backgroundColor = style.getPropertyValue('--ha-card-background').trim();

        let borderColor = style.getPropertyValue('--ha-card-border-color').trim();
        if (borderColor === "") {
            borderColor = style.getPropertyValue('--divider-color').trim();
        }
        if (borderColor === "") {
            borderColor = '#000000ff';
        }

        let borderWidth = style.getPropertyValue('--ha-card-border-width').trim();
        let globalWidth = rootStyle.getPropertyValue('--ha-card-border-width').trim();
        console.log("global-width: " + globalWidth + ", " + this.strToFloat(borderWidth) + "|" + borderWidth);
        if (this.strToFloat(borderWidth) === 0) {
            if (backgroundColor === "") {
                borderWidth = "5px";
            } else {
                borderWidth = "0px";
            }
        }
        if (backgroundColor === "") {
            backgroundColor = "none";
        }

        //const borderWidth = "5px";
        let borderRadius = style.getPropertyValue('--ha-card-border-radius').trim();
        /*if (parseFloat(borderRadius) === 0) {
            let rootStyle = getComputedStyle(document.body); // Oder document.documentElement
            let globalRadius = rootStyle.getPropertyValue('--ha-card-border-radius').trim();
            borderRadius = "10px"; //globalRadius;
        }*/

        const secondaryTextColor = this.layoutStyle.label ?? (style.getPropertyValue('--secondary-text-color').trim() || '#808080');

        console.log("bg-color:" + backgroundColor + "|radius: " + borderRadius + "|border-color: " + borderColor + "|border-width:" + borderWidth);

        // A layout may bring its own box style (rounded corners, colours); it wins over the HA theme.
        if (this.layoutStyle.radius !== undefined) borderRadius = this.layoutStyle.radius;
        if (this.layoutStyle.fill !== undefined) backgroundColor = this.layoutStyle.fill;
        if (this.layoutStyle.stroke !== undefined) borderColor = this.layoutStyle.stroke;
        if (this.layoutStyle.strokeWidth !== undefined) borderWidth = this.layoutStyle.strokeWidth;

        let currentBackgroundColor = backgroundColor;

        this.svg_item_config.forEach(svg_item => {
            const group = svgDoc.getElementById(svg_item.group_id ?? "") as SVGGElement | null;

            svg_item.labelBox = svg_item.label_rect_id ? svgDoc.getElementById(svg_item.label_rect_id) : null;

            // Create label text

            if (group && svg_item.labelBox) {
                svg_item.labelBox.setAttribute("fill", backgroundColor);
                svg_item.labelBox.setAttribute("stroke", borderColor);
                svg_item.labelBox.setAttribute("stroke-width", borderWidth);
                svg_item.labelBox.setAttribute("rx", borderRadius);
                svg_item.labelBox.setAttribute("ry", borderRadius);

                const labelText = this.createText(svg_item.labelBox);
                group.appendChild(labelText);

                labelText.setAttribute("font-size", "35");
                labelText.setAttribute("fill", secondaryTextColor);

                labelText.textContent = svg_item.texts?.[this.language]?.label ?? `${svg_item.group_id} <missing>`;
                this.layoutText(labelText, svg_item.labelBox, "middle", 3);
            }

            // Create parent rect with round corners

            var roundCorners = this.strToFloat(borderRadius) > 0;

            if (svg_item.visual_container && group && roundCorners) {
                const bbox = this.getBBox(group);

                const parent_box = this.createRect(svg_item.group_id);
                parent_box.setAttribute("x", bbox.x.toString());
                parent_box.setAttribute("y", bbox.y.toString());
                parent_box.setAttribute("width", bbox.width.toString());
                parent_box.setAttribute("height", bbox.height.toString());
                parent_box.setAttribute("fill", backgroundColor);
                parent_box.setAttribute("stroke", borderColor);
                parent_box.setAttribute("stroke-width", borderWidth);
                parent_box.setAttribute("rx", borderRadius);
                parent_box.setAttribute("ry", borderRadius);
                group.insertBefore(parent_box, group.firstChild);

                currentBackgroundColor = "none";
            }

            const hadLabel = !!svg_item.labelBox;
            if (roundCorners && svg_item.labelBox) {
                this.removeSVGElement(svg_item.labelBox);
            }
            // With a layout-owned rounded container the single frame is drawn by the container;
            // inner value boxes get no stroke of their own, only a thin divider line on top.
            const ownFrame = this.layoutStyle.radius !== undefined && currentBackgroundColor === "none";

            // Create value texts

            svg_item.values.forEach(value_item => {
                value_item.valueBox = svgDoc.getElementById(value_item.value_rect_id ?? "");
                if (value_item.valueBox) {
                    let currentBorderColor = borderColor;
                    value_item.valueBox.setAttribute("fill", currentBackgroundColor);
                    value_item.valueBox.setAttribute("stroke", ownFrame ? "none" : currentBorderColor);
                    value_item.valueBox.setAttribute("stroke-width", borderWidth);
                    //svg_item.valueBox.setAttribute("rx", borderRadius);
                    //svg_item.valueBox.setAttribute("ry", borderRadius);

                    if (group && ownFrame && !value_item.optional && (hadLabel || svg_item.values.indexOf(value_item) > 0)) {
                        const box = value_item.valueBox;
                        const bx = this.strToFloat(box.getAttribute("x") ?? "");
                        const by = this.strToFloat(box.getAttribute("y") ?? "");
                        const bw = this.strToFloat(box.getAttribute("width") ?? "");
                        const divider = document.createElementNS("http://www.w3.org/2000/svg", "line");
                        divider.setAttribute("x1", bx.toString());
                        divider.setAttribute("x2", (bx + bw).toString());
                        divider.setAttribute("y1", by.toString());
                        divider.setAttribute("y2", by.toString());
                        divider.setAttribute("stroke", borderColor);
                        divider.setAttribute("stroke-width", "1.5");
                        divider.setAttribute("stroke-opacity", "0.6");
                        const boxTransform = box.getAttribute("transform");
                        if (boxTransform) {
                            divider.setAttribute("transform", boxTransform);
                        }
                        group.appendChild(divider);
                    }

                    if (group) {
                        value_item.entityId = this.config.entities?.[value_item.id] ?? null;
                        const valueText = this.createText(value_item.valueBox);
                        group.appendChild(valueText);
                    } else {
                        console.warn(`Rect with ID ${value_item.value_rect_id} parent not found.`);
                    }
                }
            });
        });
    }

    private removeSVGElement(childElement: SVGElement): void {
        const parentElement: Element = childElement.parentElement!;

        if (parentElement) {
            parentElement.removeChild(childElement);
        }
    }

    private getBBox(group: SVGGElement): DOMRect {
        const clonedGroup = group.cloneNode(true) as SVGGElement;

        const cleanupCallback: NodeProcessor = (child, parent) => {
            const tagName = child.tagName.toLowerCase();
            if (tagName === 'path') {
                parent.removeChild(child);
                return true;
            }

            if (tagName === 'rect') {
                child.setAttribute('fill', 'rgba(0, 0, 0, 0.01)');
            }

            return false;
        };

        this.processNode(clonedGroup, cleanupCallback);

        const tempSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        tempSvg.style.cssText = `
            position: absolute;
            opacity: 0;
            pointer-events: none;
            width: 0;
            height: 0;
            overflow: hidden;
        `;

        tempSvg.appendChild(clonedGroup);
        this.shadowRoot!.appendChild(tempSvg);

        try {
            return clonedGroup.getBBox();
        } finally {
            this.shadowRoot!.removeChild(tempSvg);
        }
    }

    private processNode(node: SVGGElement | SVGSVGElement, callback: NodeProcessor): void {
        for (let i = node.children.length - 1; i >= 0; i--) {
            const child = node.children[i];
            if (child.tagName.toLowerCase() === 'g') {
                this.processNode(child as SVGGElement, callback);
            } else {
                const wasRemoved = callback(child, node);
                if (wasRemoved) {
                    continue;
                }
            }
        }
    }

    private createText(box: SVGTextElement): SVGTextElement {
        const textText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textText.id = `${box.id}_text`;

        textText.setAttribute("dominant-baseline", "middle");
        textText.setAttribute("stroke-width", "1");

        const transform = box.getAttribute('transform');
        if (transform) {
            textText.setAttribute("transform", transform);
        }
        return textText;
    }

    private createRect(group_id: string): SVGRectElement {
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.id = `${group_id}_rect`;
        return rect;
    }

    private layoutText(text: Element, box: Element, align: string | null | undefined, yOffset: number | undefined): void {
        const xPos = parseFloat(box.getAttribute('x') ?? "");
        const yPos = parseFloat(box.getAttribute('y') ?? "");
        const width = parseFloat(box.getAttribute('width') ?? "");
        const height = parseFloat(box.getAttribute('height') ?? "");

        if (align == "left") {
            text.setAttribute("x", xPos.toString());
            text.setAttribute("text-anchor", "start");
        } else {
            text.setAttribute("x", (xPos + width / 2).toString());
            text.setAttribute("text-anchor", "middle");
        }
        if (yOffset != undefined) {
            text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
        }
    }

    private updateLabels(): void {
        const haCard = this.haCardElement;
        if (!haCard) {
            return;
        }

        if (this.config) {
            if (this.svg_item_config) {
                let style = getComputedStyle(haCard);

                const primaryTextColor = this.layoutStyle.text ?? (style.getPropertyValue('--primary-text-color').trim() || 'black');

                this.svg_item_config.forEach(svg_item => {
                        svg_item.values.forEach(value_item => {
                            const newState = value_item.entityId ? this.hass.states[value_item.entityId] : null;

                            const parentBox = svg_item.parent ? this.shadowRoot!.getElementById(svg_item.parent) : null;
                            if (parentBox) {
                                parentBox.style.display = newState ? "block" : "none";
                            }

                            // optional value without entity: do not leave an empty box behind.
                            // value_item.valueBox belongs to the parsed SVG document, so look up the live element.
                            const liveBox = value_item.optional === true && value_item.value_rect_id
                                ? this.shadowRoot!.getElementById(value_item.value_rect_id)
                                : null;
                            if (liveBox) {
                                liveBox.style.display = newState ? "" : "none";
                            }

                            const id = `${value_item.value_rect_id}_text`;
                            const valueText = this.shadowRoot!.querySelector(`#${id}`) as HTMLElement;

                            if (valueText) {
                                const fontSize: string = svg_item.fontSize || "56";

                                if (!newState) {
                                    valueText.textContent = "N/D";
                                    this.textState(valueText, "na", { "fill": "orange", "font-size": "30px" });
                                    valueText.setAttribute("display", value_item.optional === true ? "none" : "block");
                                } else if (newState.state == "unknown" || newState.state == "unavailable") {
                                    valueText.textContent = "N/A";
                                    this.textState(valueText, "unavailable", { "fill": "orange", "font-size": "30px" });
                                } else {
                                    let entityState = newState.state || "--";
                                    valueText.setAttribute("font-size", fontSize);

                                    if (this.isBooleanSensor(value_item.entityId)) {
                                        const lang_map = text_map[this.language];
                                        valueText.textContent = entityState === "on" ? lang_map.on : (
                                            entityState === "off" ? lang_map.off : "<invalid>"
                                        );
                                        this.textState(valueText, entityState === "on" ? "on" : "off", { "fill": entityState === "on" ? "yellow" : "silver" });
                                    } else {
                                        entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                                        entityState = state_abbreviations[entityState] ?? entityState;
                                        const suffix = value_item.texts[this.language]?.suffix;
                                        valueText.textContent = suffix ? suffix + entityState : entityState;

                                        // the integration localizes states independently of the dashboard
                                        // language, so the "no error" texts of all languages are accepted
                                        if (value_item.id === "error_code" && !no_error_states.includes(newState.state)) {
                                            this.textState(valueText, "error", { "fill": "red" });
                                        } else {
                                            // heat pump state, operating mode and COP show what the system is doing
                                            let signal: string | null = null;
                                            if (value_item.id === "mode_of_operating" || value_item.id === "operating_mode") {
                                                signal = this.getModeColor(newState.state);
                                            } else if (value_item.id === "cop") {
                                                signal = this.getCopColor(parseFloat(newState.state));
                                            }
                                            valueText.toggleAttribute("data-signal", signal !== null);
                                            this.textState(valueText, "normal", { "fill": signal ? this.readableOnBox(signal) : primaryTextColor });
                                        }
                                    }
                                }

                                this.layoutText(valueText, value_item.valueBox, value_item.valueBox.getAttribute("data-align") ?? svg_item.align, svg_item.offset);
                            } else if (value_item.value_rect_id) {
                                console.warn("Value text not found: " + value_item.entityId);
                            }
                        });
                });

            }
        }
    }

    // Sets the semantic state of a value text. Layouts that style the states themselves (data-own-state-style)
    // only get the state; other (custom) SVGs get inline colours.
    private textState(el: HTMLElement, state: string, fallback: Record<string, string>): void {
        el.setAttribute("data-state", state);
        if (!this.layoutStyle.ownStates || state === "normal") {
            for (const [name, value] of Object.entries(fallback)) {
                el.setAttribute(name, value);
            }
        }
    }

    /**
     * Maps a heat pump state/mode text (de/en/it) to a signal colour so the
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

    /**
     * Colours the COP according to real-world air/water heat pump efficiency:
     * below ~2 is poor, around 3 is average for an A2/W35-45 machine, 4+ is
     * good and 5+ excellent. A COP of 0 (compressor off) stays neutral.
     */
    private getCopColor(cop: number): string | null {
        if (!isFinite(cop) || cop <= 0) return null;
        if (cop < 2) return "#ff5252";
        if (cop < 2.5) return "#ff8a50";
        if (cop < 3) return "#ffb74d";
        if (cop < 3.5) return "#ffd54f";
        if (cop < 4) return "#d4e157";
        if (cop < 5) return "#9ccc65";
        return "#4caf50";
    }

    // The signal colours are tuned for dark boxes; on light boxes (e.g. "glass, light") they are darkened to stay readable.
    private readableOnBox(color: string): string {
        const box = this.parseColor(this.layoutStyle.fill);
        const rgb = this.parseColor(color);
        if (!box || !rgb) return color;
        const luminance = (0.2126 * box[0] + 0.7152 * box[1] + 0.0722 * box[2]) / 255;
        if (luminance < 0.6) return color;
        const k = 0.55;
        return `rgb(${Math.round(rgb[0] * k)},${Math.round(rgb[1] * k)},${Math.round(rgb[2] * k)})`;
    }

    // Everything that depends on the look is described by the SVG itself:
    //   data-run-map   {elementId: {entity, mode: "on" | "gt0"}}  -> the card sets data-state="on|off|unknown" on that element
    //   data-temp-vars {--k-name: {entity: [ids], min, max}}      -> the card sets --k-name (0..1) on the <svg>
    // How "on", "off" or a value looks (colours, paused animations) is defined by CSS inside the SVG.
    private updateDynamicStyle(): void {
        const svg = this.shadowRoot?.querySelector("ha-card svg") as SVGSVGElement | null;
        if (!svg || !this.config || !this.hass) return;

        const parse = (attr: string): Record<string, any> => {
            try { return JSON.parse(svg.getAttribute(attr) ?? "{}"); } catch { return {}; }
        };
        // keys may still be the legacy German ids in custom layouts
        const stateOf = (key: string): string | undefined => {
            const entityId = this.config.entities?.[resolveId(key)];
            return entityId ? this.hass.states[entityId]?.state : undefined;
        };
        // a bound is a number or {entity, offset, fallback}, e.g. relative to the DHW setpoint
        const bound = (b: any): number => {
            if (typeof b === "number") return b;
            const value = parseFloat(stateOf(b?.entity) ?? "");
            return Number.isFinite(value) ? value + (b.offset ?? 0) : b?.fallback;
        };

        for (const [id, rule] of Object.entries(parse("data-run-map"))) {
            const element = this.shadowRoot!.getElementById(id);
            if (!element) continue;
            const state = stateOf(rule.entity);
            let result = "unknown";
            if (state !== undefined && state !== "unknown" && state !== "unavailable") {
                result = (rule.mode === "gt0" ? parseFloat(state) > 0 : state === "on") ? "on" : "off";
            }
            element.setAttribute("data-state", result);
        }

        for (const [name, rule] of Object.entries(parse("data-temp-vars"))) {
            let value = NaN;
            for (const key of (Array.isArray(rule.entity) ? rule.entity : [rule.entity])) {
                const candidate = parseFloat(stateOf(key) ?? "");
                if (Number.isFinite(candidate)) { value = candidate; break; }
            }
            const min = bound(rule.min);
            const max = bound(rule.max);
            if (Number.isFinite(value) && Number.isFinite(min) && Number.isFinite(max) && max !== min) {
                const k = Math.min(1, Math.max(0, (value - min) / (max - min)));
                svg.style.setProperty(name, k.toFixed(3));
            } else {
                svg.style.removeProperty(name); // the SVG falls back to its own default
            }
        }
    }

    // "animations: false" freezes everything; how is defined by the SVG (svg[data-animations="off"])
    private updateAnimations(): void {
        const svg = this.shadowRoot?.querySelector("ha-card svg");
        if (!svg) return;
        svg.setAttribute("data-animations", this.config?.animations === false ? "off" : "on");
    }

    private updateOpacity(): void {
        if (this.config) {
            const dhwOpenArrows = this.shadowRoot!.querySelector(`#dhw-open-arrows`) as HTMLElement;
            const dhwClosedArrows = this.shadowRoot!.querySelector(`#dhw-closed-arrows`) as HTMLElement;
            const bpvOpenArrows = this.shadowRoot!.querySelector(`#bpv-open-arrows`) as HTMLElement;
            const bpvClosedArrows = this.shadowRoot!.querySelector(`#bpv-closed-arrows`) as HTMLElement;

            const mixerEntity = this.config.entities?.['mixer'] ?? null;
            const bypassEntity = this.config.entities?.['bypass'] ?? null;
            // valve flaps (layouts with T-piece valves): angle follows the percentage
            const setFlap = (id: string, entity: string | null) => {
                const flap = this.shadowRoot!.getElementById(id);
                if (!flap) return;
                const raw = entity && this.hass.states[entity] ? parseFloat(this.hass.states[entity].state) : 0;
                const share = Math.min(1, Math.max(0, Number.isFinite(raw) ? raw / 100 : 0));
                const [px, py] = (flap.getAttribute("data-pivot") ?? "0 0").split(" ");
                const a0 = parseFloat(flap.getAttribute("data-a0") ?? "0");
                const a1 = parseFloat(flap.getAttribute("data-a1") ?? "0");
                flap.setAttribute("transform", `rotate(${a0 + (a1 - a0) * share} ${px} ${py})`);
            };
            setFlap("dhw-flap", mixerEntity);
            setFlap("bpv-flap", bypassEntity);

            if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;

            const mixer_id = this.config.entities?.['mixer'] ?? null;
            const bypass_id = this.config.entities?.['bypass'] ?? null;

            const mischerState = mixer_id && this.hass.states[mixer_id] ? parseFloat(this.hass.states[mixer_id].state) : 0;
            const bpvState = bypass_id && this.hass.states[bypass_id] ? parseFloat(this.hass.states[bypass_id].state) : 0;

            dhwOpenArrows.style.opacity = (mischerState / 100.0).toString();
            dhwClosedArrows.style.opacity = ((100.0 - mischerState) / 100.0).toString();
            bpvOpenArrows.style.opacity = (bpvState / 100.0).toString();
            bpvClosedArrows.style.opacity = ((100.0 - bpvState) / 100.0).toString();
        }
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
        // Resolve next to this card's own script, independent of install location
        // (/hacsfiles/, /local/, /local/community/, ...).
        // Not import.meta.url: Parcel inlines it as "file:///src/card.ts".
        const scriptName = "hpsu-dashboard-card.js";
        const scriptEl = Array.from(document.querySelectorAll<HTMLScriptElement>("script[src]"))
            .find((s) => new URL(s.src, document.baseURI).pathname.endsWith(`/${scriptName}`));
        const scriptUrl =
            scriptEl?.src ??
            performance
                .getEntriesByType("resource")
                .map((e) => e.name)
                .find((n) => new URL(n, document.baseURI).pathname.endsWith(`/${scriptName}`));

        if (!scriptUrl) {
            console.warn(`hpsu-dashboard-card: cannot locate ${scriptName}, using default path`);
            return `/local/community/daikin-rotex-hpsu-dashboard/${filename}`;
        }

        const url = new URL(filename, scriptUrl);
        // Reuse the script's own query string (hacstag / v=...) as cache key.
        url.search = new URL(scriptUrl).search;
        return url.href;
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
        const suffix = entity.attributes?.unit_of_measurement
        return suffix ? `${formatted} ${suffix}` : formatted;
    }

    private isBooleanSensor(entityId: string | null | undefined): boolean {
        return entityId?.startsWith("binary_sensor.") ?? false;
    }

    private findEntityIdById(id: string): string | undefined {
        const value = this.svg_item_config.flatMap(item => item.values).find(value => value.id === id);
        return value?.entityId ?? undefined;
    }
}

customElements.define("hpsu-dashboard-card", HPSUDashboardCard);
customElements.define("hpsu-dashboard-card-editor", HpsuDashboardCardEditor);

(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true,
});
