import React from "react";
import Instrument from "./Instrument";

function Headers(props) {
  const { colors } = props;

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      {colors.map((color, index) => (
        <Instrument colors={color} key={index} instrumentNumber={++index} />
      ))}
    </div>
  );
}

export default Headers;
