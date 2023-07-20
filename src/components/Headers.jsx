import React from "react";
import Instrument from "./Instrument";

function Headers(props) {
  const { colors } = props;

  return (
    <div>
      <div className="flex flex-row items-start justify-start gap-0 rounded-2xl bg-neutral-focus p-4 pb-20 shadow-2xl">
        {colors.map((color, index) => (
          <Instrument colors={color} key={index} instrumentNumber={++index} />
        ))}
      </div>
    </div>
  );
}

export default Headers;
