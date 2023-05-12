import { HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import { ImSun } from "react-icons/im";
import { BsMoon } from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack spacing={3}>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Icon boxSize={5} as={colorMode === "dark" ? ImSun : BsMoon}></Icon>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
