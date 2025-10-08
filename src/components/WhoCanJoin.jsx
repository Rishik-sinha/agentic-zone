import React from 'react';
import { motion } from 'framer-motion';

const WhoCanJoin = ({ onLearnMoreClick }) => {
  const audience = [
    { title: 'Students', description: 'Future Innovators', features: ['Learn foundational skills', 'Build a portfolio project', 'Get certified', 'Community access'] },
    { title: 'Professionals', description: 'AI-Powered Strategists', features: ['Upskill for your career', 'Automate daily tasks', 'Integrate with existing tools', 'Lead AI initiatives'] },
    { title: 'Developers', description: 'Code Weavers', features: ['Master agentic frameworks', 'Advanced API integration', 'Deploy custom agents', 'Contribute to workflows'] },
    { title: 'Enthusiasts', description: 'Curiosity Amplifiers', features: ['Explore AI capabilities', 'Build personal projects', 'Join a learning community', 'No-code friendly'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const CheckIcon = () => (
    <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
  );

  const customStyles = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes rotate {
      to { --angle: 360deg; }
    }
    .luminant-card {
      position: relative;
      z-index: 0;
    }
    .luminant-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border-radius: 1rem;
      border: 2px solid transparent;
      background: conic-gradient(from var(--angle), transparent 20%, #3b82f6, #60a5fa, transparent 80%) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: rotate 4s linear infinite;
      opacity: 1;
      pointer-events: none; /* ✅ allow clicking through glow layer */
    }
  `;

  return (
    <section className="bg-black text-white py-20 px-6">
      <style>{customStyles}</style>
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
          Who is This Workshop For?
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {audience.map((person, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="luminant-card bg-neutral-900 rounded-2xl border border-neutral-700 overflow-hidden flex flex-col h-full"
            >
              <div className="py-5 font-bold uppercase text-lg bg-neutral-800">
                {person.title}
              </div>

              <div className="flex justify-center py-8">
                <div className="w-32 h-32 rounded-full flex items-center justify-center text-center p-4 border-4 bg-neutral-800/50 border-neutral-700">
                  <span className="text-xl font-bold">{person.description}</span>
                </div>
              </div>

              <div className="px-8 pb-8 space-y-4 flex-grow">
                {person.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-left">
                    <CheckIcon />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              {/* ✅ Button now clickable and hover works */}
              <div className="p-8 mt-auto relative z-10">
                <button
                  type="button"
                  onClick={onLearnMoreClick}
                  className="w-full py-3 font-bold rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
