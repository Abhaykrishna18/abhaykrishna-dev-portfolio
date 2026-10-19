import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "DotNet Developer",
    company: "MeshiLogic Software Consultants",
    location: "Kinfra Techno Park, Calicut",
    duration: "May 2024 – Present",
    points: [
      "Developed & maintained web/desktop ERP applications using .NET MVC, C#, WinForms, and SQL Server.",
      "Researched and integrated full ZATCA-compliant e-invoicing solutions.",
      "Optimized database performance and application execution efficiency."
    ]
  },
  {
    id: 2,
    role: "DotNet Developer Intern",
    company: "FinEdge IT Solutions",
    location: "Calicut",
    duration: "Jan 2024 – May 2024",
    points: [
      "Worked on real-time web application development with .NET Core, ASP.NET MVC, Entity Framework, and SQL Server."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Work <span className="text-neonRed">Experience</span></h2>
        <div className="flex-grow h-px bg-gradient-to-r from-neonRed/50 to-transparent"></div>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="glass-panel p-8 relative overflow-hidden group hover:border-neonRed/30 transition-colors duration-500"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neonRed to-ruby transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                <div className="flex items-center gap-2 text-gray-400 font-medium">
                  <Briefcase size={16} className="text-neonRed" />
                  <span>{exp.company}</span>
                  <span className="hidden md:inline">•</span>
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-neonRed bg-neonRed/10 px-4 py-2 rounded-full text-sm font-mono whitespace-nowrap">
                <Calendar size={16} />
                {exp.duration}
              </div>
            </div>

            <ul className="space-y-3 text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neonRed flex-shrink-0 shadow-[0_0_5px_#FF334B]"></span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
