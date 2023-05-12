import { Input } from "@chakra-ui/react";
import React from "react";

interface Props {}

const SearchInput = (props: Props) => {
  return (
    <Input borderRadius={20} placeholder="Search Games ..." variant="filled" />
  );
};

export default SearchInput;
