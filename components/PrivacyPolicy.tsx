
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  React.useEffect(() => {
    document.title = "Privacy Policy | Afrika Treasure Library";
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-charcoal py-20 px-6">
      <div className="container mx-auto max-w-4xl bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <Link to="/" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-gold transition-colors mb-8">
          <ion-icon name="arrow-back-outline"></ion-icon> Back to Home
        </Link>
        <h1 className="text-4xl font-black text-brand-green mb-8 uppercase tracking-tight">Privacy Policy</h1>
        <div className="space-y-6 text-lg leading-relaxed">
          <p>Last updated: March 13, 2026</p>
          <p>At Afrika Treasure Library, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">1. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products, when you participate in activities on the website, or otherwise when you contact us.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect or receive to provide, operate, and maintain our website, improve our services, and communicate with you about updates or promotional offers.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">3. Data Security</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
          
          <h2 className="text-2xl font-bold text-brand-green mt-8">4. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at: support@africessencedigital.com</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
