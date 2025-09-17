import React from 'react';
import { Shield, Lock, TrendingUp, Award, Users, Clock } from 'lucide-react';

const TrustCompliance = () => {
  const trustItems = [
    {
      icon: Shield,
      title: "TCPA/DNC Compliance",
      description: "Fully compliant with all regulations and industry standards",
      color: "from-[#1B8A8A] to-[#A4D65E]"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Secure cloud-based systems with enterprise-grade encryption",
      color: "from-[#2C5F7C] to-[#1B8A8A]"
    },
    {
      icon: TrendingUp,
      title: "40+ Trained Agents",
      description: "Expandable to 100+ agents with proven track record",
      color: "from-[#FF8C42] to-[#1B8A8A]"
    }
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Satisfied Clients", color: "text-[#1B8A8A]" },
    { icon: Award, number: "99.9%", label: "Uptime Rate", color: "text-[#00D4AA]" },
    { icon: Clock, number: "24/7", label: "Support Available", color: "text-[#FF8C42]" },
    { icon: Shield, number: "100%", label: "Compliance Rate", color: "text-[#2C5F7C]" }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-[#1B8A8A]/5"></div>
        
        {/* Radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#00D4AA]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#FF8C42]/10 to-transparent rounded-full blur-3xl"></div>
        </div>
        
        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="trust-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="80" height="80" fill="none"/>
                <circle cx="40" cy="40" r="20" fill="none" stroke="#1B8A8A" strokeWidth="1"/>
                <circle cx="40" cy="40" r="10" fill="none" stroke="#00D4AA" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#trust-pattern)"/>
          </svg>
        </div>
        
        {/* Animated elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-[#00D4AA]/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-[#FF8C42]/10 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#1B8A8A]/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 mx-4 lg:mx-8 xl:mx-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Built on Trust,
            <span className="block bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] bg-clip-text text-transparent">
              Secured by Compliance
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your business deserves a partner you can trust. We maintain the highest standards of security, compliance, and reliability.
          </p>
        </div>

        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:scale-105 h-full">
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className={`absolute -inset-2 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#1B8A8A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-[#00D4AA] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                </div>
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#2C5F7C] via-[#1B8A8A] to-[#A4D65E] rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, white 2px, transparent 2px)
                `,
                backgroundSize: '50px 50px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Trusted by Industry Leaders
                </h3>
                <p className="text-white/80 text-lg">
                  Our numbers speak for themselves
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="mb-4">
                        <Icon className="h-8 w-8 text-white mx-auto mb-2 group-hover:scale-125 transition-transform duration-300" />
                        <div className="text-4xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                          {stat.number}
                        </div>
                      </div>
                      <div className="text-white/80 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">MN</span>
              </div>
              <div className="text-left">
                <p className="text-gray-900 font-bold text-lg">Founded by Muhammad Nassef</p>
                <p className="text-gray-600">Your trusted partner in real estate success</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default TrustCompliance;