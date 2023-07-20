import React from "react";
import Row from "./Row";

function DivGrid() {
  return (
    <div className="mx-auto mt-24 flex flex-row items-center -space-x-4">
      <div className="checkbox-primary border-primary text-primary">
        <Row rowColor="primary" />
      </div>
      <div className="checkbox-secondary border-secondary text-secondary">
        <Row rowColor="secondary" />
      </div>
      <div className="checkbox-accent border-accent text-accent">
        <Row rowColor="accent" />
      </div>
      <div className="checkbox-info border-info text-info">
        <Row rowColor="info" />
      </div>
      <div className="checkbox-success border-success text-success">
        <Row rowColor="success" />
      </div>
      <div className="checkbox-warning border-warning text-warning">
        <Row rowColor="warning" />
      </div>
      <div className="checkbox-error border-error text-error">
        <Row rowColor="error" />
      </div>
    </div>
  );
}

export default DivGrid;
