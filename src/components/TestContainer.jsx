import React from "react";

function TestContainer({ children }) {
  return (
    <div className="bg-slate-rounded-xl m-4 rounded-lg border-4 border-slate-500 p-4">
      {children}
    </div>
  );
}

export default TestContainer;
