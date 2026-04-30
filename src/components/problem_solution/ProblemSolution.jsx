import React from "react";
import { THUMB } from "../../assets";

const ProblemSolution = () => {
  const videoUrl =
    "https://mysliit-my.sharepoint.com/:v:/g/personal/it22919014_my_sliit_lk/IQCQKrj1i00vTLhwafwFIy5aAZYz0BGtQk7hBx2rHBHrSGw";

  return (
    <section id="solution" className="section-padding bg-backgroundDefault">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-16 text-3xl font-bold text-center text-textPrimary">
          Research Problem & Proposed Solution
        </h2>

        <div className="flex flex-col items-center gap-16 lg:flex-row">

          {/* ================= VIDEO SECTION ================= */}
          <div className="flex-1 w-full">
            <div className="relative w-full overflow-hidden bg-gray-100 border border-primary rounded-3xl aspect-video group">

              {/* Thumbnail */}
              <img
                src={THUMB}
                alt="Video Thumbnail"
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

              {/* Play Button */}
              <a
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute flex items-center justify-center w-20 h-20 transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full shadow-xl left-1/2 top-1/2 hover:scale-110 hover:bg-red-600"
              >
                <svg
                  className="w-10 h-10 ml-1 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ================= TEXT SECTION ================= */}
          <div className="flex-1 space-y-8">
            <h3 className="text-xl font-bold text-textPrimary">
              The Problem
            </h3>
            <p className="text-lg leading-relaxed text-justify text-black">
              Modern Kubernetes autoscaling depends mainly on CPU and memory
              metrics, without understanding traffic behavior. This makes it
              difficult to distinguish between real demand and abnormal or
              malicious activity, leading to unnecessary scaling, higher costs,
              and reduced system stability.
            </p>

            <h3 className="mt-8 text-xl font-bold text-textPrimary">
              Proposed Solution
            </h3>
            <p className="text-lg leading-relaxed text-justify text-black">
              To solve this, the research proposes a Threat-Aware Proactive
              Autoscaling System that combines multi-layer metrics, anomaly
              detection, and predictive modeling. Scaling decisions are validated
              in a controlled environment before execution, ensuring only safe
              and reliable actions are applied, resulting in smarter and more
              efficient autoscaling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;