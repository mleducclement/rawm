import { Heading } from "@chakra-ui/react";
import { GameQuery } from "@/App.tsx";
import usePlatform from "@/hooks/usePlatform.ts";
import useGenre from "@/hooks/useGenre.ts";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedGenre = useGenre(gameQuery.genreId);
  const selectedPlatform = usePlatform(gameQuery.platformId);

  const headingText = `${selectedGenre?.name || ""} ${selectedPlatform?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl">{headingText}</Heading>
  );
};
export default GameHeading;