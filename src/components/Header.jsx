import React from "react";

function Header(props) {
  return (
    <div>
      <input
        type="text"
        placeholder="instrument"
        className={`input input-md w-48 text-end text-2xl placeholder:opacity-50 text-${props.rowColor}`}
      />
    </div>
  );
}

export default Header;
