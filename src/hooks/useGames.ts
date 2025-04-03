import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "@/App.tsx";

import { CACHE_KEY_GAMES } from "@/hooks/constants.ts";
import gameService from "@/services/gameService.ts";

const useGames = (gameQuery: GameQuery) => {
  const response = useQuery({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: () => gameService.get({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchTerm
      }
    }),
    staleTime: 60 * 60 * 1000
  });

  if (gameQuery?.sortOrder) {
    // Needed since RAWG sort games with metacritic null above everything
    const sortedResults = response?.data?.results.sort((a, b) => {
      // both have score, return normal order
      if (a.metacritic && b.metacritic) return 0;

      if (!a.metacritic) return 1;

      if (!b.metacritic) return -1;

      return 0;
    });

    return {
      ...response, data: {
        results: sortedResults
      }
    };
  }
  return response;
};

export default useGames;