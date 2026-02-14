"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";

import { WIZARD_FLOWS } from "./config";
import { WizardData, Answer } from "./types";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

// Steps
import { ServiceSelection } from "./steps/ServiceSelection";
import { DynamicFormStep } from "./steps/DynamicFormStep";
import { ContactStep } from "./steps/ContactStep";
import { SuccessStep } from "./steps/SuccessStep";

// Initial State
const INITIAL_DATA: WizardData = {
    service: null,
    answers: {},
    contact: {
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    },
};

interface WizardProps {
    isModal?: boolean;
    onClose?: () => void;
    defaultService?: string | null;
}

export function Wizard({ isModal, onClose, defaultService }: WizardProps) {
    const searchParams = useSearchParams();
    const serviceParam = defaultService || searchParams.get("service");

    const [data, setData] = useState<WizardData>(INITIAL_DATA);
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // For submission simulation

    // Determine current workflow based on selected service
    const workflow = WIZARD_FLOWS.find((flow) => flow.slug === data.service);

    // Initial load from URL or Prop
    useEffect(() => {
        if (serviceParam) {
            setData((prev) => ({ ...prev, service: serviceParam }));
        }
    }, [serviceParam]);

    // Handlers
    const handleServiceSelect = (slug: string) => {
        setData((prev) => ({ ...prev, service: slug, answers: {} }));
        setCurrentStepIndex(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleAnswer = (questionId: string, value: Answer) => {
        setData((prev) => ({
            ...prev,
            answers: { ...prev.answers, [questionId]: value },
        }));
    };

    const handleContactChange = (field: string, value: string) => {
        setData((prev) => ({
            ...prev,
            contact: { ...prev.contact, [field]: value },
        }));
    };

    const handleNext = () => {
        // Validate current step
        if (workflow) {
            const currentQuestions = workflow.steps[currentStepIndex]?.questions;
            if (currentQuestions) {
                // Check required fields
                const missing = currentQuestions.filter((q) => {
                    const ans = data.answers[q.id];
                    // Check if answer exists and is not empty
                    if (q.required !== false) { // Default to required
                        if (ans === undefined || ans === null || ans === "") return true;
                        if (Array.isArray(ans) && ans.length === 0) return true;
                    }
                    return false;
                });

                if (missing.length > 0) {
                    alert("Bitte beantworten Sie alle Fragen."); // Simple alert for MVP
                    return;
                }
            }
        }

        setCurrentStepIndex((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        if (currentStepIndex === 0) {
            // Go back to service selection
            setData((prev) => ({ ...prev, service: null }));
        } else {
            setCurrentStepIndex((prev) => prev - 1);
        }
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubmit = async () => {
        // Validate Contact Form
        if (!data.contact.name || !data.contact.email || !data.contact.phone) {
            alert("Bitte füllen Sie alle Pflichtfelder aus (*).");
            return;
        }

        setIsLoading(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Submitted Data:", data);
        setIsLoading(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Render Logic
    if (isSubmitted) {
        return <SuccessStep />;
    }

    if (!data.service || !workflow) {
        return (
            <div className="w-full max-w-7xl mx-auto px-4 py-8">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Wofür benötigen Sie ein Angebot?
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Wählen Sie den passenden Service aus.
                    </p>
                </div>
                <ServiceSelection
                    selectedService={data.service}
                    onSelect={handleServiceSelect}
                />
            </div>
        );
    }

    // Workflow Logic
    const totalSteps = workflow.steps.length + 1; // +1 for Contact
    const isContactStep = currentStepIndex === workflow.steps.length;
    const currentStepConfig = workflow.steps[currentStepIndex];

    // Progress calculation (Service Selection is step 0, effectively 1 of Total+1)
    const progressPercentage = ((currentStepIndex + 1) / totalSteps) * 100;

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
            {/* Header / Progress */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-2 text-sm font-medium text-muted-foreground">
                    <span>
                        {isContactStep ? "Kontaktdaten" : currentStepConfig?.title}
                    </span>
                    <span>
                        Schritt {currentStepIndex + 1} von {totalSteps}
                    </span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={isContactStep ? "contact" : currentStepIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="min-h-[400px]"
                >
                    {isContactStep ? (
                        <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                Fast geschafft! Wie dürfen wir Sie kontaktieren?
                            </h2>
                            <ContactStep
                                contact={data.contact}
                                onChange={handleContactChange}
                            />
                        </div>
                    ) : (
                        <div className="bg-white rounded-xl shadow-sm border p-6 md:p-8">
                            <h2 className="text-2xl font-bold mb-6">
                                {currentStepConfig.title}
                            </h2>
                            <DynamicFormStep
                                questions={currentStepConfig.questions}
                                answers={data.answers}
                                onAnswer={handleAnswer}
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
                <Button
                    variant="outline"
                    onClick={handleBack}
                    disabled={isLoading}
                    className="flex items-center gap-2"
                >
                    <ChevronLeft className="w-4 h-4" />
                    Zurück
                </Button>

                {isContactStep ? (
                    <Button
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="bg-accent-500 hover:bg-accent-600 text-white min-w-[140px] flex items-center gap-2"
                    >
                        {isLoading ? (
                            "Sende..."
                        ) : (
                            <>
                                Angebot anfordern
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </Button>
                ) : (
                    <Button
                        onClick={handleNext}
                        className="bg-primary-600 hover:bg-primary-700 min-w-[120px] flex items-center gap-2"
                    >
                        Weiter
                        <ChevronRight className="w-4 h-4" />
                    </Button>
                )}
            </div>
        </div>
    );
}
