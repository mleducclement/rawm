import {Card, Heading, Image} from "@chakra-ui/react";
import {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";

interface GameCardProps {
   game: Game;
}

const GameCard = ({game}: GameCardProps) => {

   return (
      <Card.Root borderRadius={10} overflow={"hidden"}>
         <Image src={game.background_image}></Image>
         <Card.Body display="flex" flexDirection="column" justifyContent="space-between">
            <Heading fontSize={"2xl"}>{game.name}</Heading>
            <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
         </Card.Body>
      </Card.Root>
   );
};
export default GameCard;