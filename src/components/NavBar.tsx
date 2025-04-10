﻿import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import logo from "../assets/logo.webp";
import SearchInput from "@/components/SearchInput.tsx";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={(searchTerm) => onSearch(searchTerm)} />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;