import {useEffect, useState} from "react";
import apiClient from "@/services/api-client.ts";
import {CanceledError} from "axios";

interface Genre {
   id: number;
   name: string;
}

interface FetchGenresResponse {
   count: number;
   results: Genre[];
}

const useGenres = () => {
   const [genres, setGenres] = useState<Genre[]>([]);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const controller = new AbortController();

      apiClient
         .get<FetchGenresResponse>("/genres", {signal: controller.signal})
         .then(res => {
            setGenres(res.data.results)
            setIsLoading(false)
         })
         .catch(err => {
            if (err instanceof CanceledError) return;
            setIsLoading(false)
            setError(err.message);
         });

      return () => controller.abort();
   }, []);

   return {genres, error, isLoading};
}

export default useGenres