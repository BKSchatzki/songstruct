import React, { useState } from "react";

function Cell(props) {
  const { colors } = props;
  const [cellState, setCellState] = useState([
    `opacity-10 bg-neutral-content`,
    `opacity-40 bg${colors}`,
    `opacity-100 bg${colors}`,
  ]);
  const [currentCellStateIndex, setCurrentCellStateIndex] = useState(0);

  const handleCellClick = () => {
    // Cycle through the opacity classes
    setCurrentCellStateIndex((prevIndex) => (prevIndex + 1) % cellState.length);
  };

  return (
    <div
      className={`ms-4 h-12 w-12 rounded-lg transition duration-100 ease-linear ${cellState[currentCellStateIndex]}`}
      onClick={handleCellClick}
    ></div>
  );
}

export default Cell;
