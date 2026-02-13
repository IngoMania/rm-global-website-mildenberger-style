import { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
    title: "Unsere Leistungen",
    description:
        "Büroreinigung, medizinische Reinigung, Glasreinigung & Winterdienst – RM GLOBAL bietet professionelle Gebäudedienste in Frankfurt & Mannheim.",
};

export default function LeistungenPage() {
    return (
        <div className="pt-20">
            <Services />
            <CTA />
        </div>
    );
}
