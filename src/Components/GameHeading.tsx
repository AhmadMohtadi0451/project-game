import { Heading } from "@chakra-ui/react";
import useGenres from "../Hook/useGenres";
import usePlatforms from "../Hook/usePlatforms";
import useGameQueryStore from "../Zustand/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenres(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(platformId);

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
