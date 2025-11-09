import React from 'react';
import Hero from './components/Hero';
import WhyTripMind from './components/WhyTripMind';
import ExperienceShowcase from './components/ExperienceShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f2c] text-white">
      {/* Hero with Spline cover and CTAs */}
      <Hero />

      {/* Why TripMind section with 3 cards */}
      <WhyTripMind />

      {/* Top Experiences grid */}
      <ExperienceShowcase />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
