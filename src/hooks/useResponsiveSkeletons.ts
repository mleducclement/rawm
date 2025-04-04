import { useBreakpointValue } from "@chakra-ui/react";

export const useResponsiveSkeletons = () => {
  const count = useBreakpointValue({
    base: 1,
    md: 2,
    lg: 3,
    xl: 4
  }) || 1;

  return {
    initialSkeletons: [...Array(count * 2).keys()],
    scrollingSkeletons: [...Array(count).keys()]
  };
};