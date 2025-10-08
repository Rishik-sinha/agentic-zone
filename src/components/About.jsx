import React from 'react';
import { motion } from 'framer-motion';
import AgenticImage from '../assets/agenticai1.png';

const About = React.forwardRef((props, ref) => {
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

  const customStyles = `
    @property --angle {
      syntax: '<angle>';
      initial-value: 0deg;
      inherits: false;
    }
    @keyframes rotate {
      to { --angle: 360deg; }
    }
    .holographic-panel-blue {
      background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(59, 130, 246, 0.1));
    }
    .luminant-card {
      position: relative;
      background: rgba(16, 24, 32, 0.8);
      border: 1px solid rgba(59, 130, 246, 0.2);
    }
    .luminant-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border-radius: 0.75rem;
      border: 2px solid transparent;
      background: conic-gradient(from var(--angle), transparent 20%, #3b82f6, #60a5fa, transparent 80%) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: rotate 4s linear infinite;
      opacity: 1;
    }
  `;

  return (
    <section ref={ref} id="about-section" className="bg-black text-white py-20 px-6 overflow-hidden">
      <style>{customStyles}</style>
      
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <motion.div 
          className="flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <img src={AgenticImage} alt="Agentic AI Illustration" className="rounded-2xl shadow-2xl shadow-blue-900/40" />
        </motion.div>

        <motion.div 
          className="text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: 'spring', delay: 0.2 }}
          viewport={{ amount: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Transform Your Workflow with AI
          </h2>
          
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            This isn't just a course; it's a 3-day hands-on sprint into the future of automation. You'll move beyond basic scripts and learn to build intelligent AI agents that can reason, plan, and execute complex tasks, giving you a massive career advantage.
          </p>

          <div className="mt-12">
            <h3 className="text-3xl font-bold mb-6 text-white">What You'll Learn</h3>
            <div className="holographic-panel-blue backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30">
              <ul className="space-y-4 text-left">
                {learningObjectives.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-400 mr-4 mt-1">✓</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container mx-auto max-w-7xl mt-20">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-white text-center">3-Day Workshop Plan</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedule.map((item) => (
              <div key={item.day} className="luminant-card p-6 rounded-lg">
                <p className="font-bold text-white text-lg">Day {item.day}: {item.topic}</p>
                <p className="text-gray-400 text-sm mt-2">Outcome: {item.outcome}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default About;