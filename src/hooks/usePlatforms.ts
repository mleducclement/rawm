import platforms from "../data/platforms.ts";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "@/hooks/constants.ts";
import apiClient from "@/services/apiClient.ts";
import { FetchResponse } from "@/hooks/useData.ts";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => apiClient
      .get<FetchResponse<Platform>>("/platforms")
      .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;