"use client";

import { useState, useEffect, useRef } from "react";

/* ─── Animated Counter ─────────────────────────────────────────────── */
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

/* ─── Demo Form (inline in hero) ──────────────────────────────────── */
function DemoFormInline() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    institute: "",
    students: "",
    exam: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Full name is required";
    if (!form.phone.trim() || form.phone.length < 10)
      return "Valid phone number required";
    if (!form.institute.trim()) return "Coaching/Institute name is required";
    if (!form.students) return "Please select number of students";
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
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "hero_inline" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      import("react-facebook-pixel").then((ReactPixel) => {
        ReactPixel.default.track("Lead");
      });
      setSuccess(true);
      setForm({ name: "", phone: "", institute: "", students: "", exam: "" });
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

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-5xl mb-4">🎉</div>
        <div className="text-xl font-bold text-green-800 mb-2">
          {"You're In! 🎉"}
        </div>
        <p className="text-green-700 text-sm">
          {"We'll contact you within 30 minutes to set up your platform."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            name="name"
            value={form.name}
            onChange={change}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value.replace(/\D/g, "") });
              setError("");
            }}
            placeholder="+91 9876543210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Coaching / Institute Name *</label>
          <input
            name="institute"
            value={form.institute}
            onChange={change}
            placeholder="e.g. Sharma Classes"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Number of Students *</label>
          <select
            name="students"
            value={form.students}
            onChange={change}
            className={inputClass}
          >
            <option value="">Select range</option>
            <option value="0-50">0 – 50</option>
            <option value="50-200">50 – 200</option>
            <option value="200-500">200 – 500</option>
            <option value="500+">500+</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass}>Target Exam (optional)</label>
          <select
            name="exam"
            value={form.exam}
            onChange={change}
            className={inputClass}
          >
            <option value="">Select exam</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="School">School</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">⚠ {error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-8 py-4 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? "Booking…" : "🚀 Book My Test Series"}
        <p className="text-xs text-slate-400">
          🔒 No payment now. Just a quick call to understand your needs.
        </p>
        <a
          href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20a%20demo%20of%20the%20Test%20Series%20System."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25d366] text-white text-sm font-bold rounded-xl px-5 py-2.5 hover:bg-[#20bb5a] transition-colors no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Call on WhatsApp
        </a>
        <div></div>
      </button>
    </form>
  );
}

/* ─── Full Contact Form (bottom section) ─────────────────────────── */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    institute: "",
    students: "",
    exam: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const change = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Full name is required";
    if (!form.phone.trim() || form.phone.length < 10)
      return "Valid phone number required";
    if (!form.institute.trim()) return "Coaching/Institute name is required";
    if (!form.students) return "Please select number of students";
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
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact_section" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setSuccess(true);
      setForm({ name: "", phone: "", institute: "", students: "", exam: "" });
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

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl mb-4">🎉</div>
        <div className="text-2xl font-extrabold text-slate-900 mb-2">
          {"You're In! 🎉"}
        </div>
        <p className="text-slate-500">
          {"We'll contact you within 30 minutes to set up your platform."}
        </p>
      </div>
    );
  }

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
          <label className={labelClass}>Phone Number *</label>
          <input
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value.replace(/\D/g, "") });
              setError("");
            }}
            placeholder="+91 9876543210"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Coaching / Institute Name *</label>
          <input
            name="institute"
            value={form.institute}
            onChange={change}
            placeholder="e.g. Sharma Classes, ABC Institute"
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Number of Students *</label>
          <select
            name="students"
            value={form.students}
            onChange={change}
            className={inputClass}
          >
            <option value="">Select student range</option>
            <option value="0-50">0 – 50</option>
            <option value="50-200">50 – 200</option>
            <option value="200-500">200 – 500</option>
            <option value="500+">500+</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Target Exam (optional)</label>
          <select
            name="exam"
            value={form.exam}
            onChange={change}
            className={inputClass}
          >
            <option value="">Select target exam</option>
            <option value="NEET">NEET</option>
            <option value="JEE">JEE</option>
            <option value="School">School</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {error && <p className="mt-3 text-sm text-red-600">⚠ {error}</p>}

      <div className="flex flex-col gap-3 mt-6">
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-8 py-4 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {loading ? "Booking…" : "🚀 Book My Test Series"}
        </button>
        <a
          href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20a%20demo%20of%20the%20Test%20Series%20System."
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#25d366] text-white font-bold text-base rounded-xl px-8 py-4 hover:bg-[#20bb5a] transition-colors no-underline"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5 fill-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          💬 WhatsApp to Get Started
        </a>
        <p className="text-center text-xs text-slate-400">
          🔒 No payment now. Just a quick call to understand your needs.
        </p>
      </div>
    </form>
  );
}

