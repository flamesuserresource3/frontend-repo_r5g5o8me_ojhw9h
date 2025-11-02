import React from 'react';
import { GraduationCap, Scissors, Needle, Sparkles } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'School Uniforms',
    desc: 'Durable, well-fitted uniforms with impeccable finishing for students of all ages.',
  },
  {
    icon: Scissors,
    title: 'Repairs & Alterations',
    desc: 'Hems, zips, resizing and careful mending to bring your garments back to life.',
  },
  {
    icon: Needle,
    title: 'Custom Embroidery',
    desc: 'Names, logos and decorative stitching with crisp detail and vibrant threads.',
  },
  {
    icon: Sparkles,
    title: 'Special Occasions',
    desc: 'Elegant dresses and tailored suits designed to fit you and your moment perfectly.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What we do</h2>
          <p className="mt-3 text-slate-600">Quality craftsmanship, friendly service, and a perfect fit—every time.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-emerald-600/10 text-emerald-700 grid place-items-center mb-4 group-hover:scale-105 transition">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-lg text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold text-slate-900">Need something unique?</h3>
            <p className="text-slate-700 text-sm">We offer custom design consultations for embroidery, dresses and suits.</p>
          </div>
          <a href="#contact" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white shadow hover:bg-emerald-700 transition">Book a consult</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
