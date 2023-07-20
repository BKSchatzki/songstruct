import React, { useState } from "react";

function Instrument(props) {
  const { colors, instrumentNumber } = props;
  const [instrumentName, setInstrumentName] = useState("");

  const handleInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div className="-mx-[52px] mt-16 rotate-180">
      <input
        className={`input input-sm my-1 w-36 rotate-90 cursor-vertical-text rounded-lg bg-base-100 text-start text-lg shadow-2xl transition duration-300 ease-in-out placeholder:opacity-30 hover:bg-base-100 focus:bg-base-100 text${colors} placeholder:text${colors}`}
        onChange={handleInstrumentName}
        placeholder={`Inst ${instrumentNumber}`}
        type="text"
        value={instrumentName}
      />
    </div>
  );
}

export default Instrument;
