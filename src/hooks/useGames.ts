import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

export interface Game {
   id: number;
   name: string;
   background_image: string;
   parent_platforms: [{ platform: Platform }];
   metacritic: number;
}

export interface Platform {
   id: number;
   name: string;
   slug: string;
}

interface FetchGameResponse {
   count: number;
   results: Game[];
}

const useGames = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const controller = new AbortController();

      apiClient
         .get<FetchGameResponse>("/games", {signal: controller.signal})
         .then(res => {
            setGames(res.data.results)
            setIsLoading(false)
         })
         .catch(err => {
            if (err instanceof CanceledError) return;
            setIsLoading(false)
            setError(err.message);
         });

      return () => controller.abort();
   }, []);

   return {games, error, isLoading};
};

export default useGames;