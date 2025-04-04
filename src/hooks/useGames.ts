import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "@/App.tsx";

import { CACHE_KEY_GAMES } from "@/hooks/constants.ts";
import gameService, { Game } from "@/services/gameService.ts";
import { FetchResponse } from "@/services/apiClient.ts";
import { ms } from "@/utils/time.ts";

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam }) => gameService.get({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm,
        page: pageParam
      }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("1d")
  });
};

export default useGames;