import React, { useState } from "react";
import ScoreSelector from "../components/ScoreSelector";
import "../styles/SelectionPage.css";

const factors = [
  {
    name: "Mental Demand",
    question: "How mentally demanding was the task?",
    leftLabel: "Very Low",
    rightLabel: "Very High",
    direction: "ltr",
  },
  {
    name: "Physical Demand",
    question: "How physically demanding was the task?",
    leftLabel: "Very Low",
    rightLabel: "Very High",
    direction: "ltr",
  },
  {
    name: "Temporal Demand",
    question: "How hurried or rushed was the pace of the task?",
    leftLabel: "Very Low",
    rightLabel: "Very High",
    direction: "ltr",
  },
  {
    name: "Performance",
    question:
      "How successful were you in accomplishing what you were asked to do?",
    leftLabel: "Perfect",
    rightLabel: "Failure",
    direction: "rtl", // Example of right-to-left scoring
  },
  {
    name: "Effort",
    question:
      "How hard did you have to work to accomplish your level of performance?",
    leftLabel: "Very Low",
    rightLabel: "Very High",
    direction: "ltr",
  },
  {
    name: "Frustration",
    question:
      "How insecure, discouraged, irritated, stressed, and annoyed were you?",
    leftLabel: "Very Low",
    rightLabel: "Very High",
    direction: "ltr",
  },
];

const SelectionPage = ({ onSubmit }) => {
  const [scores, setScores] = useState({});

  const handleScoreChange = (factor, score) => {
    setScores((prev) => ({ ...prev, [factor]: score }));
  };

  const handleSubmit = () => {
    if (Object.keys(scores).length < factors.length) {
      alert("Please complete all ratings before proceeding.");
    } else {
      onSubmit(scores);
    }
  };

  return (
    <div className="selection-page">
      <h1>NASA TLX Evaluation</h1>
      {factors.map(({ name, question, leftLabel, rightLabel, direction }) => (
        <ScoreSelector
          key={name}
          factor={name}
          question={question}
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          direction={direction}
          onChange={handleScoreChange}
        />
      ))}
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default SelectionPage;
