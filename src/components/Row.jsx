import React from "react";
import Header from "./Header";
import Cell from "./Cell";

function Row(props) {
  return (
    <div
      className={`flex flex-row items-center justify-start gap-4 border-0 border-s-8 ${props.borderAccent}`}
    >
      <Header />
      <Cell />
    </div>
  );
}

export default Row;
