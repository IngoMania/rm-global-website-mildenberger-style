"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactStepProps {
    contact: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    };
    onChange: (field: string, value: string) => void;
}

export function ContactStep({ contact, onChange }: ContactStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="name">Name / Ansprechpartner *</Label>
                    <Input
                        id="name"
                        value={contact.name}
                        onChange={(e) => onChange("name", e.target.value)}
                        placeholder="Max Mustermann"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Firma (Optional)</Label>
                    <Input
                        id="company"
                        value={contact.company}
                        onChange={(e) => onChange("company", e.target.value)}
                        placeholder="Musterfirma GmbH"
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">E-Mail Adresse *</Label>
                    <Input
                        id="email"
                        type="email"
                        value={contact.email}
                        onChange={(e) => onChange("email", e.target.value)}
                        placeholder="max@beispiel.de"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer *</Label>
                    <Input
                        id="phone"
                        type="tel"
                        value={contact.phone}
                        onChange={(e) => onChange("phone", e.target.value)}
                        placeholder="+49 123 456789"
                        required
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Zusätzliche Nachricht (Optional)</Label>
                <Textarea
                    id="message"
                    value={contact.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    placeholder="Haben Sie spezielle Wünsche oder Anmerkungen?"
                    className="min-h-[100px]"
                />
            </div>
        </motion.div>
    );
}
