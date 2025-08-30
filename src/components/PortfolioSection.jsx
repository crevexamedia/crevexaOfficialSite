import { ChevronRight } from "lucide-react";
import React from "react";

const PortfolioSection = () => {
  // Portfolio data
  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Growth Campaign",
      category: "PPC & SEO",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      results: "+300% Revenue Growth",
      description: "Comprehensive digital strategy for luxury fashion brand",
    },
    {
      id: 2,
      title: "SaaS Lead Generation",
      category: "Content Marketing",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      results: "500% More Qualified Leads",
      description: "B2B lead generation campaign for enterprise software",
    },
    {
      id: 3,
      title: "Restaurant Chain Expansion",
      category: "Social Media",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=250&fit=crop",
      results: "200% Social Engagement",
      description: "Multi-location social media management and local SEO",
    },
    {
      id: 4,
      title: "Tech Startup Branding",
      category: "Brand Strategy",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop",
      results: "$2M Series A Funding",
      description: "Complete brand identity and digital presence overhaul",
    },
  ];
  return (
    <>
      <section id="portfolio" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Success</span>{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real businesses. Real results. See how Crevexa turns growth goals
              into market victories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-102"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {item.category}
                    </div>
                    <div className="text-green-400 font-bold text-lg">
                      {item.results}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <button className="text-blue-400 hover:text-blue-300 font-medium flex items-center group">
                    View Case Study
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
