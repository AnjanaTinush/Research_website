import React from 'react';
import { Target, Search, BarChart3, Settings2, ShieldCheck, Database, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const ObjectiveCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-6 bg-white hover:border-primary transition-all group flex flex-col h-full w-full rounded-3xl"
    >
      <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
        <Icon size={32} className="text-primary group-hover:scale-110 transition-transform" />
      </div>
      <h4 className="text-2xl font-bold mb-4 text-textPrimary">{title}</h4>
      <p className="text-black leading-relaxed">{description}</p>
    </motion.div>
  );
};

const ResearchObjectives = () => {
  const objectives = [
    { 
      icon: Database, 
      title: 'Comprehensive Metrics Collection', 
      description: 'Collect and process multi-layer metrics from nodes, pods, applications, and service mesh to fully understand system behavior in real time.' 
    },
    { 
      icon: BarChart3, 
      title: 'Predictive Autoscaling', 
      description: 'Use time-series models to forecast future workload demand and enable proactive resource scaling.' 
    },
    { 
      icon: ShieldCheck, 
      title: 'Validation-Based Scaling Execution', 
      description: 'Introduce a validation layer to test scaling decisions under stress conditions and ensure only safe actions are applied.' 
    },
    { 
      icon: Target, 
      title: 'Anomaly-Aware Traffic Detection', 
      description: 'Develop machine learning models to identify abnormal or malicious traffic patterns and prevent incorrect scaling decisions.' 
    },
    { 
      icon: Zap, 
      title: 'Efficient and Reliable Resource Management', 
      description: 'Optimize resource usage by combining intelligent prediction, anomaly filtering, and validation to improve system stability and cost efficiency.' 
    },
  ];

  return (
    <section id="objectives" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-16 px-4">
          <span className="text-textPrimary">Research Objectives</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 px-4">
          {objectives.map((obj, i) => (
            <div key={i} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm flex">
              <ObjectiveCard index={i} {...obj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchObjectives;
