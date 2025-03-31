import useData from "@/hooks/useData.ts";
import { GameQuery } from "@/App.tsx";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: [{ platform: Platform }];
  metacritic?: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>("/games", {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchTerm
    }
  }, [gameQuery]);

export default useGames;