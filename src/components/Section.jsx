import React from "react";
import Cell from "./Cell";
import Divider from "./Divider";

function Section(props) {
  const { colors, onAddSection, onDeleteSection } = props;

  return (
    <div className="mt-2 flex flex-col gap-1 rounded-2xl px-4 pb-4 shadow-2xl">
      <Divider onAddSection={onAddSection} onDeleteSection={onDeleteSection} />
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
