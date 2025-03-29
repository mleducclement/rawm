import './App.css';
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";

function App() {

   return (
      <Grid templateAreas={{
         base: `"nav" "main"`,
         lg: `"nav nav" "aside main"`
      }}>
         <GridItem area="nav">
            <NavBar />
         </GridItem>
         <GridItem area="aside" hideBelow="lg">
            <GenreList />
         </GridItem>
         <GridItem area="main">
            <GameGrid />
         </GridItem>
      </Grid>
   );
}

export default App;
