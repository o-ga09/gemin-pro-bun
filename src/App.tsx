import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { genAI } from "./lib/genAI";
import { useState } from "react";

function App() {
  const [body, setBody] = useState("");
  const FetchAI = async () => {
    const genText = await genAI();
    setBody(genText);
  };
  return (
    <>
      <Heading as={"h1"} h={"10vh"} p={4} textAlign={"center"}>
        Hello Gemini Pro !
      </Heading>

      <Box display={"flex"} p={1} minH={"80vh"}>
        {body}
        <Button onClick={FetchAI}>生成</Button>
      </Box>

      <Box>
        <Text h={"10vh"} p={4} textAlign={"center"}>
          @o-ga09 2024
        </Text>
      </Box>
    </>
  );
}

export default App;
