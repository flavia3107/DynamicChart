import { useState } from "react";
import ChartSidebar from "./components/ChartSidebar";
import ChartGrid from "./components/ChartGrid"; // we'll build this next
import { ChartCategory } from "./data/chartGroups";

export default function App() {
  const [selectedGroup, setSelectedGroup] = useState<ChartCategory>("bar");

  return (
    <div style={{ display: "flex", height: '100%' }}>
      <ChartSidebar selectedGroup={selectedGroup} onSelectGroup={setSelectedGroup} />
      <main style={{ flexGrow: 1, padding: 20, boxSizing: 'border-box', overflow: 'auto'}}>
        {/* ChartGrid will render charts based on selectedGroup */}
        <h2 style={{textTransform: 'capitalize'}}>{ selectedGroup}</h2>
        <ChartGrid selectedGroup={selectedGroup} />
      </main>
    </div>
  );
}
