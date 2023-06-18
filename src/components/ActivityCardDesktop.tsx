import { Box, Flex, Text } from "@chakra-ui/react";

interface ActivityCardDesktopProps {
  activityName: string;
  role: string;
  description: string;
}

const ActivityCardDesktop: React.FC<ActivityCardDesktopProps> = ({
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
      w="100%"
    >
      <Box mr={4} minW="18%" maxW="18%">
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

export default ActivityCardDesktop;
