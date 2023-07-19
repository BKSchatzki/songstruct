import React, { useState } from "react";
import Header from "./Header";
import Cell from "./Cell";

function Row(props) {
  const cellCount = 32;

  const cellItem = Array.from({ length: cellCount }, (_, index) => (
    <Cell key={index} rowColor={props.rowColor} />
  ));

  return (
    <div className={`flex flex-col items-center justify-center gap-4`}>
      <Header rowColor={props.rowColor} />
      <ul className="flex flex-col items-center justify-center">{cellItem}</ul>
    </div>
  );
}

export default Row;
