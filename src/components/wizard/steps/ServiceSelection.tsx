"use client";

import { SERVICES } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface ServiceSelectionProps {
    selectedService: string | null;
    onSelect: (slug: string) => void;
}

export function ServiceSelection({ selectedService, onSelect }: ServiceSelectionProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
                <motion.div
                    key={service.slug}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onSelect(service.slug)}
                    className="cursor-pointer h-full"
                >
                    <Card
                        className={`h-full overflow-hidden transition-all duration-300 border-2 ${selectedService === service.slug
                                ? "border-primary-500 shadow-xl ring-2 ring-primary-500/20"
                                : "border-transparent hover:border-gray-200 hover:shadow-lg"
                            }`}
                    >
                        <div className="relative h-48 w-full">
                            {service.image ? (
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            ) : (
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />
                            )}

                            {/* Overlay for selection state */}
                            {selectedService === service.slug && (
                                <div className="absolute inset-0 bg-primary-500/20 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="bg-white rounded-full p-2 shadow-lg">
                                        <Check className="w-6 h-6 text-primary-600" />
                                    </div>
                                </div>
                            )}

                            <div className="absolute top-4 left-4">
                                <Badge className="bg-white/90 text-primary-950 hover:bg-white border-0 shadow-sm backdrop-blur-sm">
                                    {service.title}
                                </Badge>
                            </div>
                        </div>

                        <CardContent className="p-4">
                            <p className="text-sm text-muted-foreground line-clamp-2">
                                {service.description}
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
