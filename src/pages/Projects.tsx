import { VStack, Heading, HStack, Box, Grid, GridItem } from "@chakra-ui/react";
import Project from "../components/Project";
import Nav from "../components/Navbar";
function Projects() {
  return (
    <Box
      // width="100%"
      // h="1000px"
      pos="relative"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgAttachment="fixed"
      bgImage="linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 1)),url(https://wallpapercave.com/wp/wp4676576.jpg)"
    >
      <Nav />

      <VStack
        spacing="70px"
        marginTop="50px"
        alignContent="center"
        width="100%"
        h="600px"
      >
        <Heading textAlign="left" fontSize="30px" textDecoration="underline">
          recent projects
        </Heading>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(3, 1fr)"
          gap={20}
        >
          <GridItem>
            <Project
              title="Battleship Simulation"
              img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Ph2jSF9KjFlFuLLvSWxXDA.jpeg"
              desc="Python simulation of the game to analyze probabilities."
              href="https://medium.com/@divijgarg04/a-painful-analysis-of-battleship-ea5a462f0d15"
            />
          </GridItem>
          <GridItem>
            <Project
              title="Monopoly Simulation"
              img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yZnH0Eoo45tbNL5krS6FKw.jpeg"
              desc="Python simulation of the board game for game-strategy optimization."
              href="https://medium.com/@divijgarg04/the-mathematics-of-monopoly-1e45d5c1402b"
            />
          </GridItem>
          <GridItem>
            <Project
              title="UNO Simulation"
              img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lFUxH6LIRmQObPxs3_D-uA.jpeg"
              desc="Python simulation of the card game to reveal best strategies."
              href="https://medium.com/@divijgarg04/uno-89fb53dfa716"
            />
          </GridItem>
          <GridItem>
            <Project
              title="Risk Simulation"
              img="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SEeUkEru-sfE0r1XT7lfNg.jpeg"
              desc="Python simulation of the board game to statistically compute attack probabilities."
              href="https://medium.com/@divijgarg04/the-mathematics-of-risk-64fe4525d327"
            />
          </GridItem>

          <GridItem>
            <Project
              title="Trucycle"
              img="https://ezop.com/wp-content/uploads/2021/04/dos-donts-of-recycling-wisconsin-750x510.jpg"
              desc="Android application to resolve the problem of improper recycling."
              href="https://github.com/divijgarg/Trucycle"
            />
          </GridItem>

          {/* <ProjectDrawer /> */}
        </Grid>
      </VStack>
    </Box>
  );
}
export default Projects;
