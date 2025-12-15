import React from 'react';
import { Globe, Users, Target, TrendingUp, Zap, ArrowRight } from 'lucide-react';

const Story = () => {
  const teamRoles = [
    { role: "Trained Agents", icon: Users, count: "100+" },
    { role: "Team Leaders", icon: Target, count: "10+" },
    { role: "QA Specialists", icon: TrendingUp, count: "5+" },
    { role: "Trainers", icon: Globe, count: "4+" }
  ];

  return (
    <section
      id="story"
      className="relative overflow-hidden flex items-center pt-12 pb-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-12 lg:py-16"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F7C] via-[#1B4B5A] to-[#0F2A35]"></div>
        
        {/* Animated wave overlay */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-12 sm:h-16" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path d="M0,160 Q300,100 600,160 T1200,160 L1200,320 L0,320 Z" fill="rgba(27, 138, 138, 0.1)" className="animate-pulse"/>
          </svg>
        </div>
        
        {/* Floating elements (sizes reduced) */}
        <div className="absolute top-12 right-12 w-10 h-10 bg-[#00D4AA]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-12 left-8 w-9 h-9 bg-[#FF8C42]/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#A3D82F]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        
        {/* Main Grid: Story Content + Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-6 lg:mb-10">
          
          {/* Left: Story Content */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A] bg-clip-text text-transparent">
                From Vision to Reality
              </span>
            </h3>
            
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
              Founded by Muhammad Nassef, Nile Support LLC brings together a highly skilled team of English-fluent agents based in Egypt, each seasoned and deeply experienced in the U.S. market.
            </p>
            
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
              Our agents combine industry expertise with cultural understanding, ensuring seamless communication, professionalism, and results that meet the highest standards of American businesses.
            </p>
          </div>

          {/* Right: Founder & Co-Founder */}
          <div className="relative space-y-5">
            {/* Founder Highlight */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/30 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/30 shadow-md">
                    <img 
                      src="/Founder.jpeg" 
                      alt="Muhammad Nassef - Founder & CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/80 rounded-full flex items-center justify-center shadow-md">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-1">Muhammad Nassef</h4>
                  <p className="text-[#00D4AA] font-bold text-sm sm:text-base mb-2">Founder & CEO</p>
                  <p className="text-gray-200 text-xs sm:text-sm lg:text-base font-medium">
                    "Building bridges between U.S. professionals and world-class talent"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Co-Founder Highlight */}
            
            
            {/* Floating accent (reduced) */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#A4D65E]/20 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>

        {/* Team Section - Bottom */}
        <div className="relative mt-6">
          {/* Team Grid (compact) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {teamRoles.map((role, index) => {
              const Icon = role.icon;
              const isMainAgent = index === 0;
              
              return (
                <div key={index} className="group relative">
                  <div className={`bg-white/15 backdrop-blur-md rounded-2xl p-3 sm:p-4 border border-white/30 hover:border-[#00D4AA]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#00D4AA]/20 hover:-translate-y-0.5 h-full ${isMainAgent ? 'bg-gradient-to-br from-[#FF8C42]/15 to-[#00D4AA]/15 border-[#FF8C42]/40' : ''}`}>
                    
                    {/* Icon and Count (smaller) */}
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 ${
                        isMainAgent 
                          ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/80' 
                          : 'bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A]'
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                      </div>
                      
                      <div className={`px-2 py-0.5 rounded-full text-xs sm:text-sm font-bold ${
                        isMainAgent 
                          ? 'bg-[#FF8C42]/20 text-[#FF8C42]' 
                          : 'bg-[#00D4AA]/20 text-[#00D4AA]'
                      }`}>
                        {role.count}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-xs sm:text-sm lg:text-sm font-bold text-white text-center leading-tight">
                      {role.role}
                    </h4>
                    
                    {/* Hover indicator */}
                    <div className={`w-full h-0.5 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                      isMainAgent 
                        ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/60' 
                        : 'bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A]'
                    }`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;