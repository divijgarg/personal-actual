import { VStack, Heading } from "@chakra-ui/react";
import ActivityCard from "./ActivityCard";

export default function Activities() {
  return (
    <VStack w="90%" spacing="40px">
      <Heading
        w="100%"
        textAlign="left"
        textDecoration="underline"
        fontSize="4xl"
        fontWeight="bold"
        mb={18}
      >
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
  );
}
