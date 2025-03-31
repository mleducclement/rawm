import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Game } from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import { Genre } from "@/hooks/useGenres.ts";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        rowGap={3}
        columnGap={3}
        marginTop={8}
      >
        {isLoading && skeletons.map(skeleton => <GameCardContainer key={skeleton}><GameCardSkeleton
          key={skeleton} /></GameCardContainer>)}
        {data.map((game: Game) => <GameCardContainer key={game.id}><GameCard game={game} /></GameCardContainer>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;