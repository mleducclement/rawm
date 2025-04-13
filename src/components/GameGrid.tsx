import { Fragment } from "react";

import { Link } from "react-router-dom";
import { SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import useGames from "@/hooks/useGames.ts";
import { useResponsiveSkeletons } from "@/hooks/useResponsiveSkeletons.ts";
import InfiniteScroll from "react-infinite-scroll-component";
import Game from "@/entities/game.ts";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGames();

  const { initialSkeletons, scrollingSkeletons } = useResponsiveSkeletons();

  if (error) return <Text>{error.message}</Text>;

  const fetchedGamesCount = data?.pages.reduce((acc, page) => acc + page.results.length, 0) || 0;

  const gridProps = {
    columns: { sm: 1, md: 2, lg: 3, xl: 4 },
    rowGap: 6,
    columnGap: 6,
    marginTop: 4,
    padding: 2
  };

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={
        <SimpleGrid {...gridProps}>
          {scrollingSkeletons.map(skeleton =>
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          )}
        </SimpleGrid>
      }
    >
      <SimpleGrid {...gridProps}>
        {isLoading && initialSkeletons.map((_, index) =>
          <GameCardContainer key={index}>
            <GameCardSkeleton />
          </GameCardContainer>)
        }

        {data?.pages.map((page, index) =>
          <Fragment key={index}>
            {page.results.map((game: Game) => {
              return (
                <GameCardContainer key={game.id}>
                  <Link to={`games/${game.slug}`}>
                    <GameCard game={game} />
                  </Link>
                </GameCardContainer>
              );
            })}
          </Fragment>
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;