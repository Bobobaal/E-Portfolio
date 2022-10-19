import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import AboutMe from "./Pages/AboutMe";
import NavBar from './Components/NavBar';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<AboutMe />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
}