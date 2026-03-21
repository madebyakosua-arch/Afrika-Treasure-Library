
import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Download, CheckCircle } from 'lucide-react';

const FreeResources = () => {
  return (
    <section id="free-resources" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-gold/20 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image/Visual Side */}
            <div className="lg:w-2/5 bg-brand-gold p-12 flex flex-col justify-center items-center text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl mb-8"
              >
                <Gift className="w-12 h-12 text-brand-red" />
              </motion.div>
              <h3 className="text-3xl font-black text-brand-green leading-tight mb-4">
                Exclusive <br /> Reader Bonuses
              </h3>
              <p className="text-brand-charcoal/80 font-medium text-sm leading-relaxed">
                We believe learning shouldn&apos;t stop at the last page. That&apos;s why we&apos;ve created a treasure chest of companion materials for our community.
              </p>
            </div>

            {/* Content Side */}
            <div className="lg:w-3/5 p-8 md:p-16">
              <div className="inline-flex items-center gap-2 bg-brand-red/10 text-brand-red text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                For Our Customers
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-green leading-tight mb-6">
                Unlock Your Free <br />
                <span className="text-brand-red">Learning Resources</span>
              </h2>
              <p className="text-brand-charcoal font-medium text-lg mb-8 leading-relaxed">
                Already started your journey with one of our books? Access our library of free activity guides, coloring sheets, and lesson plans that perfectly complement your purchase.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal">Printable Activity Sheets</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal">Guided Lesson Plans</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal">Cultural Coloring Pages</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 bg-brand-green/10 p-1 rounded-full">
                    <CheckCircle className="w-4 h-4 text-brand-green" />
                  </div>
                  <p className="text-sm font-bold text-brand-charcoal">Interactive Quizzes</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full md:w-auto bg-brand-green text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all hover:bg-brand-green/90 uppercase tracking-widest text-sm"
              >
                Claim Your Free Resources
                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
              
              <p className="mt-6 text-[11px] text-gray-400 font-medium italic">
                *Access requires proof of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
