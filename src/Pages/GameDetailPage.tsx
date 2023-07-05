import React from "react";
import { useParams } from "react-router-dom";
import useGames from "../Hook/useGames";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

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
        <Text>{data.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailPage;
