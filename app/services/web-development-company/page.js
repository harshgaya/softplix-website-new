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
  FaLayerGroup,
  FaMobileScreen,
  FaCartShopping,
  FaGears,
  FaServer,
  FaLandmark,
  FaHeartPulse,
  FaCubes,
  FaTruck,
  FaGraduationCap,
  FaBuilding,
  FaPalette,
  FaDatabase,
  FaCloudArrowUp,
  FaVial,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Web Development Company | Custom Web Development Services | Softplix",
  description:
    "Softplix is a leading web development company building high-performance websites, web applications, and e-commerce platforms for startups and enterprises worldwide.",
  keywords:
    "web development company, custom web development services, enterprise web development company, web application development services, full stack web development company",
  alternates: { canonical: "https://softplix.com/web-development-company" },
  openGraph: {
    title:
      "Web Development Company | Custom Web Development Services | Softplix",
    description:
      "Softplix is a leading web development company building high-performance websites, web applications, and e-commerce platforms for startups and enterprises worldwide.",
    type: "website",
    url: "https://softplix.com/web-development-company",
  },
};

// ─── Atoms ─────────────────────────────────────────────────────────────────────

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
        <Badge>{"#1 Web Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"Web Development Company for"}
          <br />
          <span className="text-indigo-400">{"Startups and Enterprises"}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds high-performance websites, full-stack web applications, e-commerce platforms, and custom web portals. We deliver fast, scalable, SEO-ready web solutions that drive real business growth — on time and on budget."
          }
        </p>

        <div className="mt-10">
          <CTAGroup center size="lg" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {[
            "No long-term contracts",
            "Free discovery call",
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
      value: "120+",
      label: "Websites Delivered",
    },
    {
      icon: <FaCode className="text-indigo-600 text-2xl" />,
      value: "18+",
      label: "Web Developers",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-2xl" />,
      value: "30+",
      label: "Global Clients",
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
          {"Trusted by Startups & Enterprises Worldwide"}
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
    title: "Custom Web Application Development",
    desc: "Bespoke full-stack web applications built with Next.js, React, Node.js, and modern cloud infrastructure. Scalable, secure, and engineered for performance from day one — not patched together from templates.",
  },
  {
    icon: <FaCartShopping />,
    title: "E-commerce Development",
    desc: "High-converting online stores built on Next.js, Shopify, or WooCommerce with custom checkout flows, payment gateway integration, inventory management, and headless commerce architectures.",
  },
  {
    icon: <FaLayerGroup />,
    title: "CMS & Website Development",
    desc: "Fast, SEO-optimised marketing websites and content platforms using Next.js with headless CMS solutions like Sanity, Contentful, and Strapi — editable by your team without touching code.",
  },
  {
    icon: <FaMobileScreen />,
    title: "Progressive Web Apps (PWA)",
    desc: "Web applications that work offline, install like native apps, and deliver app-store quality experiences in the browser. Ideal for reaching users across all devices without separate mobile development.",
  },
  {
    icon: <FaDatabase />,
    title: "API & Backend Development",
    desc: "Robust RESTful and GraphQL APIs, microservices architectures, database design, and cloud backend infrastructure. We build the reliable data layer that powers your web application at any scale.",
  },
  {
    icon: <FaDatabase />,
    title: "Web Performance & SEO Engineering",
    desc: "Technical SEO audits, Core Web Vitals optimisation, server-side rendering, structured data implementation, and page speed engineering to help your web presence rank and convert.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Custom Web Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Web Application Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "End-to-end web development from architecture to deployment — delivered by specialists with deep frontend, backend, and cloud engineering expertise."
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
                {"Ready to start?"}
              </p>
              <h3 className="text-xl font-bold leading-snug">
                {"Get a free web development roadmap for your project"}
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
    title: "Discovery",
    desc: "We map your business goals, user journeys, technical requirements, and existing infrastructure to define the optimal web architecture.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Wireframes, prototypes, and a complete design system reviewed and approved by you before development begins — no surprises mid-build.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with bi-weekly demos. Clean, documented code following modern standards — built to be maintainable long after we hand over.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Cross-browser, cross-device, and performance testing. Automated test suites, accessibility audits, and security checks before every release.",
  },
  {
    num: "05",
    title: "Launch & Growth",
    desc: "Production deployment, CI/CD pipeline setup, monitoring dashboards, SEO validation, and ongoing support and feature development post-launch.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our Web Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A structured, sprint-based process that delivers polished web products on time — without surprises or scope creep."
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
    desc: "Secure financial portals, trading dashboards, lending platforms, payment gateway integrations, and regulatory-compliant web applications.",
  },
  {
    icon: <FaHeartPulse />,
    name: "Healthcare",
    desc: "Patient portals, telemedicine platforms, HIPAA-compliant appointment systems, and healthcare provider dashboards.",
  },
  {
    icon: <FaCartShopping />,
    name: "E-commerce",
    desc: "High-converting online stores, headless commerce platforms, marketplace web applications, and subscription billing systems.",
  },
  {
    icon: <FaCubes />,
    name: "SaaS Startups",
    desc: "Marketing websites, onboarding flows, user dashboards, billing portals, and admin panels for SaaS products at every growth stage.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Fleet management portals, shipment tracking dashboards, driver dispatch systems, and supply chain visibility platforms.",
  },
  {
    icon: <FaGraduationCap />,
    name: "EdTech",
    desc: "Learning management systems, interactive course platforms, student progress dashboards, and live tutoring web applications.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Web Development Across Every Industry"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "We have delivered web solutions across highly competitive, user-sensitive, and data-intensive sectors globally."
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
    icon: <FaUsers />,
    title: "Senior Full-Stack Engineers",
    body: "Our team is composed of senior engineers across frontend, backend, and DevOps — not juniors supervised by a single lead. Every project gets the expertise it deserves.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Time to Market",
    body: "Focused sprints, pre-built component libraries, and battle-tested architecture patterns mean we ship MVPs and production applications faster than any generalist agency.",
  },
  {
    icon: <FaBolt />,
    title: "SEO-First Development",
    desc: "Every site we build is engineered for search performance — server-side rendering, Core Web Vitals, structured data, semantic HTML, and canonical URL strategy from day one.",
    body: "Every site we build is engineered for search performance — server-side rendering, Core Web Vitals, structured data, semantic HTML, and canonical URL strategy from day one.",
  },
  {
    icon: <FaTag />,
    title: "Startup-Friendly Pricing",
    body: "Transparent milestone-based pricing. Fixed-price projects, dedicated teams, and sprint retainers — structured to fit pre-seed, seed, and Series A budgets alike.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "Every line of code, every design asset, every database schema we create belongs to you from day one. NDAs signed before kickoff on every engagement.",
  },
  {
    icon: <FaChartLine />,
    title: "Long-Term Partnership",
    body: "We do not disappear after launch. Structured maintenance retainers, performance monitoring, and ongoing feature development — we are here for the long run.",
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
              {"Why Choose Softplix as Your Web Development Partner"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have shipped web products from MVP to enterprise scale across dozens of industries. Here is what sets us apart from a typical web agency or freelance team."
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
          {"What Is a Web Development Company — And Why Does It Matter?"}
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "A web development company is a specialised technology partner that designs, engineers, and launches websites, web applications, and digital platforms for businesses. Unlike a generalist IT firm or a freelance web designer, a dedicated web development company brings concentrated expertise across the full web stack — frontend engineering, backend architecture, database design, cloud infrastructure, performance optimisation, and technical SEO. The difference in outcome between hiring a generalist and a specialist is not marginal — it is the difference between a website that costs money and one that makes money."
            }
          </p>

          <p>
            {
              "When you partner with a web development company like Softplix, you gain access to a team that has solved the hard problems before. We understand how to architect systems that scale under load, how to build conversion funnels that consistently outperform industry benchmarks, how to engineer page speed that satisfies Google's Core Web Vitals, and how to hand over clean, documented codebases that your internal team can maintain and extend. This institutional knowledge is what separates a specialist partner from an agency that builds pretty websites but cannot explain why they load slowly or fail to rank."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Real Business Value of Custom Web Development"}
          </h3>

          <p>
            {
              "The business case for custom web development over website builders and templates is clear and quantifiable. Template-based platforms like Squarespace, Wix, and basic WordPress themes impose strict ceilings on performance, customisation, and scalability. They serve a purpose for early-stage validation, but they consistently become bottlenecks as businesses grow — creating technical debt that is expensive to unwind, delivering Core Web Vitals scores that hurt search rankings, and locking businesses into vendor ecosystems with limited integration flexibility."
            }
          </p>

          <p>
            {
              "Custom web development removes these ceilings entirely. A bespoke web application built on Next.js with a properly configured content delivery network and server-side rendering consistently achieves Lighthouse scores above 95 — meaning faster page loads, better search rankings, higher conversion rates, and lower bounce rates compared to any template-based alternative. Google's ranking algorithm directly rewards page experience signals including Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift. Custom development is the only reliable path to consistently excellent scores on all three."
            }
          </p>

          <p>
            {
              "Beyond performance, custom web development gives businesses complete ownership of their data architecture, user experience flows, and integration ecosystem. When your web application is purpose-built rather than assembled from plugins, every component is optimised for your specific use case — not the average use case of every other customer paying for the same platform. This specificity compounds over time, creating a web presence that is genuinely differentiated rather than generically adequate."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Full-Stack Web Development: What It Really Means"}
          </h3>

          <p>
            {
              "Full-stack web development refers to the complete engineering of both the client-facing layer users interact with and the server-side infrastructure that powers it. The frontend — everything visible in the browser — encompasses layout, interaction design, animations, state management, and accessibility. The backend — everything the user never sees — encompasses APIs, databases, authentication, business logic, background jobs, and the cloud infrastructure that keeps everything running reliably at scale."
            }
          </p>

          <p>
            {
              "Modern full-stack web development has been transformed by the rise of JavaScript as a universal language for both layers. Frameworks like Next.js enable engineers to build the complete web application in a single technology context — with server-side rendering for SEO and performance, static generation for speed, API routes for backend logic, and client-side interactivity where needed. This unification of the stack reduces complexity, accelerates development, and produces web applications that are faster, more maintainable, and more cost-effective to operate than traditional client-server separations."
            }
          </p>

          <p>
            {
              "Softplix builds primarily with Next.js, React, Node.js, PostgreSQL, and modern cloud infrastructure on AWS and Vercel. We choose this stack because it gives us the best combination of developer productivity, application performance, SEO capability, and long-term maintainability. We also work with other stacks when the project warrants it — including Laravel, Django, Ruby on Rails, and headless CMS architectures — and we always recommend the technology that is genuinely the best fit for your specific requirements rather than the one we happen to prefer."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Web Development for Startups: From MVP to Product-Market Fit"}
          </h3>

          <p>
            {
              "For early-stage startups, the web development decision is one of the highest-leverage choices you will make. The technical foundation you lay in the first weeks of product development shapes your ability to iterate, scale, and attract investment for the next several years. Choosing the wrong stack, the wrong architecture, or the wrong development partner at this stage creates technical debt that compounds relentlessly — slowing down every feature you try to ship and every engineer you try to onboard."
            }
          </p>

          <p>
            {
              "Softplix specialises in startup-friendly web development with fixed-price MVP contracts and four to eight week delivery timelines. We have helped pre-seed founders go from a product brief to a live web application with real users in under six weeks. We have also helped Series A companies replace their rushed MVP codebases with production-grade architectures that can support their next three years of growth. Both engagements require the same discipline: building the simplest thing that delivers real value, validating it with real users, and scaling only what is proven to matter."
            }
          </p>

          <p>
            {
              "The most important technical decision a startup can make is choosing a web development partner who will be honest with you about scope. Feature creep at the MVP stage is the primary reason web development projects go over budget and over schedule. We push back on unnecessary complexity, advocate for deferred features, and keep your initial scope focused on the core value proposition — because a working product in users hands in six weeks is worth infinitely more than a perfect product that launches in eight months."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Enterprise Web Development: Scale, Security, and Governance"}
          </h3>

          <p>
            {
              "Enterprise web development introduces an entirely different set of requirements that smaller teams rarely encounter. Large organisations need web applications that support hundreds of concurrent internal users across multiple departments, integrate with complex legacy systems including ERPs and CRMs, maintain strict data governance and audit trails, satisfy security requirements including penetration testing, SOC 2 compliance, and GDPR or HIPAA, and operate with documented disaster recovery and business continuity provisions."
            }
          </p>

          <p>
            {
              "Enterprise web projects also require robust change management processes. A web application used by thousands of employees across multiple countries cannot be updated with the same velocity as a startup product — changes require staged rollouts, feature flags, comprehensive regression testing, and formal sign-off processes. Softplix builds these governance structures into enterprise web projects from the architecture stage, ensuring that the web application can be safely evolved by your internal teams long after the initial engagement concludes."
            }
          </p>

          <p>
            {
              "Accessibility is a non-negotiable requirement for enterprise web applications, particularly those in government, healthcare, and financial services. WCAG 2.1 AA compliance requires screen reader support, keyboard navigation, sufficient colour contrast, focus management, and appropriate ARIA labelling across every interface element. We treat accessibility as a first-class engineering requirement — not a post-launch audit — because retrofitting accessibility onto a large web application is dramatically more expensive than building it correctly from the start."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Web Development Trends Shaping the Industry in 2025"}
          </h3>

          <p>
            {
              "The web development landscape in 2025 is defined by several converging trends that are reshaping how web applications are built, deployed, and experienced. Server components and streaming server-side rendering — pioneered by React Server Components and implemented in Next.js 14 and 15 — are fundamentally changing the performance ceiling for web applications. By rendering components on the server and streaming them to the browser progressively, modern web frameworks deliver faster perceived load times and better SEO without sacrificing the interactive richness users expect."
            }
          </p>

          <p>
            {
              "Edge computing has become a mainstream deployment strategy rather than a niche optimisation. Deploying web application logic to edge networks that run code geographically close to users reduces latency for global audiences dramatically — a web application served from a Vercel or Cloudflare edge network delivers sub-50ms response times to users in Singapore, Sao Paulo, and Stockholm simultaneously, without any additional infrastructure complexity. For companies with global audiences, edge deployment is no longer optional — it is the baseline for competitive web performance."
            }
          </p>

          <p>
            {
              "AI integration has moved from a novelty to a standard feature in modern web applications. Conversational interfaces, intelligent search, personalised content, AI-generated summaries, and contextual assistance are now expected features in competitive web products across B2B and B2C categories. Softplix builds AI capabilities directly into web applications — integrating LLM APIs, implementing semantic search, and building intelligent user experiences that go beyond simple chatbots to genuinely augment the core product value."
            }
          </p>

          <p>
            {
              "WebAssembly continues to expand the performance envelope of browser-based applications, enabling near-native execution speed for compute-intensive tasks like video processing, CAD rendering, financial modelling, and game engines — all delivered through a standard web browser without any installation. For certain categories of web application, WebAssembly unlocks capabilities that were previously only possible with desktop software, and its adoption in mainstream web frameworks is accelerating rapidly."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Technical SEO and Web Development: Why They Must Go Together"}
          </h3>

          <p>
            {
              "One of the most common and costly mistakes businesses make when commissioning web development is treating SEO as a separate workstream that happens after the website is built. Technical SEO decisions are baked into the architecture of a web application from the first day of development — the rendering strategy, the URL structure, the metadata implementation, the internal linking architecture, the sitemap generation, the page speed engineering, and the structured data markup. Making these decisions correctly at the architecture stage costs almost nothing. Retrofitting them onto a live web application after launch costs significantly in both money and time."
            }
          </p>

          <p>
            {
              "Softplix builds technical SEO into every web development engagement by default. Every website we deliver includes server-side rendering or static generation for crawlability, a programmatic sitemap and robots.txt, semantic HTML heading hierarchies, canonical URL implementation, Open Graph metadata for social sharing, JSON-LD structured data for rich search results, Core Web Vitals optimisation, and image optimisation with next-generation formats. These are not optional add-ons — they are standard engineering practice on every project we ship."
            }
          </p>

          <p>
            {
              "The result is a web presence that is ready to rank from its first day in the Google index, not a website that needs six months of retroactive SEO work before it begins to compete. For businesses investing in web development as a growth channel, this integrated approach to technical SEO is the single highest-leverage thing we do."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right Web Development Company"}
          </h3>

          <p>
            {
              "Choosing a web development partner is one of the most consequential vendor decisions a business makes. The market is crowded with agencies of every size and specialisation, and the quality variance is enormous — from agencies that produce genuinely world-class work to agencies that produce attractive mockups backed by fragile, unmaintainable code. The challenge is that most clients cannot tell the difference until they are six months post-launch and trying to add a new feature to a codebase their developer built in isolation with no documentation."
            }
          </p>

          <p>
            {
              "When evaluating a web development company, ask to see the actual code for a previous project — not just the frontend design. Ask how they handle testing and what their test coverage expectations are. Ask about their deployment process and how they manage production incidents. Ask what happens to the project if the developer assigned to your account leaves the company. Ask who owns the code and what the handover process looks like. These questions quickly separate engineering-led agencies from design-led agencies that happen to produce websites."
            }
          </p>

          <p>
            {
              "Softplix has built our web development practice on engineering discipline, transparent communication, and long-term partnerships. We maintain comprehensive documentation on every project. We write tests. We use version control properly. We conduct code reviews. We produce handover documentation that enables your internal team to understand, maintain, and extend the codebase independently. We believe a great web development partner makes themselves progressively less necessary over time — not more."
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
    tag: "SaaS / B2B Platform",
    title: "Full-Stack Web Application for HR SaaS",
    desc: "Built a multi-tenant HR management platform from scratch using Next.js, Node.js, and PostgreSQL. Features include employee onboarding workflows, payroll integration, role-based access control, and a real-time reporting dashboard. Delivered in 14 weeks from design kickoff.",
    metrics: [
      "14-week delivery",
      "Multi-tenant architecture",
      "99.9% uptime SLA",
    ],
  },
  {
    tag: "E-commerce / Retail",
    title: "Headless E-commerce Platform for Fashion Brand",
    desc: "Re-platformed a high-traffic fashion retailer from a slow Shopify theme to a custom Next.js headless commerce frontend with Shopify as the backend. Achieved a 2.8x improvement in page load speed and a 38% increase in mobile conversion rate within 90 days of launch.",
    metrics: [
      "2.8x faster page load",
      "38% mobile CVR lift",
      "Lighthouse score 96",
    ],
  },
  {
    tag: "Fintech / Web Portal",
    title: "Investment Dashboard for Wealth Management Firm",
    desc: "Designed and built a secure client-facing investment portfolio dashboard with real-time market data feeds, interactive chart visualisations, document vault, and two-factor authentication. Built to SOC 2 security standards with full audit logging.",
    metrics: ["SOC 2 compliant", "Real-time data feeds", "Full audit trail"],
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Case Studies"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Web Projects We Have Delivered"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Real results for real businesses — from fast-growing startups to established global enterprises."
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
    q: "What does a web development company do?",
    a: "A web development company designs, engineers, and launches websites, web applications, e-commerce platforms, and digital portals. This covers frontend development, backend engineering, database architecture, API development, cloud infrastructure, performance optimisation, and technical SEO. We handle the complete technical delivery from initial architecture to production launch and ongoing maintenance.",
  },
  {
    q: "How much does custom web development cost?",
    a: "Web development costs vary by scope and complexity. A marketing website or landing page typically ranges from $5,000 to $20,000. A full-featured web application with custom backend ranges from $25,000 to $100,000. Enterprise web platforms with complex integrations, multi-tenant architecture, and compliance requirements range higher. We provide fixed-price quotes after a free discovery session.",
  },
  {
    q: "How long does it take to build a web application?",
    a: "A production-ready web application MVP typically takes 4 to 10 weeks from design kickoff to launch. A full-featured platform with complex backend integrations typically takes 3 to 6 months. We use agile sprints with bi-weekly demos so you see real progress and can provide feedback throughout — not just at the end.",
  },
  {
    q: "What technologies does Softplix use for web development?",
    a: "Our primary stack is Next.js, React, Node.js, PostgreSQL, and Tailwind CSS deployed on Vercel or AWS. We also build with Laravel, Django, and Ruby on Rails for specific use cases, and integrate with headless CMS platforms including Sanity, Contentful, and Strapi. We always recommend the stack that best fits your requirements — not the one we happen to prefer.",
  },
  {
    q: "Do you build websites or full web applications?",
    a: "Both. We build marketing websites, landing pages, blog platforms, and content sites as well as complex full-stack web applications with custom backends, user authentication, databases, real-time features, and third-party integrations. Every project uses the same engineering rigour regardless of size.",
  },
  {
    q: "Is SEO included in your web development service?",
    a: "Yes. Technical SEO is built into every project by default — server-side rendering, semantic HTML, metadata implementation, canonical URLs, sitemap generation, structured data markup, and Core Web Vitals optimisation. We do not treat SEO as a separate add-on because technical SEO decisions are architectural and must be made at the build stage.",
  },
  {
    q: "Who owns the website and code after you build it?",
    a: "You do. Full intellectual property ownership transfers to you upon final payment — including all source code, design assets, database schemas, and documentation. We sign NDAs before kickoff and structure every engagement as a work-for-hire agreement with no ongoing licensing dependencies.",
  },
  {
    q: "Do you offer website maintenance after launch?",
    a: "Yes. We offer structured maintenance retainers covering security updates, dependency upgrades, bug fixes, performance monitoring, and ongoing feature development. We strongly recommend a maintenance plan for any production web application — the cost of a month of neglected dependencies is significantly higher than a monthly retainer.",
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
            {"Frequently Asked Questions About Web Development"}
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
          {"Build Your Web Product With Expert Developers"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 120+ companies that chose Softplix to ship fast, scalable, SEO-ready web applications. Your free consultation is one click away."
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
              text: "120+ projects delivered",
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
      "Softplix is a leading web development company building high-performance websites, web applications, and e-commerce platforms for startups and enterprises worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: [
        "Custom Web Application Development",
        "E-commerce Development",
        "CMS & Website Development",
        "Progressive Web Apps",
        "API & Backend Development",
        "Web Performance & SEO Engineering",
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

export default function WebDevelopmentCompanyPage() {
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
