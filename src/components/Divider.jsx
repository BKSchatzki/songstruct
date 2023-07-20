import React from "react";

function Divider(props) {
  const { onAddSection, onDeleteSection } = props; // Destructure the callback props

  return (
    <div className="divider divider-vertical mb-1">
      <button onClick={onDeleteSection}>Delete Section</button>
      <input
        className="text-md badge w-24 text-center align-middle placeholder:opacity-30"
        placeholder="Section"
      />
      <button onClick={onAddSection}>Add Section</button>
    </div>
  );
}

export default Divider;
