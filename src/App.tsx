import { Routes, Route } from "react-router-dom";
import Navbar from "./comonenets/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import Motion from "./comonenets/Motion";

function App() {
  return (
    <>
      <Motion yValue={-20}>
        <Navbar />
      </Motion>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
