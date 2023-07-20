import React, { useState } from "react";

function Cell(props) {
  const [cellChecked, setCellChecked] = useState(false);

  const handleSetCellChecked = (event) => {
    setCellChecked(event.target.checked);
  };

  return (
    <input
      type="checkbox"
      className={`checkbox checkbox-lg checkbox-${props.rowColor}`}
      checked={cellChecked}
      onChange={handleSetCellChecked}
    />
  );
}

export default Cell;
