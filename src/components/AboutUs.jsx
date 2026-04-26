import React from 'react';
import supervisorImg from '../assets/aboutus/Suppervisor.jpg';
import coSupervisorImg from '../assets/aboutus/cosuppervisor.jpg';
import member1Img from '../assets/aboutus/Member_1.png';
import member2Img from '../assets/aboutus/Member_2.jpg';
import member3Img from '../assets/aboutus/Member_3.JPG';
import member4Img from '../assets/aboutus/Member_4.png';

const AboutUs = () => {
  const members = [
    { name: 'Member 1', image: member1Img },
    { name: 'Member 2', image: member2Img },
    { name: 'Member 3', image: member3Img },
    { name: 'Member 4', image: member4Img },
  ];

  return (
    <section id="about" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-textPrimary">About Us</h2>
        <p className="text-textSecondary mb-16 max-w-3xl text-lg leading-relaxed">
          This section introduces the dedicated team behind the Dnamix Auto scaler project and our mission to refine Kubernetes scalability. 
          Learn more about our background in distributed systems and our passion for performance optimization.
        </p>
        
        <div className="space-y-10">
          {/* Top row - 2 Large placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative aspect-[16/9] bg-white rounded-[3rem] border border-gray-100 flex items-center justify-center text-textSecondary/30 font-bold overflow-hidden group cursor-pointer hover:border-primary/20 transition-all shadow-sm">
              <img src={supervisorImg} alt="Supervisor" className="w-full h-full object-contain transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <span className="text-white text-xl">Supervisor</span>
              </div>
            </div>
            <div className="relative aspect-[16/9] bg-white rounded-[3rem] border border-gray-100 flex items-center justify-center text-textSecondary/30 font-bold overflow-hidden group cursor-pointer hover:border-primary/20 transition-all shadow-sm">
              <img src={coSupervisorImg} alt="Co-Supervisor" className="w-full h-full object-contain transition-transform duration-500" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-8">
                <span className="text-white text-xl">Co-Supervisor</span>
              </div>
            </div>
          </div>
          
          {/* Bottom row - 4 Small placeholders */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {members.map((member, i) => (
              <div key={i} className="aspect-[3/4] bg-white rounded-[2.5rem] border border-gray-100 flex flex-col items-center justify-end overflow-hidden text-textSecondary/30 font-bold group cursor-pointer hover:border-primary/20 transition-all shadow-sm">
                <div className="w-full h-full relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-center">
                    <span className="text-white text-sm tracking-[0.2em] uppercase">{member.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
