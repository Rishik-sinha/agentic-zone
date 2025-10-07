import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

// --- SVG Icons (Full code included) ---
const StudentsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C18.745 4 8 14.745 8 28C8 38.484 15.6 47.3 25 50V58L32 54L39 58V50C48.4 47.3 56 38.484 56 28C56 14.745 45.255 4 32 4Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M22 28C22 22.477 26.477 18 32 18C37.523 18 42 22.477 42 28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4"/>
    <path d="M14 36L8 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 36L56 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 44L18 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M42 44L46 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const ProfessionalsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 14H14C12.8954 14 12 14.8954 12 16V48C12 49.1046 12.8954 50 14 50H50C51.1046 50 52 49.1046 52 48V16C52 14.8954 51.1046 14 50 14Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 14V10C24 8.89543 24.8954 8 26 8H38C39.1046 8 40 8.89543 40 10V14" stroke="currentColor" strokeWidth="2"/>
    <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 26V20" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 44V38" stroke="currentColor" strokeWidth="2"/>
    <path d="M38 32H44" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 32H26" stroke="currentColor" strokeWidth="2"/>
  </svg>
);
const DevelopersIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 42H52V18H12V42Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 50H56" stroke="currentColor" strokeWidth="2"/>
    <path d="M22 26L28 32L22 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34 40H42" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const EnthusiastsIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 42C38.6274 42 44 36.6274 44 30C44 23.3726 38.6274 18 32 18C25.3726 18 20 23.3726 20 30C20 36.6274 25.3726 42 32 42Z" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 42V54" stroke="currentColor" strokeWidth="2"/>
    <path d="M24 54H40" stroke="currentColor" strokeWidth="2"/>
    <path d="M32 18V8" stroke="currentColor" strokeWidth="2"/>
    <path d="M20 8H44" stroke="currentColor" strokeWidth="2"/>
    <path d="M48 30H56" stroke="currentColor" strokeWidth="2"/>
    <path d="M8 30H16" stroke="currentColor" strokeWidth="2"/>
  </svg>
);


const Card = ({ icon, title, description, variants }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="card-border-glow card-spotlight p-8 rounded-2xl text-center flex flex-col items-center transition-transform duration-300 hover:scale-105"
      variants={variants} // Apply the animation variants here
    >
      <div className="text-green-400 mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-green-200/70 font-medium">{description}</p>
    </motion.div>
  );
};


const WhoCanJoin = () => {
  const audience = [
    { title: 'Future Innovators', icon: <StudentsIcon />, description: 'Students' },
    { title: 'AI-Powered Strategists', icon: <ProfessionalsIcon />, description: 'Professionals' },
    { title: 'Code Weavers', icon: <DevelopersIcon />, description: 'Developers' },
    { title: 'Curiosity Amplifiers', icon: <EnthusiastsIcon />, description: 'Enthusiasts' }
  ];

  // Animation variants for the container (stagger) and cards (slide up)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const customStyles = `
    @property --angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
    @keyframes rotate { to { --angle: 360deg; } }

    .card-spotlight {
      position: relative;
      overflow: hidden;
    }
    .card-spotlight::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: radial-gradient(
        350px circle at var(--mouse-x) var(--mouse-y),
        rgba(16, 185, 129, 0.35),
        transparent 80%
      );
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 1;
    }
    .card-spotlight:hover::before {
      opacity: 1;
    }
    .card-border-glow {
      position: relative;
      background: rgba(16, 24, 32, 0.8);
      border: 1px solid rgba(52, 211, 153, 0.2);
      z-index: 2;
    }
    .card-border-glow::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border-radius: 1rem;
      border: 2px solid transparent;
      background: conic-gradient(from var(--angle), transparent 0%, #10B981 50%, transparent 100%) border-box;
      -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      animation: rotate 4s linear infinite;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
      z-index: 3;
    }
    .card-border-glow:hover::before {
      opacity: 1;
    }
    .neon-text-green {
      text-shadow: 0 0 5px rgba(16, 185, 129, 0.8), 0 0 10px rgba(16, 185, 129, 0.6);
    }
    .card-spotlight > * {
        position: relative;
        z-index: 2;
    }
  `;

  return (
    <section className="bg-black text-white py-20 px-6 overflow-hidden">
      <style>{customStyles}</style>
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white neon-text-green">
          Who is This Workshop For?
        </h2>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {audience.map((person, index) => (
            <Card 
              key={index}
              icon={person.icon}
              title={person.title}
              description={person.description}
              variants={cardVariants} // Pass the variants to each card
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoCanJoin;