import "./App.css";
import { Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "@/hooks/useGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import { Platform } from "@/hooks/usePlatforms.ts";
import SortSelector from "@/components/SortSelector.tsx";

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
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr"
      }}>
      <GridItem area="nav">
        <NavBar onSearch={(searchTerm) => setGameQuery({ ...gameQuery, searchTerm })} />
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5} paddingTop={10}>
        <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} />
      </GridItem>
      <GridItem area="main" padding={10}>
        <HStack gap={3}>
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
