import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import LessonSection from './LessonSection';
import PricingSection from './PricingSection';
import ContactSection from './ContactSection';
import Footer from './Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <Header />
      <main>
        <HeroSection />
        <LessonSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;