import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "../Components/GameGrid";
import GameHeading from "../Components/GameHeading";
import GenreList from "../Components/GenreList";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <>
      <Grid
        templateAreas={{
          base: ` "main"`,
          lg: `"aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area={"aside"} padding={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Box paddingLeft={3}>
            <GameHeading />
            <Flex marginBottom={5}>
              <Box marginRight={5}>
                <PlatformSelector />
              </Box>
              <SortSelector />
            </Flex>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
