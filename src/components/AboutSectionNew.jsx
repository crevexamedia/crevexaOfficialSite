// src/components/AboutSectionNew.jsx
import React from "react";

const AboutSectionNew = () => {
  return (
    <section id="about-genz" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-6">
          Why{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Crevexa?
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
          We’re not your typical agency. Crevexa is built for the fast-moving,
          hyper-digital world where trends change overnight and attention spans
          are shorter than a TikTok reel. 🚀
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">
              ⚡ Instant Impact
            </h3>
            <p className="text-gray-400 mt-2">
              No waiting months — we focus on fast, visible wins that fuel
              long-term growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">📱 Gen-Z First</h3>
            <p className="text-gray-400 mt-2">
              From Reels to trends, we get what clicks with today’s audience.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">
              🎨 Bold Creativity
            </h3>
            <p className="text-gray-400 mt-2">
              Strategies that don’t just sell — they spark conversations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">📊 Data + Gut</h3>
            <p className="text-gray-400 mt-2">
              A perfect mix of analytics and creativity that drives smart
              decisions.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">
              🌍 Always Evolving
            </h3>
            <p className="text-gray-400 mt-2">
              We stay ahead of the curve so your brand never feels outdated.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/60 hover:bg-slate-700/60 transition-all">
            <h3 className="text-xl font-semibold text-white">
              🤝 Real Partnerships
            </h3>
            <p className="text-gray-400 mt-2">
              We don’t “work for you” — we work{" "}
              <span className="font-semibold text-white">with</span> you.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-3xl font-bold text-white mb-4">Our Vibe ✨</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Crevexa is where data meets creativity, where ideas meet execution,
            and where brands go from average to unforgettable. We’re here to
            make your brand not just grow, but{" "}
            <span className="font-semibold text-white">stand out</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionNew;
