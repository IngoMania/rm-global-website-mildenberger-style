"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideInRight } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactCard } from "@/components/shared/ContactCard";
import { LOCATIONS, SERVICES } from "@/lib/constants";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
    email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, "Bitte geben Sie eine Nachricht ein (mind. 10 Zeichen)"),
    privacy: z.boolean().refine((val) => val === true, {
        message: "Bitte akzeptieren Sie die Datenschutzerklärung",
    }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            privacy: false,
        },
    });

    const privacyValue = watch("privacy");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onSubmit = async (_data: ContactFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitted(true);
        toast({
            title: "Nachricht gesendet! ✓",
            description:
                "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
        });
        reset();
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4">
                <SectionHeader
                    badge="Kontakt"
                    title="Kontaktieren Sie"
                    highlight="uns"
                    description="Wir freuen uns auf Ihre Anfrage"
                />

                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Contact Info - 2 cols */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-6"
                    >
                        {LOCATIONS.map((location) => (
                            <ContactCard key={location.city} location={location} />
                        ))}
                    </motion.div>

                    {/* Contact Form - 3 cols */}
                    <motion.div
                        variants={slideInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-3"
                    >
                        <Card className="border-0 shadow-lg">
                            <CardContent className="p-6 md:p-8">
                                {isSubmitted ? (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ type: "spring", stiffness: 200 }}
                                        className="text-center py-12"
                                    >
                                        <CheckCircle className="w-16 h-16 text-success-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-semibold mb-2">
                                            Vielen Dank!
                                        </h3>
                                        <p className="text-muted-foreground">
                                            Ihre Nachricht wurde erfolgreich gesendet. Wir melden
                                            uns in Kürze bei Ihnen.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-5"
                                    >
                                        {/* Name */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">
                                                Name *
                                            </label>
                                            <Input
                                                {...register("name")}
                                                placeholder="Ihr Name"
                                                className={errors.name ? "border-red-500" : ""}
                                            />
                                            {errors.name && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.name.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Email + Phone */}
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">
                                                    E-Mail *
                                                </label>
                                                <Input
                                                    {...register("email")}
                                                    type="email"
                                                    placeholder="ihre@email.de"
                                                    className={errors.email ? "border-red-500" : ""}
                                                />
                                                {errors.email && (
                                                    <p className="text-xs text-red-500 mt-1">
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-1.5">
                                                    Telefon
                                                </label>
                                                <Input
                                                    {...register("phone")}
                                                    type="tel"
                                                    placeholder="Ihre Telefonnummer"
                                                />
                                            </div>
                                        </div>

                                        {/* Service Select */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">
                                                Leistung
                                            </label>
                                            <select
                                                {...register("service")}
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            >
                                                <option value="">Bitte wählen...</option>
                                                {SERVICES.map((s) => (
                                                    <option key={s.slug} value={s.title}>
                                                        {s.title}
                                                    </option>
                                                ))}
                                                <option value="Facility Management">
                                                    Facility Management
                                                </option>
                                                <option value="Sonstige">Sonstige</option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-medium mb-1.5">
                                                Nachricht *
                                            </label>
                                            <Textarea
                                                {...register("message")}
                                                placeholder="Wie können wir Ihnen helfen?"
                                                rows={5}
                                                className={errors.message ? "border-red-500" : ""}
                                            />
                                            {errors.message && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Privacy */}
                                        <div>
                                            <div className="flex items-start gap-2">
                                                <Checkbox
                                                    id="privacy"
                                                    checked={privacyValue}
                                                    onCheckedChange={(checked) =>
                                                        setValue("privacy", checked === true)
                                                    }
                                                />
                                                <label
                                                    htmlFor="privacy"
                                                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                                                >
                                                    Ich habe die{" "}
                                                    <a
                                                        href="/datenschutz"
                                                        className="text-primary-500 hover:underline"
                                                    >
                                                        Datenschutzerklärung
                                                    </a>{" "}
                                                    gelesen und stimme der Verarbeitung meiner Daten zu.
                                                    *
                                                </label>
                                            </div>
                                            {errors.privacy && (
                                                <p className="text-xs text-red-500 mt-1">
                                                    {errors.privacy.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent-500 hover:bg-accent-600 text-white h-12 text-base font-semibold"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                    Wird gesendet...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="mr-2 h-5 w-5" />
                                                    Nachricht senden
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
