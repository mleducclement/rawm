import useData from "@/hooks/useData.ts";
import { GameQuery } from "@/App.tsx";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic?: number;
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) => {
  let responseObject = useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchTerm
    }
  }, [gameQuery]);

  if (gameQuery?.sortOrder) {
    // Needed since RAWG sort games with metacritic null above everything
    const data = responseObject.data.sort((a, b) => {
      // both have score, return normal order
      if (a.metacritic && b.metacritic) return 0;

      if (!a.metacritic) return 1;

      if (!b.metacritic) return -1;

      return 0;
    });

    responseObject = { ...responseObject, data };
  }

  return responseObject;
};

export default useGames;