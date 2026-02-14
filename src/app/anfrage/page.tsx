import { Suspense } from "react";
import { Wizard } from "@/components/wizard/Wizard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Angebot anfordern - RM GLOBAL Gebäudedienste",
    description: "Erhalten Sie in wenigen Schritten ein unverbindliches Angebot für Ihre Gebäudereinigung.",
};

export default function AnfragePage() {
    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-primary-950 mb-4">
                        Ihr individuelles Angebot
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Beantworten Sie uns ein paar kurze Fragen zu Ihrem Bedarf und wir erstellen Ihnen umgehend ein maßgeschneidertes Angebot.
                    </p>
                </div>

                <Suspense fallback={<div className="text-center py-20">Lade Formular...</div>}>
                    <Wizard />
                </Suspense>
            </div>
        </main>
    );
}
