import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface BlogPreviewCardProps {
  title: string;
  desc: string;
  img: string;
  href: string;
}

const BlogPreviewCard = ({ title, desc, img, href }: BlogPreviewCardProps) => {
  const handleClick = () => {
    window.location.href = href;
  };

  return (
    <Box
      maxW="sm"
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
      cursor="pointer"
      onClick={handleClick}
    >
      <Image src={img} alt={title} />
      <Box p="6" bgColor="gray.800">
        <Flex alignItems="baseline">
          <Text color="white" fontWeight="bold" fontSize="xl" mr="2">
            {title}
          </Text>
        </Flex>
        <Text
          color="white"
          mt="2"
          fontSize="sm"
          lineHeight="tall"
        >
          {desc}
        </Text>
      </Box>
    </Box>
  );
};

export default BlogPreviewCard;
