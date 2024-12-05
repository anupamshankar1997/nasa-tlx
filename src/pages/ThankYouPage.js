import React from "react";
import { replace, useNavigate } from "react-router-dom";

const ThankYouPage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Form Submitted. Thanks!</h1>
      <button
        style={{
          backgroundColor: "#28a745",
          border: "none",
          color: "white",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "bold",
        }}
        onClick={() => navigate("/nasa-tlx", { replace: true })}
      >
        Start Over
      </button>
    </div>
  );
};

export default ThankYouPage;
