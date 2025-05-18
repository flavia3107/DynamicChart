import { useState } from "react";
import ChartSelector from "./components/ChartSelector";
import DataInput from "./components/DataInput";
import ChartRenderer from "./components/ChartRenderer";
import "./styles/App.css";

export type ChartType = "bar" | "line" | "pie";

function App() {
  const [chartType, setChartType] = useState<ChartType>("bar");
  const [rawData, setRawData] = useState<string>("");
  const [parsedData, setParsedData] = useState<any>(null); // Will define type later

  return (
    <div className="app-container">
      <h1>Dynamic Chart Playground</h1>
      <ChartSelector chartType={chartType} setChartType={setChartType} />
      <DataInput
        rawData={rawData}
        setRawData={setRawData}
        setParsedData={setParsedData}
      />
      <ChartRenderer chartType={chartType} parsedData={parsedData} />
    </div>
  );
}

export default App;
