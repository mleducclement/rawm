import { Heading } from "@chakra-ui/react";
import { GameQuery } from "@/App.tsx";
import useGenres from "@/hooks/useGenres.ts";
import usePlatforms from "@/hooks/usePlatforms.ts";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platformData } = usePlatforms();

  const selectedGenre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const selectedPlatform = platformData.results.find((platform) => platform.id === gameQuery.platformId);

  const headingText = `${selectedGenre?.name || ""} ${selectedPlatform?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl">{headingText}</Heading>
  );
};
export default GameHeading;