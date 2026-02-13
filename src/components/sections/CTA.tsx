"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Send, Phone } from "lucide-react";

export function CTA() {
    return (
        <section className="relative py-20 md:py-28 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />

            {/* Animated Background Elements */}
            <motion.div
                animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-1/2 -right-1/4 w-96 h-96 rounded-full bg-white/5 blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute -bottom-1/4 -left-1/4 w-80 h-80 rounded-full bg-accent-500/10 blur-3xl"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Bereit für{" "}
                        <span className="text-accent-500">strahlende Sauberkeit</span>?
                    </h2>
                    <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto">
                        Kontaktieren Sie uns noch heute für ein kostenloses und
                        unverbindliches Angebot.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 h-12 text-base shadow-lg shadow-accent-500/25"
                            asChild
                        >
                            <a href="/kontakt">
                                <Send className="mr-2 h-5 w-5" />
                                Angebot anfordern
                            </a>
                        </Button>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:text-white h-12 text-base"
                            asChild
                        >
                            <a href="tel:+496978803637">
                                <Phone className="mr-2 h-5 w-5" />
                                069 / 78 80 36 37
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
