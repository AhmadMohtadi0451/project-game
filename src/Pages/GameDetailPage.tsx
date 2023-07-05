import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../Hook/useGames";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";

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
      </Box>
    </>
  );
};

export default GameDetailPage;
