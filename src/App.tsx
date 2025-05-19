import React, { useState } from "react";
import ChartSidebar from "./components/ChartSidebar";
import ChartGrid from "./components/ChartGrid"; // we'll build this next
import { ChartCategory } from "./data/chartGroups";

export default function App() {
  const [selectedGroup, setSelectedGroup] = useState<ChartCategory>("bar");

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      <ChartSidebar selectedGroup={selectedGroup} onSelectGroup={setSelectedGroup} />
      <main style={{ flexGrow: 1, padding: 20 }}>
        {/* ChartGrid will render charts based on selectedGroup */}
        <ChartGrid selectedGroup={selectedGroup} />
      </main>
    </div>
  );
}
