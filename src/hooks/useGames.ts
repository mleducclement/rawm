import { useInfiniteQuery } from "@tanstack/react-query";

import useGameQueryStore from "@/stores/store.ts";

import { CACHE_KEY_GAMES } from "@/hooks/constants.ts";
import gameService from "@/services/gameService.ts";
import { FetchResponse } from "@/services/apiClient.ts";
import { ms } from "@/utils/time.ts";
import Game from "@/entities/game.ts";

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [CACHE_KEY_GAMES, gameQuery],
    queryFn: ({ pageParam }) => gameService.get({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
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