
import React from 'react';

const trustItems = [
  { icon: 'ribbon-outline', text: 'Teacher-Approved Quality' },
  { icon: 'heart-outline', text: 'Loved by Parents' },
  { icon: 'cloud-download-outline', text: 'Instant Downloads' },
  { icon: 'shield-checkmark-outline', text: 'Satisfaction Guarantee' },
];

const TrustStrip = () => {
  return (
    <section className="bg-brand-charcoal/5">
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-xl font-bold text-brand-charcoal/80 mb-8 tracking-wider uppercase font-sans">An Experience You and Your Child Will Love</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-brand-charcoal/90">
              <ion-icon name={item.icon} class="text-4xl text-brand-green mb-2"></ion-icon>
              <p className="font-bold">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;