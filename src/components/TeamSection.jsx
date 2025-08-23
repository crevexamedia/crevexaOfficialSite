import { Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

const TeamSection = () => {
  // Team data
  const teamMembers = [
    {
      name: "Utkarsh Pasi",
      role: "Co-Founder",
      image: "",
      bio: "",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "https://www.instagram.com/lmao.utkarshhhhh/",
      },
    },
    {
      name: "Swayam nanaware",
      role: "Co-Founder",
      image: "",
      bio: "",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
    {
      name: "Sanmit rankhambe",
      role: "Co-Founder",
      image: "",
      bio: "",
      social: { linkedin: "#", twitter: "#", instagram: "#" },
    },
  ];

  return (
    <>
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
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        className="w-8 h-8 bg-slate-700 hover:bg-pink-500 rounded-full flex items-center justify-center transition-colors"
                      >
                        <Instagram className="h-4 w-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
