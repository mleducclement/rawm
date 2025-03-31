import { Heading } from "@chakra-ui/react";
import { GameQuery } from "@/App.tsx";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const headingText = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

  return (
    <Heading as="h1" fontSize="4xl">{headingText}</Heading>
  );
};
export default GameHeading;