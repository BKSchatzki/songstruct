import React, { useState } from "react";
import { PlusSquare, MinusSquare } from "react-feather";

const CheckboxGrid = () => {
  const [rows, setRows] = useState(2);
  const [columns, setColumns] = useState(2);
  const [rowLabels, setRowLabels] = useState(["", ""]);

  const handleAddRow = () => {
    setRows(rows + 1);
    setRowLabels([...rowLabels, ""]);
  };

  const handleDeleteRow = () => {
    if (rows > 1) {
      setRows(rows - 1);
      setRowLabels(rowLabels.slice(0, -1));
    }
  };

  const handleAddColumn = () => {
    setColumns(columns + 1);
  };

  const handleDeleteColumn = () => {
    if (columns > 1) {
      setColumns(columns - 1);
    }
  };

  const handleRowLabelChange = (event, rowIndex) => {
    const updatedRowLabels = [...rowLabels];
    updatedRowLabels[rowIndex] = event.target.value;
    setRowLabels(updatedRowLabels);
  };

  return (
    <div>
      <div className="flex flex-row pb-4">
        <div className="mx-2 flex items-center text-xl uppercase">
          <button onClick={handleDeleteRow}>
            <MinusSquare />
          </button>
          <span className="mx-1">Row</span>
          <button onClick={handleAddRow}>
            <PlusSquare />
          </button>
        </div>
        <div className="mx-2 flex items-center text-xl uppercase">
          <button onClick={handleDeleteColumn}>
            <MinusSquare />
          </button>
          <span className="mx-1">Col</span>
          <button onClick={handleAddColumn}>
            <PlusSquare />
          </button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            {[...Array(columns)].map((_, index) => (
              <th key={index}></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowLabels.map((label, rowIndex) => (
            <tr key={rowIndex}>
              <th>
                <input
                  type="text"
                  placeholder={`Instrument ${rowIndex + 1}`}
                  value={label}
                  onChange={(event) => handleRowLabelChange(event, rowIndex)}
                />
              </th>
              {[...Array(columns)].map((_, colIndex) => (
                <td key={colIndex}>
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
