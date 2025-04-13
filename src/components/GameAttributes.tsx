import { Game } from "@/entities/game.ts";
import DefinitionItem from "@/components/DefinitionItem.tsx";
import { List, SimpleGrid } from "@chakra-ui/react";
import CriticScore from "@/components/CriticScore.tsx";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        <List.Root variant="plain">
          {game.parent_platforms?.map(
            ({ platform }) => <List.Item key={platform.id}>{platform.name}</List.Item>)}
        </List.Root>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}
        />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <List.Root variant="plain">
          {game.genres.map(
            genre => <List.Item key={genre.id}> {genre.name} </List.Item>)}
        </List.Root>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <List.Root variant="plain">
          {game.publishers?.map(
            publisher => <List.Item key={publisher.id}> {publisher.name} </List.Item>)}
        </List.Root>
      </DefinitionItem>
    </SimpleGrid>
  );
};


export default GameAttributes;
;