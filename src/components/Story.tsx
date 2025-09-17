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
    <section id="story" className="relative overflow-hidden flex items-center pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24 lg:py-32">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F7C] via-[#1B4B5A] to-[#0F2A35]"></div>
        
        {/* Animated wave overlay */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-20 sm:h-24" viewBox="0 0 1200 320" preserveAspectRatio="none">
            <path d="M0,160 Q300,100 600,160 T1200,160 L1200,320 L0,320 Z" fill="rgba(27, 138, 138, 0.1)" className="animate-pulse"/>
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-16 right-16 w-16 h-16 bg-[#00D4AA]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-12 w-12 h-12 bg-[#FF8C42]/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 bg-[#A3D82F]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center">
        
        {/* Main Grid: Story Content + Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-8 lg:mb-12">
          
          {/* Left: Story Content */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A] bg-clip-text text-transparent">
                From Vision to Reality
              </span>
            </h3>
            
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              Founded by Muhammad Nassef, Nile Support LLC brings together a highly skilled team of English-fluent real estate agents based in Egypt, each seasoned and deeply experienced in the U.S. real estate market.
            </p>
            
            <p className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed font-medium">
              Our agents combine industry expertise with cultural understanding, ensuring seamless communication, professionalism, and results that meet the highest standards of American real estate businesses.
            </p>
          </div>

          {/* Right: Founder & Co-Founder */}
          <div className="relative space-y-6">
            {/* Founder Highlight */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white/30 shadow-lg">
                    <img 
                      src="/Founder.jpeg" 
                      alt="Muhammad Nassef - Founder & CEO" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/80 rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Muhammad Nassef</h4>
                  <p className="text-[#00D4AA] font-bold text-base sm:text-lg mb-3">Founder & CEO</p>
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-medium">
                    "Building bridges between U.S. real estate professionals and world-class talent"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Co-Founder Highlight */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/30 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 text-center sm:text-left">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-3 border-white/30 shadow-lg">
                    <img 
                      src="/Co-Founder.jpg" 
                      alt="Anan Khaled - Co-Founder & Head of Operations" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A] rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">Anan Khaled</h4>
                  <p className="text-[#A4D65E] font-bold text-base sm:text-lg mb-3">Co-Founder & Head of Operations</p>
                  <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-medium">
                    "Leading operations excellence from Egypt with deep market expertise"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#A4D65E]/20 rounded-full blur-lg animate-pulse"></div>
          </div>
        </div>

        {/* Team Section - Bottom */}
        <div className="relative mt-8">
          {/* Team Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {teamRoles.map((role, index) => {
              const Icon = role.icon;
              const isMainAgent = index === 0;
              
              return (
                <div key={index} className="group relative">
                  <div className={`bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/30 hover:border-[#00D4AA]/50 transition-all duration-500 hover:shadow-xl hover:shadow-[#00D4AA]/20 hover:-translate-y-1 h-full ${isMainAgent ? 'bg-gradient-to-br from-[#FF8C42]/15 to-[#00D4AA]/15 border-[#FF8C42]/40' : ''}`}>
                    
                    {/* Icon and Count */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                        isMainAgent 
                          ? 'bg-gradient-to-r from-[#FF8C42] to-[#FF8C42]/80' 
                          : 'bg-gradient-to-r from-[#00D4AA] to-[#1B8A8A]'
                      }`}>
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>
                      
                      <div className={`px-3 py-1 rounded-full text-sm sm:text-base font-bold ${
                        isMainAgent 
                          ? 'bg-[#FF8C42]/20 text-[#FF8C42]' 
                          : 'bg-[#00D4AA]/20 text-[#00D4AA]'
                      }`}>
                        {role.count}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white text-center leading-tight">
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