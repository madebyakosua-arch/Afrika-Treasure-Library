
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Loader2, ShieldCheck } from 'lucide-react';

const RedirectPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, url } = (location.state as { title: string; url: string }) || {};
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!title || !url) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = url;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [title, url]);

  if (!title || !url) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-brand-cream flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full bg-white rounded-[2.5rem] shadow-2xl border border-brand-gold/20 p-8 md:p-12 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-brand-green"></div>
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-brand-red/5 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
            <Loader2 className="w-10 h-10 text-brand-green animate-spin" />
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-brand-green mb-6 leading-tight">
            Almost There!
          </h1>

          <div className="bg-brand-cream/50 rounded-2xl p-6 mb-8 border border-brand-gold/10">
            <p className="text-brand-charcoal font-medium text-lg mb-2">
              You are being redirected to our secure store to purchase:
            </p>
            <h2 className="text-xl md:text-2xl font-black text-brand-red italic">
              &ldquo;{title}&rdquo;
            </h2>
          </div>

          <p className="text-gray-600 font-medium mb-8 leading-relaxed">
            We use <span className="font-bold text-brand-charcoal">Payhip</span> to securely process all payments for our books and educational resources. You&apos;ll be redirected in <span className="text-brand-green font-black text-xl">{countdown}</span> seconds...
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={url}
              className="w-full sm:w-auto bg-brand-green text-white font-black py-4 px-8 rounded-xl shadow-lg hover:bg-brand-green/90 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-sm"
            >
              Go to Checkout Now
              <ExternalLink className="w-4 h-4" />
            </a>
            <button 
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto bg-transparent text-gray-400 font-bold py-4 px-8 rounded-xl hover:text-brand-charcoal transition-all text-sm uppercase tracking-widest"
            >
              Cancel
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Secure Payment Processing by Payhip
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RedirectPage;
