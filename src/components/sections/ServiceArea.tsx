"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SERVICE_AREAS } from "@/lib/constants";
import { MapPin, ArrowRight } from "lucide-react";

export function ServiceArea() {
    return (
        <section id="service-area" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Einzugsgebiet"
                    title="Unser"
                    highlight="Einzugsgebiet"
                    description="Frankfurt, Mannheim und die gesamte Region"
                />

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-xl overflow-hidden shadow-xl border"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.0!2d8.6!3d50.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDA2JzAwLjAiTiA4wrAzNicwMC4wIkU!5e0!3m2!1sde!2sde!4v1"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                            title="RM GLOBAL Standorte"
                        />
                    </motion.div>

                    {/* Regions */}
                    <div className="space-y-8">
                        {Object.values(SERVICE_AREAS).map((region) => (
                            <motion.div
                                key={region.title}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                                    <MapPin className="w-5 h-5 text-primary-500" />
                                    {region.title}
                                </h3>
                                <motion.div
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="flex flex-wrap gap-2"
                                >
                                    {region.cities.map((city) => (
                                        <motion.div
                                            key={city}
                                            variants={fadeInUp}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                        >
                                            <Badge
                                                variant="secondary"
                                                className="cursor-pointer hover:bg-primary-500 hover:text-white transition-colors px-3 py-1.5"
                                            >
                                                {city}
                                            </Badge>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}

                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="pt-4"
                        >
                            <Button variant="outline" asChild>
                                <a href="/kontakt">
                                    Anfrage für Ihre Region
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
