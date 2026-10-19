import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaSms } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct WhatsApp message with user details
    const text = `Hi Abhay,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `https://wa.me/918281604177?text=${encodeURIComponent(text)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Get in <span className="text-neonRed">Touch</span></h2>
        <div className="flex-grow h-px bg-gradient-to-r from-neonRed/50 to-transparent"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Let's Work Together</h3>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Looking for a dedicated .NET Developer with ERP and enterprise expertise? Reach out via WhatsApp, phone, SMS, email, or social profiles below.
            </p>
          </div>

          <div className="space-y-5">
            <a 
              href="https://wa.me/918281604177" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 text-[#25D366]">
                <FaWhatsapp size={22} />
              </div>
              <div>
                <p className="text-sm text-gray-400">WhatsApp</p>
                <p className="text-white font-medium group-hover:text-[#25D366] transition-colors">+91 8281604177</p>
              </div>
            </a>

            <a href="tel:+918281604177" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-neonRed group-hover:text-white transition-all duration-300 text-neonRed">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white font-medium group-hover:text-neonRed transition-colors">+91 8281604177</p>
              </div>
            </a>

            <a href="sms:+918281604177" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-[#0084FF] group-hover:text-white transition-all duration-300 text-[#0084FF]">
                <FaSms size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">SMS</p>
                <p className="text-white font-medium group-hover:text-[#0084FF] transition-colors">+91 8281604177</p>
              </div>
            </a>

            <a href="mailto:abhay.krishna1811@gmail.com" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:bg-neonRed group-hover:text-white transition-all duration-300 text-neonRed">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white font-medium group-hover:text-neonRed transition-colors">abhay.krishna1811@gmail.com</p>
              </div>
            </a>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-neonRed">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white font-medium">Calicut / Kozhikode, Kerala, India</p>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-sm text-gray-400 mb-3">Connect on Social Profiles</p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/abhay-krishna-p-798285229" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn Profile"
                className="w-11 h-11 rounded-lg glass-panel flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>
              <a 
                href="https://github.com/Abhaykrishna18" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub Profile"
                className="w-11 h-11 rounded-lg glass-panel flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
              <a 
                href="https://www.instagram.com/__.a_.b_h._a._y.__/" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="Instagram Profile"
                className="w-11 h-11 rounded-lg glass-panel flex items-center justify-center text-gray-300 hover:text-white hover:bg-[#E1306C] hover:border-[#E1306C] transition-all duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://wa.me/918281604177" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="WhatsApp Chat"
                className="w-11 h-11 rounded-lg glass-panel flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-panel p-8 relative"
        >
          {isSent && (
            <div className="mb-6 p-4 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center gap-3 text-white">
              <CheckCircle2 size={20} className="text-[#25D366] flex-shrink-0" />
              <p className="text-sm">WhatsApp opened! Your message has been prepared for +91 8281604177.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonRed focus:ring-1 focus:ring-neonRed transition-all duration-300"
                placeholder="Enter your name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonRed focus:ring-1 focus:ring-neonRed transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonRed focus:ring-1 focus:ring-neonRed transition-all duration-300"
                placeholder="Project Inquiry / Job Opportunity"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4" 
                required
                className="w-full bg-obsidian/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonRed focus:ring-1 focus:ring-neonRed transition-all duration-300 resize-none"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20ba59] hover:to-[#0f7a6e] text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.4)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] disabled:opacity-70"
            >
              {isSubmitting ? (
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              ) : (
                <>
                  <FaWhatsapp size={20} />
                  <span>Send Message to WhatsApp</span>
                  <Send size={16} />
                </>
              )}
            </button>

            <a
              href="sms:+918281604177"
              className="w-full py-3 rounded-lg border border-white/10 hover:border-neonRed/40 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium flex items-center justify-center gap-2 transition-all duration-300"
            >
              <FaSms size={18} className="text-[#0084FF]" />
              <span>Or Click to Send SMS (+91 8281604177)</span>
            </a>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
