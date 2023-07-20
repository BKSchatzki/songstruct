import React from "react";
import Cell from "./Cell";
import Divider from "./Divider";

function Section(props) {
  const { colors } = props;

  return (
    <div className="ms-4 flex flex-row">
      <Divider />
      <div className="flex flex-col items-start justify-start gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
      <div className="flex flex-col items-start justify-start gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Section;
