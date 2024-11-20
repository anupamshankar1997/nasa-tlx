import React, { useState } from "react";
import SelectionPage from "./pages/SelectionPage";
import ResultPage from "./pages/ResultPage";

const App = () => {
  const [scores, setScores] = useState(null);

  const handleSubmission = (selectedScores) => {
    setScores(selectedScores);
  };

  const handleReset = () => {
    setScores(null);
  };

  return (
    <div>
      {scores ? (
        <ResultPage scores={scores} onReset={handleReset} />
      ) : (
        <SelectionPage onSubmit={handleSubmission} />
      )}
    </div>
  );
};

export default App;
