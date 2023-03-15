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
      w="100%"
      overflow="hidden"
      h="100vh"
      pos="relative"
      bgAttachment="fixed"
      bgSize="100%"
      bgRepeat="no-repeat"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <VStack width="100%" h="100%">
        <Box
          height="100%"
          width="60%"
          // bg="transparent"
          // color="white"
          // opacity="50%"
          // borderRadius="10px"
        >
          <Heading fontSize="80px" marginTop="20%" textAlign="center">
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
        </Box>
      </VStack>
    </Box>
  );
}
export default Home;
