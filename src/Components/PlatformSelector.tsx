import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useplatform from "../Hook/usePlatfrom";
import { Platform } from "../Entities/Platform";
import usePlatforms from "../Hook/usePlatforms";
import useGameQueryStore from "../Zustand/store";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);

  const { data, error } = useplatform();
  const selectedPlatform = usePlatforms(selectedPlatformId);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platforms) => (
          <MenuItem
            onClick={() => setSelectedPlatformId(platforms.id)}
            key={platforms.id}
          >
            {platforms.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
