import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Presentation } from 'lucide-react';

const ResourceGrid = ({ icon: Icon, title, description, count, columns = 4 }) => {
  return (
    <div className="mb-24 last:mb-0">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-primary/5 rounded-xl text-primary">
          <Icon size={28} />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-textPrimary">{title}</h3>
          <p className="text-textSecondary text-sm">{description}</p>
        </div>
      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${columns} gap-8`}>
        {Array(count).fill(null).map((_, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -8 }}
            className="aspect-square bg-white border border-gray-100 rounded-[2.5rem] flex flex-col items-center justify-center text-textSecondary/20 hover:text-primary transition-all cursor-pointer group "
          >
            <Icon size={48} className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs font-bold tracking-widest uppercase opacity-50 group-hover:opacity-100 transition-opacity">Download</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Resources = () => {
  return (
    <section id="resources" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto px-4">
        <ResourceGrid 
          icon={FileText}
          title="Documents" 
          description="Access detailed research papers and project documentation." 
          count={8} 
        />
        <ResourceGrid 
          icon={Presentation}
          title="Presentations" 
          description="Review presentation slides and research summaries." 
          count={4} 
        />
      </div>
    </section>
  );
};

export default Resources;
