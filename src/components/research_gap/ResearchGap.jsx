import React from "react";
import { motion } from "framer-motion";

const ResearchGap = () => {
  const gaps = [
    {
      id: "01",
      title: "Limited Multi-Layer Metrics Utilization",
      content:
        "Existing autoscaling systems rely on a narrow set of metrics such as CPU and memory, which do not fully represent system behavior. They ignore critical dimensions like application-level performance, inter-service communication, and topology-based relationships. In contrast, modern microservice environments require multi-layer observability across node, pod, application, and service mesh levels to accurately capture system dynamics.",
    },
    {
      id: "02",
      title: "Isolated Predictive Models Without Context Awareness",
      content:
        "Time-series forecasting models such as LSTM are capable of predicting future workloads, but they operate independently without incorporating enriched features like topology-aware signals or traffic behavior. Existing approaches fail to combine real-time telemetry, feature engineering, and prediction into a unified pipeline, limiting the accuracy and effectiveness of proactive scaling decisions.",
    },
    {
      id: "03",
      title: "Absence of Validation and Safe Execution Mechanisms",
      content:
        "Current autoscaling approaches directly apply scaling decisions to production environments without validation. There is no mechanism to test system behavior under stress or failure conditions before execution. The lack of chaos-based validation, resilience scoring, and rollback mechanisms increases the risk of unstable deployments and incorrect scaling actions.",
    },
    {
      id: "04",
      title: "Lack of Integrated Anomaly-Aware Scaling",
      content:
        "Although machine learning-based anomaly detection techniques are widely studied, they are not integrated into autoscaling decision pipelines. Current systems scale resources without validating whether traffic is legitimate or malicious. This absence of anomaly-awareness leads to unnecessary scaling triggered by abnormal traffic patterns, increasing operational cost and reducing system reliability.",
    },
  ];

  return (
    <section id="gap" className="section-padding bg-surfaceLight">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-4xl font-bold">
          <span className="text-3xl text-textPrimary">Research Gap</span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {gaps.map((gap) => (
            <div className="p-8 transition-all bg-white border border-gray-100 cursor-default rounded-3xl hover:border-primary group">
              <div className="flex items-start gap-6">
                <span className="text-4xl font-black transition-colors text-primary">
                  {gap.id}
                </span>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-tight text-textPrimary">
                    {gap.title}
                  </h3>
                  <p className="text-lg text-justify text-black">
                    {gap.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchGap;
