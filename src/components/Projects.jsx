import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "BIZARABIA",
    subtitle: "Inventory Management ERP Software",
    description: "Live enterprise solution handling sales, purchase, stock, and accounting operations. Built full ZATCA e-invoicing engine with real-time clearance and compliance check reporting.",
    tags: [".NET MVC", "C#", "SQL Server", "ZATCA"],
    link: "#"
  },
  {
    id: 2,
    title: "Online Campus & TCS",
    subtitle: "School/College Management ERP Suite",
    description: "Integrated biometric attendance via Windows Services, dynamic digital wallet transaction window, HPC Holistic Report Card engine, and dynamic Fee Collection module.",
    tags: [".NET Core", "Windows Services", "Entity Framework"],
    link: "#"
  },
  {
    id: 3,
    title: "Haritakarmasena",
    subtitle: "Waste Management Platform",
    description: "Community waste management system with multi-role logins (Residents, Members, Ward Supervisors).",
    tags: ["Python", "Django", "MySQL", "JavaScript"],
    link: "#"
  },
  {
    id: 4,
    title: "Smart Medical Mirror",
    subtitle: "IoT-enabled Smart Mirror",
    description: "IoT-enabled smart mirror interface featuring dynamic voice commands and health dashboard.",
    tags: ["Raspberry Pi", "Python", "Django", "IoT"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured <span className="text-neonRed">Projects</span></h2>
        <div className="flex-grow h-px bg-gradient-to-r from-neonRed/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-8 group hover:-translate-y-2 transition-all duration-300 hover:border-neonRed/40 hover:shadow-[0_10px_30px_rgba(255,51,75,0.15)] flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-lg bg-obsidian border border-neonRed/30 flex items-center justify-center text-neonRed group-hover:scale-110 group-hover:shadow-[0_0_15px_#FF334B] transition-all duration-300">
                <span className="font-mono font-bold text-xl">{project.id}</span>
              </div>
              <div className="flex gap-3 text-gray-400">
                <a 
                  href="https://github.com/Abhaykrishna18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="View on GitHub"
                  className="hover:text-neonRed transition-colors"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href="https://github.com/Abhaykrishna18" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  title="Project Details"
                  className="hover:text-neonRed transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-neonRed transition-colors">{project.title}</h3>
            <h4 className="text-sm font-medium text-gray-400 mb-4">{project.subtitle}</h4>
            
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono text-neonRed bg-neonRed/10 px-3 py-1 rounded-full border border-neonRed/20">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
