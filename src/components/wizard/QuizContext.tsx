"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Wizard } from "./Wizard";

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
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
                        <div className="absolute right-4 top-4 z-10">
                            <button
                                onClick={closeQuiz}
                                className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        <Wizard isModal={true} onClose={closeQuiz} />
                    </div>
                </div>
            )}
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
