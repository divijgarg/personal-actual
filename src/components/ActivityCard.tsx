import { Box, Flex, Text } from "@chakra-ui/react";

interface ActivityCardProps {
  activityName: string;
  role: string;
  description: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
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
      <Box mr={4} minW="10%" maxW="10%">
        <Text fontWeight="bold" fontSize="2xl" color="white">
          {activityName}
        </Text>
      </Box>
      <Box>
        <Text fontSize="sm" color="gray.400">
          {role}
        </Text>
        <Text fontSize="md" color="white">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

export default ActivityCard;