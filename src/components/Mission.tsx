import React from 'react';
import { Target, Users, Headphones, Settings, TrendingUp, Laptop, BarChart3, GraduationCap, ArrowRight, Zap } from 'lucide-react';

const Mission = () => {
  const teamRoles = [
    { role: "40+ Trained Agents", subtitle: "Expandable to 100", icon: Headphones, count: "40+" },
    { role: "Team Leaders", icon: Users, count: "5+" },
    { role: "QA Specialists", icon: Settings, count: "3+" },
    { role: "Trainers", icon: GraduationCap, count: "4+" },
    { role: "IT Support", icon: Laptop, count: "2+" },
    { role: "Sales & Client Relations", icon: BarChart3, count: "6+" }
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-white">
      {/* Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#006D7E]/2 to-[#A3D82F]/3"></div>
        <div className="absolute top-20 right-1/4 w-40 h-40 bg-[#FF9B25]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-32 h-32 bg-[#1BB58A]/5 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#006D7E]/5 to-[#1BB58A]/5 rounded-full border border-[#006D7E]/10 mb-8">
            <Zap className="w-5 h-5 text-[#FF9B25]" />
            <span className="text-sm font-semibold text-[#006D7E]">Our Mission & Team</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Powering Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From mission to execution, we're built to scale your real estate business
          </p>
        </div>

        {/* Dynamic Flow Layout */}
        <div className="relative">
          {/* Central Flow Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#006D7E] via-[#1BB58A] to-[#A3D82F] transform -translate-x-1/2 rounded-full"></div>
          
          {/* Mission Node */}
          <div className="relative mb-24">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#006D7E] to-[#1BB58A] rounded-full flex items-center justify-center shadow-xl shadow-[#006D7E]/20 z-10">
                <Target className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-12 shadow-2xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FF9B25]/10 to-transparent rounded-full"></div>
                <div className="relative z-10 text-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                  <p className="text-xl text-gray-700 leading-relaxed font-medium">
                    To help U.S.-based real estate companies grow their client base and improve service quality through cost-effective outsourcing.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Node */}
          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-[#1BB58A] to-[#A3D82F] rounded-full flex items-center justify-center shadow-xl shadow-[#1BB58A]/20 z-10">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h3>
                <p className="text-lg text-gray-600">Expert professionals dedicated to your success</p>
              </div>

              {/* Team Showcase */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamRoles.map((role, index) => {
                  const Icon = role.icon;
                  const isMainAgent = index === 0;
                  
                  return (
                    <div key={index} className={`group relative ${isMainAgent ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                      <div className={`bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/30 border border-gray-100 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 h-full ${isMainAgent ? 'bg-gradient-to-br from-[#006D7E]/5 to-[#1BB58A]/5' : ''}`}>
                        
                        {/* Icon */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                            isMainAgent 
                              ? 'bg-gradient-to-r from-[#FF9B25] to-[#FF9B25]/80' 
                              : 'bg-gradient-to-r from-[#006D7E] to-[#1BB58A]'
                          }`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Count Badge */}
                          <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                            isMainAgent 
                              ? 'bg-[#FF9B25]/10 text-[#FF9B25]' 
                              : 'bg-[#006D7E]/10 text-[#006D7E]'
                          }`}>
                            {role.count || ''}
                          </div>
                        </div>
                        
                        {/* Content */}
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {role.role}
                        </h4>
                        {role.subtitle && (
                          <p className="text-sm text-gray-600 font-medium">
                            {role.subtitle}
                          </p>
                        )}
                        
                        {/* Hover indicator */}
                        <div className={`w-full h-1 rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                          isMainAgent 
                            ? 'bg-gradient-to-r from-[#FF9B25] to-[#FF9B25]/60' 
                            : 'bg-gradient-to-r from-[#006D7E] to-[#1BB58A]'
                        }`}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          {/* Founder Section */}
          <div className="mb-12">
            <div className="flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/Founder.jpeg" 
                    alt="Muhammad Nassef - Founder & CEO" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-[#FF9B25] to-[#FF9B25]/80 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-1">Muhammad Nassef</h4>
                <p className="text-[#006D7E] font-semibold mb-2">Founder & CEO</p>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  "Building bridges between U.S. real estate professionals and world-class talent"
                </p>
              </div>
            </div>
          </div>
          
          <button className="group bg-gradient-to-r from-[#FF9B25] to-[#FF9B25]/90 text-white px-12 py-5 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF9B25]/30 hover:scale-105 relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Mission;