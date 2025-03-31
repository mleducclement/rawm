import { HStack, Switch } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode.tsx";

const ColorModeSwitch = () => {

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch.Root>
        <Switch.Root checked={colorMode === "dark"} onCheckedChange={toggleColorMode}>
          <Switch.HiddenInput />
          <Switch.Control />
          <Switch.Label>Dark Mode</Switch.Label>
        </Switch.Root>
      </Switch.Root>
    </HStack>
  );
};
export default ColorModeSwitch;