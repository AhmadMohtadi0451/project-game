import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

import useGenres from "../Hook/useGenres";
import usePlatforms from "../Hook/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenres(gameQuery.genreId);

  const platform = usePlatforms(gameQuery.platformId);

  const heading = `
  ${platform?.name || ""}
  ${genre?.name || ""} 
   Games
   `;
  return (
    <Heading marginY={4} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
