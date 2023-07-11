import { useEffect, useRef } from "react";

export const useIntersectionObserver = (callback: (entries: IntersectionObserverEntry[]) => void, loading: boolean) => {
	const observerRef = useRef<IntersectionObserver | null>(null);
	console.log("useIntersectionObserver ----------- loading", loading);

	useEffect(() => {
		if (loading) return;

		observerRef.current = new IntersectionObserver(callback, { threshold: 1 });
		console.log("HERE!", observerRef);

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [callback, loading]);

	return observerRef;
};
