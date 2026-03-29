
import React from 'react';
import { Book } from '../types';
import StarRating from './StarRating';

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full group transform hover:-translate-y-2 transition-transform duration-300 relative">
      {book.isBestSeller && (
        <div className="absolute top-4 left-4 bg-brand-gold text-brand-charcoal font-black text-[10px] py-1 px-3 rounded-full shadow-md z-10 uppercase tracking-widest border border-white/20">
          Best Seller
        </div>
      )}
      <img 
        src={book.coverImage} 
        alt={`Book cover for ${book.title}`} 
        className="w-full h-auto object-cover aspect-[3/4]" 
        referrerPolicy="no-referrer"
        loading="lazy"
      />
      <div className="p-6 flex flex-col flex-grow text-center">
        <h3 className="text-xl font-bold text-brand-charcoal leading-tight min-h-[3.5rem] flex items-center justify-center">{book.title}</h3>
        <div className="mt-2 flex-grow flex flex-col justify-between">
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{book.benefit}</p>
          <div>
            {book.rating && (
              <div className="flex justify-center mb-4">
                <StarRating rating={book.rating} className="text-base" />
              </div>
            )} 
            <a 
              href={book.payhipLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full block text-center bg-brand-red text-white font-black text-sm py-4 px-6 rounded-xl hover:bg-brand-red/90 transition-all shadow-lg hover:shadow-brand-red/20 uppercase tracking-wider"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;