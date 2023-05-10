import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

interface Props {}

const SortSelector = (props: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>Relavence</MenuList>
      <MenuList>Ez</MenuList>
    </Menu>
  );
};

export default SortSelector;
