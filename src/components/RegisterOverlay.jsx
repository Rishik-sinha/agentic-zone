import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RegistrationForm from './RegistrationForm';
import logo from '../assets/logo.png';

const RegisterOverlay = ({ onClose }) => {
  const [showForm, setShowForm] = useState(false);

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

  const welcomeVariants = {
    initial: { y: 0, opacity: 1 },
    animate: { y: 0, opacity: 1, transition },
    exit: { y: -50, opacity: 0, transition }
  };

  const formVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition },
    exit: { y: -50, opacity: 0, transition }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center z-50 p-6 overflow-y-auto"
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

        <AnimatePresence mode="wait">
          {!showForm ? (
            <motion.div
              key="welcome"
              variants={welcomeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center pt-12"
            >
              <motion.img 
                src={logo}
                alt="Company Logo"
                className="w-32 h-32"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <h1 className="text-4xl md:text-5xl font-bold mt-8 text-white">If you are reading this... you're smart !</h1>
              <p className="text-lg text-neutral-200 mt-4">AI is about to change your business for good</p>
              <button
                onClick={() => setShowForm(true)}
                className="mt-10 px-10 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-colors duration-300 transform hover:scale-105"
              >
                Start
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              variants={formVariants}
              initial="initial"
              animate="animate"
              exit="exit"
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