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
  FaDatabase,
  FaGears,
  FaServer,
  FaLayerGroup,
  FaCloudArrowUp,
  FaFlask,
  FaDisplay,
  FaListCheck,
  FaPenRuler,
  FaHandshake,
  FaBullseye,
  FaPersonRunning,
  FaLandmark,
  FaHeartPulse,
  FaCubes,
  FaTruck,
  FaGraduationCap,
  FaBuilding,
  FaCartShopping,
  FaMobileScreen,
  FaNetworkWired,
  FaPlugCircleCheck,
  FaArrowsRotate,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Custom Software Development Company | Bespoke Software Solutions | Softplix",
  description:
    "Softplix is a leading custom software development company building bespoke web applications, enterprise platforms, and scalable software solutions for startups and enterprises worldwide.",
  keywords:
    "custom software development company, bespoke software development, custom software development services, enterprise software development company, custom application development",
  alternates: { canonical: "https://softplix.com/custom-software-development" },
  openGraph: {
    title:
      "Custom Software Development Company | Bespoke Software Solutions | Softplix",
    description:
      "Softplix is a leading custom software development company building bespoke web applications, enterprise platforms, and scalable software solutions for startups and enterprises worldwide.",
    type: "website",
    url: "https://softplix.com/custom-software-development",
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
        <Badge>{"#1 Custom Software Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"Custom Software Development"}
          <br />
          <span className="text-indigo-400">
            {"Built Exactly for Your Business"}
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds bespoke software solutions — web applications, enterprise platforms, SaaS products, and internal tools — engineered precisely for your workflows, your data, and your users. No off-the-shelf compromises. Just software that works exactly as your business needs it to."
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
      value: "150+",
      label: "Projects Delivered",
    },
    {
      icon: <FaCode className="text-indigo-600 text-2xl" />,
      value: "25+",
      label: "Software Engineers",
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
    desc: "Bespoke full-stack web applications engineered precisely for your business processes — from complex internal tools and customer portals to data-intensive SaaS platforms and multi-tenant enterprise systems.",
  },
  {
    icon: <FaMobileScreen />,
    title: "Custom Mobile App Development",
    desc: "Purpose-built iOS and Android applications that match your exact workflow requirements. Cross-platform React Native or Flutter for cost efficiency, or native Swift and Kotlin where platform performance demands it.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Enterprise Software Development",
    desc: "Large-scale enterprise platforms with complex integrations, role-based access control, multi-tenant architecture, audit logging, compliance frameworks, and the governance structures large organisations require.",
  },
  {
    icon: <FaNetworkWired />,
    title: "API & System Integration",
    desc: "Custom integration layers connecting legacy systems, third-party platforms, and modern APIs into a unified, reliable data infrastructure. ERP, CRM, payment gateways, and proprietary systems — all connected cleanly.",
  },
  {
    icon: <FaCloudArrowUp />,
    title: "Cloud & DevOps Engineering",
    desc: "Cloud-native architecture on AWS, GCP, and Azure. Infrastructure as code, CI/CD pipelines, containerisation, auto-scaling, monitoring, and the DevOps culture that keeps custom software healthy at scale.",
  },
  {
    icon: <FaArrowsRotate />,
    title: "Legacy Software Modernisation",
    desc: "Systematic migration of outdated systems to modern, maintainable architectures. We assess, re-architect, and rebuild legacy software — preserving business logic while eliminating the technical debt that limits growth.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Custom Software Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Bespoke Software Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Full-spectrum custom software delivery — from initial architecture through to production deployment and long-term maintenance."
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
                {"Get a free custom software roadmap for your project"}
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
    desc: "We map your business processes, user needs, technical constraints, and integration requirements to define the optimal software architecture and delivery scope.",
  },
  {
    num: "02",
    title: "Architecture",
    desc: "System design, data modelling, API contracts, technology selection, and a detailed technical specification reviewed and agreed before development begins.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile two-week sprints with live demos every fortnight. Working software in your hands continuously — not a black box that opens six months later.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Automated test suites, integration testing, security review, performance benchmarking, and user acceptance testing before every production release.",
  },
  {
    num: "05",
    title: "Deploy & Support",
    desc: "Production deployment, CI/CD pipelines, monitoring infrastructure, documentation handover, and structured long-term support and maintenance retainers.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our Custom Software Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A structured, transparent process that delivers complex custom software on time — without surprises, scope creep, or the hidden costs that plague most bespoke development projects."
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
    desc: "Custom trading platforms, lending engines, payment processing systems, regulatory reporting tools, and compliance-grade financial software.",
  },
  {
    icon: <FaHeartPulse />,
    name: "Healthcare",
    desc: "HIPAA-compliant patient management systems, clinical workflow automation, interoperability middleware, and healthcare analytics platforms.",
  },
  {
    icon: <FaCartShopping />,
    name: "E-commerce",
    desc: "Custom order management systems, inventory platforms, marketplace engines, and headless commerce backends that outperform any off-the-shelf alternative.",
  },
  {
    icon: <FaCubes />,
    name: "SaaS",
    desc: "Multi-tenant SaaS platforms built from the ground up — billing, onboarding, usage metering, admin panels, and the full infrastructure of a scalable software business.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Custom TMS and WMS systems, route optimisation engines, real-time tracking platforms, and supply chain visibility tools purpose-built for your operation.",
  },
  {
    icon: <FaBuilding />,
    name: "Enterprise",
    desc: "Internal tools, process automation, ERP integrations, reporting dashboards, and custom business applications that replace expensive off-the-shelf software with software that actually fits.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Custom Software Development Across Every Industry"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "We have delivered bespoke software across highly regulated, data-intensive, and operationally complex sectors for clients on six continents."
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
    title: "Senior Engineering Team",
    body: "Our team is composed of senior engineers across frontend, backend, cloud, and data — not generalists learning on your project. Every engagement gets the depth of expertise the problem deserves.",
  },
  {
    icon: <FaCubes />,
    title: "Scalable Architecture",
    body: "Custom software designed to grow with your business. From 100 to 10 million users — we make the architectural decisions at the start that prevent the expensive rewrites later.",
  },
  {
    icon: <FaBolt />,
    title: "Agile Delivery",
    body: "Two-week sprints, live demos every fortnight, and working software in your hands throughout. No black-box development cycles that end with a surprise that does not match expectations.",
  },
  {
    icon: <FaTag />,
    title: "Transparent Pricing",
    body: "Fixed-price milestone contracts, dedicated team engagements, and sprint retainers — all with full cost transparency. No hourly billing surprises and no hidden scope change fees.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "All source code, documentation, and architecture decisions are yours from day one. NDAs signed before kickoff, work-for-hire structure, zero licensing dependencies on Softplix.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Partnership",
    body: "Custom software requires ongoing care. We offer structured maintenance retainers, dedicated team models, and the long-term engineering partnership that keeps your software competitive over time.",
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
              {"Why Choose Softplix for Custom Software Development"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have shipped custom software for startups, scale-ups, and enterprises across every major vertical. Here is what separates us from every other agency that claims to build bespoke software."
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
          {
            "What Is Custom Software Development — And When Does Your Business Need It?"
          }
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "Custom software development is the process of designing, engineering, and deploying software built specifically for a single organisation's unique processes, workflows, and business requirements. Unlike off-the-shelf software — which is built to serve the broadest possible market and therefore serves no single customer perfectly — custom software is engineered from the ground up to match exactly how your business operates, what your users need, and how your data is structured. The result is software that fits like a tailored suit rather than an average-sized jacket."
            }
          </p>

          <p>
            {
              "The decision to invest in custom software development is one of the most strategically significant technology decisions a business can make. Done correctly, custom software becomes a durable competitive advantage — a system that embeds your institutional knowledge, automates your highest-value workflows, and becomes progressively more difficult for competitors to replicate as your data and usage compound. Done incorrectly, it becomes an expensive lesson in the difference between a vendor who promises and a partner who delivers. Choosing the right custom software development company is therefore not merely a procurement decision — it is a strategic one."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Custom Software vs Off-the-Shelf: The Real Trade-offs"}
          </h3>

          <p>
            {
              "Off-the-shelf software has genuine advantages: low upfront cost, immediate availability, and no development risk. For standard business functions that are genuinely commoditised — email, basic accounting, file storage, video conferencing — off-the-shelf software is almost always the right choice. The workflows these tools support are the same across every business of every size in every industry. There is no competitive advantage to be gained from building a custom email client."
            }
          </p>

          <p>
            {
              "But the moment your business processes diverge meaningfully from the average — and most businesses with genuine competitive differentiation do diverge — off-the-shelf software begins to extract a compounding tax. You adapt your workflows to fit the software rather than the reverse. You pay for features you do not need and lack features you do. You manage integrations between multiple platforms that were never designed to work together, creating data silos and manual reconciliation work. You accept per-seat pricing that scales against you as you grow. And you accept data governance terms set by vendors whose interests are not aligned with yours."
            }
          </p>

          <p>
            {
              "Custom software eliminates all of these taxes simultaneously. It does exactly what your business needs, nothing more and nothing less. It owns none of your data. It scales at the marginal cost of infrastructure, not per-seat licensing. And it can be extended in any direction your business evolves, at any point, by any engineer who can read the codebase — not just the original vendor. Over a three-to-five year horizon, the economics of custom software development are compelling for any business with genuinely differentiated workflows and the scale to justify the investment."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Business Case for Custom Software: Where the ROI Lives"}
          </h3>

          <p>
            {
              "The return on investment from custom software development manifests through several distinct mechanisms, and understanding which applies to your situation is essential for building a compelling business case. The most common ROI driver is operational efficiency — replacing manual, error-prone processes with automated, reliable software that completes the same work faster, with fewer errors, and without the headcount required to perform it manually. Companies that process large volumes of transactions, documents, applications, or service requests consistently find that custom automation pays for itself within twelve to eighteen months of deployment."
            }
          </p>

          <p>
            {
              "The second major ROI mechanism is revenue enablement. Custom software can unlock business models, pricing strategies, and product capabilities that off-the-shelf tools structurally cannot support. A marketplace that needs custom matching logic. A SaaS product that needs proprietary metering and billing. A financial services company that needs custom risk scoring. A logistics business that needs custom route optimisation. In each of these cases, the custom software is not a cost centre — it is a direct revenue driver, and its value is measured not in cost savings but in the revenue it enables that would otherwise be inaccessible."
            }
          </p>

          <p>
            {
              "The third ROI mechanism is competitive moat. Custom software built around your proprietary data, institutional knowledge, and workflow expertise creates capabilities that competitors cannot simply purchase and deploy. As your software accumulates usage, it accumulates data. As it accumulates data, it improves. As it improves, it widens the gap between your operational capability and your competitors'. This flywheel effect is why the largest and most profitable companies in almost every industry are also the most sophisticated builders of custom internal software — the software is the moat."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Custom Software Development for Startups: Building the Technical Foundation"
            }
          </h3>

          <p>
            {
              "For startups, the custom software decision is both more urgent and more consequential than for established businesses. The product IS the business. Every technical decision made in the first months of a startup's life shapes what is possible — and what is expensive — for the next three to five years. The choice of technology stack, database architecture, API design, and deployment infrastructure all compound rapidly, meaning early decisions made under time pressure without adequate technical judgment have a disproportionate long-term impact on engineering velocity, hiring, scalability, and fundraising."
            }
          </p>

          <p>
            {
              "The most important thing a startup founder can do when commissioning custom software is choose a development partner who will be honest with them about scope. The natural founder instinct is to build the full vision — every feature, every integration, every edge case handled. This instinct, when acted upon prematurely, is the single biggest cause of startup software projects that go over budget, miss launch windows, and arrive in the market too late to test the hypothesis that motivated them. An honest custom software development partner will tell you what to defer, what to simplify, and what is genuinely necessary for the first version to deliver value and generate feedback."
            }
          </p>

          <p>
            {
              "Softplix has built custom software for startups at every stage — from pre-revenue founders building their first product to Series B companies rebuilding the technical foundation they outgrew. Across all of these engagements, the pattern is consistent: the startups that succeed technically are the ones that invest in architecture discipline early, scope tightly for each phase of the product, and treat their development partner as a strategic collaborator rather than an order-taker. We are structured to play that collaborative role — and we will tell you what we think, not just what you want to hear."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Enterprise Custom Software Development: Complexity, Compliance, and Change Management"
            }
          </h3>

          <p>
            {
              "Enterprise custom software development is a fundamentally different undertaking from startup software delivery. The technical complexity is higher — deeper integrations, more complex data models, stricter performance and reliability requirements. The organisational complexity is higher — more stakeholders, longer approval cycles, change management requirements, and internal politics around technology decisions. And the stakes are higher — enterprise custom software often replaces systems that thousands of employees depend on daily, meaning disruption during transition has direct and measurable business impact."
            }
          </p>

          <p>
            {
              "The most important discipline in enterprise custom software development is requirements management. Enterprises often have complex, partially contradictory requirements that emerge gradually through the discovery process rather than arriving fully formed at the start of an engagement. A development partner who cannot manage this complexity — who takes requirements at face value without questioning, prioritising, and structuring them — will produce software that technically delivers what was specified but fails to solve the underlying business problem. Requirements management is as much a social and political skill as a technical one, and it is one of the core competencies that separates experienced enterprise software companies from those who primarily serve smaller clients."
            }
          </p>

          <p>
            {
              "Security and compliance are non-negotiable in enterprise custom software. Penetration testing, vulnerability assessment, SOC 2 alignment, GDPR data governance, role-based access control, field-level encryption, and comprehensive audit logging are not features to be added after launch — they are architectural requirements that must be addressed in the system design phase. Softplix has delivered custom software to clients in financial services, healthcare, and logistics — all sectors with stringent regulatory requirements — and we bring the compliance knowledge and security discipline that these environments demand as a baseline expectation, not a premium add-on."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Legacy Software Modernisation: The Hidden Priority for Many Enterprises"
            }
          </h3>

          <p>
            {
              "One of the most common and least visible custom software development needs in established organisations is legacy system modernisation. Many enterprises are running critical business operations on software that is ten, fifteen, or twenty years old — built on deprecated technology stacks, maintained by a shrinking pool of engineers who understand the original architecture, and increasingly incapable of integrating with the modern platforms and APIs that the business needs. The cost of maintaining these legacy systems is often invisible in the budget — absorbed into IT operations headcount and the opportunity cost of capabilities the business cannot have — until a critical failure makes the hidden cost suddenly very visible."
            }
          </p>

          <p>
            {
              "The right approach to legacy modernisation depends on the specific system, the organisation's risk tolerance, and the strategic importance of the capabilities being modernised. The strangler fig pattern — gradually replacing legacy functionality with modern components at the edges while keeping the core running — is often preferable to a big bang rewrite that requires running two systems in parallel and switching over at a specific date. Softplix assesses each legacy modernisation engagement individually and recommends the approach that minimises business risk while maximising the speed at which the organisation gains access to modern capabilities."
            }
          </p>

          <p>
            {
              "The economics of legacy modernisation are compelling even when the upfront investment is significant. Legacy systems impose a compounding tax on every subsequent development effort — new features take longer, integrations cost more, engineers spend disproportionate time understanding arcane code rather than building value, and the risk of a critical failure grows every year the system ages without a fundamental architectural refresh. A well-executed modernisation programme eliminates this tax permanently, accelerating everything that follows it."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Technology Stack for Custom Software in 2025"}
          </h3>

          <p>
            {
              "The technology landscape for custom software development in 2025 is richer and more capable than at any prior point in computing history, but navigating it requires judgment rather than enthusiasm. The right technology stack for a custom software project is not the newest or most fashionable — it is the one that best balances development speed, long-term maintainability, performance requirements, security profile, and talent availability for future hires."
            }
          </p>

          <p>
            {
              "For web-based custom software, Next.js and React remain the dominant frontend choices — supported by the largest developer ecosystem in the world, capable of server-side and static rendering for performance, and the default choice of engineering teams at companies from startups to Fortune 500s. For backends, Node.js, Python, and Go each have genuine strengths for different use cases — Node for real-time and API-heavy applications, Python for data-intensive and ML-adjacent workloads, Go for high-throughput services where performance is critical. PostgreSQL remains the default choice for relational data, with Redis for caching and queuing and purpose-built solutions for specific data patterns."
            }
          </p>

          <p>
            {
              "Cloud infrastructure has become the default deployment environment for all custom software — not just for the scalability and reliability it provides, but for the ecosystem of managed services that dramatically reduce the engineering overhead of running production systems. Database backups, CDN distribution, auto-scaling, distributed caching, message queuing, and observability tooling are all available as managed services that a custom software team can consume rather than build and operate. Softplix builds on AWS primarily, with GCP and Azure engagements for clients with existing cloud relationships or specific service requirements."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right Custom Software Development Company"}
          </h3>

          <p>
            {
              "The market for custom software development services is enormous, fragmented, and deeply uneven in quality. Thousands of companies globally offer bespoke software development. The variance in outcomes — from transformative, on-time, on-budget delivery to expensive, delayed, under-specified failures — is as wide as the variance in prices. Making the right choice requires evaluating several dimensions that sales conversations and proposals typically obscure."
            }
          </p>

          <p>
            {
              "The most important signal is the quality and maintainability of the code they have previously shipped — not the quality of their case study writing. Ask to review the actual codebase of a previous project. Ask about test coverage, documentation standards, and code review processes. Ask who specifically will work on your project, and ask to meet those engineers before signing. Ask for references from clients who will tell you about projects that went wrong and how the agency responded — not just the showpiece successes. The agencies that are genuinely confident in their engineering discipline welcome these questions. The ones who deflect or distract should be treated accordingly."
            }
          </p>

          <p>
            {
              "Softplix has built our custom software practice on three principles: engineering discipline, commercial honesty, and long-term commitment to client outcomes. We will tell you when your requirements need more definition before they can be reliably scoped. We will flag architectural risks before they become expensive problems. We will be present and responsive after delivery, because custom software is a living system that requires ongoing care and the relationship that makes that care possible. We measure our success not by contracts signed but by software that is running in production, solving real problems, and still being actively maintained years after the initial engagement concluded."
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
    tag: "Enterprise / Internal Tools",
    title: "Custom ERP Replacement for Manufacturing Group",
    desc: "Replaced a 15-year-old legacy ERP system with a custom Next.js and Node.js platform covering inventory management, production scheduling, procurement, and financial reporting. Reduced manual data entry by 78% and cut monthly reporting time from 3 days to 4 hours.",
    metrics: [
      "78% less manual entry",
      "Reporting: 3 days → 4 hrs",
      "Zero downtime migration",
    ],
  },
  {
    tag: "Fintech / SaaS",
    title: "Custom Lending Platform for Alternative Finance",
    desc: "Built a multi-tenant lending SaaS from scratch — custom credit scoring engine, automated underwriting workflows, loan servicing, borrower portal, and regulatory reporting. Processed £40M in loan applications in the first year of operation.",
    metrics: [
      "£40M loan volume yr 1",
      "Custom credit engine",
      "FCA compliance built-in",
    ],
  },
  {
    tag: "Logistics / Operations",
    title: "Custom TMS for Regional Freight Operator",
    desc: "Designed and built a custom Transport Management System replacing three disconnected spreadsheet-based processes. Features include real-time shipment tracking, automated carrier assignment, POD capture, and customer self-service portal. Reduced operations headcount by 35% while doubling shipment volume.",
    metrics: [
      "35% ops headcount reduction",
      "2x shipment volume",
      "Real-time tracking",
    ],
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Case Studies"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Custom Software We Have Delivered"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Real results for real businesses — measurable operational improvements from bespoke software built exactly for the problem."
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
    q: "What is custom software development?",
    a: "Custom software development is the process of designing and building software specifically for a single organisation's unique requirements — as opposed to off-the-shelf software built for the broadest possible market. Custom software does exactly what your business needs, integrates with your existing systems, owns none of your data, and scales with your business without per-seat licensing costs.",
  },
  {
    q: "How much does custom software development cost?",
    a: "Custom software development costs vary significantly by scope and complexity. A focused internal tool or workflow automation typically ranges from $15,000 to $50,000. A full-featured web application or enterprise platform ranges from $50,000 to $300,000. Complex multi-system enterprise software can range higher. We provide fixed-price quotes after a structured discovery engagement — no open-ended hourly billing.",
  },
  {
    q: "How long does custom software development take?",
    a: "A focused custom application typically takes 8 to 16 weeks from kickoff to production deployment. A larger enterprise system with complex integrations typically takes 4 to 9 months. We work in two-week agile sprints with live demos throughout, so you have working software in your hands continuously — not a finished product that appears six months later.",
  },
  {
    q: "What is the difference between custom software and SaaS?",
    a: "SaaS (Software as a Service) products are built to serve many customers simultaneously and therefore represent a compromise for each individual customer. Custom software is built for one customer and can therefore be an exact fit for that customer's specific processes, data structures, integrations, and user needs. Custom software also means full data ownership, no per-seat pricing at scale, and no vendor lock-in.",
  },
  {
    q: "When does it make sense to choose custom software over off-the-shelf?",
    a: "Custom software is the right choice when your business processes are genuinely differentiated, when off-the-shelf tools require significant workflow compromises, when per-seat licensing costs are becoming material at your scale, when data sovereignty is important, or when you need deep integrations with existing proprietary systems. For standard commoditised functions, off-the-shelf tools are usually the right choice and we will tell you so honestly.",
  },
  {
    q: "What technologies does Softplix use for custom software development?",
    a: "Our primary stack is Next.js, React, Node.js, and PostgreSQL for web applications, deployed on AWS or Vercel. We use Python for data-intensive and ML-adjacent workloads, Go for high-throughput services, and React Native or Flutter for mobile. We always recommend the technology that best fits your specific requirements — not the stack we find most convenient to build in.",
  },
  {
    q: "Who owns the custom software after you build it?",
    a: "You do. Full intellectual property — all source code, database schemas, API specifications, architecture documentation, and deployment configuration — transfers to you upon final payment. We sign NDAs before kickoff and structure every engagement as a work-for-hire agreement with zero ongoing licensing dependencies on Softplix.",
  },
  {
    q: "Do you offer support and maintenance after delivery?",
    a: "Yes. Custom software requires ongoing engineering care — security patches, dependency updates, performance optimisation, and feature development as your business evolves. We offer structured maintenance retainers that keep your software healthy, current, and competitive long after the initial delivery. Many clients continue working with Softplix as their primary engineering partner for years post-launch.",
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
            {"Frequently Asked Questions About Custom Software Development"}
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
          {"Build Software That Fits Your Business Exactly"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 150+ companies that chose Softplix to replace compromises with custom software built precisely for their needs. Your free consultation is one click away."
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
              text: "150+ projects delivered",
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
      "Softplix is a leading custom software development company building bespoke web applications, enterprise platforms, and scalable software solutions for startups and enterprises worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Custom Software Development Services",
      itemListElement: [
        "Custom Web Application Development",
        "Custom Mobile App Development",
        "Enterprise Software Development",
        "API & System Integration",
        "Cloud & DevOps Engineering",
        "Legacy Software Modernisation",
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

export default function CustomSoftwareDevelopmentPage() {
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
