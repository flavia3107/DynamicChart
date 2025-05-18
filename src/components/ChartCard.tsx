import React from "react";
import { ChartDefinition } from "../data/chartGroups";

type Props = {
  chart: ChartDefinition;
};

export default function ChartCard({ chart }: Props) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 12,
        textAlign: "center",
        background: "#fafafa",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <div
        style={{
          height: 120,
          backgroundColor: "#e0e0e0",
          marginBottom: 10,
          borderRadius: 6,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#666",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        Preview
      </div>
      <div>{chart.title}</div>
    </div>
  );
}
