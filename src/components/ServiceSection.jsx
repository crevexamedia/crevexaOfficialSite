import {
  CalendarCheck,
  Camera,
  CheckCircle,
  Scissors,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";
import React from "react";

const ServiceSection = () => {
  // Services data
  const services = [
    {
      icon: Users,
      title: "Influencer Marketing",
      description:
        "Team up with creators who vibe with your brand and turn followers into loyal fans.",
      features: [
        "Find the right influencers",
        "Collab & content creation",
        "Manage partnerships",
        "Track real impact",
      ],
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description: "Data-driven ads that don’t just look good — they convert.",
      features: [
        "Paid campaigns that scale",
        "Smart conversion tracking",
        "A/B tests that win",
        "Clear ROI reports",
      ],
    },
    {
      icon: CalendarCheck,
      title: "Campaign Management",
      description:
        "Run smooth campaigns from start to finish — no chaos, just results.",
      features: [
        "Plan & organize",
        "Budget like a pro",
        "Live performance tracking",
        "Optimize on the go",
      ],
    },
    {
      icon: Scissors,
      title: "Editing Services",
      description:
        "Polished edits that keep your content sharp, on-brand, and scroll-stopping.",
      features: [
        "Photo retouching",
        "Video edits",
        "Color grading",
        "Consistent brand look",
      ],
    },
    {
      icon: UserRound,
      title: "Freelance Models",
      description: "Authentic faces that bring your brand stories to life.",
      features: [
        "Model scouting",
        "Flexible bookings",
        "Brand-fit matching",
        "Creative portfolios",
      ],
    },
    {
      icon: Camera,
      title: "On-demand Photographers",
      description:
        "Book skilled photographers anytime, anywhere — get shots that stand out.",
      features: [
        "Event Photography",
        "Product Shoots",
        "Lifestyle Photography",
        "Fast Turnaround",
      ],
    },
  ];
  return (
    <>
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful digital marketing solutions built to fuel business growth
              and amplify your online presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <IconComponent className="h-12 w-12 text-blue-400 group-hover:text-purple-400 transition-colors" />
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 border border-slate-600 hover:border-slate-500 text-white py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-gradient-to-r">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;
