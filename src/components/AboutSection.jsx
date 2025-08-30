import { Award, CheckCircle, Zap, Rocket, Lightbulb } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-white">About</span>{" "}
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Crevexa
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                At Crevexa, we’re not just another digital marketing agency —
                we’re a team of innovators, storytellers, and strategists
                dedicated to building brands that thrive in the modern world. We
                blend creativity with data, and technology with human insight,
                to craft campaigns that truly make an impact.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Founded in 2025, Crevexa was built on one simple belief:
                businesses deserve strategies that actually work. We partner
                with ambitious brands to unlock their full potential, delivering
                meaningful growth without the guesswork.
              </p>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Zap className="h-8 w-8 text-blue-400" />
                <h3 className="font-semibold text-white">Speed to Impact</h3>
                <p className="text-sm text-gray-400">
                  Agile strategies with rapid execution that deliver real
                  results — fast.
                </p>
              </div>
              <div className="space-y-2">
                <Award className="h-8 w-8 text-purple-400" />
                <h3 className="font-semibold text-white">Proven Approach</h3>
                <p className="text-sm text-gray-400">
                  A structured process built on creativity, innovation, and
                  measurable outcomes.
                </p>
              </div>
              <div className="space-y-2">
                <Rocket className="h-8 w-8 text-pink-400" />
                <h3 className="font-semibold text-white">Future-Ready</h3>
                <p className="text-sm text-gray-400">
                  Leveraging the latest tools and trends to keep your brand
                  ahead of the curve.
                </p>
              </div>
              <div className="space-y-2">
                <Lightbulb className="h-8 w-8 text-yellow-400" />
                <h3 className="font-semibold text-white">
                  Creative Excellence
                </h3>
                <p className="text-sm text-gray-400">
                  Blending strategy with bold ideas to build memorable brand
                  experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  Empowering businesses with next-gen digital strategies that
                  fuel growth, deliver measurable impact, and help brands stay
                  ahead in an ever-evolving world.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Insight-Powered
                      </h4>
                      <p className="text-sm text-gray-400">
                        Every decision backed by data, not assumptions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        All-in-One Growth
                      </h4>
                      <p className="text-sm text-gray-400">
                        From strategy to execution — a complete digital growth
                        ecosystem.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-purple-400 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white">
                        Radical Transparency
                      </h4>
                      <p className="text-sm text-gray-400">
                        Clear reporting, honest communication, and zero
                        guesswork.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
