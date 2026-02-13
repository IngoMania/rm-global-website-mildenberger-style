"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Send, Phone, Check, Star } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Animated floating elements */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeInUp}>
                        <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                            ✦ Seit 1999 Ihr Partner
                        </Badge>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={fadeInUp}
                        className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
                    >
                        Professionelle{" "}
                        <span className="text-accent-500">Gebäudereinigung</span>
                        <br />
                        in Frankfurt & Rhein-Main
                    </motion.h1>

                    {/* Motto */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-lg md:text-xl text-white/80 font-medium italic"
                    >
                        WERTE. pflegen | schützen | erhalten.
                    </motion.p>

                    {/* Description */}
                    <motion.p
                        variants={fadeInUp}
                        className="mt-4 text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
                    >
                        RM GLOBAL Gebäudedienste – Ihr erfahrener Full-Service-Partner für
                        Büroreinigung, medizinische Reinigung, Glasreinigung und
                        Winterdienst.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-col sm:flex-row items-start gap-4"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                size="lg"
                                className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 h-12 text-base shadow-lg shadow-accent-500/25"
                                asChild
                            >
                                <a href="/kontakt">
                                    <Send className="mr-2 h-5 w-5" />
                                    Kostenloses Angebot
                                </a>
                            </Button>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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

                    {/* Trust Badges */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-8 flex flex-wrap items-center gap-6"
                    >
                        {["25+ Jahre Erfahrung", "100% Zuverlässig", "Faire Preise"].map(
                            (item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 text-white/70 text-sm"
                                >
                                    <Check className="w-4 h-4 text-accent-500" />
                                    <span>{item}</span>
                                </div>
                            )
                        )}
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                        variants={fadeInUp}
                        className="mt-6 flex items-center gap-2"
                    >
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 fill-accent-500 text-accent-500"
                                />
                            ))}
                        </div>
                        <span className="text-sm text-white/60">Top bewertet</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
