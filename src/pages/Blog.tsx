import React from "react";

// import Stories from "../components/Stories";
import { Box, Grid, GridItem, Heading, VStack } from "@chakra-ui/react";
import NavBar from "../components/Navbar";
import Content from "../assets/Content";
import HoverImageBlogPost from "../components/HoverImageBlogPost";
const App = () => {
  const blogPosts = Content;
  return (
    <Box
      w="100%"
      pos="relative"
      bgSize="cover"
      bgRepeat="no-repeat"
      minH="100vh"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
      bgAttachment="fixed"
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
};

export default App;
