import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Education from "./pages/education/Education";
import Contact from "./pages/contact/Contact";
import Motion from "./components/Motion";

function App() {
  return (
    <>
      <Motion yValue={-20}>
        <Navbar />
      </Motion>
      <Motion yValue={20}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </Motion>
    </>
  );
}

export default App;
