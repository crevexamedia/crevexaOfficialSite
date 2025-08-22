import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronRight,
  Star,
  Play,
  TrendingUp,
  Target,
  Users,
  Award,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Zap,
  Globe,
  Smartphone,
  BarChart3,
  CalendarCheck,
  Scissors,
  UserRound,
  Camera,
} from "lucide-react";

const WholeSite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Navigation data
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "team", label: "Team" },
  ];

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

  // Team data
  const teamMembers = [
    {
      name: "Utkarsh Pasi",
      role: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=300&h=300&fit=crop&crop=face",
      bio: "XYZ",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Swayam nanaware",
      role: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Former Google Ads specialist with expertise in performance marketing",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sanmit rankhambe",
      role: "Co-Founder",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Award-winning designer with a passion for brand storytelling",
      social: { linkedin: "#", instagram: "#" },
    },
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Crevexa
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-slate-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800 rounded-lg mt-2 mb-5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 w-full text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Connect With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-gray-600 hover:border-gray-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-800 flex items-center justify-center group">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </button>
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
                    <h3 className="text-xl font-semibold">
                      Campaign Performance
                    </h3>
                    <div className="flex items-center space-x-2 text-green-400">
                      <TrendingUp className="h-5 w-5" />
                      <span className="text-sm">+45% this month</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-400">
                        2.4M
                      </div>
                      <div className="text-sm text-gray-400">Impressions</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-purple-400">
                        12.5%
                      </div>
                      <div className="text-sm text-gray-400">CTR</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-green-400">
                        $4.2K
                      </div>
                      <div className="text-sm text-gray-400">Conversions</div>
                    </div>
                    <div className="bg-slate-700/50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-pink-400">
                        380%
                      </div>
                      <div className="text-sm text-gray-400">ROAS</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Our</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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

                    <button className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/40 hover:to-purple-600/40 border border-slate-600 hover:border-slate-500 text-white py-3 rounded-lg font-medium transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Success</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
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
      </section> */}

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Meet Our</span>{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The visionaries driving Crevexa forward. Our team blends strategy,
              creativity, and technology to build impactful growth stories.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl border border-slate-700 hover:border-slate-600 transition-all duration-300 group hover:transform hover:scale-105 text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-slate-600 group-hover:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-medium">{member.role}</p>
                  </div>

                  <p className="text-gray-300 text-sm">{member.bio}</p>

                  <div className="flex justify-center space-x-3">
                    {member.social.linkedin && (
                      <button className="w-8 h-8 bg-slate-700 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                        <Linkedin className="h-4 w-4 text-white" />
                      </button>
                    )}
                    {member.social.twitter && (
                      <button className="w-8 h-8 bg-slate-700 hover:bg-blue-400 rounded-full flex items-center justify-center transition-colors">
                        <Twitter className="h-4 w-4 text-white" />
                      </button>
                    )}
                    {member.social.instagram && (
                      <button className="w-8 h-8 bg-slate-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors">
                        <Instagram className="h-4 w-4 text-white" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        {/* <section id="contact" className="py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Let's</span>{" "}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Connect
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your digital presence? Get in touch with our
                team and let's discuss how we can accelerate your growth.
              </p>
            </div>
          </div>
        </section> */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Crevexa
              </div>
              <p className="text-gray-400">
                Driving business growth with next-gen digital marketing
                strategies since 2025.
              </p>
              <p className="text-gray-400">Follow Us</p>
              <div className="flex space-x-4">
                <button className="cursor-pointer w-10 h-10 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
                <button className="cursor-pointer w-10 h-10 bg-slate-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
                <button className="cursor-pointer w-10 h-10 bg-slate-800 hover:bg-pink-500 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
                <button className="cursor-pointer w-10 h-10 bg-slate-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-2">
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Influencer Marketing
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Performance Marketing
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Campaign Management
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Editing Services
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-2">
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Our Team
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Careers
                </button>
                <button className="cursor-pointer block text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact Us</h3>

              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-300 hover:text-white cursor-pointer">
                        crevexamedia@gmail.com
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Call Us
                      </h3>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                      <p className="text-gray-300">Mon - Fri, 9AM - 6PM EST</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Visit Us
                      </h3>
                      <p className="text-gray-300">123 Digital Avenue</p>
                      <p className="text-gray-300">New York, NY 10001</p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Crevexa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </button>
              <button className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </button>
              <button className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WholeSite;
