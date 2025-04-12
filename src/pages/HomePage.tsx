import { Grid, GridItem, Heading, HStack } from "@chakra-ui/react";

import GenreList from "@/components/GenreList.tsx";
import GameHeading from "@/components/GameHeading.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameGrid from "@/components/GameGrid.tsx";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}>
      <GridItem area="aside" hideBelow="lg" paddingX={5} paddingTop={10}>
        <Heading as="h1" fontSize="xl" marginBottom={3}>{"Genres"}</Heading>
        <GenreList />
      </GridItem>
      <GridItem area="main" padding={5}>
        <GameHeading />
        <HStack gap={3} marginTop={5}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;