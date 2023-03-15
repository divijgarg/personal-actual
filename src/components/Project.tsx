import * as React from "react";
import { Box, Image, Text, Link } from "@chakra-ui/react";

interface CardProps {
  title: string;
  img: string;
  desc: string;
  href: string;
}

export default function Project(props: CardProps) {
  const { title, img, desc, href } = props;

  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <Link href={href} _hover={{ textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
      <Box
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        position="relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        transition="all 0.2s ease-in-out"
        cursor="pointer"
      >
        <Image src={img} alt={title} objectFit="cover" w="300px" h="200px" />
        {!isHovering && (
          <Box
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            bg="rgba(0,0,0,0.6)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="4"
            color="white"
          >
            <Text fontSize="lg" fontWeight="bold" mb="2">
              {title}
            </Text>
            <Text fontSize="sm" textAlign="center">{desc}</Text>
          </Box>
        )}
      </Box>
    </Link>
  );
}
