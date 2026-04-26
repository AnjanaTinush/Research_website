import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Info */}
        <div className="flex-1 space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-black text-textPrimary tracking-widest uppercase">Get In <br /><span className="text-primary italic">Touch</span></h2>
            <p className="text-xl font-medium text-textSecondary border-l-4 border-primary pl-6 py-2">
              "Building the future of predictive infrastructure, <br />one microservice at a time."
            </p>
          </div>
          
          <p className="text-textSecondary text-lg leading-relaxed opacity-80 max-w-lg">
            For inquiries or collaboration opportunities in sustainable Kubernetes conservation, 
            please reach out to our research team.
          </p>
          
          <div className="space-y-6">
            <div className="group cursor-pointer">
              <p className="text-textSecondary text-xs uppercase tracking-[0.3em] mb-1 opacity-50">Email Address</p>
              <p className="text-2xl font-bold text-textPrimary group-hover:text-primary transition-colors">dnamiXdeveloper@gmail.com</p>
            </div>
            <div className="group cursor-pointer">
               <p className="text-textSecondary text-xs uppercase tracking-[0.3em] mb-1 opacity-50">Physical Location</p>
              <div className="text-lg font-bold text-textSecondary group-hover:text-textPrimary transition-colors">
                <p>Sri Lanka Institute of Information Technology,</p>
                <p>New Kandy Rd, Malabe, Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Form */}
        <div className="flex-1 w-full max-w-xl">
          <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-white  relative">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-textSecondary ml-2">First Name</label>
                   <input 
                    type="text" 
                    placeholder="John" 
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 text-textPrimary border border-gray-100 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest text-textSecondary ml-2">Last Name</label>
                   <input 
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-8 py-5 rounded-2xl bg-gray-50 text-textPrimary border border-gray-100 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-textSecondary ml-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Inquiry about..." 
                  className="w-full px-8 py-5 rounded-2xl bg-gray-50 text-textPrimary border border-gray-100 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-textSecondary ml-2">Your Message</label>
                <textarea 
                  rows="4" 
                  placeholder="Tell us everything..." 
                  className="w-full px-8 py-5 rounded-2xl bg-gray-50 text-textPrimary border border-gray-100 focus:border-primary/50 focus:ring-4 focus:ring-primary/5 outline-none transition-all resize-none placeholder:text-gray-300"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full py-6 bg-primary text-white font-black text-xs uppercase tracking-[0.4em] rounded-2xl hover:brightness-110 active:scale-[0.98] transition-all  hover:shadow-primary/20"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
