import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_PLATFORMS } from "@/hooks/constants.ts";
import platformService from "@/services/platformService.ts";
import platforms from "@/data/platforms.ts";
import { ms } from "@/utils/time.ts";

const usePlatforms = () =>
  useQuery({
    queryKey: CACHE_KEY_PLATFORMS,
    queryFn: platformService.get,
    staleTime: ms("1d"),
    initialData: platforms
  });

export default usePlatforms;