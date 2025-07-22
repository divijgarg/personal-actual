import { Box, Divider, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/NavBar2";
import Intro from "../components/intro";
import Experience from "../components/Experience2";
import Footer from "../components/Footer";
import Projects from "../components/Projects";

function Home2() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExperienceVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(experienceRef.current);

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  const gradient = "linear(to-b, #001f20, blue.900)"

  return (
    <Box
      maxW="100%"
      overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgGradient={gradient}
      position="relative"
    >
      {/* Persistent overlay with smooth opacity change */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="black"
        opacity={isExperienceVisible ? 0.4 : 0}
        transition="opacity 1s ease"
        zIndex={0}
        pointerEvents="none"
      />

      <Box position="relative" zIndex={1}>
        <Navbar />
        <Box id="home">
          <Intro />
        </Box>
        <Divider
          w="60%"
          ml={isMobile ? "20%" : "5%"}
          borderColor="white"
          borderWidth="2px"
        />
        <Box id="experience" ref={experienceRef}>
          <Experience />
        </Box>
        <Box id="projects">
          <Projects />
          <Footer />
        </Box>
        
      </Box>
    </Box>
  );
}

export default Home2;
