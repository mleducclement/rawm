﻿import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_GENRES } from "@/hooks/constants.ts";
import genreService from "@/services/genreService.ts";
import genres from "../data/genres.ts";
import { ms } from "@/utils/time.ts";

const useGenres = () =>
  useQuery({
    queryKey: CACHE_KEY_GENRES,
    queryFn: genreService.get,
    staleTime: ms("1d"),
    initialData: genres
  });


export default useGenres;