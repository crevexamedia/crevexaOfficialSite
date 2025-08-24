import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import AboutSection from "../components/AboutSection.jsx";
import AboutSectionNew from "../components/AboutSectionNew.jsx";

const AboutPage = () => {
  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
        <Navbar />
        <AboutSection />
        <AboutSectionNew />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
