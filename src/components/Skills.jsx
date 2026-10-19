import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal, Cpu, Brain, Award, GraduationCap } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 size={24} />,
    skills: ["C#", "Python", "ASP.NET MVC", ".NET Core", "Web API", "WinForms", "Windows Services", "Entity Framework", "LINQ"]
  },
  {
    title: "Front-End & Reporting",
    icon: <Layout size={24} />,
    skills: ["JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap", "Telerik Reporting", "Crystal Reports"]
  },
  {
    title: "Databases & DevOps",
    icon: <Database size={24} />,
    skills: ["SQL Server", "Supabase", "Git", "GitHub", "Azure DevOps", "Visual Studio", "VS Code"]
  },
  {
    title: "Hardware & IoT",
    icon: <Cpu size={24} />,
    skills: ["Raspberry Pi", "Arduino Uno"]
  },
  {
    title: "AI & Productivity Tools",
    icon: <Brain size={24} />,
    skills: ["ChatGPT", "Claude AI", "Gemini AI", "Google Antigravity", "Google AI Studio", "Lovable AI"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Technical <span className="text-neonRed">Skills</span></h2>
        <div className="flex-grow h-px bg-gradient-to-r from-neonRed/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-panel p-6 group hover:border-neonRed/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="p-3 rounded-lg bg-white/5 text-neonRed group-hover:bg-neonRed group-hover:text-white transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1.5 bg-obsidian text-gray-300 text-sm rounded-md border border-white/5 group-hover:border-neonRed/20 transition-colors duration-300 cursor-default hover:text-white hover:bg-white/10">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Award size={28} className="text-neonRed" />
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <ul className="space-y-6">
            <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-neonRed before:rounded-full">
              <h4 className="text-lg font-semibold text-white">Python Django Full-Stack Certification</h4>
              <p className="text-gray-400 text-sm">FinEdge IT Solutions (2023)</p>
            </li>
            <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-neonRed before:rounded-full">
              <h4 className="text-lg font-semibold text-white">Certified Cyber Security Analyst</h4>
              <p className="text-gray-400 text-sm">Red Team Hacker Academy (2022 – 2023)</p>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-panel p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={28} className="text-neonRed" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-neonRed before:rounded-full">
            <h4 className="text-lg font-semibold text-white">Bachelor of Electronics (BSc ES)</h4>
            <p className="text-neonRed text-sm mb-1">College of Applied Science Vazhakkad (Calicut University)</p>
            <p className="text-gray-400 text-sm font-mono">2020 – 2023</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
