import { Heading } from "@chakra-ui/react";
import usePlatform from "@/hooks/usePlatform.ts";
import useGenre from "@/hooks/useGenre.ts";
import useGameQueryStore from "@/stores/store.ts";

const GameHeading = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const selectedGenre = useGenre(selectedGenreId);

  const selectedPlatformId = useGameQueryStore(s => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  const headingText = `${selectedGenre?.name || ""} ${selectedPlatform?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl">{headingText}</Heading>
  );
};
export default GameHeading;