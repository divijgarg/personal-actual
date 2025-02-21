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
  company: string;
  role: string;
  description: string;
  booleanList: { type: string; color: string }[];
  links: { url: string; descr: string }[];
}

export default function ExperienceCard(props: ExperienceProps) {
  const { startDate, endDate, description, company, role, booleanList, links } =
    props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  if (isDesktop) {
    return (
      <VStack ml="5%" mr="5%" mt="5%" w="90%">
        <Flex
          w="100%"
          justifyContent="left"
          // _hover={{
          //   transform: "scale(1.02)",
          //   boxShadow: "lg",
          //   transition: "all 0.3s ease-in-out",
          // }}
          bg="rgba(128, 128, 128, 0.1)" // More transparent background
          boxShadow="lg" // Added drop shadow
          borderRadius="md"
          p={4}
        >
          <VStack w="100%" justifyContent="left" ml="1%" mr="3%"  mb="2%">
            <Text w="100%" fontSize="sm" color="white" alignContent="center">
              {startDate} - {endDate}
            </Text>
            <HStack w="100%" spacing="10px" alignContent="left">
              <Text fontSize="2xl" color="white" w="100%">
                <b>{company}</b>
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
            <Text w="100%" fontSize="1xl" color="white">
              <i>{role}</i>
            </Text>

            <Text fontSize="1xl" color="white" w="100%">
              {description}
            </Text>
            <HStack w="100%" mt="1%" spacing="20px">
              {booleanList.map((item, index) => (
                <Button2 key={index} name={item.type} color={item.color} />
              ))}
            </HStack>
          </VStack>
        </Flex>
      </VStack>
    );
  } else {
    return (
      <VStack ml="5%" mr="5%" mt="5%" w="90%">
        <Flex
          w="100%"
          justifyContent="left"
          // _hover={{
          //   transform: "scale(1.02)",
          //   boxShadow: "lg",
          //   transition: "all 0.3s ease-in-out",
          // }}
          // h = "100%"
          bg="rgba(128, 128, 128, 0.1)"
          boxShadow="lg" // Added drop shadow
          borderRadius="md"
          p={4}
        >
          {/* <Divider
        ml="1%"
        orientation="vertical"
        borderColor="white"
        borderWidth="2px"
        height="100px"
        justifyContent="center"
        alignContent="center"
        mt="5%"
        mb="5%"
      /> */}
          <VStack w="100%" justifyContent="left" ml="3%" mr="3%">
            <Text w="100%" fontSize="sm" color="white" alignContent="center">
              {startDate} - {endDate}
            </Text>
            <HStack w="100%" spacing="10px" alignContent="left">
              <Text fontSize="2xl" color="white" w="100%">
                <b>{company}</b>
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
            <Text w="100%" fontSize="1xl" color="white">
              <i>{role}</i>
            </Text>

            <Text fontSize="1xl" color="white" w="100%">
              {description}
            </Text>
            <SimpleGrid
              columns={3}
              spacing={5}
              mt="1%"
              w="100%"
              justifyContent="left"
            >
              {booleanList.map((item, index) => (
                <Box key={index} w="100%">
                  <Button2 name={item.type} color={item.color} />
                </Box>
              ))}
            </SimpleGrid>
          </VStack>
        </Flex>
      </VStack>
    );
  }
}
