import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Car, Bike, BadgeCheck, Clock, Wallet, MapPin, Navigation } from 'lucide-react';

const SectionTitle = ({ title, subtitle, id }) => (
  <div className="mx-auto max-w-3xl text-center" id={id}>
    <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
    <p className="mt-2 text-white/80">{subtitle}</p>
  </div>
);

const tabBtn = (active) => `rounded-xl px-3 py-2 text-sm font-medium transition ${
  active ? 'bg-[#00ffd5] text-[#0a0f2c] shadow-[0_0_24px_rgba(0,255,213,0.6)]' : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
}`;

const SmartSuite = () => {
  return (
    <section className="relative w-full bg-[#0a0f2c] py-20 text-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-[10%] top-[15%] h-64 w-64 rounded-full opacity-30 blur-3xl"
             style={{ background: 'radial-gradient(circle, rgba(0,255,213,0.5), transparent 60%)' }} />
        <div className="absolute right-[8%] bottom-[10%] h-64 w-64 rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, rgba(0,255,213,0.35), transparent 60%)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* AI Planner */}
        <SectionTitle title="AI Trip Planner" subtitle="Chat with a glowing brain that turns your vibe into day-by-day magic." id="plan" />
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AIPlannerPanel />
          <ItineraryPreview />
        </div>

        {/* Budget Planner */}
        <div className="mt-20">
          <SectionTitle title="Smart Budget Planner" subtitle="Slide your budget and watch flights, stays, food, and fun balance in real time." />
          <div className="mt-8">
            <BudgetPlanner />
          </div>
        </div>

        {/* Ride Booking */}
        <div className="mt-20" id="rides">
          <SectionTitle title="Smart Ride Booking" subtitle="From doorstep to runway—choose a ride, preview route, and go." />
          <div className="mt-8">
            <RideBooking />
          </div>
        </div>
      </div>
    </section>
  );
};

