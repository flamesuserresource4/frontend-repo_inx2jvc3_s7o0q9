import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Route, CreditCard } from 'lucide-react';

const steps = [
  {
    title: 'Tell us your vibe',
    desc: 'Share dates, budget, and interests. Our AI reads between the lines.',
    icon: MessageSquare
  },
  {
    title: 'We map the magic',
    desc: 'Smart itineraries + rides that adapt in real time.',
    icon: Route
  },
  {
    title: 'Book in one glow',
    desc: 'Flights, stays, rides—smooth checkout with a single tap.',
    icon: CreditCard
  }
];

const HowItWorks = () => {
  return (
    <section className="relative w-full bg-[#0a0f2c] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">How It Works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Three flowing steps from idea to wheels up.
        </p>

        <div className="relative mt-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[#00ffd5]/20">
                <s.icon className="h-6 w-6 text-[#00ffd5]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/75">{s.desc}</p>
            </motion.div>
          ))}

          {/* Motion arrows */}
          <div className="pointer-events-none absolute left-1/3 top-1/2 hidden -translate-y-1/2 sm:block">
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#00ffd5] to-transparent opacity-70" />
          </div>
          <div className="pointer-events-none absolute right-1/3 top-1/2 hidden -translate-y-1/2 sm:block">
            <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.3 }} className="h-1 w-24 rounded-full bg-gradient-to-r from-transparent via-[#00ffd5] to-transparent opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
