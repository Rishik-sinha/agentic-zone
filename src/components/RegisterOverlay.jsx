import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationForm from './RegistrationForm';

const AnimatedLogo = () => (
    <motion.svg width="100" height="100" viewBox="0 0 100 100" initial="hidden" animate="visible" >
        <motion.path d="M 20 80 L 35 20 L 50 80" strokeWidth="4" stroke="#FF4D00" strokeLinecap="round" fill="transparent" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } } }} />
        <motion.path d="M 50 80 L 80 80" strokeWidth="4" stroke="#CCCCCC" strokeLinecap="round" fill="transparent" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 0.5, duration: 1, ease: "easeInOut" } } }} />
        <motion.circle cx="65" cy="50" r="15" strokeWidth="4" stroke="#CCCCCC" strokeLinecap="round" fill="transparent" variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: { delay: 1, duration: 1, ease: "easeInOut" } } }} />
    </motion.svg>
);

const RegisterOverlay = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-2xl">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white text-4xl leading-none hover:text-gray-300 transition-colors z-10"
          aria-label="Close registration form"
        >
          &times;
        </button>

        <AnimatePresence>
          {!showForm ? (
            <motion.div
              key="welcome"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center pt-12"
            >
              <AnimatedLogo />
              <h1 className="text-4xl md:text-5xl font-bold mt-8">If you are reading this... you're smart !</h1>
              <p className="text-lg text-gray-400 mt-4">AI is about to change your business for good</p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-10 px-10 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors duration-300 transform hover:scale-105"
              >
                Start
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <RegistrationForm />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RegisterOverlay;