import React from "react";
import { PlusCircle, MinusCircle } from "react-feather";

function Divider(props) {
  const { onAddSection, onDeleteSection } = props; // Destructure the callback props

  return (
    <div className="divider divider-vertical mb-2 brightness-125">
      <button
        className="rounded-full text-neutral-focus outline-0 transition duration-100 ease-in-out hover:brightness-200 focus:brightness-200 active:scale-90"
        onClick={onDeleteSection}
      >
        <MinusCircle />
      </button>
      <input
        className="text-md badge w-24 rounded-lg border-0 bg-base-100 text-center align-middle text-base-content outline-none placeholder:opacity-30 hover:brightness-125 focus:brightness-150"
        placeholder="Section"
      />
      <button
        className="rounded-full text-neutral-focus outline-0 transition duration-100 ease-in-out hover:brightness-200 focus:brightness-200 active:scale-90"
        onClick={onAddSection}
      >
        <PlusCircle />
      </button>
    </div>
  );
}

export default Divider;
