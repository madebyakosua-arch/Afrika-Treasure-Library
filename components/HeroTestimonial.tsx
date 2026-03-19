
import React from 'react';
import StarRating from './StarRating';

const HeroTestimonial = () => {
  return (
    <section className="bg-brand-green text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <StarRating rating={5} className="text-3xl justify-center" />
          <blockquote className="mt-6 text-2xl md:text-3xl font-heading italic">
            &quot;I really loved the concept... As a second generation immigrant myself, I love the author&apos;s commitment to helping young ones understand and appreciate their own cultural heritage in an engaging way.&quot;
          </blockquote>
          <p className="mt-6 text-lg font-bold text-brand-gold">- A. Osei, Verified Customer</p>
          <p className="text-sm text-gray-400">on Ashanti Kingdom Book</p>
        </div>
      </div>
    </section>
  );
};

export default HeroTestimonial;
