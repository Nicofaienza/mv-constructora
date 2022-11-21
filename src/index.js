import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FlorisbeloFlat from "./components/FlorisbeloFlat/FlorisbeloFlat.js";
import Avellaneda from "./components/avellaneda/Avellaneda";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/Contact";
import OurDevelopments from "./components/OurDevelopments/OurDevelopments";
import Sponsors from "./components/sponsors/Sponsors";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MuseumFlat from "./components/MuseumFlat/MuseumFlat";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Header Link={Link} />
    <Routes>
      <Route path="/" element={<App Link={Link} />} />
      <Route path="/about-us" element={<AboutUs Link={Link} />} />
      <Route path="/florisbelo-flat" element={<FlorisbeloFlat Link={Link} />} />
      <Route
        path="/avellaneda-flat"
        element={
          <>
            <Avellaneda Link={Link} />
            <Sponsors />
          </>
        }
      />
      <Route path="/museum-flat" element={<MuseumFlat Link={Link} />} />
      <Route
        path="/our-developments"
        element={<OurDevelopments Link={Link} />}
      />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer Link={Link} />
  </Router>
);
