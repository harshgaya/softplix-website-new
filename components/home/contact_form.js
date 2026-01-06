"use client";

import { useState } from "react";

export default function ContactSection() {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const validate = () => {
    if (!form.name.trim()) return "Name is required";

    if (!form.email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) return "Invalid email address";

    if (!form.mobile.trim()) return "Mobile number is required";
    // if (!/^\d{10}$/.test(form.mobile)) return "Mobile number must be 10 digits";

    if (!form.company.trim()) return "Company name is required";

    if (!form.message.trim()) return "Message is required";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      console.log("Submitting form:", form);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setSuccess(true);
      setForm({ name: "", email: "", message: "", mobile: "", company: "" });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full  relative">
      <div className="max-w-6xl mx-auto px-4 relative ">
        {/* 🔮 Radial Gradient Background */}
        <div
          className="absolute inset-0 -z-10 rounded-3xl
          bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.18),transparent_70%)]
          blur-2xl"
        />

        {/* Card */}
        <div
          className="relative rounded-3xl bg-white/80 backdrop-blur-xl
          border border-white/40 shadow-[0_40px_120px_rgba(0,0,0,0.15)]
          px-6 py-10 md:px-12 md:py-14"
        >
          <div
            className="absolute inset-0 -z-10
      bg-[radial-gradient(ellipse_at_top,rgba(224,231,255,0.9),transparent_70%)]
      blur-2xl"
          />
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Let’s Discuss Your Project
            </h2>
            <p className="mt-2 text-gray-600">
              Share a bit about what you’re building and we’ll get back to you
              within one business day.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
              <Input
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
              />
              <Input
                label="Mobile Number"
                name="mobile"
                type="tel"
                value={form.mobile}
                onChange={(e) => {
                  // allow digits only
                  const value = e.target.value.replace(/\D/g, "");
                  setForm({ ...form, mobile: value });
                  setError("");
                }}
                placeholder="+91 9876543210"
              />
              <Input
                label="Your Company Name"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="ABC Pvt Ltd"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your product, timelines, and goals."
                className="w-full rounded-xl border border-white/60 bg-white/90
                  px-4 py-3 text-sm shadow-sm focus:outline-none
                  focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Error / Success */}
            {error && <p className="text-sm text-red-600">{error}</p>}
            {success && (
              <p className="text-sm text-green-600">
                ✅ Message sent successfully. We’ll contact you soon.
              </p>
            )}

            {/* Footer */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-2">
              <p className="text-xs text-gray-500">
                We respect your inbox. No spam, ever.
              </p>

              <button
                type="submit"
                disabled={loading}
                className={`rounded-full px-8 py-3 text-sm font-medium text-white
                  transition-all
                  ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/30"
                  }
                `}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, value, onChange, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/60 bg-white/90
          px-4 py-3 text-sm shadow-sm focus:outline-none
          focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  );
}
