import React from "react";

const WhyServicesMatter = () => {
  const points = [
    {
      title: "Influencer Marketing",
      description:
        "People don’t connect with ads, they connect with people. Influencers bring authenticity, credibility, and reach — turning trust into growth.",
    },
    {
      title: "Performance Marketing",
      description:
        "Every click should lead somewhere. We design campaigns that actually convert, focusing on ROI instead of vanity numbers.",
    },
    {
      title: "Campaign Management",
      description:
        "Great ideas deserve flawless execution. We plan, track, and optimize campaigns so your brand doesn’t just launch — it lands.",
    },
    {
      title: "Editing & Content Glow-Up",
      description:
        "Boring content gets ignored. We craft visuals and edits that are bold, engaging, and impossible to scroll past.",
    },
    {
      title: "Freelance Models",
      description:
        "Faces tell stories that logos can’t. Models bring relatability and human touch, making your brand more approachable.",
    },
    {
      title: "On-Demand Photography",
      description:
        "Moments fade, but content stays. Our photography captures your brand at its best, always fresh and ready to post.",
    },
  ];

  return (
    <section className="py-5 pb-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Why These Services Matter
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Beyond just services, these are growth accelerators — designed to
            make your brand stand out, perform better, and stay ahead in the
            digital race.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-slate-800/60 hover:bg-slate-800 transition-all p-8 rounded-2xl shadow-md border border-slate-700 hover:border-slate-600"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {point.title}
              </h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyServicesMatter;
