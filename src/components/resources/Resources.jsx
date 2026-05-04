import React from "react";
import { motion } from "framer-motion";
import { FileText, Presentation } from "lucide-react";
import bannerPdf from "../../assets/images/Banner.pdf";
import { li } from "framer-motion/client";

const ResourceCard = ({
  title,
  date,
  type,
  action = "Download",
  icon,
  link,
  download = false,
}) => {
  const handleClick = () => {
    if (!link) return;

    if (download) {
      const a = document.createElement("a");
      a.href = link;
      a.download = typeof download === "string" ? download : title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between transition-all hover:border-primary"
    >
      {/* Top */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/20">
          {icon}
        </div>
        <h4 className="text-lg font-bold text-textPrimary">
          {title}
        </h4>
      </div>

      {/* Middle */}
      <div className="text-sm text-black space-y-1 mb-4">
        <p>Submitted on {date}</p>
        <p>{type}</p>
      </div>

      {/* Bottom */}
      <div className="flex justify-end">
        <button
          onClick={handleClick}
          className="text-primary font-medium hover:underline"
        >
          {action}
        </button>
      </div>
    </div>
  );
};

const Resources = () => {
  const documents = [
    {
      title: "Topic Assessment",
      date: "2024/01/19",
      type: "Group",
      link: "https://drive.google.com/drive/folders/1X0PlANKRfj-qcTC6x8tZ3GDpB_Vt75Di?usp=sharing",
    },
    {
      title: "Project Proposal",
      date: "2024/02/29",
      type: "Individual",
      link: "https://drive.google.com/drive/folders/1A1ZCjQZfKo5BOnGn9ysYmKBxpIXbvgSj?usp=sharing",
    },
    {
      title: "Status Documents I",
      date: "2024/05/06",
      type: "Individual",
    },
    {
      title: "Status Documents II",
      date: "2024/09/11",
      type: "Individual",
    },
    {
      title: "Research Papers",
      date: "2024/09/30",
      type: "Group",
    },
    {
      title: "Final Reports",
      date: "2024/12/01",
      type: "Group & Individual",
      link: "https://drive.google.com/drive/folders/1wGys-Whal3gFJpKurMqCtbI-66KhcVtD?usp=sharing",
    },
    {
      title: "Poster",
      date: "2024/10/28",
      type: "Group",
      link: bannerPdf,
      download: "Research_Poster.pdf",
    },
  ];

  const presentations = [
    {
      title: "Proposal Presentation",
      date: "2024/02/01",
      type: "Group",
      action: "View",
      link: "https://docs.google.com/presentation/d/1ayRRIlUjsrDQDa1EG2M-uBRbATJMenxX/edit?usp=sharing&ouid=106479244210891845492&rtpof=true&sd=true",
    },
    {
      title: "Progress Presentation I",
      date: "2024/05/06",
      type: "Group",
      action: "View",
      link: "https://docs.google.com/presentation/d/1YA9gl4x_2gZTq-1Tq8_Djr6kj9cJIk8a/edit?usp=sharing&ouid=106479244210891845492&rtpof=true&sd=true",
    },
    {
      title: "Progress Presentation II",
      date: "2024/09/11",
      type: "Group",
      action: "View",
      link: "https://docs.google.com/presentation/d/1hiYVmHnCGNiI4cs-rweB1g4iggjfw7Lr/edit?usp=sharing&ouid=106479244210891845492&rtpof=true&sd=true",
    },
    {
      title: "Final Presentation",
      date: "2024/10/28",
      type: "Group",
      action: "View",
    },
  ];

  return (
    <section id="resources" className="section-padding bg-backgroundDefault">
      <div className="max-w-7xl mx-auto px-4 space-y-16">

        {/* DOCUMENTS */}
        <div>
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            Documents
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <ResourceCard
                key={index}
                {...doc}
                icon={<FileText className="text-primary" size={20} />}
              />
            ))}
          </div>
        </div>

        {/* PRESENTATIONS */}
        <div>
          <h2 className="text-3xl font-bold text-textPrimary mb-8">
            Presentations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {presentations.map((item, index) => (
              <ResourceCard
                key={index}
                {...item}
                icon={<Presentation className="text-primary" size={20} />}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Resources;