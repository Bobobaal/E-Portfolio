import { Routes, Route, Navigate } from "react-router-dom";

//Pages
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import CV from "./Pages/CV";

//Eigen components
import ScrollToTop from "./Components/General/ScrollToTop";
import NavBar from './Components/General/NavBar';
import Footer from "./Components/Footer/Footer";

export default function App(){
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<AboutMe />} />
        <Route path="/projecten" element={<Projects />} />
        <Route path="/CV" element={<CV />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
}