import {
  Box,
  Flex,
  Heading,
  Text,
  AbsoluteCenter,
} from "@chakra-ui/react";
import Nav from "../components/Navbar";

function Home() {
  return (
    <Box
      width="100%"
      pos="relative"
      bgAttachment="fixed"
      bgSize="100%"
      // bgPos="50% 100%"
      bgRepeat="no-repeat"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <Flex width="100%" height="600px">
        <AbsoluteCenter
          height="60%"
          width="60%"
          bg="black"
          color="white"
          opacity="50%"
          borderRadius="10px"
        >
          <Heading fontSize="80px" marginTop="15%" textAlign="center">
            Hi, I'm Divij Garg.
          </Heading>
          <Text
            marginTop="20px"
            fontSize="30px"
            marginBottom="30px"
            textAlign="center"
          >
            Researcher | Writer | Developer
          </Text>
        </AbsoluteCenter>
      </Flex>
    </Box>
  );
}
export default Home;
