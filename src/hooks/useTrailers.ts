import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/apiClient.ts";
import Trailer from "@/entities/trailer.ts";

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.get
  });
};

export default useTrailers;