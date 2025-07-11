import React from 'react';

const Footer = () => {
  return (
    <footer className=" mb-section1  flex justify-center px-4">
      <div className="w-full max-w-screen-xl">
        <div
          className="grid grid-cols-1 gap-y-5 lg:grid-cols-[624px_repeat(3,minmax(0,1fr))] items-start"
          style={{ columnGap: '150px' }} // spacing between columns
        >
          {/* Brand Section */}
          <div className="space-y-4 lg:w-[624px]">
            <div className="w-32 h-12 rounded-lg flex">
              <img
                src={`${import.meta.env.BASE_URL}uploads/logo.png`}
                alt="Helva AI Agent"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md font-poppins font-poppins font-light">
            Revolutionary DeFAI Agent for Polygon & Quickswap Ecosystem.<br/>
            © 2025 Helva. All rights reserved.
            </p>
         
          </div>

          {/* Quick Links */}
          <div className="space-y-2 lg:w-[105px]" >
            <h4 className="text-white font-medium text-lg font-poppins">
              Quick Links
            </h4>
            <div className="space-y-2">
              <a
                href="#what-is"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                What is
              </a>
              <a
                href="#use-cases"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Use-Cases
              </a>
              <a
                href="#partners"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Partners
              </a>
              <a
                href="#roadmap"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Roadmap
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-2 lg:w-[105px]">
            <h4 className="text-white font-medium text-lg font-poppins">
              Support
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Apply for Partnerships
              </a>
            </div>
          </div>

          {/* Contacts */}
          <div className="space-y-2 lg:w-[105px]">
            <h4 className="text-white font-medium text-lg font-poppins">
              Contacts
            </h4>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Telegram
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-white transition-colors font-poppins font-light"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
