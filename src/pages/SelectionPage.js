import React, { useState } from "react";
import ScoreSelector from "../components/ScoreSelector";
import "../styles/SelectionPage.css";
import { useNavigate } from "react-router-dom";

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
    direction: "rtl",
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

const SelectionPage = () => {
  const navigate = useNavigate();
  const [scores, setScores] = useState({});
  const [participantNumber, setParticipantNumber] = useState("");
  const [taskNumber, setTaskNumber] = useState("");

  const handleScoreChange = (factor, score) => {
    setScores((prev) => ({ ...prev, [factor]: score }));
  };

  const handleSubmit = async () => {
    if (!participantNumber || !taskNumber) {
      alert("Participant Number and Task Number are required!");
      return;
    }

    if (Object.keys(scores).length < factors.length) {
      alert("Please complete all ratings before submitting!");
      return;
    }

    const payload = {
      participantNumber,
      taskNumber,
      scores,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzBJBbBohgQESc0qlBRd_9cLstho8E1UR39l_xLsS0aFsKxnCyilelXPVKNRZLHbNrG/exec",
        {
          method: "POST",
          mode: "no-cors", // Important for no-CORS requests
          headers: {
            "Content-Type": "application/json", // Content-Type headers may be ignored in no-cors mode
          },
          body: JSON.stringify(payload),
        }
      );

      // Note: In no-cors mode, response.ok and response.json() won't work
      setScores({});
      navigate("/thank-you", { replace: true });
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit results. Check the console for details.");
    }
  };

  return (
    <div className="selection-page">
      <h1>NASA TLX Evaluation</h1>
      <p>
        Please rate the following factors based on your experience during the
        task.
      </p>
      {factors.map(({ name, question, leftLabel, rightLabel, direction }) => (
        <div key={name} className="factor-section">
          <h3>{question}</h3>
          <ScoreSelector
            factor={name}
            leftLabel={leftLabel}
            rightLabel={rightLabel}
            direction={direction}
            onChange={handleScoreChange}
          />
        </div>
      ))}
      <div className="input-section">
        <label>
          Participant Number:
          <input
            type="text"
            value={participantNumber}
            onChange={(e) => setParticipantNumber(e.target.value)}
          />
        </label>
        <label>
          Task Number:
          <input
            type="text"
            value={taskNumber}
            onChange={(e) => setTaskNumber(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SelectionPage;
