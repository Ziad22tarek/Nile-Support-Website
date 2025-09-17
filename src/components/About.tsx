import React from 'react';
import { Phone, Users, BarChart3, FileText, Database, ArrowRight } from 'lucide-react';

const About = () => {
  const coreServices = [
    {
      icon: Phone,
      title: "Inbound & Outbound Real Estate Calls"
    },
    {
      icon: Users,
      title: "Quality Assurance & Call Monitoring"
      
    },
    {
      icon: BarChart3,
      title: "Lead List Generation & Selling Lists"
      
    },
    {
      icon: FileText,
      title: "Administrative Support"
    },
    {
      icon: Database,
      title: "CRM Management"
    }
  ];

  return (
    <section id="about" className="relative min-h-screen sm:min-h-[650px] sm:max-h-[750px] lg:min-h-[700px] lg:max-h-[800px] w-full overflow-hidden pt-8 sm:pt-6 lg:pt-4 pb-8 sm:pb-6 lg:pb-4">
      {/* Background Image */}
      <div 
        className="hidden lg:block absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/about-section-2.png)',
          imageRendering: 'optimizeQuality'
        }}
      >
        <link rel="preload" as="image" href="/about-section-2.png" />
      </div>

      {/* Gradient Overlay for better text readability */}
      <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white/98 via-white/90 to-white/20"></div>

      {/* White background for mobile */}
      <div className="lg:hidden absolute inset-0 bg-white"></div>

      {/* Content Container */}
      <div className="relative z-10 w-full h-full flex items-center justify-center lg:justify-start">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 sm:py-4 md:py-6 lg:py-8">
          
          {/* Layout: Single column on mobile, two columns on desktop */}
          <div className="w-full max-w-5xl lg:max-w-none mx-auto lg:mx-0 lg:ml-2">
            
            {/* Header Section */}
            <div className="text-center lg:text-left mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
                <span className="bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] bg-clip-text text-transparent">
                  About Us
                </span>
              </h2>
            </div>

            {/* Two Column Layout for larger screens */}
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:max-w-4xl">
              
              {/* Left Column: Paragraphs */}
              <div className="mb-6 lg:mb-0">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    Nile Support LLC provides outsourced customer service, cold calling, and back-office support for real estate companies in the U.S. We help agents, brokers, and property managers improve communication, generate more leads, and streamline operations.
                  </p>
                  
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                    At Nile Support, we understand that cold calling and lead generation take up valuable time you could be using to show homes, meet clients, and close deals. That's why our trained real estate cold-calling specialists do the heavy lifting for you — reaching out to prospects, qualifying leads, and keeping your pipeline full. With us as your partner, you'll book more appointments, close more deals, and grow your business faster.
                  </p>
                </div>
              </div>

              {/* Right Column: Services */}
              <div className="mb-6 lg:mb-0">
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 text-center lg:text-left">
                    Core Services Overview:
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] rounded-full mx-auto lg:mx-0"></div>
                </div>

                {/* Services without background */}
                <div className="space-y-2.5">
                  {coreServices.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div key={index} className="flex items-center p-2 rounded-lg">
                        <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] rounded-lg flex items-center justify-center mr-3 shadow-md flex-shrink-0">
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <h4 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 leading-tight">
                          {service.title}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start mt-6 lg:mt-8">
              <a 
                href="https://wa.me/14303074182?text=Hi!%20I'm%20interested%20in%20your%20real%20estate%20support%20services.%20I'd%20like%20to%20get%20started%20and%20learn%20more%20about%20how%20you%20can%20help%20grow%20my%20business%20with%20cold%20calling,%20lead%20generation,%20and%20customer%20service%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto group bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#FF8C42]/30 hover:scale-105 relative overflow-hidden inline-block"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;