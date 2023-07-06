import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Photo from "./pages/Photo";
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
