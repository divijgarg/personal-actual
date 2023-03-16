import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue
  
} from "@chakra-ui/react";
import Nav from "../components/Navbar";

function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if(isDesktop) {
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
  else if(isMobile) {
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
            <Heading color = "white" fontSize="60px" marginTop="50%" textAlign="center">
              Hi, I'm Divij Garg.
            </Heading>
            <Text
              marginTop="20px"
              fontSize="20px"
              marginBottom="50px"
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
  return null;
}
export default Home;
