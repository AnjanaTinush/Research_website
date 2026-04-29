import React from "react";
import { motion } from "framer-motion";
import WaveCanvas from "./components/WaveCanvas";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden text-center bg-white">
      {/* WAVE BACKGROUND */}
      <WaveCanvas />

      {/* SOFT GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white z-[1]" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl text-textPrimary">
          Dnami
          <span className="text-primary drop-shadow-[0_10px_20px_rgba(132,0,106,0.3)]">
            X
          </span>{" "}
          Auto scaler
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-relaxed text-black md:text-2xl">
          Topology-Aware Predictive Autoscaling
          <br className="hidden md:block" />
          for Kubernetes Microservices
        </p>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute z-10 -translate-x-1/2 bottom-10 left-1/2"
      >
        <div className="flex justify-center w-6 h-10 p-1 border-2 border-gray-300 rounded-full">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
