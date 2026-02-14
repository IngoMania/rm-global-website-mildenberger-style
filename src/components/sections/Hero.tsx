"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Send, Phone, Check, Star, Play } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 lg:py-0">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            {/* Animated floating elements */}
            <motion.div
                animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl"
            />
            <motion.div
                animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary-400/10 blur-3xl"
            />

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
                    {/* Text Content (Left) */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                        className="max-w-xl"
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp}>
                            <Badge className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm px-4 py-1.5 text-sm">
                                ✦ Seit 1999 Ihr Partner
                            </Badge>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeInUp}
                            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
                        >
                            Professionelle{" "}
                            <span className="text-accent-500">Gebäudereinigung</span>
                            <br />
                            in Frankfurt & Rhein-Main
                        </motion.h1>

                        {/* Motto */}
                        <motion.p
                            variants={fadeInUp}
                            className="mt-4 text-lg md:text-xl text-white/80 font-medium italic"
                        >
                            WERTE. pflegen | schützen | erhalten.
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className="mt-4 text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
                        >
                            RM GLOBAL Gebäudedienste – Ihr erfahrener Full-Service-Partner für
                            Büroreinigung, medizinische Reinigung, Glasreinigung und
                            Winterdienst.
                        </motion.p>

                        {/* Trust Badges & Rating */}
                        <motion.div
                            variants={fadeInUp}
                            className="mt-8 p-6 bg-black/40 backdrop-blur-sm rounded-xl border border-white/10"
                        >
                            <div className="flex flex-wrap items-center gap-6">
                                {["25+ Jahre Erfahrung", "100% Zuverlässig", "Faire Preise"].map(
                                    (item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-2 text-white/90 text-sm font-medium"
                                        >
                                            <Check className="w-4 h-4 text-accent-500" />
                                            <span>{item}</span>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="mt-4 flex items-center gap-3 pt-4 border-t border-white/10">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-white/80 font-medium">
                                    4.9 von 5 Sternen auf Google
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Video + Buttons */}
                    <div className="flex flex-col gap-8">
                        {/* Video Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-black/50"
                        >
                            {!isPlaying ? (
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="group relative w-full h-full flex items-center justify-center"
                                    aria-label="Werbevideo abspielen"
                                >
                                    <Image
                                        src="/assets/images/RM-Global-Video-Placeholder.webp"
                                        alt="RM Global Video Placeholder"
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 60vw"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                                    {/* Play Button */}
                                    <div className="relative z-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <div className="w-14 h-14 bg-accent-500 rounded-full flex items-center justify-center shadow-inner">
                                            <Play className="w-6 h-6 text-white ml-1 fill-white" />
                                        </div>
                                    </div>
                                </button>
                            ) : (
                                <div className="w-full h-full">
                                    <video
                                        src="/assets/videos/RM-Global-Werbevideo.mp4"
                                        className="w-full h-full object-cover"
                                        controls
                                        autoPlay
                                        playsInline
                                    />
                                </div>
                            )}
                        </motion.div>

                        {/* CTAs - Moved here */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 h-12 text-base shadow-lg shadow-accent-500/25"
                                    asChild
                                >
                                    <Link href="/anfrage">
                                        <Send className="mr-2 h-5 w-5" />
                                        Schnellangebot erhalten
                                    </Link>
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full sm:w-auto"
                            >
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto bg-white/5 border-white/30 text-white hover:bg-white/10 hover:text-white h-12 text-base backdrop-blur-sm"
                                    asChild
                                >
                                    <a href="tel:+496978803637">
                                        <Phone className="mr-2 h-5 w-5" />
                                        069 / 78 80 36 37
                                    </a>
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
