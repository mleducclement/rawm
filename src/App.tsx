import './App.css';
import {Grid, GridItem} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";

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
            Aside
         </GridItem>
         <GridItem area="main">Main</GridItem>
      </Grid>
   );
}

export default App;
