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
        width="100%"
        pos="relative"
        bgSize="cover"
        minH="100vh"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        // bg="gray.1200"
        bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1.5)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
      >
        <NavBar />
        <VStack w="90%" margin="auto">
          <Heading textAlign="left" fontSize="7xl" fontWeight="bold" mb="4">
            {title}
          </Heading>
          <Text fontSize="m" textAlign="left" w="100%">
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
