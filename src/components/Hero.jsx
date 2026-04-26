import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-backgroundDefault">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-100 rounded-full blur-[120px] opacity-40 z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-30 z-0"></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter text-textPrimary">
          Dnami<span className="text-primary drop-shadow-[0_10px_10px_rgba(132,0,106,0.3)]">X</span> Auto scaler
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl text-textSecondary max-w-3xl mx-auto font-medium leading-relaxed"
        >
          Topology-Aware Predictive Autoscaling <br className="hidden md:block" />
          for Kubernetes Microservices
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1 backdrop-blur-sm">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_white]"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
