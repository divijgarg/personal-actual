import { Box, Center, Text, VStack, Flex } from "@chakra-ui/react";

export default function SchoolCard({ schoolName, datesAttended, description }) {
  return (
    <Flex
      w="100%"
      h="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      borderColor="gray.800"
    >
      {" "}
      <VStack w = "100%" h = "100%">
        <Center bg="gray.800" w="100%" minH = "40%">
          <Text w = "100%" textAlign="center" color="white" fontSize="xl" fontWeight="semibold">
            {schoolName}
          </Text>
        </Center>
        <VStack spacing={4} p={4}>
          <Text color="white" fontSize="lg" fontWeight="semibold">
            {datesAttended}
          </Text>
          <Text color="white" fontSize="md" textAlign="center">
            {description}
          </Text>
        </VStack>
      </VStack>
    </Flex>
  );
}
