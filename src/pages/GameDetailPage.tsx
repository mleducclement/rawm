import { useParams } from "react-router-dom";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";

import useGame from "@/hooks/useGame.ts";
import { extractEnglishDescription } from "@/utils/text.ts";
import ExpandableText from "@/components/ExpandableText.tsx";
import GameAttributes from "@/components/GameAttributes.tsx";
import GameTrailer from "@/components/GameTrailer.tsx";
import Gallery from "@/components/Gallery.tsx";

// TODO: Improve visuals

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  const englishDescription = extractEnglishDescription(game.description_raw);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={2}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText limit={250}>{englishDescription}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <Gallery gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;