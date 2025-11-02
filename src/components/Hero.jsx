import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full px-3 py-1 mb-4">Crafted with care</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Shalom Designs
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              School uniforms, clothing repairs, custom embroidery, and elegant dresses & suits tailored for your special occasions.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800 transition"
              >
                Explore services
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-slate-900 border border-slate-300 hover:bg-slate-50 transition"
              >
                Get a quote
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-sm p-6 sm:p-8">
              <div className="grid grid-cols-3 grid-rows-2 gap-3 h-full">
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
                <div className="col-span-2 rounded-lg bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
                <div className="rounded-lg bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
