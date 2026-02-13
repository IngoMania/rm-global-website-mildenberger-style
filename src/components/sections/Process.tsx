"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PROCESS_STEPS } from "@/lib/constants";
import { Send } from "lucide-react";

export function Process() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="So einfach geht's"
                    title="In nur 3 Schritten zu Ihrer"
                    highlight="sauberen Lösung"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-8 relative"
                >
                    {/* Connector Lines (desktop) */}
                    <div className="hidden md:block absolute top-1/2 left-[17%] right-[17%] h-0.5 -translate-y-1/2">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="w-full h-full bg-primary-200 origin-left"
                        />
                    </div>

                    {PROCESS_STEPS.map((step, i) => (
                        <motion.div
                            key={step.title}
                            variants={fadeInUp}
                            className="relative"
                        >
                            <Card className="h-full border-0 shadow-md text-center relative bg-background">
                                {/* Step number */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 200,
                                        delay: i * 0.2,
                                    }}
                                    className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-accent-500 text-white flex items-center justify-center font-bold text-sm shadow-lg z-10"
                                >
                                    {i + 1}
                                </motion.div>

                                <CardContent className="pt-10 pb-8 px-6">
                                    <motion.div
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{
                                            repeat: Infinity,
                                            duration: 2,
                                            repeatDelay: 1,
                                            delay: i * 0.3,
                                        }}
                                        className="mb-4 flex justify-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center">
                                            <step.icon className="w-8 h-8 text-primary-500" />
                                        </div>
                                    </motion.div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.div
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
                                Jetzt Anfrage starten
                            </a>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
