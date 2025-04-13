import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import logo from "../assets/logo.webp";
import SearchInput from "@/components/SearchInput.tsx";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding={4}>
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};
export default NavBar;