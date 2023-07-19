import React from "react";

function Header(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="instrument"
        className={`input input-sm w-48 text-end text-xl placeholder:opacity-50 text-${props.rowColor}`}
      />
    </div>
  );
}

export default Header;
