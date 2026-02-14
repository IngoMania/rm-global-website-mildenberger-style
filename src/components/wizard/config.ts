import { ServiceFlow } from "./types";
import {
    CheckCircle2,
    Clock,
    Home,
    Layers,
    MapPin,
    Ruler,
    Users,
} from "lucide-react";

export const WIZARD_FLOWS: ServiceFlow[] = [
    {
        slug: "bueroreinigung",
        title: "Büroreinigung",
        steps: [
            {
                id: "details",
                title: "Details zur Reinigung",
                questions: [
                    {
                        id: "area",
                        label: "Wie groß ist die zu reinigende Fläche?",
                        type: "radio",
                        options: [
                            { label: "Bis 100 m²", value: "<100" },
                            { label: "100 - 300 m²", value: "100-300" },
                            { label: "300 - 600 m²", value: "300-600" },
                            { label: "Über 600 m²", value: ">600" },
                        ],
                    },
                    {
                        id: "frequency",
                        label: "Wie oft soll gereinigt werden?",
                        type: "radio",
                        options: [
                            { label: "Täglich", value: "daily" },
                            { label: "2-3x pro Woche", value: "2-3_weekly" },
                            { label: "Wöchentlich", value: "weekly" },
                            { label: "Einmalig", value: "once" },
                        ],
                    },
                    {
                        id: "scope",
                        label: "Welche Bereiche sollen gereinigt werden?",
                        type: "checkbox",
                        options: [
                            { label: "Büroräume (Standard)", value: "office" },
                            { label: "Küche / Sozialräume", value: "kitchen" },
                            { label: "Sanitäranlagen", value: "sanitary" },
                            { label: "Müllentsorgung", value: "waste" },
                        ],
                    },
                    {
                        id: "time",
                        label: "Wann soll die Reinigung stattfinden?",
                        type: "checkbox",
                        options: [
                            { label: "Tagsüber (08:00 - 17:00)", value: "day" },
                            { label: "Abends (ab 17:00)", value: "evening" },
                            { label: "Wochenende", value: "weekend" },
                        ],
                    },
                    {
                        id: "startDate",
                        label: "Wann sollen wir starten?",
                        type: "date",
                    },
                ],
            },
        ],
    },
    {
        slug: "unterhaltsreinigung",
        title: "Unterhaltsreinigung",
        steps: [
            {
                id: "building",
                title: "Gebäude & Umfang",
                questions: [
                    {
                        id: "buildingType",
                        label: "Um welche Art von Objekt handelt es sich?",
                        type: "radio",
                        options: [
                            { label: "Bürogebäude", value: "office" },
                            { label: "Schule / Kita", value: "school" },
                            { label: "Hotel", value: "hotel" },
                            { label: "Industrie / Gewerbe", value: "industry" },
                            { label: "Wohnanlage", value: "residential" },
                        ],
                    },
                    {
                        id: "area",
                        label: "Geschätzte Gesamtfläche",
                        type: "radio",
                        options: [
                            { label: "Bis 200 m²", value: "<200" },
                            { label: "200 - 500 m²", value: "200-500" },
                            { label: "500 - 1.000 m²", value: "500-1000" },
                            { label: "Über 1.000 m²", value: ">1000" },
                        ],
                    },
                    {
                        id: "frequency",
                        label: "Reinigungsintervall",
                        type: "radio",
                        options: [
                            { label: "Täglich", value: "daily" },
                            { label: "Mehrmals pro Woche", value: "multi_weekly" },
                            { label: "Wöchentlich", value: "weekly" },
                        ],
                    },
                    {
                        id: "focus",
                        label: "Schwerpunkte der Reinigung",
                        type: "checkbox",
                        options: [
                            { label: "Böden & Oberflächen", value: "floors" },
                            { label: "Sanitärbereiche", value: "sanitary" },
                            { label: "Fenster / Glas", value: "glass" },
                            { label: "Müllentsorgung", value: "waste" },
                        ],
                    },
                    {
                        id: "startDate",
                        label: "Gewünschter Starttermin",
                        type: "date",
                    },
                ],
            },
        ],
    },
    {
        slug: "medizinische-reinigung",
        title: "Medizinische Reinigung",
        steps: [
            {
                id: "practice",
                title: "Praxis & Hygiene",
                questions: [
                    {
                        id: "practiceType",
                        label: "Art der Einrichtung",
                        type: "radio",
                        options: [
                            { label: "Arztpraxis", value: "doctor" },
                            { label: "Zahnarzt", value: "dentist" },
                            { label: "Physiotherapie", value: "physio" },
                            { label: "Labor / Klinik", value: "lab" },
                        ],
                    },
                    {
                        id: "hygiene",
                        label: "Hygienestandard",
                        type: "radio",
                        options: [
                            { label: "Standard Hygiene", value: "standard" },
                            { label: "Erhöhter Standard (Desinfektion)", value: "high" },
                            { label: "RKI-konform", value: "rki" },
                        ],
                    },
                    {
                        id: "area",
                        label: "Praxisfläche",
                        type: "radio",
                        options: [
                            { label: "Bis 100 m²", value: "<100" },
                            { label: "100 - 250 m²", value: "100-250" },
                            { label: "Über 250 m²", value: ">250" },
                        ],
                    },
                    {
                        id: "time",
                        label: "Bevorzugte Reinigungszeit",
                        type: "radio",
                        options: [
                            { label: "Vor Praxisöffnung (morgens)", value: "morning" },
                            { label: "Nach Feierabend (abends)", value: "evening" },
                            { label: "Wochenende", value: "weekend" },
                        ],
                    },
                ],
            },
        ],
    },
    {
        slug: "kita-reinigung",
        title: "Kita-Reinigung",
        steps: [
            {
                id: "details",
                title: "Einrichtung & Bedarf",
                questions: [
                    {
                        id: "area",
                        label: "Gesamtfläche der Einrichtung",
                        type: "radio",
                        options: [
                            { label: "Bis 200 m²", value: "<200" },
                            { label: "200 - 500 m²", value: "200-500" },
                            { label: "Über 500 m²", value: ">500" },
                        ],
                    },
                    {
                        id: "rooms",
                        label: "Räumlichkeiten (Mehrfachauswahl)",
                        type: "checkbox",
                        options: [
                            { label: "Gruppenräume", value: "groups" },
                            { label: "Sanitär / Wickelräume", value: "sanitary" },
                            { label: "Küche / Essbereich", value: "kitchen" },
                            { label: "Schlafräume", value: "sleep" },
                            { label: "Außenbereich", value: "outside" },
                        ],
                    },
                    {
                        id: "frequency",
                        label: "Reinigungshäufigkeit",
                        type: "radio",
                        options: [
                            { label: "Täglich", value: "daily" },
                            { label: "Mehrmals wöchentlich", value: "multi_weekly" },
                        ],
                    },
                    {
                        id: "startDate",
                        label: "Wann sollen wir starten?",
                        type: "date",
                    },
                ],
            },
        ],
    },
    {
        slug: "glasreinigung",
        title: "Glas- & Fassadenreinigung",
        steps: [
            {
                id: "glass",
                title: "Objektdetails",
                questions: [
                    {
                        id: "glassType",
                        label: "Was soll gereinigt werden?",
                        type: "checkbox",
                        options: [
                            { label: "Fenster (innen)", value: "windows_in" },
                            { label: "Fenster (außen)", value: "windows_out" },
                            { label: "Schaufenster", value: "shop_window" },
                            { label: "Fassade", value: "facade" },
                            { label: "Wintergarten / Glasdach", value: "conservatory" },
                        ],
                    },
                    {
                        id: "height",
                        label: "Zugang / Höhe",
                        type: "radio",
                        options: [
                            { label: "Erdgeschoss / Leiter ausreichend", value: "ground" },
                            { label: "Bis 3. Stock", value: "up_to_3" },
                            { label: "Höher als 3. Stock / Hubsteiger nötig", value: "high" },
                        ],
                    },
                    {
                        id: "amount",
                        label: "Geschätzte Anzahl der Fenster / Fläche",
                        type: "radio",
                        options: [
                            { label: "Klein (1-10 Fenster)", value: "small" },
                            { label: "Mittel (10-30 Fenster)", value: "medium" },
                            { label: "Groß (> 30 Fenster)", value: "large" },
                        ],
                    },
                    {
                        id: "dirt",
                        label: "Verschmutzungsgrad",
                        type: "radio",
                        options: [
                            { label: "Leicht (normale Intervalle)", value: "light" },
                            { label: "Mittel", value: "medium" },
                            { label: "Stark (Baureinigung / Erstnach)", value: "heavy" },
                        ],
                    },
                    {
                        id: "date",
                        label: "Wunschtermin",
                        type: "date",
                    },
                ],
            },
        ],
    },
    {
        slug: "winterdienst",
        title: "Winterdienst",
        steps: [
            {
                id: "winter",
                title: "Flächen & Umfang",
                questions: [
                    {
                        id: "propertyType",
                        label: "Art des Objekts",
                        type: "radio",
                        options: [
                            { label: "Privathaus", value: "private" },
                            { label: "Gewerbeobjekt", value: "commercial" },
                            { label: "Wohnanlage / WEG", value: "residential" },
                        ],
                    },
                    {
                        id: "areas",
                        label: "Welche Flächen sollen geräumt werden?",
                        type: "checkbox",
                        options: [
                            { label: "Gehwege (öffentlich)", value: "sidewalk" },
                            { label: "Privatwege / Zugang", value: "path" },
                            { label: "Parkplatz / Stellflächen", value: "parking" },
                            { label: "Zufahrten / Hof", value: "driveway" },
                        ],
                    },
                    {
                        id: "contract",
                        label: "Vertragsart",
                        type: "radio",
                        options: [
                            { label: "Saisonpauschale (Nov - März)", value: "season" },
                            { label: "Abrechnung nach Einsätzen", value: "per_usage" },
                        ],
                    },
                    {
                        id: "material",
                        label: "Bevorzugtes Streugut",
                        type: "radio",
                        options: [
                            { label: "Salz (wenn erlaubt)", value: "salt" },
                            { label: "Splitt / Granulat", value: "grit" },
                            { label: "Taumittel (umweltfreundlich)", value: "eco" },
                        ],
                    },
                ],
            },
        ],
    },
];
