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

export default function Intro() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
    return (
      <HStack w="90%" spacing="20%" m="5%">
        <VStack
          spacing="1px"
          bgColor="transparent"
          height="100%"
          w="100%"
          justifyContent="left"
        >
          <Text w="100%" color="white" textAlign="left">
            Hey there!
          </Text>
          <Text w="100%" color="white" textAlign="left">
            My name is
          </Text>
          <Heading w="100%" color="white" textAlign="left" fontSize="7xl">
            Divij Garg
          </Heading>
          <Text
            w="100%"
            color="white"
            margin="auto"
            fontSize="1xl"
            textAlign="left"
          >
            <i>B.S. Computer Science & Mathematics</i>
          </Text>
          <Text
            w="100%"
            color="white"
            margin="auto"
            fontSize="1xl"
            textAlign="left"
          >
            <i>University of Illinois Urbana-Champaign</i>
          </Text>
          <HStack w="100%" spacing="20px" m="5%">
            <Link
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <AiFillGithub
                color="white"
                size="40px"
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
                size="40px"
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
                size="40px"
                onClick={() =>
                  window.open("mailto: divijgarg04@gmail.com", "_Medium")
                }
              />
            </Link>
          </HStack>
          <Text w="100%" color="white" textAlign="left">
            I am a project driven, hardworking student interested in
            applications of mathematics in computer science.{" "}
          </Text>
        </VStack>
        <Image
          objectFit="cover"
          borderColor="white"
          src="Images/divij.jpg"
          alt="Photo of Divij Garg"
          borderRadius="50%"
          padding="2px"
          ml="5%"
          dropShadow="lg"
          w="35%"
        />
      </HStack>
    );
  } else if (isMobile) {
    return (
      <VStack w="90%" spacing="20%" m="5%">
        <VStack
          spacing="1px"
          bgColor="transparent"
          height="100%"
          w="100%"
          justifyContent="center"
        >
          <Text w="100%" color="white" textAlign="center">
            Hey there!
          </Text>
          <Text w="100%" color="white" textAlign="center">
            My name is
          </Text>
          <Heading w="100%" color="white" textAlign="center" fontSize="7xl">
            Divij Garg
          </Heading>
          <Text
            w="100%"
            color="white"
            margin="auto"
            fontSize="1xl"
            textAlign="center"
          >
            <i>B.S. Computer Science & Mathematics</i>
          </Text>
          <Text
            w="100%"
            color="white"
            margin="auto"
            fontSize="1xl"
            textAlign="center"
          >
            <i>University of Illinois Urbana-Champaign</i>
          </Text>
          <HStack w="100%" spacing="20px" m="5%" justifyContent="center">
            <Link
              transition="transform 0.2s"
              _hover={{ transform: "scale(1.05)" }}
            >
              <AiFillGithub
                color="white"
                size="40px"
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
                size="40px"
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
                size="40px"
                onClick={() =>
                  window.open("mailto: divijgarg04@gmail.com", "_Medium")
                }
              />
            </Link>
          </HStack>
          <Text w="100%" color="white" textAlign="center">
            I am a project driven, hardworking student interested in
            applications of mathematics in computer science.{" "}
          </Text>
          <Image
            objectFit="cover"
            borderColor="white"
            src="Images/divij.jpg"
            alt="Photo of Divij Garg"
            borderRadius="50%"
            padding="5%"
            dropShadow="lg"
            w="75%"
          />
        </VStack>
      </VStack>
    );
  } else return null;
}
