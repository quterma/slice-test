import table from "./../api/table.json";

export enum Statuses {
	PENDING_SIGNATURES = "Pending Signatures",
	APPROVED_BY_CORP = "Approved By Corp.",
	OFFERED = "Offered",
}

export type TableRow = {
	geo: string;
	certificates: string;
	source: string;
	plan: string;
	date: string;
	prefix: string;
	status: string;
};

export const getData = (pageNumber: number = 0, limit: number = 30): TableRow[] => {
	return table.slice(pageNumber * limit, pageNumber * limit + limit);
};

export const addRow = () => {};