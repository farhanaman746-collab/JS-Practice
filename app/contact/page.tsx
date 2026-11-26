"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-emerald-700">
            MyPortfolio
          </Link>
          <nav className="space-x-6 text-sm font-medium text-slate-600">
            <Link href="/" className="hover:text-emerald-700 transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-emerald-700 transition">
              About
            </Link>
            <Link href="/contact" className="text-emerald-700 font-semibold">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Top Intro Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-800 uppercase bg-emerald-100 rounded-full">
            Contact Me
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Let&apos;s Start a <span className="text-emerald-600">Conversation</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
            Reach out for research inquiries, academic collaboration, or general questions. Send a
            message below and I will respond as soon as possible.
          </p>
        </section>

        {/* Contact Grid */}
        <section className="bg-white py-16 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
            {/* Left Info Cards */}
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-1">Email</h2>
                <p className="text-slate-600 text-sm">your.email@example.com</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-1">Location</h2>
                <p className="text-slate-600 text-sm">Balochistan, Pakistan</p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <h2 className="text-lg font-bold text-slate-900 mb-1">Response Time</h2>
                <p className="text-slate-600 text-sm">Usually within 24–48 hours</p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="p-8 rounded-xl bg-slate-50 border border-slate-200">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    ✓
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h2>
                  <p className="text-slate-600 text-sm mb-6">
                    Thank you for your message. I will get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-600 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm">
        
      </footer>
    </div>
  );
}