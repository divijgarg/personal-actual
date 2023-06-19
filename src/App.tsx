import * as React from "react";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Projects from "./components/Projects";
import AboutMe from "./pages/AboutMe";
import Photo from "./pages/Photo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
export default function App() {
  
  return (
    <Routes>
      {/* <NavBar /> */}
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/photos" element={<Photo />} />
    </Routes>
  );
}
