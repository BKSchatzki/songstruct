import React, { useState } from "react";

const CheckboxGrid = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [rowLabels, setRowLabels] = useState(["Row 1", "Row 2"]);

  const handleAddRow = () => {
    setRows(rows + 1);
    setRowLabels([...rowLabels, `Row ${rows + 1}`]);
  };

  const handleAddColumn = () => {
    setColumns(columns + 1);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            {[...Array(columns)].map((_, index) => (
              <th key={index}></th>
            ))}
            <th>
              <button onClick={handleAddColumn}>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {rowLabels.map((label, rowIndex) => (
            <tr key={rowIndex}>
              <th>{label}</th>
              {[...Array(columns)].map((_, colIndex) => (
                <td key={colIndex}>
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th></th>
            {[...Array(columns)].map((_, index) => (
              <th key={index}></th>
            ))}
            <th>
              <button onClick={handleAddRow}>+</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckboxGrid;
