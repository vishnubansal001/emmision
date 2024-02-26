import React from "react";

const MySlider = ({ value }) => {
  return (
    <div className="relative w-full h-[4px]">
      <div className="absolute top-0 left-0 h-full w-full bg-[#292F44] rounded-full"></div>
      <div
        className="absolute top-0 left-0 h-full bg-green-500 rounded-full"
        style={{ width: `${value}%` }}
      ></div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        className="absolute top-0 left-0 h-full w-full opacity-0 cursor-default"
        readOnly
      />
    </div>
  );
};

export default MySlider;