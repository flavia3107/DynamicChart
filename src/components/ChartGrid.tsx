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
        display: "flex",
        gap: '1.5rem',
        flexWrap: 'wrap',
        height: '100%',
        padding:'1rem'
      }}
    >
      {charts.map((chart) => (
        <ChartCard key={chart.id} chart={chart} />
      ))}
    </div>
  );
}