import React, { useState } from "react";

function Instrument(props) {
  const { colors, instrumentNumber } = props;
  const [instrumentName, setInstrumentName] = useState("");

  const handleInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div>
      <input
        className={`input input-sm mb-2 text-end align-middle text-2xl placeholder:opacity-50 text${colors}`}
        onChange={handleInstrumentName}
        placeholder={`Inst ${instrumentNumber}`}
        type="text"
        value={instrumentName}
      />
    </div>
  );
}

export default Instrument;
