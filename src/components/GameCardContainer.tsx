import { forwardRef, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = forwardRef(({ children }: GameCardContainerProps, ref) => {
  return (
    <Box borderRadius={10} overflow={"hidden"} ref={ref}>
      {children}
    </Box>
  );
});
export default GameCardContainer;