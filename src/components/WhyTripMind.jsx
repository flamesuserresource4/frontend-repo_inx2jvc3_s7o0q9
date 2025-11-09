import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Route, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'AI Curated Itineraries',
    icon: Brain,
    desc: 'Personalized day-by-day plans tuned to your style, budget, and time.'
  },
  {
    title: 'Door-to-Door Pickup',
    icon: Route,
    desc: 'Seamless rides from home to airport, hotel to experiences, and back.'
  },
  {
    title: 'Real-Time Adjustments',
    icon: RefreshCw,
    desc: 'Weather shifts? Delayed flight? Your plan adapts instantly.'
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i } })
};

const WhyTripMind = () => {
  return (
    <section className="relative w-full bg-[#0a0f2c] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
             style={{ background: 'radial-gradient( circle at center, rgba(0,255,213,0.7), transparent 60% )' }} />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl" id="plan">Why TripMind?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Built for confidence and delight: the friendliest way to travel like a pro.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#00ffd5]/20 blur-3xl transition duration-300 group-hover:opacity-70" />
              <div className="flex items-center gap-3">
                <f.icon className="h-6 w-6 text-[#00ffd5]" />
                <h3 className="text-lg font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-white/80">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTripMind;
