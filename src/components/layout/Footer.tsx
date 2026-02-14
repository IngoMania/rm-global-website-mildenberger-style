"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { COMPANY, LOCATIONS, SERVICES } from "@/lib/constants";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-primary-900 text-white"
        >
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="inline-block bg-white rounded-xl p-4 mb-4">
                            <div className="relative w-48 h-12">
                                <Image
                                    src="/assets/images/logo-transparent-header.webp"
                                    alt="RM GLOBAL Gebäudedienste"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-sm text-white/70 italic">
                            {COMPANY.motto}
                        </p>
                        <p className="text-sm text-white/60 leading-relaxed">
                            Seit {COMPANY.founded} Ihr zuverlässiger Partner für
                            professionelle Gebäudedienste in der Rhein-Main und Rhein-Neckar
                            Region.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Leistungen</h3>
                        <ul className="space-y-2.5">
                            {SERVICES.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/leistungen/${service.slug}`}
                                        className="text-sm text-white/70 hover:text-accent-500 transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="/leistungen"
                                    className="text-sm text-white/70 hover:text-accent-500 transition-colors"
                                >
                                    Facility Management
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Frankfurt */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {LOCATIONS[0].label}
                        </h3>
                        <ul className="space-y-2.5 text-sm text-white/70">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-500" />
                                <span>
                                    {LOCATIONS[0].address}
                                    <br />
                                    {LOCATIONS[0].zip} {LOCATIONS[0].city}
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 shrink-0 text-accent-500" />
                                <a
                                    href={`tel:${LOCATIONS[0].phone.replace(/[\s/()]/g, "")}`}
                                    className="hover:text-accent-500 transition-colors"
                                >
                                    {LOCATIONS[0].phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 shrink-0 text-accent-500" />
                                <a
                                    href={`mailto:${LOCATIONS[0].email}`}
                                    className="hover:text-accent-500 transition-colors"
                                >
                                    {LOCATIONS[0].email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Mannheim */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">
                            {LOCATIONS[1].label}
                        </h3>
                        <ul className="space-y-2.5 text-sm text-white/70">
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent-500" />
                                <span>
                                    {LOCATIONS[1].address}
                                    <br />
                                    {LOCATIONS[1].zip} {LOCATIONS[1].city}
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 shrink-0 text-accent-500" />
                                <a
                                    href={`tel:${LOCATIONS[1].phone.replace(/[\s/()]/g, "")}`}
                                    className="hover:text-accent-500 transition-colors"
                                >
                                    {LOCATIONS[1].phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 shrink-0 text-accent-500" />
                                <a
                                    href={`mailto:${LOCATIONS[1].email}`}
                                    className="hover:text-accent-500 transition-colors"
                                >
                                    {LOCATIONS[1].email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-white/10" />

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <motion.a
                            href={COMPANY.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                        >
                            <Globe className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href={`mailto:${COMPANY.email}`}
                            whileHover={{ y: -3 }}
                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-500 transition-colors"
                        >
                            <Mail className="w-5 h-5" />
                        </motion.a>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-white/50">
                        <Link
                            href="/impressum"
                            className="hover:text-white transition-colors"
                        >
                            Impressum
                        </Link>
                        <span>|</span>
                        <Link
                            href="/datenschutz"
                            className="hover:text-white transition-colors"
                        >
                            Datenschutz
                        </Link>
                    </div>

                    <p className="text-sm text-white/50">
                        © {new Date().getFullYear()} {COMPANY.name}. Alle Rechte
                        vorbehalten.
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
