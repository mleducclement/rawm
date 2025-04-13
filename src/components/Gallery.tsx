import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "@/hooks/useScreenshots.ts";

interface Props {
  gameId: number;
}

const gridProps = {
  columns: { sm: 1, md: 2 },
  rowGap: 6,
  columnGap: 6,
  marginTop: 4
};

const Gallery = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;

  if (error) throw error;

  return (
    <SimpleGrid {...gridProps}>
      {data?.results.map((screenshot) => <Image src={screenshot.image} />)}
    </SimpleGrid>
  );
};

export default Gallery;