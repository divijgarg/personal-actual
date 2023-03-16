import React from "react";

import {
  Box,
  Grid,
  GridItem,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Content from "../assets/Content";
import HoverImageBlogPost from "../components/HoverImageBlogPost";
const App = () => {
  const blogPosts = Content;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
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
          <Heading
            w="100%"
            textAlign="right"
            textDecoration="underline"
            fontSize="4xl"
            fontWeight="bold"
            mb={18}
            color="white"
          >
            my posts
          </Heading>
          <Grid
            gap={10}
            w="100%"
            margin="auto"
            className="posts-container"
            templateColumns="repeat(3, 1fr)"
          >
            {blogPosts.map((post, index) => (
              <GridItem>
                <HoverImageBlogPost
                  title={post.title}
                  img={post.img}
                  desc={post.desc}
                  href={post.href}
                />
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Box>
    );
  } else if (isMobile) {
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
        
        <VStack >
          <Heading
            w="100%"
            textAlign="center"
            textDecoration="underline"
            fontSize="4xl"
            fontWeight="bold"
            mb={18}
            color="white"
          >
            my posts
          </Heading>
          <Grid
            gap={10}
            w="100%"
            margin="auto"
            // alignContent="center"
            className="posts-container"
            templateColumns="repeat(1, 1fr)"
          >
            {blogPosts.map((post, index) => (
              <GridItem w="100%" margin="auto">
                <HoverImageBlogPost
                  title={post.title}
                  img={post.img}
                  desc={post.desc}
                  href={post.href}
                />
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Box>
    );
  }
  return null;
};

export default App;
