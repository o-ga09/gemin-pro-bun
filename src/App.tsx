import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { genAI } from "./lib/genAI";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RepeatIcon from "@mui/icons-material/Repeat";

function App() {
  const [body, setBody] = useState("test");
  const FetchAI = async () => {
    const genText = await genAI();
    setBody(genText);
  };
  return (
    <>
      {/* ヘッダー */}
      <Heading as={"h1"} h={"10vh"} p={4} textAlign={"center"}>
        Hello Gemini Pro !
      </Heading>
      {/* ヘッダー */}

      <Box
        display={"flex"}
        p={1}
        minH={"80vh"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* 投稿カード */}
        <Box display={"flex"} flexDirection={"row"}>
          <Box marginRight={"2rem"}>
            <Image
              src="/vite.svg"
              w={"5rem"}
              h={"5ren"}
              borderRadius={"50px"}
              border={"solid 1px"}
            />
          </Box>
          <Box
            display={"flex"}
            borderRadius={"10px"}
            boxShadow={"10px 5px 5px gray"}
            bgColor={"green.200"}
            w={"25rem"}
            h={"5rem"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            p={1}
          >
            <Text>{body}</Text>
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"flex-end"}
            >
              <RepeatIcon style={{ marginRight: "2rem" }} />
              <FavoriteIcon style={{ marginRight: "2rem" }} />
              <Text>2024/01/01 00:00</Text>
            </Box>
          </Box>
        </Box>
        {/* 投稿カード */}
        <span style={{ height: "50px" }}></span>

        {/* 生成ボタン */}
        <Button
          w={"3rem"}
          h={"3rem"}
          boxShadow={"5px 2.5px 2.5px gray"}
          onClick={FetchAI}
          bgColor={"cyan.300"}
          borderRadius={"50px"}
        >
          <AddIcon />
        </Button>
        {/* 生成ボタン */}
      </Box>

      {/* フッター */}
      <Box>
        <Text h={"10vh"} p={4} textAlign={"center"}>
          @o-ga09 2024
        </Text>
      </Box>
      {/* フッター */}
    </>
  );
}

export default App;
