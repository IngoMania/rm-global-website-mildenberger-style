import { Metadata } from "next";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: `Datenschutzerklärung der ${COMPANY.name}`,
};

export default function DatenschutzPage() {
    return (
        <div className="pt-28 pb-16">
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-8">
                    Datenschutzerklärung
                </h1>

                <div className="prose prose-neutral max-w-none space-y-6">
                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Datenschutz auf einen Blick
                        </h2>
                        <h3 className="text-lg font-medium mb-2">
                            Allgemeine Hinweise
                        </h3>
                        <p className="text-muted-foreground">
                            Die folgenden Hinweise geben einen einfachen Überblick
                            darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                            Sie diese Website besuchen. Personenbezogene Daten sind alle
                            Daten, mit denen Sie persönlich identifiziert werden können.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Verantwortliche Stelle
                        </h2>
                        <p className="text-muted-foreground">
                            Die verantwortliche Stelle für die Datenverarbeitung auf
                            dieser Website ist:
                            <br />
                            <br />
                            {COMPANY.name}
                            <br />
                            Flurscheideweg 1
                            <br />
                            65936 Frankfurt am Main
                            <br />
                            <br />
                            Telefon: +49 (0) 69 / 78 80 36 37
                            <br />
                            E-Mail: {COMPANY.email}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Datenerfassung auf dieser Website
                        </h2>
                        <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
                        <p className="text-muted-foreground">
                            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                            werden Ihre Angaben aus dem Anfrageformular inklusive der von
                            Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                            Anfrage und für den Fall von Anschlussfragen bei uns
                            gespeichert. Diese Daten geben wir nicht ohne Ihre
                            Einwilligung weiter.
                        </p>
                        <h3 className="text-lg font-medium mb-2 mt-4">
                            Server-Log-Dateien
                        </h3>
                        <p className="text-muted-foreground">
                            Der Provider der Seiten erhebt und speichert automatisch
                            Informationen in so genannten Server-Log-Dateien, die Ihr
                            Browser automatisch an uns übermittelt.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Ihre Rechte
                        </h2>
                        <p className="text-muted-foreground">
                            Sie haben jederzeit das Recht unentgeltlich Auskunft über
                            Herkunft, Empfänger und Zweck Ihrer gespeicherten
                            personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                            Recht, die Berichtigung oder Löschung dieser Daten zu
                            verlangen. Hierzu sowie zu weiteren Fragen zum Thema
                            Datenschutz können Sie sich jederzeit an uns wenden.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Cookies
                        </h2>
                        <p className="text-muted-foreground">
                            Diese Website verwendet keine Tracking-Cookies. Es werden
                            lediglich technisch notwendige Cookies verwendet, die für
                            den Betrieb der Website erforderlich sind.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
