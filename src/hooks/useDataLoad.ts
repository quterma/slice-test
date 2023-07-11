import { useEffect, useState } from "react";
import { TableRow, getData } from "../api/api-service";

export const useDataLoad = (pageNumber: number, limit: number = 40) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [dataList, setDataList] = useState<TableRow[]>([]);
	const [hasMore, setHasMore] = useState(false);

	useEffect(() => {
		if (dataList.length >= (pageNumber + 1) * limit) return;

		setLoading(true);
		setError(false);

		getData(pageNumber, limit)
			.then(res => {
				setDataList(prevDataList => [...prevDataList, ...res]);
				setHasMore(res.length > 0);
				setLoading(false);
			})
			.catch(() => {
				setError(true);
			});
	}, [pageNumber, limit, dataList.length]);

	return { loading, error, dataList, hasMore };
};
