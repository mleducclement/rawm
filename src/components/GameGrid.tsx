import { Fragment, useCallback, useRef } from "react";

import { Box, SimpleGrid, Spinner, Text } from "@chakra-ui/react";

import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import { GameQuery } from "@/App.tsx";
import useGames from "@/hooks/useGames.ts";
import { Game } from "@/services/gameService.ts";

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
  const skeletons = [1, 2, 3, 4, 5, 6];

  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback((node: Element) => {

    if (isFetchingNextPage) return;

    if (!hasNextPage) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchNextPage().catch((err) => {
          console.log("error fetching next page", err);
        });
      }
    });
    if (node) observer.current.observe(node);
  }, [isFetchingNextPage, hasNextPage]);

  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        rowGap={6}
        columnGap={6}
        marginTop={4}
      >
        {isLoading && skeletons.map(skeleton =>
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton key={skeleton} />
          </GameCardContainer>)}

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
      </SimpleGrid>
      {isFetchingNextPage && (
        <Box display="flex" margin="0 auto" justifyContent="center">
          <Spinner size="xl" />
        </Box>
      )}
    </>
  );
};

export default GameGrid;