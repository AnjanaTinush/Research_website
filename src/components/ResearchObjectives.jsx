import React from 'react';
import { Target, Search, BarChart3, Settings2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ObjectiveCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-10 glass-card bg-white hover:border-primary/40 hover:bg-white transition-all group"
    >
      <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
        <Icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h4 className="text-2xl font-bold mb-4 text-textPrimary">{title}</h4>
      <p className="text-textSecondary leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ResearchObjectives = () => {
  const objectives = [
    { icon: Search, title: 'Identification', description: 'Accurate identification of microservice dependencies and traffic patterns.' },
    { icon: BarChart3, title: 'Prediction', description: 'Advanced time-series forecasting for predicting future resource demands.' },
    { icon: Target, title: 'Optimization', description: 'Topology-aware scaling decisions to minimize inter-service latency.' },
    { icon: Settings2, title: 'Stability', description: 'Maintaining cluster stability and performance during rapid scaling events.' },
  ];

  return (
    <section id="objectives" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 px-4">
          <span className="blue-underline text-textPrimary">Research Objectives</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {objectives.map((obj, i) => (
            <ObjectiveCard key={i} index={i} {...obj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;
