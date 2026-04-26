import React from 'react';

const ResearchGap = () => {
  return (
    <section id="gap" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">
          <span className="blue-underline text-textPrimary">Research Gap</span>
        </h2>
        
        <div className="relative p-10 md:p-16  border-white group">
          <div className="flex flex-col md:flex-row items-center gap-16 relative z-10">
            <div className="flex-1 space-y-8">
              <h3 className="text-4xl font-bold leading-tight text-textPrimary group-hover:text-primary transition-colors">
                Species Identification and <br /> Growth Monitoring
              </h3>
              <p className="text-textSecondary text-xl leading-relaxed">
                Advanced underwater imaging and data analysis technologies have not yet achieved the precision needed for accurate identification of coral species and monitoring their growth stages.
              </p>
            </div>
            
            <div className="flex-1 w-full bg-gray-200 aspect-square rounded-[2rem] flex items-center justify-center text-textSecondary/50 ">
               <span className="text-sm font-bold uppercase tracking-widest">Image Placeholder</span>
            </div>

            <div className="flex md:flex-col gap-4 justify-center">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
              <div className="w-3 h-3 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGap;
