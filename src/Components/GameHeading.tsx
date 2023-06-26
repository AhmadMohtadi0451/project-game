import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../Hook/useGenre";
import useplatform from "../Hook/usePlatfrom";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = useplatform();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

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
