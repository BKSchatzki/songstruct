import React, { useState } from "react";

function Header(props) {
  const [instrumentName, setInstrumentName] = useState("");

  const handleSetInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div className="-mx-16 mb-16 rotate-180">
      <input
        type="text"
        placeholder="instrument"
        className={`input input-sm w-48 rotate-90 text-start align-middle text-2xl placeholder:opacity-50 text-${props.rowColor}`}
        value={instrumentName}
        onChange={handleSetInstrumentName}
      />
    </div>
  );
}

export default Header;
