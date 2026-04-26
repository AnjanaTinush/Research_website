import React from 'react';
import { motion } from 'framer-motion';

const MethodologyItem = ({ title, points, isLeft, index }) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-12 items-center mb-32 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex-1 w-full aspect-video bg-gray-100 rounded-[2.5rem] border border-gray-200 flex items-center justify-center text-textSecondary font-bold text-2xl"
      >
        <span>Visualization {index + 1}</span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex-1 space-y-8 pl-4"
      >
        <h3 className="text-3xl font-bold text-textPrimary relative flex items-center">
          <span className="w-10 h-[2px] bg-primary mr-4"></span>
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
      title: 'Data Collection and Preprocessing', 
      points: [
        'Gathered 2,237 coral images, expanded to 4,925 through augmentation, split into 80% training and 20% validation sets.',
        'Image Preprocessing: Includes conversion to HSV color space, application of CLAHE, and use of masking to isolate coral structures.'
      ]
    },
    { 
      title: 'Model Training & Evaluation', 
      points: [
        'CNN with Transfer Learning: Utilized CNNs (e.g., MobileNetV2) fine-tuned on coral-specific data to identify coral species and monitor growth.',
        'Polyp Counting: Used YOLOv8 model optimized for coral images to track polyp density and dispersion area.'
      ]
    }
  ];

  return (
    <section id="methodology" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black mb-24 px-4 text-textPrimary">Methodology</h2>
        <div className="space-y-24">
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
