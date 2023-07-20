import React, { useState } from "react";
import Headers from "./Headers";
import Section from "./Section";
import Divider from "./Divider";

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

  const [sections, setSections] = useState([1]);

  const addNewSection = () => {
    const newSectionNumber = sections.length + 1;
    setSections([...sections, newSectionNumber]);
  };

  return (
    <div className="mx-auto w-fit">
      <div className="m-4 mx-auto flex h-fit w-full flex-col items-center justify-start rounded-3xl bg-neutral p-4 shadow-2xl">
        <Headers colors={colors} />

        {sections.map((sectionNumber) => (
          <Section key={sectionNumber} colors={colors} />
        ))}

        <Divider onClick={addNewSection} />
      </div>
    </div>
  );
}

export default Arrangement;
