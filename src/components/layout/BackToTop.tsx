"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function BackToTop() {
    const scrollY = useScrollPosition();
    const isVisible = scrollY > 500;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-8 right-8 z-50"
                >
                    <Button
                        size="icon"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="rounded-full shadow-lg bg-primary-500 hover:bg-primary-600 text-white h-12 w-12"
                    >
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowUp className="h-5 w-5" />
                        </motion.div>
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
