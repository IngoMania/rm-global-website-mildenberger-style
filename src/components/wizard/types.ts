export type Answer = string | string[] | number | Date;

export interface WizardData {
    service: string | null;
    answers: Record<string, Answer>;
    contact: {
        name: string;
        email: string;
        phone: string;
        company: string;
        message: string;
    };
}

export interface QuestionOption {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface WizardQuestion {
    id: string;
    label: string;
    type: "radio" | "select" | "text" | "number" | "date" | "textarea" | "checkbox";
    options?: QuestionOption[];
    placeholder?: string;
    required?: boolean;
    condition?: (answers: Record<string, Answer>) => boolean;
}

export interface ServiceFlow {
    slug: string;
    title: string;
    steps: {
        id: string;
        title: string;
        questions: WizardQuestion[];
    }[];
}
