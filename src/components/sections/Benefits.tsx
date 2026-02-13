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
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {BENEFITS.map((benefit) => (
                        <motion.div
                            key={benefit.title}
                            variants={fadeInUp}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                        >
                            <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow bg-background">
                                <CardHeader className="pb-2">
                                    <motion.div
                                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/20"
                                        whileHover={{ rotate: 5, scale: 1.1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                    >
                                        <benefit.icon className="w-7 h-7 text-white" />
                                    </motion.div>
                                </CardHeader>
                                <CardContent>
                                    <h3 className="text-lg font-semibold mb-2">
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
