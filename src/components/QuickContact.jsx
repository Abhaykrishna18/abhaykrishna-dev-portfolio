import React, { useState } from 'react';
import { Mail, Plus, X } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp, FaSms } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const QuickContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const actionButtons = [
    { icon: <FaWhatsapp size={22} />, label: "WhatsApp (+91 8281604177)", href: "https://wa.me/918281604177", color: "hover:bg-[#25D366] text-[#25D366] hover:text-white" },
    { icon: <FaSms size={20} />, label: "SMS (+91 8281604177)", href: "sms:+918281604177", color: "hover:bg-[#0084FF] text-[#0084FF] hover:text-white" },
    { icon: <FaGithub size={20} />, label: "GitHub", href: "https://github.com/Abhaykrishna18", color: "hover:bg-[#333] text-gray-200 hover:text-white" },
    { icon: <FaLinkedin size={20} />, label: "LinkedIn", href: "https://www.linkedin.com/in/abhay-krishna-p-798285229", color: "hover:bg-[#0077b5] text-[#0077b5] hover:text-white" },
    { icon: <FaInstagram size={20} />, label: "Instagram", href: "https://www.instagram.com/__.a_.b_h._a._y.__/", color: "hover:bg-[#E1306C] text-[#E1306C] hover:text-white" },
    { icon: <Mail size={20} />, label: "Email", href: "mailto:abhay.krishna1811@gmail.com", color: "hover:bg-[#EA4335] text-[#EA4335] hover:text-white" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col-reverse items-end gap-3">
      <button 
        onClick={toggleOpen}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-crimson to-ruby text-white flex items-center justify-center shadow-[0_0_20px_rgba(255,51,75,0.5)] hover:shadow-[0_0_30px_rgba(255,51,75,0.8)] transition-all duration-300 z-50"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <Plus size={28} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col-reverse gap-3 items-end mb-2">
            {actionButtons.map((btn, index) => (
              <motion.a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className={`w-12 h-12 rounded-full glass-panel flex items-center justify-center text-white ${btn.color} transition-all duration-300 group relative`}
              >
                {btn.icon}
                <span className="absolute right-14 bg-obsidian border border-white/10 px-3 py-1.5 rounded-md text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  {btn.label}
                </span>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuickContact;
