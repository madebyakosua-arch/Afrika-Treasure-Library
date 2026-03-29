
import React from 'react';
import { PAYHIP_LINKS } from '../constants';

const ProductShowcase = () => {
  const resources = [
    {
      title: 'Beautiful Storybooks',
      description: 'Embark on a breathtaking journey across Africa! Explore vibrant histories and meet legendary leaders through our illustrated storybooks.',
      link: PAYHIP_LINKS.books,
      image: 'https://i.ibb.co/sJy2nZnH/Untitled-design-21.png',
      accent: 'bg-brand-green'
    },
    {
      title: 'Engaging Worksheets',
      description: 'Transform learning into self-discovery with printable activities designed to build confidence and connection to heritage.',
      link: PAYHIP_LINKS.worksheetsAndGames,
      image: 'https://i.ibb.co/gLBBgJW0/Artistly-Design-019ce400-6e35-7127-a008-2ceb0d18f0b5.png',
      accent: 'bg-brand-gold'
    },
    {
      title: 'Value-Packed Bundles',
      description: 'Immerse your family in the richness of African history. Our bundles offer a comprehensive collection at an incredible price.',
      link: PAYHIP_LINKS.bundles,
      image: 'https://i.ibb.co/q3JvjNm0/Untitled-design-24.png',
      accent: 'bg-brand-red'
    }
  ];

  return (
    <section id="resources" className="relative py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-black text-brand-charcoal font-heading">
            Curated Learning Resources
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {resources.map((item, index) => (
            <div key={index} className="group flex flex-col h-full">
              <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className={`absolute inset-0 ${item.accent} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              </div>
              <h3 className="text-2xl font-black text-brand-charcoal font-heading mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {item.description}
              </p>
              <div className="mt-auto">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-brand-charcoal font-bold border-b-2 border-brand-charcoal pb-1 hover:text-brand-red hover:border-brand-red transition-all"
                >
                  Shop the Collection <ion-icon name="arrow-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

