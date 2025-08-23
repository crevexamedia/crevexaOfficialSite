import React from "react";
import Navbar from "../components/Navbar.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import AboutSection from "../components/AboutSection.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import Footer from "../components/Footer.jsx";
// import PortfolioSection from "./PortfolioSection.jsx";

const WholeSite = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroBanner />

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServiceSection />

      {/* Portfolio Section */}
      {/* <PortfolioSection /> */}

      {/* Team Section */}
      <TeamSection />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WholeSite;
