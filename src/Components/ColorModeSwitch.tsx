import { HStack, Icon, Switch, Text, useColorMode } from "@chakra-ui/react";
import BsFillSunFill from "react-icons/bs";
import BsFillMoonFill from "react-icons/bs";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
