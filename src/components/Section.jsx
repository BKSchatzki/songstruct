import React from "react";
import Cell from "./Cell";
import Divider from "./Divider";

function Section(props) {
  const { colors } = props;

  return (
    <div className="flex flex-col gap-1 rounded-2xl px-4 pb-4 shadow-2xl">
      <Divider />
      <div className="flex flex-row items-start justify-center gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
      <div className="flex flex-row items-start justify-center gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
      <div className="flex flex-row items-start justify-center gap-2">
        {colors.map((color, index) => (
          <Cell colors={color} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Section;
