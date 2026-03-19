
import React from 'react';
import { BEST_SELLERS_BOOKS, PAYHIP_LINKS } from '../constants';
import BookCard from './BookCard';

const BestSellers = () => {
  return (
    <section id="bestsellers" className="py-16 md:py-24 bg-brand-charcoal/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal font-heading">Our Best Selling Books</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Join thousands of families who are already using these resources to inspire the next generation.</p>
        <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
          {BEST_SELLERS_BOOKS.map(book => (
            <div key={book.id} className="w-full max-w-[280px] flex">
              <BookCard book={book} />
            </div>
          ))}
        </div>
        <div className="mt-16">
          <a 
            href={PAYHIP_LINKS.bestSellers}
            target="_blank"
            rel="noopener noreferrer" 
            className="bg-brand-green text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-brand-green/90 transition-transform hover:scale-105 shadow-lg inline-block"
          >
            Shop All Best Sellers
          </a>
           <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-sm text-gray-500">Available on our official Payhip store.</p>
            <div className="flex items-center justify-center gap-x-4 text-gray-600" aria-label="Accepted payment methods">
              <span className="font-semibold text-base tracking-wider">Payhip</span>
              <span className="text-gray-300 font-light">|</span>
              <span className="font-semibold text-base tracking-wider">Visa</span>
              <span className="text-gray-300 font-light">|</span>
              <span className="font-semibold text-base tracking-wider">Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
