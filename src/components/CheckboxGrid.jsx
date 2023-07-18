import React, { useState } from "react";

const CheckboxGrid = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);

  const handleAddRow = () => {
    setRows(rows + 1);
  };

  const handleAddColumn = () => {
    setColumns(columns + 1);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th> {/* Empty cell for the corner */}
            {[...Array(columns)].map((_, index) => (
              <th key={index}>
                {/* Column header */}
                <button onClick={handleAddColumn}>+</button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(rows)].map((_, rowIndex) => (
            <tr key={rowIndex}>
              <th>
                {/* Row header */}
                <button onClick={handleAddRow}>+</button>
              </th>
              {[...Array(columns)].map((_, colIndex) => (
                <td key={colIndex}>
                  {/* Checkbox */}
                  <input type="checkbox" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckboxGrid;
