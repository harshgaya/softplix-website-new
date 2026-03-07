"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

function Counter({ end, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        let cur = 0;
        const step = Math.max(1, Math.ceil(end / 80));
        const t = setInterval(() => {
          cur = Math.min(cur + step, end);
          setVal(cur);
          if (cur >= end) clearInterval(t);
        }, 18);
      },
      { threshold: 0.4 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      return "Valid email required";
    if (!form.mobile.trim()) return "Mobile number is required";
    if (!form.company.trim()) return "Business type is required";
    if (!form.message.trim()) return "Project details required";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSuccess(true);
      setForm({ name: "", email: "", mobile: "", company: "", message: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-slate-200 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:bg-white transition-all";
  const labelClass =
    "block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide";

  return (
    <form onSubmit={submit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            name="email"
            value={form.email}
            onChange={change}
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Mobile Number *</label>
          <input
            name="mobile"
            type="tel"
            value={form.mobile}
            onChange={(e) => {
              setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") });
              setError("");
            }}
            placeholder="+91 9876543210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Business Type *</label>
          <input
            name="company"
            value={form.company}
            onChange={change}
            placeholder="e.g. E-commerce, SaaS, Startup"
            className={inputClass}
          />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Project Details & Budget *</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={change}
            placeholder="Describe your project, timeline, and expected budget..."
            className={inputClass + " resize-none"}
          />
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">⚠ {error}</p>}
      {success && (
        <p className="mt-3 text-sm text-green-600">
          ✅ Message sent! We will contact you within 4 hours.
        </p>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
        <p className="text-xs text-slate-400">
          🔒 Confidential. No spam, ever.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-sm rounded-xl px-8 py-4 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? "Sending…" : "Get Free Consultation →"}
        </button>
      </div>
    </form>
  );
}

/* ─── Main Page ────────────────────────────────────────────────────── */
export default function WebdevPage() {
  const services = [
    {
      icon: "🌐",
      t: "Business Website Development",
      d: "Professional, SEO-optimised websites that generate leads 24/7.",
    },
    {
      icon: "🛒",
      t: "E-commerce Development",
      d: "High-converting online stores with secure payments & inventory.",
    },
    {
      icon: "⚙️",
      t: "Web Application Development",
      d: "Scalable web apps built with Next.js, React & Node.js.",
    },
    {
      icon: "☁️",
      t: "SaaS Platform Development",
      d: "End-to-end SaaS products with subscription billing & dashboards.",
    },
    {
      icon: "💻",
      t: "Custom Software Development",
      d: "Tailor-made software built around your unique business processes.",
    },
    {
      icon: "🔗",
      t: "API Development & Integrations",
      d: "Connect systems with payment gateways, CRMs, and third-party APIs.",
    },
  ];

  const projects = [
    {
      name: "IIT NEET Books",
      tag: "E-commerce",
      stat: "₹20K+ sales/month",
      url: "https://iitneetbooks.com/",
      image: "/projects/rb-book.png",
    },
    {
      name: "ATOM RnD",
      tag: "Corporate Website",
      stat: "Biomedical · Healthcare",
      url: "https://atomrnd.com/",
      image: "/projects/atom-rd.png",
    },
    {
      name: "Bridgr",
      tag: "SaaS Platform",
      stat: "Recruitment SaaS",
      url: "https://getbridgr.com/",
      image: "/projects/bridgr.png",
    },
    {
      name: "AIM NEET Academy",
      tag: "EdTech Platform",
      stat: "Online Education Platform",
      url: "https://aimneetacademy.com/",
      image: "/projects/aim-neet.png",
    },
    {
      name: "Real Estate Platform",
      tag: "Property Portal",
      stat: "Full-Stack Next.js App",
      url: "https://real-estate-next-js--softplix-api.asia-east1.hosted.app/",
      image: "/projects/real-estate.png",
    },
    {
      name: "Happy Tokens",
      tag: "Web + App",
      stat: "8,500+ installs · ₹5L+ revenue",
      url: "https://happytokens.in/",
      image: "/projects/happy-tokens.png",
    },
    {
      name: "My Trainer Bids",
      tag: "Marketplace",
      stat: "Fitness Trainer Platform",
      url: "https://my-trainer-bids--softplix-api.asia-east1.hosted.app/",
      image: "/projects/my-trainer.png",
    },
    {
      name: "Poscast House",
      tag: "Media Platform",
      stat: "Podcast & Content Platform",
      url: "https://poscastehouse--softplix-api.asia-east1.hosted.app/",
      image: "/projects/podcastehouse.png",
    },
    {
      name: "Matrimony Platform",
      tag: "Social Portal",
      stat: "Matrimony Matching App",
      url: "https://mkapumatrimony--softplix-api.asia-east1.hosted.app/",
      image: "/projects/matrimony.png",
    },
  ];

  const apps = [
    {
      name: "Happy Tokens",
      stat: "8,500 installs · ₹5L+ revenue",
      store: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.softplix.happytoken.happy_tokens",
      icon: "🪙",
    },
    {
      name: "Dakhni Swarajya",
      stat: "2,00,000+ newspaper readers",
      store: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.dakhaniswarajya.epaper",
      icon: "📰",
    },
    {
      name: "AdxReel",
      stat: "80,000+ installs",
      store: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.adtip.app.adtip_app",
      icon: "🎬",
    },
    {
      name: "Crypto Safe Track",
      stat: "Live on App Store",
      store: "App Store",
      url: "https://apps.apple.com/in/app/crypto-safe-track/id6742253274",
      icon: "₿",
    },
  ];

  const steps = [
    {
      n: "01",
      t: "Discovery Call",
      d: "We understand your goals, audience & technical requirements — free.",
    },
    {
      n: "02",
      t: "UI/UX Design",
      d: "Pixel-perfect wireframes and designs built for conversion.",
    },
    {
      n: "03",
      t: "Development",
      d: "Clean, scalable code using Next.js, React, Node.js.",
    },
    {
      n: "04",
      t: "QA & Testing",
      d: "Cross-browser, cross-device testing before launch.",
    },
    {
      n: "05",
      t: "Launch & Support",
      d: "Go-live support and ongoing maintenance packages.",
    },
  ];

  const testimonials = [
    {
      q: "Softplix delivered an outstanding platform for us. Sales increased immediately after launch. The team is professional and fast.",
      name: "Rajesh Sharma",
      role: "Founder, IIT NEET Books",
    },
    {
      q: "They built our biomedical corporate site with precision. We now get daily enquiries from international clients.",
      name: "Dr. Anand Mehta",
      role: "Director, ATOM RnD",
    },
    {
      q: "Fast delivery, clean code, great support. Our SaaS MVP was live in 6 weeks. Highly recommended!",
      name: "Priya Nair",
      role: "CEO, Bridgr",
    },
  ];

  return (
    <div className="font-sans bg-white text-slate-900 overflow-x-hidden">
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-16 bg-gradient-to-b from-indigo-50 via-slate-50 to-white relative overflow-hidden">
        {/* dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(79,70,229,.08) 1.5px, transparent 1.5px)",
            backgroundSize: "34px 34px",
          }}
        />
        {/* glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 0%, rgba(79,70,229,.13) 0%, transparent 65%)",
          }}
        />

        {/* Badge */}
        <div className="relative z-10 inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-7">
          <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_0_3px_rgba(34,197,94,0.2)] animate-pulse" />
          Trusted by Businesses Worldwide
        </div>

        <h1 className="relative z-10 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900 mb-5">
          Custom Website Development
          <br />
          for{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Businesses & Startups
          </span>
        </h1>

        <p className="relative z-10 text-lg sm:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Build a fast, secure, and scalable website with{" "}
          <strong className="text-slate-700">Softplix Technologies</strong>.
          Trusted by businesses across India, USA, UK and beyond.
        </p>

        <div className="relative z-10 flex flex-wrap gap-4 justify-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-9 py-4 shadow-lg shadow-indigo-500/35 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/45 transition-all"
          >
            🚀 Get Free Consultation
          </a>
          <a
            href="tel:+919304136129"
            className="bg-white text-slate-800 border-2 border-slate-200 font-semibold text-base rounded-xl px-8 py-4 hover:border-indigo-400 hover:bg-indigo-50 transition-all"
          >
            📞 Call +91 93041 36129
          </a>
        </div>

        {/* Proof bar */}
        <div className="relative z-10 mt-16 flex flex-wrap justify-center bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
          {[
            { num: "10+", lbl: "Years Experience", counter: false },
            { num: 1, suffix: "M+", lbl: "App Users Built", counter: true },
            { num: 10, suffix: "M+", lbl: "Website Traffic", counter: true },
            { num: 50, suffix: "+", lbl: "Projects Delivered", counter: true },
            { num: "4.9★", lbl: "Client Rating", counter: false },
          ].map((item, i) => (
            <div
              key={i}
              className="px-8 py-6 text-center border-r border-slate-100 last:border-r-0 max-sm:w-1/2 max-sm:border-r-0 max-sm:border-b max-sm:last:border-b-0"
            >
              <div className="text-3xl font-extrabold text-indigo-600 leading-none tracking-tight">
                {item.counter ? (
                  <Counter end={item.num} suffix={item.suffix} />
                ) : (
                  item.num
                )}
              </div>
              <div className="text-xs text-slate-500 font-semibold mt-1.5 uppercase tracking-wider">
                {item.lbl}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-slate-900 py-14 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-slate-800 sm:divide-x sm:divide-slate-800">
          {[
            { i: "🏆", v: "10+ Years", d: "Dev Experience" },
            { i: "📱", v: "1M+ Users", d: "App Users Built" },
            { i: "🌍", v: "10M+", d: "Website Traffic" },
            { i: "⭐", v: "Top Rated", d: "Developers" },
            { i: "⚡", v: "Fast", d: "Delivery & Support" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-7 px-5"
            >
              <div className="text-2xl mb-2">{t.i}</div>
              <div className="text-2xl font-extrabold text-white leading-none">
                {t.v}
              </div>
              <div className="text-xs text-slate-500 mt-1.5">{t.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 px-5 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              What We Build
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Our Web Development Services
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
              End-to-end digital solutions — from landing pages to enterprise
              SaaS platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all cursor-default"
              >
                <div className="text-4xl mb-4">{s.icon}</div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  {s.t}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Our Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Recent Projects
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Real businesses, real results. Click any project to see it live.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden border border-slate-200 bg-white flex flex-col hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-200 transition-all no-underline text-inherit"
              >
                <div className="h-52 overflow-hidden relative bg-slate-100 flex-shrink-0">
                  <Image src={p.image} height={200} width={400} alt={p.name} />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                    🔴 Live
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-1">
                    {p.tag}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-1">
                    {p.name}
                  </div>
                  <div className="text-sm text-slate-500 flex-1 mb-4">
                    {p.stat}
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 group-hover:underline">
                    View Live Site →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPS ── */}
      <section className="py-24 px-5 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Mobile Apps
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Apps That Scaled to Millions
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Proven track record — real installs, real revenue, real users.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {apps.map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:-translate-y-1 transition-all no-underline text-inherit"
              >
                <div className="text-4xl mb-4">{a.icon}</div>
                <div className="text-lg font-bold text-white mb-1">
                  {a.name}
                </div>
                <div className="text-sm text-slate-400 mb-4">{a.stat}</div>
                <span className="inline-flex items-center gap-1.5 bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
                  {a.store === "Play Store" ? "▶" : "🍎"} {a.store}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" className="py-24 px-5 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              How We Work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Transparent, structured — you always know what is happening.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-0 overflow-x-auto pb-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex-1 min-w-40 flex flex-col items-center text-center px-4 relative"
              >
                {i < steps.length - 1 && (
                  <div
                    className="hidden sm:block absolute top-6 left-1/2 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-100 z-0"
                    style={{ left: "55%" }}
                  />
                )}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 text-white text-lg font-extrabold flex items-center justify-center relative z-10 mb-4 shadow-lg shadow-indigo-500/30">
                  {s.n}
                </div>
                <div className="text-sm font-bold text-slate-900 mb-2">
                  {s.t}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Client Stories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-8"
              >
                <div className="text-5xl text-indigo-100 leading-none mb-2 font-serif"></div>
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {t.q}
                </p>
                <div className="text-sm font-bold text-slate-900">{t.name}</div>
                <div className="text-xs text-slate-500">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-24 px-5 text-center bg-gradient-to-br from-indigo-700 to-purple-800 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg text-white/75 mb-10">
            Get a free consultation with our expert developers. No commitment
            required.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-indigo-700 font-bold text-base rounded-xl px-9 py-4 shadow-xl hover:-translate-y-0.5 transition-all no-underline"
            >
              🚀 Start Your Project
            </a>
            <a
              href="tel:+919304136129"
              className="text-white border-2 border-white/40 font-semibold text-base rounded-xl px-7 py-4 hover:border-white hover:bg-white/10 transition-all no-underline"
            >
              📞 Call Now
            </a>
            <a
              href="https://wa.me/919304136129?text=Hi%2C%20I%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white border-2 border-white/40 font-semibold text-base rounded-xl px-7 py-4 hover:border-white hover:bg-white/10 transition-all no-underline"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-24 px-5 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Free Consultation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              Start Your Project Today
            </h2>
            <p className="text-base text-slate-500">
              Tell us what you are building. We reply within 4 business hours.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-indigo-500/5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── SEO ── */}
      <section className="py-12 px-5 border-t border-slate-100">
        <p className="max-w-4xl mx-auto text-xs text-slate-400 leading-loose text-center">
          <strong>Softplix Technologies</strong> is a professional web
          development company providing custom website development, web
          application development, e-commerce solutions, and scalable digital
          solutions for startups and businesses worldwide. We specialise in
          Next.js, React, Node.js, and SaaS architecture. Serving clients across
          India, USA, UK, UAE and beyond. From business websites and landing
          pages to full-stack web applications and SaaS platforms — fast,
          secure, and conversion-optimised solutions delivered on time.
        </p>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-slate-900 py-10 px-5 text-center">
        <div className="text-xl font-extrabold text-white mb-4">
          Softplix <span className="text-indigo-400">Technologies</span>
        </div>
        <div className="flex flex-wrap gap-6 justify-center mb-4">
          {[
            ["Services", "#services"],
            ["Portfolio", "#portfolio"],
            ["Process", "#process"],
            ["Contact", "#contact"],
            ["+91 93041 36129", "tel:+919304136129"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors no-underline"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-xs text-slate-600">
          © {new Date().getFullYear()} Softplix Technologies. All rights
          reserved.
        </p>
      </footer>

      {/* ── WHATSAPP BUTTON ── */}
      <a
        href="https://wa.me/919304136129?text=Hi%2C%20I%20visited%20your%20website%20and%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform"
        style={{ animation: "wa-pulse 2.5s infinite" }}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <style>{`
          @keyframes wa-pulse {
            0%   { box-shadow: 0 4px 20px rgba(37,211,102,.55), 0 0 0 0 rgba(37,211,102,.45); }
            70%  { box-shadow: 0 4px 20px rgba(37,211,102,.55), 0 0 0 18px rgba(37,211,102,0); }
            100% { box-shadow: 0 4px 20px rgba(37,211,102,.55), 0 0 0 0 rgba(37,211,102,0); }
          }
        `}</style>
      </a>
    </div>
  );
}
