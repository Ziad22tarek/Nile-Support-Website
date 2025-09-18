import React from 'react';
import { Phone, Users, FileText, Database, BarChart3, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Inbound & Outbound Real Estate Calls",
      description: "Professional call handling and lead generation with trained agents who understand your market",
      color: "from-[#1B8A8A] to-[#A4D65E]",
      bgColor: "from-[#1B8A8A]/10 to-[#A4D65E]/10"
    },
    {
      icon: Users,
      title: "Lead List Generation & Selling Lists",
      description: "High-quality, targeted prospect lists and lead management systems that reduce wrong numbers and boost opportunities.",
      
      color: "from-[#1B8A8A] to-[#2C5F7C]",
      bgColor: "from-[#1B8A8A]/10 to-[#2C5F7C]/10"
    },
    {
      icon: BarChart3,
      title: "Call Monitoring & Quality Assurance",
      description: "Every call reviewed for professionalism and accuracy, with coaching to ensure brand consistency.",
      color: "from-[#A4D65E] to-[#FF8C42]",
      bgColor: "from-[#A4D65E]/10 to-[#FF8C42]/10"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement & Performance Tracking",
      description: "Detailed analytics and script optimization to increase lead quality, reduce missed opportunities, and drive growth.",
      color: "from-[#2C5F7C] to-[#1B8A8A]",
      bgColor: "from-[#2C5F7C]/10 to-[#1B8A8A]/10"
    },
    {
      icon: Shield,
      title: "Transparent Reporting & Client Feedback Loop",
      description: "Clear reports and active feedback loops that keep you informed and ensure full accountability.",
      color: "from-[#FF8C42] to-[#1B8A8A]",
      bgColor: "from-[#FF8C42]/10 to-[#1B8A8A]/10"
    },
    {
      icon: Database,
      title: "CRM Management",
      description: "Accurate CRM updates and reporting with seamless integration to strengthen client follow-ups.",
      color: "from-[#1B8A8A] to-[#2C5F7C]",
      bgColor: "from-[#1B8A8A]/10 to-[#2C5F7C]/10"
    },
    {
      icon: FileText,
      title: "Administrative Support",
      description: "Efficient back-office support and document management to streamline operations and free up your time.",
       color: "from-[#A4D65E] to-[#FF8C42]",
      bgColor: "from-[#A4D65E]/10 to-[#FF8C42]/10"
    }
  ];

  return (
    <section
      id="services"
      className="relative w-full overflow-hidden flex items-center py-6 sm:py-8 lg:py-10
        min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]"
    >
      {/* Darker Background */}
      <div className="absolute inset-0">
        {/* Dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
        
        {/* Glowing accent circles */}
        <div className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-br from-[#1B8A8A]/30 to-[#00D4AA]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-br from-[#A4D65E]/25 to-[#FF8C42]/15 rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="py-2 sm:py-4 lg:py-6">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Comprehensive Real Estate
              <span className="block bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
                Support Services
              </span>
            </h2>
            
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium">
              Tailored solutions designed specifically for real estate professionals who want to scale their business efficiently
            </p>
          </div>

          {/* Services Grid - 3-1-3 Layout */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* First row - 3 compact services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative bg-gray-800/60 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-3xl border border-gray-600/40 hover:border-[#1B8A8A]/60 transition-all duration-400 hover:shadow-2xl hover:shadow-[#1B8A8A]/30 hover:-translate-y-1 h-full">
                      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-4">
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-xl`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second row - 1 service (centered and wider) */}
            <div className="flex justify-center">
              <div className="w-full max-w-2xl">
                {(() => {
                  const service = services[3];
                  const Icon = service.icon;
                  return (
                    <div className="group">
                      <div className="relative bg-gray-800/60 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-3xl border border-gray-600/40 hover:border-[#1B8A8A]/60 transition-all duration-400 hover:shadow-2xl hover:shadow-[#1B8A8A]/30 hover:-translate-y-1 h-full">
                        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-4">
                          <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-xl`}>
                            <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors duration-200">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Third row - 3 compact services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {services.slice(4, 7).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index + 4} className="group">
                    <div className="relative bg-gray-800/60 backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-3xl border border-gray-600/40 hover:border-[#1B8A8A]/60 transition-all duration-400 hover:shadow-2xl hover:shadow-[#1B8A8A]/30 hover:-translate-y-1 h-full">
                      <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 mb-4">
                        <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-xl`}>
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white mb-2 group-hover:text-[#00D4AA] transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-sm lg:text-base text-gray-200 leading-relaxed font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full h-1 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;