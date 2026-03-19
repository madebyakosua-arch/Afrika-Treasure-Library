
import React from 'react';

const features = [
  {
    icon: 'book-outline',
    title: 'Authentic & Well-Researched',
    description: 'Save hours of prep time with content that is meticulously researched and culturally authentic, ensuring you can teach with confidence and accuracy.',
  },
  {
    icon: 'sparkles-outline',
    title: 'Engaging for Young Minds',
    description: 'Our resources are designed to be fun and interactive. We turn complex history into captivating stories and activities that children genuinely love.',
  },
  {
    icon: 'phone-portrait-outline',
    title: 'Instant & Accessible',
    description: 'Get immediate access to your digital downloads. Print them at home, use them on a tablet, or integrate them into your online classroom with ease.',
  },
  {
    icon: 'heart-outline',
    title: 'Builds Cultural Pride',
    description: 'More than just facts, our resources are crafted to instill a deep sense of pride and connection to African heritage in the next generation of leaders.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-brand-cream py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-brand-charcoal font-heading">An Essential for Every Educator</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
          Whether you&apos;re a parent, a teacher, or a community leader, our library is your trusted partner in cultural education.
        </p>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-black/5">
              <ion-icon name={feature.icon} class="text-4xl text-brand-green mb-4"></ion-icon>
              <h3 className="text-xl font-bold font-heading text-brand-charcoal">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
