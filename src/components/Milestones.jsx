import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const MilestoneCard = ({ isLeft, date, title, description, marks, progress, index }) => {
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
        <div className={`p-10 rounded-[2.5rem] w-full border transition-all duration-500 group relative ${
          isInView 
            ? 'bg-white border-primary/40 shadow-xl' 
            : 'bg-white/50 border-gray-100 opacity-50'
        }`}>
          <div className="flex justify-between items-start mb-3">
            <p className={`font-bold tracking-wider transition-colors ${isInView ? 'text-primary' : 'text-textSecondary'}`}>
              {date}
            </p>
            {marks && (
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {marks} Marks
              </span>
            )}
          </div>
          <h4 className={`font-bold text-2xl mb-4 transition-colors ${isInView ? 'text-textPrimary' : 'text-textSecondary'}`}>
            {title}
          </h4>
          <p className="text-textSecondary leading-relaxed opacity-80 mb-4">{description}</p>
          
          {progress && (
            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center mb-1.5Caps">
                <span className="text-[10px] font-bold uppercase tracking-widest text-textSecondary">Overall Progress</span>
                <span className="text-xs font-black text-primary">{progress}</span>
              </div>
              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: isInView ? progress : 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-primary"
                />
              </div>
            </div>
          )}
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
    { 
      date: 'September 2025', 
      title: 'Project Proposal', 
      description: 'The Project Proposal outlines the research idea, objectives, and initial approach. Reviewers identify limitations and refine project direction.', 
      marks: '12',
      progress: '12%'
    },
    { 
      date: 'January 2026', 
      title: 'Progress Presentation I', 
      description: 'Evaluates 50% completion. Focuses on identifying gaps, validating design, and ensuring progress aligns with requirements.', 
      marks: '15',
      progress: '27%'
    },
    { 
      date: 'March 2026', 
      title: 'Progress Presentation II', 
      description: 'Reviews 90% completion, including a system demonstration and poster presentation to communicate research contributions.', 
      marks: '18',
      progress: '37%'
    },
    { 
      date: 'April 2026', 
      title: 'Research Paper', 
      description: 'Highlights project contributions and references related work. Presents methodology, findings, and research innovations.', 
      marks: '10',
      progress: '55%'
    },
    { 
      date: 'April 2026', 
      title: 'Website Assessment', 
      description: 'Showcases all research aspects, objectives, methodology, and results in a clear and accessible digital format.', 
      marks: '2',
      progress: '57%'
    },
    { 
      date: 'May 2026', 
      title: 'Final Presentation & Viva', 
      description: 'Assessment of the complete system and individual technical understanding and overall implementation.', 
      marks: '20',
      progress: '77%'
    },
    { 
      date: 'May 2026', 
      title: 'Final Report', 
      description: 'Comprehensive documentation of the entire project including system design, implementation, and evaluation.', 
      marks: '19',
      progress: '96%'
    },
    { 
      date: 'May 2026', 
      title: 'Checklist Reports', 
      description: 'Used to track project progress at key stages, particularly at 50% and 90% completion.', 
      marks: '2',
      progress: '98%'
    },
    { 
      date: 'May 2026', 
      title: 'Logbook', 
      description: 'Documents project progress throughout the year, including supervisor meetings and group development activities.', 
      marks: '2',
      progress: '100%'
    },
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
