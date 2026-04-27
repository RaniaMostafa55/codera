import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import React from 'react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <motion.a
      href="https://wa.me/201018168893" // Replace with actual number
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-2 -right-2 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-white"></span>
      </span>
    </motion.a>
  );
};
