import React from 'react';
import Hero from './components/Hero';
import WhyTripMind from './components/WhyTripMind';
import SmartSuite from './components/SmartSuite';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0a0f2c] text-white">
      <Hero />
      <WhyTripMind />
      <SmartSuite />
      <Footer />
    </div>
  );
}

export default App;
