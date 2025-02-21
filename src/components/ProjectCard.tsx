import React from "react";
import {
  Divider,
  HStack,
  Text,
  VStack,
  Flex,
  useBreakpointValue,
  Tooltip,
  Link,
  Icon,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
import Button2 from "./Button2";

interface ExperienceProps {
  startDate: string;
  endDate: string;
  project: string;
  description: string;
  booleanList: { type: string; color: string }[];
  links: { url: string; descr: string }[];
}

export default function ProjectCard(props: ExperienceProps) {
  const { startDate, endDate, description, project, booleanList, links } =
    props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  const cardStyle = {
    bg: "rgba(128, 128, 128, 0.1)",
    boxShadow: "lg",
    borderRadius: "md",
    p: 4,
    minH: "200px", // Set a minimum height for all cards
    maxW: "400px",
    w: "100%",
  };

  return (
    <VStack mt="5%" w="100%">
      <Flex
        justifyContent="left"
        {...cardStyle}
        flexGrow={1} // Ensure all cards grow equally
      >
        <VStack w="100%" justifyContent="left" ml="2%">
          <HStack w="100%" mt="1%" spacing="10px" alignContent="left">
            <Text fontSize="2xl" color="white" w="100%">
              <b>{project}</b>
            </Text>
            {links.map((link, index) => (
              <Tooltip key={index} label={link.descr}>
                <Link href={link.url} isExternal>
                  <Icon
                    as={FiExternalLink}
                    w={6}
                    h={6}
                    color="blue.200"
                    mr={2}
                    _hover={{ color: "blue.400" }}
                  />
                </Link>
              </Tooltip>
            ))}
          </HStack>
          <Text fontSize="1xl" color="white" w="100%">
            {description}
          </Text>
          {/* <SimpleGrid
              columns={3}
              spacing={1}
              mt="1%"
              w="100%"
              justifyContent="center"
            >
              {booleanList.map((item, index) => (
                <Box key={index} w="50%">
                  <Button2 name={item.type} color={item.color} />
                </Box>
              ))}
            </SimpleGrid> */}
        </VStack>
      </Flex>
    </VStack>
  );
}
