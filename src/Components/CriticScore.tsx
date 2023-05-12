import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let scoreColor = score > 70 ? "green" : score > 50 ? "green " : "red";
  return (
    <Badge colorScheme={scoreColor} fontSize="14px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
