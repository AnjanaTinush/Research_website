import React from "react";
import { DIAGRAM, LAP_MOCK } from "../../assets";

const LiteratureSurvey = () => {
  return (
    <section id="literature" className="bg-white section-padding">
      <div className="flex flex-col items-start gap-16 mx-auto max-w-7xl lg:flex-row">
        <div className="flex-1">
          <h2 className="mb-10 text-3xl font-bold text-textPrimary">
            Literature Survey
          </h2>
          <div className="space-y-2 text-lg leading-relaxed text-justify text-black opacity-90">
            <p>
              Existing autoscaling solutions in cloud-native environments, such
              as Kubernetes Horizontal Pod Autoscaler (HPA), primarily depend on
              reactive metrics like CPU and memory usage. While effective for
              general scaling, these approaches fail to consider traffic
              behavior and intent.
            </p>
            <p>
              Recent research explores predictive autoscaling using time-series
              models like LSTM, enabling systems to anticipate future demand.
              However, these approaches still lack security awareness. Parallel
              work in anomaly detection using machine learning techniques such
              as Autoencoders, Isolation Forest, and One-Class SVM has shown
              promise in identifying unusual patterns in network traffic.
            </p>
            <p>
              Despite these advancements, there is a lack of integration between
              anomaly detection and autoscaling systems, which creates an
              opportunity for a more robust and intelligent solution.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-1 w-full gap-8">
          <div className="w-full aspect-[4/3] bg-white rounded-3xl border border-gray-100 flex items-center justify-center text-textSecondary font-medium">
            <img
              src={DIAGRAM}
              alt="Research Visualization 1"
              className="object-contain h-full"
            />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto mt-16 group perspective-1000">
        <img
          src={LAP_MOCK}
          alt="Research Visualization 2"
          className="object-contain 
    transition-all duration-500 ease-out 
    group-hover:scale-110 
    group-hover:rotate-[1.7deg]"
        />
      </div>
    </section>
  );
};

export default LiteratureSurvey;
