import { Box, Divider, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar2";
import Intro from "../components/intro";
import Experience from "../components/Experience2";
import Footer from "../components/Footer";

function Home2() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isDesktop) {
    return (
      <Box
        maxW="100%"
        overflow="hidden"
        // maxH="100%"
        minH="100vh"
        bgPos="center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="#041325"
      >
        <Navbar />
        <Box id="home">
          <Intro />
        </Box>
        <Divider w="60%" ml="5%" borderColor="white" borderWidth="2px" />
        <Box id="experience">
          <Experience />
        </Box>
        <Footer />
      </Box>
    );
  } else if (isMobile) {
    return (
      <Box
        maxW="100%"
        overflow="hidden"
        // maxH="100%"
        minH="100vh"
        bgPos="center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="#041325"
      >
        <Navbar />
        <Box id="home">
          <Intro />
        </Box>
        <Divider
          w="60%"
          ml="20%"
          mr="5%"
          borderColor="white"
          borderWidth="2px"
          justifyContent="center"
        />
        <Box id="experience">
          <Experience />
        </Box>
        <Footer />
      </Box>
    );
  }

  return null;
}
export default Home2;
