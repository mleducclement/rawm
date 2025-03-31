import {Badge} from "@chakra-ui/react";

interface CriticScoreProps {
    score: number;
}

const CriticScore = ({score}: CriticScoreProps) => {
    const color = score > 75 ? "green" : score > 50 ? "yellow" : "red"

   return (
      <Badge fontSize="14px" paddingX={2} marginTop={2} borderRadius={"4px"} colorPalette={color} width="fit-content">{score}</Badge>
   );
};

export default CriticScore;