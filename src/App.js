import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import WhyUs from "./components/whyus/WhyUs";
import OurDevelopments from "./components/ourdevelopments/OurDevelopments";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header Link={Link} />
      <Routes>
        <Route path="/">
          <Route
            path="/"
            element={
              <>
                <Hero />
                <WhyUs />
                <OurDevelopments />
              </>
            }
          />
          <Route path="/WhyUs" element={<WhyUs />} />
          <Route path="/OurDevelopments" element={<OurDevelopments />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
