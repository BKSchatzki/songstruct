import React from "react";
import Headers from "./Headers";
import Section from "./Section";

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
    <div className="mx-auto w-fit">
      <div className="m-4 mx-auto flex h-fit w-full flex-col items-center justify-start rounded-3xl bg-neutral p-4 shadow-2xl">
        <Headers colors={colors} />
        <Section colors={colors} />
        <Section colors={colors} />
        <Section colors={colors} />
        <Section colors={colors} />
        <Section colors={colors} />
        <Section colors={colors} />
      </div>
    </div>
  );
}

export default Arrangement;
