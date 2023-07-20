import React, { useState } from "react";

function Cell(props) {
  const { colors } = props;
  const [opacityClasses, setOpacityClasses] = useState([
    `opacity-10 bg-neutral-content`,
    `opacity-50 bg${colors}`,
    `opacity-100 bg${colors}`,
  ]);
  const [currentOpacityIndex, setCurrentOpacityIndex] = useState(0);

  const handleCellClick = () => {
    // Cycle through the opacity classes
    setCurrentOpacityIndex(
      (prevIndex) => (prevIndex + 1) % opacityClasses.length,
    );
  };

  return (
    <div
      className={`ms-4 h-12 w-12 rounded-lg transition duration-100 ease-in-out bg${colors} border${colors} ${opacityClasses[currentOpacityIndex]}`}
      onClick={handleCellClick}
    ></div>
  );
}

export default Cell;
