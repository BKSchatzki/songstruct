import React from "react";
import Row from "./Row";

function DivGrid() {
  return (
    <div className="mx-auto flex flex-col">
      <Row borderAccent="border-primary" />
      <Row borderAccent="border-secondary" />
      <Row borderAccent="border-accent" />
      <Row borderAccent="border-info" />
      <Row borderAccent="border-success" />
      <Row borderAccent="border-warning" />
      <Row borderAccent="border-error" />
    </div>
  );
}

export default DivGrid;
