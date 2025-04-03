import { Card, Flex, Heading, Image } from "@chakra-ui/react";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/imageUrl.ts";
import Emoji from "@/components/Emoji.tsx";
import { Game } from "@/services/gameService";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {

  return (
    <Card.Root>
      <Image
        src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <Flex justifyContent="space-between" alignItems="center">
          <PlatformIconList platforms={game.parent_platforms?.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </Flex>
        <Heading fontSize={"lg"}>{game.name}</Heading>
        <Emoji rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
};
export default GameCard;