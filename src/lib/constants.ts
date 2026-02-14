import {
    Building2,
    Hospital,
    Sparkles,
    Snowflake,
    Award,
    Users,
    Leaf,
    Handshake,
    Clock,
    Euro,
    Phone,
    MessageSquare,
    CheckCircle,
    Brush,
    School,
    GraduationCap,
    Zap,
} from "lucide-react";

export const COMPANY = {
    name: "RM GLOBAL Gebäudedienste GmbH",
    shortName: "RM GLOBAL",
    motto: "WERTE. pflegen | schützen | erhalten.",
    founded: 1999,
    website: "https://www.globaldienste.de",
    email: "info@globaldienste.de",
    hours: "Montag - Freitag, 08:30 - 17:00 Uhr",
};

export const LOCATIONS = [
    {
        city: "Frankfurt am Main",
        label: "Hauptsitz Frankfurt",
        address: "Flurscheideweg 1",
        zip: "65936",
        phone: "+49 (0) 69 / 78 80 36 37",
        fax: "+49 (0) 69 / 78 80 38 28",
        email: "info@globaldienste.de",
        mapQuery: "Flurscheideweg+1,+65936+Frankfurt+am+Main",
    },
    {
        city: "Mannheim",
        label: "Niederlassung Mannheim",
        address: "Harrlachweg 1",
        zip: "68163",
        phone: "+49 (0) 621 / 397 32 426",
        fax: null,
        email: "info@globaldienste.de",
        mapQuery: "Harrlachweg+1,+68163+Mannheim",
    },
];

export const SERVICES = [
    {
        title: "Büroreinigung",
        slug: "bueroreinigung",
        icon: Building2,
        description:
            "Professionelle Büroreinigung für ein sauberes und produktives Arbeitsumfeld. Wir sorgen für hygienische Büroflächen, die Ihre Mitarbeiter und Kunden beeindrucken.",
        features: [
            "Tägliche Unterhaltsreinigung",
            "Bodenreinigung & -pflege",
            "Sanitärreinigung",
            "Küchen- & Sozialraumreinigung",
        ],
        gradient: "from-primary-500 to-primary-700",
        image: "/assets/images/Bueroreinigung.webp",
    },
    {
        title: "Unterhaltsreinigung",
        slug: "unterhaltsreinigung",
        icon: Brush,
        description:
            "Regelmäßige und gründliche Reinigung für den Werterhalt Ihrer Immobilie. Sauberkeit, auf die Sie sich jeden Tag verlassen können.",
        features: [
            "Regelmäßige Intervalle",
            "Bodenpflege",
            "Oberflächenreinigung",
            "Müllentsorgung",
        ],
        gradient: "from-orange-400 to-red-500",
        image: "/assets/images/Unterhaltsreinigung.webp",
    },
    {
        title: "Medizinische Reinigung",
        slug: "medizinische-reinigung",
        icon: Hospital,
        description:
            "Spezialreinigung für medizinische Einrichtungen nach höchsten Hygienestandards. Wir kennen die besonderen Anforderungen im Gesundheitswesen.",
        features: [
            "Desinfektion nach RKI-Richtlinien",
            "OP-Reinigung",
            "Stationsreinigung",
            "Hygienemanagement",
        ],
        gradient: "from-blue-500 to-cyan-600",
        image: "/assets/images/Praxisreinigung.webp",
    },
    {
        title: "Kita-Reinigung",
        slug: "kita-reinigung",
        icon: School,
        description:
            "Hygienische Sauberkeit für die Kleinsten. Wir verwenden kinderfreundliche Reinigungsmittel und achten besonders auf sensible Bereiche.",
        features: [
            "Unbedenkliche Reinigungsmittel",
            "Spielzeugreinigung",
            "Sanitärhygiene",
            "Desinfektion",
        ],
        gradient: "from-green-400 to-emerald-600",
        image: "/assets/images/Kita-Reinigung.webp",
    },
    {
        title: "Glas- & Fassadenreinigung",
        slug: "glasreinigung",
        icon: Sparkles,
        description:
            "Streifenfreie Glasreinigung und professionelle Fassadenpflege für einen glänzenden ersten Eindruck. Auch in großen Höhen.",
        features: [
            "Schaufensterreinigung",
            "Fensterreinigung innen & außen",
            "Fassadenreinigung",
            "Rahmen- & Falzreinigung",
        ],
        gradient: "from-sky-400 to-blue-600",
        image: "/assets/images/Fensterputzer.webp",
    },
    {
        title: "Winterdienst",
        slug: "winterdienst",
        icon: Snowflake,
        description:
            "Zuverlässiger Winterdienst für sichere Wege und Zufahrten. Wir sorgen dafür, dass Ihre Liegenschaften auch im Winter gefahrlos erreichbar sind.",
        features: [
            "Schneeräumung",
            "Streudienst",
            "Glättebeseitigung",
            "24h Bereitschaftsdienst",
        ],
        gradient: "from-indigo-500 to-purple-600",
        image: "/assets/images/Winterdienst.webp",
    },
];

