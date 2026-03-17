import Link from "next/link";
import { EMAIL_S, WHATSAPP } from "@/lib/constants";
import {
  FaWhatsapp,
  FaArrowRight,
  FaCircleCheck,
  FaClockRotateLeft,
  FaShieldHalved,
  FaStar,
  FaRocket,
  FaGlobe,
  FaUsers,
  FaBolt,
  FaTag,
  FaLock,
  FaChartLine,
  FaCode,
  FaBullseye,
  FaPenRuler,
  FaFlask,
  FaMobileScreen,
  FaDatabase,
  FaGears,
  FaLandmark,
  FaHeartPulse,
  FaCubes,
  FaTruck,
  FaGraduationCap,
  FaBuilding,
  FaPersonRunning,
  FaMoneyBillWave,
  FaHandshake,
  FaListCheck,
  FaHammer,
  FaCalendarDays,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Startup MVP Development Company | Build Your MVP Fast | Softplix",
  description:
    "Softplix is a leading startup MVP development company helping founders validate ideas and ship production-ready MVPs in 4–8 weeks. Fixed price, full IP ownership, zero fluff.",
  keywords:
    "startup mvp development, mvp development company, minimum viable product development, mvp app development, startup product development company",
  alternates: { canonical: "https://softplix.com/startup-mvp-development" },
  openGraph: {
    title: "Startup MVP Development Company | Build Your MVP Fast | Softplix",
    description:
      "Softplix is a leading startup MVP development company helping founders validate ideas and ship production-ready MVPs in 4–8 weeks. Fixed price, full IP ownership, zero fluff.",
    type: "website",
    url: "https://softplix.com/startup-mvp-development",
  },
};

// ─── Shared Components ─────────────────────────────────────────────────────────

function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-indigo-50 text-indigo-600 border border-indigo-100">
      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse inline-block" />
      {children}
    </span>
  );
}

