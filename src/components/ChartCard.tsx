import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import { ChartDefinition } from "../data/chartGroups";

type Props = {
  chart: ChartDefinition;
};

export default function ChartCard({ chart }: Props) {
  const chartDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!chartDiv.current) return;

    const root = am5.Root.new(chartDiv.current);

    // Create a container for the chart
    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      })
    );

    // Create chart based on chart type
    if (chart.type === "bar" || chart.type === "line" || chart.type === "area") {
      const chartXY = container.children.push(
        am5xy.XYChart.new(root, {
          panX: false,
          panY: false,
          wheelX: "none",
          wheelY: "none",
          layout: root.verticalLayout,
        })
      );

      // Create axes
      const xAxis = chartXY.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          categoryField: "category",
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );

      const yAxis = chartXY.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Sample data
      const data = [
        { category: "A", value: 40 },
        { category: "B", value: 55 },
        { category: "C", value: 30 },
        { category: "D", value: 70 },
      ];

      xAxis.data.setAll(data);

      // Create series
      const series = chartXY.series.push(
        am5xy.ColumnSeries.new(root, {
          name: chart.title,
          xAxis,
          yAxis,
          valueYField: "value",
          categoryXField: "category",
        })
      );

      series.data.setAll(data);

      if (chart.type === "line" || chart.type === "area") {
        series.columns?.template.set("visible", false);
        series['strokes']?.template.setAll({
          strokeWidth: 2,
          stroke: am5.color(0x0066ff),
        });
        series.bullets.push(() => {
          return am5.Bullet.new(root, {
            sprite: am5.Circle.new(root, {
              radius: 4,
              fill: series.get("stroke"),
            }),
          });
        });

        if (chart.type === "area") {
          series['fills']?.template.setAll({
            fillOpacity: 0.3,
            visible: true,
            fill: am5.color(0x0066ff),
          });
        }
      }
    } else if (chart.type === "pie") {
      const pieChart = container.children.push(
        am5percent.PieChart.new(root, {})
      );

      const series = pieChart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: "value",
          categoryField: "category",
        })
      );

      const data = [
        { category: "A", value: 30 },
        { category: "B", value: 55 },
        { category: "C", value: 15 },
      ];

      series.data.setAll(data);
    }

    return () => {
      root.dispose();
    };
  }, [chart.type, chart.title]);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: 8,
        padding: 12,
        userSelect: "none",
        height: 200,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        ref={chartDiv}
        style={{ flexGrow: 1 }}
      />
      <div style={{ marginTop: 10, textAlign: "center", fontWeight: "bold" }}>
        {chart.title}
      </div>
    </div>
  );
}
