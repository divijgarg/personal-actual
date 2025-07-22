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
import { CV } from "../assets/Projects";
import OrganizationCard from "./ProjectCard";
import ProjectCard from "./ProjectCard";
function Projects() {
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
        bgSize="cover"
        // bgColor="#041325"
        ml="5%"
        mr="5%"
      >
        <Heading
          w="90%"
          color="white"
          fontSize="2xl"
          mt="5%"
          justifyContent="left"
        >
          ~projects~
        </Heading>
        <Text w="90%" color="white" justifyContent="left"></Text>
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6}>
          {CV.map((position, index) => (
            <ProjectCard
              key={index}
              startDate={position.startDate}
              endDate={position.endDate}
              project={position.project}
              description={position.description}
              booleanList={position.booleanList}
              links={position.links}
            />
          ))}
        </Box>
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
        // bgColor="#041325"
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
          ~projects~
        </Heading>
        {CV.map((position, index) => (
          <ProjectCard
            key={index}
            startDate={position.startDate}
            endDate={position.endDate}
            project={position.project}
            description={position.description}
            booleanList={position.booleanList}
            links={position.links}
          ></ProjectCard>
        ))}
      </Box>
    );
  }

  return null;
}
export default Projects;
