import React from 'react';
import { MapPin, Users, DollarSign, Shield, Database } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: MapPin,
      title: "Specialized in U.S. Real Estate Market",
      description: "Deep understanding of real estate processes, regulations, and market dynamics",
      color: "from-[#FF8C42] to-[#1B8A8A]"
    },
    {
      icon: Users,
      title: "Trained & Culturally Adapted Agents",
      description: "Professional agents who understand your market and communicate effectively",
      color: "from-[#1B8A8A] to-[#A4D65E]"
    },
    {
      icon: DollarSign,
      title: "Flexible Plans",
      description: "Hourly or per appointment pricing options that scale with your business needs",
      color: "from-[#A4D65E] to-[#FF8C42]"
    },
    {
      icon: Shield,
      title: "TCPA/DNC Compliance",
      description: "Full regulatory compliance and protection with secure, monitored systems",
      color: "from-[#2C5F7C] to-[#1B8A8A]"
    },
    {
      icon: Database,
      title: "Off-Market Deals & CRM Integration",
      description: "Access to exclusive off-market properties and seamless CRM integration for better lead management",
      color: "from-[#00D4AA] to-[#2C5F7C]"
    }
  ];

  return (
    <section id="why-choose-us" className="relative min-h-screen sm:min-h-[650px] sm:max-h-[750px] lg:min-h-[700px] lg:max-h-[800px] overflow-hidden flex items-center py-4 sm:py-6 lg:py-8">
      {/* Unique Background Design */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#A4D65E]/5"></div>
        
        {/* Diagonal stripes pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #1B8A8A,
              #1B8A8A 2px,
              transparent 2px,
              transparent 20px
            )`
          }}></div>
        </div>
        
        {/* Curved sections */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <path d="M0,400 Q300,200 600,400 T1200,400 L1200,0 L0,0 Z" fill="url(#whyChooseGradient)" fillOpacity="0.1"/>
            <path d="M0,600 Q300,400 600,600 T1200,600 L1200,800 L0,800 Z" fill="url(#whyChooseGradient2)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="whyChooseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1B8A8A" />
                <stop offset="50%" stopColor="#A4D65E" />
                <stop offset="100%" stopColor="#FF8C42" />
              </linearGradient>
              <linearGradient id="whyChooseGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF8C42" />
                <stop offset="50%" stopColor="#2C5F7C" />
                <stop offset="100%" stopColor="#1B8A8A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-[#00D4AA]/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 bg-[#FF8C42]/10 rounded-lg rotate-45 animate-float-delayed"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#1B8A8A]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-[#2C5F7C]/10 rounded-lg rotate-12 animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 w-full">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 mx-4 lg:mx-8 xl:mx-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 leading-tight">
            Experience the Difference with
            <span className="block bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] bg-clip-text text-transparent">
              Specialized Expertise
            </span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            We're not just another call center. We're real estate specialists who understand your industry inside and out.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-5 mb-4 sm:mb-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group text-center relative"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Background card */}
                <div className="relative bg-white/80 backdrop-blur-md p-3 sm:p-4 lg:p-5 rounded-3xl border border-gray-200 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-105 h-full shadow-lg">
                  {/* Icon container */}
                  <div className="relative mb-3 sm:mb-4 mx-auto w-fit">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.color} rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className={`absolute -inset-3 bg-gradient-to-r ${feature.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    {/* Pulse ring */}
                    <div className={`absolute -inset-5 bg-gradient-to-r ${feature.color} rounded-full opacity-0 group-hover:opacity-20 animate-ping`}></div>
                  </div>
                  
                  <h3 className="text-xs sm:text-sm lg:text-base font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#1B8A8A] transition-colors duration-300 text-center">
                    {feature.title}
                  </h3>
                  
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#00D4AA] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#FF8C42] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                </div>
                
                {/* Connection line to next item (hidden on mobile) */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#1B8A8A]/30 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>

        
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(50deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;