import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
