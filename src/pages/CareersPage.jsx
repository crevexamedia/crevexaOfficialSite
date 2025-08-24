import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import CareersSection from "../components/CareersSection.jsx";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navbar />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default CareersPage;
