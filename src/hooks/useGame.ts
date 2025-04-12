import { useQuery } from "@tanstack/react-query";

import { CACHE_KEY_GAMES } from "@/hooks/constants.ts";
import gameService from "@/services/gameService.ts";

const useGame = (slug: string) => useQuery({
  queryKey: [CACHE_KEY_GAMES, slug],
  queryFn: () => gameService.getById(slug)
});

export default useGame;