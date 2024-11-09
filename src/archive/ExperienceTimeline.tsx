import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  chakra,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";

const milestones = [
  {
    id: 1,
    date: "January 2024 - Present",
    title: "Founder @ Scholar Sphere",
    description:
      "Started tutoring company focused on low-cost SAT/ACT preparation for students.",
  },
  {
    id: 2,
    date: "January 2024 - May 2024",
    title: "Researcher @ Illinois Mathematics Lab",
    description:
      "Discovered previously unknown estimates to quantum gates allowing for easier implementation within real-life systems. ",
  },
  {
    id: 3,
    date: "Summer 2023",
    title: "Researcher @ Virginia Tech's Physics REU",
    description:
      "Researched the HI content of NGC 3941 under Dr. Lucero as part of VTech's Summer REU program for 10 weeks. Analyzed and reduced HI data from the Very Large Array (VLA) in New Mexico, using software tools like CASA and MIRIAD.",
  },
  {
    id: 4,
    date: "December 2022 - April 2023",
    title: "Web Designer @ Illinois School of Social Work",
    description: `Designed a website for the Champaign Urbana Public Health District to make community health resources more accessible to resident within the region. `,
  },
  {
    id: 5,
    date: "May 2021 - May 2023",
    title: "Researcher @ Illinois Combinatorics Lab",
    description: `Conducted research within the field of combinatorics with Professor Yong at UIUC, focusing on vandermonde determinants and saturated newton polytopes. Developed python algorithm to test the Saturated Newton Polytope condition for determinants and discovered parity trend in discriminant data and combinatorial explanations for the results.
     `,
  },
];

const Milestones = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container maxWidth="7xl" p={{ base: 2, sm: 10 }}>
      <Heading
        textDecoration="underline"
        fontSize="4xl"
        fontWeight="bold"
        mb={18}
        color="white"
        textAlign={isDesktop ? "left" : "center"}
      >
        relevant experiences
      </Heading>
      {milestones.map((milestone) => (
        <Flex key={milestone.id} mb="10px">
          {/* Desktop view(left card) */}
          {isDesktop && milestone.id % 2 === 0 && (
            <>
              <EmptyCard />
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <LineWithDot />
              <Card {...milestone} />
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && milestone.id % 2 !== 0 && (
            <>
              <Card {...milestone} />

              <LineWithDot />
              <EmptyCard />
            </>
          )}
        </Flex>
      ))}
    </Container>
  );
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  date: string;
}

const Card = ({ id, title, date, description }: CardProps) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 == 0;
  let borderWidthValue = isEvenId ? "15px 15px 15px 0" : "15px 0 15px 15px";
  let leftValue = isEvenId ? "-15px" : "unset";
  let rightValue = isEvenId ? "unset" : "-15px";

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = "-15px";
    rightValue = "unset";
    borderWidthValue = "15px 15px 15px 0";
  }

  return (
    <HStack
      flex={1}
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue("gray.100", "gray.800")}
      spacing={5}
      opacity="90%"
      bgColor="gray.800"
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: "0",
        h: "0",
        borderColor: `transparent ${useColorModeValue(
          "#edf2f6",
          "#1a202c"
        )} transparent`,
        borderStyle: "solid",
        borderWidth: borderWidthValue,
        position: "absolute",
        left: leftValue,
        right: rightValue,
        display: "block",
      }}
    >
      <Box boxShadow="md" >
        <Text fontSize="lg" color={isEvenId ? "teal.400" : "blue.400"}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <Text color="white" fontSize="2xl" lineHeight={1.2} w="100%">
            {title}
          </Text>
          <Text color="white" fontSize="md" textDecoration="italics">
            {" "}
            {description}
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex
      pos="relative"
      alignItems="center"
      mr={{ base: "40px", md: "40px" }}
      ml={{ base: "0", md: "40px" }}
    >
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          top="0"
          left="0"
          bottom="0"
          right="0"
          width="100%"
          height="100%"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          bg={useColorModeValue("gray.600", "gray.200")}
          borderRadius="100px"
          backgroundImage="none"
          opacity="70%"
        ></Box>
      </Box>
    </Flex>
  );
};

const EmptyCard = () => {
  return (
    <Box
      flex={{ base: 0, md: 1 }}
      p={{ base: 0, md: 6 }}
      bg="transparent"
      boxShadow="lg"
    ></Box>
  );
};

export default Milestones;
