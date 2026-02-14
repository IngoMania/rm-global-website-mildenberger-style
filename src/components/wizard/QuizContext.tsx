"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Wizard } from "./Wizard";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface QuizContextType {
    isOpen: boolean;
    openQuiz: (serviceSlug?: string) => void;
    closeQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export function QuizProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialService, setInitialService] = useState<string | null>(null);

    const openQuiz = (serviceSlug?: string) => {
        if (serviceSlug) {
            setInitialService(serviceSlug);
            // Updating URL without navigation (optional, but good for sharing)
            const url = new URL(window.location.href);
            url.searchParams.set("service", serviceSlug);
            window.history.pushState({}, "", url);
        } else {
            setInitialService(null);
        }
        setIsOpen(true);
    };

    const closeQuiz = () => {
        setIsOpen(false);
        setInitialService(null);
        // Clear param optionally
        const url = new URL(window.location.href);
        url.searchParams.delete("service");
        window.history.pushState({}, "", url);
    };

    return (
        <QuizContext.Provider value={{ isOpen, openQuiz, closeQuiz }}>
            {children}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-gray-50 border-none shadow-2xl rounded-2xl">
                    <div className="relative isolate">
                        {/* Close button is handled by DialogPrimitive but we can style it or add our own if needed. 
                            Wizard has its own layout. We should make Wizard responsive inside dialog. */}
                        <div className="p-1">
                            <Wizard isModal={true} onClose={closeQuiz} />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </QuizContext.Provider>
    );
}

export function useQuiz() {
    const context = useContext(QuizContext);
    if (context === undefined) {
        throw new Error("useQuiz must be used within a QuizProvider");
    }
    return context;
}
