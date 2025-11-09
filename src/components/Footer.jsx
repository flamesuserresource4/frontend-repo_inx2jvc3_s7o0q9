import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0f2c] py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold">TripMind</h4>
            <p className="mt-2 text-white/70">The future of travel is AI-powered. Glide through planning, rides, and bookings with a friendly glow.</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white/80">Company</h5>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white/80">Product</h5>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#rides" className="hover:text-white">Smart Rides</a></li>
              <li><a href="#plan" className="hover:text-white">AI Trip Planner</a></li>
              <li><a href="#" className="hover:text-white">Bookings</a></li>
              <li><a href="#" className="hover:text-white">Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold uppercase tracking-wider text-white/80">Follow</h5>
            <div className="mt-3 flex items-center gap-3 text-white/70">
              <a href="#" aria-label="Facebook" className="rounded-full border border-white/10 p-2 hover:text-white"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-white/10 p-2 hover:text-white"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-white/10 p-2 hover:text-white"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="YouTube" className="rounded-full border border-white/10 p-2 hover:text-white"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} TripMind. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
