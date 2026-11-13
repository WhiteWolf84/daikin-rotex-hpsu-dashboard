# Daikin/Rotex - HPSU Dashboard

Dieses Projekt stellt eine Home Assistant-Dashboard-Komponente bereit, die es ermöglicht, Informationen einer Daikin/Rotex HPSU Wärmepumpen übersichtlich darzustellen. Die Integration bietet eine benutzerfreundliche Benutzeroberfläche zur Überwachung von Leistungsparametern, Energieerzeugung und Umgebungsbedingungen. Die Komponente ist leicht anpassbar und kann in wenigen Schritten installiert werden.

<img src="https://github.com/user-attachments/assets/ee3f0226-8207-433d-90dc-95f7b17109de" alt="grafik" width="500" />

# Anforderungen

- Home Assistant: Version 2024.4 oder höher
- HACS (Home Assistant Community Store): Installiert und konfiguriert
- Anbindung an eine Daikin/Rotex HPSU Wärmepumpe: [ESP32 - ESPHome-Anbindung](https://github.com/Trunks1982/Daikin-Rotex-HPSU-CAN)

# Installation

1) Öffne die HACS-Integration in Home Assistant.
2) Klicke rechts oben auf die drei Punkte und wähle **Benutzerdefinierte Repositorys**.
3) Gib das Repository ein: https://github.com/wrfz/daikin-rotex-hpsu-dashboard und wähle die Kategorie **Dashboard** aus.
4) Klicke auf Hinzufügen und installiere die Karte anschließend über die Benutzeroberfläche.

# Konfiguration

Erstelle als nächstes ein hpsu-dashboard-card als ein Fullscreen - **Panel** mit der folgenden Konfiguration:

    title: Home
    views:
      - title: Schema
        path: hpsu_schema
        type: panel
        cards:
          - type: custom:hpsu-dashboard-card
            layout: glass-light
            language: de # Überschreibt die Sprache in Home Assistant
            entities:
              outside_temperature: sensor.hpsu_can_aussentemperatur
              ta2: sensor.hpsu_can_ta2
              expansion_valve: sensor.hpsu_uart_expansionsventil
              pressure_equalization: binary_sensor.hpsu_uart_druckausgleich
              condensate: sensor.hpsu_uart_temperatur_fl_ssigkeitsleitung
              circulation_pump: sensor.hpsu_can_umwaelzpumpe
              circulation_pump_status: binary_sensor.hpsu_can_status_kesselpumpe
              flow_rate: sensor.hpsu_can_durchfluss
              return_temperature_can: sensor.hpsu_can_ruecklauftemperatur_heizung
              return_temperature_uart: sensor.hpsu_uart_r_cklauftemperatur
              evaporator: sensor.hpsu_uart_temperatur_lamellenw_rmetauscher
              hot_gas: sensor.hpsu_uart_temperatur_nach_k_ltemittelverdichter
              hot_gas_condenser: sensor.thermometer_hei_gas_am_kondensator
              flow_temperature_can: sensor.hpsu_can_heizkreis_vorlauf_tv
              flow_temperature_uart: sensor.hpsu_uart_vorlauftemeratur_tv
              flow_temperature_setpoint: sensor.hpsu_can_vorlauf_soll
              water_pressure: sensor.hpsu_can_wasserdruck
              flow_temperature_bh_can: sensor.hpsu_can_vorlauftemperatur_heizung_tvbh
              flow_temperature_bh_uart: sensor.hpsu_uart_vorlauftemeratur_tvbh
              compressor_status: binary_sensor.hpsu_can_status_kompressor
              fan_speed: sensor.hpsu_uart_ventilatordrehzahl
              compressor_speed: sensor.hpsu_uart_kompressor_drehzahl
              storage_temperature: sensor.hpsu_can_warmwassertemperatur
              storage_setpoint: select.hpsu_can_t_ww_soll1
              mixer: sensor.hpsu_can_dhw_mischer_position
              bypass: sensor.hpsu_can_bpv
              operating_mode: select.hpsu_can_betriebsmodus
              mode_of_operating: sensor.hpsu_can_betriebsart
              error_code: sensor.hpsu_can_fehlercode
              thermal_power: sensor.hpsu_can_thermische_leistung
              cop: sensor.hpsu_cop_clipped
              spread: sensor.hpsu_can_spreizung

Die früheren deutschen Schlüssel (`vorlauf_1`, `fehlercode`, `betriebsart`, …) werden weiterhin erkannt und automatisch übernommen.



## Layout

Mit `layout` wählst du die Darstellung (auch im Karten-Editor ganz oben auswählbar):

| Wert | Darstellung |
|------|-------------|
| `glass-dark` | modernes Glas-Layout, dunkel |
| `glass-light` | modernes Glas-Layout, hell (Standard) |
| `glass-petrol` | modernes Glas-Layout, Petrol |
