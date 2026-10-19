import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="glass-panel p-8 md:p-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-neonRed">Me</span></h2>
          <div className="flex-grow h-px bg-gradient-to-r from-neonRed/50 to-transparent"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a passionate <span className="text-white font-medium">.NET Developer</span> with over 2.5 years of experience crafting robust enterprise web applications, seamless ERP solutions, and ZATCA-compliant e-invoicing systems.
            </p>
            <p>
              My core focus lies in architecting scalable solutions, automating complex ERP workflows, optimizing performance, and writing clean, maintainable code. I continuously integrate modern AI-assisted workflows (using tools like ChatGPT, Antigravity, and Claude AI) to enhance development speed and code quality.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center space-y-2 neon-border">
              <span className="text-4xl font-bold glow-text">2.5+</span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">Years Exp</span>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center space-y-2 border border-white/10">
              <span className="text-4xl font-bold text-white">10+</span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">Projects</span>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center space-y-2 border border-white/10">
              <span className="text-4xl font-bold text-white">ERP</span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">Specialist</span>
            </div>
            <div className="glass-panel p-6 flex flex-col items-center justify-center text-center space-y-2 border border-white/10">
              <span className="text-4xl font-bold text-white">ZATCA</span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">Compliant</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
