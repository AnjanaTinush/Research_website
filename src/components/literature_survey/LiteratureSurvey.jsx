import React from "react";
import { DIAGRAM, LAP_MOCK } from "../../assets";
import {
  Activity,
  ShieldAlert,
  BrainCircuit,
  CloudCog,
} from "lucide-react";

const LiteratureSurvey = () => {
  const highlights = [
    {
      icon: <CloudCog size={22} />,
      title: "Reactive Autoscaling",
      desc: "Traditional Kubernetes HPA mainly reacts to CPU and memory thresholds after workload changes occur.",
    },
    {
      icon: <BrainCircuit size={22} />,
      title: "Predictive Intelligence",
      desc: "Modern research introduces LSTM-based forecasting models to predict future traffic demand proactively.",
    },
    {
      icon: <ShieldAlert size={22} />,
      title: "Security Awareness",
      desc: "Machine learning anomaly detection helps identify malicious or abnormal traffic patterns in real time.",
    },
    {
      icon: <Activity size={22} />,
      title: "Research Gap",
      desc: "Current systems rarely combine intelligent anomaly detection with predictive autoscaling decisions.",
    },
  ];

  return (
    <section
      id="literature"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white section-padding"
    >
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#870470]/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/10 blur-3xl rounded-full" />

      <div className="relative z-10 flex flex-col items-start gap-16 mx-auto max-w-7xl lg:flex-row">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium border rounded-full bg-[#870470]/10 text-[#870470] border-[#870470]/20">
            Literature Review
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl text-textPrimary">
            Understanding the{" "}
            <span className="text-[#870470]">
              Research Landscape
            </span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-justify text-gray-700">
            <p>
              Existing autoscaling solutions in cloud-native environments, such
              as Kubernetes Horizontal Pod Autoscaler (HPA), primarily rely on
              reactive metrics including CPU and memory utilization. While these
              methods are effective for basic workload scaling, they fail to
              understand traffic behavior, request intent, and abnormal workload
              characteristics in modern distributed systems. Research on
              Kubernetes autoscaling has highlighted the limitations of
              traditional reactive scaling approaches when handling dynamic
              traffic patterns and unpredictable workloads.
              <a
                href="https://www.researchgate.net/publication/392075318_Kubernetes_Autoscaling_with_Machine_Learning_based_on_traffic_load_prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#870470] font-medium hover:underline"
              >
                [1]
              </a>
            </p>

            <p>
              Recent research has introduced predictive autoscaling approaches
              using machine learning and time-series forecasting models such as
              Long Short-Term Memory (LSTM). These models enable Kubernetes
              environments to forecast future demand patterns and proactively
              allocate resources before performance degradation occurs. Studies
              show that predictive scaling significantly improves resource
              utilization, scalability, and application responsiveness compared
              to traditional threshold-based methods.
              <a
                href="https://www.researchgate.net/publication/355263253_Deep_Learning-Based_Autoscaling_Using_Bidirectional_Long_Short-Term_Memory_for_Kubernetes"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#870470] font-medium hover:underline"
              >
                [2]
              </a>
            </p>

            <p>
              Parallel advancements in anomaly detection research have
              demonstrated the effectiveness of machine learning techniques such
              as Autoencoders, Isolation Forest, and One-Class SVM in
              identifying malicious or abnormal network traffic patterns. These
              approaches help cloud-native systems improve resilience by
              detecting unexpected traffic behavior, cyberattacks, and workload
              anomalies in real time.
              <a
                href="https://www.researchgate.net/publication/402145632_A_COMPARATIVE_STUDY_ANOMALY_DETECTION_IN_NETWORK_TRAFFIC_USING_MACHINE_LEARNING"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#870470] font-medium hover:underline"
              >
                [3]
              </a>
            </p>

            <p>
              Despite these advancements, most existing studies treat predictive
              autoscaling and anomaly detection as separate research areas.
              Current Kubernetes autoscaling frameworks still lack a unified
              intelligent architecture capable of distinguishing legitimate
              workload spikes from malicious or abnormal traffic while making
              autoscaling decisions. This creates a critical research gap in
              building secure, adaptive, and intelligent autoscaling systems for
              modern cloud-native environments.
              <a
                href="https://www.researchgate.net/publication/403307400_SPARK_Secure_Predictive_Autoscaling_for_Robust_Kubernetes"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[#870470] font-medium hover:underline"
              >
                [4]
              </a>
            </p>

            <p>
              Therefore, this research proposes a modern intelligent
              autoscaling framework that integrates predictive scaling,
              observability metrics, and anomaly-aware traffic analysis to
              improve scalability, resilience, security awareness, and resource
              efficiency within Kubernetes-based microservice environments.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col flex-1 w-full gap-8">
          {/* Diagram */}
          <div className="relative overflow-hidden border  bg-white/90 rounded-3xl border-white/50 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-[#870470]/5 to-transparent" />

            <div className="relative flex items-center justify-center w-full p-6 aspect-[4/3]">
              <img
                src={DIAGRAM}
                alt="Research Visualization"
                className="object-contain h-full transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Modern Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-5 transition-all duration-300 border bg-white/80 backdrop-blur-sm rounded-2xl border-gray-100  hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#870470]/10 text-[#870470] flex items-center justify-center mb-4">
                  {item.icon}
                </div>

                <h4 className="mb-2 text-lg font-semibold text-textPrimary">
                  {item.title}
                </h4>

                <p className="text-sm leading-relaxed text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop Mockup */}
      <div className="relative z-10 max-w-4xl mx-auto mt-24 group perspective-1000">
        <div className="absolute inset-0 blur-3xl bg-[#870470]/10 rounded-full scale-75" />

        <img
          src={LAP_MOCK}
          alt="Research Mockup"
          className="relative object-contain transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-[1deg]"
        />
      </div>
    </section>
  );
};

export default LiteratureSurvey;