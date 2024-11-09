import {
  Box,
  HStack,
  Image,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import * as React from "react";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
interface CardProps {
  title: string;
  img: string;
  desc: string;
  midref: string;
  gitref: string;
  fulldesc: string;
  showMid: boolean;
}

export default function HoverImageCard(props: CardProps) {
  const { title, img, desc, midref, gitref, fulldesc, showMid } = props;

  const [isHovering, setIsHovering] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg="white"
        boxShadow="lg"
        borderRadius="md"
        overflow="hidden"
        position="relative"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        // transition="all 0.2s ease-in-out"
        cursor="pointer"
        bgColor="black"
        onClick={onOpen}
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
            <Text color="whiteAlpha.900" fontSize="lg" fontWeight="bold" mb="2">
              {title}
            </Text>
            <Text color="white" fontSize="sm" textAlign="center">
              {desc}
            </Text>
          </Box>
        )}
      </Box>

      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#283635">
          <ModalHeader width="100%" textColor="white">
            <Text >{title}</Text>
          </ModalHeader>
          <ModalBody w="100%">
            <VStack spacing="20px">
              <Image rounded="md" alignContent="center" src={img} />
              <Text fontSize="sm" textColor="white">
                {fulldesc}
              </Text>
              <HStack width="100%" justifyContent="right">
                {showMid && (
                  <Link
                    alignContent="right"
                    transition="transform 0.2s"
                    _hover={{ transform: "scale(1.05)" }}
                    href={midref}
                    isExternal
                  >
                    <AiFillMediumCircle color="white" size="40px" />
                  </Link>
                )}
                <Link
                  transition="transform 0.2s"
                  _hover={{ transform: "scale(1.05)" }}
                  href={gitref}
                  isExternal
                >
                  <AiFillGithub color="white" size="40px" />
                </Link>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
