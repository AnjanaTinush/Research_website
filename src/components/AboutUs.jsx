import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import supervisorImg from '../assets/aboutus/Suppervisor.jpg';
import coSupervisorImg from '../assets/aboutus/cosuppervisor.jpg';
import member1Img from '../assets/aboutus/Member_2.jpeg';
import member2Img from '../assets/aboutus/Member_1.png';
import member3Img from '../assets/aboutus/Member_3.JPG';
import member4Img from '../assets/aboutus/Member_4.jpeg';

const AboutUs = () => {
  const supervisor = {
    name: 'Dr. Dharshana Kasthurirathna',
    role: 'Supervisor',
    email: 'dharshana.k@sliit.lk', // Placeholder
    linkedin: 'https://www.linkedin.com/in/dharshana-kasthurirathna-a4a3275/',
    image: supervisorImg
  };

  const coSupervisor = {
    name: 'Ms. Hansi De Silva',
    role: 'Co-Supervisor',
    email: 'hansi.d@sliit.lk', // Placeholder
    linkedin: 'https://www.linkedin.com/in/hansi-de-silva-03629b79/',
    image: coSupervisorImg
  };

  const members = [
    { 
      name: 'Praveen De Silva', 
      role: 'Group Leader',
      email: 'd.praveendesilva@gmail.com', 
      linkedin: 'https://www.linkedin.com/in/dileepa-praveen', 
      image: member1Img 
    },
    { 
      name: ' Abhishek Peiris', 
      email: 'abhisheklpeiris@gmail.com', 
      linkedin: 'https://www.linkedin.com/in/abhishek-peiris?utm_source=share_via&utm_content=profile&utm_medium=member_android', 
      image: member2Img 
    },
    { 
      name: 'Anjana Tinush', 
      email: 'anjanatinush222@gmail.com', 
      linkedin: 'https://www.linkedin.com/in/anjana-tinush-550552281/', 
      image: member3Img 
    },
    { 
      name: 'Niduka Konara', 
      email: 'konaraniduka2507@gmail.com', 
      linkedin: 'https://www.linkedin.com/in/niduka-konara/', 
      image: member4Img 
    },
  ];

  const MemberCard = ({ member, isDetailed }) => (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group flex flex-col ${isDetailed ? 'aspect-auto' : 'aspect-square md:aspect-[3/4]'}`}
    >
      <div className={`relative ${isDetailed ? 'aspect-square' : 'h-full'} overflow-hidden`}>
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-1">{member.role || ''}</p>
          <h3 className={`${isDetailed ? 'text-2xl' : 'text-xl'} font-bold mb-3`}>{member.name}</h3>
          <div className="flex gap-4">
            <motion.a 
              whileTap={{ scale: 0.9 }}
              href={`mailto:${member.email}`} 
              className="p-2 bg-white/20 hover:bg-primary rounded-full transition-colors backdrop-blur-sm relative group/email"
            >
              <Mail size={18} />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/email:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Send Email
              </span>
            </motion.a>
            <motion.a 
              whileTap={{ scale: 0.9 }}
              href={member.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 bg-white/20 hover:bg-primary rounded-full transition-colors backdrop-blur-sm flex items-center justify-center relative group/link"
            >
              <svg 
                width="18" 
                height="18" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/link:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="about" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-textPrimary">About Us</h2>
        <p className="text-textSecondary mb-16 max-w-3xl text-lg leading-relaxed">
          The Dnamix Auto scaler project is driven by a team of researchers and engineers dedicated to solving 
          the complexities of Kubernetes scalability and cloud-native security.
        </p>
        
        <div className="space-y-16">
          {/* Supervisors Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <MemberCard member={supervisor} isDetailed={true} />
            <MemberCard member={coSupervisor} isDetailed={true} />
          </div>
          
          {/* Students Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {members.map((member, i) => (
              <MemberCard key={i} member={member} isDetailed={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
