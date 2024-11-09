import { Box, Text, Link, Icon } from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";
export default function Footer() {
  return (
    <Box mt="5%" mb="2%" ml="5%" mr="5%">
      <Text color="white" textAlign="center">
        Designed by Divij Garg.
      </Text>
      <Text  color="white" textAlign="center">
        Source code is available on my GitHub.
        <Link href="https://github.com/divijgarg/personal-actual" isExternal>
          <Icon
            as={FiExternalLink}
            w={5}
            h={5}
            color="white"
            mt={2}
            ml={1}
            _hover={{ color: "blue.400" }}
          />
        </Link>
      </Text>
    </Box>
  );
}
