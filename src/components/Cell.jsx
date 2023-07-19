import React from "react";

function Cell(props) {
  // const [cellChecked, setCellChecked] = useState(false);

  return (
    <input
      type="checkbox"
      className={`checkbox checkbox-md mr-1 checkbox-${props.rowColor}`}
    />
  );
}

export default Cell;
