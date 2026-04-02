
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Download, CheckCircle, User, Mail, BookOpen, ArrowLeft } from 'lucide-react';

const FreeResources = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    book: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mwvwnnye', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', book: '' });
      } else {
        alert('Something went wrong. Please try again or contact us directly.');
      }
    } catch {
      alert('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="free-resources" className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-gold/20 overflow-hidden">
          <div className="flex flex-col lg:flex-row min-h-[600px]">
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
            <div className="lg:w-3/5 p-8 md:p-16 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
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
                    </div>

                    {/* Verification Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          />
                        </div>
                      </div>
                      <div className="relative">
                        <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="book"
                          placeholder="Which book did you purchase?"
                          required
                          className="w-full bg-gray-50 border border-gray-200 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green transition-all"
                          value={formData.book}
                          onChange={(e) => setFormData({ ...formData, book: e.target.value })}
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`group w-full bg-brand-green text-white font-black py-5 px-10 rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all hover:bg-brand-green/90 uppercase tracking-widest text-sm ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Claim Your Free Resources'}
                        {!isSubmitting && <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />}
                      </motion.button>
                    </form>
                    
                    <p className="mt-6 text-[11px] text-gray-400 font-medium italic">
                      *Access requires proof of purchase. We will verify your order before sending the resources.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle className="w-10 h-10 text-brand-green" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-brand-green leading-tight mb-6">
                      Thank you for accessing your <br />
                      <span className="text-brand-red">free resources</span>
                    </h2>
                    <p className="text-brand-charcoal font-medium text-xl mb-12 leading-relaxed max-w-md mx-auto">
                      We will endeavor to be in touch within 24-48 hours.
                    </p>
                    
                    <a 
                      href="https://www.afrikatreasurelibrary.com"
                      className="inline-flex items-center gap-2 text-brand-green font-black uppercase tracking-widest text-sm hover:gap-4 transition-all"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Home
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
