import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import Content from "../assets/Content";
import { useParams } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function Story() {
  const { id } = useParams();
  if (id != undefined) {
    const title = Content[id].title;
    const imageUrl = Content[parseInt(id)].img;
    const content = Content[parseInt(id)].content;
    const date = Content[parseInt(id)].date;

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
        <NavBar />
        <VStack w="90%" margin="auto">
          <Heading         color="white"
 textAlign="left" fontSize="7xl" fontWeight="bold" mb="4">
            {title}
          </Heading>
          <Text          color="white"
fontSize="m" textAlign="left" w="100%">
            {date}
          </Text>
          {/* <Box w="100%">
            <Image
              justifyContent="left"
              src={imageUrl}
              alt={title}
              maxH="300px"
            />
          </Box> */}

          <Box fontSize="xl" alignContent="left" w="100%" textColor="white.400"> {content}</Box>
        </VStack>
        <Footer />
      </Box>
    );
  }
  return <Box>Invalid</Box>;
}

export default Story;
