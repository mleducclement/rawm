import { useParams } from "react-router-dom";
import { Heading, Spinner } from "@chakra-ui/react";

import useGame from "@/hooks/useGame.ts";
import ExpandableText from "@/components/ExpandableText.tsx";
import { extractEnglishDescription } from "@/utils/text.ts";

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
    </>
  );
};

export default GameDetailPage;