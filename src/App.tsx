import "./App.css";
import { Grid, GridItem, Heading, HStack, SystemStyleObject } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";


function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      } as SystemStyleObject["gridTemplateAreas"]}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      } as SystemStyleObject["gridTemplateColumns"]}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
}

export default App;
