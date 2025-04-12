import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";

// TODO: Make ErrorPage look better

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops</Heading>
        <Text>{isRouteErrorResponse(error) ? "The page you requested does not exist" : "Something unexpected happened"}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;