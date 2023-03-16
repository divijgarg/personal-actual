import { Box, Flex, Text,VStack } from "@chakra-ui/react";

interface ActivityCardMobileProps {
  activityName: string;
  role: string;
  description: string;
}

const ActivityCardMobile: React.FC<ActivityCardMobileProps> = ({
  activityName,
  role,
  description,
}) => {
  return (
    <Flex
      bg="gray.800"
      opacity="90%"
      borderRadius="md"
      p={4}
      alignItems="center"
      boxShadow="md"
    >
      <VStack w="100%" >
        <Box w="100%">
          <Text fontWeight="bold" fontSize="2xl" color="white">
            {activityName}
          </Text>
        </Box>
        <Box>
          <Text  fontSize="sm" color="gray.400">
            {role}
          </Text>
          <Text fontSize="md" color="white">
            {description}
          </Text>
        </Box>
      </VStack>
    </Flex>
  );
};

export default ActivityCardMobile;
