import { useCallback, useRef } from "react";
import { FetchNextPageOptions, InfiniteQueryObserverBaseResult } from "@tanstack/react-query";

interface Props<TData, TError> {
  fetchNextPage: (options?: FetchNextPageOptions) => Promise<InfiniteQueryObserverBaseResult<TData, TError>>;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
}

export const useInfiniteScrolling = <TData, TError>(
  {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  }: Props<TData, TError>
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  return useCallback((node: Element) => {
    if (isFetchingNextPage) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage().catch((err) => {
          console.log("error fetching next page", err);
        });
      }
    });

    if (node) observer.current.observe(node);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetchingNextPage, hasNextPage]);
};