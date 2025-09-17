import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gray-900">
      {/* Dark Background with subtle pattern */}
      <div className="absolute inset-0">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute top-10 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-12 h-12 bg-[#1B8A8A]/10 rounded-full blur-lg animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-4 sm:mb-6">
          {/* Company Info */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-3 mb-3 sm:mb-4 group text-center sm:text-left">
              <img 
                src="/Logo.png" 
                alt="Nile Support LLC" 
                className="w-12 h-12 sm:w-14 sm:h-14 transform group-hover:scale-110 transition-all duration-300"
              />
              <span className="text-lg sm:text-xl font-bold text-white">Nile Support LLC</span>
            </div>
            
            <p className="text-white/90 mb-3 sm:mb-4 leading-relaxed text-xs sm:text-sm font-medium text-center sm:text-left">
              Your trusted partner for real estate cold calling and customer service solutions. 
              We help real estate professionals scale their business with expert support services.
            </p>
            
           
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4 relative text-center sm:text-left">
              Let’s Grow Your Business Together
              <div className="absolute -bottom-1 left-1/2 sm:left-0 transform -translate-x-1/2 sm:translate-x-0 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#FF8C42] to-[#1B8A8A]"></div>
            </h4>
            
            <div className="space-y-2 sm:space-y-2.5">
              <div className="flex items-center text-white/70 hover:text-white transition-colors duration-300">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 sm:mr-2.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">info@nilesupport.com</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors duration-300">
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 sm:mr-2.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">+1 (430) 307-4182</span>
              </div>
              <div className="flex items-center text-white/70 hover:text-white transition-colors duration-300">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-2 sm:mr-2.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Serving U.S. Real Estate Market</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/30 pt-3 sm:pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 text-center md:text-left">
            <div className="text-white/80 text-xs sm:text-sm font-medium">
              <p>&copy; 2025 Nile Support LLC. All rights reserved.</p>
            </div>
            
            <div className="text-white/80 text-xs sm:text-sm font-medium">
              <span>Professional Real Estate Support Services</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;