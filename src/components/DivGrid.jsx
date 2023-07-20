import React from "react";
import Row from "./Row";
import Headers from "./Headers";

function DivGrid() {
  return (
    <div className="mx-auto mt-24 flex flex-col items-center">
      <Row rowColor="primary" />
      <Row rowColor="secondary" />
      <Row rowColor="accent" />
      <Row rowColor="info" />
      <Row rowColor="success" />
      <Row rowColor="warning" />
      <Row rowColor="error" />
      {/* Dummy divs to activate DaisyUI classes as props */}
      <div className="checkbox-primary border-primary text-primary" />
      <div className="checkbox-secondary border-secondary text-secondary" />
      <div className="checkbox-accent border-accent text-accent" />
      <div className="checkbox-info border-info text-info" />
      <div className="checkbox-success border-success text-success" />
      <div className="checkbox-warning border-warning text-warning" />
      <div className="checkbox-error border-error text-error" />
    </div>
  );
}

export default DivGrid;
