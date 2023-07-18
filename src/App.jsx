import "./index.css";
import TestContainer from "./components/TestContainer";
import CheckboxGrid from "./components/CheckboxGrid";
import DivGrid from "./components/DivGrid";
import Cell from "./components/Cell";
import Header from "./components/Header";
import Row from "./components/Row";

function App() {
  return (
    <div className="h-screen bg-slate-300">
      <TestContainer>
        <CheckboxGrid />
      </TestContainer>
      <TestContainer>
        <DivGrid />
      </TestContainer>
      <TestContainer>
        <Cell />
      </TestContainer>
      <TestContainer>
        <Header />
      </TestContainer>
      <TestContainer>
        <Row />
      </TestContainer>
    </div>
  );
}

export default App;
