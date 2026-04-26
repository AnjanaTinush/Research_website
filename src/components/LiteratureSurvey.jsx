import React from 'react';

const LiteratureSurvey = () => {
  return (
    <section id="literature" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-10 text-textPrimary">Literature Survey</h2>
          <div className="space-y-8 text-textSecondary leading-relaxed text-lg text-justify opacity-90">
            <p>
              Existing autoscaling solutions in cloud-native environments, such as Kubernetes Horizontal Pod Autoscaler (HPA), primarily depend on reactive metrics like CPU and memory usage. While effective for general scaling, these approaches fail to consider traffic behavior and intent.
            </p>
            <p>
              Recent research explores predictive autoscaling using time-series models like LSTM, enabling systems to anticipate future demand. However, these approaches still lack security awareness. Parallel work in anomaly detection using machine learning techniques such as Autoencoders, Isolation Forest, and One-Class SVM has shown promise in identifying unusual patterns in network traffic.
            </p>
            <p>
              Despite these advancements, there is a lack of integration between anomaly detection and autoscaling systems, which creates an opportunity for a more robust and intelligent solution.
            </p>
          </div>
        </div>
        
        <div className="flex-1 w-full flex flex-col gap-8">
          <div className="w-full aspect-[4/3] bg-surfaceLight rounded-3xl border border-gray-100 flex items-center justify-center text-textSecondary font-medium">
            <span>Research Visualization 1</span>
          </div>
          <div className="w-full aspect-[4/3] bg-surfaceLight rounded-3xl border border-gray-100 flex items-center justify-center text-textSecondary font-medium">
            <span>Research Visualization 2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;
