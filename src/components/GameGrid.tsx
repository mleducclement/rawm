import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";

const GameGrid = () => {
   const {games, error} = useGames();

   return (
      <>
         {error && <Text>{error}</Text>}
         <div>
            <SimpleGrid
               columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
               rowGap={10}
               columnGap={10}
               padding={10}>
               {games.map((game: Game) => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
         </div>
      </>
   );
};
export default GameGrid;