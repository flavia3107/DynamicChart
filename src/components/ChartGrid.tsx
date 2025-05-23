import { chartGroups, ChartCategory, ChartDefinition } from "../data/chartGroups";
import ChartCard from "./ChartCard";

type Props = {
  selectedGroup: ChartCategory;
};

export default function ChartGrid({ selectedGroup }: Props) {
  const charts: ChartDefinition[] = chartGroups[selectedGroup] || [];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
        gap: 20,
      }}
    >
      {charts.map((chart) => (
        <ChartCard key={chart.id} chart={chart} />
      ))}
    </div>
  );
}