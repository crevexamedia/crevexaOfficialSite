import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
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

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Services</h3>
              <div className="space-y-2">
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  Influencer Marketing
                </p>
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  Performance Marketing
                </p>
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  Campaign Management
                </p>
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  Editing Services
                </p>
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  Freelance Models
                </p>
                <p className="cursor-default block text-gray-400 hover:text-white transition-colors">
                  On-demand Photographers
                </p>
              </div>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <div className="space-y-2">
                <Link
                  to={`/about`}
                  className="cursor-pointer block text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to={`/team`}
                  className="cursor-pointer block text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
                <Link
                  to={`/careers`}
                  className="cursor-pointer block text-gray-400 hover:text-white transition-colors"
                >
                  Careers
                </Link>
                <Link
                  to={`/`}
                  className="cursor-pointer block text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
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
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Crevexa. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => openModal("privacy")}
                className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal("terms")}
                className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </button>
              <button
                onClick={() => openModal("cookie")}
                className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ===== MODALS ===== */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl max-w-lg w-full relative">
            <h2 className="text-2xl font-bold mb-4">
              {activeModal === "privacy" && "Privacy Policy"}
              {activeModal === "terms" && "Terms of Service"}
              {activeModal === "cookie" && "Cookie Policy"}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {activeModal === "privacy" &&
                "We take your privacy seriously. This policy explains how we handle your personal data to build a foundation of trust. We collect and use your information only when necessary to provide and improve our services, ensuring that it is protected with robust security measures. Our commitment is to be transparent about what data we collect, why we need it, and how we use it responsibly. We believe in empowering you with control over your information, ensuring you always know how we're working to protect your privacy."}
              {activeModal === "terms" &&
                "When you use our services, you're agreeing to a simple, clear set of terms. These are designed to keep things fair and transparent for everyone. Our terms outline the rules of the road, clarifying what you can expect from us and what we expect from you. They are a mutual agreement to ensure our platform remains a positive and secure space. We’ve kept them straightforward so you can easily understand your rights and responsibilities as we work together to provide you with a great experience."}
              {activeModal === "cookie" &&
                "Our website uses cookies to make your browsing experience seamless and more personal. Think of them as small tools that help us remember your preferences and understand how you interact with our site. This helps us optimize performance, customize content to your interests, and analyze what's working. We put you in charge of your data, giving you full control to manage your cookie preferences whenever you want. You can decide what information is shared, ensuring you get the best possible experience on your own terms."}
            </p>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
