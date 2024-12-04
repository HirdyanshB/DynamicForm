import React from "react";
import { ProgressBar as BootstrapProgressBar } from "react-bootstrap";

const ProgressBar = ({ progress }) => {
  return (
    <div className="mb-3">
      <BootstrapProgressBar now={progress} label={`${Math.round(progress)}%`} />
    </div>
  );
};

export default ProgressBar;
