import React, { useState } from "react";

function Cell(props) {
  const { colors } = props;
  const [cellAppearance, setcellAppearance] = useState([
    `opacity-10 bg-neutral-content `,
    `opacity-30 bg${colors}`,
    `opacity-100 bg${colors}`,
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
      className={`mask mask-squircle ms-4 h-12 w-12 cursor-pointer blur-md transition duration-100 ease-in-out ${cellAppearance[currentcellAppearanceIndex]}`}
      onClick={handleCellClick}
    ></div>
  );
}

export default Cell;
