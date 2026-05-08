import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import PortfolioGallery from "./components/PortfolioGallery";
import Capabilities from "./components/Capabilities";
import Volunteer from "./components/Volunteer";
import Chargers from "./components/Chargers";
import Experience from "./components/Experience";
import Marquee from "./components/Marquee";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Coursework from "./components/Coursework";
import Campaigns from "./components/Campaigns";
import Press from "./components/Press";

const Home = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="App grain bg-[#0a0a0a] text-[#e9e3d6] selection:bg-[#c9a961]">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <PortfolioGallery />
        <Capabilities />
        <Volunteer />
        <Chargers />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;