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
  useDisclosure
} from "@chakra-ui/react";
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
        // transition="all 0.2s ease-in-out"
        cursor="pointer"
        bgColor="black"
        onClick={onOpen}
        // borderTop="5px transparent white"
      >
        <Image src={img} alt={title} objectFit="cover" w="300px" h="200px" />
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
        )
      </Box>

      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="#283635">
          <ModalHeader textColor="white">
            <Text>{title}</Text>
          </ModalHeader>
          <ModalBody w="100%">
            <VStack spacing="20px">
              {/* <Box border="2px solid #964B00"  rounded="sm" maxW="md"> */}
              <Image rounded="md" alignContent="center" src={img} />
              {/* </Box> */}
              <Text fontSize="sm" textColor="white">
                {fulldesc}
              </Text>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack w="100%" justifyContent="right">
              {showMid && (
                <Link
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
