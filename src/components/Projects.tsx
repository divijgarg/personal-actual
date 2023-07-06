import {
  Box,
  Grid,
  GridItem,
  Heading,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
import Project from "./HoverImageCard";
import ProjectMobile from "./HoverImageCardMobile";
function Projects() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const projects = [
    {
      title: "Battleship Simulation",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Ph2jSF9KjFlFuLLvSWxXDA.jpeg",
      desc: "Python simulation of the game to analyze probabilities.",
      gitref: "https://github.com/divijgarg/Battleship",
      midref:
        "https://medium.com/@divijgarg04/a-painful-analysis-of-battleship-ea5a462f0d15",
      showMid: true,

      fulldesc:
        "This project was a full simulation of the board game Battleship, from board design to the player strategy. I designed this project in Python to track data regarding the game, which I published on my Medium page. The simulation has two computer players play the game with each other with an optimized game algorithm numerous times to retrieve data.",
    },
    {
      title: "Monopoly Simulation",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*yZnH0Eoo45tbNL5krS6FKw.jpeg",
      desc: "Python simulation of the board game for game-strategy optimization.",
      gitref: "https://github.com/divijgarg/finalMonopolySimulation",
      midref:
        "https://medium.com/@divijgarg04/the-mathematics-of-monopoly-1e45d5c1402b",
      showMid: true,

      fulldesc:
        "This project was a full simulation of the board game Monopoly, including all aspects of the game. I designed this project in Python to track data regarding the game, which I published on my Medium page. The simulation has a computer player go through the game to track the most common spaces landed on within the board, aiming to help players with strategy",
    },
    {
      title: "UNO Simulation",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*lFUxH6LIRmQObPxs3_D-uA.jpeg",
      desc: "Python simulation of the card game to reveal best strategies.",
      gitref: "https://github.com/divijgarg/unoSimulation",
      midref: "https://medium.com/@divijgarg04/uno-89fb53dfa716",
      showMid: true,

      fulldesc:
        "This project was a full simulation of the card game UNO, from card logic to the player strategy. I designed this project in Python to track data regarding the game, which I published on my Medium page. The simulation has multiple computer players play the game with each other with an optimized game algorithm numerous times to retrieve data, ultimately trying to reveal information and trends within the game..",
    },
    {
      title: "Risk Simulation",
      img: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*SEeUkEru-sfE0r1XT7lfNg.jpeg",
      desc: "Python simulation of the board game to statistically compute attack probabilities.",
      gitref: "https://github.com/divijgarg/riskSimulator",
      midref:
        "https://medium.com/@divijgarg04/the-mathematics-of-risk-64fe4525d327",
      showMid: true,

      fulldesc:
        "This project was a simulation of the board game Risk, aiming to reveal attack/defense strategy. I designed this project in Python to track data regarding the game, which I published on my Medium page. The simulation allows users to calculate probability of winning given number of attack/defense troops and can aid players within a game.",
    },
    {
      title: "Trucycle",
      img: "https://ezop.com/wp-content/uploads/2021/04/dos-donts-of-recycling-wisconsin-750x510.jpg",
      desc: "Android application to resolve the problem of improper recycling.",
      gitref: "https://github.com/divijgarg/Trucycle",
      midref: "https://github.com/divijgarg/Trucycle",
      showMid: false,
      fulldesc:
        "This project was a group Android application designed to help users with improper recycling. Given any barcode of an object, users can scan the item and find nearby recycling centers for those places.  This app was entered in the Congressional App Challenge and won 3rd place.",
    },
    {
      title: "Word Search",
      img: "https://media.istockphoto.com/id/177299085/photo/magnetic-words-collection.jpg?s=612x612&w=0&k=20&c=F-yfE938vdWdsg7qIH0fkmbccbzMjcoYUYAHBpLBZn4=",
      desc: "Simple Javascript version of a WordSearch game.",
      gitref: "https://github.com/divijgarg/WordSearch",
      midref: "https://github.com/divijgarg/Trucycle",
      showMid: false,
      fulldesc:
        "This project is the game Word Search, allowing users to find words within a gameboard. It was coded in JavaScript, and the game allows users to select words on the board and submit them to see if they correctly found the word.",
    },
  ];

  if (isDesktop) {
    return (
      <Box width="100%">
        <VStack spacing="50px" width="100%">
          <Heading
            width="90%"
            textAlign="right"
            textDecoration="underline"
            fontSize="4xl"
            color="white"
            fontWeight="bold"
            mb={18}
          >
            recent projects
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={20}>
            <GridItem>
              <Project
                title={projects[0].title}
                img={projects[0].img}
                desc={projects[0].desc}
                midref={projects[0].midref}
                gitref={projects[0].gitref}
                fulldesc={projects[0].fulldesc}
                showMid={projects[0].showMid}
              />
            </GridItem>
            <GridItem>
              <Project
                title={projects[1].title}
                img={projects[1].img}
                desc={projects[1].desc}
                midref={projects[1].midref}
                gitref={projects[1].gitref}
                fulldesc={projects[1].fulldesc}
                showMid={projects[1].showMid}
              />
            </GridItem>
            <GridItem>
              <Project
                title={projects[2].title}
                img={projects[2].img}
                desc={projects[2].desc}
                midref={projects[2].midref}
                gitref={projects[2].gitref}
                fulldesc={projects[2].fulldesc}
                showMid={projects[2].showMid}
              />
            </GridItem>
            <GridItem>
              <Project
                title={projects[3].title}
                img={projects[3].img}
                desc={projects[3].desc}
                midref={projects[3].midref}
                gitref={projects[3].gitref}
                fulldesc={projects[3].fulldesc}
                showMid={projects[3].showMid}
              />
            </GridItem>
            <GridItem>
              <Project
                title={projects[4].title}
                img={projects[4].img}
                desc={projects[4].desc}
                midref={projects[4].midref}
                gitref={projects[4].gitref}
                fulldesc={projects[4].fulldesc}
                showMid={projects[4].showMid}
              />
            </GridItem>
            <GridItem>
              <Project
                title={projects[5].title}
                img={projects[5].img}
                desc={projects[5].desc}
                midref={projects[5].midref}
                gitref={projects[5].gitref}
                fulldesc={projects[5].fulldesc}
                showMid={projects[5].showMid}
              />
            </GridItem>
          </Grid>
        </VStack>
        {/* <Footer /> */}
      </Box>
    );
  } else if (isMobile) {
    return (
      <Box width="100%">
        <VStack spacing="50px" width="100%">
          <Heading
            width="90%"
            textAlign="center"
            textDecoration="underline"
            fontSize="4xl"
            color="white"
            fontWeight="bold"
            mb={18}
          >
            recent projects
          </Heading>
          <Grid templateColumns="repeat(1, 1fr)" gap={10}>
            <GridItem>
              <ProjectMobile
                title={projects[0].title}
                img={projects[0].img}
                desc={projects[0].desc}
                midref={projects[0].midref}
                gitref={projects[0].gitref}
                fulldesc={projects[0].fulldesc}
                showMid={projects[0].showMid}
              />
            </GridItem>
            <GridItem>
              <ProjectMobile
                title={projects[1].title}
                img={projects[1].img}
                desc={projects[1].desc}
                midref={projects[1].midref}
                gitref={projects[1].gitref}
                fulldesc={projects[1].fulldesc}
                showMid={projects[1].showMid}
              />
            </GridItem>
            <GridItem>
              <ProjectMobile
                title={projects[2].title}
                img={projects[2].img}
                desc={projects[2].desc}
                midref={projects[2].midref}
                gitref={projects[2].gitref}
                fulldesc={projects[2].fulldesc}
                showMid={projects[2].showMid}
              />
            </GridItem>
            <GridItem>
              <ProjectMobile
                title={projects[3].title}
                img={projects[3].img}
                desc={projects[3].desc}
                midref={projects[3].midref}
                gitref={projects[3].gitref}
                fulldesc={projects[3].fulldesc}
                showMid={projects[3].showMid}
              />
            </GridItem>
            <GridItem>
              <ProjectMobile
                title={projects[4].title}
                img={projects[4].img}
                desc={projects[4].desc}
                midref={projects[4].midref}
                gitref={projects[4].gitref}
                fulldesc={projects[4].fulldesc}
                showMid={projects[4].showMid}
              />
            </GridItem>
            <GridItem>
              <ProjectMobile
                title={projects[5].title}
                img={projects[5].img}
                desc={projects[5].desc}
                midref={projects[5].midref}
                gitref={projects[5].gitref}
                fulldesc={projects[5].fulldesc}
                showMid={projects[5].showMid}
              />
            </GridItem>
          </Grid>
        </VStack>
      </Box>
    );
  }
  return null;
}
export default Projects;
