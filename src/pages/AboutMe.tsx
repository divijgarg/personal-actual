import { VStack, Box, useBreakpointValue } from "@chakra-ui/react";

import Timeline from "../components/ExperienceTimeline";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Activities from "../components/Activities";
import Projects from "../components/Projects";
import Education from "../components/Education";
import PersonalInfo from "../components/PersonalInfo";
function AboutMe() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop){
  return (
    <Box
      maxW="100%"
      overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgColor="black"
      // bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <VStack spacing="100px" marginTop="100px">
        <PersonalInfo />
        <Timeline />
        <Projects />
        <Activities />
        <Education />
        <Box h="20px"></Box>
      </VStack>
      {/* <Footer /> */}
    </Box>);
  }
  else {
    /*need to figure out why background doesn't show up
   */
  return(<Box
      maxW="100%"
      // overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgColor="black"
      // bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <VStack spacing="100px" marginTop="100px">
        <PersonalInfo />
        <Timeline />
        <Projects />
        <Activities />
        <Education />
        <Box h="20px"></Box>
      </VStack>
      
    </Box>);
  }
  
}
export default AboutMe;
