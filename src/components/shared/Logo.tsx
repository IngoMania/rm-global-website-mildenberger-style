"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
    scrolled?: boolean;
}

export function Logo({ scrolled = false }: LogoProps) {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className={cn(
                    "relative flex items-center justify-center rounded-lg transition-colors",
                    !scrolled && "bg-white shadow-sm"
                )}
            >
                <div className="relative w-40 h-10">
                    <Image
                        src="/assets/images/logo-transparent-header.webp"
                        alt="RM GLOBAL Gebäudedienste"
                        fill
                        className="object-contain"
                        priority
                        sizes="(max-width: 768px) 160px, 200px"
                    />
                </div>
            </motion.div>
        </Link>
    );
}
