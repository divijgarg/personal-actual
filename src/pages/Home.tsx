import {
  Box,
  Flex,
  Heading,
  Text,
  AbsoluteCenter,
  VStack,
} from "@chakra-ui/react";
import Nav from "../components/Navbar";

function Home() {
  return (
    <Box
      maxW="100%"
      overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <VStack width="100%" h="100%">
        <Box
          height="100%"
          width="60%"
        >
          <Heading color = "white" fontSize="80px" marginTop="20%" textAlign="center">
            Hi, I'm Divij Garg.
          </Heading>
          <Text
            marginTop="20px"
            fontSize="30px"
            marginBottom="30px"
            textAlign="center"
            color = "white"
          >
            Researcher | Writer | Developer
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
export default Home;
