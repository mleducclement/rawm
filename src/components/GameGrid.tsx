import { Fragment } from "react";

import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import { GameQuery } from "@/App.tsx";
import useGames from "@/hooks/useGames.ts";
import { Game } from "@/services/gameService.ts";
import { useResponsiveSkeletons } from "@/hooks/useResponsiveSkeletons.ts";
import { useInfiniteScrolling } from "@/hooks/useInfiniteScrolling.ts";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage
  } = useGames(gameQuery);

  const { initialSkeletons, scrollingSkeletons } = useResponsiveSkeletons();
  const lastElementRef = useInfiniteScrolling({ isFetchingNextPage, fetchNextPage, hasNextPage });

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        rowGap={6}
        columnGap={6}
        marginTop={4}
      >
        {isLoading && initialSkeletons.map((_, index) =>
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>)
        }

        {data?.pages.map((page, index) =>
          <Fragment key={index}>
            {page.results.map((game: Game, index) => {
              const isLastElement = page.results.length === index + 1;

              return (
                <GameCardContainer key={game.id} ref={isLastElement ? lastElementRef : undefined}>
                  <GameCard game={game} />
                </GameCardContainer>
              );
            })}
          </Fragment>
        )}
        {isFetchingNextPage && scrollingSkeletons.map(skeleton =>
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;