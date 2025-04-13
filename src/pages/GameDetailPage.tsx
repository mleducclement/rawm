import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";

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
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText limit={250}>{englishDescription}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <Gallery gameId={game.id} />
    </>
  );
};

export default GameDetailPage;