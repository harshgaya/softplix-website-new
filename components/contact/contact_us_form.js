import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 -z-10 rounded-[40px] bg-indigo-500/20 blur-3xl" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-[28px] bg-white p-6 md:p-8 shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Tell us about your project
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Share a few details and we’ll reach out with next steps,
              timelines, and how we can help.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                placeholder="you@example.com"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                placeholder="+91 XXXXX XXXXX (optional)"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                placeholder="Your company name"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <textarea
              rows={4}
              placeholder="Briefly describe your project, goals, and timeline..."
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500 mb-6"
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-xs text-gray-500">
                We usually respond within one business day.
                <br />
                Your details are kept confidential.
              </p>

              <button className="px-6 py-3 rounded-full bg-indigo-500 text-white text-sm font-medium shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:bg-indigo-600 transition">
                Send Message
              </button>
            </div>
          </div>

          <div className="rounded-[28px] bg-indigo-100/80 p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <h3 className="font-semibold text-gray-900 mb-6">
              Contact information
            </h3>

            <div className="space-y-6 text-sm text-gray-700">
              <div className="flex gap-3">
                <Mail className="text-indigo-600 mt-1" size={18} />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <p>support@softplix.com</p>
                  <p className="text-xs text-gray-500">
                    Best for briefs, RFPs, and partnerships.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="text-indigo-600 mt-1" size={18} />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <p>+91 XXXXX XXXXX</p>
                  <p className="text-xs text-gray-500">
                    Mon–Sat, 10:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin className="text-indigo-600 mt-1" size={18} />
                <div>
                  <p className="font-medium text-gray-900">Office</p>
                  <p>Softplix Studio, Tech Park District, Bengaluru, India</p>
                  <p className="text-xs text-gray-500">
                    Modern workspace for product & engineering teams.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="text-indigo-600 mt-1" size={18} />
                <div>
                  <p className="font-medium text-gray-900">Business hours</p>
                  <p>Mon–Sat, 10 AM – 7 PM</p>
                  <p className="text-xs text-gray-500">
                    We support distributed teams across time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
