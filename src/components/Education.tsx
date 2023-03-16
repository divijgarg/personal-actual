import { VStack, Heading, HStack } from "@chakra-ui/react";
import SchoolCard from "./SchoolCard";

export default function Education() {
  return (
    <VStack w="90%" spacing="40px">
      <Heading
        w="100%"
        color="white"
        textAlign="right"
        textDecoration="underline"
        fontSize="4xl"
        fontWeight="bold"
        mb={18}
      >
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
  );
}
