import platforms from "../data/platforms.ts";
import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "@/hooks/constants.ts";
import platformService from "@/services/platformService.ts";


const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: () => platformService.get(),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms }
  });

export default usePlatforms;