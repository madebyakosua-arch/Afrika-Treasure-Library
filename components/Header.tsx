
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our Resources', href: '#resources' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerElement = document.querySelector('header');
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-brand-green/95 backdrop-blur-md border-b border-white/10 shadow-lg' : 'py-6 bg-brand-green'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex-1 flex items-center">
            <a href="#" className="group" onClick={(e) => handleNavClick(e, '#')}>
              <img 
                src="https://i.ibb.co/rGgMJ2DH/Chat-GPT-Image-Mar-3-2026-09-41-48-PM.png" 
                alt="Afrika Treasure Library Logo" 
                className="h-16 md:h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className="text-sm font-black text-white hover:text-brand-gold tracking-widest uppercase transition-all hover:scale-110 active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Section */}
          <div className="flex-1 flex items-center justify-end space-x-4">
            <a 
              href="#resources" 
              onClick={(e) => handleNavClick(e, '#resources')} 
              className="hidden md:flex items-center gap-2 bg-white text-brand-green text-sm font-black tracking-widest uppercase py-3 px-8 rounded-full hover:bg-brand-gold hover:text-brand-charcoal transition-all shadow-lg active:scale-95"
            >
              Shop <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Refined Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[72px] bg-brand-green z-40 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="container mx-auto px-6 py-12 flex flex-col h-full">
          <div className="space-y-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleNavClick(e, link.href)} 
                className={`block text-3xl font-black text-white hover:text-brand-gold transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="mt-auto pt-12 border-t border-white/10">
            <p className="text-xs font-bold text-brand-gold tracking-widest uppercase mb-6">Connect with us</p>
            <div className="flex space-x-6 text-2xl text-white">
              <a href="#" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-pinterest"></ion-icon></a>
            </div>
            <a 
              href="#resources" 
              onClick={(e) => handleNavClick(e, '#resources')} 
              className="mt-10 w-full flex items-center justify-center gap-3 bg-white text-brand-green font-black py-5 rounded-2xl shadow-xl"
            >
              SHOP OUR LIBRARY <ion-icon name="arrow-forward-outline"></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

