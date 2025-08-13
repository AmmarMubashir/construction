const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Links */}
        <div className="flex justify-center items-center space-x-8 mb-6">
          <a
            href="#services"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            Contact Us
          </a>
        </div>

        {/* Divider Line */}
        <div className="border-t border-gray-300 mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            Copyright © 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
