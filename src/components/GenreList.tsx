﻿import useGenres, { Genre } from "@/hooks/useGenres.ts";
import { HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <List.Root variant="plain">
      {data.map(genre => (
        <List.Item key={genre.id} paddingY="5px" fontSize="lg">
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit="cover" />
            <Link fontSize="lg" fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  variant="plain" padding={1}
                  style={{ textDecoration: "none" }}
                  onClick={() => onSelectGenre(genre)}>{genre.name}</Link>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};
export default GenreList;