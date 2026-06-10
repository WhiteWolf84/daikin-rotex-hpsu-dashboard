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
        id: "ta",
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
                desc: "TA - Außentemperatur"
            },
            en: {
                label: "TA",
                desc: "TA - Outside Temperature"
            },
            it: {
                label: "TA",
                desc: "TA - Temperatura esterna"
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
                desc: "TA2 - Im Außengerät"
            },
            en: {
                label: "TA2",
                desc: "TA2 - In the outdoor unit"
            },
            it: {
                label: "TA2",
                desc: "TA2 - Nell'unità esterna"
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
                desc: "Electronic Expansion Valve"
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
        id: "kondensat",
        label_rect_id: "kondensat_label",
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        value_rect_id: "kondensat_value",
        offset: 6,
        texts: {
            de: {
                label: "Kondensat",
                desc: "Kondensat"
            },
            en: {
                label: "Condensate",
                desc: "Condensate"
            },
            it: {
                label: "Condensato",
                desc: "Condensato"
            }
        }
	},
    {
        id: "umwaelzpumpe",
        label_rect_id: "uwp_label",
        domain:  "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "uwp_value",
        offset: 6,
        digits: 0,
        texts: {
            de: {
                label: "Umwälzpumpe",
                desc: "Umwälzpumpe"
            },
            en: {
                label: "Circulation pump",
                desc: "Circulation pump"
            },
            it: {
                label: "Pompa circ.",
                desc: "Pompa di circolazione"
            }
        }
    },
    {
        id: "umwaelzpumpe_an_aus",
        domain:  "binary_sensor",
        device: "CAN",
        value_rect_id: "circ_pump_rect",
        offset: 2,
        fontSize: "30px",
        texts: {
            de: {
                desc: "Status Umwälzpumpe"
            },
            en: {
                desc: "Circulation pump status"
            },
            it: {
                desc: "Stato pompa di circolazione"
            }
        }
    },
    {
        id: "durchfluss",
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
                desc: "Portata"
            }
        }
    },
    {
        id: "ruecklauf_1",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "return_flow_label",
        value_rect_id: "return_flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Rücklauf",
                desc: "Rücklauf - CAN"
            },
            en: {
                label: "Return flow",
                desc: "Return flow - CAN"
            },
            it: {
                label: "Ritorno",
                desc: "Ritorno - CAN"
            }
        }
    },
    {
        id: "ruecklauf_2",
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        value_rect_id: "return_flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "Rücklauf - UART"
            },
            en: {
                desc: "Return flow - UART"
            },
            it: {
                desc: "Ritorno - UART"
            }
        }
    },
    {
        id: "verdampfer",
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
                desc: "Verdampfer"
            },
            en: {
                label: "Evaporator",
                desc: "Evaporator"
            },
            it: {
                label: "Evaporatore",
                desc: "Evaporatore"
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
                desc: "Heißgas"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo"
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
                desc: "Heißgas am Kondensator"
            },
            en: {
                label: "Hot gas",
                desc: "Hot gas at the condenser"
            },
            it: {
                label: "Gas caldo",
                desc: "Gas caldo al condensatore"
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
                desc: "Spreizung"
            },
            en: {
                label: "Spread",
                desc: "Temperature spread"
            },
            it: {
                label: "ΔT",
                desc: "Differenza di temperatura"
            }
        }
    },
    {
        id: "vorlauf_1",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "flow_label",
        value_rect_id: "flow_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf",
                desc: "Vorlauf - CAN"
            },
            en: {
                label: "Flow",
                desc: "Flow - CAN"
            },
            it: {
                label: "Mandata",
                desc: "Mandata - CAN"
            }
        }
    },
    {
        id: "vorlauf_2",
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        value_rect_id: "flow_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "Vorlauf - UART"
            },
            en: {
                desc: "Flow - UART"
            },
            it: {
                desc: "Mandata - UART"
            }
        }
    },
    {
        id: "vorlauf_soll",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "flow_setpoint_label",
        value_rect_id: "flow_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf-Soll",
                desc: "Vorlauf Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Flow setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura di mandata impostata"
            }
        }
    },
    {
        id: "wasserdruck",
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
                desc: "Water Pressure"
            },
            it: {
                label: "Pressione",
                desc: "Pressione dell'acqua"
            }
        }
    },
    {
        id: "vorlauf_bh_1",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "flow_bh_label",
        value_rect_id: "flow_bh_can_value",
        offset: 6,
        texts: {
            de: {
                label: "Vorlauf BH",
                desc: "VorlaufBH - CAN"
            },
            en: {
                label: "Flow BH",
                desc: "Flow BH - CAN"
            },
            it: {
                label: "Mandata BH",
                desc: "Mandata al riscaldatore di backup - CAN"
            }
        }
    },
    {
        id: "vorlauf_bh_2",
        domain:  "sensor",
        device: "UART",
        unit: "°C",
        value_rect_id: "flow_bh_uart_value",
        offset: 6,
        texts: {
            de: {
                desc: "VorlaufBH - UART"
            },
            en: {
                desc: "Flow BH - UART"
            },
            it: {
                desc: "Mandata BH - UART"
            }
        }
    },
    {
        id: "kompressor_an_aus",
        domain:  "binary_sensor",
        device: "CAN",
        value_rect_id: "comp_rect",
        offset: 2,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Status Kompressor"
            },
            en: {
                desc: "Compressor status"
            },
            it: {
                desc: "Stato del compressore"
            }
        }
    },
    {
        id: "luefter",
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
                desc: "Lüfter Drehzahl"
            },
            en: {
                label: "Fan",
                desc: "Fan speed"
            },
            it: {
                label: "Ventilatore",
                desc: "Velocità del ventilatore"
            }
        }
    },
    {
        id: "verdichter",
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
                desc: "Verdichter Drehzahl"
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
        id: "speicher",
        domain:  "sensor",
        device: "CAN",
        unit: "°C",
        label_rect_id: "storage_label",
        value_rect_id: "storage_value",
        offset: 6,
        texts: {
            de: {
                label: "Speicher",
                desc: "Speicher Ist"
            },
            en: {
                label: "Storage",
                desc: "Current storage value"
            },
            it: {
                label: "Serbatoio",
                desc: "Temperatura serbatoio attuale"
            }
        }
    },
    {
        id: "speicher_soll",
        domain:  "select",
        device: "CAN",
        unit: "°C",
        label_rect_id: "storage_setpoint_label",
        value_rect_id: "storage_setpoint_value",
        offset: 6,
        texts: {
            de: {
                label: "Soll",
                desc: "Speicher Soll"
            },
            en: {
                label: "Setpoint",
                desc: "Storage setpoint"
            },
            it: {
                label: "Impostata",
                desc: "Temperatura serbatoio impostata"
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
                label: "Heating rod",
                desc: "Heating rod power"
            },
            it: {
                label: "Resistenza",
                desc: "Potenza della barra riscaldante"
            }
        }
    },
    {
        id: "mischer",
        domain:  "sensor",
        device: "CAN",
        unit: "%",
        value_rect_id: "dhw_mixer_value",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        texts: {
            de: {
                desc: "Mischer"
            },
            en: {
                desc: "Mixer"
            },
            it: {
                desc: "Miscelatore"
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
                desc: "Bypass"
            },
            en: {
                desc: "Bypass"
            },
            it: {
                desc: "Bypass"
            }
        }
    },
    {
        id: "fehlercode",
        domain:  "sensor",
        device: "CAN",
        value_rect_id: "fehlercode_value",
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
        id: "betriebsmodus",
        domain:  "select",
        device: "CAN",
        value_rect_id: "betriebsmodus_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Modus: ",
                desc: "Betriebsmodus"
            },
            en: {
                suffix: "Mode: ",
                desc: "Operating mode"
            },
            it: {
                suffix: "Modalità: ",
                desc: "Modalità di funzionamento"
            }
        }
    },
    {
        id: "betriebsart",
        domain:  "sensor",
        device: "CAN",
        value_rect_id: "betriebsart_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Betriebsart: ",
                desc: "Betriebsart"
            },
            en: {
                suffix: "Op. mode: ",
                desc: "Current operating mode"
            },
            it: {
                suffix: "Funzionamento: ",
                desc: "Tipo di funzionamento"
            }
        }
    },
    {
        id: "thermische_leistung",
        domain:  "sensor",
        device: "CAN",
        unit: "kW",
        value_rect_id: "therm_leistung_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        texts: {
            de: {
                suffix: "Thermische Leistung: ",
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
                suffix: "Elektrische Leistung: ",
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
                desc: "COP"
            },
            en: {
                suffix: "COP: ",
                desc: "COP"
            },
            it: {
                suffix: "COP: ",
                desc: "COP"
            }
        }
    },
    {
        id: "t_room_is",
        domain:  "sensor",
        value_rect_id: "t_room_is_value",
        offset: 6,
        fontSize: "40px",
        align: "left",
        optional: true,
        texts: {
            de: {
                suffix: "Raum-Ist: ",
                desc: "Raum-Ist"
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
                desc: "Datum"
            },
            en: {
                desc: "Date"
            },
            it: {
                desc: "Data"
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
                desc: "Zeit"
            },
            en: {
                desc: "Time"
            },
            it: {
                desc: "Ora"
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

export interface HpsuDashboardConfig {
    type: string;
    entities?: Record<string, string>;
    canDevice?: string;
    uartDevice?: string;
    [key: string]: unknown;
}

export const validateConfig = function(config: HpsuDashboardConfig): HpsuDashboardConfig {
    const validEntities = Object.fromEntries(
        Object.entries(config.entities ?? {}).filter(([key]) =>
            svg_item_config.some(entity_conf => entity_conf.id === key)
        )
    );

    return {
        ...config,
        entities: validEntities
    };
}