/* ─── WhatsApp SVG ─────────────────────────────────────────────────── */
function WaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-7 h-7 fill-white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── Main Page ────────────────────────────────────────────────────── */
export default function TestSeriesPage() {
  const benefits = [
    {
      icon: "🏷️",
      t: "Your Own Branded Platform",
      d: "Your logo, your name, your domain. 100% white-labelled.",
    },
    {
      icon: "💰",
      t: "Earn From Your Own Students",
      d: "Charge for test series directly. Keep 100% of revenue.",
    },
    {
      icon: "🎛️",
      t: "Full Control Over Tests",
      d: "Create, edit, schedule, or delete tests anytime you want.",
    },
    {
      icon: "⚡",
      t: "Easy Test Creation",
      d: "Upload questions in minutes. No coding or tech skills needed.",
    },
    {
      icon: "📊",
      t: "Track Performance",
      d: "Real-time analytics on every student's progress and accuracy.",
    },
    {
      icon: "🏆",
      t: "Professional System",
      d: "Exactly like Allen & Aakash — at a fraction of the cost.",
    },
  ];

  const results = [
    {
      icon: "🎯",
      t: "Instant Score",
      d: "Students see their marks the moment they submit.",
    },
    {
      icon: "✅",
      t: "Accuracy %",
      d: "Subject-wise accuracy so students know where to improve.",
    },
    {
      icon: "🇮🇳",
      t: "All India Rank",
      d: "Live rank among all test takers — drives engagement.",
    },
  ];

  const adminFeatures = [
    {
      icon: "📝",
      t: "Create Tests in Minutes",
      d: "Simple upload or manual entry of MCQ questions with correct answers.",
    },
    {
      icon: "👨‍🎓",
      t: "Track Student Performance",
      d: "See who attempted, who didn't, and detailed score breakdowns.",
    },
    {
      icon: "📋",
      t: "Manage All Students",
      d: "One dashboard for every student — enrolments, attempts, payments.",
    },
    {
      icon: "📈",
      t: "Analyze Results Easily",
      d: "Charts and reports that help you improve your teaching strategy.",
    },
  ];

  return (
    <div className="font-sans bg-white text-slate-900 overflow-x-hidden">
      {/* ── URGENCY BANNER ── */}
      <div className="bg-amber-500 text-white text-center text-xs sm:text-sm font-bold py-2.5 px-4">
        🔥 Limited Offer: First 10 Coaching Institutes Get 50% OFF — Only{" "}
        <span className="underline">3 Slots Left!</span>{" "}
        <a href="#contact" className="underline ml-1">
          Claim Now →
        </a>
      </div>

      {/* ── HERO ── */}
      <section className="px-5 pt-12 pb-16 bg-gradient-to-b from-indigo-50 via-slate-50 to-white relative overflow-hidden">
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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-200 rounded-full px-4 py-2 text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-6">
                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_0_3px_rgba(34,197,94,0.2)] animate-pulse" />
                For Coaching Institutes Across India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 mb-5">
                Start Your Own
                <br />
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Test Series System
                </span>
                <br />
                Like Allen & Aakash
              </h1>

              <p className="text-xl font-bold text-indigo-700 mb-3">
                Generate ₹1–3 lakh/month from students you already teach
              </p>
              <p className="text-base text-slate-500 leading-relaxed mb-8">
                Your students are already paying for test series — just not to
                you. Launch your own platform and start earning from your own
                students.
              </p>

              {/* Proof bar */}
              <div className="flex flex-wrap gap-0 bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden mb-8">
                {[
                  { num: 500, suffix: "+", lbl: "Institutes", counter: true },
                  { num: "₹1–3L", lbl: "Avg. Monthly Income", counter: false },
                  {
                    num: 50,
                    suffix: "K+",
                    lbl: "Students Served",
                    counter: true,
                  },
                  { num: "4.9★", lbl: "Rating", counter: false },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex-1 min-w-24 px-5 py-4 text-center border-r border-slate-100 last:border-r-0"
                  >
                    <div className="text-xl font-extrabold text-indigo-600 leading-none tracking-tight">
                      {item.counter ? (
                        <Counter end={item.num} suffix={item.suffix} />
                      ) : (
                        item.num
                      )}
                    </div>
                    <div className="text-xs text-slate-500 font-semibold mt-1 uppercase tracking-wider">
                      {item.lbl}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-8 py-4 shadow-lg shadow-indigo-500/35 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/45 transition-all no-underline"
                >
                  🚀 Book My Test Series
                </a>
                <a
                  href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20a%20demo%20of%20the%20Test%20Series%20System."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25d366] text-white font-bold text-base rounded-xl px-7 py-4 hover:bg-[#20bb5a] transition-colors no-underline"
                >
                  <WaIcon />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Right: inline form */}
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-2xl shadow-indigo-500/10">
              <div className="text-center mb-6">
                <span className="inline-block bg-amber-50 text-amber-700 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-2">
                  🎁 50% OFF – Limited Slots
                </span>
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Book My Test Series
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  {"We'll set up your platform within 7 days."}
                </p>
              </div>
              <DemoFormInline />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-slate-900 py-12 px-5">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-slate-800 sm:divide-x sm:divide-slate-800">
          {[
            { i: "🏆", v: "500+", d: "Institutes Launched" },
            { i: "👨‍🎓", v: "50K+", d: "Students on Platform" },
            { i: "💰", v: "₹3L/mo", d: "Max Earned by 1 Institute" },
            { i: "⚡", v: "7 Days", d: "Setup Time" },
            { i: "⭐", v: "4.9★", d: "Client Rating" },
          ].map((t, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center py-7 px-5"
            >
              <div className="text-2xl mb-2">{t.i}</div>
              <div className="text-xl font-extrabold text-white leading-none">
                {t.v}
              </div>
              <div className="text-xs text-slate-500 mt-1.5">{t.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDEO DEMO ── */}
      <section className="py-20 px-5 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
            Live Demo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            See How This Test Series System Works
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto mb-10">
            This is a real test system — not a concept. Students attempt tests,
            submit answers, and get instant results with rank.
          </p>
          {/* Video embed placeholder */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-indigo-200 shadow-2xl shadow-indigo-500/15 bg-slate-900 aspect-video flex items-center justify-center">
            {/* Replace src with your real YouTube or video URL */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qoZFXZzplKE"
              title="Test Series Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            {/* <div className="text-center text-white p-10">
              <div className="w-20 h-20 rounded-full bg-indigo-600/80 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-indigo-600 transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 fill-white ml-1.5"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg font-bold text-white">
                Demo Video Coming Soon
              </p>
              <p className="text-sm text-slate-400 mt-1">
                Replace this with your YouTube embed URL
              </p>
            </div> */}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-8 py-4 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 transition-all no-underline"
            >
              Book My Test Series
            </a>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-red-50 text-red-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              ❗ The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              {"You're Losing Revenue Every Month"}
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Right now, your students are paying other platforms for test
              series. Even though{" "}
              <strong className="text-slate-700">
                you are doing all the teaching
              </strong>
              , someone else is earning from your students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: "💸",
                t: "You Lose ₹1–3 Lakh/Month",
                d: "Every test series fee your student pays to Allen or Aakash is money that should be yours.",
              },
              {
                icon: "📉",
                t: "No Control Over Performance",
                d: "You can't track how your own students perform on tests you didn't create.",
              },
              {
                icon: "🚫",
                t: "Missing a Major Opportunity",
                d: "Test series is a recurring revenue stream — and you're leaving it on the table.",
              },
            ].map((p, i) => (
              <div
                key={i}
                className="bg-red-50 border border-red-100 rounded-2xl p-7 text-center"
              >
                <div className="text-4xl mb-3">{p.icon}</div>
                <div className="text-base font-bold text-red-800 mb-2">
                  {p.t}
                </div>
                <p className="text-sm text-red-700 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-base rounded-xl px-9 py-4 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5 transition-all no-underline"
            >
              Fix This — Book My Test Series →
            </a>
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="py-20 px-5 bg-gradient-to-br from-indigo-700 to-purple-800 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-indigo-200 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              🚀 The Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Launch Your Own Test Series System
            </h2>
            <p className="text-lg text-white/75 max-w-2xl mx-auto">
              Now you can run your own test series platform — just like top
              institutes. Your branding. Your revenue. Your control.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
            {[
              {
                icon: "⏱️",
                t: "Attempt Tests With Timer",
                d: "Full exam-like experience — timed tests, question navigation, section switching.",
              },
              {
                icon: "⚡",
                t: "Get Instant Results",
                d: "Marks, correct answers, and explanations displayed immediately on submit.",
              },
              {
                icon: "🏆",
                t: "View All India Rank",
                d: "Students see where they stand vs. all other test takers — motivation guaranteed.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/15 rounded-2xl p-7 text-center backdrop-blur-sm"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <div className="text-base font-bold text-white mb-2">{s.t}</div>
                <p className="text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="#contact"
              className="bg-white text-indigo-700 font-bold text-base rounded-xl px-10 py-4 shadow-xl hover:-translate-y-0.5 transition-all no-underline"
            >
              🚀 Book My Test Series
            </a>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section id="features" className="py-20 px-5 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              💰 What You Get
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Everything You Need to Earn More
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              A complete, ready-to-launch test series platform built for
              coaching institutes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all cursor-default"
              >
                <div className="text-4xl mb-4">{b.icon}</div>
                <div className="text-lg font-bold text-slate-900 mb-2">
                  {b.t}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT STUDENTS SEE ── */}
      <section className="py-20 px-5 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              📊 Student Results
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              What Students See
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Professional result pages that make your platform feel premium and
              credible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {results.map((r, i) => (
              <div
                key={i}
                className="bg-indigo-50 border border-indigo-100 rounded-2xl p-7 text-center"
              >
                <div className="text-4xl mb-3">{r.icon}</div>
                <div className="text-base font-bold text-indigo-900 mb-2">
                  {r.t}
                </div>
                <p className="text-sm text-indigo-700 leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>

          {/* Screenshot placeholder */}
          {/* <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl aspect-video flex items-center justify-center text-center p-8">
            <div>
              <div className="text-5xl mb-3">📸</div>
              <p className="text-slate-500 font-semibold">
                Add Result Screenshot Here
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Replace this div with an &lt;Image /&gt; of your result screen
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* ── ADMIN DASHBOARD ── */}
      <section className="py-20 px-5 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-white/10 text-indigo-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              🧑‍💼 Admin Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Easy Dashboard for You
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              No technical skills needed. Manage everything from one simple
              panel.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {adminFeatures.map((a, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 hover:-translate-y-1 transition-all"
              >
                <div className="text-3xl mb-3">{a.icon}</div>
                <div className="text-base font-bold text-white mb-2">{a.t}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{a.d}</p>
              </div>
            ))}
          </div>
          {/* Dashboard screenshot placeholder */}
        </div>
      </section>

      {/* ── OFFER ── */}
      <section className="py-20 px-5 bg-amber-500 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0,0,0,.06) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-4">🎁</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Limited Time Offer
          </h2>
          <p className="text-xl font-bold text-white/90 mb-2">
            First 10 Coaching Institutes Get{" "}
            <span className="underline decoration-wavy">50% OFF</span>
          </p>
          <p className="text-base text-white/75 mb-8">
            {
              "Only 3 slots remaining. Once they're gone, this offer closes permanently."
            }
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-amber-700 font-bold text-base rounded-xl px-10 py-4 shadow-xl hover:-translate-y-0.5 transition-all no-underline"
            >
              🚀 Book My Test Series – 50% OFF
            </a>
            <a
              href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20to%20claim%2050%25%20OFF%20on%20the%20Test%20Series%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] text-white font-bold text-base rounded-xl px-8 py-4 hover:bg-[#20bb5a] transition-colors no-underline"
            >
              <WaIcon />
              WhatsApp Claim
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="py-20 px-5 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-indigo-50 text-indigo-600 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Free Callback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              🚀 Start Your Test Series Today
            </h2>
            <p className="text-base text-slate-500">
              {
                " We'll set up your platform within 7 days. No tech skills needed."
              }
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl shadow-indigo-500/5">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-5 text-center bg-gradient-to-br from-indigo-700 to-purple-800 relative overflow-hidden">
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
            Start Your Own Test Series System Today
          </h2>
          <p className="text-lg text-white/75 mb-3">
            {" Don't let other platforms earn from your students."}
          </p>
          <p className="text-base text-white/60 mb-10">
            Take control, build your own platform, and start generating income.
            Get your free callback now.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-indigo-700 font-bold text-base rounded-xl px-10 py-4 shadow-xl hover:-translate-y-0.5 transition-all no-underline"
            >
              🚀 Book My Test Series
            </a>
            <a
              href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20a%20demo%20of%20the%20Test%20Series%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25d366] text-white font-bold text-base rounded-xl px-8 py-4 hover:bg-[#20bb5a] transition-colors no-underline"
            >
              <WaIcon />
              WhatsApp Demo
            </a>
            <a
              href="tel:+919304136129"
              className="text-white border-2 border-white/40 font-semibold text-base rounded-xl px-7 py-4 hover:border-white hover:bg-white/10 transition-all no-underline"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP FLOAT ── */}
      <a
        href="https://wa.me/919304136129?text=Hi%2C%20I%20want%20a%20demo%20of%20the%20Test%20Series%20System."
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25d366] flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform"
        style={{ animation: "wa-pulse 2.5s infinite" }}
      >
        <WaIcon />
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
