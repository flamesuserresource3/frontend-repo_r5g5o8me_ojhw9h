import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', service: 'General enquiry', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote request: ${form.service} — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`);
    window.location.href = `mailto:hello@shalomdesigns.example?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-3 text-slate-600 max-w-prose">
              Have a school order, need alterations, or planning a special outfit? Tell us what you need and we’ll get back with timing and a quote.
            </p>

            <div className="mt-8 space-y-4">
              <a href="tel:+10000000000" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
                <span className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-slate-700"><Phone size={18} /></span>
                <span>+1 (000) 000-0000</span>
              </a>
              <a href="mailto:hello@shalomdesigns.example" className="flex items-center gap-3 text-slate-700 hover:text-slate-900">
                <span className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-slate-700"><Mail size={18} /></span>
                <span>hello@shalomdesigns.example</span>
              </a>
              <div className="flex items-center gap-3 text-slate-700">
                <span className="h-10 w-10 rounded-full bg-slate-100 grid place-items-center text-slate-700"><MapPin size={18} /></span>
                <span>123 Main Street, Your City</span>
              </div>
            </div>

            <div className="mt-10 text-xs text-slate-500">
              © {new Date().getFullYear()} Shalom Designs. All rights reserved.
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>General enquiry</option>
                  <option>School uniforms</option>
                  <option>Repairs & alterations</option>
                  <option>Custom embroidery</option>
                  <option>Special occasion attire</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us about your project, sizes, deadlines, or any details we should know."
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-emerald-600 px-4 py-3 font-medium text-white shadow hover:bg-emerald-700 transition"
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
