import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Car, Map, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0f2c]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient + glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f2cb3] to-[#0a0f2c]" />
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-50 blur-3xl"
             style={{ background: 'radial-gradient( circle at center, #00ffd5, transparent 60% )' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center text-white md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md"
        >
          <SparkleDot />
          Futuristic AI Travel • Trust by Design
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 text-3xl font-semibold leading-tight sm:text-5xl md:text-6xl"
          style={{ textShadow: '0 0 24px rgba(0,255,213,0.35)' }}
        >
          From your door to your dream destination —
          <br className="hidden sm:block" /> planned by AI.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Meet TripMind: glassy, glowing, and incredibly smart. Get curated trips, door‑to‑door rides, and real‑time updates in one seamless flow.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#plan"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#00ffd5] px-6 py-3 font-semibold text-[#0a0f2c] shadow-[0_0_30px_rgba(0,255,213,0.6)] transition hover:shadow-[0_0_45px_rgba(0,255,213,0.9)]"
          >
            <Rocket className="h-5 w-5" /> Plan My Trip
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#rides"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
          >
            <Car className="h-5 w-5" /> Book My Ride
          </a>
        </motion.div>

        {/* Quick highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          <Pill icon={<Map className="h-4 w-4 text-[#00ffd5]" />} label="AI Curated Itineraries" />
          <Pill icon={<Car className="h-4 w-4 text-[#00ffd5]" />} label="Door-to-Door Pickup" />
          <Pill icon={<Rocket className="h-4 w-4 text-[#00ffd5]" />} label="Real-Time Adjustments" />
        </motion.div>
      </div>
    </section>
  );
};

const Pill = ({ icon, label }) => (
  <div className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-md">
    {icon}
    <span>{label}</span>
  </div>
);

const SparkleDot = () => (
  <span className="relative inline-flex h-2 w-2 items-center justify-center">
    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffd5] opacity-60" />
    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffd5]" />
  </span>
);

export default Hero;
