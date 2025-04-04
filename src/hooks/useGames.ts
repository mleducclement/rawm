import { useInfiniteQuery } from "@tanstack/react-query";
import { GameQuery } from "@/App.tsx";

import { CACHE_KEY_GAMES } from "@/hooks/constants.ts";
import gameService, { Game } from "@/services/gameService.ts";
import { FetchResponse } from "@/services/apiClient.ts";

const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam }) => gameService.get({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm,
        page: pageParam
      }
    }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    }
  });

  // if (gameQuery?.sortOrder) {
  //   // Needed since RAWG sort games with metacritic null above everything
  //   const sortedResults = response?.data?.results.sort((a, b) => {
  //     // both have score, return normal order
  //     if (a.metacritic && b.metacritic) return 0;
  //
  //     if (!a.metacritic) return 1;
  //
  //     if (!b.metacritic) return -1;
  //
  //     return 0;
  //   });
  //
  //   return {
  //     ...response, data: {
  //       results: sortedResults
  //     }
  //   };
  // }
};

export default useGames;