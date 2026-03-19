
import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  React.useEffect(() => {
    document.title = "Terms of Service | Afrika Treasure Library";
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal py-20 px-6">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-gold transition-colors mb-8">
          <ion-icon name="arrow-back-outline"></ion-icon> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-brand-green mb-8 uppercase tracking-tight">Terms of Service</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Last updated: March 13, 2026</p>
          <p>Welcome to Afrika Treasure Library. By accessing or using our website, you agree to be bound by these Terms of Service.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">1. Use of the Site</h2>
          <p>You agree to use the site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the site.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">2. Intellectual Property</h2>
          <p>All content on this site, including text, graphics, logos, and images, is the property of Afrika Treasure Library or its content suppliers and is protected by international copyright laws.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">3. Product Sales</h2>
          <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">4. Limitation of Liability</h2>
          <p>Afrika Treasure Library shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">5. Governing Law</h2>
          <p>These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
