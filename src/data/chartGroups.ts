// src/data/chartGroups.ts
export type ChartType =
	| "bar"
	| "line"
	| "area"
	| "pie"
	| "radar"
	| "funnel"
	| "gauge"
	| "scatter";

export type ChartCategory =
	| "bar"
	| "line"
	| "area"
	| "pie"
	| "column"
	| "radar"
	| "funnel"
	| "gauge"
	| "scatter";

export interface ChartDefinition {
	id: string;
	title: string;
	type: ChartType;
}
export const chartGroups: Record<ChartCategory, ChartDefinition[]> = {
	bar: [
		{ id: "basic-bar", title: "Basic Bar", type: "bar" },
		{ id: "stacked-bar", title: "Stacked Bar", type: "bar" },
		{ id: "clustered-bar", title: "Clustered Bar", type: "bar" },
		{ id: "horizontal-bar", title: "Horizontal Bar", type: "bar" },
	],
	line: [
		{ id: "basic-line", title: "Basic Line", type: "line" },
		{ id: "smooth-line", title: "Smooth Line", type: "line" },
		{ id: "dashed-line", title: "Dashed Line", type: "line" },
		{ id: "multi-line", title: "Multi-series Line", type: "line" },
	],
	area: [
		{ id: "area", title: "Basic Area", type: "area" },
		{ id: "stacked-area", title: "Stacked Area", type: "area" },
		{ id: "gradient-area", title: "Gradient Area", type: "area" },
	],
	pie: [
		{ id: "basic-pie", title: "Basic Pie", type: "pie" },
		{ id: "donut", title: "Donut Chart", type: "pie" },
		{ id: "3d-pie", title: "3D Pie", type: "pie" },
		{ id: "variable-radius", title: "Variable Radius Pie", type: "pie" },
	],
	column: [
		{ id: "basic-column", title: "Basic Column", type: "bar" },
		{ id: "stacked-column", title: "Stacked Column", type: "bar" },
		{ id: "range-column", title: "Range Column", type: "bar" },
	],
	radar: [
		{ id: "basic-radar", title: "Basic Radar", type: "radar" },
		{ id: "radar-area", title: "Radar Area", type: "radar" },
		{ id: "radar-line", title: "Radar Line", type: "radar" },
	],
	funnel: [
		{ id: "basic-funnel", title: "Basic Funnel", type: "funnel" },
		{ id: "pyramid-funnel", title: "Pyramid Funnel", type: "funnel" },
	],
	gauge: [
		{ id: "circular-gauge", title: "Circular Gauge", type: "gauge" },
		{ id: "radial-gauge", title: "Radial Gauge", type: "gauge" },
		{ id: "semi-circular-gauge", title: "Semi Circular Gauge", type: "gauge" },
	],
	scatter: [
		{ id: "basic-scatter", title: "Basic Scatter", type: "scatter" },
		{ id: "bubble", title: "Bubble Chart", type: "scatter" },
	],
};


// add more chart types 
// implement input/upload
// on click chart -> open another view -> chart data and upload
// add summaries and icons for all chart types
// show all chart types

