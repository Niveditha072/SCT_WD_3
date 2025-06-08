import React, { useState, useEffect } from "react";

const QuestionCard = ({ questionData, onAnswer }) => {
  const [selected, setSelected] = useState(
    questionData.type === "multi" ? [] : ""
  );

  // Reset answer when a new question is shown
  useEffect(() => {
    setSelected(questionData.type === "multi" ? [] : "");
  }, [questionData]);

  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (questionData.type === "multi") {
      if (checked) {
        setSelected([...selected, value]);
      } else {
        setSelected(selected.filter((ans) => ans !== value));
      }
    } else {
      setSelected(value);
    }
  };

  const handleSubmit = () => {
    if (
      (questionData.type === "fill" && selected.trim() === "") ||
      (questionData.type === "single" && selected === "") ||
      (questionData.type === "multi" && selected.length === 0)
    )
      return alert("Please select or enter an answer");
    onAnswer(selected);
  };

  return (
    <div className="question-card">
      <h3>{questionData.question}</h3>

      {questionData.type === "single" &&
        questionData.options.map((opt, i) => (
          <label key={i}>
            <input
              type="radio"
              name="option"
              value={opt}
              onChange={handleChange}
              checked={selected === opt}
            />
            {opt}
          </label>
        ))}

      {questionData.type === "multi" &&
        questionData.options.map((opt, i) => (
          <label key={i}>
            <input
              type="checkbox"
              value={opt}
              onChange={handleChange}
              checked={selected.includes(opt)}
            />
            {opt}
          </label>
        ))}

      {questionData.type === "fill" && (
        <input
          type="text"
          placeholder="Your answer"
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
        />
      )}

      <br />
      <button onClick={handleSubmit}>Next</button>
    </div>
  );
};

export default QuestionCard;
