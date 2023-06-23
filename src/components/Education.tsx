import { VStack, Heading, HStack, useBreakpointValue } from "@chakra-ui/react";
import SchoolCard from "./SchoolCard";

export default function Education() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
    return (
      <VStack h = "100%" w="90%" spacing="40px">
        <Heading
          w="100%"
          h="100%"
          color="white"
          textAlign="right"
          textDecoration="underline"
          fontSize="4xl"
          fontWeight="bold"
          mb={18}
        >
          education
        </Heading>
        <HStack  h = "100% " w = "80%" spacing="50px">
          <SchoolCard
            schoolName="University of Illinois"
            datesAttended="2022 - Present"
            description="Mathematics, Astrophysics"
          />
          <SchoolCard
            schoolName="Metea Valley High School"
            datesAttended="2020 - 2022"
            description="Model UN | Math Team | BPA"
          />
          <SchoolCard
            schoolName="James B. Conant High School"
            datesAttended="2018 - 2020"
            description="Debate | Math Team  | BPA"
          />
        </HStack>
      </VStack>
    );
  } else if (isMobile) {
    return (
      <VStack w="90%" spacing="40px">
        <Heading
          w="100%"
          color="white"
          textAlign="center"
          textDecoration="underline"
          fontSize="4xl"
          fontWeight="bold"
          mb={18}
        >
          education
        </Heading>
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
          datesAttended="2018 - 2020"
          description="Debate | Math Team  | BPA"
        />
      </VStack>
    );
  }
  return null;
}
