"use client";

import { motion } from "framer-motion";
import { WizardQuestion, Answer, QuestionOption } from "../types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface DynamicFormStepProps {
    questions: WizardQuestion[];
    answers: Record<string, Answer>;
    onAnswer: (questionId: string, value: Answer) => void;
    onAutoAdvance?: () => void;
}

export function DynamicFormStep({ questions, answers, onAnswer, onAutoAdvance }: DynamicFormStepProps) {
    return (
        <div className="space-y-8">
            {questions.map((question) => (
                <motion.div
                    key={question.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                >
                    <Label className="text-lg font-medium text-foreground">
                        {question.label}
                    </Label>

                    {renderInput(
                        question,
                        answers[question.id],
                        (val) => onAnswer(question.id, val),
                        onAutoAdvance
                    )}
                </motion.div>
            ))}
        </div>
    );
}

function renderInput(
    question: WizardQuestion,
    value: Answer | undefined,
    onChange: (val: Answer) => void,
    onAutoAdvance?: () => void
) {
    const handleRadioSelect = (optionValue: string) => {
        onChange(optionValue);
        // Trigger auto-advance if provided (only for radio)
        if (question.type === "radio" && onAutoAdvance) {
            setTimeout(() => onAutoAdvance(), 300); // Small delay for visual feedback
        }
    };

    const handleCheckboxToggle = (optionValue: string) => {
        const current = (value as string[]) || [];
        if (current.includes(optionValue)) {
            onChange(current.filter((v) => v !== optionValue));
        } else {
            onChange([...current, optionValue]);
        }
    };

    switch (question.type) {
        case "radio":
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {question.options?.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleRadioSelect(option.value)}
                            className={cn(
                                "cursor-pointer rounded-lg border p-4 transition-all hover:bg-accent/5",
                                value === option.value
                                    ? "border-primary-500 bg-primary-50 ring-1 ring-primary-500"
                                    : "border-input bg-background hover:border-accent-500/50"
                            )}
                        >
                            <div className="flex items-center justify-between">
                                <span className={cn("font-medium", value === option.value ? "text-primary-700" : "text-foreground")}>
                                    {option.label}
                                </span>
                                {value === option.value && (
                                    <Check className="w-4 h-4 text-primary-500" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            );

        case "checkbox":
            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {question.options?.map((option) => {
                        const isSelected = (value as string[])?.includes(option.value);
                        return (
                            <div
                                key={option.value}
                                onClick={() => handleCheckboxToggle(option.value)}
                                className={cn(
                                    "cursor-pointer rounded-lg border p-4 transition-all hover:bg-accent/5",
                                    isSelected
                                        ? "border-primary-500 bg-primary-50 ring-1 ring-primary-500"
                                        : "border-input bg-background hover:border-accent-500/50"
                                )}
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className={cn(
                                            "w-5 h-5 rounded border flex items-center justify-center transition-colors",
                                            isSelected
                                                ? "bg-primary-500 border-primary-500 text-white"
                                                : "border-input bg-background"
                                        )}
                                    >
                                        {isSelected && <Check className="w-3 h-3" />}
                                    </div>
                                    <span className={cn("font-medium", isSelected ? "text-primary-700" : "text-foreground")}>
                                        {option.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );

        case "date":
            return (
                <Input
                    type="date"
                    className="w-full sm:w-auto min-w-[200px]"
                    value={(value as string) || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            );

        case "text":
        default:
            return (
                <Input
                    placeholder={question.placeholder}
                    value={(value as string) || ""}
                    onChange={(e) => onChange(e.target.value)}
                />
            );
    }
}
