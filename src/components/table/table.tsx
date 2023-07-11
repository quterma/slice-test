import { useState, useRef, useCallback } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { TableItem } from "../table-item/table-item";

type Props = {};

export const Table = (props: Props) => {
	const [pageNumber, setPageNumber] = useState(0);

	const { dataList, hasMore, loading, error } = useDataLoad(pageNumber);

	const observerRef = useRef<IntersectionObserver | null>(null);

	const lastItemRef = useCallback(
		(node: HTMLDivElement | null) => {
			if (loading) return;
			if (observerRef.current) observerRef.current.disconnect();

			observerRef.current = new IntersectionObserver(
				entries => {
					if (entries[0].isIntersecting && hasMore) {
						setPageNumber(prevPageNumber => prevPageNumber + 1);
					}
				},
				{ threshold: 0.5 }
			);

			if (node) observerRef.current.observe(node);
		},
		[loading, hasMore]
	);

	return (
		<div className="">
			<ul>
				{dataList.map((item, i) => (
					<TableItem key={item.id} data={item} ref={i === dataList.length - 5 ? lastItemRef : null} />
				))}
			</ul>
			{loading && <div>... loading ...</div>}
			{error && <div>... error ...</div>}
		</div>
	);
};
