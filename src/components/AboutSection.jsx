import { Award, CheckCircle, Zap } from "lucide-react";
import React from "react";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  <span className="text-white">About</span>{" "}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Crevexa
                  </span>
                </h2>
                <p className="text-xl text-gray-300">
                  At Crevexa, we’re more than just another marketing agency —
                  we’re your growth partners. By combining data, creativity, and
                  relentless optimization, we help brands scale their digital
                  presence and achieve measurable results.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300">
                  Founded in 2025, Crevexa has been empowering brands with
                  data-driven strategies, innovative technology, and creative
                  excellence to achieve sustainable growth.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Zap className="h-8 w-8 text-blue-400" />
                  <h3 className="font-semibold text-white">Speed to Impact</h3>
                  <p className="text-sm text-gray-400">
                    Rapid execution that drives results fast.
                  </p>
                </div>
                <div className="space-y-2">
                  <Award className="h-8 w-8 text-purple-400" />
                  <h3 className="font-semibold text-white">
                    Proven Excellence
                  </h3>
                  <p className="text-sm text-gray-400">
                    Trusted by brands, backed by results.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-2xl shadow-xl border border-slate-600">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                  <p className="text-gray-300">
                    Empowering businesses with next-gen digital strategies that
                    fuel growth, deliver measurable impact, and keep brands
                    ahead in a fast-changing world.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-400 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-white">
                          Insight-Powered
                        </h4>
                        <p className="text-sm text-gray-400">
                          Smart moves driven by real data.
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
                          From strategy to execution, we cover it all.
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
                          Clear metrics, zero guesswork.
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
    </>
  );
};

export default AboutSection;
