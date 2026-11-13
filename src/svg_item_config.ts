export type Language = "de" | "en" | "it";

export type Category = Record<Language, string>;

export type TextAlign = "left" | "middle";

export interface SVGValueTexts {
    suffix?: string;
    desc: string;
}

export interface SVGValue {
    id: string;
    entityId?: string | null;
    device?: "CAN" | "UART";
    domain: string;
    unit?: string | string[];
    optional?: boolean;
    value_rect_id?: string;
    valueBox?: any;
    texts: Record<Language, SVGValueTexts>;
}

export interface SVGItem {
    parent?: string;
    labelBox?: any;
    group_id: string;
    label_rect_id?: string;
    visual_container?: boolean;
    offset?: number;
    category?: Category;
    digits?: number;
    fontSize?: string;
    align?: TextAlign;
    suffix?: string;
    values: SVGValue[];
    texts?: Record<Language, { label?: string }>;
}

export const svg_item_config: SVGItem[] = [
    {
        group_id: "TA",
        label_rect_id: "ta_label",
        offset: 6,
        category: {
            de: "Oben",
            en: "Top",
            it: "In alto"
        },
        visual_container: true,
        values: [
            {
                id: "outside_temperature",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "ta_val",
                texts: {
                    de: {
                        desc: "TA - Außentemperatur (RoCon OT1)"
                    },
                    en: {
                        desc: "TA - Outside temperature (RoCon OT1)"
                    },
                    it: {
                        desc: "TA - Temperatura esterna (sonda RoCon OT1)"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "TA"
            },
            en: {
                label: "TA"
            },
            it: {
                label: "TA"
            }
        }
    },
    {
        group_id: "TA2",
        label_rect_id: "ta2_label",
        offset: 6,
        parent: "TA2",
        visual_container: true,
        values: [
            {
                id: "ta2",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                optional: true,
                value_rect_id: "ta2_val",
                texts: {
                    de: {
                        desc: "TA2 - Außentemperatur am Außengerät"
                    },
                    en: {
                        desc: "TA2 - Outdoor unit air temperature"
                    },
                    it: {
                        desc: "TA2 - Temperatura aria unità esterna"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "TA2"
            },
            en: {
                label: "TA2"
            },
            it: {
                label: "TA2"
            }
        }
    },
    {
        group_id: "EEV",
        label_rect_id: "eev_label",
        offset: 6,
        digits: 0,
        visual_container: true,
        values: [
            {
                id: "expansion_valve",
                device: "UART",
                domain: "sensor",
                unit: "pls",
                value_rect_id: "eev_val",
                texts: {
                    de: {
                        desc: "Elektronisches Expansionsventil"
                    },
                    en: {
                        desc: "Electronic expansion valve"
                    },
                    it: {
                        desc: "Valvola di espansione elettronica"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "EEV"
            },
            en: {
                label: "EEV"
            },
            it: {
                label: "EEV"
            }
        }
    },
    {
        group_id: "eev-schema",
        values: [
            {
                id: "pressure_equalization",
                device: "UART",
                domain: "binary_sensor",
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
            }
        ]
    },
    {
        group_id: "Kondensat",
        label_rect_id: "kondensat_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "condensate",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "kondensat_value",
                texts: {
                    de: {
                        desc: "Kondensattemperatur"
                    },
                    en: {
                        desc: "Condensate temperature"
                    },
                    it: {
                        desc: "Temperatura della condensa"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Kondensat"
            },
            en: {
                label: "Condensate"
            },
            it: {
                label: "Condensa"
            }
        }
    },
    {
        group_id: "Umwaelzpumpe",
        label_rect_id: "uwp_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "circulation_pump",
                device: "CAN",
                domain: "sensor",
                unit: "%",
                value_rect_id: "uwp_value",
                texts: {
                    de: {
                        desc: "Umwälzpumpe - Leistung"
                    },
                    en: {
                        desc: "Circulation pump - speed"
                    },
                    it: {
                        desc: "Pompa di circolazione - velocità"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Umwälzpumpe"
            },
            en: {
                label: "Circ. pump"
            },
            it: {
                label: "Pompa circ."
            }
        }
    },
    {
        group_id: "Umwaelzpumpe-Status",
        offset: 2,
        fontSize: "30px",
        values: [
            {
                id: "circulation_pump_status",
                device: "CAN",
                domain: "binary_sensor",
                value_rect_id: "circ_pump_rect",
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
            }
        ]
    },
    {
        group_id: "Durchfluss",
        label_rect_id: "flow_rate_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "flow_rate",
                device: "CAN",
                domain: "sensor",
                unit: "L/h",
                value_rect_id: "flow_rate_value",
                texts: {
                    de: {
                        desc: "Durchfluss"
                    },
                    en: {
                        desc: "Flow rate"
                    },
                    it: {
                        desc: "Portata acqua"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Durchfluss"
            },
            en: {
                label: "Flow rate"
            },
            it: {
                label: "Portata"
            }
        }
    },
    {
        group_id: "Ruecklauf",
        label_rect_id: "return_flow_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "return_temperature_can",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "return_flow_can_value",
                texts: {
                    de: {
                        desc: "TR - Rücklauftemperatur (CAN)"
                    },
                    en: {
                        desc: "TR - Return temperature (CAN)"
                    },
                    it: {
                        desc: "TR - Temperatura di ritorno (CAN)"
                    }
                }
            },
            {
                id: "return_temperature_uart",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "return_flow_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Rücklauf"
            },
            en: {
                label: "Return"
            },
            it: {
                label: "Ritorno"
            }
        }
    },
    {
        group_id: "Verdampfer",
        label_rect_id: "evaporator_label",
        visual_container: true,
        offset: 6,
        category: {
            de: "Mitte",
            en: "Middle",
            it: "Centro"
        },
        values: [
            {
                id: "evaporator",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "evaporator_value",
                texts: {
                    de: {
                        desc: "Verdampfertemperatur"
                    },
                    en: {
                        desc: "Evaporator temperature"
                    },
                    it: {
                        desc: "Temperatura dell'evaporatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Verdampfer"
            },
            en: {
                label: "Evaporator"
            },
            it: {
                label: "Evaporatore"
            }
        }
    },
    {
        group_id: "hot_gas",
        label_rect_id: "hot_gas_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "hot_gas",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "hot_gas_value",
                texts: {
                    de: {
                        desc: "Heißgastemperatur"
                    },
                    en: {
                        desc: "Hot gas temperature"
                    },
                    it: {
                        desc: "Temperatura del gas caldo"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heißgas"
            },
            en: {
                label: "Hot gas"
            },
            it: {
                label: "Gas caldo"
            }
        }
    },
    {
        group_id: "hot_gas_condenser",
        label_rect_id: "hot_gas_condenser_label",
        visual_container: true,
        offset: 6,
        parent: "hot_gas_condenser",
        values: [
            {
                id: "hot_gas_condenser",
                domain: "sensor",
                unit: "°C",
                optional: true,
                value_rect_id: "hot_gas_condenser_value",
                texts: {
                    de: {
                        desc: "Heißgastemperatur am Kondensator"
                    },
                    en: {
                        desc: "Hot gas temperature at the condenser"
                    },
                    it: {
                        desc: "Temperatura del gas caldo al condensatore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heißgas"
            },
            en: {
                label: "Hot gas"
            },
            it: {
                label: "Gas caldo"
            }
        }
    },
    {
        group_id: "Spreizung",
        label_rect_id: "spread_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "spread",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "spread_value",
                texts: {
                    de: {
                        desc: "Spreizung (TV - TR)"
                    },
                    en: {
                        desc: "Temperature spread (TV - TR)"
                    },
                    it: {
                        desc: "Differenza di temperatura (TV - TR)"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Spreizung"
            },
            en: {
                label: "Spread"
            },
            it: {
                label: "ΔT"
            }
        }
    },
    {
        group_id: "Vorlauf",
        label_rect_id: "flow_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "flow_temperature_can",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_can_value",
                texts: {
                    de: {
                        desc: "TV - Vorlauftemperatur (CAN)"
                    },
                    en: {
                        desc: "TV - Flow temperature (CAN)"
                    },
                    it: {
                        desc: "TV - Temperatura di mandata (CAN)"
                    }
                }
            },
            {
                id: "flow_temperature_uart",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Vorlauf"
            },
            en: {
                label: "Flow"
            },
            it: {
                label: "Mandata"
            }
        }
    },
    {
        group_id: "Vorlauf-Soll",
        label_rect_id: "flow_setpoint_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "flow_temperature_setpoint",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_setpoint_value",
                texts: {
                    de: {
                        desc: "Vorlauf-Solltemperatur"
                    },
                    en: {
                        desc: "Flow temperature setpoint"
                    },
                    it: {
                        desc: "Temperatura di mandata impostata"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Vorlauf-Soll"
            },
            en: {
                label: "Flow set"
            },
            it: {
                label: "Mand. imp."
            }
        }
    },
    {
        group_id: "Druck",
        label_rect_id: "pressure_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "water_pressure",
                device: "CAN",
                domain: "sensor",
                unit: "bar",
                value_rect_id: "pressure_value",
                texts: {
                    de: {
                        desc: "Wasserdruck"
                    },
                    en: {
                        desc: "Water pressure"
                    },
                    it: {
                        desc: "Pressione dell'acqua"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Druck"
            },
            en: {
                label: "Pressure"
            },
            it: {
                label: "Pressione"
            }
        }
    },
    {
        group_id: "Vorlauf-BH",
        label_rect_id: "flow_bh_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "flow_temperature_bh_can",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_bh_can_value",
                texts: {
                    de: {
                        desc: "TVBH - Vorlauf nach Heizstab (CAN)"
                    },
                    en: {
                        desc: "TVBH - Flow after backup heater (CAN)"
                    },
                    it: {
                        desc: "TVBH - Mandata dopo resistenza (CAN)"
                    }
                }
            },
            {
                id: "flow_temperature_bh_uart",
                device: "UART",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "flow_bh_uart_value",
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
            }
        ],
        texts: {
            de: {
                label: "Vorlauf BH"
            },
            en: {
                label: "Flow BH"
            },
            it: {
                label: "Mand. BH"
            }
        }
    },
    {
        group_id: "compressor_on_off_group",
        offset: 2,
        fontSize: "40px",
        values: [
            {
                id: "compressor_status",
                device: "CAN",
                domain: "binary_sensor",
                value_rect_id: "comp_rect",
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
            }
        ]
    },
    {
        group_id: "Luefter",
        label_rect_id: "fan_label",
        visual_container: true,
        offset: 6,
        category: {
            de: "Unten",
            en: "Bottom",
            it: "In basso"
        },
        digits: 0,
        values: [
            {
                id: "fan_speed",
                device: "UART",
                domain: "sensor",
                unit: "RPM",
                value_rect_id: "fan_value",
                texts: {
                    de: {
                        desc: "Lüfterdrehzahl"
                    },
                    en: {
                        desc: "Fan speed"
                    },
                    it: {
                        desc: "Velocità della ventola"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Lüfter"
            },
            en: {
                label: "Fan"
            },
            it: {
                label: "Ventola"
            }
        }
    },
    {
        group_id: "Verdichter",
        label_rect_id: "compressor_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        values: [
            {
                id: "compressor_speed",
                device: "UART",
                domain: "sensor",
                unit: "RPM",
                value_rect_id: "compressor_value",
                texts: {
                    de: {
                        desc: "Verdichterdrehzahl"
                    },
                    en: {
                        desc: "Compressor speed"
                    },
                    it: {
                        desc: "Velocità del compressore"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Verdichter"
            },
            en: {
                label: "Compressor"
            },
            it: {
                label: "Compressore"
            }
        }
    },
    {
        group_id: "Speicher",
        label_rect_id: "storage_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "storage_temperature",
                device: "CAN",
                domain: "sensor",
                unit: "°C",
                value_rect_id: "storage_value",
                texts: {
                    de: {
                        desc: "Speichertemperatur (Ist)"
                    },
                    en: {
                        desc: "DHW tank temperature (actual)"
                    },
                    it: {
                        desc: "Temperatura bollitore (attuale)"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Speicher"
            },
            en: {
                label: "Tank"
            },
            it: {
                label: "Bollitore"
            }
        }
    },
    {
        group_id: "Speicher-Soll",
        label_rect_id: "storage_setpoint_label",
        visual_container: true,
        offset: 6,
        values: [
            {
                id: "storage_setpoint",
                device: "CAN",
                domain: "select",
                unit: "°C",
                value_rect_id: "storage_setpoint_value",
                texts: {
                    de: {
                        desc: "Speichertemperatur (Soll)"
                    },
                    en: {
                        desc: "DHW tank temperature setpoint"
                    },
                    it: {
                        desc: "Temperatura bollitore impostata"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Soll"
            },
            en: {
                label: "Setpoint"
            },
            it: {
                label: "Imp."
            }
        }
    },
    {
        group_id: "buh",
        label_rect_id: "buh_info_label",
        visual_container: true,
        offset: 6,
        digits: 0,
        parent: "buh",
        values: [
            {
                id: "buh_power",
                domain: "sensor",
                unit: ["W", "kW"],
                optional: true,
                value_rect_id: "buh_info_value",
                texts: {
                    de: {
                        desc: "Heizstableistung"
                    },
                    en: {
                        desc: "Backup heater power"
                    },
                    it: {
                        desc: "Potenza della resistenza elettrica"
                    }
                }
            }
        ],
        texts: {
            de: {
                label: "Heizstab"
            },
            en: {
                label: "Backup heater"
            },
            it: {
                label: "Resistenza"
            }
        }
    },
    {
        group_id: "DHW-Valve",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        values: [
            {
                id: "mixer",
                device: "CAN",
                domain: "sensor",
                unit: "%",
                value_rect_id: "dhw_mixer_value",
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
            }
        ]
    },
    {
        group_id: "BPV-Valve",
        offset: 6,
        digits: 0,
        fontSize: "40px",
        values: [
            {
                id: "bypass",
                device: "CAN",
                domain: "sensor",
                unit: "%",
                value_rect_id: "bypass_value",
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
            }
        ]
    },
    {
        group_id: "Info",
        visual_container: true,
        offset: 6,
        fontSize: "40px",
        align: "left",
        category: {
            de: "Info",
            en: "Info",
            it: "Info"
        },
        values: [
            {
                id: "error_code",
                device: "CAN",
                domain: "sensor",
                value_rect_id: "fehlercode_value",
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
                device: "CAN",
                domain: "sensor",
                value_rect_id: "betriebsmodus_value",
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
                device: "CAN",
                domain: "sensor",
                value_rect_id: "betriebsart_value",
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
                device: "CAN",
                domain: "sensor",
                unit: "kW",
                value_rect_id: "therm_leistung_value",
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
                optional: true,
                value_rect_id: "el_power_value",
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
                optional: true,
                value_rect_id: "cop_value",
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
                unit: "°C",
                optional: true,
                value_rect_id: "t_room_is_value",
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
            }
        ]
    },
    {
        group_id: "DateTime",
        parent: "date_value",
        offset: 6,
        fontSize: "40px",
        values: [
            {
                id: "system_date",
                device: "CAN",
                domain: "sensor",
                optional: true,
                value_rect_id: "date_value",
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
                device: "CAN",
                domain: "sensor",
                optional: true,
                value_rect_id: "time_value",
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
        ]
    }
];

export const languages: Language[] = ["de", "en", "it"];

export const isLanguage = (lang: string | undefined): lang is Language =>
    !!lang && (languages as string[]).includes(lang);

export interface LayoutOption {
    id: string;
    file: string;
    labels: Record<Language, string>;
}

export const DEFAULT_LAYOUT = "glass-light";

export const layouts: LayoutOption[] = [
    { id: "glass-dark", file: "hpsu_glass_dark.svg", labels: { de: "Glas, dunkel", en: "Glass, dark", it: "Vetro, scuro" } },
    { id: "glass-light", file: "hpsu_glass_light.svg", labels: { de: "Glas, hell", en: "Glass, light", it: "Vetro, chiaro" } },
    { id: "glass-petrol", file: "hpsu_glass_petrol.svg", labels: { de: "Glas, Petrol", en: "Glass, petrol", it: "Vetro, petrolio" } },
];

export const layoutFile = (id?: string): string =>
    (layouts.find(l => l.id === id) ?? layouts.find(l => l.id === DEFAULT_LAYOUT)!).file;

export interface UITexts {
    on: string;
    off: string;
    errorLoading: string;
}

export const text_map: Record<Language, UITexts> = {
    de: {
        on: "An",
        off: "Aus",
        errorLoading: "Fehler beim Laden des HPSU Dashboards.",
    },
    en: {
        on: "On",
        off: "Off",
        errorLoading: "Failed to load the HPSU dashboard.",
    },
    it: {
        on: "On",
        off: "Off",
        errorLoading: "Errore durante il caricamento della dashboard HPSU.",
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

// Maps configuration keys used by the original (German) releases to the
// current English ids, so existing card configurations keep working.
export const legacy_id_map: Record<string, string> = {
    ta: "outside_temperature",
    kondensat: "condensate",
    umwaelzpumpe: "circulation_pump",
    umwaelzpumpe_an_aus: "circulation_pump_status",
    durchfluss: "flow_rate",
    ruecklauf: "return_temperature_can",
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

/** Current id for a configuration key, accepting the legacy German keys. */
export const resolveId = (key: string): string => legacy_id_map[key] ?? key;

export const validateConfig = function<T extends { entities?: Record<string, string> }>(config: T): T {
    const validIds = new Set(svg_item_config.flatMap(item => item.values.map(value => value.id)));
    const validEntities: Record<string, string> = {};

    for (const [key, value] of Object.entries(config.entities ?? {})) {
        const id = resolveId(key);
        // an explicit English key wins over a legacy one for the same value
        if (validIds.has(id) && (id === key || !(id in validEntities))) {
            validEntities[id] = value;
        }
    }

    return {
        ...config,
        entities: validEntities
    };
};
