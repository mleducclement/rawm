import {useEffect, useState} from "react";
import { Text } from "@chakra-ui/react"
import apiClient from "@/services/api-client.ts";

interface Game {
   id: number;
   name: string;
}

interface FetchGameResponse {
   count: number;
   results: Game[];
}

const GameGrid = () => {
   const [games, setGames] = useState<Game[]>([]);
   const [error, setError] = useState(null);

   useEffect(() => {
      apiClient.get<FetchGameResponse>("/xgames")
         .then(res => setGames(res.data.results))
         .catch(err => setError(err.message));
   })

   return (
      <>
         {error && <Text>{error}</Text>}
         <div>
            <ul>
               {games.map((game: Game) => <li key={game.id}>{game.name}</li>)}
            </ul>
         </div>
      </>
   );
};
export default GameGrid;