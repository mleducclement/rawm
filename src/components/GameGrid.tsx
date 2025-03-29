import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Game} from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";

const GameGrid = () => {
   const {games, error, isLoading} = useGames();
   const skeletons = [1, 2, 3, 4, 5, 6];

   return (
      <>
         {error && <Text>{error}</Text>}
         <div>
            <SimpleGrid
               columns={{sm: 1, md: 2, lg: 3, xl: 5}}
               rowGap={10}
               columnGap={10}
               padding={10}>
               {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
               {games.map((game: Game) => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
         </div>
      </>
   );
};
export default GameGrid;