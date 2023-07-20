import React from "react";
import Headers from "./Headers";

function Arrangement() {
  const colors = [
    "-red-500",
    "-amber-500",
    "-lime-500",
    "-emerald-500",
    "-cyan-500",
    "-blue-500",
    "-violet-500",
    "-fuchsia-500",
    "-rose-500",
  ];

  return (
    <div>
      <Headers colors={colors} />
    </div>
  );
}

export default Arrangement;
