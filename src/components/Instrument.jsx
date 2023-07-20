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
        className={`input input-md m-1 w-48 rounded-none bg-neutral-focus text-end text-2xl transition duration-300 ease-in-out placeholder:opacity-70 hover:bg-base-100 focus:bg-base-100 text${colors} placeholder:text${colors}`}
        onChange={handleInstrumentName}
        placeholder={`Inst ${instrumentNumber}`}
        type="text"
        value={instrumentName}
      />
    </div>
  );
}

export default Instrument;
