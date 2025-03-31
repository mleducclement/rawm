import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number | undefined;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = "";

  if (score) {
    color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  }

  return (
    <Badge fontSize="14px" paddingX={2} marginTop={2} marginBottom={3} borderRadius={"4px"}
           colorPalette={color || "yellow"}
           width="fit-content">{score || "N/A"}</Badge>
  );
};

export default CriticScore;