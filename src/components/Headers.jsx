import React from "react";
import Instrument from "./Instrument";

function Headers(props) {
  const { colors } = props;

  return (
    <div>
      <div className="flex flex-row items-start justify-start gap-0 rounded-2xl bg-neutral p-2 pb-[72px] shadow-2xl brightness-125">
        {colors.map((color, index) => (
          <Instrument colors={color} key={index} instrumentNumber={++index} />
        ))}
      </div>
    </div>
  );
}

export default Headers;
