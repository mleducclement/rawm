import "./App.css";
import { Grid, GridItem, Heading, HStack, SystemStyleObject } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import { useState } from "react";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";
import { Genre } from "@/services/genreService.ts";
import { Platform } from "@/services/platformService.ts";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar onSearch={(searchTerm) => setGameQuery({ ...gameQuery, searchTerm })} />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5} paddingTop={10}>
        <Heading as="h1" fontSize="xl" marginBottom={3}>{"Genres"}</Heading>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main" padding={5}>
        <GameHeading gameQuery={gameQuery} />
        <HStack gap={3} marginTop={5}>
          <PlatformSelector selectedPlatform={gameQuery.platform}
                            onSelectPlatform={(platform) => setGameQuery({ ...gameQuery, platform })} />
          <SortSelector selectedSortOrder={gameQuery.sortOrder}
                        onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
