import { forwardRef } from "react";
import { TableRow } from "../../api/api-service";

type Props = {
	data: TableRow;
};

export const TableItem = forwardRef(({ data }: Props, ref: React.ForwardedRef<HTMLDivElement> | null) => {
	return <div ref={ref}>ID: {data.id}</div>;
});
