import { Routes, Route, Navigate } from "react-router-dom";

//Pages
import AboutMe from "./Pages/AboutMe";
import Projecten from "./Pages/Projecten";

//Components
import ScrollToTop from "./Components/ScrollToTop";
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<AboutMe />} />
        <Route path="/projecten" element={<Projecten />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
}