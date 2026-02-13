"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex items-center gap-2"
            >
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                        <span className="text-white font-extrabold text-lg">RM</span>
                    </div>
                </div>
                <div className="flex flex-col text-inherit">
                    <span className="font-extrabold text-lg leading-tight">
                        RM GLOBAL
                    </span>
                    <span className="text-[10px] font-medium opacity-80 tracking-widest uppercase">
                        Gebäudedienste
                    </span>
                </div>
            </motion.div>
        </Link>
    );
}
