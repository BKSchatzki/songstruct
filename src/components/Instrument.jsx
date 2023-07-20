import React, { useState } from "react";

function Instrument(props) {
  const { colors, instrumentNumber } = props;
  const [instrumentName, setInstrumentName] = useState("");

  const handleInstrumentName = (event) => {
    setInstrumentName(event.target.value);
  };

  return (
    <div className="-mx-[68px] mt-16 rotate-180">
      <input
        className={`input input-md my-1 w-48 rotate-90 cursor-vertical-text rounded-lg bg-base-100 text-start text-2xl shadow-2xl transition duration-300 ease-in-out placeholder:opacity-30 hover:bg-base-100 focus:bg-base-100 text${colors} placeholder:text${colors}`}
        onChange={handleInstrumentName}
        placeholder={`Inst ${instrumentNumber}`}
        type="text"
        value={instrumentName}
      />
    </div>
  );
}

export default Instrument;
