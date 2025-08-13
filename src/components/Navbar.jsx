"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
 // import logo from "../assets/logo.png";

export default function ResponsiveNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or on escape
  //   useEffect(() => {
  //     const handleEscape = (e) => {
  //       if (e.key === "Escape") setIsMenuOpen(false);
  //     };

  //     const handleClickOutside = (e) => {
  //       const target = e.target;
  //       if (
  //         !target.closest("nav") &&
  //         !target.closest('button[aria-label="Toggle menu"]')
  //       ) {
  //         setIsMenuOpen(false);
  //       }
  //     };

  //     if (isMenuOpen) {
  //       document.addEventListener("keydown", handleEscape);
  //       document.addEventListener("click", handleClickOutside);
  //       document.body.style.overflow = "hidden"; // Prevent background scroll
  //     } else {
  //       document.body.style.overflow = "unset";
  //     }

  //     return () => {
  //       document.removeEventListener("keydown", handleEscape);
  //       document.removeEventListener("click", handleClickOutside);
  //       document.body.style.overflow = "unset";
  //     };
  //   }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95  shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 z-50">
          
          <h2>LOGO</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                isScrolled
                  ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {item.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-current transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <button
          className={`hidden lg:block px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            isScrolled
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-[#003084] hover:bg-blue-800 text-[#ffc326]"
          }`}
        >
          Get A Free Quote
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 z-50 ${
            isScrolled
              ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              : "text-white hover:text-gray-200 hover:bg-white/10"
          } ${isMenuOpen ? "bg-white text-gray-700" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="relative w-6 h-6">
            <Menu
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={24}
              className={`absolute inset-0 transition-all duration-300 ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed z-100 top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
          
            <h2>LOGO</h2>
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 py-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-6 py-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium border-l-4 border-transparent hover:border-blue-600"
                onClick={closeMenu}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isMenuOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-gray-200">
            <button
              className="w-full bg-[#003084] hover:bg-blue-800 text-[#ffc326] px-6 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              onClick={closeMenu}
            >
              Get A Free Quote
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
