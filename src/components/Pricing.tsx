import React from 'react';
import { CheckCircle, Star, Users, Clock, Shield, TrendingUp } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1220",
      subtitle: "Solo agents & small teams",
      features: [
        "1-2 agents",
        "40 hours/week minimum commitment",
        "Daily KPI reporting",
        "Dedicated Team Leader (shared)",
        "Monthly QA reports",
        "Priority call lists"
      ],
      popular: false,
      color: "from-[#1B8A8A] to-[#00D4AA]",
      icon: Users
    },
    {
      name: "Growth",
      price: "$1120",
      subtitle: "Expanding real estate teams",
      features: [
        "3-5 agents",
        "40 hours/week minimum commitment",
        "Daily KPI reporting",
        "Dedicated Team Leader (shared)",
        "Weekly QA reports",
        "Priority call lists & lead filtering",
        "Performance tracking & optimization"
      ],
      popular: true,
      color: "from-[#FF8C42] to-[#1B8A8A]",
      icon: TrendingUp
    },
    {
      name: "Scale",
      price: "$1080",
      subtitle: "Brokerages & high-volume campaigns",
      features: [
        "6-10 agents",
        "40 hours/week minimum commitment",
        "Daily KPI reporting",
        "Dedicated Team Leader (exclusive)",
        "Weekly QA reports",
        "Priority call lists & lead filtering",
        "Performance tracking & optimization",
        "Weekly strategy calls with management",
        "Custom CRM integration"
      ],
      popular: false,
      color: "from-[#00D4AA] to-[#FF8C42]",
      icon: Shield
    },
    {
      name: "Enterprise",
      price: "$1020",
      subtitle: "Large real estate networks & multi-state operations",
      features: [
        "11+ agents",
        "Full-time dedicated staff",
        "Dedicated Team Leader & QA specialist",
        "Daily performance dashboard",
        "Weekly QA reports",
        "Monthly growth strategy review",
        "Super Priority call lists with hot leads & lead filtering",
        "Performance tracking & optimization",
        "Weekly strategy calls with management",
        "Custom CRM integration",
        "Priority recruiting for scaling"
      ],
      popular: false,
      color: "from-[#2C5F7C] to-[#1B8A8A]",
      icon: Clock
    }
  ];

  const includedFeatures = [
    "Trained real estate agents",
    "Dialer access",
    "CRM management",
    "Daily reporting",
    "TCPA/DNC compliance"
  ];

  return (
    <section id="pricing" className="relative min-h-screen overflow-hidden flex items-center py-4 sm:py-6 lg:py-8">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-[#1B8A8A]/5"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #1B8A8A 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 right-1/4 w-32 h-32 bg-[#00D4AA]/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-[#FF8C42]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="py-2 sm:py-3 lg:py-4">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
              Outsourced Real Estate
              <span className="block bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] bg-clip-text text-transparent">
                Support Plans
              </span>
            </h2>
            
            <p className="text-xs sm:text-sm lg:text-base xl:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-3 sm:mb-4 lg:mb-6 font-medium">
              We offer flexible, transparent plans based on your business size and needs.
            </p>

            {/* Included Features */}
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-3 sm:p-4 lg:p-5 border border-gray-200 max-w-5xl mx-auto shadow-xl mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-xs sm:text-sm lg:text-base xl:text-lg font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4">All plans include:</h3>
              <div className="flex flex-wrap justify-center gap-1 sm:gap-2 lg:gap-3">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center bg-[#1B8A8A]/15 px-2 py-1 sm:px-3 sm:py-2 lg:px-4 lg:py-2 rounded-full border border-[#1B8A8A]/20">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-[#1B8A8A] mr-1 sm:mr-2" />
                    <span className="text-gray-700 text-xs sm:text-sm font-semibold">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div 
                  key={index} 
                  className="relative group"
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-2 py-1 sm:px-3 sm:py-1 lg:px-4 lg:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center shadow-2xl border-2 border-white whitespace-nowrap">
                        <Star className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  {/* Card */}
                  <div className={`relative bg-white rounded-3xl border transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full overflow-hidden mt-0 ${
                    plan.popular 
                      ? 'border-[#FF8C42]/60 shadow-2xl shadow-[#FF8C42]/30 ring-2 ring-[#FF8C42]/30' 
                      : 'border-gray-200 hover:border-[#1B8A8A]/40 shadow-xl'
                  }`}>
                    {/* Popular card background accent */}
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b]"></div>
                    )}
                    
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${plan.color} rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    <div className="relative p-3 sm:p-4 lg:p-5 h-full flex flex-col">
                      {/* Icon and Header */}
                      <div className="text-center mb-3 sm:mb-4 lg:mb-5">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-r ${plan.color} rounded-3xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 xl:h-7 xl:w-7 text-white" />
                        </div>
                        <h3 className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{plan.name}</h3>
                        
                        {/* Price Display */}
                        <div className="mb-2 sm:mb-3">
                          <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">
                            {plan.price}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">
                            per agent/month
                          </div>
                        </div>
                        
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-medium">{plan.subtitle}</p>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-1 sm:space-y-2 mb-3 sm:mb-4 lg:mb-5 flex-grow">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <CheckCircle className="h-2 w-2 sm:h-3 sm:w-3 lg:h-4 lg:w-4 text-[#00D4AA] mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 text-xs sm:text-sm leading-relaxed font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <button className={`w-full py-2 sm:py-3 lg:py-4 px-2 sm:px-3 lg:px-4 rounded-2xl font-bold text-xs sm:text-sm lg:text-base transition-all duration-300 hover:scale-105 shadow-lg mt-auto ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white hover:shadow-xl hover:shadow-[#FF8C42]/40' 
                          : 'bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white hover:shadow-xl hover:shadow-[#1B8A8A]/30'
                      }`}>
                        Get Started
                      </button>
                    </div>
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

export default Pricing;