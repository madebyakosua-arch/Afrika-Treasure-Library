
import React, { useState } from 'react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-gold text-brand-charcoal p-2 text-center text-sm relative font-bold">
      <p>
        <span className="font-black uppercase tracking-wider">Empower your child.</span> Discover the richness of African heritage. Shop the library today!
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
