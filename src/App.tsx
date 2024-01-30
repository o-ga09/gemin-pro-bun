import { Box, Heading, Text } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Heading as={"h1"} h={"10vh"} p={4} textAlign={"center"}>
        Hello Gemini Pro !
      </Heading>

      <Box display={"flex"} p={1} minH={"80vh"}></Box>

      <Box>
        <Text h={"10vh"} p={4} textAlign={"center"}>
          @o-ga09 2024
        </Text>
      </Box>
    </>
  );
}

export default App;
