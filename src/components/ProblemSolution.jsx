import React from 'react';

const ProblemSolution = () => {
  return (
    <section id="solution" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-textPrimary text-center">Research Problem & Proposed Solution</h2>
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full bg-gray-100 rounded-3xl aspect-video relative flex flex-col items-center justify-center border-2 border-primary/20 overflow-hidden group p-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-textSecondary font-medium">To maintain security, please view the video directly on SLIIT SharePoint</p>
              <a 
                href="https://mysliit-my.sharepoint.com/:v:/g/personal/it22919014_my_sliit_lk/IQCQKrj1i00vTLhwafwFIy5aAZYz0BGtQk7hBx2rHBHrSGw?e=YMSNTc" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
              >
                Watch Project Video
              </a>
            </div>
          </div>
          
          <div className="flex-1 space-y-8">
            <h3 className="text-3xl font-bold text-textPrimary">System Architecture & <br /> Workflow Overview</h3>
            <p className="text-textSecondary text-lg leading-relaxed text-justify">
              Our solution addresses the limitations of current cloud-native autoscaling by introducing a topology-aware predictive model. 
              By analyzing microservice dependencies and historic traffic patterns within the Kubernetes cluster, 
              the system can preemptively scale individual services before bottle-necks occur, 
              ensuring high availability while minimizing resource overhead in highly dynamic environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
