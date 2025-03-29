import {HStack, Image} from "@chakra-ui/react";
import ColorModeSwitch from "@/components/ColorModeSwitch.tsx";
import logo from "../assets/logo.webp";

const NavBar = () => {
   return (
      <HStack justify="space-between" padding="10px">
         <Image src={logo} boxSize="60px"/>
         <ColorModeSwitch/>
      </HStack>
   );
};
export default NavBar;