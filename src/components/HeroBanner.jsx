import { ArrowRight, Play, TrendingUp, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const HeroBanner = () => {
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) {
  //             setIsVisible((prev) => ({
  //               ...prev,
  //               [entry.target.id]: true,
  //             }));
  //           }
  //         });
  //       },
  //       { threshold: 0.1 }
  //     );
  //     const sections = document.querySelectorAll("section[id]");
  //     sections.forEach((section) => observer.observe(section));
  //     return () => observer.disconnect();
  //   }, []);
  const [modalData, setModalData] = useState(null);
  const openModal = (data) => setModalData(data);
  const closeModal = () => setModalData(null);
  return (
    <>
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute inset-0">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Influencer Marketing
                  </span>
                  <br />
                  <span className="text-white text-3xl lg:text-6xl">
                    That Drives Growth
                  </span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  We help ambitious brands win their markets with data-driven
                  strategies, innovative tech, and unmatched creativity.
                </p>
              </div>
              {modalData && (
                <div className="fixed h-full bg-slate-800 bg-opacity-10 inset-0 flex items-center justify-center z-55">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700 rounded-2xl shadow-lg p-6 h-70 md:h-65 w-80 md:w-120 relative">
                    {/* Close Button */}
                    <button
                      onClick={closeModal}
                      className="cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-white"
                    >
                      <X />
                    </button>

                    {/* JSON Content */}
                    <h2 className="text-xl md:text-3xl font-semibold mb-2">
                      {modalData.title}
                    </h2>
                    <p className="text-xl md:text-xl my-4">
                      {modalData.description}
                    </p>

                    {modalData.email && (
                      <p className="text-lg md:text-xl">
                        <strong>Email:</strong> {modalData?.email}
                      </p>
                    )}

                    {modalData.phone && (
                      <p className="text-xl md:text-xl text-gray-700">
                        <strong>Phone:</strong> {modalData?.phone}
                      </p>
                    )}

                    <button
                      onClick={closeModal}
                      className="cursor-pointer mt-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg hover:bg-blue-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() =>
                    openModal({
                      title: "Connect with us",
                      description:
                        "Get in touch with our team. We usually respond within 24 hours.",
                      email: "crevexamedia@gmail.com",
                    })
                  }
                  className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group w-full"
                >
                  Connect With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* Commented the Watch Story button */}
                {/* <button
                  disabled
                  className="cursor-not-allowed border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 flex items-center justify-center group"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </button> */}
              </div>

              {/* Data Showcasing */}
              {/* <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">150+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">
                    $50M+
                  </div>
                  <div className="text-gray-400">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-400">300%</div>
                  <div className="text-gray-400">Avg. Growth</div>
                </div>
              </div> */}
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">What We Deliver</h3>
                    <div className="flex items-center space-x-2 text-green-400">
                      {/* <TrendingUp className="h-5 w-5" />   */}
                      {/* <span className="text-sm">+45% this month</span> */}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">
                        Your Growth
                      </div>
                      <div className="text-sm text-gray-400">Our priority</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">
                        Our Strategy
                      </div>
                      <div className="text-sm text-gray-400">Data-driven</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        Our Approach
                      </div>
                      <div className="text-sm text-gray-400">
                        Full-service digital
                      </div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-pink-400">
                        Our Commitment
                      </div>
                      <div className="text-sm text-gray-400">
                        Long-term success
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroBanner;
