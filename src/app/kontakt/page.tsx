import { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
    title: "Kontakt",
    description:
        "Kontaktieren Sie RM GLOBAL Gebäudedienste für ein kostenloses Angebot. Standorte in Frankfurt und Mannheim.",
};

export default function KontaktPage() {
    return (
        <div className="pt-20">
            <Contact />
        </div>
    );
}
