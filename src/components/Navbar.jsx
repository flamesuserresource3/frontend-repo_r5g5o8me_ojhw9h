import React from 'react';
import { Phone } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-emerald-600 text-white grid place-items-center font-bold">SD</div>
            <span className="font-semibold text-slate-900 text-lg">Shalom Designs</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#services" className="text-slate-600 hover:text-slate-900 transition">Services</a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">Contact</a>
            <a
              href="tel:+10000000000"
              className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition"
            >
              <Phone size={18} />
              Call us
            </a>
          </nav>
          <a
            href="tel:+10000000000"
            className="md:hidden inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 text-white shadow hover:bg-emerald-700 transition"
            aria-label="Call Shalom Designs"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
