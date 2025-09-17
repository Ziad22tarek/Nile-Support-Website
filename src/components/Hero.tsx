import React from 'react';
import { ArrowRight, Phone, Building2, Target, Handshake, Headphones } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[800px] max-h-[900px] sm:min-h-[850px] sm:max-h-[950px] lg:min-h-[900px] lg:max-h-[1000px] overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/hero-section-5.png)',
            imageRendering: 'optimizeQuality'
          }}
        ></div>
        
        {/* Dark overlay for text readability */}
        {/* <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div> */}
      </div>

      {/* Content - Adjusted vertical positioning */}
      <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 sm:pt-44 lg:pt-48">
        <div className="text-center max-w-5xl w-full mx-auto">
          
          {/* Main Headline - Significantly reduced sizes */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Your Trusted Partner for<br />
            <span className="bg-gradient-to-r from-[#A4D65E] to-[#FF8C42] bg-clip-text text-transparent">
              Real Estate Cold Calling
            </span>
          </h1>
          
          {/* Subtitle - Reduced size and margin */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            Professional customer service and lead generation for U.S. real estate professionals
          </p>
          
          {/* CTA Button - Smaller and more compact */}
          <div className="mb-8 sm:mb-12">
            <a 
              href="https://calendly.com/muhammad-nassef-nilesupport/30min?month=2025-09"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8C42]/40 hover:scale-105 relative overflow-hidden shadow-xl inline-block"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Compact Stats - Mobile optimized */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            {[
              { icon: Building2, number: "100+", label: "Clients" },
              { icon: Phone, number: "90K+", label: "Daily Calls" },
              { icon: Target, number: "500+", label: "Daily Hot Leads" },
              { icon: Handshake, number: "60+", label: "Monthly Closed Deals" },
              { icon: Headphones, number: "240+", label: "Agents" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className={`text-center group ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-md rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300 border border-white/40 shadow-2xl">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white drop-shadow-lg" />
                  </div>
                  <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-1 drop-shadow-lg">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-white/90 font-semibold drop-shadow-sm">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;