
import React from 'react';

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-brand-green">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center">
          <h4 className="font-bold text-brand-green tracking-wider uppercase">Connect</h4>
          <div className="mt-4">
            <a href="mailto:info@africessencedigital.com" className="font-bold hover:text-brand-gold text-sm transition-colors">info@africessencedigital.com</a>
            <div className="flex justify-center space-x-6 mt-6 text-2xl">
              <a href="#" aria-label="Instagram" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-instagram"></ion-icon></a>
              <a href="#" aria-label="Facebook" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-facebook"></ion-icon></a>
              <a href="#" aria-label="Pinterest" className="hover:text-brand-gold transition-colors"><ion-icon name="logo-pinterest"></ion-icon></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-green/10 pt-8 text-center text-sm">
          <p>© 2026 Afrika Treasure Library. All Rights Reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
          <p className="mt-4 text-brand-green/60">Afrika Treasure Library is an official brand of Africessence Digital.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
