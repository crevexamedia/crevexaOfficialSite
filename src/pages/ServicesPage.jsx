import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ServiceSection from "../components/ServiceSection.jsx";
import WhyServicesMatter from "../components/WhyServicesMatter.jsx";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <ServiceSection />
      <WhyServicesMatter />
      <Footer />
    </div>
  );
};

export default ServicesPage;
