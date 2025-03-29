import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";

interface GameCardProps {
   game: Game;
}

const GameCard = ({game}: GameCardProps) => {

   return (
      <Card.Root>
         <Image src={getCroppedImageUrl(game.background_image)}></Image>
         <Card.Body>
            <Heading fontSize={"lg"}>{game.name}</Heading>
            <HStack justifyContent="space-between">
               <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)}/>
               <CriticScore score={game.metacritic}/>
            </HStack>
         </Card.Body>
      </Card.Root>
   );
};
export default GameCard;