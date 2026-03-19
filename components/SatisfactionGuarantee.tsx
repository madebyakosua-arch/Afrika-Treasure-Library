
import React from 'react';

const SatisfactionGuarantee = () => {
  return (
    <section id="satisfaction-guarantee" className="bg-brand-green text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <ion-icon name="shield-checkmark-outline" class="text-6xl text-brand-gold mb-4"></ion-icon>
          <h2 className="text-3xl md:text-4xl font-black font-heading">The Afrika Treasure Library Promise</h2>
          <p className="mt-4 text-lg text-green-100">
            Your family&apos;s journey into African heritage is our sacred trust. We pour our hearts into creating resources that inspire and empower. If for any reason you are not completely delighted with your purchase, please contact us within 7 days. While we cannot offer refunds on digital downloads, we will gladly gift you another digital product of your choice, completely free. Your satisfaction is the cornerstone of our legacy.
          </p>
          <a 
            href="mailto:info@africessencedigital.com"
            className="mt-8 inline-block bg-brand-gold text-brand-charcoal font-bold py-3 px-8 rounded-full hover:bg-brand-gold/90 transition-colors shadow-lg"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default SatisfactionGuarantee;
