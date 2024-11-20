import React, { useState } from "react";

const ResultPage = ({ scores, onReset }) => {
  const [participantNumber, setParticipantNumber] = useState("");
  const [taskNumber, setTaskNumber] = useState("");

  const handleExport = () => {
    if (!participantNumber || !taskNumber) {
      alert("Participant Number and Task Number are required!");
      return;
    }

    const csvContent =
      "data:text/csv;charset=utf-8," +
      `Participant Number,Task Number,Factor,Score\n` +
      Object.entries(scores)
        .map(
          ([factor, score]) =>
            `${participantNumber},${taskNumber},${factor},${score}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "nasa_tlx_results.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>NASA TLX Results</h1>
      <div>
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
      <table border="1" style={{ marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(scores).map(([factor, score]) => (
            <tr key={factor}>
              <td>{factor}</td>
              <td>{score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleExport}>Export</button>
      <button onClick={onReset}>Start Over</button>
    </div>
  );
};

export default ResultPage;
