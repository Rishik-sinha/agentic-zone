import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from 'framer-motion';

const Header = ({ onBookNow }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesConfig = {
      fullScreen: { enable: false, zIndex: 0 },
      background: { color: { value: '#000000' } },
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#10B981' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.1, sync: false } },
        size: { value: 2, random: true, anim: { enable: false } },
        move: { enable: true, speed: 0.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: { detect_on: 'canvas', events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
      detectRetina: true,
    };

    const CheckmarkIcon = () => (
        <svg className="w-6 h-6 mr-3 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
    );

    const benefits = [
        'Grasp the core concepts of Agentic AI and LLMs.',
        'Automate real-world tasks using Python and No-Code tools.',
        'Build a portfolio-ready AI Automation project from scratch.'
    ];
    
    const handleScrollToAbout = () => {
        const aboutSection = document.querySelector('section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="relative text-white text-center px-6 overflow-hidden h-screen flex flex-col items-center justify-center">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
                className="absolute top-0 left-0 w-full h-full"
            />
            
            <div className="relative z-10 container mx-auto flex flex-col items-center">
                <motion.p 
                    className="text-green-400 font-bold tracking-widest text-sm mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    3-DAY LIVE WORKSHOP
                </motion.p>
                <motion.h1 
                    className="text-4xl md:text-6xl font-extrabold leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Agentic AI Automation using Python
                </motion.h1>
                
                <motion.div
                    className="mt-8 max-w-xl text-left space-y-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                            <CheckmarkIcon />
                            <span className="text-gray-300 md:text-lg">{benefit}</span>
                        </div>
                    ))}
                </motion.div>
                
                <motion.div 
                    className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <button 
                        onClick={onBookNow}
                        className="px-8 py-3 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors duration-300 transform hover:scale-105"
                    >
                        Reserve Your Spot Now
                    </button>
                    <button 
                        onClick={handleScrollToAbout}
                        className="px-8 py-3 bg-transparent text-white font-bold rounded-full border-2 border-green-500 hover:bg-green-500/20 transition-colors duration-300"
                    >
                        Learn More
                    </button>
                </motion.div>
            </div>
        </header>
    );
};

export default Header;