import { VStack, Box, useBreakpointValue } from "@chakra-ui/react";
import Nav from "../components/Navbar";
interface Photo {
  title: string;
  imageUrl: string;
}

const photos: Photo[] = [
  {
    title: "Photo 1",
    imageUrl: "path/to/photo1.jpg",
  },
  {
    title: "Photo 2",
    imageUrl: "path/to/photo2.jpg",
  },
  {
    title: "Photo 3",
    imageUrl: "path/to/photo3.jpg",
  },
];

function Photo() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Box
      maxW="100%"
      overflow="hidden"
      minH="100vh"
      bgPos="center"
      bgAttachment="fixed"
      bgRepeat="no-repeat"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />
      <div className="photo-container">
        {photos.map((photo) => (
          <div className="photo" key={photo.title}>
            <img src={photo.imageUrl} alt={photo.title} />
            <h3>{photo.title}</h3>
          </div>
        ))}
      </div>
    </Box>
  );
}
export default Photo;