export const BENEFITS = [
    {
        title: "25+ Jahre Erfahrung",
        description:
            "Seit 1999 sind wir Ihr verlässlicher Partner für professionelle Gebäudedienste in der Rhein-Main und Rhein-Neckar Region.",
        icon: Award,
    },
    {
        title: "Meisterbetrieb",
        description:
            "Als eingetragener Meisterbetrieb garantieren wir fachliche Kompetenz und höchste Qualitätsstandards.",
        icon: GraduationCap,
    },
    {
        title: "Geschultes Personal",
        description:
            "Unser Team wird regelmäßig geschult und arbeitet nach höchsten Qualitätsstandards für beste Ergebnisse.",
        icon: Users,
    },
    {
        title: "Modernste Technik",
        description:
            "Einsatz modernster Reinigungsmaschinen und -technologien für effiziente und gründliche Ergebnisse.",
        icon: Zap,
    },
    {
        title: "Umweltbewusst",
        description:
            "Wir setzen auf umweltfreundliche Reinigungsmittel und nachhaltige Verfahren zum Schutz unserer Umwelt.",
        icon: Leaf,
    },
    {
        title: "Persönlicher Service",
        description:
            "Ein fester Ansprechpartner für Sie – wir bieten individuelle Betreuung und maßgeschneiderte Lösungen.",
        icon: Handshake,
    },
    {
        title: "Flexibel & Zuverlässig",
        description:
            "Wir passen uns Ihren Zeiten an und sind immer pünktlich. Auf uns können Sie sich verlassen.",
        icon: Clock,
    },
    {
        title: "Faire Preise",
        description:
            "Transparente Kalkulation ohne versteckte Kosten. Wir bieten ein hervorragendes Preis-Leistungs-Verhältnis.",
        icon: Euro,
    },
];

export const PROCESS_STEPS = [
    {
        title: "Anfrage stellen",
        description:
            "Kontaktieren Sie uns telefonisch oder über unser Kontaktformular. Wir melden uns umgehend bei Ihnen.",
        icon: Phone,
    },
    {
        title: "Angebot erhalten",
        description:
            "Wir besichtigen Ihr Objekt und erstellen Ihnen ein transparentes, kostenloses Angebot ohne Verpflichtungen.",
        icon: MessageSquare,
    },
    {
        title: "Wir legen los",
        description:
            "Nach Auftragserteilung starten wir zeitnah und sorgen zuverlässig für strahlende Sauberkeit.",
        icon: CheckCircle,
    },
];

export const SERVICE_AREAS = {
    rheinMain: {
        title: "Frankfurt & Rhein-Main",
        cities: [
            "Frankfurt",
            "Offenbach",
            "Wiesbaden",
            "Mainz",
            "Darmstadt",
            "Bad Homburg",
            "Hanau",
            "Rüsselsheim",
            "Oberursel",
            "Friedberg",
            "Bad Vilbel",
            "Eschborn",
        ],
    },
    rheinNeckar: {
        title: "Mannheim & Rhein-Neckar",
        cities: [
            "Mannheim",
            "Ludwigshafen",
            "Heidelberg",
            "Weinheim",
            "Viernheim",
            "Schwetzingen",
            "Hockenheim",
            "Speyer",
            "Frankenthal",
            "Worms",
        ],
    },
};

export const TESTIMONIALS = [
    {
        name: "Dr. Michael Weber",
        company: "Weber & Partner Rechtsanwälte",
        text: "Seit über 5 Jahren sorgt RM GLOBAL für makellose Sauberkeit in unserer Kanzlei. Die Zuverlässigkeit und Qualität sind außergewöhnlich.",
        rating: 5,
    },
    {
        name: "Sandra Müller",
        company: "Praxis am Westend",
        text: "Die medizinische Reinigung wird stets nach höchsten Hygienestandards durchgeführt. Wir fühlen uns bestens betreut und können RM GLOBAL uneingeschränkt empfehlen.",
        rating: 5,
    },
    {
        name: "Thomas Berger",
        company: "Berger Immobilien GmbH",
        text: "Von der Büroreinigung bis zum Winterdienst – RM GLOBAL ist unser Full-Service-Partner für alle Gebäudedienste. Professionell und immer erreichbar.",
        rating: 5,
    },
];

export const NAV_ITEMS = [
    { label: "Start", href: "/" },
    { label: "Über uns", href: "/#about" },
    {
        label: "Leistungen",
        href: "/leistungen",
        children: [
            { label: "Büroreinigung", href: "/leistungen/bueroreinigung" },
            {
                label: "Medizinische Reinigung",
                href: "/leistungen/medizinische-reinigung",
            },
            { label: "Glasreinigung", href: "/leistungen/glasreinigung" },
            { label: "Winterdienst", href: "/leistungen/winterdienst" },
        ],
    },
    { label: "Regionen", href: "/#service-area" },
    { label: "Kontakt", href: "/kontakt" },
];
