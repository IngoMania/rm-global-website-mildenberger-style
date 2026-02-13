"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-6">
                        Über uns
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Ihr Experte für{" "}
                        <span className="text-accent-500">Gebäudedienste</span> im
                        Rhein-Main
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                        Die RM GLOBAL Gebäudedienste GmbH ist seit 1999 Ihr kompetenter
                        Ansprechpartner für professionelle Gebäudereinigung und Facility
                        Management. Mit Standorten in Frankfurt am Main und Mannheim
                        betreuen wir Unternehmen in der gesamten Rhein-Main und
                        Rhein-Neckar Region.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        Unser erfahrenes Team sorgt täglich für Sauberkeit und Hygiene in
                        Büros, Arztpraxen, Kliniken und Gewerbeobjekten. Dabei setzen wir
                        auf modernste Reinigungstechnologien, umweltfreundliche Mittel und
                        höchste Qualitätsstandards. Vertrauen Sie auf über 25 Jahre
                        Erfahrung und einen Service, der keine Wünsche offen lässt.
                    </p>
                    <motion.div
                        className="mt-8"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            size="lg"
                            className="bg-accent-500 hover:bg-accent-600 text-white"
                            asChild
                        >
                            <a href="/kontakt">
                                <Send className="mr-2 h-5 w-5" />
                                Unverbindlich anfragen
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