function CTAGroup({ center = false, size = "md" }) {
  const wrap = center
    ? "flex flex-wrap gap-3 justify-center"
    : "flex flex-wrap gap-3";
  const btn =
    size === "lg"
      ? "px-7 py-4 text-base rounded-xl font-semibold"
      : "px-5 py-3 text-sm rounded-xl font-semibold";
  return (
    <div className={wrap}>
      <Link
        href="/contact-us"
        className={`${btn} inline-flex items-center gap-2 bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5`}
      >
        {"Book Free Consultation"}
        <FaArrowRight className="text-xs" />
      </Link>
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btn} inline-flex items-center gap-2 bg-white text-gray-800 border border-gray-200 hover:border-green-400 hover:text-green-700 transition-all shadow-sm hover:-translate-y-0.5`}
      >
        <FaWhatsapp className="text-green-500 text-base" />
        {"Chat on WhatsApp"}
      </a>
    </div>
  );
}

// ─── 1. Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 pt-24 pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge>{"#1 Startup MVP Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"Startup MVP Development"}
          <br />
          <span className="text-indigo-400">
            {"From Idea to Live Product in Weeks"}
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds production-ready MVPs for startups — web apps, mobile apps, SaaS platforms, and AI products. Fixed price, 4 to 8 week delivery, full IP ownership. We help founders validate fast and raise with confidence."
          }
        </p>

        <div className="mt-10">
          <CTAGroup center size="lg" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {[
            "Fixed-price contracts",
            "4–8 week delivery",
            "NDA on request",
            "Full IP ownership",
          ].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <FaCircleCheck className="text-green-400" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 2. Trust ──────────────────────────────────────────────────────────────────

function Trust() {
  const stats = [
    {
      icon: <FaRocket className="text-indigo-600 text-2xl" />,
      value: "80+",
      label: "MVPs Launched",
    },
    {
      icon: <FaCalendarDays className="text-indigo-600 text-2xl" />,
      value: "6 wks",
      label: "Avg. Delivery Time",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-2xl" />,
      value: "30+",
      label: "Countries Served",
    },
    {
      icon: <FaStar className="text-indigo-600 text-2xl" />,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];
  return (
    <section className="py-14 bg-white border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-widest text-gray-400 uppercase mb-10">
          {"Trusted by Founders at Pre-Seed, Seed & Series A"}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ icon, value, label }) => (
            <div
              key={label}
              className="text-center flex flex-col items-center gap-2"
            >
              {icon}
              <div className="text-4xl font-extrabold text-gray-900 tabular-nums">
                {value}
              </div>
              <div className="text-sm text-gray-500 font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Services ───────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: <FaCode />,
    title: "Web App MVP Development",
    desc: "Full-stack web application MVPs built with Next.js, React, and Node.js. From SaaS dashboards to marketplace platforms — production-grade from the first sprint, not a demo that breaks under real users.",
  },
  {
    icon: <FaMobileScreen />,
    title: "Mobile App MVP Development",
    desc: "Cross-platform mobile MVPs using React Native or Flutter. Ship on iOS and Android simultaneously from a single codebase — halving your time-to-market and your development budget.",
  },
  {
    icon: <FaFlask />,
    title: "AI-Powered MVP Development",
    desc: "MVPs with AI built in from day one — LLM integrations, RAG pipelines, AI agents, and intelligent automation. We help you build the AI differentiation that makes your product fundable.",
  },
  {
    icon: <FaDatabase />,
    title: "SaaS MVP Development",
    desc: "Multi-tenant SaaS foundations with authentication, billing, role-based access, onboarding flows, and subscription management — everything you need to acquire and retain paying customers from launch.",
  },
  {
    icon: <FaPenRuler />,
    title: "MVP UI/UX Design",
    desc: "Investor-ready product design that looks polished from day one. User flows, wireframes, high-fidelity prototypes, and a design system that scales with your product as you grow post-launch.",
  },
  {
    icon: <FaGears />,
    title: "MVP to Scale Engineering",
    desc: "After your MVP validates, we help you scale it. Architecture reviews, performance optimisation, team augmentation, and the technical roadmap to take you from 100 users to 100,000.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"MVP Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Minimum Viable Product Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "End-to-end MVP development for startups — from concept and design to deployment and investor demo, delivered in weeks not months."
            }
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon, title, desc }) => (
            <article
              key={title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors mb-4">
                {icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </article>
          ))}

          {/* CTA card */}
          <div className="bg-indigo-600 rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-3">
                {"Ready to build?"}
              </p>
              <h3 className="text-xl font-bold leading-snug">
                {"Get a free MVP scope and timeline for your idea"}
              </h3>
            </div>
            <Link
              href="/contact-us"
              className="mt-6 inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold text-sm px-5 py-3 rounded-xl hover:bg-indigo-50 transition-colors w-fit"
            >
              {"Talk to an Expert"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. Process ────────────────────────────────────────────────────────────────

const STEPS = [
  {
    num: "01",
    title: "Scoping",
    desc: "We workshop your idea, identify the core value hypothesis, strip the scope to what matters, and produce a fixed-price quote within 48 hours.",
  },
  {
    num: "02",
    title: "Design",
    desc: "User flows, wireframes, and high-fidelity UI approved by you before a single line of code is written. No expensive surprises mid-build.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Two-week sprints with live demos every fortnight. You see real working software — not status updates — throughout the entire engagement.",
  },
  {
    num: "04",
    title: "Test & QA",
    desc: "Functional testing, cross-device QA, performance checks, and security review before we hand over the keys to your product.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Production deployment, domain setup, analytics integration, and a full handover so you own and control everything from day one.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our MVP Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A lean, founder-friendly process designed to ship your MVP fast — without the waste, guesswork, or scope creep that kills startup timelines."
            }
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map(({ num, title, desc }) => (
            <div
              key={num}
              className="bg-slate-50 rounded-2xl p-5 border border-gray-100 hover:border-indigo-200 hover:shadow-sm transition-all"
            >
              <div className="text-4xl font-black text-indigo-100 leading-none mb-3">
                {num}
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Industries ─────────────────────────────────────────────────────────────

const INDUSTRIES = [
  {
    icon: <FaLandmark />,
    name: "Fintech",
    desc: "Payment platforms, lending apps, investment tools, insurance tech, and regulatory-compliant financial MVPs for the modern banking era.",
  },
  {
    icon: <FaHeartPulse />,
    name: "HealthTech",
    desc: "Telemedicine platforms, patient engagement apps, clinical workflow tools, and HIPAA-compliant health data applications.",
  },
  {
    icon: <FaCubes />,
    name: "B2B SaaS",
    desc: "Vertical SaaS tools, workflow automation platforms, internal dashboards, and productivity applications for business teams.",
  },
  {
    icon: <FaBuilding />,
    name: "PropTech",
    desc: "Property listing platforms, tenant management portals, real estate investment tools, and smart building management dashboards.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Last-mile delivery apps, fleet management platforms, supply chain visibility tools, and on-demand logistics marketplaces.",
  },
  {
    icon: <FaGraduationCap />,
    name: "EdTech",
    desc: "Learning management systems, online tutoring platforms, skills assessment tools, and corporate training applications.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"MVP Development Across Every Startup Vertical"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "We have shipped MVPs across every major startup category — bringing domain knowledge that shortens your time to first user."
            }
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INDUSTRIES.map(({ icon, name, desc }) => (
            <div
              key={name}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex gap-4 hover:border-indigo-200 hover:shadow-md transition-all group"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {icon}
              </span>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 6. Why Softplix ───────────────────────────────────────────────────────────

const ADVANTAGES = [
  {
    icon: <FaPersonRunning />,
    title: "Startup Speed",
    body: "We move at startup speed — not agency speed. Fixed scope, fixed price, and delivery in weeks. No drawn-out discovery phases or padded timelines.",
  },
  {
    icon: <FaBullseye />,
    title: "Scope Discipline",
    body: "We push back on feature creep and keep your MVP focused on the single hypothesis worth validating. Less is more — and faster — at the MVP stage.",
  },
  {
    icon: <FaBolt />,
    title: "Production Quality",
    body: "Our MVPs are production-grade from day one — not throwaway prototypes. You can demo to investors, onboard real users, and scale without a rebuild.",
  },
  {
    icon: <FaTag />,
    title: "Founder-Friendly Pricing",
    body: "Fixed-price milestone contracts with no hidden fees. We understand pre-revenue budgets and structure engagements that preserve your runway.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "All code, design assets, and documentation belong to you the moment you make final payment. NDAs signed before kickoff, no exceptions.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partner",
    body: "Many clients come back for their Series A rebuild. We are invested in your success — not just the first invoice — and are here for the full startup journey.",
  },
];

function WhySoftplix() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Badge>{"Why Softplix"}</Badge>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              {"Why Founders Choose Softplix for MVP Development"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have helped over 80 startups go from idea to live product. Here is what makes us different from every other agency that claims to build MVPs."
              }
            </p>
            <div className="mt-8">
              <CTAGroup />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {ADVANTAGES.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-slate-50 rounded-xl p-5 border border-gray-100 hover:border-indigo-100 transition-colors"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                    {icon}
                  </span>
                  <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 7. Long SEO Content ───────────────────────────────────────────────────────

function SeoContent() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge>{"In-Depth Guide"}</Badge>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-10">
          {"What Is MVP Development — And Why Does Every Startup Need It?"}
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "A minimum viable product, universally abbreviated as MVP, is the simplest version of a product that delivers enough value to attract real users and generate meaningful feedback. The concept, popularised by Eric Ries in The Lean Startup, is deceptively simple — but executing it well requires significant discipline, experience, and technical judgment. Building too little means the product fails to demonstrate value. Building too much means wasted runway and a launch that arrives too late to matter. The art of MVP development is threading this needle precisely, and it is the defining competency of any serious startup MVP development company."
            }
          </p>

          <p>
            {
              "At Softplix, we have spent years refining what it means to build a truly useful MVP — one that can be demonstrated to investors, used by real customers, and evolved into a scalable product without a ground-up rebuild. We have seen both extremes: founders who spent eighteen months building a feature-complete product before showing it to a single user, and founders who launched something so rough it destroyed early user trust. The right MVP lives between these extremes, and finding that line requires a partner who has done it dozens of times before."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Real Cost of Building Your MVP Wrong"}
          </h3>

          <p>
            {
              "The most common and most expensive mistake startups make is treating MVP development as purely a technical exercise. They hire developers, write a specification, and build what the specification says — without ever stress-testing whether the specification captures what users actually need. The result is a technically functional product that solves the wrong problem. By the time this becomes clear, months of runway and hundreds of thousands of dollars have been spent on code that will be partially or entirely discarded."
            }
          </p>

          <p>
            {
              "The second most common mistake is choosing the wrong development partner. Many agencies will happily take your brief, estimate enthusiastically, and then deliver something that works in a demo but breaks under real-world usage — or produces a codebase so poorly structured that every subsequent feature costs three times what it should. A rushed or cheaply built MVP does not save money. It defers costs into a future where you have less runway, more users to disappoint, and a technical debt mountain that every new engineer you hire will warn you about."
            }
          </p>

          <p>
            {
              "The third mistake is scope creep. Founders, understandably, have a comprehensive vision for their product. But a comprehensive vision is the enemy of a fast MVP. Every feature added to the initial scope extends your timeline, increases your budget, and delays the feedback you need to know whether you are building the right thing. Softplix enforces scope discipline on every engagement — not because we want to deliver less, but because we have seen what happens to startups that launch six months later than they needed to."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"What Makes a Good MVP: The Core Principles"}
          </h3>

          <p>
            {
              "A good MVP has a single, clearly defined hypothesis at its centre. That hypothesis should be falsifiable — meaning the product either proves or disproves it within a defined timeframe. Everything in the MVP should serve the validation of that hypothesis. Features that are interesting but do not contribute to hypothesis validation belong in version two, not version one. This principle sounds obvious but is remarkably difficult to apply under the pressure of investor expectations, competitive anxiety, and the founder's natural desire to show their full vision."
            }
          </p>

          <p>
            {
              "A good MVP is also production-grade, not prototype-grade. There is a common misconception that an MVP should be rough, held together by duct tape, and replaced the moment it proves the concept. This approach fails in practice for several reasons. Sophisticated users and investors can tell the difference between a prototype and a production-grade product, and they draw conclusions from that difference. A buggy, slow MVP signals poor technical judgment, not lean thinking. More practically, prototype-grade code is almost always more expensive to extend than to replace — meaning you pay twice rather than once."
            }
          </p>

          <p>
            {
              "Finally, a good MVP is deployable, observable, and iterable. It should be live on real infrastructure with real users generating real data from day one. It should have analytics and monitoring so you can see exactly how users behave. And its codebase should be structured to accept new features without architectural surgery. All three of these properties need to be engineered in from the start — they cannot be added retroactively without significant cost and disruption."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How Long Does MVP Development Take?"}
          </h3>

          <p>
            {
              "The honest answer is: it depends on scope, but scope is within your control. A tightly scoped MVP for a single-hypothesis SaaS product — with a defined user flow, three to five core features, authentication, and basic analytics — can be delivered in four to six weeks with the right team. A more complex MVP with multiple user roles, third-party integrations, mobile and web surfaces, and advanced functionality typically takes eight to twelve weeks. Projects that take longer than twelve weeks are almost certainly not MVPs — they are version one products, and the distinction matters enormously for budget and timeline management."
            }
          </p>

          <p>
            {
              "The biggest driver of MVP timeline is decision latency — how quickly you as the founder can review work, provide feedback, and make scope decisions. Softplix works in two-week sprint cycles with live demos every fortnight. The founders who get the fastest outcomes are the ones who are available for weekly check-ins, responsive on Slack, and decisive about feedback. Agencies that promise fast delivery without founder engagement are misleading you — the fastest MVPs are collaborative, not outsourced."
            }
          </p>

          <p>
            {
              "The other major timeline driver is the definition of done. Many founders underestimate the work required to go from a working prototype to a genuinely launchable product — error handling, mobile responsiveness, email flows, loading states, empty states, and the dozens of small details that separate a product that feels finished from one that feels unfinished. Softplix scopes these details into the delivery from the start, so your launch-ready MVP is genuinely launch-ready rather than requiring a further month of polish after handover."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "MVP Development for Fundraising: What Investors Actually Want to See"
            }
          </h3>

          <p>
            {
              "Many founders build MVPs specifically to fundraise, and this shapes what the MVP needs to do. A fundraising MVP needs to accomplish three things simultaneously: demonstrate that the core problem is real, show that your approach to solving it is credible, and signal that you and your team are capable of executing. The product itself is evidence for all three of these, but it is not the only evidence — and obsessing over product completeness at the expense of traction, user feedback, and narrative is a common fundraising trap."
            }
          </p>

          <p>
            {
              "What investors actually want to see in an MVP demo is product clarity, not feature richness. A product that does one thing beautifully and clearly is more fundable than a product that does ten things adequately. They want to see that you understand your user deeply enough to have made hard product decisions. They want to see that users are engaging — even a handful of users using the product regularly is more compelling than thousands of sign-ups who never returned. And they want to see that the technical foundation is solid enough to scale, which is why a prototype-grade MVP actively hurts fundraising rather than helping it."
            }
          </p>

          <p>
            {
              "Softplix has helped founders across fintech, healthtech, SaaS, and marketplaces raise their first rounds with MVPs we built. The feedback we consistently hear from their investors is that the product felt polished and the technical decisions felt credible. This is not an accident — it is the direct result of building to production standards from the first line of code, making intentional architectural decisions, and shipping products that look and feel investor-ready rather than founder-beta."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Technology Stack for Startup MVPs in 2025"}
          </h3>

          <p>
            {
              "Technology stack choices for MVPs require balancing three competing priorities: speed of initial development, long-term scalability, and talent availability for your future hires. Choosing an exotic or niche stack may feel exciting but creates real problems when you need to hire your first in-house engineer and nobody in your city has experience with it. Softplix builds most MVPs on Next.js, React, Node.js, and PostgreSQL — a stack that is fast to develop, widely understood, highly performant, and supported by one of the largest developer ecosystems in the world."
            }
          </p>

          <p>
            {
              "For mobile MVPs, React Native remains the dominant cross-platform choice — it allows a single codebase to target iOS and Android simultaneously, which is critical for startups that need to validate across both platforms without paying for two separate development efforts. Flutter is an increasingly strong alternative, particularly for MVPs with complex animations or custom UI requirements. Both approaches are meaningfully faster and cheaper than separate native development for initial validation purposes."
            }
          </p>

          <p>
            {
              "AI integration has become a standard feature of competitive MVPs in 2025. Founders who are building products in any category where intelligence, personalisation, or automation creates value should consider how AI fits into their core product from day one — not as an afterthought. Softplix has deep experience integrating LLM APIs, building RAG systems, and creating AI-powered features that genuinely differentiate products rather than bolting on a chatbot for show. If your MVP can be meaningfully improved with AI, we will tell you how — and build it right."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"From MVP to Series A: Planning Beyond the First Launch"}
          </h3>

          <p>
            {
              "The best MVP development engagements plant the seeds for what comes after. The technical decisions made at the MVP stage — database schema, API design, authentication architecture, deployment infrastructure — have a compounding effect on everything that follows. A well-architected MVP can accommodate the next twelve months of feature development with relatively modest incremental effort. A poorly architected MVP requires constant firefighting, increasing engineering costs, and eventually a painful rewrite that happens at exactly the wrong time — when you are trying to close a round or hit a growth milestone."
            }
          </p>

          <p>
            {
              "Softplix structures every MVP engagement with an explicit eye on what comes next. Before we write a line of code, we discuss your twelve-month product vision and make architectural decisions that accommodate that vision without over-engineering the MVP itself. This is the hardest skill in MVP development — building the right amount of infrastructure for where you are going, without building so much that it slows you down getting there. It requires experience that only comes from having shipped dozens of products and seen what breaks at scale."
            }
          </p>

          <p>
            {
              "For founders who have already launched and are now preparing for a Series A raise, Softplix also offers technical due diligence preparation and codebase hardening services. We review your existing product, identify the technical risks that investors will probe, and produce the remediation plan and documentation that demonstrates engineering maturity. Many of our best client relationships began not with an MVP build but with a technical audit of someone else's work — and the rebuild or remediation that followed."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right MVP Development Company"}
          </h3>

          <p>
            {
              "Choosing an MVP development partner is one of the highest-stakes decisions a pre-revenue founder makes. The market for startup development agencies is large, fragmented, and deeply uneven in quality. Promises of fast delivery and low cost are ubiquitous. Actual evidence of production-grade MVPs delivered on time and on budget to founders who will take your call and tell you honestly about their experience is far rarer."
            }
          </p>

          <p>
            {
              "When evaluating an MVP development company, ask specifically to speak with three previous startup clients whose MVPs are now live and in the hands of real users. Ask how the agency handles scope change requests. Ask what happens if the delivery timeline slips. Ask to see the actual code — not just the frontend — of a previous project. Ask who specifically will be working on your project, not just who is in the sales meeting. These questions separate the agencies that build good products from the ones that give good pitches."
            }
          </p>

          <p>
            {
              "Softplix has built our reputation entirely on the quality of what we ship and the honesty with which we operate. We will tell you when your idea needs more validation before it is worth building. We will tell you when your scope is too large for the budget you have described. We will flag technical risks before they become expensive problems. We believe the best MVP development partner is one who treats your runway like it is their own money — because the startups we help succeed are the ones we are most proud of."
            }
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── 8. Case Studies ───────────────────────────────────────────────────────────

const CASES = [
  {
    tag: "HealthTech / Pre-Seed",
    title: "Telemedicine MVP for Mental Health Startup",
    desc: "Built a HIPAA-aware telemedicine MVP with video consultations, therapist matching, scheduling, and payment processing in 7 weeks. The founder used the live product to close a $1.2M pre-seed round from a US-based health-focused VC.",
    metrics: ["7-week delivery", "$1.2M pre-seed raised", "HIPAA-aware build"],
  },
  {
    tag: "B2B SaaS / Seed",
    title: "AI-Powered Contract Review SaaS",
    desc: "Shipped a multi-tenant SaaS MVP that uses LLMs to extract, classify, and flag risk clauses in legal contracts. Went from brief to beta users in 6 weeks. The product onboarded 12 paying law firm customers within 60 days of launch.",
    metrics: ["6-week delivery", "12 paying customers", "LLM-powered core"],
  },
  {
    tag: "Marketplace / Seed",
    title: "Two-Sided Logistics Marketplace",
    desc: "Built a web and mobile MVP for a same-day delivery marketplace connecting SME senders with independent couriers. Dual-sided onboarding, real-time job matching, GPS tracking, and Stripe payouts. Launched in 8 weeks across two cities.",
    metrics: ["8-week delivery", "2 city launch", "Real-time GPS tracking"],
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Case Studies"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Startup MVPs We Have Shipped"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Real products, real users, real outcomes — for founders at pre-seed, seed, and Series A."
            }
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map(({ tag, title, desc, metrics }) => (
            <article
              key={title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="bg-gradient-to-br from-indigo-50 to-slate-100 px-6 pt-6 pb-4">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                  {tag}
                </span>
                <h3 className="mt-2 text-lg font-bold text-gray-900 leading-snug">
                  {title}
                </h3>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {metrics.map((m) => (
                    <span
                      key={m}
                      className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 9. FAQ ────────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "What is MVP development?",
    a: "MVP development is the process of building the simplest version of a product that delivers enough value to attract real users and generate meaningful feedback. The goal is not to build a stripped-down product — it is to build the most focused product that validates your core business hypothesis as quickly and cheaply as possible, without compromising on production quality.",
  },
  {
    q: "How long does it take to build an MVP?",
    a: "A tightly scoped MVP typically takes 4 to 8 weeks from kickoff to launch. More complex MVPs with multiple user roles, mobile and web surfaces, or advanced integrations typically take 8 to 12 weeks. Projects taking longer than 12 weeks are generally not MVPs — they are version one products. Timeline is primarily driven by scope discipline, not development speed.",
  },
  {
    q: "How much does MVP development cost?",
    a: "MVP development at Softplix ranges from $15,000 for a simple single-feature web product to $60,000 for a complex multi-platform product with advanced functionality. We provide fixed-price quotes after a free scoping call — no hourly billing, no budget surprises. The cost of getting your MVP wrong is always higher than the cost of getting it right the first time.",
  },
  {
    q: "What is the difference between an MVP and a prototype?",
    a: "A prototype is a non-functional or semi-functional demonstration of a concept — typically used for early user testing or investor conversations before a product is built. An MVP is a fully functional, production-deployed product with real users generating real data. At Softplix, we build MVPs — not prototypes — because real users and real data are what drive meaningful product decisions.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — the majority of our MVP clients are non-technical founders. We guide you through every technical decision in plain language, manage the entire engineering process, and produce comprehensive documentation so you understand what has been built and why. You do not need to be technical to work with us. You need to understand your users and be available to make product decisions.",
  },
  {
    q: "Can you help me prepare my MVP for a fundraising pitch?",
    a: "Yes. Many of our MVP clients raise their first rounds with products we build. We understand what investors look for technically — production quality, clean architecture, scalability signals — and we build to those standards by default. We also offer technical due diligence preparation services for founders who are further along in their fundraising process.",
  },
  {
    q: "Who owns the code and IP after you build the MVP?",
    a: "You do. Full ownership of all source code, design assets, database schemas, and documentation transfers to you upon final payment. We sign NDAs before kickoff and structure every engagement as a work-for-hire agreement. There are no ongoing licensing fees, no platform lock-in, and no strings attached.",
  },
  {
    q: "What happens after the MVP launches?",
    a: "We offer continued engagement in several forms — sprint retainers for ongoing feature development, a dedicated team model for faster scaling, or a clean handover to your in-house engineering team with full documentation. Many clients continue working with Softplix as their primary engineering partner through seed, Series A, and beyond. We are structured to be a long-term partner, not a one-and-done vendor.",
  },
];

function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"FAQ"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Frequently Asked Questions About MVP Development"}
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 text-sm sm:text-base hover:text-indigo-600 transition-colors select-none">
                {q}
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-gray-500 group-open:bg-indigo-100 group-open:text-indigo-600 transition-colors font-bold text-base leading-none">
                  <span className="group-open:hidden">{"+"}</span>
                  <span className="hidden group-open:inline">{"−"}</span>
                </span>
              </summary>
              <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                {a}
              </div>
            </details>
          ))}
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  );
}

// ─── 10. Final CTA ─────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-indigo-700/30 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-700/20 blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Badge>{"Start Today"}</Badge>
        <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          {"Ship Your MVP in 4–8 Weeks"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 80+ founders who chose Softplix to turn their idea into a live, investor-ready product. Book your free scoping call today — no commitment, no sales pressure."
          }
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-700 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-2xl hover:-translate-y-0.5 text-base"
          >
            {"Book Free Consultation"}
            <FaArrowRight className="text-sm" />
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-800 text-white font-bold rounded-xl border border-indigo-600 hover:bg-indigo-700 transition-all hover:-translate-y-0.5 text-base"
          >
            <FaWhatsapp className="text-green-400 text-lg" />
            {"WhatsApp Chat"}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-indigo-300">
          {[
            { icon: <FaClockRotateLeft />, text: "Responds within 24 hours" },
            { icon: <FaShieldHalved />, text: "NDA on request" },
            {
              icon: <FaStar className="text-amber-400" />,
              text: "80+ MVPs delivered",
            },
          ].map(({ icon, text }) => (
            <span key={text} className="flex items-center gap-2">
              {icon} {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Schema: Organization ──────────────────────────────────────────────────────

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Softplix",
    url: "https://softplix.com",
    description:
      "Softplix is a leading startup MVP development company helping founders validate ideas and ship production-ready MVPs in 4 to 8 weeks.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MVP Development Services",
      itemListElement: [
        "Web App MVP Development",
        "Mobile App MVP Development",
        "AI-Powered MVP Development",
        "SaaS MVP Development",
        "MVP UI/UX Design",
        "MVP to Scale Engineering",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// ─── Page Export ───────────────────────────────────────────────────────────────

export default function StartupMVPDevelopmentPage() {
  return (
    <>
      <OrganizationSchema />
      <main>
        <Hero />
        <Trust />
        <Services />
        <Process />
        <Industries />
        <WhySoftplix />
        <SeoContent />
        <CaseStudies />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
