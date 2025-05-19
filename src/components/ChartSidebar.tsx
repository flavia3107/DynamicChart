import React from "react";
import { ChartCategory } from "../data/chartGroups";

type Props = {
  selectedGroup: ChartCategory;
  onSelectGroup: (group: ChartCategory) => void;
};

const groups: ChartCategory[] = [ "bar", "line", "area", "pie", "radar", "funnel", "gauge", "scatter"];

export default function ChartSidebar({ selectedGroup, onSelectGroup }: Props) {
  return (
    <nav style={{ padding: "1rem", borderRight: "1px solid #ccc", minWidth: 150 }}>
      <h3>Chart Types</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {groups.map((group) => (
          <li key={group} style={{ marginBottom: 10 }}>
            <button
              onClick={() => onSelectGroup(group)}
              style={{
                background: group === selectedGroup ? "#007bff" : "transparent",
                color: group === selectedGroup ? "#fff" : "#000",
                border: "none",
                padding: "8px 12px",
                cursor: "pointer",
                width: "100%",
                textTransform: "capitalize",
              }}
            >
              {group}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
