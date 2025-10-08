import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import HeaderVideo from '../assets/video3.mp4';

const Header = ({ onBookNow }) => {
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesConfig = {
      fullScreen: { enable: false },
      background: { color: { value: '#000000' } },
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#2563eb' }, // Blue color
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: true, anim: { enable: true, speed: 0.2, opacity_min: 0.1, sync: false } },
        size: { value: 2, random: true, anim: { enable: false } },
        move: { enable: true, speed: 0.5, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
      },
      interactivity: { detect_on: 'canvas', events: { onhover: { enable: false }, onclick: { enable: false }, resize: true } },
      detectRetina: true,
    };

    const CheckmarkIcon = () => (
        <svg className="w-6 h-6 mr-3 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
    );

    const benefits = [
        'Grasp the core concepts of Agentic AI and LLMs.',
        'Automate real-world tasks using Python and No-Code tools.',
        'Build a portfolio-ready AI Automation project from scratch.'
    ];
    
    const handleScrollToAbout = () => {
        const headerElement = document.querySelector('header');
        if (headerElement) {
            const firstSection = headerElement.nextElementSibling;
            if (firstSection && firstSection.tagName === 'SECTION') {
                firstSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <header className="relative text-white px-6 h-screen flex items-center overflow-hidden">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
                className="absolute inset-0 z-0"
            />
            
            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Left Column: Text Content */}
                <div className="text-left">
                    <motion.p 
                        className="text-blue-400 font-bold tracking-widest text-sm mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        LIVE WORKSHOP
                    </motion.p>
                    <motion.h1 
                        className="text-4xl md:text-6xl font-extrabold leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Agentic AI Automation
                    </motion.h1>
                    
                    <motion.div
                        className="mt-8 max-w-xl space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
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
                        className="mt-10 flex flex-col sm:flex-row items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <button 
                            onClick={onBookNow}
                            className="px-8 py-3 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 transition-colors duration-300 transform hover:scale-105"
                        >
                            Reserve Your Spot
                        </button>
                        <button 
                            onClick={handleScrollToAbout}
                            className="px-8 py-3 bg-transparent text-white font-bold rounded-full border-2 border-blue-500 hover:bg-blue-500/20 transition-colors duration-300"
                        >
                            Learn More
                        </button>
                    </motion.div>
                </div>

                {/* Right Column: Video */}
                <motion.div 
                    className="flex items-center justify-center"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, type: 'spring' }}
                >
                    <video 
                        className="rounded-2xl w-full"
                        src={HeaderVideo}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </motion.div>

            </div>
        </header>
    );
};

export default Header;