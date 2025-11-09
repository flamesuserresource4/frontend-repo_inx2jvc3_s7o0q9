import React from 'react';
import { motion } from 'framer-motion';

const destinations = [
  {
    name: 'Tokyo Neon Nights',
    img: 'https://images.unsplash.com/photo-1505065585812-9872c7f9cd45?q=80&w=1600&auto=format&fit=crop',
    tag: 'Trending'
  },
  {
    name: 'Swiss Alps Escape',
    img: 'https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=1600&auto=format&fit=crop',
    tag: 'Scenic'
  },
  {
    name: 'Bali Beach Glow',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    tag: 'Relax'
  },
  {
    name: 'New York Pulse',
    img: 'https://images.unsplash.com/photo-1468436139062-f60a71c5c892?q=80&w=1600&auto=format&fit=crop',
    tag: 'Urban'
  }
];

const card = {
  rest: { y: 0, scale: 1, boxShadow: '0 0 0 rgba(0,0,0,0)' },
  hover: { y: -6, scale: 1.02, boxShadow: '0 20px 60px rgba(0,255,213,0.15)' }
};

const ExperienceShowcase = () => {
  return (
    <section className="relative w-full bg-[#0a0f2c] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">Top Experiences</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/80">
          Explore handpicked adventures with glassy cards and neon accents.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <motion.a
              key={d.name}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={card}
              href="#"
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <img src={d.img} alt={d.name} className="h-56 w-full object-cover opacity-90 transition duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" />
              <div className="absolute left-0 top-0 m-3 rounded-full bg-[#00ffd5]/20 px-3 py-1 text-xs font-medium text-[#0a0f2c] backdrop-blur-sm"
                   style={{ color: '#0a0f2c', textShadow: '0 0 12px rgba(255,255,255,0.3)' }}>
                <span className="font-semibold text-[#0a0f2c]">{d.tag}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-lg font-semibold drop-shadow-[0_0_20px_rgba(0,255,213,0.4)]">{d.name}</h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceShowcase;
