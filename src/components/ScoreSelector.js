import React, { useState } from "react";
import "../styles/ScoreSelector.css";

const ScoreSelector = ({
  factor,
  question,
  leftLabel,
  rightLabel,
  direction = "ltr",
  onChange,
}) => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleClick = (index) => {
    const score = direction === "ltr" ? (index + 1) * 5 : (20 - index) * 5;
    setSelectedBox(index);
    onChange(factor, score);
  };

  return (
    <div className="score-selector">
      <div className="question">
        <strong>{factor}</strong>: {question}
      </div>
      <div className="labels">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="score-bar">
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            className={`score-box ${selectedBox === index ? "selected" : ""}`}
            onClick={() => handleClick(index)}
          />
        ))}

        <div className="marks">
          {Array.from({ length: 21 }, (_, index) => (
            <div
              key={index}
              className={`mark ${index === 10 ? "middle-mark" : ""}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreSelector;
