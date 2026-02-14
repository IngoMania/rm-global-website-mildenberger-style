"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SuccessStepProps {
    onClose?: () => void;
}

export function SuccessStep({ onClose }: SuccessStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12"
        >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Vielen Dank!
            </h2>
            <p className="text-lg text-gray-600 max-w-md mb-8">
                Wir haben Ihre Anfrage erhalten. Unser Team wird sich schnellstmöglich mit einem individuellen Angebot bei Ihnen melden.
            </p>
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
                <Link href="/">
                    Zurück zur Startseite
                </Link>
            </Button>
        </motion.div>
    );
}
