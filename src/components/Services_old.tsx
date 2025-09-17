import React, { useState } from 'react';
import { Phone, Users, FileText, Database, BarChart3, TrendingUp, Shield } from 'lucide-react';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Phone,
      title: "Inbound & Outbound Real Estate Calls",
      description: "Get the best of both worlds: affordable support and premium service. Our agents understand your market, handle every call with professionalism, and focus on what matters most — growing your client base and protecting your reputation.",
      color: "from-[#1B8A8A] to-[#A4D65E]",
      bgColor: "from-[#1B8A8A]/10 to-[#A4D65E]/10"
    },
    {
      icon: Users,
      title: "Lead List Generation & Selling Lists",
      description: "We provide high-quality, targeted prospect lists designed specifically for the U.S. real estate market. Our comprehensive lead management system ensures fewer wrong numbers, more qualified prospects, and a steady flow of opportunities for your business.",
      color: "from-[#FF8C42] to-[#1B8A8A]",
      bgColor: "from-[#FF8C42]/10 to-[#1B8A8A]/10"
    },
    {
      icon: BarChart3,
      title: "Quality Assurance & Call Monitoring",
      description: "Every call is tracked and reviewed to ensure professionalism, accuracy, and consistency. Our QA team monitors conversations, provides coaching, and ensures your brand voice is always represented at the highest standard.",
      color: "from-[#A4D65E] to-[#FF8C42]",
      bgColor: "from-[#A4D65E]/10 to-[#FF8C42]/10"
    },
    {
      icon: TrendingUp,
      title: "Continuous Improvement & Performance Tracking",
      description: "We don't just make calls — we measure results. Using detailed analytics and performance dashboards, we identify what works, optimize scripts, and continuously refine our approach. This means more qualified leads, fewer missed opportunities, and steady growth for your business.",
      color: "from-[#2C5F7C] to-[#1B8A8A]",
      bgColor: "from-[#2C5F7C]/10 to-[#1B8A8A]/10"
    },
    {
      icon: Shield,
      title: "Transparent Reporting & Client Feedback Loop",
      description: "You'll receive clear, detailed reports on call outcomes, lead conversion, and customer interactions. We also welcome your feedback to align our team with your goals, ensuring full accountability and continuous satisfaction.",
      color: "from-[#1B8A8A] to-[#2C5F7C]",
      bgColor: "from-[#1B8A8A]/10 to-[#2C5F7C]/10"
    },
    {
      icon: Database,
      title: "CRM Management",
      description: "Turn your CRM into a growth engine. Our team manages data entry, updates, and reporting so you always have accurate, real-time information. With seamless integration into your workflow, you can focus on building relationships while we keep your pipeline running smoothly.",
      color: "from-[#1B8A8A] to-[#2C5F7C]",
      bgColor: "from-[#1B8A8A]/10 to-[#2C5F7C]/10"
    },
    {
      icon: FileText,
      title: "Administrative Support",
      description: "We take care of back-office tasks, scheduling, and document management so your team can stay focused on selling and servicing clients. Our streamlined support keeps your operations organized, efficient, and stress-free.",
      color: "from-[#A4D65E] to-[#FF8C42]",
      bgColor: "from-[#A4D65E]/10 to-[#FF8C42]/10"
    }
  ];

  const activeService = services[activeTab];
  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="relative min-h-screen sm:min-h-[650px] sm:max-h-[750px] lg:min-h-[700px] lg:max-h-[800px] overflow-hidden flex items-center py-4 sm:py-6 lg:py-8">
      {/* Enhanced Dark Background */}
      <div className="absolute inset-0">
        {/* Dark base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
        
        {/* Glowing accent circles - smaller */}
        <div className="absolute top-16 right-16 w-48 h-48 bg-gradient-to-br from-[#1B8A8A]/30 to-[#00D4AA]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-40 h-40 bg-gradient-to-br from-[#A4D65E]/25 to-[#FF8C42]/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-[#2C5F7C]/20 to-transparent rounded-full blur-3xl"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
        
        {/* Header - Compact */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Comprehensive Real Estate
            <span className="block bg-gradient-to-r from-[#00D4AA] to-[#A4D65E] bg-clip-text text-transparent">
              Support Services
            </span>
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-white/90 max-w-4xl mx-auto leading-relaxed font-medium">
            Tailored solutions designed specifically for real estate professionals who want to scale their business efficiently
          </p>
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 max-w-6xl mx-auto">
          
          {/* Service Tabs - Left Side */}
          <div className="lg:w-2/5">
            <div className="space-y-1 sm:space-y-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isActive = activeTab === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-2 sm:p-3 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'bg-gray-700/80 border-l-2 border-[#00D4AA] shadow-md' 
                        : 'bg-gray-800/40 hover:bg-gray-700/60 border-l-2 border-transparent hover:border-gray-600'
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? `bg-gradient-to-r ${service.color} shadow-md` 
                          : 'bg-gray-600 group-hover:bg-gray-500'
                      }`}>
                        <Icon className="h-3 w-3 sm:h-4 sm:w-4 lg:h-4 lg:w-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-xs sm:text-sm lg:text-sm font-bold transition-colors duration-300 leading-tight ${
                          isActive ? 'text-[#00D4AA]' : 'text-white group-hover:text-gray-200'
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Service Content - Right Side */}
          <div className="lg:w-3/5">
            <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl border border-gray-600/40 p-3 sm:p-4 h-48 sm:h-56 lg:h-64 flex flex-col justify-center">
              
              {/* Service Header */}
              <div className="text-center mb-2 sm:mb-3">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r ${activeService.color} rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-xl`}>
                  <ActiveIcon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-white" />
                </div>
                
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1 sm:mb-2 leading-tight">
                  {activeService.title}
                </h3>
              </div>
              
              {/* Service Description */}
              <div className="flex-1 flex items-center">
                <p className="text-xs sm:text-sm lg:text-sm text-gray-200 leading-relaxed font-medium text-center">
                  {activeService.description}
                </p>
              </div>
              
              {/* Service Footer */}
              <div className="text-center mt-2 sm:mt-3">
                <div className={`w-full h-0.5 bg-gradient-to-r ${activeService.color} rounded-full`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;