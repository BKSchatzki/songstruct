import React from "react";

function Divider(props) {
  const { onClick } = props;

  const handleDividerClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div className="divider divider-vertical mb-4" onClick={handleDividerClick}>
      <input
        className="text-md badge w-24 text-center align-middle placeholder:opacity-30"
        placeholder="Section"
      />
    </div>
  );
}

export default Divider;
