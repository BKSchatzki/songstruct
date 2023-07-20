import React from "react";
import Cell from "./Cell";

function Section(props) {
  const { colors } = props;

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {colors.map((color, index) => (
        <Cell colors={color} key={index} />
      ))}
    </div>
  );
}

export default Section;
