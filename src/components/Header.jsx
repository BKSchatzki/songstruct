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
        placeholder="inst"
        className={`input input-sm w-24 text-end align-middle text-2xl placeholder:opacity-50 text-${props.rowColor}`}
        value={instrumentName}
        onChange={handleSetInstrumentName}
      />
    </div>
  );
}

export default Header;
