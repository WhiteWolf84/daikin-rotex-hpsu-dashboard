export type Language = "de" | "en" | "it";

export type Category = Record<Language, string>;

export type TextAlign = "left" | "middle";

export interface SVGItemTexts {
    label?: string;
    suffix?: string;
    desc: string;
}

export interface SVGItem {
    entityId?: string | null;
    parent?: string;
    labelBox?: Element | null;
    valueBox?: Element | null;

    id: string;
    label_rect_id?: string;
    domain: string;
    device?: "CAN" | "UART";
    value_rect_id?: string;
    offset?: number;
    category?: Category;
    unit?: string | string[];
    digits?: number;
    fontSize?: string;
    align?: TextAlign;
    optional?: boolean;
    texts: Record<Language, SVGItemTexts>;
}

export const svg_item_config: SVGItem[] = [
    {
        id: "outside_temperature",
        label_rect_id: "ta_label",
        domain: "sensor",
        device: "CAN",
        unit: "°C",
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
                desc: "TA - Außentemperatur (RoCon OT1)"
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
        unit: "°C",
        value_rect_id: "ta2_val",
        offset: 6,
        optional: true,
        parent: "TA2",
        texts: {
            de: {
                label: "TA2",
                desc: "TA2 - Außentemperatur am Außengerät"
            },
            en: {
                label: "TA2",
                desc: "TA2 - Outdoor unit air temperature"
            },
            it: {
                label: "TA2",
                desc: "TA2 - Temperatura aria unità esterna"
            }
        }
    },
    {
        id: "expansion_valve",
        label_rect_id: "eev_label",
        domain:  "sensor",
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
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
        domain:  "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "circulation_pump_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Umwälzpumpe",
                desc: "Umwälzpumpe - Leistung"
            },
            en: {
                label: "Circ. pump",
                desc: "Circulation pump - speed"
            },
            it: {
                label: "Pompa circ.",
                desc: "Pompa di circolazione - velocità"
            }
        }
    },
    {
        id: "circulation_pump_status",
        domain:  "binary_sensor",
        device: "CAN",
        value_rect_id: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Umwälzpumpe - Status"
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
        domain:  "sensor",
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
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "return_flow_label",
        value_rect_id: "return_flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Rücklauf",
                desc: "TR - Rücklauftemperatur (CAN)"
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        value_rect_id: "return_flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "TR - Rücklauftemperatur (UART)"
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        label_rect_id: "hot_gas_label",
        value_rect_id: "hot_gas_value",
        offset: 6,
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgastemperatur"
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
        domain:  "sensor",
        unit: "°C",
        label_rect_id: "hot_gas_condenser_label",
        value_rect_id: "hot_gas_condenser_value",
        offset: 6,
        optional: true,
        parent: "hot_gas_condenser",
        texts: {
            de: {
                label: "Heißgas",
                desc: "Heißgastemperatur am Kondensator"
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
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
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
                label: "ΔT",
                desc: "Differenza di temperatura (TV - TR)"
            }
        }
    },
    {
        id: "flow_temperature_can",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
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
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
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
        domain:  "sensor",
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
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
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
        domain:  "sensor",
        device: "UART",
        unit: "°C",
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
        domain:  "binary_sensor",
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
        domain:  "sensor",
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
                label: "Lüfter",
                desc: "Lüfterdrehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            },
            it: {
                label: "Ventola",
                desc: "Velocità della ventola"
            }
        }
    },
    {
        id: "compressor_speed",
        domain:  "sensor",
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
                desc: "Velocità del compressore"
            }
        }
    },
    {
        id: "storage_temperature",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
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
        domain:  "select",
        device: "CAN",
        unit: "°C",
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
        domain:  "sensor",
        unit: ["W", "kW"],
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "select",
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
                suffix: "Modalità: ",
                desc: "Modalità operativa (impostata dall'utente)"
            }
        }
    },
    {
        id: "mode_of_operating",
        domain:  "sensor",
        device: "CAN",
        value_rect_id: "mode_of_operating_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Status: ",
                desc: "Aktueller Wärmepumpenstatus"
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "sensor",
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
        domain:  "sensor",
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

export const languages: Language[] = ["de", "en", "it"];

export interface UITexts {
    on: string;
    off: string;
    errorLoading: string;
    selectCanDevice: string;
    selectUartDevice: string;
}

export const text_map: Record<Language, UITexts> = {
    de: {
        on: "An",
        off: "Aus",
        errorLoading: "Fehler beim Laden des HPSU Dashboards.",
        selectCanDevice: "CAN Gerät auswählen",
        selectUartDevice: "UART Gerät auswählen",
    },
    en: {
        on: "On",
        off: "Off",
        errorLoading: "Failed to load the HPSU dashboard.",
        selectCanDevice: "Select CAN device",
        selectUartDevice: "Select UART device",
    },
    it: {
        on: "On",
        off: "Off",
        errorLoading: "Errore durante il caricamento della dashboard HPSU.",
        selectCanDevice: "Seleziona dispositivo CAN",
        selectUartDevice: "Seleziona dispositivo UART",
    },
};

// State strings emitted by the Daikin-Rotex-HPSU-CAN integration that mean
// "no error". The integration localizes entity states independently of the
// dashboard language, so all supported languages are listed.
export const no_error_states = [
    "Kein Fehler",
    "No Error",
    "Nessun Errore",
    "Pas d'erreur",
];

// Long integration state strings that do not fit into their SVG value box,
// mapped to a shorter display form.
export const state_abbreviations: Record<string, string> = {
    "Warmwasserbereitung": "Warmwasser",
    "Hot Water Production": "Hot Water",
    "Produzione di Acqua Calda": "Acqua Calda",
    "Préparation d’eau chaude": "Eau chaude",
};

// Maps configuration keys used by previous (German) releases to the current
// English ids, so existing card configurations keep working after the rename.
export const legacy_id_map: Record<string, string> = {
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
    t_room_is: "room_temperature",
};

export interface HpsuDashboardConfig {
    type: string;
    entities?: Record<string, string>;
    canDevice?: string;
    uartDevice?: string;
    [key: string]: unknown;
}

export const validateConfig = function(config: HpsuDashboardConfig): HpsuDashboardConfig {
    const validIds = new Set(svg_item_config.map(item => item.id));
    const validEntities: Record<string, string> = {};

    for (const [key, value] of Object.entries(config.entities ?? {})) {
        const id = legacy_id_map[key] ?? key;
        if (validIds.has(id)) {
            validEntities[id] = value as string;
        }
    }

    return {
        ...config,
        entities: validEntities
    };
}
