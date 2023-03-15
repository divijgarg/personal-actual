import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Home } from "./pages/Home";
export const App = () => (
  // <Home />
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/projects" element={<Projects />}/>
    <Route path="/aboutme" element={<AboutMe />}/>
  </Routes>
);
