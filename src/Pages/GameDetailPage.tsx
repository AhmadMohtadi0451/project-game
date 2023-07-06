import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../Components/ExpandableText";
import useGames from "../Hook/useGames";
import DefinitionItem from "../Components/DefinitionItem";
import CriticScore from "../Components/CriticScore";
import GameAttributes from "../Components/GameAttributes";
import GameTrailer from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

type Props = {};

const GameDetailPage = (props: Props) => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGames(slug!);

  if (isLoading) return <Spinner />;
  if (error || !data) throw error;

  return (
    <>
      <Box padding={5}>
        <Heading>{data.name}</Heading>
        <ExpandableText>{data.description_raw}</ExpandableText>
        <GameAttributes game={data} />
        <GameTrailer gameId={data.id} />
        <GameScreenshots gameId={data.id} />
      </Box>
    </>
  );
};

export default GameDetailPage;
