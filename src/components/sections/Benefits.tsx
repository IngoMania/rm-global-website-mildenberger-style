"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Ihre Vorteile"
                    title="Warum"
                    highlight="RM GLOBAL?"
                    description="Was uns von anderen unterscheidet"
                    className="text-center mx-auto max-w-3xl"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {BENEFITS.map((benefit) => (
                        <motion.div
                            key={benefit.title}
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow bg-background text-center group">
                                <CardHeader className="pb-4 flex flex-col items-center">
                                    <motion.div
                                        className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300"
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <benefit.icon className="w-10 h-10 text-white" />
                                    </motion.div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-bold mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
