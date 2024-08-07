import {
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

export default function PersonalInfo() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
    return (
      <HStack w="90%" spacing="100px" marginTop="10px">
        <VStack spacing="25px" bgColor="transparent" height="100%">
          <Heading color="white" textAlign="left">
            Hey!
          </Heading>

          <Text color="white" margin="auto" fontSize="2xl" textAlign="center">
            I am a junior at the University of Illinois Urbana Champaign
            majoring in CS + Mathematics. I have been an avid math enthusiast
            for my entire life, and I am currently interested in the
            applications of the subject in various fields such as aerospace.
          </Text>

          <HStack spacing="20px">
            <Link
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <AiFillGithub
                color="white"
                size="50px"
                onClick={() =>
                  window.open("https://github.com/divijgarg", "_blank")
                }
              />
            </Link>
            <Link
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <AiFillLinkedin
                color="white"
                size="50px"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/divij-garg-189772212/",
                    "_blank"
                  )
                }
              />
            </Link>
            <Link
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <AiFillMail
                color="white"
                size="50px"
                onClick={() =>
                  window.open("mailto: divijgarg04@gmail.com", "_Medium")
                }
              />
            </Link>
          </HStack>
        </VStack>
        <Image
          objectFit="cover"
          borderColor="white"
          src="Images/divij.jpg"
          alt="Photo of Divij Garg"
          borderRadius="50%"
          border="3px solid black"
          padding="2px"
          w="30%"
        />
      </HStack>
    );
  } else if (isMobile) {
    return (
      <VStack w="90%" spacing="50px" marginTop="10px">
        <Image
          objectFit="cover"
          borderColor="white"
          src="Images/divij.jpg"
          alt="Divij Garg"
          borderRadius="50%"
          border="3px solid black"
          padding="2px"
          w="70%"
          // margin="auto"
        />

        <Heading color="white" textAlign="left">
          Hey!
        </Heading>
        <Text color="white" margin="auto" fontSize="2xl" textAlign="center">
          I am a junior at the University of Illinois Urbana Champaign majoring
          in CS + Mathematics. I have been an avid math enthusiast for my entire
          life, and I am currently interested in the applications of the subject
          in various fields such as aerospace.
        </Text>

        <HStack spacing="20px">
          <AiFillGithub
            color="white"
            size="50px"
            onClick={() =>
              window.open("https://github.com/divijgarg", "_blank")
            }
          />

          <AiFillLinkedin
            color="white"
            size="50px"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/divij-garg-189772212/",
                "_blank"
              )
            }
          />
          <AiFillMail
            color="white"
            size="50px"
            onClick={() =>
              window.open("mailto: divijgarg04@gmail.com", "_Medium")
            }
          />
        </HStack>
      </VStack>
    );
  } else return null;
}
