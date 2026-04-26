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
            <h3 className="text-3xl font-bold text-textPrimary">The Problem</h3>
            <p className="text-textSecondary text-lg leading-relaxed text-justify">
              Modern Kubernetes autoscaling relies mainly on CPU and memory metrics, without understanding the nature of incoming traffic. Because of this, systems cannot distinguish between real user demand and abnormal or malicious traffic, often leading to unnecessary scaling, increased costs, and reduced system stability.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed text-justify">
              In addition, existing approaches lack integration between anomaly detection, predictive models, and execution layers. Scaling decisions are made without validating their impact, making systems less reliable in dynamic microservice environments.
            </p>

            <h3 className="text-3xl font-bold text-textPrimary mt-8">Proposed Solution</h3>
            <p className="text-textSecondary text-lg leading-relaxed text-justify">
              To address this, this research proposes a <strong>Threat-Aware Proactive Autoscaling System</strong> that combines multi-layer observability, machine learning, and intelligent validation. The system collects rich metrics across nodes, pods, applications, and service mesh interactions, and uses anomaly detection to filter abnormal traffic before making scaling decisions.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed text-justify">
              A predictive model then forecasts future resource requirements, enabling proactive scaling. Before applying any action, a validation layer tests the decision in a controlled environment and evaluates system stability. Only safe and reliable scaling actions are executed, while unsafe ones are rolled back.
            </p>
            <p className="text-textSecondary text-lg leading-relaxed text-justify italic font-medium">
              This approach ensures smarter, more secure, and efficient autoscaling for modern cloud-native systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
