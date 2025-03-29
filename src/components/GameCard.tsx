import {Card, Heading, Image} from "@chakra-ui/react";
import {Game} from "@/hooks/useGames.ts";

interface GameCardProps {
   game: Game;
}

const GameCard = ({game}: GameCardProps) => {
   return (
      <Card.Root borderRadius={10} overflow={"hidden"}>
         <Image src={game.background_image}></Image>
         <Card.Body>
            <Heading  fontSize={"2xl"}>{game.name}</Heading>
         </Card.Body>
      </Card.Root>
   );
};
export default GameCard;