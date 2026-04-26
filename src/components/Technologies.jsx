import React from 'react';
import { motion } from 'framer-motion';

import docker from '../assets/technology/docker.png';
import grafana from '../assets/technology/grafana.jpg';
import kubernetes from '../assets/technology/kubernates.png';
import node from '../assets/technology/node.png';
import python from '../assets/technology/python.png';
import socket from '../assets/technology/socket.png';
import Prometheus from '../assets/technology/prometheus.png';
import react from '../assets/technology/react.png';
import istio from '../assets/technology/istio.png';
import cadvisor from '../assets/technology/cadvisor.png';

const Technologies = () => {
  const techLogos = [
    { name: 'Docker', image: docker },
    { name: 'Grafana', image: grafana },
    { name: 'Kubernetes', image: kubernetes },
    { name: 'Node.js', image: node },
    { name: 'Python', image: python },
    { name: 'Socket.io', image: socket },
    { name: 'Prometheus', image: Prometheus },
    { name: 'React', image: react },
    { name: 'Istio', image: istio },
    { name: 'cAdvisor', image: cadvisor },
  ];

  return (
    <section id="technologies" className="section-padding bg-surfaceLight">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16 text-textPrimary inline-block relative">
          Technologies Used
          <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8">
            {techLogos.map((tech) => (
              <motion.div 
                key={tech.name}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 bg-white rounded-3xl border border-gray-100 flex flex-col items-center justify-center p-4 cursor-pointer hover:border-primary/50 transition-all shadow-sm group"
              >
                <div className="w-full h-full flex items-center justify-center overflow-hidden">
                  <img 
                    src={tech.image} 
                    alt={tech.name} 
                    className="max-w-full max-h-full object-contain transition-all duration-300"
                  />
                </div>
                <span className="mt-2 text-xs font-semibold text-textSecondary group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
