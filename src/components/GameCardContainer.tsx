import { forwardRef, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = forwardRef(({ children }: GameCardContainerProps, ref) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} ref={ref}
         transition="all 0.15s ease-in"
         _hover={{ transform: "scale(1.03)", cursor: "pointer" }}>
      {children}
    </Box>
  );
});
export default GameCardContainer;