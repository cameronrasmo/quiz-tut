import React from "react";
// Components
import QuestionCard from "./components/QuestionCard.tsx";

const App = () => {
    const startTrivia = async () => {};

    // declare what type of html element the mouse event occurs on
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

    const nextQuestion = () => {};

    return (
        <div>
            <h1>React Quiz</h1>
            <button className='start' onClick={startTrivia}>
                Start
            </button>
            <p className='score'>Score: </p>
            <p>Loading questions...</p>
            <QuestionCard />
            <button className='next' onClick={nextQuestion}>
                Next question
            </button>
        </div>
    );
};

export default App;
