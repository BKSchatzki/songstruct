import React, { useState } from "react";

function Cell(props) {
  const { colors } = props;
  const [cellAppearance, setcellAppearance] = useState([
    `opacity-10 bg${colors} brightness-75`,
    `opacity-50 bg${colors}`,
    `opacity-100 bg${colors} brightness-125`,
  ]);
  const [currentcellAppearanceIndex, setCurrentcellAppearanceIndex] =
    useState(0);

  const handleCellClick = () => {
    // Cycle through the opacity classes
    setCurrentcellAppearanceIndex(
      (prevIndex) => (prevIndex + 1) % cellAppearance.length,
    );
  };

  return (
    <div
      className={`mask mask-squircle h-8 w-8 cursor-pointer transition duration-100 ease-in-out ${cellAppearance[currentcellAppearanceIndex]}`}
      onClick={handleCellClick}
    ></div>
  );
}

export default Cell;
