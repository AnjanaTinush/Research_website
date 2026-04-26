import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MilestoneCard = ({ isLeft, date, title, description, isCompleted, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.6, once: false });

  return (
    <div className={`flex w-full mb-24 items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`} ref={ref}>
      <motion.div 
        animate={{ 
          opacity: isInView ? 1 : 0.4, 
          scale: isInView ? 1 : 0.95,
          x: isInView ? 0 : (isLeft ? -20 : 20)
        }}
        transition={{ duration: 0.5 }}
        className="w-[45%] flex flex-col items-center"
      >
        <div className={`p-10 rounded-[2.5rem] w-full border transition-all duration-500 group ${
          isInView 
            ? 'bg-white border-primary/40 ' 
            : 'bg-white/50 border-gray-100 opacity-50'
        }`}>
          <p className={`font-bold mb-3 tracking-wider transition-colors ${isInView ? 'text-primary' : 'text-textSecondary'}`}>
            {date}
          </p>
          <h4 className={`font-bold text-2xl mb-4 transition-colors ${isInView ? 'text-textPrimary' : 'text-textSecondary'}`}>
            {title}
          </h4>
          <p className="text-textSecondary leading-relaxed opacity-80">{description}</p>
        </div>
      </motion.div>

      {/* Center Circle */}
      <div className="w-[10%] flex justify-center sticky top-1/2">
        <motion.div 
          animate={{ 
            scale: isInView ? 1.4 : 1,
            backgroundColor: isInView ? '#84006A' : '#FFFFFF',
          }}
          className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-backgroundDefault transition-all`}
        >
          <motion.div 
            animate={{ 
              backgroundColor: isInView ? '#FFFFFF' : '#D1D5DB',
              scale: isInView ? 1.2 : 0.8
            }}
            className="w-2.5 h-2.5 rounded-full" 
          />
        </motion.div>
      </div>

      <div className="w-[45%]"></div>
    </div>
  );
};

const Milestones = () => {
  const milestones = [
    { date: 'Nov 2024', title: 'Progress Report I', description: 'Initial project validation at 50% completion across all metrics.', isCompleted: true },
    { date: 'Jan 2025', title: 'Progress Report II', description: 'Advanced system validation at 90% implementation stage.', isCompleted: true },
    { date: 'Mar 2025', title: 'Alpha Release', description: 'Deployment of core predictive model in testing environment.', isCompleted: false },
    { date: 'May 2025', title: 'Final Submission', description: 'Complete system optimization and research documentation.', isCompleted: false },
  ];

  return (
    <section id="milestones" className="section-padding bg-surfaceLight overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-32 text-textPrimary text-center tracking-tighter">
          PROJECT <span className="text-primary italic">MILESTONES</span>
        </h2>
        
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-primary via-primary/50 to-transparent opacity-20"></div>
          
          <div className="flex flex-col relative z-10">
            {milestones.map((ms, index) => (
              <MilestoneCard 
                key={index}
                index={index}
                isLeft={index % 2 === 0}
                {...ms}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
