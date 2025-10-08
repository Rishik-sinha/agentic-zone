import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import About from '../components/About';
import WhoCanJoin from '../components/WhoCanJoin';
import WhatYoullBuild from '../components/WhatYoullBuild';
import Integrations from '../components/Integrations';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import RegisterOverlay from '../components/RegisterOverlay';

const HomePage = () => {
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const aboutSectionRef = useRef(null);

  // ✅ Scroll handler for "Learn More"
  const handleScrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="min-h-screen bg-black relative overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] 
                     -translate-x-1/2 -translate-y-1/2 
                     bg-blue-900/20 rounded-full blur-3xl pointer-events-none"
        />
        <div className="relative z-10 overflow-hidden">
          <Header onBookNow={() => setRegisterOpen(true)} />
          <About ref={aboutSectionRef} />

          <WhatYoullBuild />
          <Integrations />

          {/* 👇 Pass scroll handler to WhoCanJoin */}
          <WhoCanJoin onLearnMoreClick={handleScrollToAbout} />

          <FAQ />
          <CtaBanner onBookNow={() => setRegisterOpen(true)} />
          <Reviews />
          <Footer />
        </div>
      </div>

      <AnimatePresence>
        {isRegisterOpen && <RegisterOverlay onClose={() => setRegisterOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
