import "./index.css";
import CheckboxGrid from "./components/CheckboxGrid";
import TestContainer from "./components/TestContainer";

function App() {
  return (
    <div className="h-screen bg-slate-300">
      <TestContainer>
        <CheckboxGrid />
      </TestContainer>
    </div>
  );
}

export default App;
