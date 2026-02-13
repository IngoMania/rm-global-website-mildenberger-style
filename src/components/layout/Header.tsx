"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { NAV_ITEMS } from "@/lib/constants";
import {
    Phone,
    Menu,
    ChevronDown,
} from "lucide-react";

export function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                "fixed top-0 z-50 w-full transition-all duration-300",
                scrolled
                    ? "bg-background/80 backdrop-blur-lg shadow-sm border-b text-foreground"
                    : "bg-transparent text-white"
            )}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {NAV_ITEMS.map((item) => (
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() =>
                                    item.children && setOpenDropdown(item.label)
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                                        scrolled
                                            ? "text-foreground hover:text-primary-500 hover:bg-primary-50"
                                            : "text-white/90 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    <span className="flex items-center gap-1">
                                        {item.label}
                                        {item.children && (
                                            <ChevronDown className="w-3.5 h-3.5" />
                                        )}
                                    </span>
                                </Link>

                                {/* Dropdown */}
                                {item.children && openDropdown === item.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        className="absolute top-full left-0 mt-1 w-56 bg-background rounded-lg shadow-lg border p-2"
                                    >
                                        {item.children.map((child) => (
                                            <Link
                                                key={child.label}
                                                href={child.href}
                                                className="block px-4 py-2.5 text-sm rounded-md hover:bg-primary-50 hover:text-primary-500 transition-colors"
                                            >
                                                {child.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA + Mobile Menu */}
                    <div className="flex items-center gap-3">
                        <Button
                            asChild
                            className={cn(
                                "hidden sm:flex text-white font-medium",
                                scrolled
                                    ? "bg-primary-500 hover:bg-primary-600"
                                    : "bg-accent-500 hover:bg-accent-600"
                            )}
                        >
                            <a href="tel:+496978803637">
                                <Phone className="mr-2 h-4 w-4" />
                                Jetzt anrufen
                            </a>
                        </Button>

                        {/* Mobile Navigation */}
                        <Sheet>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className={cn(!scrolled && "text-white hover:bg-white/10")}>
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] p-0">
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <Logo />
                                    </div>
                                    <nav className="flex flex-col p-4 gap-1">
                                        {NAV_ITEMS.map((item) => (
                                            <div key={item.label}>
                                                <SheetClose asChild>
                                                    <Link
                                                        href={item.href}
                                                        className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-md hover:bg-primary-50 hover:text-primary-500 transition-colors"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </SheetClose>
                                                {item.children?.map((child) => (
                                                    <SheetClose asChild key={child.label}>
                                                        <Link
                                                            href={child.href}
                                                            className="block pl-8 pr-4 py-2.5 text-sm text-muted-foreground rounded-md hover:bg-primary-50 hover:text-primary-500 transition-colors"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </SheetClose>
                                                ))}
                                            </div>
                                        ))}
                                    </nav>
                                    <div className="mt-auto p-4 border-t">
                                        <Button
                                            asChild
                                            className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                                        >
                                            <a href="tel:+496978803637">
                                                <Phone className="mr-2 h-4 w-4" />
                                                069 / 78 80 36 37
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
