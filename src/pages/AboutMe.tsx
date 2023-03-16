import { VStack, Box } from "@chakra-ui/react";

import Timeline from "../components/ExperienceTimeline";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Activities from "../components/Activities";
import Projects from "../components/Projects";
import Education from "../components/Education";
import PersonalInfo from "../components/PersonalInfo";
function AboutMe() {
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
      <VStack spacing="100px" marginTop="100px">
        <PersonalInfo />
        <Timeline />
        <Projects />
        <Activities />
        <Education />
      </VStack>
      <Footer />
    </Box>
  );
}
export default AboutMe;
