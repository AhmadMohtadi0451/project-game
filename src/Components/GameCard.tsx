import { Game } from "../Hook/useGames";
import { Badge, Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import getCropedImageUrl from "../Services/image-url";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCropedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
