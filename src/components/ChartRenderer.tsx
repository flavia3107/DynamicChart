import React from "react";
import {
  Bar,
  Line,
  Pie,
  Chart as ChartJSComponent,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
  Title
);

interface ChartRendererProps {
  chartType;
  parsedData: { labels: string[]; values: number[] } | null;
}

const ChartRenderer: React.FC<ChartRendererProps> = ({ chartType, parsedData }) => {
  if (!parsedData) return null;

  const { labels, values } = parsedData;

  const chartData = {
    labels,
    datasets: [
      {
        label: "Values",
        data: values,
        backgroundColor: ["#4dabf7", "#f783ac", "#ffd43b", "#63e6be", "#9775fa"],
        borderColor: "#333",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: {
        display: true,
        text: `${chartType.toUpperCase()} Chart`,
      },
    },
  };

  switch (chartType) {
    case "bar":
      return <Bar data={chartData} options={chartOptions} />;
    case "line":
      return <Line data={chartData} options={chartOptions} />;
    case "pie":
      return <Pie data={chartData} options={chartOptions} />;
    default:
      return null;
  }
};

export default ChartRenderer;
