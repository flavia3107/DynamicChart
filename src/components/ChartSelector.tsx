import React from "react";

interface ChartSelectorProps {
  chartType;
  setChartType: (type) => void;
}

const chartOptions = ["bar", "line", "pie"];

const ChartSelector: React.FC<ChartSelectorProps> = ({ chartType, setChartType }) => {
  return (
    <div className="chart-selector">
      <label htmlFor="chart-select">Select Chart Type:</label>
      <select
        id="chart-select"
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
      >
        {chartOptions.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChartSelector;
