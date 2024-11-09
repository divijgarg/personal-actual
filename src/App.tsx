import { Route, Routes } from "react-router-dom";
// import AboutMe from "./archive/AboutMe";
// import Home from "./pages/Home";
import Home2 from "./pages/Home2";
export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} /> */}
      <Route path="/" element={<Home2 />} />
    </Routes>
  );
}
