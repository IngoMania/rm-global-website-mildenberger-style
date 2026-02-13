"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-16 md:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Kundenstimmen"
                    title="Das sagen unsere"
                    highlight="Kunden"
                    description="Vertrauen Sie auf über 25 Jahre Erfahrung"
                />

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <motion.div
                            key={testimonial.name}
                            variants={fadeInUp}
                            whileHover={{
                                y: -5,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                            }}
                        >
                            <Card className="h-full border-0 shadow-md relative bg-background">
                                {/* Quote Icon Background */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 0.08, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="absolute top-4 right-4"
                                >
                                    <Quote className="w-16 h-16 text-primary-500" />
                                </motion.div>

                                <CardContent className="p-6 relative">
                                    {/* Star Rating */}
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                            >
                                                <Star className="w-5 h-5 fill-accent-500 text-accent-500" />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Quote */}
                                    <p className="text-muted-foreground leading-relaxed mb-6 italic">
                                        &ldquo;{testimonial.text}&rdquo;
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-semibold text-sm">
                                            {testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-sm">
                                                {testimonial.name}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                {testimonial.company}
                                            </p>
                                        </div>
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
