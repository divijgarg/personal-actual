import {
  Box,
  Divider,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CV } from "../assets/CV";
import ExperienceCard from "./ExperienceCard";
function Experience() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
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
        <Heading
          w="90%"
          color="white"
          fontSize="2xl"
          ml="5%"
          mt="5%"
          justifyContent="left"
        >
          ~experience~
        </Heading>
        {CV.map((position, index) => (
          <ExperienceCard
            key={index}
            startDate={position.startDate}
            endDate={position.endDate}
            role={position.role}
            company={position.company}
            description={position.description}
            booleanList={position.booleanList}
            links={position.links}
          ></ExperienceCard>
        ))}
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
        <Heading
          w="90%"
          color="white"
          fontSize="2xl"
          ml="5%"
          mr="5%"
          mt="10%"
          mb="10%"
          textAlign="center"
        >
          ~experience~
        </Heading>
        {CV.map((position, index) => (
          <ExperienceCard
            key={index}
            startDate={position.startDate}
            endDate={position.endDate}
            role={position.role}
            company={position.company}
            description={position.description}
            booleanList={position.booleanList}
            links={position.links}
          ></ExperienceCard>
        ))}
      </Box>
    );
  }

  return null;
}
export default Experience;
