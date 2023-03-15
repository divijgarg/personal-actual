import { HStack, VStack, Box, Image, Text, Heading } from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import Timeline from "../components/ExperienceTimeline";
import Nav from "../components/Navbar";
function AboutMe() {
  return (
    <Box
      w="100%"
      pos="relative"
      bgSize="cover"
      bgRepeat="no-repeat"
      
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
      bgAttachment="fixed"
    >
      <Nav />
      <VStack spacing="100px" marginTop="100px">
        <HStack w="90%" spacing="100px" marginTop="10px">
          <VStack
            spacing="25px"
            bgColor="transparent"
            height="100%"
            // margin="auto"
          >
            <Heading textAlign="left">Hey!</Heading>
            <Text margin="auto" fontSize="2xl" textAlign="center">
              I'm currently a student at the University of Illinois Urbana
              Champaign studying mathematics and astrophysics. I've been an avid
              space enthusiast for my entire life, and I'm currently interested
              in the applications of math to the astrophysics research.
            </Text>

            <HStack>
              <AiFillGithub
                size="50px"
                onClick={() =>
                  window.open("https://github.com/divijgarg", "_blank")
                }
              />
              <AiFillLinkedin
                size="50px"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/divij-garg-189772212/",
                    "_blank"
                  )
                }
              />
              <AiFillMediumCircle
                size="50px"
                onClick={() =>
                  window.open("https://medium.com/@divijgarg04", "_Medium")
                }
              />
            </HStack>
          </VStack>
          <Image
            objectFit="cover"
            src="https://www.linkpicture.com/q/IMG_2612-Copy1.jpg"
            alt="Divij Garg"
            borderRadius="50%"
            border="3px solid black"
            padding="2px"
            w="30%"
            // margin="auto"
          />
        </HStack>

        <Timeline />
      </VStack>
    </Box>
  );
}
export default AboutMe;
