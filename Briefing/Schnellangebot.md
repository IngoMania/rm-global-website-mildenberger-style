# SCHNELLANGEBOT QUIZ DOCUMENTATION
**DO NOT DELETE THIS FILE.**

## Technical Terminology
The exact technical term for the "Schnellangebot" quiz used in this application is:
**Lead Qualification Funnel** (or alternatively: **Interactive Lead Assessment Tool**).

## Functionality
This tool allows potential customers to qualify their cleaning needs through a dynamic, step-by-step process.

## Workflow Strategy
1. **Entry Point Selection**: 
   - **Direct (Grid)**: User picks a specific service from the main page. Flow starts at Object Type.
   - **Global (Header)**: User clicks "Schnellangebot". Flow starts with Service Selection.
2. **Dynamic Routing**: The funnel adapts based on whether the service was pre-selected or needs to be chosen.

---

# Schnellangebot-Quiz: Service-spezifische Workflows

## 1) Büroreinigung
**Ziel:** Regelmäßige Reinigung von Büroflächen.
**Abfragen:**
- **Flächengröße**: `< 100 m²`, `100–300 m²`, `300–600 m²`, `> 600 m²` (Individuelle Eingabe möglich).
- **Reinigungsfrequenz**: `Täglich`, `2–3× pro Woche`, `Wöchentlich`, `Einmalig`.
- **Leistungsumfang**: `Standard`, `Mit Küche`, `Mit Sanitär`, `Komplett inkl. Müllentsorgung`.
- **Arbeitszeiten**: `Tagsüber`, `Abends`, `Wochenende` (Freitext für Wunschzeiten).
- **Startdatum**: Datumsauswahl.

## 2) Glas- & Fassadenreinigung
**Ziel:** Reinigung von Fenstern und Außenflächen.
**Abfragen:**
- **Art der Glasflächen**: `Fenster innen`, `Fenster außen`, `Beides`, `Fassade`.
- **Zugangshöhe**: `Erdgeschoss`, `Bis 3. Stock`, `> 3. Stock / Spezialtechnik`.
- **Flächenmenge**: `1–10 Fenster`, `10–30 Fenster`, `> 30 Fenster` (Individuelle Eingabe möglich).
- **Verschmutzungsgrad**: `Leicht`, `Mittel`, `Stark`.
- **Terminwunsch**: `So schnell wie möglich`, `Datum wählen`.

## 3) Winterdienst
**Ziel:** Räum- und Streudienst bei Schnee/Eis.
**Abfragen:**
- **Objektart**: `Privat`, `Gewerbe`, `Wohnanlage`.
- **Flächen**: `Gehweg`, `Parkplatz`, `Zufahrt`, `Komplett` (Individuelle Eingabe möglich).
- **Einsatzmodell**: `Saisonvertrag`, `Einzeleinsatz`.
- **Streumittel**: `Salz`, `Splitt`, `Umweltfreundlich`.
- **Bereitschaftszeiten**: `24/7`, `Nur morgens`, `Individuell`.

## 4) Hausmeisterservice
**Ziel:** Technische Betreuung und Kleinreparaturen.
**Abfragen:**
- **Objekt**: `Mehrfamilienhaus`, `Bürogebäude`, `Gewerbehalle`.
- **Leistungen**: `Kontrollgänge`, `Kleinreparaturen`, `Mülltonnenservice`, `Außenanlagenpflege`.
- **Intervall**: `Wöchentlich`, `2× pro Woche`, `Täglich`, `Nach Bedarf`.
- **Notfallkontakt**: `Ja`, `Nein`.
- **Zusatzinfo**: Freitextfeld.

## 5) Unterhaltsreinigung
**Ziel:** Regelmäßige Grundreinigung von Gebäuden.
**Abfragen:**
- **Gebäudetyp**: `Büro`, `Schule`, `Hotel`, `Industrie`.
- **Fläche**: `< 200 m²`, `200–500 m²`, `500–1000 m²`, `> 1000 m²` (Individuelle Eingabe möglich).
- **Frequenz**: `Täglich`, `Mehrmals pro Woche`, `Wöchentlich`.
- **Schwerpunkte**: `Sanitär`, `Böden`, `Oberflächen`, `Komplett`.
- **Starttermin**: Datumsauswahl.

## 6) Medizinische Reinigung
**Ziel:** Hygienische Reinigung von Arzt- und Therapiepraxen.
**Abfragen:**
- **Praxisart**: `Arztpraxis`, `Zahnarzt`, `Physio`, `Labor`.
- **Hygienestandard**: `Standard`, `Erhöht`, `RKI-konform`.
- **Fläche**: `< 100 m²`, `100–250 m²`, `> 250 m²` (Individuelle Eingabe möglich).
- **Reinigungszeiten**: `Nach Feierabend`, `Früh morgens`, `Wochenende`.
- **Zusatzleistungen**: `Desinfektion`, `Instrumentenräume`, `Wartezimmer Spezial`.