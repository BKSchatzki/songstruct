import React, { useState } from "react";

function Header(props) {
  const [instrumentName, setInstrumentName] = useState("");

  const handleSetInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="instrument"
        className={`input input-md w-48 rotate-90 text-end text-2xl placeholder:opacity-50 text-${props.rowColor}`}
        value={instrumentName}
        onChange={handleSetInstrumentName}
      />
    </div>
  );
}

export default Header;
