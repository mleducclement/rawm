﻿import { useEffect, useState } from "react";
import apiClient from "@/services/apiClient.ts";
import { AxiosRequestConfig, CanceledError } from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps: unknown[] = []) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
      .then(res => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      });

    return () => controller.abort();
  }, [...deps]);

  return { data, error, isLoading };
};

export default useData;