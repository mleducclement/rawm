import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/imageUrl.ts";
import useGenres from "@/hooks/useGenres.ts";
import useGameQueryStore from "@/stores/store.ts";

const GenreList = () => {
  const selectedGenreId = useGameQueryStore(s => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s => s.setGenreId);

  const { data, error, isLoading } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root variant="plain">
      {data?.results.map((genre) => (
        <List.Item key={genre.id} paddingY="5px" fontSize="lg">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit="cover" />
            <Link fontSize="lg" fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  variant="plain" padding={1}
                  style={{ textDecoration: "none" }}
                  onClick={() => setSelectedGenreId(genre.id)}>{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;