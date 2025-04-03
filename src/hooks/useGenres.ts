import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "@/hooks/constants.ts";
import apiClient from "../services/apiClient.ts";
import { Genre } from "@/services/genreService.ts";
import genres from "../data/genres.ts";
import { FetchResponse } from "@/hooks/useData.ts";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres }
  });


export default useGenres;