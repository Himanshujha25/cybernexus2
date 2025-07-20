import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom"; // at top

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 text-gray-400 px-6 pt-16 pb-10 border-t border-zinc-800 shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {/* Top: Logo & Socials */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
            {/* Logo & Brand */}
            <div className="flex items-center gap-4">
              <img
                src="/go.png"
                alt="CyberNexus Logo"
                className="h-16 w-16 rounded-2xl object-cover shadow-lg border-2 border-blue-600"
              />
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tight">CyberNexus</h2>
                <p className="text-base mt-1 text-blue-400 font-medium">
                  Where Development Meets Security
                </p>
              </div>
            </div>
            {/* Social Icons */}
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com/CyberNexus-Work" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/cybernexus-work-938006376/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/cybernexus.work/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
                <FaInstagram />
              </a>
              <a href="https://x.com/CyberNexusWeb" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors duration-200">
                <FaTwitter />
              </a>
              <a href="mailto:cybernexus05@gmail.com" className="hover:text-green-400 transition-colors duration-200">
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
            {/* Company */}
            <div>
              <h4 className="text-zinc-100 text-lg font-semibold mb-3 tracking-wide">Company</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition">About Us</a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-400 transition">Our Projects</a>
                </li>
              </ul>
            </div>
            {/* Legal */}
            <div>
              <h4 className="text-zinc-100 text-lg font-semibold mb-3 tracking-wide">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-blue-400 transition">Terms & Conditions</a>
                </li>
              </ul>
            </div>
            {/* Support */}
            <div>
              <h4 className="text-zinc-100 text-lg font-semibold mb-3 tracking-wide">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition">Help Center</a>
                </li>
                <li>
                  <a href="mailto:contact@cybernexus.com" className="hover:text-blue-400 transition">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom: Copyright */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-t border-zinc-800 pt-6">
            <div className="text-center md:text-left text-zinc-500 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-zinc-300">CyberNexus Tech Collective</span>. All rights reserved.
            </div>
            <div className="text-center md:text-right text-zinc-500 text-xs">
              Built with <span className="text-red-400">❤️</span> by full-stack engineers & creators.
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-2xl z-50 border-4 border-white/10"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            whileHover={{ y: -4, scale: 1.08 }}
            aria-label="Back to top"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Footer;
