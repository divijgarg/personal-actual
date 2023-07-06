import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Nav from "../components/Navbar";
import PhotoCard from "../components/PhotoCard";
import PhotoCardMobile from "../components/PhotoCardMobile";
interface Photo {
  title: string;
  imageUrl: string;
}
const photos: Photo[] = [
  { imageUrl: "https://i.postimg.cc/3xncNxS8/IMG-4956.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/85rKZB1c/IMG-4961.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/pLGsx1ry/IMG-4966.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/HsmZtyFW/IMG-4979.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/0N4XGH1h/IMG-4982.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/mkfdJzDw/IMG-4987.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/MZV3RDPr/IMG-4992.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/4N1823T6/IMG-5009.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/bJbgxyT2/IMG-5015.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/KY1JYr3f/IMG-5017.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/tJj5DKSv/IMG-5018.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/FFyG1KzM/IMG-5025.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/0j0C4Vhk/IMG-5026.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/c4TmM5QT/IMG-5052.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/K8z59rfb/IMG-5083.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/QCBVvCFf/IMG-4384.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/vHVcz1FB/IMG-4422.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Y0Jj77gM/IMG-4442.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/qBYNysFS/IMG-4458.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/9MgrxZQ4/IMG-4503.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/FH0k9YDq/IMG-4557.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/43Z7nX03/IMG-4564.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/85z7BtNQ/IMG-4577.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/SKyRkDX2/IMG-4578.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/kgy8QVKS/IMG-4590.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/pTmFMq7Q/IMG-4599.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Bt9Zyg9v/IMG-4607.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/yd2S104M/IMG-4620.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Qt3RRyVw/IMG-5141.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/8ckxCfRb/IMG-5142.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/rmNvcNrm/IMG-5148.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Df5tM5hp/IMG-5164.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/j28mnqvY/IMG-5197.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/9Mrh2F9S/IMG-4698.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/XqbQ8sn8/IMG-4709.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/qqVZFkx2/IMG-4725.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/x8hBnvQN/IMG-4731.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Nf8ZWrVF/IMG-4738.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/SQ6ZsbGt/IMG-4799.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/q7WmtkYW/IMG-4805.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/25tt4dqc/IMG-4848.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/gjz3jQYf/IMG-4856.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/gjg8Zsjr/IMG-4866.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Gtt9ZC3h/IMG-4879.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/HLtxnxVk/IMG-4891.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/FHzbW8r1/IMG-3025.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/0NJYxSJs/IMG-3032.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/J0RZbdYr/IMG-3042.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/vZKrphTh/IMG-3048.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/763SJyVt/IMG-3060.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/tJDPDt8h/IMG-3068.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/FR5jKKjJ/IMG-3071.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/wT0ckgdS/IMG-3121.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/HWtQpdjV/IMG-3140.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/Qx41TmQD/IMG-3158.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/C1sfLshW/IMG-3170.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/kg28FSsb/IMG-3219.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/XYt52v1D/IMG-3222.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/zvDHLH33/IMG-3255.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/br6D1Y2g/IMG-3269.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/wvpmpGpX/IMG-3285.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/HL5yFCfW/IMG-3294.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/wxFsC2bN/IMG-3314.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/DyZbnGtM/IMG-3332.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/bNBSJJPN/IMG-3350.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/pdDmqJFp/IMG-3355.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/D0zmfVYX/IMG-3360.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/N0hy6zL3/IMG-3366.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/V6mdT0q4/IMG-3381.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/0yKMJs5G/IMG-3434.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/RFdNzCGm/IMG-3459.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/zvPvVd9P/IMG-3482.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/jdLCGbfV/IMG-3524.jpg", title: "Photo" },
  { imageUrl: "https://i.postimg.cc/L4ynCXnB/IMG-3683.jpg", title: "Photo" },
];

function Photo() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  if (isDesktop) {
    return (
      <Box
        w="100%"
        minH="100vh"
        bgPos="center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        bgColor="black"
        justifyContent="center"
      >
        <Nav />

        <Box w="100%" justifyContent="center">
          <Box
            bg="white"
            boxShadow="lg"
            borderRadius="sm"
            overflow="hidden"
            position="relative"
            bgColor="black"
          >
            <Image
              src="https://i.postimg.cc/rpmFgvYT/IMG-1090.jpg"
              objectFit="cover"
              w="100%"
            />
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
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                fontWeight="bold"
                mb="2"
              >
                a collection of photos I've taken with my DSLR
              </Text>
            </Box>
            )
          </Box>

          <Grid
            marginTop="20px"
            marginLeft="2%"
            marginRight="2%"
            templateColumns="repeat(3, 1fr)"
            gap={5}
          >
            {photos.map((photo) => (
              <GridItem>
                <PhotoCard title={photo.title} img={photo.imageUrl} />
              </GridItem>
            ))}
          </Grid>
          <Box h="40px"></Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        w="100%"
        minH="100vh"
        bgPos="center"
        bgAttachment="fixed"
        bgRepeat="no-repeat"
        bgColor="black"
        justifyContent="center"
      >
        <Nav />
        <Box w="100%" justifyContent="center">
          <Flex
            bg="white"
            boxShadow="lg"
            borderRadius="sm"
            overflow="hidden"
            position="relative"
            bgColor="black"
            align="center"
            justify="center"
            w="100%"
          >
            <Image
              src="https://i.postimg.cc/8CqwtVPf/IMG-1090.jpg"
              objectFit="cover"
              borderWidth="4px"
              borderColor="white"
              borderStyle="solid"
              alignContent="center"
              borderRadius="50%"
              w="95%"
            />
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
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                fontWeight="bold"
                w="60%"
                align="center"
                mb="2"
              >
                a collection of photos I've taken with my DSLR
              </Text>
            </Box>
            )
          </Flex>

          <Box textAlign="center">
            <Grid
              marginTop="40px"
              // w="100%"
              // alignContent="center"
              // marginLeft="4%"
              // marginRight="4%"
              templateColumns="repeat(1, 1fr)"
              gap={5}
            >
              {photos.map((photo) => (
                <GridItem>
                  <PhotoCardMobile title={photo.title} img={photo.imageUrl} />
                </GridItem>
              ))}
            </Grid>
          </Box>
          <Box h="40px"></Box>
        </Box>
      </Box>
    );
  }
}
export default Photo;
