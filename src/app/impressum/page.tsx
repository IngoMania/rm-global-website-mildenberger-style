import { Metadata } from "next";
import { COMPANY, LOCATIONS } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Impressum",
    description: `Impressum der ${COMPANY.name}`,
};

export default function ImpressumPage() {
    return (
        <div className="pt-28 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>

                <div className="prose prose-neutral max-w-none space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            Angaben gemäß § 5 TMG
                        </h2>
                        <p className="text-muted-foreground">
                            {COMPANY.name}
                            <br />
                            {LOCATIONS[0].address}
                            <br />
                            {LOCATIONS[0].zip} {LOCATIONS[0].city}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
                        <p className="text-muted-foreground">
                            Telefon: {LOCATIONS[0].phone}
                            <br />
                            Fax: {LOCATIONS[0].fax}
                            <br />
                            E-Mail: {COMPANY.email}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            Registereintrag
                        </h2>
                        <p className="text-muted-foreground">
                            Eingetragen im Handelsregister.
                            <br />
                            Registergericht: Amtsgericht Frankfurt am Main
                            <br />
                            Registernummer: [HRB-Nummer]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
                        <p className="text-muted-foreground">
                            Umsatzsteuer-Identifikationsnummer gemäß §27a
                            Umsatzsteuergesetz:
                            <br />
                            [USt-IdNr.]
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
                        </h2>
                        <p className="text-muted-foreground">
                            {COMPANY.name}
                            <br />
                            {LOCATIONS[0].address}
                            <br />
                            {LOCATIONS[0].zip} {LOCATIONS[0].city}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            Streitschlichtung
                        </h2>
                        <p className="text-muted-foreground">
                            Die Europäische Kommission stellt eine Plattform zur
                            Online-Streitbeilegung (OS) bereit:{" "}
                            <a
                                href="https://ec.europa.eu/consumers/odr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-500 hover:underline"
                            >
                                https://ec.europa.eu/consumers/odr
                            </a>
                            .
                            <br />
                            Unsere E-Mail-Adresse finden Sie oben im Impressum.
                        </p>
                        <p className="text-muted-foreground mt-2">
                            Wir sind nicht bereit oder verpflichtet, an
                            Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
