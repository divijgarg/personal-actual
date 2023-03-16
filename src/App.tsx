import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Blog from "./pages/Blog";
import Story from "./pages/Story";
export default function App() {
  return (
    <Routes>
      {/* <NavBar /> */}
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/aboutme" element={<AboutMe />} />
      {/* <Route path="/story/:ind" element={<Story id = "{index}"/>} /> */}

    </Routes>
  );
}
