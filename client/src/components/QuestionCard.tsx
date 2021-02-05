import React from "react";

interface Props {
    question: string;
    answer: string[];
    callback: any;
    userAnswer: string;
    questionNumber: number;
    totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
    question,
    answer,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions,
}) => <div>Question Card</div>;

export default QuestionCard;
