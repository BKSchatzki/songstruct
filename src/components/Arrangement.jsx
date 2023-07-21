import React, { useState } from "react";
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

  // State to keep track of sections
  const [sections, setSections] = useState([1]); // Start with one section

  // Function to add a new section after the specified index
  const addNewSection = (index) => {
    const newSectionNumber = sections.length + 1;
    const updatedSections = [...sections];
    updatedSections.splice(index + 1, 0, newSectionNumber);
    setSections(updatedSections);
  };

  // Function to delete the section at the specified index
  const deleteSection = (index) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
  };

  return (
    <div className="mx-auto w-fit">
      <div className="m-4 mx-auto flex h-fit w-full flex-col items-center justify-start rounded-3xl bg-neutral p-4 shadow-2xl">
        <Headers colors={colors} />

        {/* Render existing sections */}
        {sections.map((sectionNumber, index) => (
          <Section
            key={sectionNumber}
            colors={colors}
            onAddSection={() => addNewSection(index)}
            onDeleteSection={() => deleteSection(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Arrangement;
