"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function Services() {
    return (
        <section className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Leistungen"
                    title="Unsere"
                    highlight="Leistungen"
                    description="Professionelle Lösungen für jede Anforderung"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.slug}
                            variants={fadeInUp}
                            whileHover="hover"
                        >
                            <Card className="overflow-hidden group h-full border-0 shadow-md hover:shadow-xl transition-shadow">
                                {/* Header with gradient */}
                                <div className="relative h-48 overflow-hidden">
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                                        variants={{
                                            hover: { scale: 1.05 },
                                        }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <service.icon className="absolute bottom-4 right-4 w-24 h-24 text-white/15" />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/20 backdrop-blur-sm text-white border-0">
                                            {service.title}
                                        </Badge>
                                    </div>
                                </div>

                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-2 text-sm"
                                            >
                                                <Check className="w-4 h-4 text-success-500 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <motion.div
                                        variants={{ hover: { x: 5 } }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Button variant="ghost" asChild className="p-0 h-auto text-primary-500 hover:text-primary-600 hover:bg-transparent">
                                            <Link href={`/leistungen/${service.slug}`}>
                                                Mehr erfahren
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
