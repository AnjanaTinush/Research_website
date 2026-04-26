import React from 'react';

const LiteratureSurvey = () => {
  return (
    <section id="literature" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-10 text-textPrimary">Literature Survey</h2>
          <div className="space-y-8 text-textSecondary leading-relaxed text-lg text-justify opacity-90">
            <p>
              Recent research has revealed gaps in coral reef conservation efforts, particularly in integrating advanced methodologies and technologies. In the area of species identification, studies have utilized CNNs and ResNet models to classify corals from images, highlighting the potential of machine learning but underscoring the need for user interaction and geographic information integration for effective conservation.
            </p>
            <p>
              In optimizing conservation tasks, reinforcement learning has been demonstrated for scheduling in dynamic environments. The studies indicate a need for frameworks that incorporate real-time feedback and adapt to environmental changes to improve decision-making and resource allocation.
            </p>
            <p>
              Technological advancements are also being employed to enhance the efficiency of conservation strategies. The integration of Geographic Information Systems (GIS), machine learning, and explainable AI has been proposed to optimize resource management and decision-making processes, leading to more effective coral reef restoration.
            </p>
            <p>
              Moreover, the use of Knowledge Graphs in recommendation systems suggests significant potential in improving scholarly paper recommendations through advanced weighting strategies. However, there remains a gap in adapting these systems to real-time changes, highlighting an area for further development in dynamic data integration and adaptive algorithms.
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
