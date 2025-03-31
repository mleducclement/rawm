import { Badge } from "@chakra-ui/react";
import { SiMetacritic } from "react-icons/si";

interface CriticScoreProps {
  score: number | undefined;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  let color = "";

  if (score) {
    color = score > 75 ? "green" : score > 50 ? "yellow" : "red";
  }

  return (
    <Badge fontSize="16px" paddingX={2} marginTop={3} marginBottom={3} borderRadius={"4px"}
           colorPalette={color || "yellow"}
           width="fit-content"
    >
      <SiMetacritic />
      {score || "N/A"}
    </Badge>
  );
};

export default CriticScore;