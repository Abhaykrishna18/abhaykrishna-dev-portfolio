import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickContact from './components/QuickContact';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="relative min-h-screen bg-obsidian text-gray-200 selection:bg-neonRed/30">
      <Background3D />
      <div className="relative z-10 flex flex-col items-center w-full">
        <Navbar />
        <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12 flex flex-col gap-24">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
      <QuickContact />
    </div>
  );
}

export default App;
