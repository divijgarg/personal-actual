import { Route, Routes } from "react-router-dom";
// import AboutMe from "./archive/AboutMe";
// import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Weather from "./weatherApp/weather";
import NewYear from "./not_pushd/newyear";

export default function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} /> */}
      <Route path="/" element={<Home2 />} />
      <Route path="/hehe" element={<NewYear />} />
      {/* <Route path="/weather" element={<Weather />} /> */}
      </Routes>
  );
}
