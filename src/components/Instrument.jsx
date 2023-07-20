import React, { useState } from "react";

function Instrument(props) {
  const { colors, instrumentNumber } = props;
  const [instrumentName, setInstrumentName] = useState("");

  const handleInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div className={`border-r-2 border${colors}`}>
      <input
        className={`input input-sm m-2 me-3 w-48 text-end text-2xl transition duration-300 ease-in-out placeholder:opacity-50 hover:bg-neutral-focus focus:bg-neutral-focus text${colors}`}
        onChange={handleInstrumentName}
        placeholder={`Inst ${instrumentNumber}`}
        type="text"
        value={instrumentName}
      />
    </div>
  );
}

export default Instrument;