const AIPlannerPanel = () => {
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hi! I\'m TripMind. Tell me your dream and budget, and I\'ll plan the perfect trip ✨' }
  ]);
  const [input, setInput] = useState('Plan a 5-day solo trip to Japan under ₹1,00,000');

  const send = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    const aiMsg = { role: 'ai', text: 'Got it! Building a day-by-day plan with costs, travel times, and must‑tries.' };
    setMessages((m) => [...m, userMsg, aiMsg]);
    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex h-[420px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <div className="relative">
          <span className="absolute -left-1 -top-1 h-3 w-3 animate-ping rounded-full bg-[#00ffd5] opacity-60" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00ffd5]" />
        </div>
        <span className="flex items-center gap-2 text-sm text-white/80"><Bot className="h-4 w-4 text-[#00ffd5]" /> TripMind Assistant</span>
      </div>
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div key={i} className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${m.role === 'ai' ? 'bg-white/10' : 'ml-auto bg-[#00ffd5] text-[#0a0f2c]'}`}>
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 p-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && send()}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm placeholder:text-white/50 focus:outline-none"
          placeholder="Ask TripMind anything…"
        />
        <button onClick={send} className="rounded-xl bg-[#00ffd5] px-4 py-2 text-sm font-semibold text-[#0a0f2c] shadow-[0_0_20px_rgba(0,255,213,0.6)]">Send</button>
      </div>
    </motion.div>
  );
};

const ItineraryPreview = () => {
  const days = [
    { day: 1, title: 'Tokyo • Shibuya, Asakusa', budget: '₹18,500', weather: '☀️', img: 'https://images.unsplash.com/photo-1505065585812-9872c7f9cd45?q=80&w=1200&auto=format&fit=crop' },
    { day: 2, title: 'Kyoto • Fushimi Inari', budget: '₹17,000', weather: '⛅️', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop' },
    { day: 3, title: 'Osaka • Dotonbori', budget: '₹16,200', weather: '🌤️', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 gap-4 lg:grid-cols-1"
    >
      {days.map((d) => (
        <div key={d.day} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <img src={d.img} alt={d.title} className="h-40 w-full object-cover opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0f2c] via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Day {d.day}: {d.title}</h3>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs">{d.weather}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-white/80">
              <span>Estimated Budget</span>
              <span className="font-semibold text-[#00ffd5]">{d.budget}</span>
            </div>
          </div>
        </div>
      ))}
      <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#00ffd5] px-4 py-2 font-semibold text-[#0a0f2c]">
        <BadgeCheck className="h-5 w-5" /> Book Entire Trip
      </button>
    </motion.div>
  );
};

const BudgetPlanner = () => {
  const [budget, setBudget] = useState(100000);
  const flight = Math.round(budget * 0.4);
  const stay = Math.round(budget * 0.35);
  const food = Math.round(budget * 0.15);
  const fun = budget - flight - stay - food;

  const bar = (val, label) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm"><span className="text-white/80">{label}</span><span className="font-semibold">₹{val.toLocaleString('en-IN')}</span></div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-[#00ffd5] to-cyan-400" style={{ width: `${(val / budget) * 100}%` }} />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <label className="text-sm text-white/70">Total Budget</label>
        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="text-3xl font-semibold">₹{budget.toLocaleString('en-IN')}</div>
            <p className="mt-1 text-sm text-white/60">Move the slider to rebalance categories.</p>
          </div>
        </div>
        <input
          type="range"
          min={30000}
          max={300000}
          step={5000}
          value={budget}
          onChange={(e) => setBudget(parseInt(e.target.value))}
          className="mt-6 w-full accent-[#00ffd5]"
        />
        <div className="mt-6 grid grid-cols-2 gap-4">
          {bar(flight, 'Flights')}
          {bar(stay, 'Stays')}
          {bar(food, 'Food')}
          {bar(fun, 'Experiences')}
        </div>
      </div>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <h4 className="text-lg font-semibold">Recommendation</h4>
        <ul className="mt-4 space-y-3 text-sm text-white/80">
          <li>• Fly mid-week for lower fares.</li>
          <li>• Split stay: 3 nights city, 2 nights scenic to balance costs.</li>
          <li>• Pre-book 2 paid experiences, leave 1 day free to roam.</li>
        </ul>
        <button className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 hover:bg-white/10">Export Budget</button>
      </div>
    </div>
  );
};

const RideBooking = () => {
  const [vehicle, setVehicle] = useState('Car');
  const vehicles = ['Car', 'Bike', 'EV'];

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl lg:col-span-2">
        <div className="relative h-72 w-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#0b143a] to-[#0a0f2c]">
          {/* Map mock */}
          <div className="absolute inset-0">
            <div className="absolute left-6 top-6 flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs backdrop-blur-md"><Clock className="h-4 w-4 text-[#00ffd5]" /> Best pickup: <span className="font-semibold text-white">4:20 PM</span></div>
            {/* Route line */}
            <motion.div
              className="absolute left-20 top-20 h-0.5 w-1/2 origin-left rounded-full bg-gradient-to-r from-[#00ffd5] to-cyan-400"
              animate={{ scaleX: [0.2, 1, 0.9, 1] }}
              transition={{ repeat: Infinity, duration: 4 }}
            />
            <PingDot className="left-16 top-16" label="Home" />
            <PingDot className="right-16 bottom-12" label="Airport" color="#00ffd5" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {vehicles.map((v) => (
              <button key={v} onClick={() => setVehicle(v)} className={tabBtn(vehicle === v)}>{v}</button>
            ))}
          </div>
          <div className="space-y-3">
            <Field icon={<MapPin className="h-4 w-4 text-[#00ffd5]" />} placeholder="Pickup (auto-detected)" />
            <Field icon={<Navigation className="h-4 w-4 text-[#00ffd5]" />} placeholder="Drop location" />
            <button className="mt-2 w-full rounded-xl bg-[#00ffd5] py-2 font-semibold text-[#0a0f2c]">Preview Route</button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <h4 className="text-sm font-semibold">Driver match</h4>
          <div className="mt-3 flex items-center justify-between text-sm">
            <div>
              <div className="font-semibold">Aarav • 4.9★</div>
              <div className="text-white/70">{vehicle} • ETA 6 min</div>
            </div>
            <div className="rounded-full bg-white/10 px-3 py-1 text-xs">₹ 420</div>
          </div>
          <button className="mt-4 w-full rounded-xl border border-white/15 bg-white/5 py-2 hover:bg-white/10">Confirm & Book</button>
        </div>
      </div>
    </div>
  );
};

const Field = ({ icon, placeholder }) => (
  <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-[#0e1642] px-3 py-2">
    {icon}
    <input className="w-full bg-transparent text-sm placeholder:text-white/50 focus:outline-none" placeholder={placeholder} />
  </div>
);

const PingDot = ({ className = '', label, color = '#ff64f9' }) => (
  <div className={`absolute ${className}`}>
    <span className="relative inline-flex">
      <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full" style={{ backgroundColor: color, opacity: 0.5 }} />
      <span className="relative inline-flex h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
    </span>
    <div className="mt-1 text-xs text-white/80">{label}</div>
  </div>
);

export default SmartSuite;
