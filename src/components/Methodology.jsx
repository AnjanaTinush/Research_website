import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, ShieldCheck, SearchCode } from 'lucide-react';

const MethodologyItem = ({ title, points, isLeft, index, icon: Icon }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center mb-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -100 : 100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 w-full aspect-video bg-gray-100 rounded-[2.5rem] border border-gray-200 flex items-center justify-center text-textSecondary font-bold text-2xl"
      >
        <span>Visualization {index + 1}</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 100 : -100, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 space-y-8 pl-4"
      >
        <h3 className="text-3xl font-bold text-textPrimary relative flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Icon size={24} className="text-primary" />
          </div>
          {title}
        </h3>
        <ul className="space-y-4">
          {points.map((point, i) => (
            <li key={i} className="flex items-start text-textSecondary text-lg leading-relaxed group">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary mr-4 group-hover:scale-125 transition-all"></span>
              {point}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const Methodology = () => {
  const steps = [
    { 
      title: 'Multi-Layer Metrics Collection', 
      icon: Database,
      points: [
        'Data Collection: Collect metrics from node, pod, application, and service mesh levels using Prometheus and Istio.',
        'Feature Engineering: Generate meaningful features such as request rate, latency, error rates, and topology-based metrics.',
        'Data Processing: Clean, align, and aggregate data using sliding time windows to create stable inputs for machine learning models.'
      ]
    },
    { 
      title: 'Predictive Autoscaling Model', 
      icon: TrendingUp,
      points: [
        'Approach: Apply time-series models such as LSTM to analyze historical workload patterns.',
        'Prediction: Forecast future resource requirements based on traffic behavior and system state.',
        'Goal: Enable proactive scaling instead of reactive adjustments.'
      ]
    },
    { 
      title: 'Validation and Execution Layer', 
      icon: ShieldCheck,
      points: [
        'Test Environment: Apply scaling decisions in a controlled test namespace before production.',
        'Chaos Testing: Inject failures (pod crashes, delays, stress) to evaluate system behavior.',
        'Decision Logic: Calculate a resilience score based on latency, error rate, and recovery time.',
        'Execution: Apply only safe scaling actions to production, with rollback for unsafe decisions.'
      ]
    },
    { 
      title: 'Anomaly Detection Module', 
      icon: SearchCode,
      points: [
        'Model Selection: Use unsupervised models such as Autoencoders, Isolation Forest, and One-Class SVM.',
        'Functionality: Detect abnormal or malicious traffic patterns in real time.',
        'Outcome: Filter out invalid traffic to ensure only legitimate signals influence scaling decisions.'
      ]
    }
  ];

  return (
    <section id="methodology" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24">
          <h2 className="text-5xl font-black mb-8 text-textPrimary">Methodology</h2>
          <p className="text-xl text-textSecondary max-w-3xl leading-relaxed">
            Our system follows a structured pipeline that combines real-time observability, machine learning, and intelligent decision-making to enable secure and efficient autoscaling in Kubernetes environments.
          </p>
        </div>
        <div className="space-y-40 text-justify">
          {steps.map((step, index) => (
            <MethodologyItem 
              key={index} 
              index={index}
              isLeft={index % 2 === 0} 
              {...step} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
