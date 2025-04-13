import Screenshot from "@/entities/screenshot.ts";
import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/apiClient.ts";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.get
  });
};

export default useScreenshots;