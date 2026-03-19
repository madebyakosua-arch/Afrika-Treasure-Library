
import React from 'react';
import { PAYHIP_LINKS } from '../constants';

const ageCategories = [
  {
    age: "3-5",
    title: "Ages 3-5",
    description: "Foundational stories and fun, hands-on activities to introduce the youngest learners to their heritage.",
    link: PAYHIP_LINKS.ages3to5,
    color: "text-brand-green",
    bg: "bg-brand-green/10"
  },
  {
    age: "5-7",
    title: "Ages 5 to 7",
    description: "Engaging narratives and puzzles that build on their knowledge and spark independent curiosity.",
    link: PAYHIP_LINKS.ages6to8,
    color: "text-brand-red",
    bg: "bg-brand-red/10"
  },
  {
    age: "9-12",
    title: "Ages 9-12",
    description: "Deeper historical stories and creative projects for older children ready to explore complex topics.",
    link: PAYHIP_LINKS.ages9to12,
    color: "text-brand-gold",
    bg: "bg-brand-gold/10"
  },
];

const ShopByAge = () => {
  return (
    <section id="shop-by-age" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal font-heading">Perfect for Every Stage of Their Journey</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Find resources tailored to your child&apos;s age and learning level.</p>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ageCategories.map((cat) => (
            <a 
              key={cat.age}
              href={cat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 p-8 bg-brand-charcoal/5 rounded-3xl border-2 border-transparent hover:border-brand-green hover:bg-white hover:shadow-2xl transition-all duration-300 text-left h-full"
            >
              <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${cat.bg} ${cat.color} flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform`}>
                <ion-icon name="checkmark-circle"></ion-icon>
              </div>
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-black text-brand-charcoal font-heading mb-2">{cat.title}</h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {cat.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-brand-green font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Now <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByAge;