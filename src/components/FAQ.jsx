import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
  {
    question: 'Who is this workshop for?',
    answer: 'This workshop is designed for students, professionals, developers, and any tech enthusiast who wants to gain a massive career advantage by learning to build intelligent AI agents.'
  },
  {
    question: 'What tools will we be using?',
    answer: 'We will primarily use Python for scripting and logic. We\'ll integrate powerful AI models like OpenAI and Gemini, and also connect our scripts to leading No-Code tools like n8n and Zapier.'
  },
  {
    question: 'Do I need to be an expert in Python?',
    answer: 'No. The workshop starts with a Python basics refresher. As long as you have some basic programming curiosity, you\'ll be able to follow along.'
  },
  {
    question: 'What will I build by the end of the 3 days?',
    answer: 'You will build and deploy a fully functional, portfolio-ready AI Automation project, such as an intelligent email auto-agent or a conversational lead bot. You will also receive a certificate of completion.'
  }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700/50">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4"
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 pr-10">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FaqIcon = () => (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-900/50 border border-green-500/30 mb-4">
        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
          
          {/* Left Column: Title -- Added -ml-4 here */}
          <div className="md:col-span-1 -ml-4">
            <FaqIcon />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              FAQs about AI Automation
            </h2>
          </div>

          {/* Right Column: Accordion */}
          <div className="md:col-span-2">
            {faqData.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;