
import React, { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-red text-white p-2.5 text-center text-sm relative font-bold shadow-md">
      <p className="flex items-center justify-center gap-2 flex-wrap">
        <span className="bg-white text-brand-red px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter">Limited Time</span>
        Get <span className="text-brand-gold font-black">10% OFF</span> this week for our <span className="uppercase tracking-wide">African Heritage Sale</span>. 
        Use coupon code: <span className="bg-white/20 px-2 py-0.5 rounded border border-white/30 font-black">JUSTFORYOU</span>
      </p>
      <button 
        onClick={() => setIsVisible(false)} 
        className="absolute top-1/2 right-4 -translate-y-1/2 text-brand-charcoal hover:bg-black/10 rounded-full p-1"
        aria-label="Dismiss announcement"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
