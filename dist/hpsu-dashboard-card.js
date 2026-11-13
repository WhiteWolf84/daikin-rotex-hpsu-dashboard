function $656ade2323340eda$export$71511d61b312f219(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else {
        for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}


const $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16 = [
    {
        id: "outside_temperature",
        label_rect_id: "ta_label",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        value_rect_id: "ta_val",
        offset: 6,
        category: {
            de: "Oben",
            en: "Top",
            it: "In alto"
        },
        texts: {
            de: {
                label: "TA",
                desc: "TA - Au\xdfentemperatur (RoCon OT1)"
            },
            en: {
                label: "TA",
                desc: "TA - Outside temperature (RoCon OT1)"
            },
            it: {
                label: "TA",
                desc: "TA - Temperatura esterna (sonda RoCon OT1)"
            }
        }
    },
    {
        id: "ta2",
        label_rect_id: "ta2_label",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        value_rect_id: "ta2_val",
        offset: 6,
        optional: true,
        parent: "TA2",
        texts: {
            de: {
                label: "TA2",
                desc: "TA2 - Au\xdfentemperatur am Au\xdfenger\xe4t"
            },
            en: {
                label: "TA2",
                desc: "TA2 - Outdoor unit air temperature"
            },
            it: {
                label: "TA2",
                desc: "TA2 - Temperatura aria unit\xe0 esterna"
            }
        }
    },
    {
        id: "expansion_valve",
        label_rect_id: "eev_label",
        domain: "sensor",
        device: "UART",
        unit: "pls",
        value_rect_id: "eev_val",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "EEV",
                desc: "Elektronisches Expansionsventil"
            },
            en: {
                label: "EEV",
                desc: "Electronic expansion valve"
            },
            it: {
                label: "EEV",
                desc: "Valvola di espansione elettronica"
            }
        }
    },
    {
        id: "pressure_equalization",
        domain: "binary_sensor",
        device: "UART",
        texts: {
            de: {
                desc: "Druckausgleich"
            },
            en: {
                desc: "Pressure equalization"
            },
            it: {
                desc: "Equalizzazione della pressione"
            }
        }
    },
    {
        id: "condensate",
        label_rect_id: "condensate_label",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "condensate_value",
        offset: 6,
        texts: {
            de: {
                label: "Kondensat",
                desc: "Kondensattemperatur"
            },
            en: {
                label: "Condensate",
                desc: "Condensate temperature"
            },
            it: {
                label: "Condensa",
                desc: "Temperatura della condensa"
            }
        }
    },
    {
        id: "circulation_pump",
        label_rect_id: "circulation_pump_label",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "circulation_pump_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Umw\xe4lzpumpe",
                desc: "Umw\xe4lzpumpe - Leistung"
            },
            en: {
                label: "Circ. pump",
                desc: "Circulation pump - speed"
            },
            it: {
                label: "Pompa circ.",
                desc: "Pompa di circolazione - velocit\xe0"
            }
        }
    },
    {
        id: "circulation_pump_status",
        domain: "binary_sensor",
        device: "CAN",
        value_rect_id: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Umw\xe4lzpumpe - Status"
            },
            en: {
                desc: "Circulation pump - status"
            },
            it: {
                desc: "Pompa di circolazione - stato"
            }
        }
    },
    {
        id: "flow_rate",
        domain: "sensor",
        device: "CAN",
        unit: "L/h",
        label_rect_id: "flow_rate_label",
        value_rect_id: "flow_rate_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Durchfluss",
                desc: "Durchfluss"
            },
            en: {
                label: "Flow rate",
                desc: "Flow rate"
            },
            it: {
                label: "Portata",
                desc: "Portata acqua"
            }
        }
    },
    {
        id: "return_temperature_can",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "return_flow_label",
        value_rect_id: "return_flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "R\xfccklauf",
                desc: "TR - R\xfccklauftemperatur (CAN)"
            },
            en: {
                label: "Return",
                desc: "TR - Return temperature (CAN)"
            },
            it: {
                label: "Ritorno",
                desc: "TR - Temperatura di ritorno (CAN)"
            }
        }
    },
    {
        id: "return_temperature_uart",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "return_flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "TR - R\xfccklauftemperatur (UART)"
            },
            en: {
                desc: "TR - Return temperature (UART)"
            },
            it: {
                desc: "TR - Temperatura di ritorno (UART)"
            }
        }
    },
    {
        id: "evaporator",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        label_rect_id: "evaporator_label",
        value_rect_id: "evaporator_value",
        offset: 6,
        category: {
            de: "Mitte",
            en: "Middle",
            it: "Centro"
        },
        texts: {
            de: {
                label: "Verdampfer",
                desc: "Verdampfertemperatur"
            },
            en: {
                label: "Evaporator",
                desc: "Evaporator temperature"
            },
            it: {
                label: "Evaporatore",
                desc: "Temperatura dell'evaporatore"
            }
        }
    },
    {
        id: "hot_gas",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        label_rect_id: "hot_gas_label",
        value_rect_id: "hot_gas_value",
        offset: 6,
        texts: {
            de: {
                label: "Hei\xdfgas",
                desc: "Hei\xdfgastemperatur"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas temperature"
            },
            it: {
                label: "Gas caldo",
                desc: "Temperatura del gas caldo"
            }
        }
    },
    {
        id: "hot_gas_condenser",
        domain: "sensor",
        unit: "\xb0C",
        label_rect_id: "hot_gas_condenser_label",
        value_rect_id: "hot_gas_condenser_value",
        offset: 6,
        optional: true,
        parent: "hot_gas_condenser",
        texts: {
            de: {
                label: "Hei\xdfgas",
                desc: "Hei\xdfgastemperatur am Kondensator"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas temperature at the condenser"
            },
            it: {
                label: "Gas caldo",
                desc: "Temperatura del gas caldo al condensatore"
            }
        }
    },
    {
        id: "spread",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "spread_label",
        value_rect_id: "spread_value",
        offset: 6,
        texts: {
            de: {
                label: "Spreizung",
                desc: "Spreizung (TV - TR)"
            },
            en: {
                label: "Spread",
                desc: "Temperature spread (TV - TR)"
            },
            it: {
                label: "\u0394T",
                desc: "Differenza di temperatura (TV - TR)"
            }
        }
    },
    {
        id: "flow_temperature_can",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_label",
        value_rect_id: "flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf",
                desc: "TV - Vorlauftemperatur (CAN)"
            },
            en: {
                label: "Flow",
                desc: "TV - Flow temperature (CAN)"
            },
            it: {
                label: "Mandata",
                desc: "TV - Temperatura di mandata (CAN)"
            }
        }
    },
    {
        id: "flow_temperature_uart",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "TV - Vorlauftemperatur (UART)"
            },
            en: {
                desc: "TV - Flow temperature (UART)"
            },
            it: {
                desc: "TV - Temperatura di mandata (UART)"
            }
        }
    },
    {
        id: "flow_temperature_setpoint",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_setpoint_label",
        value_rect_id: "flow_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf-Soll",
                desc: "Vorlauf-Solltemperatur"
            },
            en: {
                label: "Flow set",
                desc: "Flow temperature setpoint"
            },
            it: {
                label: "Mand. imp.",
                desc: "Temperatura di mandata impostata"
            }
        }
    },
    {
        id: "water_pressure",
        domain: "sensor",
        device: "CAN",
        unit: "bar",
        label_rect_id: "pressure_label",
        value_rect_id: "pressure_value",
        offset: 6,
        texts: {
            de: {
                label: "Druck",
                desc: "Wasserdruck"
            },
            en: {
                label: "Pressure",
                desc: "Water pressure"
            },
            it: {
                label: "Pressione",
                desc: "Pressione dell'acqua"
            }
        }
    },
    {
        id: "flow_temperature_bh_can",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "flow_bh_label",
        value_rect_id: "flow_bh_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf BH",
                desc: "TVBH - Vorlauf nach Heizstab (CAN)"
            },
            en: {
                label: "Flow BH",
                desc: "TVBH - Flow after backup heater (CAN)"
            },
            it: {
                label: "Mand. BH",
                desc: "TVBH - Mandata dopo resistenza (CAN)"
            }
        }
    },
    {
        id: "flow_temperature_bh_uart",
        domain: "sensor",
        device: "UART",
        unit: "\xb0C",
        value_rect_id: "flow_bh_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "TVBH - Vorlauf nach Heizstab (UART)"
            },
            en: {
                desc: "TVBH - Flow after backup heater (UART)"
            },
            it: {
                desc: "TVBH - Mandata dopo resistenza (UART)"
            }
        }
    },
    {
        id: "compressor_status",
        domain: "binary_sensor",
        device: "CAN",
        value_rect_id: "comp_rect",
        offset: 2,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Kompressor - Status"
            },
            en: {
                desc: "Compressor - status"
            },
            it: {
                desc: "Compressore - stato"
            }
        }
    },
    {
        id: "fan_speed",
        domain: "sensor",
        device: "UART",
        unit: "RPM",
        label_rect_id: "fan_label",
        value_rect_id: "fan_value",
        offset: 6,
        category: {
            de: "Unten",
            en: "Bottom",
            it: "In basso"
        },
        digits: 0,
        texts: {
            de: {
                label: "L\xfcfter",
                desc: "L\xfcfterdrehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            },
            it: {
                label: "Ventola",
                desc: "Velocit\xe0 della ventola"
            }
        }
    },
    {
        id: "compressor_speed",
        domain: "sensor",
        device: "UART",
        unit: "RPM",
        label_rect_id: "compressor_label",
        value_rect_id: "compressor_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Verdichter",
                desc: "Verdichterdrehzahl"
            },
            en: {
                label: "Compressor",
                desc: "Compressor speed"
            },
            it: {
                label: "Compressore",
                desc: "Velocit\xe0 del compressore"
            }
        }
    },
    {
        id: "storage_temperature",
        domain: "sensor",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "storage_label",
        value_rect_id: "storage_value",
        offset: 6,
        texts: {
            de: {
                label: "Speicher",
                desc: "Speichertemperatur (Ist)"
            },
            en: {
                label: "Tank",
                desc: "DHW tank temperature (actual)"
            },
            it: {
                label: "Bollitore",
                desc: "Temperatura bollitore (attuale)"
            }
        }
    },
    {
        id: "storage_setpoint",
        domain: "select",
        device: "CAN",
        unit: "\xb0C",
        label_rect_id: "storage_setpoint_label",
        value_rect_id: "storage_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Soll",
                desc: "Speichertemperatur (Soll)"
            },
            en: {
                label: "Setpoint",
                desc: "DHW tank temperature setpoint"
            },
            it: {
                label: "Imp.",
                desc: "Temperatura bollitore impostata"
            }
        }
    },
    {
        id: "buh_power",
        domain: "sensor",
        unit: [
            "W",
            "kW"
        ],
        label_rect_id: "buh_info_label",
        value_rect_id: "buh_info_value",
        offset: 6,
        digits: 0,
        optional: true,
        parent: "buh",
        texts: {
            de: {
                label: "Heizstab",
                desc: "Heizstableistung"
            },
            en: {
                label: "Backup heater",
                desc: "Backup heater power"
            },
            it: {
                label: "Resistenza",
                desc: "Potenza della resistenza elettrica"
            }
        }
    },
    {
        id: "mixer",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "dhw_mixer_value",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Mischerstellung"
            },
            en: {
                desc: "Mixer position"
            },
            it: {
                desc: "Posizione del miscelatore"
            }
        }
    },
    {
        id: "bypass",
        domain: "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "bypass_value",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Bypass-Ventilstellung"
            },
            en: {
                desc: "Bypass valve position"
            },
            it: {
                desc: "Posizione della valvola di bypass"
            }
        }
    },
    {
        id: "error_code",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "error_code_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: {
            de: "Info",
            en: "Info",
            it: "Info"
        },
        texts: {
            de: {
                suffix: "Fehlercode: ",
                desc: "Fehlercode"
            },
            en: {
                suffix: "Error code: ",
                desc: "Error code"
            },
            it: {
                suffix: "Codice errore: ",
                desc: "Codice di errore"
            }
        }
    },
    {
        id: "operating_mode",
        domain: "select",
        device: "CAN",
        value_rect_id: "operating_mode_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Modus: ",
                desc: "Betriebsmodus (vom Benutzer eingestellt)"
            },
            en: {
                suffix: "Mode: ",
                desc: "Operating mode (user setting)"
            },
            it: {
                suffix: "Modalit\xe0: ",
                desc: "Modalit\xe0 operativa (impostata dall'utente)"
            }
        }
    },
    {
        id: "mode_of_operating",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "mode_of_operating_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Status: ",
                desc: "Aktueller W\xe4rmepumpenstatus"
            },
            en: {
                suffix: "State: ",
                desc: "Current heat pump state"
            },
            it: {
                suffix: "Stato: ",
                desc: "Stato attuale della pompa di calore"
            }
        }
    },
    {
        id: "thermal_power",
        domain: "sensor",
        device: "CAN",
        unit: "kW",
        value_rect_id: "thermal_power_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Therm. Leistung: ",
                desc: "Thermische Leistung"
            },
            en: {
                suffix: "Thermal power: ",
                desc: "Thermal power"
            },
            it: {
                suffix: "Potenza termica: ",
                desc: "Potenza termica"
            }
        }
    },
    {
        id: "el_power",
        domain: "sensor",
        unit: "kW",
        value_rect_id: "el_power_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "El. Leistung: ",
                desc: "Elektrische Leistung"
            },
            en: {
                suffix: "Electric power: ",
                desc: "Electric power"
            },
            it: {
                suffix: "Potenza elettrica: ",
                desc: "Potenza elettrica"
            }
        }
    },
    {
        id: "cop",
        domain: "sensor",
        value_rect_id: "cop_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "COP: ",
                desc: "Leistungszahl (COP)"
            },
            en: {
                suffix: "COP: ",
                desc: "Coefficient of performance (COP)"
            },
            it: {
                suffix: "COP: ",
                desc: "Coefficiente di prestazione (COP)"
            }
        }
    },
    {
        id: "room_temperature",
        domain: "sensor",
        value_rect_id: "t_room_is_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Raumtemp.: ",
                desc: "Aktuelle Raumtemperatur"
            },
            en: {
                suffix: "Room temp.: ",
                desc: "Current room temperature"
            },
            it: {
                suffix: "Temp. ambiente: ",
                desc: "Temperatura ambiente attuale"
            }
        }
    },
    {
        id: "system_date",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "date_value",
        parent: "date_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Systemdatum"
            },
            en: {
                desc: "System date"
            },
            it: {
                desc: "Data di sistema"
            }
        }
    },
    {
        id: "system_time",
        domain: "sensor",
        device: "CAN",
        value_rect_id: "time_value",
        parent: "time_value",
        offset: 6,
        fontSize: "40px",
        optional: true,
        texts: {
            de: {
                desc: "Systemzeit"
            },
            en: {
                desc: "System time"
            },
            it: {
                desc: "Ora di sistema"
            }
        }
    }
];
const $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d = [
    "de",
    "en",
    "it"
];
const $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048 = {
    de: {
        on: "An",
        off: "Aus",
        errorLoading: "Fehler beim Laden des HPSU Dashboards.",
        selectCanDevice: "CAN Ger\xe4t ausw\xe4hlen",
        selectUartDevice: "UART Ger\xe4t ausw\xe4hlen"
    },
    en: {
        on: "On",
        off: "Off",
        errorLoading: "Failed to load the HPSU dashboard.",
        selectCanDevice: "Select CAN device",
        selectUartDevice: "Select UART device"
    },
    it: {
        on: "On",
        off: "Off",
        errorLoading: "Errore durante il caricamento della dashboard HPSU.",
        selectCanDevice: "Seleziona dispositivo CAN",
        selectUartDevice: "Seleziona dispositivo UART"
    }
};
const $eb5cfe1dd9fe4e85$export$ac75e9db5428c70 = [
    "Kein Fehler",
    "No Error",
    "Nessun Errore",
    "Pas d'erreur"
];
const $eb5cfe1dd9fe4e85$export$812790f65cac9681 = {
    "Warmwasserbereitung": "Warmwasser",
    "Hot Water Production": "Hot Water",
    "Produzione di Acqua Calda": "Acqua Calda",
    "Pr\xe9paration d\u2019eau chaude": "Eau chaude"
};
const $eb5cfe1dd9fe4e85$export$3d4c4b3107861578 = {
    ta: "outside_temperature",
    kondensat: "condensate",
    umwaelzpumpe: "circulation_pump",
    umwaelzpumpe_an_aus: "circulation_pump_status",
    durchfluss: "flow_rate",
    ruecklauf_1: "return_temperature_can",
    ruecklauf_2: "return_temperature_uart",
    verdampfer: "evaporator",
    vorlauf_1: "flow_temperature_can",
    vorlauf_2: "flow_temperature_uart",
    vorlauf_soll: "flow_temperature_setpoint",
    wasserdruck: "water_pressure",
    vorlauf_bh_1: "flow_temperature_bh_can",
    vorlauf_bh_2: "flow_temperature_bh_uart",
    kompressor_an_aus: "compressor_status",
    luefter: "fan_speed",
    verdichter: "compressor_speed",
    speicher: "storage_temperature",
    speicher_soll: "storage_setpoint",
    mischer: "mixer",
    fehlercode: "error_code",
    betriebsmodus: "operating_mode",
    betriebsart: "mode_of_operating",
    thermische_leistung: "thermal_power",
    t_room_is: "room_temperature"
};
const $eb5cfe1dd9fe4e85$export$127f9a442b42d18 = function(config) {
    const validIds = new Set($eb5cfe1dd9fe4e85$export$9b06e6104ce35b16.map((item)=>item.id));
    const validEntities = {};
    for (const [key, value] of Object.entries(config.entities ?? {})){
        const id = $eb5cfe1dd9fe4e85$export$3d4c4b3107861578[key] ?? key;
        if (validIds.has(id)) validEntities[id] = value;
    }
    return {
        ...config,
        entities: validEntities
    };
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $14742f68afc766d6$export$da64fc29f17f9d0e = (t)=>(e, o)=>{
        void 0 !== o ? o.addInitializer(()=>{
            customElements.define(t, e);
        }) : customElements.define(t, e);
    };


/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $def2de46b9306e8a$var$t = globalThis, $def2de46b9306e8a$export$b4d10f6001c083c2 = $def2de46b9306e8a$var$t.ShadowRoot && (void 0 === $def2de46b9306e8a$var$t.ShadyCSS || $def2de46b9306e8a$var$t.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $def2de46b9306e8a$var$s = Symbol(), $def2de46b9306e8a$var$o = new WeakMap;
class $def2de46b9306e8a$export$505d1e8739bad805 {
    constructor(t, e, o){
        if (this._$cssResult$ = !0, o !== $def2de46b9306e8a$var$s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t, this.t = e;
    }
    get styleSheet() {
        let t = this.o;
        const s = this.t;
        if ($def2de46b9306e8a$export$b4d10f6001c083c2 && void 0 === t) {
            const e = void 0 !== s && 1 === s.length;
            e && (t = $def2de46b9306e8a$var$o.get(s)), void 0 === t && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), e && $def2de46b9306e8a$var$o.set(s, t));
        }
        return t;
    }
    toString() {
        return this.cssText;
    }
}
const $def2de46b9306e8a$export$8d80f9cac07cdb3 = (t)=>new $def2de46b9306e8a$export$505d1e8739bad805("string" == typeof t ? t : t + "", void 0, $def2de46b9306e8a$var$s), $def2de46b9306e8a$export$dbf350e5966cf602 = (t, ...e)=>{
    const o = 1 === t.length ? t[0] : e.reduce((e, s, o)=>e + ((t)=>{
            if (!0 === t._$cssResult$) return t.cssText;
            if ("number" == typeof t) return t;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s) + t[o + 1], t[0]);
    return new $def2de46b9306e8a$export$505d1e8739bad805(o, t, $def2de46b9306e8a$var$s);
}, $def2de46b9306e8a$export$2ca4a66ec4cecb90 = (s, o)=>{
    if ($def2de46b9306e8a$export$b4d10f6001c083c2) s.adoptedStyleSheets = o.map((t)=>t instanceof CSSStyleSheet ? t : t.styleSheet);
    else for (const e of o){
        const o = document.createElement("style"), n = $def2de46b9306e8a$var$t.litNonce;
        void 0 !== n && o.setAttribute("nonce", n), o.textContent = e.cssText, s.appendChild(o);
    }
}, $def2de46b9306e8a$export$ee69dfd951e24778 = $def2de46b9306e8a$export$b4d10f6001c083c2 ? (t)=>t : (t)=>t instanceof CSSStyleSheet ? ((t)=>{
        let e = "";
        for (const s of t.cssRules)e += s.cssText;
        return $def2de46b9306e8a$export$8d80f9cac07cdb3(e);
    })(t) : t;


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const { is: $19fe8e3abedf4df0$var$i, defineProperty: $19fe8e3abedf4df0$var$e, getOwnPropertyDescriptor: $19fe8e3abedf4df0$var$h, getOwnPropertyNames: $19fe8e3abedf4df0$var$r, getOwnPropertySymbols: $19fe8e3abedf4df0$var$o, getPrototypeOf: $19fe8e3abedf4df0$var$n } = Object, $19fe8e3abedf4df0$var$a = globalThis, $19fe8e3abedf4df0$var$c = $19fe8e3abedf4df0$var$a.trustedTypes, $19fe8e3abedf4df0$var$l = $19fe8e3abedf4df0$var$c ? $19fe8e3abedf4df0$var$c.emptyScript : "", $19fe8e3abedf4df0$var$p = $19fe8e3abedf4df0$var$a.reactiveElementPolyfillSupport, $19fe8e3abedf4df0$var$d = (t, s)=>t, $19fe8e3abedf4df0$export$7312b35fbf521afb = {
    toAttribute (t, s) {
        switch(s){
            case Boolean:
                t = t ? $19fe8e3abedf4df0$var$l : null;
                break;
            case Object:
            case Array:
                t = null == t ? t : JSON.stringify(t);
        }
        return t;
    },
    fromAttribute (t, s) {
        let i = t;
        switch(s){
            case Boolean:
                i = null !== t;
                break;
            case Number:
                i = null === t ? null : Number(t);
                break;
            case Object:
            case Array:
                try {
                    i = JSON.parse(t);
                } catch (t) {
                    i = null;
                }
        }
        return i;
    }
}, $19fe8e3abedf4df0$export$53a6892c50694894 = (t, s)=>!$19fe8e3abedf4df0$var$i(t, s), $19fe8e3abedf4df0$var$b = {
    attribute: !0,
    type: String,
    converter: $19fe8e3abedf4df0$export$7312b35fbf521afb,
    reflect: !1,
    useDefault: !1,
    hasChanged: $19fe8e3abedf4df0$export$53a6892c50694894
};
Symbol.metadata ??= Symbol("metadata"), $19fe8e3abedf4df0$var$a.litPropertyMetadata ??= new WeakMap;
class $19fe8e3abedf4df0$export$c7c07a37856565d extends HTMLElement {
    static addInitializer(t) {
        this._$Ei(), (this.l ??= []).push(t);
    }
    static get observedAttributes() {
        return this.finalize(), this._$Eh && [
            ...this._$Eh.keys()
        ];
    }
    static createProperty(t, s = $19fe8e3abedf4df0$var$b) {
        if (s.state && (s.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((s = Object.create(s)).wrapped = !0), this.elementProperties.set(t, s), !s.noAccessor) {
            const i = Symbol(), h = this.getPropertyDescriptor(t, i, s);
            void 0 !== h && $19fe8e3abedf4df0$var$e(this.prototype, t, h);
        }
    }
    static getPropertyDescriptor(t, s, i) {
        const { get: e, set: r } = $19fe8e3abedf4df0$var$h(this.prototype, t) ?? {
            get () {
                return this[s];
            },
            set (t) {
                this[s] = t;
            }
        };
        return {
            get: e,
            set (s) {
                const h = e?.call(this);
                r?.call(this, s), this.requestUpdate(t, h, i);
            },
            configurable: !0,
            enumerable: !0
        };
    }
    static getPropertyOptions(t) {
        return this.elementProperties.get(t) ?? $19fe8e3abedf4df0$var$b;
    }
    static _$Ei() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("elementProperties"))) return;
        const t = $19fe8e3abedf4df0$var$n(this);
        t.finalize(), void 0 !== t.l && (this.l = [
            ...t.l
        ]), this.elementProperties = new Map(t.elementProperties);
    }
    static finalize() {
        if (this.hasOwnProperty($19fe8e3abedf4df0$var$d("finalized"))) return;
        if (this.finalized = !0, this._$Ei(), this.hasOwnProperty($19fe8e3abedf4df0$var$d("properties"))) {
            const t = this.properties, s = [
                ...$19fe8e3abedf4df0$var$r(t),
                ...$19fe8e3abedf4df0$var$o(t)
            ];
            for (const i of s)this.createProperty(i, t[i]);
        }
        const t = this[Symbol.metadata];
        if (null !== t) {
            const s = litPropertyMetadata.get(t);
            if (void 0 !== s) for (const [t, i] of s)this.elementProperties.set(t, i);
        }
        this._$Eh = new Map;
        for (const [t, s] of this.elementProperties){
            const i = this._$Eu(t, s);
            void 0 !== i && this._$Eh.set(i, t);
        }
        this.elementStyles = this.finalizeStyles(this.styles);
    }
    static finalizeStyles(s) {
        const i = [];
        if (Array.isArray(s)) {
            const e = new Set(s.flat(1 / 0).reverse());
            for (const s of e)i.unshift((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        } else void 0 !== s && i.push((0, $def2de46b9306e8a$export$ee69dfd951e24778)(s));
        return i;
    }
    static _$Eu(t, s) {
        const i = s.attribute;
        return !1 === i ? void 0 : "string" == typeof i ? i : "string" == typeof t ? t.toLowerCase() : void 0;
    }
    constructor(){
        super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
    }
    _$Ev() {
        this._$ES = new Promise((t)=>this.enableUpdating = t), this._$AL = new Map, this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t)=>t(this));
    }
    addController(t) {
        (this._$EO ??= new Set).add(t), void 0 !== this.renderRoot && this.isConnected && t.hostConnected?.();
    }
    removeController(t) {
        this._$EO?.delete(t);
    }
    _$E_() {
        const t = new Map, s = this.constructor.elementProperties;
        for (const i of s.keys())this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
        t.size > 0 && (this._$Ep = t);
    }
    createRenderRoot() {
        const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
        return (0, $def2de46b9306e8a$export$2ca4a66ec4cecb90)(t, this.constructor.elementStyles), t;
    }
    connectedCallback() {
        this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t)=>t.hostConnected?.());
    }
    enableUpdating(t) {}
    disconnectedCallback() {
        this._$EO?.forEach((t)=>t.hostDisconnected?.());
    }
    attributeChangedCallback(t, s, i) {
        this._$AK(t, i);
    }
    _$ET(t, s) {
        const i = this.constructor.elementProperties.get(t), e = this.constructor._$Eu(t, i);
        if (void 0 !== e && !0 === i.reflect) {
            const h = (void 0 !== i.converter?.toAttribute ? i.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb).toAttribute(s, i.type);
            this._$Em = t, null == h ? this.removeAttribute(e) : this.setAttribute(e, h), this._$Em = null;
        }
    }
    _$AK(t, s) {
        const i = this.constructor, e = i._$Eh.get(t);
        if (void 0 !== e && this._$Em !== e) {
            const t = i.getPropertyOptions(e), h = "function" == typeof t.converter ? {
                fromAttribute: t.converter
            } : void 0 !== t.converter?.fromAttribute ? t.converter : $19fe8e3abedf4df0$export$7312b35fbf521afb;
            this._$Em = e;
            const r = h.fromAttribute(s, t.type);
            this[e] = r ?? this._$Ej?.get(e) ?? r, this._$Em = null;
        }
    }
    requestUpdate(t, s, i, e = !1, h) {
        if (void 0 !== t) {
            const r = this.constructor;
            if (!1 === e && (h = this[t]), i ??= r.getPropertyOptions(t), !((i.hasChanged ?? $19fe8e3abedf4df0$export$53a6892c50694894)(h, s) || i.useDefault && i.reflect && h === this._$Ej?.get(t) && !this.hasAttribute(r._$Eu(t, i)))) return;
            this.C(t, s, i);
        }
        !1 === this.isUpdatePending && (this._$ES = this._$EP());
    }
    C(t, s, { useDefault: i, reflect: e, wrapped: h }, r) {
        i && !(this._$Ej ??= new Map).has(t) && (this._$Ej.set(t, r ?? s ?? this[t]), !0 !== h || void 0 !== r) || (this._$AL.has(t) || (this.hasUpdated || i || (s = void 0), this._$AL.set(t, s)), !0 === e && this._$Em !== t && (this._$Eq ??= new Set).add(t));
    }
    async _$EP() {
        this.isUpdatePending = !0;
        try {
            await this._$ES;
        } catch (t) {
            Promise.reject(t);
        }
        const t = this.scheduleUpdate();
        return null != t && await t, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        if (!this.isUpdatePending) return;
        if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
                for (const [t, s] of this._$Ep)this[t] = s;
                this._$Ep = void 0;
            }
            const t = this.constructor.elementProperties;
            if (t.size > 0) for (const [s, i] of t){
                const { wrapped: t } = i, e = this[s];
                !0 !== t || this._$AL.has(s) || void 0 === e || this.C(s, void 0, i, e);
            }
        }
        let t = !1;
        const s = this._$AL;
        try {
            t = this.shouldUpdate(s), t ? (this.willUpdate(s), this._$EO?.forEach((t)=>t.hostUpdate?.()), this.update(s)) : this._$EM();
        } catch (s) {
            throw t = !1, this._$EM(), s;
        }
        t && this._$AE(s);
    }
    willUpdate(t) {}
    _$AE(t) {
        this._$EO?.forEach((t)=>t.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
    }
    _$EM() {
        this._$AL = new Map, this.isUpdatePending = !1;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$ES;
    }
    shouldUpdate(t) {
        return !0;
    }
    update(t) {
        this._$Eq &&= this._$Eq.forEach((t)=>this._$ET(t, this[t])), this._$EM();
    }
    updated(t) {}
    firstUpdated(t) {}
}
$19fe8e3abedf4df0$export$c7c07a37856565d.elementStyles = [], $19fe8e3abedf4df0$export$c7c07a37856565d.shadowRootOptions = {
    mode: "open"
}, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("elementProperties")] = new Map, $19fe8e3abedf4df0$export$c7c07a37856565d[$19fe8e3abedf4df0$var$d("finalized")] = new Map, $19fe8e3abedf4df0$var$p?.({
    ReactiveElement: $19fe8e3abedf4df0$export$c7c07a37856565d
}), ($19fe8e3abedf4df0$var$a.reactiveElementVersions ??= []).push("2.1.2");


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $9cd908ed2625c047$var$o = {
    attribute: !0,
    type: String,
    converter: (0, $19fe8e3abedf4df0$export$7312b35fbf521afb),
    reflect: !1,
    hasChanged: (0, $19fe8e3abedf4df0$export$53a6892c50694894)
}, $9cd908ed2625c047$export$8d623b1670eb40f4 = (t = $9cd908ed2625c047$var$o, e, r)=>{
    const { kind: n, metadata: i } = r;
    let s = globalThis.litPropertyMetadata.get(i);
    if (void 0 === s && globalThis.litPropertyMetadata.set(i, s = new Map), "setter" === n && ((t = Object.create(t)).wrapped = !0), s.set(r.name, t), "accessor" === n) {
        const { name: o } = r;
        return {
            set (r) {
                const n = e.get.call(this);
                e.set.call(this, r), this.requestUpdate(o, n, t, !0, r);
            },
            init (e) {
                return void 0 !== e && this.C(o, void 0, t, e), e;
            }
        };
    }
    if ("setter" === n) {
        const { name: o } = r;
        return function(r) {
            const n = this[o];
            e.call(this, r), this.requestUpdate(o, n, t, !0, r);
        };
    }
    throw Error("Unsupported decorator location: " + n);
};
function $9cd908ed2625c047$export$d541bacb2bda4494(t) {
    return (e, o)=>"object" == typeof o ? $9cd908ed2625c047$export$8d623b1670eb40f4(t, e, o) : ((t, e, o)=>{
            const r = e.hasOwnProperty(o);
            return e.constructor.createProperty(o, t), r ? Object.getOwnPropertyDescriptor(e, o) : void 0;
        })(t, e, o);
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $04c21ea1ce1f6057$export$ca000e230c0caa3e(r) {
    return (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        ...r,
        state: !0,
        attribute: !1
    });
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $b4269277b3c48b0c$export$b2b799818fbabcf3(t) {
    return (n, o)=>{
        const c = "function" == typeof n ? n : n[o];
        Object.assign(c, t);
    };
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $25e9c5a8f7ecfc69$export$51987bb50e1f6752 = (e, t, c)=>(c.configurable = !0, c.enumerable = !0, Reflect.decorate && "object" != typeof t && Object.defineProperty(e, t, c), c);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $02a1f3a787c54a30$export$2fa187e846a241c4(e, r) {
    return (n, s, i)=>{
        const o = (t)=>t.renderRoot?.querySelector(e) ?? null;
        if (r) {
            const { get: e, set: r } = "object" == typeof s ? n : i ?? (()=>{
                const t = Symbol();
                return {
                    get () {
                        return this[t];
                    },
                    set (e) {
                        this[t] = e;
                    }
                };
            })();
            return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
                get () {
                    let t = e.call(this);
                    return void 0 === t && (t = o(this), (null !== t || this.hasUpdated) && r.call(this, t)), t;
                }
            });
        }
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, s, {
            get () {
                return o(this);
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ let $ed34c589b230c255$var$e;
function $ed34c589b230c255$export$dcd0d083aa86c355(r) {
    return (n, o)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, o, {
            get () {
                return (this.renderRoot ?? ($ed34c589b230c255$var$e ??= document.createDocumentFragment())).querySelectorAll(r);
            }
        });
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $ea50f1870b80cbec$export$163dfc35cc43f240(r) {
    return (n, e)=>(0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(n, e, {
            async get () {
                return await this.updateComplete, this.renderRoot?.querySelector(r) ?? null;
            }
        });
}



/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $563fcf7ce7e6c5aa$export$4682af2d9ee91415(o) {
    return (e, n)=>{
        const { slot: r, selector: s } = o ?? {}, c = "slot" + (r ? `[name=${r}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(e, n, {
            get () {
                const t = this.renderRoot?.querySelector(c), e = t?.assignedElements(o) ?? [];
                return void 0 === s ? e : e.filter((t)=>t.matches(s));
            }
        });
    };
}



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ function $728f1385dd7bf557$export$1bdbe53f9df1b8(n) {
    return (o, r)=>{
        const { slot: e } = n ?? {}, s = "slot" + (e ? `[name=${e}]` : ":not([name])");
        return (0, $25e9c5a8f7ecfc69$export$51987bb50e1f6752)(o, r, {
            get () {
                const t = this.renderRoot?.querySelector(s);
                return t?.assignedNodes(n) ?? [];
            }
        });
    };
}





/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $f58f44579a4747ac$var$t = globalThis, $f58f44579a4747ac$var$i = (t)=>t, $f58f44579a4747ac$var$s = $f58f44579a4747ac$var$t.trustedTypes, $f58f44579a4747ac$var$e = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f58f44579a4747ac$var$h = "$lit$", $f58f44579a4747ac$var$o = `lit$${Math.random().toFixed(9).slice(2)}$`, $f58f44579a4747ac$var$n = "?" + $f58f44579a4747ac$var$o, $f58f44579a4747ac$var$r = `<${$f58f44579a4747ac$var$n}>`, $f58f44579a4747ac$var$l = document, $f58f44579a4747ac$var$c = ()=>$f58f44579a4747ac$var$l.createComment(""), $f58f44579a4747ac$var$a = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f58f44579a4747ac$var$u = Array.isArray, $f58f44579a4747ac$var$d = (t)=>$f58f44579a4747ac$var$u(t) || "function" == typeof t?.[Symbol.iterator], $f58f44579a4747ac$var$f = "[ \t\n\f\r]", $f58f44579a4747ac$var$v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f58f44579a4747ac$var$_ = /-->/g, $f58f44579a4747ac$var$m = />/g, $f58f44579a4747ac$var$p = RegExp(`>|${$f58f44579a4747ac$var$f}(?:([^\\s"'>=/]+)(${$f58f44579a4747ac$var$f}*=${$f58f44579a4747ac$var$f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f58f44579a4747ac$var$g = /'/g, $f58f44579a4747ac$var$$ = /"/g, $f58f44579a4747ac$var$y = /^(?:script|style|textarea|title)$/i, $f58f44579a4747ac$var$x = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f58f44579a4747ac$export$c0bb0b647f701bb5 = $f58f44579a4747ac$var$x(1), $f58f44579a4747ac$export$7ed1367e7fa1ad68 = $f58f44579a4747ac$var$x(2), $f58f44579a4747ac$export$47d5b44d225be5b4 = $f58f44579a4747ac$var$x(3), $f58f44579a4747ac$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f58f44579a4747ac$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f58f44579a4747ac$var$C = new WeakMap, $f58f44579a4747ac$var$P = $f58f44579a4747ac$var$l.createTreeWalker($f58f44579a4747ac$var$l, 129);
function $f58f44579a4747ac$var$V(t, i) {
    if (!$f58f44579a4747ac$var$u(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f58f44579a4747ac$var$e ? $f58f44579a4747ac$var$e.createHTML(i) : i;
}
const $f58f44579a4747ac$var$N = (t, i)=>{
    const s = t.length - 1, e = [];
    let n, l = 2 === i ? "<svg>" : 3 === i ? "<math>" : "", c = $f58f44579a4747ac$var$v;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, f = 0;
        for(; f < s.length && (c.lastIndex = f, u = c.exec(s), null !== u);)f = c.lastIndex, c === $f58f44579a4747ac$var$v ? "!--" === u[1] ? c = $f58f44579a4747ac$var$_ : void 0 !== u[1] ? c = $f58f44579a4747ac$var$m : void 0 !== u[2] ? ($f58f44579a4747ac$var$y.test(u[2]) && (n = RegExp("</" + u[2], "g")), c = $f58f44579a4747ac$var$p) : void 0 !== u[3] && (c = $f58f44579a4747ac$var$p) : c === $f58f44579a4747ac$var$p ? ">" === u[0] ? (c = n ?? $f58f44579a4747ac$var$v, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f58f44579a4747ac$var$p : '"' === u[3] ? $f58f44579a4747ac$var$$ : $f58f44579a4747ac$var$g) : c === $f58f44579a4747ac$var$$ || c === $f58f44579a4747ac$var$g ? c = $f58f44579a4747ac$var$p : c === $f58f44579a4747ac$var$_ || c === $f58f44579a4747ac$var$m ? c = $f58f44579a4747ac$var$v : (c = $f58f44579a4747ac$var$p, n = void 0);
        const x = c === $f58f44579a4747ac$var$p && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f58f44579a4747ac$var$v ? s + $f58f44579a4747ac$var$r : d >= 0 ? (e.push(a), s.slice(0, d) + $f58f44579a4747ac$var$h + s.slice(d) + $f58f44579a4747ac$var$o + x) : s + $f58f44579a4747ac$var$o + (-2 === d ? i : x);
    }
    return [
        $f58f44579a4747ac$var$V(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : 3 === i ? "</math>" : "")),
        e
    ];
};
class $f58f44579a4747ac$var$S {
    constructor({ strings: t, _$litType$: i }, e){
        let r;
        this.parts = [];
        let l = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f58f44579a4747ac$var$N(t, i);
        if (this.el = $f58f44579a4747ac$var$S.createElement(f, e), $f58f44579a4747ac$var$P.currentNode = this.el.content, 2 === i || 3 === i) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f58f44579a4747ac$var$P.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f58f44579a4747ac$var$h)) {
                    const i = v[a++], s = r.getAttribute(t).split($f58f44579a4747ac$var$o), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: l,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f58f44579a4747ac$var$I : "?" === e[1] ? $f58f44579a4747ac$var$L : "@" === e[1] ? $f58f44579a4747ac$var$z : $f58f44579a4747ac$var$H
                    }), r.removeAttribute(t);
                } else t.startsWith($f58f44579a4747ac$var$o) && (d.push({
                    type: 6,
                    index: l
                }), r.removeAttribute(t));
                if ($f58f44579a4747ac$var$y.test(r.tagName)) {
                    const t = r.textContent.split($f58f44579a4747ac$var$o), i = t.length - 1;
                    if (i > 0) {
                        r.textContent = $f58f44579a4747ac$var$s ? $f58f44579a4747ac$var$s.emptyScript : "";
                        for(let s = 0; s < i; s++)r.append(t[s], $f58f44579a4747ac$var$c()), $f58f44579a4747ac$var$P.nextNode(), d.push({
                            type: 2,
                            index: ++l
                        });
                        r.append(t[i], $f58f44579a4747ac$var$c());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f58f44579a4747ac$var$n) d.push({
                    type: 2,
                    index: l
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f58f44579a4747ac$var$o, t + 1));)d.push({
                        type: 7,
                        index: l
                    }), t += $f58f44579a4747ac$var$o.length - 1;
                }
            }
            l++;
        }
    }
    static createElement(t, i) {
        const s = $f58f44579a4747ac$var$l.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f58f44579a4747ac$var$M(t, i, s = t, e) {
    if (i === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f58f44579a4747ac$var$a(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f58f44579a4747ac$var$M(t, h._$AS(t, i.values), h, e)), i;
}
class $f58f44579a4747ac$var$R {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f58f44579a4747ac$var$l).importNode(i, !0);
        $f58f44579a4747ac$var$P.currentNode = e;
        let h = $f58f44579a4747ac$var$P.nextNode(), o = 0, n = 0, r = s[0];
        for(; void 0 !== r;){
            if (o === r.index) {
                let i;
                2 === r.type ? i = new $f58f44579a4747ac$var$k(h, h.nextSibling, this, t) : 1 === r.type ? i = new r.ctor(h, r.name, r.strings, this, t) : 6 === r.type && (i = new $f58f44579a4747ac$var$Z(h, this, t)), this._$AV.push(i), r = s[++n];
            }
            o !== r?.index && (h = $f58f44579a4747ac$var$P.nextNode(), o++);
        }
        return $f58f44579a4747ac$var$P.currentNode = $f58f44579a4747ac$var$l, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f58f44579a4747ac$var$k {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $f58f44579a4747ac$var$M(this, t, i), $f58f44579a4747ac$var$a(t) ? t === $f58f44579a4747ac$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && this._$AR(), this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee) : t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f58f44579a4747ac$var$d(t) ? this.k(t) : this._(t);
    }
    O(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
    }
    _(t) {
        this._$AH !== $f58f44579a4747ac$export$45b790e32b2810ee && $f58f44579a4747ac$var$a(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f58f44579a4747ac$var$l.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f58f44579a4747ac$var$S.createElement($f58f44579a4747ac$var$V(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f58f44579a4747ac$var$R(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f58f44579a4747ac$var$C.get(t.strings);
        return void 0 === i && $f58f44579a4747ac$var$C.set(t.strings, i = new $f58f44579a4747ac$var$S(t)), i;
    }
    k(t) {
        $f58f44579a4747ac$var$u(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f58f44579a4747ac$var$k(this.O($f58f44579a4747ac$var$c()), this.O($f58f44579a4747ac$var$c()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, s) {
        for(this._$AP?.(!1, !0, s); t !== this._$AB;){
            const s = $f58f44579a4747ac$var$i(t).nextSibling;
            $f58f44579a4747ac$var$i(t).remove(), t = s;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $f58f44579a4747ac$var$H {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f58f44579a4747ac$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f58f44579a4747ac$var$M(this, t, i, 0), o = !$f58f44579a4747ac$var$a(t) || t !== this._$AH && t !== $f58f44579a4747ac$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f58f44579a4747ac$var$M(this, e[s + n], i, n), r === $f58f44579a4747ac$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f58f44579a4747ac$var$a(r) || r !== this._$AH[n], r === $f58f44579a4747ac$export$45b790e32b2810ee ? t = $f58f44579a4747ac$export$45b790e32b2810ee : t !== $f58f44579a4747ac$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f58f44579a4747ac$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f58f44579a4747ac$var$I extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f58f44579a4747ac$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f58f44579a4747ac$var$L extends $f58f44579a4747ac$var$H {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f58f44579a4747ac$export$45b790e32b2810ee);
    }
}
class $f58f44579a4747ac$var$z extends $f58f44579a4747ac$var$H {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f58f44579a4747ac$var$M(this, t, i, 0) ?? $f58f44579a4747ac$export$45b790e32b2810ee) === $f58f44579a4747ac$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f58f44579a4747ac$export$45b790e32b2810ee && s !== $f58f44579a4747ac$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f58f44579a4747ac$export$45b790e32b2810ee && (s === $f58f44579a4747ac$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f58f44579a4747ac$var$Z {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f58f44579a4747ac$var$M(this, t);
    }
}
const $f58f44579a4747ac$export$8613d1ca9052b22e = {
    M: $f58f44579a4747ac$var$h,
    P: $f58f44579a4747ac$var$o,
    A: $f58f44579a4747ac$var$n,
    C: 1,
    L: $f58f44579a4747ac$var$N,
    R: $f58f44579a4747ac$var$R,
    D: $f58f44579a4747ac$var$d,
    V: $f58f44579a4747ac$var$M,
    I: $f58f44579a4747ac$var$k,
    H: $f58f44579a4747ac$var$H,
    N: $f58f44579a4747ac$var$L,
    U: $f58f44579a4747ac$var$z,
    B: $f58f44579a4747ac$var$I,
    F: $f58f44579a4747ac$var$Z
}, $f58f44579a4747ac$var$B = $f58f44579a4747ac$var$t.litHtmlPolyfillSupport;
$f58f44579a4747ac$var$B?.($f58f44579a4747ac$var$S, $f58f44579a4747ac$var$k), ($f58f44579a4747ac$var$t.litHtmlVersions ??= []).push("3.3.3");
const $f58f44579a4747ac$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f58f44579a4747ac$var$k(i.insertBefore($f58f44579a4747ac$var$c(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $ab210b2da7b39b9d$var$s = globalThis;
class $ab210b2da7b39b9d$export$3f2f9f5909897157 extends (0, $19fe8e3abedf4df0$export$c7c07a37856565d) {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Do = void 0;
    }
    createRenderRoot() {
        const t = super.createRenderRoot();
        return this.renderOptions.renderBefore ??= t.firstChild, t;
    }
    update(t) {
        const r = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = (0, $f58f44579a4747ac$export$b3890eb0ae9dca99)(r, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        super.connectedCallback(), this._$Do?.setConnected(!0);
    }
    disconnectedCallback() {
        super.disconnectedCallback(), this._$Do?.setConnected(!1);
    }
    render() {
        return 0, $f58f44579a4747ac$export$9c068ae9cc5db4e8;
    }
}
$ab210b2da7b39b9d$export$3f2f9f5909897157._$litElement$ = !0, $ab210b2da7b39b9d$export$3f2f9f5909897157["finalized"] = !0, $ab210b2da7b39b9d$var$s.litElementHydrateSupport?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$var$o = $ab210b2da7b39b9d$var$s.litElementPolyfillSupport;
$ab210b2da7b39b9d$var$o?.({
    LitElement: $ab210b2da7b39b9d$export$3f2f9f5909897157
});
const $ab210b2da7b39b9d$export$f5c524615a7708d6 = {
    _$AK: (t, e, r)=>{
        t._$AK(e, r);
    },
    _$AL: (t)=>t._$AL
};
($ab210b2da7b39b9d$var$s.litElementVersions ??= []).push("4.2.2");


/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $a00bca1a101a9088$export$6acf61af03e62db = !1;




const $d067581fc0d59830$var$ensureArray = (value)=>{
    return Array.isArray(value) ? value : [
        value
    ];
};
class $d067581fc0d59830$export$70410bc798970b36 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    static{
        this.helpersLoaded = false;
    }
    setConfig(config) {
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svgItemConfig = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                entityId: this.config.entities?.[svg_item.id] ?? null
            }));
    }
    connectedCallback() {
        super.connectedCallback();
        $d067581fc0d59830$export$70410bc798970b36.loadHaComponents();
    }
    // HACK: Creating an entities card config element forces Home Assistant to
    // lazily register the ha-selector / ha-entity-picker components.
    static async loadHaComponents() {
        if ($d067581fc0d59830$export$70410bc798970b36.helpersLoaded) return;
        $d067581fc0d59830$export$70410bc798970b36.helpersLoaded = true;
        try {
            const cardHelpers = await window.loadCardHelpers();
            const entitiesCard = await cardHelpers.createCardElement({
                type: "entities",
                entities: []
            });
            await entitiesCard.constructor.getConfigElement();
        } catch (e) {
            $d067581fc0d59830$export$70410bc798970b36.helpersLoaded = false;
            console.error("Failed to load Home Assistant card helpers.", e);
        }
    }
    willUpdate(changedProperties) {
        if (changedProperties.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "en";
        }
    }
    render() {
        if (!this.config || this.svgItemConfig.length === 0) return 0, $f58f44579a4747ac$export$45b790e32b2810ee;
        const categories = {};
        let lastCategory = this.svgItemConfig[0].category;
        if (lastCategory) this.svgItemConfig.forEach((item)=>{
            lastCategory = item.category ?? lastCategory;
            const category = lastCategory[this.language];
            if (!categories[category]) categories[category] = [];
            categories[category].push(item);
        });
        const texts = (0, $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048)[this.language];
        return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
            <div class="card-config">
                <ha-expansion-panel
                    .header=${"HPSU Devices"}
                >
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
            device: {}
        }}
                        .value=${this.config.canDevice}
                        @value-changed=${this._entityChanged}
                        id="can-device-selector"
                        .placeholder=${texts.selectCanDevice}>
                    </ha-selector>
                    <ha-selector
                        .hass=${this.hass}
                        .selector=${{
            device: {}
        }}
                        .value=${this.config.uartDevice}
                        @value-changed=${this._entityChanged}
                        id="uart-device-selector"
                        .placeholder=${texts.selectUartDevice}>
                    </ha-selector>
                </ha-expansion-panel>
                ${Object.keys(categories).map((category)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                    <ha-expansion-panel
                        .header=${category}
                    >
                        ${categories[category].map((svg_item)=>(0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
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
    getRelevantEntityIds(svg_item) {
        const relevantEntityIds = [];
        const targetDeviceId = svg_item.device === "UART" ? this.config.uartDevice : this.config.canDevice;
        const targetUnit = $d067581fc0d59830$var$ensureArray(svg_item.unit);
        for(const entityId in this.hass.states){
            if (!Object.prototype.hasOwnProperty.call(this.hass.states, entityId)) continue;
            const entity = this.hass.states[entityId];
            const domain = entityId.substring(0, entityId.indexOf('.'));
            if (svg_item.device && targetDeviceId) {
                const entityRegistryEntry = this.hass.entities[entityId];
                if (!entityRegistryEntry || entityRegistryEntry.device_id !== targetDeviceId) continue;
            }
            if (svg_item.domain !== undefined && svg_item.domain !== domain) continue;
            if (domain !== "select") {
                const unitOfMeasurement = entity.attributes.unit_of_measurement;
                if (!targetUnit.includes(unitOfMeasurement)) continue;
            }
            relevantEntityIds.push(entityId);
        }
        return relevantEntityIds;
    }
    _entityChanged(event) {
        event.stopPropagation();
        const picker = event.target;
        const updatedEntities = {
            ...this.config.entities
        };
        let canDevice = this.config.canDevice;
        if (picker.id === "can-device-selector") canDevice = event.detail.value;
        let uartDevice = this.config.uartDevice;
        if (picker.id === "uart-device-selector") uartDevice = event.detail.value;
        const entityId = picker.getAttribute("data-id");
        if (entityId) updatedEntities[entityId] = event.detail.value;
        this.config = {
            ...this.config,
            canDevice: canDevice,
            uartDevice: uartDevice,
            entities: $d067581fc0d59830$export$70410bc798970b36.sortRecordBySvgOrder(updatedEntities, this.svgItemConfig)
        };
        this.dispatchEvent(new CustomEvent('config-changed', {
            detail: {
                config: this.config
            },
            bubbles: true,
            composed: true
        }));
    }
    static sortRecordBySvgOrder(data, svgItems) {
        const dataKeys = Object.keys(data);
        const sortedEntries = svgItems.filter((item)=>dataKeys.includes(item.id)).map((item)=>[
                item.id,
                data[item.id]
            ]);
        return Object.fromEntries(sortedEntries);
    }
    static get styles() {
        return (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
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
    constructor(...args){
        super(...args), this.language = "en", this.svgItemConfig = [];
    }
}
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "hass", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $d067581fc0d59830$export$70410bc798970b36.prototype, "config", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "language", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $d067581fc0d59830$export$70410bc798970b36.prototype, "svgItemConfig", void 0);




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $107bb7d062dde330$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $107bb7d062dde330$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $107bb7d062dde330$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}




/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $a4df01ff0b0132fe$export$3bebd1f0e3943985 extends (0, $107bb7d062dde330$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $f58f44579a4747ac$export$45b790e32b2810ee), i.type !== (0, $107bb7d062dde330$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $f58f44579a4747ac$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $f58f44579a4747ac$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$a4df01ff0b0132fe$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $a4df01ff0b0132fe$export$3bebd1f0e3943985.resultType = 1;
const $a4df01ff0b0132fe$export$b6e69390c23686fb = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($a4df01ff0b0132fe$export$3bebd1f0e3943985);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $33e813419ea8f3a8$var$t extends (0, $a4df01ff0b0132fe$export$3bebd1f0e3943985) {
}
$33e813419ea8f3a8$var$t.directiveName = "unsafeSVG", $33e813419ea8f3a8$var$t.resultType = 2;
const $33e813419ea8f3a8$export$1cb98903879b8bf5 = (0, $107bb7d062dde330$export$99b43ad1ed32e735)($33e813419ea8f3a8$var$t);




const $a399cc6bbb0eb26a$var$SCRIPT_FILENAME = "hpsu-dashboard-card.js";
var $a399cc6bbb0eb26a$export$4661a56c3a27d933 = /*#__PURE__*/ function(DashboardState) {
    DashboardState["Loading"] = "loading";
    DashboardState["Ready"] = "ready";
    DashboardState["Error"] = "error";
    return DashboardState;
}({});
class $a399cc6bbb0eb26a$export$9de59f1af66e4f03 extends (0, $ab210b2da7b39b9d$export$3f2f9f5909897157) {
    setConfig(config) {
        this.config = (0, $eb5cfe1dd9fe4e85$export$127f9a442b42d18)(config);
        this.svg_item_config = (0, $eb5cfe1dd9fe4e85$export$9b06e6104ce35b16).map((svg_item)=>({
                ...svg_item,
                entityId: this.config.entities?.[svg_item.id] ?? null
            }));
    }
    static getConfigElement() {
        return document.createElement("hpsu-dashboard-card-editor");
    }
    static getStubConfig() {
        return {
            entities: {}
        };
    }
    getCardSize() {
        return 12;
    }
    willUpdate(changed) {
        if (changed.has("hass") && this.hass?.language) {
            const lang = this.hass.language.split("-")[0];
            this.language = (0, $eb5cfe1dd9fe4e85$export$d0d68bb9ed2c643d).includes(lang) ? lang : "en";
        }
    }
    async firstUpdated() {
        await this.createDashboard();
    }
    async createDashboard() {
        const url = this.makeURL("hpsu.svg");
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Failed to fetch '${url}' (${response.status})`);
            const rawSvgString = await response.text();
            const svgWithLabels = this.createSvgWithLabels(rawSvgString);
            if (!svgWithLabels) throw new Error("The SVG was not parsed correctly.");
            this.svgContent = svgWithLabels;
            this._state = "ready";
        } catch (e) {
            console.error(e);
            this.svgContent = null;
            this._state = "error";
        }
    }
    addClickHandlers() {
        const setClickHandler = (elementId, getEntityId)=>{
            const element = this.shadowRoot?.getElementById(elementId);
            if (element) {
                element.addEventListener("click", ()=>{
                    const entityId = getEntityId();
                    if (entityId) this.handleStateClick(entityId);
                });
                element.setAttribute("cursor", "pointer");
            }
        };
        this.svg_item_config.forEach((svg_item)=>{
            if (svg_item.valueBox) {
                const id = `${svg_item.valueBox.id}_text`;
                // Resolve the entity at click time, so reconfiguring the card
                // does not leave handlers pointing at stale entity ids.
                setClickHandler(id, ()=>this.findEntityIdById(svg_item.id));
            }
        });
        const pressureEqualization = ()=>this.findEntityIdById("pressure_equalization");
        setClickHandler("eev_arrow_left", pressureEqualization);
        setClickHandler("eev_arrow_right", pressureEqualization);
    }
    updated() {
        if (this.isPanelView()) this.setAttribute('panel-view', '');
        else this.removeAttribute('panel-view');
        if (this._state === "ready") {
            this.updateLabels();
            this.updateOpacity();
            this.updateDynamics();
            if (!this.clickHandlersAdded) {
                this.addClickHandlers();
                this.clickHandlersAdded = true;
            }
        }
    }
    static{
        this.styles = (0, $def2de46b9306e8a$export$dbf350e5966cf602)`
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

        /* Mode/state and COP labels fade smoothly between their signal colors. */
        #mode_of_operating_value_text,
        #operating_mode_value_text,
        #cop_value_text {
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
    }
    render() {
        switch(this._state){
            case "error":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`<ha-card>${(0, $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048)[this.language].errorLoading}</ha-card>`;
            case "ready":
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)`
                    <hpsu-dashboard-card-container>
                        ${this.svgContent ? (0, $33e813419ea8f3a8$export$1cb98903879b8bf5)(this.svgContent) : (0, $f58f44579a4747ac$export$45b790e32b2810ee)}
                    </hpsu-dashboard-card-container>
                `;
            default:
                return (0, $f58f44579a4747ac$export$c0bb0b647f701bb5)``;
        }
    }
    createSvgWithLabels(svgString) {
        if (!svgString) return null;
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
        const svgElement = svgDoc.documentElement;
        if (!svgElement || svgElement.tagName.toLowerCase() !== "svg") {
            console.error("The SVG was not parsed correctly.");
            return null;
        }
        svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        svgElement.style.display = "block";
        this.createStateLabels(svgDoc);
        return new XMLSerializer().serializeToString(svgElement);
    }
    createStateLabels(svgDoc) {
        this.svg_item_config.forEach((svg_item)=>{
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
                } else console.warn(`Rect with ID ${svg_item.value_rect_id} parent not found.`);
            }
        });
    }
    createText(box) {
        const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
        textElement.id = `${box.id}_text`;
        textElement.setAttribute("dominant-baseline", "middle");
        textElement.setAttribute("stroke-width", "1");
        const transform = box.getAttribute('transform');
        if (transform) textElement.setAttribute("transform", transform);
        return textElement;
    }
    layoutText(text, box, align, yOffset) {
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
        if (yOffset !== undefined) text.setAttribute("y", (yPos + height / 2 + yOffset).toString());
    }
    updateLabels() {
        if (!this.config || !this.svg_item_config.length) return;
        this.svg_item_config.forEach((svg_item)=>{
            const newState = svg_item.entityId ? this.hass.states[svg_item.entityId] : null;
            const parentBox = svg_item.parent ? this.shadowRoot?.getElementById(svg_item.parent) : null;
            if (parentBox) parentBox.style.display = newState ? "block" : "none";
            if (svg_item.valueBox) {
                const id = `${svg_item.valueBox.id}_text`;
                const valueText = this.shadowRoot?.getElementById(id);
                if (valueText) {
                    const fontSize = svg_item.fontSize || "56";
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
                            const lang_map = (0, $eb5cfe1dd9fe4e85$export$f8cda7abf1aa048)[this.language];
                            valueText.textContent = newState.state === "on" ? lang_map.on : newState.state === "off" ? lang_map.off : "<invalid>";
                            valueText.setAttribute("fill", newState.state === "on" ? "yellow" : "silver");
                        } else {
                            let entityState = this.formatNumber(newState, svg_item.digits ?? 1);
                            entityState = (0, $eb5cfe1dd9fe4e85$export$812790f65cac9681)[entityState] ?? entityState;
                            const suffix = svg_item.texts[this.language]?.suffix;
                            valueText.textContent = suffix ? suffix + entityState : entityState;
                            const isError = svg_item.id === "error_code" && !(0, $eb5cfe1dd9fe4e85$export$ac75e9db5428c70).includes(newState.state);
                            let fill = isError ? "red" : "silver";
                            if (svg_item.id === "mode_of_operating" || svg_item.id === "operating_mode") fill = this.getModeColor(newState.state) ?? "silver";
                            else if (svg_item.id === "cop") fill = this.getCopColor(parseFloat(newState.state)) ?? "silver";
                            valueText.setAttribute("fill", fill);
                        }
                    }
                    this.layoutText(valueText, svg_item.valueBox, svg_item.align, svg_item.offset);
                } else console.warn(`Label not found for entity: ${svg_item.entityId}`);
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
     */ getModeColor(state) {
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
     * Colors the COP value according to real-world air/water heat pump
     * efficiency: below ~2 is poor, around 3 is average for an A2/W35-45
     * machine, 4+ is good and 5+ is excellent (mild weather / low flow
     * temperature). A COP of 0 (compressor off) stays neutral.
     */ getCopColor(cop) {
        if (!isFinite(cop) || cop <= 0) return null;
        if (cop < 2) return "#ff5252";
        if (cop < 2.5) return "#ff8a50";
        if (cop < 3) return "#ffb74d";
        if (cop < 3.5) return "#ffd54f";
        if (cop < 4) return "#d4e157";
        if (cop < 5) return "#9ccc65";
        return "#4caf50";
    }
    setFill(elementId, color) {
        this.shadowRoot?.getElementById(elementId)?.setAttribute('fill', color);
    }
    updateOpacity() {
        if (!this.config) return;
        const dhwOpenArrows = this.shadowRoot?.getElementById("dhw-open-arrows");
        const dhwClosedArrows = this.shadowRoot?.getElementById("dhw-closed-arrows");
        const bpvOpenArrows = this.shadowRoot?.getElementById("bpv-open-arrows");
        const bpvClosedArrows = this.shadowRoot?.getElementById("bpv-closed-arrows");
        if (!dhwOpenArrows || !dhwClosedArrows || !bpvOpenArrows || !bpvClosedArrows) return;
        const flowRate = this.getNumericState("flow_rate");
        const mixerState = this.getNumericState("mixer");
        const bpvState = this.getNumericState("bypass");
        dhwOpenArrows.style.opacity = (flowRate > 0 ? mixerState / 100.0 : 0).toString();
        dhwClosedArrows.style.opacity = (flowRate > 0 ? (100.0 - mixerState) / 100.0 : 0).toString();
        bpvOpenArrows.style.opacity = (flowRate > 0 ? bpvState / 100.0 : 0).toString();
        bpvClosedArrows.style.opacity = (flowRate > 0 ? (100.0 - bpvState) / 100.0 : 0).toString();
        for(let index = 1; index <= 8; ++index){
            const arrow = this.shadowRoot?.getElementById(`Flow-Arrow-${index}`);
            if (arrow) arrow.style.opacity = (flowRate > 0 ? 1 : 0).toString();
        }
    }
    getNumericState(itemId) {
        const entityId = this.config.entities?.[itemId];
        const entity = entityId ? this.hass.states[entityId] : null;
        const value = entity ? parseFloat(entity.state) : NaN;
        return isNaN(value) ? 0 : value;
    }
    getBinaryState(itemId) {
        const entityId = this.config.entities?.[itemId];
        return entityId ? this.hass.states[entityId]?.state === "on" : false;
    }
    /**
     * Drives the CSS animations of the schema: pulsing flow arrows, pump,
     * compressor and backup heater activity, fan flutter and the tank color.
     * Animation speeds scale with the measured values.
     */ updateDynamics() {
        const clamp = (value, min, max)=>Math.min(max, Math.max(min, value));
        const flowRate = this.getNumericState("flow_rate");
        const compressorOn = this.getBinaryState("compressor_status");
        const pumpPercent = this.getNumericState("circulation_pump");
        const pumpOn = this.getBinaryState("circulation_pump_status") || pumpPercent > 0;
        const fanRpm = this.getNumericState("fan_speed");
        const fanOn = fanRpm > 0 || !this.config.entities?.["fan_speed"] && compressorOn;
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
        const warmth = tankTemp > 0 && setpoint > 0 ? clamp((tankTemp - (setpoint - range)) / range, 0, 1) : 0;
        this.style.setProperty("--hpsu-tank-hue", `${Math.round(warmth * -215)}deg`);
    }
    handleStateClick(entityId) {
        this.dispatchEvent(new CustomEvent("hass-more-info", {
            detail: {
                entityId: entityId
            },
            bubbles: true,
            composed: true
        }));
    }
    /**
     * Resolves a file shipped next to this script, wherever the script is
     * served from: HA Marketplace (/local/community/<repo>/), legacy HACS
     * (/hacsfiles/<repo>/) or a manual install (/local/<repo>/dist/).
     * The script's own query string (e.g. ?hacstag=...) is reused as cache
     * buster, so the SVG is refreshed exactly when the card is updated.
     */ makeURL(filename) {
        // import.meta.url can't be used: the bundler replaces it at build time.
        const scriptElement = document.querySelector(`script[src*="/${$a399cc6bbb0eb26a$var$SCRIPT_FILENAME}"]`);
        const scriptUrl = new URL(scriptElement?.src ?? `/local/community/daikin-rotex-hpsu-dashboard/${$a399cc6bbb0eb26a$var$SCRIPT_FILENAME}`, document.baseURI);
        const fileUrl = new URL(filename, scriptUrl);
        fileUrl.search = scriptUrl.search || `?v=${Date.now()}`;
        return fileUrl.pathname + fileUrl.search;
    }
    isPanelView() {
        let node = this;
        while(node){
            if (node.tagName?.toLowerCase() === "hui-panel-view") return true;
            node = node.getRootNode()?.host;
        }
        return false;
    }
    formatNumber(entity, digits) {
        if (!entity || !entity.state) return "--";
        const number = Number(entity.state);
        if (isNaN(number)) return entity.state;
        const formatted = new Intl.NumberFormat(this.hass.language, {
            minimumFractionDigits: digits,
            maximumFractionDigits: digits
        }).format(number);
        const suffix = entity.attributes?.unit_of_measurement;
        return suffix ? `${formatted} ${suffix}` : formatted;
    }
    isBooleanSensor(entityId) {
        return entityId?.startsWith("binary_sensor.") ?? false;
    }
    isPositiveNumber(value) {
        return !!value && !isNaN(Number(value)) && Number(value) > 0;
    }
    findEntityIdById(id) {
        return this.svg_item_config.find((item)=>item.id === id)?.entityId;
    }
    constructor(...args){
        super(...args), this._state = "loading", this.language = "en", this.svgContent = null, this.svg_item_config = [], this.clickHandlersAdded = false;
    }
}
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $9cd908ed2625c047$export$d541bacb2bda4494)({
        attribute: false
    })
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "hass", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "_state", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "language", void 0);
(0, $656ade2323340eda$export$71511d61b312f219)([
    (0, $04c21ea1ce1f6057$export$ca000e230c0caa3e)()
], $a399cc6bbb0eb26a$export$9de59f1af66e4f03.prototype, "svgContent", void 0);
customElements.define("hpsu-dashboard-card", $a399cc6bbb0eb26a$export$9de59f1af66e4f03);
customElements.define("hpsu-dashboard-card-editor", (0, $d067581fc0d59830$export$70410bc798970b36));
window.customCards = window.customCards || [];
window.customCards.push({
    type: "hpsu-dashboard-card",
    name: "HPSU Dashboard",
    description: "A Lovelace card for visualizing the Daikin HPSU status.",
    preview: true,
    documentationURL: "https://github.com/wrfz/daikin-rotex-hpsu-dashboard"
});


export {$a399cc6bbb0eb26a$export$4661a56c3a27d933 as DashboardState, $a399cc6bbb0eb26a$export$9de59f1af66e4f03 as HPSUDashboardCard};
//# sourceMappingURL=hpsu-dashboard-card.js.map
