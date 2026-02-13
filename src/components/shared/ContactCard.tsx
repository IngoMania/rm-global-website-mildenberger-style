"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

interface ContactCardProps {
    location: {
        city: string;
        label: string;
        address: string;
        zip: string;
        phone: string;
        fax: string | null;
        email: string;
    };
}

export function ContactCard({ location }: ContactCardProps) {
    return (
        <motion.div variants={fadeInUp}>
            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 space-y-4">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary-500" />
                        {location.label}
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <p className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" />
                            <span>
                                {location.address}
                                <br />
                                {location.zip} {location.city}
                            </span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone className="w-4 h-4 shrink-0 text-primary-400" />
                            <a
                                href={`tel:${location.phone.replace(/[\s/()]/g, "")}`}
                                className="hover:text-primary-500 transition-colors"
                            >
                                {location.phone}
                            </a>
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="w-4 h-4 shrink-0 text-primary-400" />
                            <a
                                href={`mailto:${location.email}`}
                                className="hover:text-primary-500 transition-colors"
                            >
                                {location.email}
                            </a>
                        </p>
                        <p className="flex items-center gap-3">
                            <Clock className="w-4 h-4 shrink-0 text-primary-400" />
                            <span>{COMPANY.hours}</span>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    );
}
