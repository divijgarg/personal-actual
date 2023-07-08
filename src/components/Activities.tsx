import { Heading, VStack, useBreakpointValue } from "@chakra-ui/react";
import ActivityCardDesktop from "./ActivityCardDesktop";
import ActivityCardMobile from "./ActivityCardMobile";
export default function Activities() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
    return (
      <VStack w="90%" spacing="40px">
        <Heading
          w="100%"
          color="white"
          textAlign="left"
          textDecoration="underline"
          fontSize="4xl"
          fontWeight="bold"
          mb={18}
        >
          current activities
        </Heading>
        <VStack w="100%" spacing="50px">
          <ActivityCardDesktop
            activityName="Model United Nations"
            role="Vice-President of Internal Affairs | Director for MUNI"
            description="Part of the Model UN club at UIUC. 
              Directed the United Nations Development Programme for the annual MUN conference at UIUC for high schoolers. 
              Currently developing training plans for the 2023-2024 MUN competitive circuit."
          />
          <ActivityCardDesktop
            activityName="Photographer"
            role="https://unsplash.com/@divijgarg04"
            description="Aiming to learn DSLR photography, primarily focusing on nighttime and scenic photos."
          />

          <ActivityCardDesktop
            activityName="Writer"
            role="https://www.medium.com/@divijgarg04"
            description="Focusing on applications of mathematics/computer science to everyday items such as board games, where I create simulations and statistically analyze them to reveal hidden trends."
          />
        </VStack>
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
          current activities
        </Heading>
        <VStack w="100%" spacing="40px">
          <ActivityCardMobile
            activityName="Model United Nations"
            role="Vice-President of Internal Affairs | Director for MUNI"
            description="Part of the Model UN club at UIUC. 
             
            Directed the United Nations Development Programme for the annual MUN conference at UIUC for high schoolers. 
            Currently developing training plans for the 2023-2024 MUN competitive circuit."
          />
          <ActivityCardMobile
            activityName="Photographer"
            role="url(https://unsplash.com/@divijgarg04)"
            description="Aiming to learn DSLR photography, primarily focusing on nighttime and scenic photos."
          />
          <ActivityCardMobile
            activityName="Writer"
            role="https://www.medium.com/@divijgarg04"
            description="Focusing on applications of mathematics/computer science to everyday items such as board games, where I create simulations and statistically analyze them to reveal hidden trends."
          />
        </VStack>
      </VStack>
    );
  }
  return null;
}
