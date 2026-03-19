
import React, { useState, useEffect } from 'react';

const StickyBottomBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.getElementById('resources');
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? (headerElement as HTMLElement).offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={`md:hidden fixed bottom-0 left-0 right-0 z-[60] p-4 transition-all duration-500 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <a 
        href="#resources" 
        onClick={handleClick}
        className="flex items-center justify-center gap-3 bg-brand-red text-white font-black py-4 px-6 rounded-2xl shadow-[0_10px_30px_rgba(177,41,41,0.4)] text-lg uppercase tracking-widest active:scale-95 transition-transform"
      >
        Shop our Library <ion-icon name="arrow-forward-outline"></ion-icon>
      </a>
    </div>
  );
};

export default StickyBottomBar;
