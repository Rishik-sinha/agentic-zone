import React from 'react';
import { motion } from 'framer-motion';
import AgenticImage from '../assets/agenticai1.png';

const About = () => {
  const learningObjectives = [
    'Grasp the core concepts of Agentic AI and Large Language Models (LLMs).',
    'Automate real-world tasks using Python scripts for APIs, email, and messaging.',
    'Integrate powerful AI models like OpenAI and Gemini into your applications.',
    'Build and connect complex workflows using leading No-Code tools like n8n and Zapier.',
    'Deploy a fully functional, portfolio-ready AI Automation project from scratch.',
  ];

  const schedule = [
    { day: 1, topic: 'Foundations of Python & Automation', outcome: 'Python basics, APIs, and automating tasks' },
    { day: 2, topic: 'Integrating AI & No-Code Tools', outcome: 'Connect to LLMs (OpenAI/Gemini) & build n8n/Zapier workflows' },
    { day: 3, topic: 'Project Build, Deployment & Showcase', outcome: 'Build and deploy a live AI Agent from scratch' },
  ];

  const LightningConnector = () => (
    <svg className="w-16 h-8 text-green-800 shrink-0" viewBox="0 0 100 50" preserveAspectRatio="none">
      <polyline points="0,25 20,25 30,10 40,40 50,25 70,25 80,10 90,40 100,25" fill="none" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
  
  const customStyles = `
    .holographic-panel {
      background: linear-gradient(135deg, rgba(29, 78, 216, 0.1), rgba(52, 211, 153, 0.1));
      transition: background 0.5s ease, box-shadow 0.5s ease;
    }
    .holographic-panel:hover {
      background: linear-gradient(135deg, rgba(29, 78, 216, 0.2), rgba(52, 211, 153, 0.2));
      box-shadow: 0 0 25px rgba(52, 211, 153, 0.5);
    }
    .animate-marquee { 
      animation: marquee 25s linear infinite;
    }
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }
  `;

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <style>{customStyles}</style>
      
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        <div className="text-left">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Transform Your Workflow with AI
          </motion.h2>
          
          <motion.p 
            className="text-gray-400 leading-relaxed max-w-3xl"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            This isn't just a course; it's a 3-day hands-on sprint into the future of automation. You'll move beyond basic scripts and learn to build intelligent AI agents that can reason, plan, and execute complex tasks, giving you a massive career advantage.
          </motion.p>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">What You'll Learn</h3>
            <div className="holographic-panel backdrop-blur-sm p-8 rounded-2xl border border-green-500/30">
              <ul className="space-y-4 text-left">
                {learningObjectives.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-400 mr-4 mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={AgenticImage} alt="Agentic AI Illustration" className="rounded-2xl shadow-2xl shadow-green-900/40" />
        </motion.div>
      </div>

      {/* Full-width section for the workshop plan */}
      <div className="container mx-auto max-w-7xl mt-20">
        <motion.div 
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-white text-center">3-Day Workshop Plan</h3>
          <div className="group w-full overflow-x-hidden">
            <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]">
              {[...schedule, ...schedule].map((item, index) => (
                <React.Fragment key={`${item.day}-${index}`}>
                  <div className="holographic-panel backdrop-blur-sm p-4 rounded-lg border border-green-500/30 w-80 shrink-0 mx-4 text-left">
                    <p className="font-bold text-white">Day {item.day}: {item.topic}</p>
                    <p className="text-gray-400 text-sm">Outcome: {item.outcome}</p>
                  </div>
                  {index < (schedule.length * 2) - 1 && <LightningConnector />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;