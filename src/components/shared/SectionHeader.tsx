"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    badge?: string;
    title: string;
    highlight?: string;
    description?: string;
    centered?: boolean;
    className?: string;
}

export function SectionHeader({
    badge,
    title,
    highlight,
    description,
    centered = true,
    className,
}: SectionHeaderProps) {
    return (
        <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
                "mb-12 md:mb-16",
                centered && "text-center",
                className
            )}
        >
            {badge && (
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold mb-4">
                    {badge}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                {title}{" "}
                {highlight && (
                    <span className="text-accent-500">{highlight}</span>
                )}
            </h2>
            {description && (
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
