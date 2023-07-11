import { useState, useRef, useEffect } from "react";
import { useDataLoad } from "../../hooks/useDataLoad";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";

type Props = {};

export const Table = (props: Props) => {
	const [pageNumber, setPageNumber] = useState(0);
	const listRef = useRef<HTMLUListElement>(null);

	const { dataList, hasMore, loading, error } = useDataLoad(pageNumber);

	const observerRef = useIntersectionObserver(entries => {
		if (entries[0].isIntersecting && hasMore) {
			setPageNumber(prevPageNumber => prevPageNumber + 1);
		}
	}, loading);

	console.log("listRef.current", listRef.current);
	console.log("observerRef.current", observerRef.current);

	useEffect(() => {
		if (listRef.current && observerRef.current) {
			const listLength = listRef.current.childNodes.length;

			if (!listLength) return;

			observerRef.current.observe(listRef.current.childNodes[listLength - 1] as Element);
		}
	}, [observerRef]);

	return (
		<div className="">
			<ul ref={listRef}>
				{dataList.map(item => (
					<li key={item.id}>{item.id}</li>
				))}
			</ul>
			{loading && <div>... loading ...</div>}
			{error && <div>... error ...</div>}
		</div>
	);
};
