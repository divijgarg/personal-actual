import {
  HStack,
  VStack,
  Box,
  Image,
  Text,
  Heading,
  Grid,
  GridItem,
  Center,
} from "@chakra-ui/react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMediumCircle,
} from "react-icons/ai";
import Timeline from "../components/ExperienceTimeline";
import Nav from "../components/Navbar";
import SchoolCard from "../components/SchoolCard";
import ActivityCard from "../components/ActivityCard";
import Footer from "../components/Footer";
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

            <HStack spacing="20px">
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
            {/* <Text fontSize="xl">divijgarg04@gmail.com</Text> */}
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
        <VStack w="90%" spacing="40px">
          <Heading w="100%" textAlign="right" textDecoration="underline">
            education
          </Heading>
          <HStack spacing="50px">
            <SchoolCard
              schoolName="University of Illinois"
              datesAttended="2022 - Present"
              description="BS in Mathematics, Astrophysics"
            />
            <SchoolCard
              schoolName="Metea Valley High School"
              datesAttended="2020 - 2022"
              description="Model UN | Math Team | BPA"
            />
            <SchoolCard
              schoolName="James B. Conant High School"
              datesAttended="2018 - 2022"
              description="Debate | Math Team  | BPA"
            />
          </HStack>
        </VStack>

        <VStack w="90%" spacing="40px">
          <Heading w="100%" textAlign="left" textDecoration="underline">
            current activities
          </Heading>
          <VStack w="100%" spacing="50px">
            <ActivityCard
              activityName="Model United Nations"
              role="Director for MUNI"
              description="Part of the Model UN club at UIUC. 
              Won Outstanding Delegate at the American Model United Nations conference in Chicago, IL. 
              Currently directing the United Nations Development Programme for the annual MUN conference at UIUC for high schoolers."
            />
            <ActivityCard
              activityName="Illinois Space Society"
              role="Participant in RASC-AL"
              description="Part of the ISS club at UIUC. 
              Working on the 2022-2023 NASA RASC-AL competition to design a complete Mars mission plan. Working on the logistics/transportation team, where we focus on the trajectory/transport to Mars."
            />
            <ActivityCard
              activityName="Writer"
              role="https://www.medium.com/@divijgarg04"
              description="Focusing on applications of mathematics/computer science to everyday items such as board games, where I create simulations and statistically analyze them to reveal hidden trends."
            />
          </VStack>
        </VStack>
        {/* <Box w="100%" h="200px">

        </Box> */}
      </VStack>
      <Footer />
    </Box>
  );
}
export default AboutMe;
