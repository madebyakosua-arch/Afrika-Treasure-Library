
import React from 'react';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import HeroTestimonial from './components/HeroTestimonial';
import TrustStrip from './components/TrustStrip';
import ProductShowcase from './components/ProductShowcase';
import ShopByAge from './components/ShopByAge';
import BestSellers from './components/BestSellers';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import FreeResources from './components/FreeResources';
import SatisfactionGuarantee from './components/SatisfactionGuarantee';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import SalesNotifications from './components/SalesNotifications';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ScrollToTop from './components/ScrollToTop';
import RedirectPage from './components/RedirectPage';

const HomePage = () => {
  React.useEffect(() => {
    document.title = "Afrika Treasure Library | Pan-African History for Kids";
  }, []);

  return (
    <>
      <AnnouncementBar />
    <Header />
    <main>
      <Hero />
      <HeroTestimonial />
      <TrustStrip />
      <ProductShowcase />
      <BestSellers />
      <WhyChooseUs />
      <Reviews />
      <ShopByAge />
      <About />
      <FreeResources />
      <FAQ />
      <SatisfactionGuarantee />
    </main>
    <Footer />
    <StickyBottomBar />
  </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-cream text-brand-charcoal font-sans">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/redirect" element={<RedirectPage />} />
        </Routes>
        <SalesNotifications />
      </div>
    </Router>
  );
}

export default App;