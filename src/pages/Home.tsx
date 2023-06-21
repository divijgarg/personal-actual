import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://i.postimg.cc/CKg5Hxzh/IMG-4598.jpg",
    "https://i.ibb.co/nBQfRH9/IMG-3286.jpg",
    "https://i.ibb.co/TkpTWY3/IMG-3434.jpg",
    "https://i.ibb.co/K9s3dt1/IMG-3459.jpg",
    "https://i.ibb.co/gZ9xYyP/IMG-3683.jpg",
    "https://i.ibb.co/DLvGY5G/IMG-4607.jpg",
    "https://i.ibb.co/rx5MM4B/IMG-4856.jpg",
    "https://i.ibb.co/9qBRPv2/IMG-4891.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);
  if (isDesktop) {
    return (
      <Box
        maxW="100%"
        overflow="hidden"
        // maxH="100%"
        minH="100vh"
        bgPos="center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgColor="black"
        // bgImage="url(https://i.postimg.cc/CKg5Hxzh/IMG-4598.jpg)"
        // bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://lh3.googleusercontent.com/kDwuMCmRDl18xwAvKGTe4KBTRc3WcIrmyYSW_JALaoC1fku6Gqg8rcgyv5dSoGLKUIRdgz8ER9S4E-sYWr622yr4920_toE_KzXGgfPaLbtiWW3QnEkWN345q9SdXvAPJTqCvFfukBekpMHycQb0KrWYssYkDqgj7u2XR6jZMkivJc_eUvwq8H7bvVAPfIcqWwrhGxIzcow5pC3YaUt2ZDojo8xn0NhtUYInMg_qIiXsEmWjkojYfCWvB-sv7gR3YUM_9_yxr5qAnjEXfVIn25Ur6Biz0H7FAhyoxM1Xd0_z64yUyoxcMzgnOHxXvPrYgPln4g2L-bgwkOVZAGZT2XIkYraJAymOJyPO1npK2XPdw8jM2QpItaQc1BrRqrWB3cPHvpC-5ralIYrAeGypWR4nshZNtsV_r4NWSpXPSRakYYonXQ2Xxrp0jvF7swAS990t73AYhjHFR6b1axqbk96wdP6mH__-IJLdVLLSppDlWeDzpACP8RY9y6cZUYoLpyDKsgzTg25RoHSg6BtQSymlAcXzRRZPqwkSqSIy7Rc1A6t8VnGP14I6prqfgzP9K5v9dno4EuZOQ-nZ5rEyhCyuIzdpu2QCVPlEt137NLvHA0FipdyqZ2QWDg1Rya0jyT9ceehZqCESzcbeWxmrqobhJlRaQ8D3JWkn5LYwrx4Fr5X1tjlVyAiVJZ67jKoToj78vSdSlInlhV1MxHS0-fCIhlrfudYXW2mjzOxDC6ZAo6jlbFRdcg3qyvnkPxf8HcQAy1ywnnRS3VF-nV3S_ye79gbo8EDJXm6TEdniImi7aGhYzWzKWx6SL_BlrQBAZaY6vJUFObVuDfXbuN5qRoQFUSZfMZLR7RZZ-npQyxxdHOjEDIYWOrykirftU84xzM2LbegUJTe9fiVT27y0wYe261vGN2-N4-7dAQx5-yixQN3ZerNo1khQzUVM35SRbutK-F8BxIPH_MqLetNKu29-x2VlCYMY2iv4DSvStE18iST0SVbFcquEf1wFWAuMbaa9puXAqnqp3_re9JU6QBP9kNi4qkJmMe_DHSwktqtJ68bh8P8A=w1458-h972-s-no?authuser=0)"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            objectFit="cover"
            overflow="hidden"
            alt={`Carousel Image ${index + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            // sizes="cover"
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 1s ease-in"
          />
        ))}

        <Nav />

        <VStack h="auto" width="100%" position="absolute">
          <Box height="100%" width="60%">
            <Heading
              color="white"
              fontSize="80px"
              marginTop="20%"
              textAlign="center"
            >
              Hi, I'm Divij Garg.
            </Heading>

            <Text
              marginTop="20px"
              fontSize="30px"
              // marginBottom="30px"
              textAlign="center"
              color="white"
            >
              <Link
                href="https://github.com/divijgarg"
                isExternal
              >
                {" "}
                Researcher{" "}
              </Link>{" "}
              -
              <Link href="https://medium.com/@divijgarg04" isExternal>
                {" "}
                Writer{" "}
              </Link>{" "}
              -
              <Link
                href="https://www.instagram.com/divij_photography/"
                isExternal
              >
                {" "}
                Photographer{" "}
              </Link>
            </Text>
            <Text
              marginTop="20%"
              fontSize="10px"
              textColor="white"
              w="100%"
              textAlign="center"
            >
              Photos taken and website designed by Divij Garg.
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  } else if (isMobile) {
    return (
      <Box
        maxW="100%"
        overflow="hidden"
        minH="100vh"
        h="100%"
        bgPos="center"
        bgAttachment="fixed"
        bgSize="cover"
        bgColor="black"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            overflow="hidden"
            alt={`Carousel Image ${index + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 1s ease-in"
          />
        ))}
        <Nav />
        <VStack overflow="hidden" height="70%" width="100%" position="absolute">
          <Box height="100%" width="80%">
            <Heading
              color="white"
              fontSize="60px"
              marginTop="40%"
              textAlign="center"
            >
              Hi, I'm Divij Garg.
            </Heading>

            <Text
              marginTop="20px"
              fontSize="30px"
              textAlign="center"
              color="white"
            >
              <Link href="https://github.com/divijgarg" isExternal>
                {" "}
                Researcher{" "}
              </Link>{" "}
              -
              <Link href="https://medium.com/@divijgarg04" isExternal>
                {" "}
                Writer{" "}
              </Link>{" "}
              -
              <Link
                href="https://www.instagram.com/divij_photography/"
                isExternal
              >
                {" "}
                Photographer{" "}
              </Link>
            </Text>
            <Text
              marginTop="20%"
              marginBottom="10%"
              fontSize="10px"
              textColor="white"
              w="100%"
              textAlign="center"
            >
              Photos taken and website designed by Divij Garg.
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  }
  
  return null;

}
export default Home;

