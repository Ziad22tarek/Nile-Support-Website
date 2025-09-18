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
      className="relative w-full overflow-hidden flex items-center py-3 sm:py-4 lg:py-6
        min-h-[240px] sm:min-h-[280px] md:min-h-[300px] lg:min-h-[320px]"
    >
      {/* Darker Background */}
      <div className="absolute inset-0">
        {/* Dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>

        {/* Glowing accent circles (smaller & closer) */}
        <div className="absolute top-16 right-12 w-44 h-44 bg-gradient-to-br from-[#1B8A8A]/28 to-[#00D4AA]/16 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 left-10 w-36 h-36 bg-gradient-to-br from-[#A4D65E]/22 to-[#FF8C42]/12 rounded-full blur-3xl"></div>

        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-8">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.18) 1px, transparent 0)`,
            backgroundSize: '46px 46px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="py-1 sm:py-2 lg:py-3">
          {/* Header (reduced) */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
              Comprehensive Real Estate
              <span className="block bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
                Support Services
              </span>
            </h2>

            <p className="text-sm sm:text-sm lg:text-base xl:text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed font-medium">
              Tailored solutions designed specifically for real estate professionals who want to scale their business efficiently
            </p>
          </div>

          {/* Services Grid - compact */}
          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            {/* First row - 3 compact services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {services.slice(0, 3).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="group">
                    <div className="relative bg-gray-800/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gray-600/30 hover:border-[#1B8A8A]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 h-full">
                      <div className="flex flex-col items-center text-center space-y-2 mb-2">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-sm lg:text-base font-bold text-white mb-1 group-hover:text-[#00D4AA] transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-xs lg:text-sm text-gray-200 leading-snug font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full h-0.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Second row - 1 service (centered, narrower) */}
            <div className="flex justify-center">
              <div className="w-full max-w-xl">
                {(() => {
                  const service = services[3];
                  const Icon = service.icon;
                  return (
                    <div className="group">
                      <div className="relative bg-gray-800/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gray-600/30 hover:border-[#1B8A8A]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 h-full">
                        <div className="flex flex-col items-center text-center space-y-2 mb-2">
                          <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md`}>
                            <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm sm:text-sm lg:text-base font-bold text-white mb-1 group-hover:text-[#00D4AA] transition-colors duration-200">
                              {service.title}
                            </h3>
                            <p className="text-xs sm:text-xs lg:text-sm text-gray-200 leading-snug font-medium">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        <div className={`w-full h-0.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Third row - 3 compact services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {services.slice(4, 7).map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index + 4} className="group">
                    <div className="relative bg-gray-800/60 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-gray-600/30 hover:border-[#1B8A8A]/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 h-full">
                      <div className="flex flex-col items-center text-center space-y-2 mb-2">
                        <div className={`flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-200 shadow-md`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm sm:text-sm lg:text-base font-bold text-white mb-1 group-hover:text-[#00D4AA] transition-colors duration-200">
                            {service.title}
                          </h3>
                          <p className="text-xs sm:text-xs lg:text-sm text-gray-200 leading-snug font-medium">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full h-0.5 bg-gradient-to-r ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200`}></div>
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