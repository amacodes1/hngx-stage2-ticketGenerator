import React from "react";

const ProgressBar = ({ step }) => {
  return (
    <div className="relative w-full h-2 bg-[#0E464F] rounded-full">
      <div
        className="absolute h-2 bg-[#24A0B5] rounded-full transition-all"
        style={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
      ></div>
    </div>
  );
};

export default ProgressBar;
