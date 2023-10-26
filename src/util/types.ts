export type Result = {
    celebrity: Celebrity | null;
    answers: Answer[];
}

export type Answer = {
    question: string;
    answer: string;
}

export type Celebrity = {
    name: string;
    description: string;
}
