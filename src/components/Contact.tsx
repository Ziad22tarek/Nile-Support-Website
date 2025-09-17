import React, { useState } from 'react';
import { Mail, Phone, Clock, ChevronRight, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hi! I'm interested in your real estate support services.

📋 Contact Details:
• Name: ${formData.name || 'Not provided'}
• Email: ${formData.email || 'Not provided'}
• Phone: ${formData.phone || 'Not provided'}
• Company: ${formData.company || 'Not provided'}
• Service Interest: ${formData.service || 'Not specified'}

💬 Message:
${formData.message || 'No additional message'}

I'd like to discuss how you can help grow my real estate business!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/14303074182?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="relative overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#2C5F7C] via-[#1B8A8A] to-[#A4D65E]"></div>
        
        {/* Animated overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C5F7C]/90 via-transparent to-[#A4D65E]/90 animate-pulse"></div>
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="contact-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1"/>
                <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)"/>
          </svg>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-[#FF8C42]/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 bg-[#00D4AA]/10 rounded-full blur-xl animate-pulse"></div>
        
        {/* Animated lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00D4AA]/30 to-transparent animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Form */}
          <div className="w-full">
            <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/30 shadow-2xl">
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                  Get Started Today
                </h2>
                <p className="text-white/90 text-base sm:text-lg font-medium">
                  Ready to transform your real estate business? Let's talk about your needs.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#A4D65E] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 group-hover:border-white/50 text-sm sm:text-base font-medium"
                  >
                    <option value="" className="bg-[#2C5F7C] text-white">Select Service Interest</option>
                    <option value="cold-calling" className="bg-[#2C5F7C] text-white">Cold Calling</option>
                    <option value="customer-service" className="bg-[#2C5F7C] text-white">Customer Service</option>
                    <option value="lead-generation" className="bg-[#2C5F7C] text-white">Lead Generation</option>
                    <option value="admin-support" className="bg-[#2C5F7C] text-white">Administrative Support</option>
                    <option value="crm-management" className="bg-[#2C5F7C] text-white">CRM Management</option>
                  </select>
                </div>
                
                <div className="group">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-[#00D4AA] focus:bg-white/20 transition-all duration-300 resize-none group-hover:border-white/50 text-sm sm:text-base font-medium"
                  ></textarea>
                </div>
                
                <button
                  type="submit" 
                  className="group w-full bg-gradient-to-r from-[#FF8C42] to-[#ff6b2b] text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF8C42]/40 hover:scale-105 relative overflow-hidden shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b2b] to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "info@nilesupport.com", color: "from-[#00D4AA] to-[#1B8A8A]" },
                  { icon: Phone, label: "Phone", value: "+1 (319) 594-3897", color: "from-[#FF8C42] to-[#1B8A8A]" },
                  { icon: Clock, label: "Hours", value: "Monday-Saturday, 9 AM-6 PM EST", color: "from-[#1B8A8A] to-[#2C5F7C]" }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="group flex items-center p-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white/80 text-sm font-semibold mb-1">{item.label}</p>
                        <p className="text-white text-base sm:text-lg font-bold">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 border border-white/30 shadow-xl">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                Ready to Scale Your Real Estate Business?
              </h4>
              <p className="text-sm sm:text-base text-white/90 mb-6 leading-relaxed text-center font-medium">
                Let's discuss how our specialized real estate support services can help you generate more leads, 
                improve customer satisfaction, and close more deals.
              </p>
              
              <div className="space-y-3">
                <a 
                  href="https://calendly.com/muhammad-nassef-nilesupport/30min?month=2025-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full bg-gradient-to-r from-[#1B8A8A] to-[#00D4AA] text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#1B8A8A]/40 hover:scale-105 flex items-center justify-center shadow-lg"
                >
                  <span className="flex items-center">
                    Schedule a Call
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                
                {/* <button className="group w-full border-2 border-white/40 text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 hover:bg-white/15 hover:border-white/60 flex items-center justify-center shadow-lg">
                  <span className="flex items-center">
                    Download Brochure
                    <svg className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;