import { Box, Center, Text, VStack } from "@chakra-ui/react";

export default function SchoolCard({ schoolName, datesAttended, description }) {
  return (
    <Box
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.800"
    >
      <Center bg="gray.800" h="60px">
        <Text color="white" fontSize="xl" fontWeight="semibold">
          {schoolName}
        </Text>
      </Center>
      <VStack spacing={4} p={4}>
        {/* <Text fontSize="md">Dates Attended:</Text> */}
        <Text color="white" fontSize="lg" fontWeight="semibold">
          {datesAttended}
        </Text>
        {/* <Text fontSize="md">Description:</Text> */}
        <Text color="white" fontSize="md" textAlign="center">
          {description}
        </Text>
      </VStack>
    </Box>
  );
}
