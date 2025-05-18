// src/data/chartGroups.ts
export type ChartCategory = "bar" | "line" | "pie" | "area";

export type ChartDefinition = {
	id: string;
	title: string;
	type: ChartCategory;
};

export const chartGroups: Record<ChartCategory, ChartDefinition[]> = {
	bar: [
		{ id: "basic-bar", title: "Basic Bar", type: "bar" },
		{ id: "stacked-bar", title: "Stacked Bar", type: "bar" },
	],
	line: [
		{ id: "basic-line", title: "Basic Line", type: "line" },
		{ id: "smooth-line", title: "Smooth Line", type: "line" },
	],
	pie: [
		{ id: "basic-pie", title: "Basic Pie", type: "pie" },
		{ id: "donut", title: "Donut Chart", type: "pie" },
	],
	area: [
		{ id: "area", title: "Area Chart", type: "area" },
	],
};
