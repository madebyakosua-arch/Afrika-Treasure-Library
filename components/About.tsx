
import React from 'react';
import KentePattern from './KentePattern';

const About = () => {
  return (
    <section id="about" className="relative py-12 md:py-16 bg-brand-cream overflow-hidden">
      <KentePattern className="absolute inset-0 w-full h-full opacity-[0.03] mix-blend-multiply" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden md:flex items-center">
          <div className="md:w-2/5 aspect-square">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1080&h=1080&dpr=1"
              alt="Stephanie Akosua, founder of Afrika Treasure Library" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-3/5 p-8 md:p-10 relative bg-brand-cream h-full">
             <KentePattern className="absolute top-0 left-0 w-full h-full opacity-[0.03] mix-blend-multiply" />
            <div className="relative">
                <h3 className="text-lg font-bold text-brand-green tracking-wider uppercase">From the Founder</h3>
                <h2 className="mt-2 text-3xl md:text-4xl font-black text-brand-charcoal font-heading">A Heart for Our Heritage, A Vision for Our Future</h2>
                <p className="mt-6 text-base text-gray-700 leading-relaxed">
                  This journey began from a lifelong passion to see our stories told with beauty and power. My vision is to equip parents with vibrant, engaging resources to help you confidently connect your family to their rich African heritage, raising a generation of proud and knowledgeable leaders.
                </p>
                <div className="mt-8">
                    <p className="text-3xl font-bold font-heading text-brand-charcoal/80">
                      {/* ======================================= */}
                      {/* PASTE YOUR NAME HERE                    */}
                      {/* ======================================= */}
                      Stephanie Akosua
                    </p>
                    <p className="text-md font-bold text-brand-green">Founder & CEO</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;