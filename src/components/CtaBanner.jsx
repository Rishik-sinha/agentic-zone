import React from 'react';
import { motion } from 'framer-motion';

const CtaBanner = ({ onBookNow }) => {
  return (
    <section className="bg-black py-10">
      <motion.div 
        className="w-full bg-neutral-900 border-y border-blue-500/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="container mx-auto max-w-5xl px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-0">
              Ready to Build the Future of Automation?
            </h2>
            <button 
              onClick={onBookNow}
              className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-colors duration-300 transform hover:scale-105 flex-shrink-0"
            >
              Reserve Your Seat
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CtaBanner;