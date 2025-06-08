import React, { useState } from "react";
import originalQuestions from "../data/questions";
import QuestionCard from "./QuestionCard";
import Result from "./Result";

// Function to shuffle questions
const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [questions, setQuestions] = useState(shuffleArray(originalQuestions));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = answer;
    setUserAnswers(updatedAnswers);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setQuestions(shuffleArray(originalQuestions)); // shuffle again on restart
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      {!showResult ? (
        <>
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{
                height: "20px",
                width: "100%",
                backgroundColor: "#eee",
                borderRadius: "10px",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${progressPercent}%`,
                  backgroundColor: "#4caf50",
                  transition: "width 0.3s ease-in-out"
                }}
              ></div>
            </div>
            <p style={{ marginTop: "8px" }}>
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>

          <QuestionCard
            questionData={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </>
      ) : (
        <Result
          questions={questions}
          userAnswers={userAnswers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Quiz;
