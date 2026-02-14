"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SERVICES } from "@/lib/constants";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {SERVICES.map((service) => (
                        <motion.div
                            key={service.slug}
                            variants={fadeInUp}
                            whileHover="hover"
                        >
                            <Card className="overflow-hidden group h-full border-0 shadow-md hover:shadow-xl transition-shadow">
                                {/* Header with Image */}
                                <div className="relative h-56 overflow-hidden">
                                    {service.image ? (
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    ) : (
                                        <div
                                            className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 text-primary-950 font-semibold hover:bg-white border-0 shadow-sm backdrop-blur-sm">
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

                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <Button variant="ghost" asChild className="p-0 h-auto text-primary-600 hover:text-primary-700 hover:bg-transparent px-0 group/link">
                                            <Link href={`/leistungen/${service.slug}`} className="flex items-center">
                                                Mehr erfahren
                                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                        </Button>

                                        <Button size="sm" asChild className="bg-accent-500 hover:bg-accent-600 text-white shadow-sm hover:shadow-md transition-all">
                                            <Link href={`/anfrage?service=${service.slug}`}>
                                                <MessageSquare className="mr-2 h-3.5 w-3.5" />
                                                Angebot
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
