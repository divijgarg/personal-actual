import {
  HStack,
  Heading,
  Image,
  Link,
  Text,
  VStack,
  useBreakpointValue,
  Box,
  keyframes,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
function generateParabolaKeyframesVertex(
  A: number,
  h: number,
  k: number,
  maxRotate: number = 120,
  steps: number = 20
) {
  let frames = "";

  for (let i = 0; i <= steps; i++) {
    const pct = (i / steps) * 100;
    const x = pct;
    const y = A * Math.pow(x - h, 2) + k;
    const rot = (pct / 100) * maxRotate;

    frames += `
      ${pct.toFixed(2)}% {
        transform: translate(${x.toFixed(2)}vw, ${y.toFixed(2)}vh)
                   rotate(${rot.toFixed(2)}deg);
      }
    `;
  }

  return keyframes`${frames}`;
}

const parabolaWithRotate = generateParabolaKeyframesVertex(
  /* A */ 0.05,
  /* h */ 20,
  /* k */ -160,
  /* maxRotate */ 120,
  /* steps */ 50
);

export default function Intro() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <>
      {isDesktop ? (
        <HStack w="90%" spacing="10%" m="5%" mt="10%">
          <VStack
            spacing="1px"
            bgColor="transparent"
            height="100%"
            w="100%"
            justifyContent="left"
          >
            <Text w="100%" color="white" textAlign="left">
              Hey there! My name is
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
              applications of mathematics and computer science towards the space
              industry. On campus, I have served as the president of{" "}
              <Link
                href="https://illinoismun.org"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Illinois Model UN
              </Link>{" "}
              and as the software lead for the Illinois Space Society's{" "}
              <Link
                href="https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Human Lander Challenge
              </Link>{" "}
              team. Currently, I am the Secretary-General for{" "}
              <Link
                href="https://muni.illinoismun.org"
                isExternal
                fontWeight="bold"
                color="white"
              >
                MUNI XXVIII
              </Link>{" "}
              and lead the Guidance, Navigation, and Control team for{" "}
              <Link
                href="https://www.illinoisspacesociety.org/spaceshot"
                isExternal
                fontWeight="bold"
                color="white"
              >
                ISS's spaceshot rocket.
              </Link>{" "}
              This summer, I am a program management intern at{" "}
              <Link
                href="https://varda.com"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Varda Space.
              </Link>{" "}
              🚀
            </Text>
          </VStack>

          <Image
            src="Images/divij.jpg"
            alt="Photo of Divij Garg"
            borderRadius="full"
            border="2px solid rgba(255, 255, 255, 0.3)"
            p={2}
            ml="5%"
            boxShadow="xl"
            objectFit="cover"
            w="35%"
          />
        </HStack>
      ) : isMobile ? (
        <VStack w="90%" spacing="20%" m="5%" mt="15%">
          <VStack
            spacing="1px"
            bgColor="transparent"
            height="100%"
            w="100%"
            justifyContent="center"
          >
            <Text w="100%" color="white" textAlign="center">
              Hey there! My name is
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
              applications of mathematics and computer science towards the space
              industry. On campus, I have served as the president of{" "}
              <Link
                href="https://illinoismun.org"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Illinois Model UN
              </Link>{" "}
              and as the software lead for the Illinois Space Society's{" "}
              <Link
                href="https://hulc.nianet.org/wp-content/uploads/2025-HuLC-University-of-Illinois-Urbana-Champaign-Technical-Paper.pdf"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Human Lander Challenge
              </Link>{" "}
              team. Currently, I am the Secretary-General for{" "}
              <Link
                href="https://muni.illinoismun.org"
                isExternal
                fontWeight="bold"
                color="white"
              >
                MUNI XXVIII
              </Link>{" "}
              and lead the Guidance, Navigation, and Control team for{" "}
              <Link
                href="https://www.illinoisspacesociety.org/spaceshot"
                isExternal
                fontWeight="bold"
                color="white"
              >
                ISS's spaceshot rocket.
              </Link>{" "}
              This summer, I am a program management intern at{" "}
              <Link
                href="https://varda.com"
                isExternal
                fontWeight="bold"
                color="white"
              >
                Varda Space.
              </Link>{" "}
              🚀
            </Text>
            <Image
              src="Images/divij.jpg"
              alt="Photo of Divij Garg"
              borderRadius="full"
              border="2px solid rgba(255, 255, 255, 0.3)"
              p={2}
              boxShadow="xl"
              objectFit="cover"
              w="75%"
              mt="10%"
            />
          </VStack>
        </VStack>
      ) : null}

      {
        <>
          {[...Array(120)].map((_, i) => (
            <Box
              key={i}
              position="fixed"
              top="80vh"
              left="0"
              w="3px"
              h="3px"
              bg="white"
              opacity={1 - i * 0.02}
              borderRadius="full"
              zIndex={-2}
              pointerEvents="none"
              sx={{
                animation: `${parabolaWithRotate} 10s linear forwards`,
                animationDelay: `${i * 0.005}s`,
              }}
            />
          ))}
        </>
      }
    </>
  );
}
