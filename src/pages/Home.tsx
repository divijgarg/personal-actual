import {
  Box,
  Heading,
  Text,
  VStack,
  useBreakpointValue
  
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Nav from "../components/Navbar";
//@ts-ignore
import { Carousel } from 'react-carousel-minimal';

function Home() {
  
  const imageUrls = [
    {
      image: "https://i.postimg.cc/CKg5Hxzh/IMG-4598.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://i.postimg.cc/HxfQQ78S/IMG-5018.jpg",
      caption: "Scotland"
    },
    {
      image: "https://i.postimg.cc/rw85CTzL/IMG-5026.jpg",
      caption: "Darjeeling"
    }
  ];
  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  if(isDesktop) {
  return (
    <Box
      maxW="100%"
      overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgImage= "url(https://i.postimg.cc/CKg5Hxzh/IMG-4598.jpg)"
      // bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://lh3.googleusercontent.com/kDwuMCmRDl18xwAvKGTe4KBTRc3WcIrmyYSW_JALaoC1fku6Gqg8rcgyv5dSoGLKUIRdgz8ER9S4E-sYWr622yr4920_toE_KzXGgfPaLbtiWW3QnEkWN345q9SdXvAPJTqCvFfukBekpMHycQb0KrWYssYkDqgj7u2XR6jZMkivJc_eUvwq8H7bvVAPfIcqWwrhGxIzcow5pC3YaUt2ZDojo8xn0NhtUYInMg_qIiXsEmWjkojYfCWvB-sv7gR3YUM_9_yxr5qAnjEXfVIn25Ur6Biz0H7FAhyoxM1Xd0_z64yUyoxcMzgnOHxXvPrYgPln4g2L-bgwkOVZAGZT2XIkYraJAymOJyPO1npK2XPdw8jM2QpItaQc1BrRqrWB3cPHvpC-5ralIYrAeGypWR4nshZNtsV_r4NWSpXPSRakYYonXQ2Xxrp0jvF7swAS990t73AYhjHFR6b1axqbk96wdP6mH__-IJLdVLLSppDlWeDzpACP8RY9y6cZUYoLpyDKsgzTg25RoHSg6BtQSymlAcXzRRZPqwkSqSIy7Rc1A6t8VnGP14I6prqfgzP9K5v9dno4EuZOQ-nZ5rEyhCyuIzdpu2QCVPlEt137NLvHA0FipdyqZ2QWDg1Rya0jyT9ceehZqCESzcbeWxmrqobhJlRaQ8D3JWkn5LYwrx4Fr5X1tjlVyAiVJZ67jKoToj78vSdSlInlhV1MxHS0-fCIhlrfudYXW2mjzOxDC6ZAo6jlbFRdcg3qyvnkPxf8HcQAy1ywnnRS3VF-nV3S_ye79gbo8EDJXm6TEdniImi7aGhYzWzKWx6SL_BlrQBAZaY6vJUFObVuDfXbuN5qRoQFUSZfMZLR7RZZ-npQyxxdHOjEDIYWOrykirftU84xzM2LbegUJTe9fiVT27y0wYe261vGN2-N4-7dAQx5-yixQN3ZerNo1khQzUVM35SRbutK-F8BxIPH_MqLetNKu29-x2VlCYMY2iv4DSvStE18iST0SVbFcquEf1wFWAuMbaa9puXAqnqp3_re9JU6QBP9kNi4qkJmMe_DHSwktqtJ68bh8P8A=w1458-h972-s-no?authuser=0)"
    >
      <Nav />
      <VStack width="100%" h="100%">

        <Box
          height="100%"
          width="60%"
        >
          <Heading color = "white" fontSize="80px" marginTop="20%" textAlign="center">
            Hi, I'm Divij Garg.
          </Heading>
          <Text
            marginTop="20px"
            fontSize="30px"
            marginBottom="30px"
            textAlign="center"
            color = "white"
          >
            Researcher | Writer | Photographer
          </Text>
        </Box>
      </VStack>
    </Box>
  );
  } 
  else if(isMobile) {
    return (
      <Box
        maxW="100%"
        overflow="hidden"
        minH="100vh"
        // bgPos="center"
        // bgAttachment="fixed"
        // bgRepeat="no-repeat"
        // bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
      >
        <Nav />
        <VStack width="100%" h="100%">
          <Box
            height="100%"
            width="80%"
          >
            <Heading color = "white" fontSize="60px" marginTop="40%" textAlign="center">
              Hi, I'm Divij Garg.
            </Heading>
            <Text
              marginTop="20px"
              fontSize="20px"
              marginBottom="50px"
              textAlign="center"
              color = "white"
            >
              Researcher | Writer | Developer
            </Text>
          </Box>
        </VStack>
      </Box>
    );
  }
  return null;
}
export default Home;
