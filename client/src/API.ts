import { shuffleArray } from "./utils";

export interface Question {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizQuestions = async (
    amount: number,
    difficulty: Difficulty
) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=28&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    return data.results.map((q: Question) => ({
        ...q,
        answers: shuffleArray([...q.incorrect_answers, q.correct_answer]),
    }));
};
