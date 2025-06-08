import React from "react";

const Result = ({ questions, userAnswers, onRestart }) => {
  const checkCorrect = (q, userAnswer) => {
    if (q.type === "single") {
      return userAnswer === q.answer;
    } else if (q.type === "multi") {
      return (
        Array.isArray(userAnswer) &&
        q.answer.length === userAnswer.length &&
        q.answer.every((ans) => userAnswer.includes(ans))
      );
    } else if (q.type === "fill") {
      return userAnswer.trim().toLowerCase() === q.answer.toLowerCase();
    }
    return false;
  };

  const totalScore = questions.filter((q, i) =>
    checkCorrect(q, userAnswers[i])
  ).length;

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <h3>
        Your Score: {totalScore} / {questions.length}
      </h3>

      <div style={{ textAlign: "left", margin: "30px auto", width: "80%" }}>
        {questions.map((q, index) => {
          const isCorrect = checkCorrect(q, userAnswers[index]);
          const userAns = userAnswers[index];
          const correctAns = q.answer;

          return (
            <div
              key={index}
              style={{
                borderBottom: "1px solid #ccc",
                marginBottom: "20px",
                paddingBottom: "10px"
              }}
            >
              <h4>
                Q{index + 1}. {q.question}
              </h4>
              <p>
                <strong>Your Answer:</strong>{" "}
                {Array.isArray(userAns)
                  ? userAns.join(", ")
                  : userAns || "No answer given"}
              </p>

              {isCorrect ? (
                <p style={{ color: "green" }}>✔ Correct</p>
              ) : (
                <>
                  <p style={{ color: "red" }}>✘ Incorrect</p>
                  <p>
                    <strong>Correct Answer:</strong>{" "}
                    {Array.isArray(correctAns)
                      ? correctAns.join(", ")
                      : correctAns}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>

      <button onClick={onRestart} style={{ padding: "10px 20px" }}>
        Restart Quiz
      </button>
    </div>
  );
};

export default Result;
