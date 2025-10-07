import React from 'react';
import { motion } from 'framer-motion';

import Image1 from '../assets/ai1.png';
import Image2 from '../assets/ai2.png';
import Image3 from '../assets/ai3.png';

const WhatYoullBuild = () => {
  const projects = [
    {
      title: 'Intelligent Email Auto-Agent',
      description: 'Build an AI that reads, understands, and categorizes incoming emails. You\'ll learn to parse content, classify intent (e.g., support ticket, sales lead), and use an LLM to generate context-aware replies, freeing up hours of manual email management.',
      image: Image1
    },
    {
      title: 'AI-Powered Chat Bot',
      description: 'Create a fully functional Telegram or Slack bot that leverages an LLM for smart, conversational responses. Connect it to a knowledge base or external APIs to answer user questions, perform actions, and provide 24/7 automated support.',
      image: Image2
    },
    {
      title: 'No-Code Integrated Workflows',
      description: 'Design powerful, event-driven workflows. For example, trigger a Python script from a new Google Sheet entry, process data with an AI, and then post the result to Slack, all seamlessly connected with tools like Zapier or n8n.',
      image: Image3
    }
  ];
  
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          What You’ll Build 
        </h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div key={project.title} className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              
              {/* Text Column */}
              <motion.div 
                className={`text-left ${index % 2 !== 0 ? 'md:order-last' : ''}`}
                initial={{ opacity: 0, x: index % 2 !== 0 ? 100 : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Image Column */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 !== 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, type: 'spring' }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-2/3 mx-auto rounded-lg shadow-2xl shadow-green-900/40"
                />
              </motion.div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYoullBuild;