import React from "react";
import "../styles/LoadingSpinner.css";

const LoadingSpinner = ({ text }) => (
  <div className="spinner">
    <div className="circle"></div>
    <p>{text}</p>
  </div>
);

export default LoadingSpinner;
