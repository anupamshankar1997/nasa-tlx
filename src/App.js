import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectionPage from "./pages/SelectionPage";
import ThankYouPage from "./pages/ThankYouPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectionPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
}

export default App;
