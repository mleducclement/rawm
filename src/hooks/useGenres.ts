import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "@/hooks/constants.ts";
import genreService from "@/services/genreService.ts";
import genres from "../data/genres.ts";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: () => genreService.get(),
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres }
  });


export default useGenres;