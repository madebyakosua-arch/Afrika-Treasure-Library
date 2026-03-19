
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Globe, BookOpen, Star } from 'lucide-react';
import KentePattern from './KentePattern';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-brand-gold">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-green/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-red/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative pt-12 pb-20">
        <KentePattern className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-8 border border-brand-green/10"
          >
            <Star className="w-3 h-3 text-brand-green fill-brand-green" />
            The Afrika Treasure Library
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black text-brand-green leading-[1.1] font-heading tracking-tight"
          >
            Raise Them <br />
            <span className="text-brand-red">Proudly African.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-brand-charcoal font-medium text-base leading-relaxed max-w-[320px] mx-auto"
          >
            Explore our beautifully crafted educated resources that connect them to their rich African roots.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 relative px-4"
          >
            <div className="absolute inset-0 bg-brand-green/10 rounded-[3rem] blur-3xl -z-10 transform scale-110"></div>
            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.1)] border border-brand-green/5">
              <img 
                src="https://i.ibb.co/0jPR71Kd/Book-Mockup-1.png" 
                alt="Afrika Treasure Library Books" 
                className="w-full h-auto rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 space-y-6"
          >
            <a href="#resources" className="group relative block w-full bg-brand-green text-white font-black text-lg py-5 px-8 rounded-2xl shadow-xl active:scale-95 transition-all uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Shop our Library
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-green to-brand-green/80"></div>
            </a>
            
            <div className="flex justify-center items-center gap-6 text-[10px] text-brand-green font-black uppercase tracking-[0.15em]">
              <div className="flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                Digital
              </div>
              <div className="flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5" />
                Physical
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                Global
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Desktop View: Original Centered Design */}
      <div className="hidden md:block relative py-32 text-center bg-brand-charcoal hero-bg">
        <style>
          {`
            .hero-bg {
              background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://i.ibb.co/8gY41Y5S/New-Project-2.png');
              background-size: cover;
              background-position: center;
            }
          `}
        </style>
        <KentePattern className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mx-auto font-heading drop-shadow-lg">
            Give Your Child a Crown of Heritage. Raise Them Proudly African.
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-brand-gold font-bold max-w-3xl mx-auto drop-shadow-md">
            Discover beautifully crafted African history educational resources that connect them to their African roots.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium drop-shadow-sm">
            With books, printables, and guided lessons to help you confidently pass down their rich cultural legacy.
          </p>
          <div className="mt-10 flex justify-center items-center">
            <a href="#resources" className="w-full sm:w-auto bg-brand-red text-white font-bold text-lg py-4 px-12 rounded-full hover:bg-brand-red/90 transition-transform hover:scale-105 shadow-2xl">
              Shop our Library
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;