import { Box, Divider, useBreakpointValue, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar2";
import Intro from "../components/intro";
import Experience from "../components/Experience2";
import Footer from "../components/Footer";
import "./data.js"
import WeatherButton from "./data.js";

function Weather() {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  if (isDesktop) {
    return (
      <WeatherButton />
    );
  } else if (isMobile) {
    return (
      <WeatherButton />
    );
  }

  return null;
}
export default Weather;
