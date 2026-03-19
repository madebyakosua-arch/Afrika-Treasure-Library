
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X } from 'lucide-react';

const MOCK_SALES = [
  { id: 1, name: 'Sarah', location: 'London, UK', product: 'Yaa Asantewaa: The Brave Queen Who defended her people', time: '2 minutes ago' },
  { id: 2, name: 'Kofi', location: 'Accra, Ghana', product: 'The Ashanti Kingdom: The Brave People of West Africa', time: '5 minutes ago' },
  { id: 3, name: 'Elena', location: 'New York, USA', product: 'Kwame Nkrumah: The Father of Ghana’s Independence', time: '12 minutes ago' },
  { id: 4, name: 'Amara', location: 'Nairobi, Kenya', product: 'The Ashanti Kingdom: The Brave People of West Africa', time: '15 minutes ago' },
  { id: 5, name: 'Marco', location: 'Rome, Italy', product: 'Yaa Asantewaa: The Brave Queen Who defended her people', time: '22 minutes ago' },
  { id: 6, name: 'David', location: 'Atlanta, USA', product: 'The Ashanti Kingdom: The Brave People of West Africa', time: '30 minutes ago' },
  { id: 7, name: 'Zainab', location: 'Manchester, UK', product: 'Kwame Nkrumah: The Father of Ghana’s Independence', time: '45 minutes ago' },
  { id: 8, name: 'Jabari', location: 'Mombasa, Kenya', product: 'Yaa Asantewaa: The Brave Queen Who defended her people', time: '1 hour ago' },
  { id: 9, name: 'Giulia', location: 'Milan, Italy', product: 'The Ashanti Kingdom: The Brave People of West Africa', time: '2 hours ago' },
];

const SalesNotifications = () => {
  const [currentSale, setCurrentSale] = useState<typeof MOCK_SALES[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hideTimeoutId: NodeJS.Timeout;

    const showNext = () => {
      setCurrentSale(MOCK_SALES[index]);
      setIsVisible(true);
      
      hideTimeoutId = setTimeout(() => {
        setIsVisible(false);
        setIndex((prev) => (prev + 1) % MOCK_SALES.length);
        timeoutId = setTimeout(showNext, 12000); // Wait 12s before next
      }, 6000); // Show for 6s
    };

    timeoutId = setTimeout(showNext, 8000); // Initial delay

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(hideTimeoutId);
    };
  }, [index]);

  if (!currentSale) return null;

  return (
    <div className="fixed bottom-28 right-4 z-[100] pointer-events-none md:bottom-8 md:right-8">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="pointer-events-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 flex items-center gap-4 border border-brand-gold/20 max-w-[300px] md:max-w-[340px]"
          >
            <div className="flex-shrink-0 w-12 h-12 bg-brand-gold text-brand-charcoal rounded-xl flex items-center justify-center shadow-inner">
              <ShoppingBag className="w-6 h-6" />
            </div>
            
            <div className="flex-grow pr-4">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                <p className="text-[10px] text-brand-green font-black uppercase tracking-widest">Verified Purchase</p>
              </div>
              <p className="text-sm font-bold text-brand-charcoal leading-tight">
                {currentSale.name} in {currentSale.location}
              </p>
              <p className="text-xs text-gray-600 font-medium mt-0.5">
                Just bought <span className="text-brand-red italic">{currentSale.product}</span>
              </p>
              <p className="text-[10px] text-gray-400 mt-1 font-medium">{currentSale.time}</p>
            </div>

            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 text-gray-300 hover:text-brand-charcoal transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SalesNotifications;
