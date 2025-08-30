import React from "react";
import { Briefcase, Users, Rocket, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";
import CareersForm from "./CareersForm";

const CareersSection = () => {
  const openings = [
    // {
    //   title: "Digital Marketing Specialist",
    //   location: "Remote / Hybrid",
    //   type: "Full-time",
    //   applyLink: "",
    // },
    // {
    //   title: "Creative Content Designer",
    //   location: "Mumbai, India",
    //   type: "Full-time",
    //   applyLink: "",
    // },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Build Your Career at Crevexa
        </h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          At Crevexa, we believe great work happens when passion meets purpose.
          We’re more than a marketing agency—we’re a team of dreamers, doers,
          and innovators redefining the future of digital experiences. Join us
          to work on exciting projects, grow your skills, and make an impact.
        </p>
      </section>

      {/* Why Join Us */}
      <section className="max-w-6xl mx-auto px-6 py-0 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <Rocket className="h-10 w-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
          <p className="text-gray-400 text-sm">
            We invest in your learning with mentorship, workshops, and hands-on
            projects.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <Users className="h-10 w-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
          <p className="text-gray-400 text-sm">
            Work with a team that values ideas, creativity, and teamwork.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <Briefcase className="h-10 w-10 text-pink-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Exciting Projects</h3>
          <p className="text-gray-400 text-sm">
            Partner with global brands and craft campaigns that make an impact.
          </p>
        </div>
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <HeartHandshake className="h-10 w-10 text-green-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
          <p className="text-gray-400 text-sm">
            Flexible schedules and remote-friendly policies to support you.
          </p>
        </div>
      </section>

      {/* Job Openings */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Current Openings</h2>

        {openings.length > 0 ? (
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-start md:items-center bg-slate-800 p-6 rounded-xl transition-all"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {job.location} • {job.type}
                  </p>
                </div>
                <Link
                  to={job.applyLink}
                  className="mt-4 md:mt-0 bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 rounded-lg font-medium hover:opacity-80 transition"
                >
                  Apply Now
                </Link>
              </div>
            ))}
            {/* CTA */}
            <section className="text-center py-16 px-6 bg-slate-900">
              <h2 className="text-3xl font-bold mb-4">
                Don’t see a role for you?
              </h2>
              <p className="text-gray-300 mb-6">
                We’re always on the lookout for talented individuals. Send us
                your resume and let’s connect.
              </p>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=crevexamedia@gmail.com&su=Job%20Application&body=Hello%20Team,%0D%0A%0D%0APlease%20find%20my%20resume%20attached.%0D%0A%0D%0ARegards,"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-80 transition"
              >
                Send Resume
              </a>
              {/* <CareersForm /> do not uncomment */}
            </section>
          </div>
        ) : (
          <p className="text-gray-400 text-lg italic">
            No openings available at the moment. Check back soon!
          </p>
        )}
      </section>
    </div>
  );
};

export default CareersSection;
