import * as React from "react";
import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
interface CardProps {
    title: string;
    img: string;
  }

export default function PhotoCard(props: CardProps) {
  const { title, img } = props;

  const [isHovering, setIsHovering] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
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
        <Image src={img} alt={title} objectFit="cover" w="100%" />
        {isHovering && (
          <Box
            position="absolute"
            top="0"
            left="0"
            bottom="0"
            right="0"
            // bg="rgba(0,0,0,0.6)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            p="4"
            color="white"
          >
            
            
          </Box>
        )}
      </Box>

      <Modal size="2x1"  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="90%" bgColor="  #555555">
          <ModalHeader  textColor="white">
          </ModalHeader>
          <ModalBody >
          <Image  alignContent="center" src={img} />
            {/* <Text textAlign="center" marginTop="10px" textColor="gray">Photo taken in {title}</Text> */}

            </ModalBody>

        </ModalContent>
      </Modal>
    </>
  );
}
