import Link from "next/link";
import { EMAIL_S, WHATSAPP } from "@/lib/constants";
import {
  FaBrain,
  FaCode,
  FaRobot,
  FaMicrochip,
  FaGears,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaChartLine,
  FaShieldHalved,
  FaBolt,
  FaTag,
  FaUsers,
  FaGlobe,
  FaRocket,
  FaLandmark,
  FaHeartPulse,
  FaCartShopping,
  FaCubes,
  FaTruck,
  FaStar,
  FaCircleCheck,
  FaClockRotateLeft,
  FaLock,
  FaHeadset,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "AI Development Company | Custom AI Software Development | Softplix",
  description:
    "Softplix is a leading AI development company helping startups and enterprises build AI powered applications, AI agents, and machine learning solutions.",
  keywords:
    "ai development company, custom ai development services, enterprise ai development company, ai software development company, ai application development services",
  alternates: { canonical: "https://softplix.com/ai-development-company" },
  openGraph: {
    title: "AI Development Company | Custom AI Software Development | Softplix",
    description:
      "Softplix is a leading AI development company helping startups and enterprises build AI powered applications, AI agents, and machine learning solutions.",
    type: "website",
    url: "https://softplix.com/ai-development-company",
  },
};

// ─── Shared CTA Buttons ────────────────────────────────────────────────────────

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
        <Badge>{"#1 AI Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"AI Development Company for"}
          <br />
          <span className="text-indigo-400">{"Startups and Enterprises"}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds production-grade AI applications, machine learning systems, autonomous AI agents, and generative AI products. We turn your AI vision into a scalable competitive advantage — fast."
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
      value: "50+",
      label: "Projects Delivered",
    },
    {
      icon: <FaBrain className="text-indigo-600 text-2xl" />,
      value: "15+",
      label: "AI Engineers",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-2xl" />,
      value: "20+",
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
    icon: <FaBrain />,
    title: "AI Application Development",
    desc: "End-to-end AI-powered applications tailored to your workflows — from natural language interfaces to computer vision tools. Production-grade, scalable, built for real-world performance.",
  },
  {
    icon: <FaCode />,
    title: "Machine Learning Solutions",
    desc: "Custom ML models for predictive analytics, classification, anomaly detection, and forecasting. We handle data pipelines, fine-tuning, model evaluation, and MLOps infrastructure.",
  },
  {
    icon: <FaRobot />,
    title: "AI Agent Development",
    desc: "Autonomous agents that execute multi-step tasks, use tools, browse the web, and coordinate complex workflows. Built with LangGraph, AutoGen, and CrewAI for production-ready autonomy.",
  },
  {
    icon: <FaMicrochip />,
    title: "Generative AI Applications",
    desc: "LLM-powered chatbots, AI copilots, content pipelines, and image generation systems using GPT-4o, Claude, Gemini, Llama 3, and fine-tuned open-source models.",
  },
  {
    icon: <FaGears />,
    title: "AI Automation Systems",
    desc: "Intelligent automation that eliminates repetitive workflows — document processing, email triage, data extraction, customer support, and back-office tasks at scale.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Custom AI Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"AI Software Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Full-stack AI development from concept to deployment — delivered by specialists with deep ML and engineering expertise."
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
                {"Get a free AI solution roadmap for your project"}
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
    desc: "We audit your business goals, data assets, and tech stack to map the highest-value AI opportunities.",
  },
  {
    num: "02",
    title: "AI Strategy",
    desc: "Concrete AI roadmap: models, data needs, expected ROI, architecture decisions, and project timeline.",
  },
  {
    num: "03",
    title: "Model Development",
    desc: "Build, train, and fine-tune models on your data — optimising for accuracy, latency, and cost.",
  },
  {
    num: "04",
    title: "Integration",
    desc: "AI capabilities embedded into your product via clean APIs, SDKs, or native components with full docs.",
  },
  {
    num: "05",
    title: "Deployment & Scale",
    desc: "Cloud deployment, CI/CD pipelines, monitoring dashboards, and ongoing model maintenance.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our AI Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A structured, battle-tested process that ships AI products faster — without cutting corners on quality."
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
    desc: "Fraud detection, credit scoring, robo-advisors, regulatory compliance automation, and algorithmic trading systems.",
  },
  {
    icon: <FaHeartPulse />,
    name: "Healthcare",
    desc: "Diagnostic AI, patient record analysis, clinical documentation automation, and drug discovery pipelines.",
  },
  {
    icon: <FaCartShopping />,
    name: "E-commerce",
    desc: "Recommendation engines, dynamic pricing, inventory forecasting, visual search, and personalised experiences.",
  },
  {
    icon: <FaCubes />,
    name: "SaaS Startups",
    desc: "Embedded AI features, intelligent copilots, smart onboarding flows, usage analytics, and churn prediction.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Route optimisation, demand forecasting, warehouse automation, ETA prediction, and fleet management AI.",
  },
  {
    icon: <FaShieldHalved />,
    name: "Legal & Compliance",
    desc: "Contract analysis, document review automation, regulatory monitoring, and AI-powered legal research tools.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"AI Solutions Across Every Industry"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Delivered AI solutions across highly regulated, data-intensive, and fast-moving sectors globally."
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
    title: "Experienced AI Engineers",
    body: "ML researchers, LLM specialists, and full-stack engineers who have shipped AI at scale — not generalists learning on your budget.",
  },
  {
    icon: <FaCubes />,
    title: "Scalable Architecture",
    body: "Designed for growth from day one. 100 to 10 million requests — our infrastructure scales without expensive rewrites.",
  },
  {
    icon: <FaBolt />,
    title: "Fast MVP Development",
    body: "Focused sprints that deliver working AI prototypes in weeks — validate faster, iterate smarter, beat competitors to market.",
  },
  {
    icon: <FaTag />,
    title: "Startup-Friendly Pricing",
    body: "Transparent milestone-based pricing. Fixed-price projects, dedicated teams, and hourly retainers — whatever fits your stage.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "Everything we build belongs to you — source code, model weights, training pipelines, and documentation. Day one.",
  },
  {
    icon: <FaChartLine />,
    title: "Ongoing Support & MLOps",
    body: "AI models drift as data changes. Long-term monitoring, retraining, and MLOps services to keep systems accurate and reliable.",
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
              {"Why Choose Softplix as Your AI Development Partner"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have helped dozens of companies move from AI experimentation to production. Here is what sets us apart from a typical software agency or AI consultancy."
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
          {"What Is an AI Development Company — And Why Does It Matter?"}
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "An AI development company is a specialised technology partner that designs, engineers, and deploys artificial intelligence solutions for businesses across industries. Unlike a traditional software agency, an AI company brings domain expertise in machine learning, natural language processing, computer vision, and data engineering — disciplines that require a fundamentally different skill set, toolchain, and development methodology. When you work with an AI development company like Softplix, you gain access to a team that understands both the engineering complexity and the business strategy behind AI adoption."
            }
          </p>

          <p>
            {
              "We do not simply implement technology. We help you identify which problems are genuinely worth solving with AI, which approaches will deliver the strongest ROI, and how to build systems that remain accurate and reliable as your data and user base grows. This combination of strategic clarity and engineering depth is what separates a true AI development partner from a vendor who installs a generic chatbot and disappears."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Real Business Benefits of Custom AI Development"}
          </h3>

          <p>
            {
              "The competitive advantage of AI is no longer theoretical. Businesses that have invested in custom AI development services consistently report dramatic improvements across three dimensions — operational efficiency, revenue growth, and customer experience. Companies that deploy AI at scale outperform their peers in profitability by three to five times over a five-year horizon, according to multiple global research studies. These are not marginal gains. They represent structural shifts in how businesses operate and compete globally."
            }
          </p>

          <p>
            {
              "For operations, AI automation eliminates forty to seventy percent of manual processing time across finance, HR, customer support, and logistics functions. For revenue, AI-powered personalisation and recommendation systems typically lift conversion rates by fifteen to thirty-five percent. For customer experience, intelligent AI agents and chatbots handle eighty percent of routine enquiries with satisfaction scores that match or exceed human agents — while operating around the clock at a fraction of the cost."
            }
          </p>

          <p>
            {
              "But these results do not emerge from off-the-shelf tools. Generic AI SaaS products are designed for the average use case, which means they are excellent at none of them. Custom AI application development means building systems trained on your proprietary data, optimised for your specific workflows, and integrated into your existing product stack — that is where transformational ROI lives. It is also where a durable competitive moat is built that compounds over time."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How Modern Companies Are Using AI Automation"}
          </h3>

          <p>
            {
              "AI automation has moved far beyond simple rule-based bots. Today's intelligent automation systems use large language models, computer vision, and predictive machine learning to handle genuinely complex tasks that previously required skilled human attention. The range of automation use cases that are now commercially viable and cost-effective is enormous — and it is expanding rapidly as model capabilities improve and inference costs continue to fall."
            }
          </p>

          <p>
            {
              "Intelligent document processing is one of the most impactful applications. Companies processing thousands of invoices, contracts, medical records, or insurance claims per day use AI to extract structured data, classify documents, validate information, and trigger downstream workflows with ninety-five to ninety-nine percent accuracy — replacing processes that once required large manual teams. Modern AI document intelligence systems process documents in seconds rather than days, compressing cycle times and eliminating costly human error at scale."
            }
          </p>

          <p>
            {
              "AI-powered customer support has matured dramatically. Beyond simple FAQ bots, enterprise-grade AI support systems handle complex multi-turn conversations, access customer account data in real time, execute transactions, process refunds, update records, and seamlessly hand off to human agents when needed. Major companies have publicly reported saving hundreds of millions of dollars annually through intelligent support automation, while simultaneously improving customer satisfaction scores."
            }
          </p>

          <p>
            {
              "Predictive analytics and demand forecasting represent another high-value category. E-commerce businesses use AI to forecast demand at the individual SKU level weeks in advance, dramatically reducing both overstock and stockout costs. Financial institutions use ML models to predict customer churn, credit default, and fraud with far greater accuracy than traditional statistical methods. Healthcare organisations use AI to predict readmission risk, bed occupancy, and staffing needs — improving patient outcomes and resource utilisation simultaneously."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Why Startups Choose Custom AI Solutions Over Generic Tools"}
          </h3>

          <p>
            {
              "Early-stage and growth-stage startups face a unique AI dilemma. They cannot afford to waste time and capital, but they also cannot afford to build on the wrong foundation. Off-the-shelf AI SaaS products appear attractive because of their low upfront cost — but they carry significant hidden costs that compound at scale: per-seat or per-API-call pricing that erodes margins, severe customisation limitations that force product compromises, vendor lock-in that removes negotiating power, and data privacy constraints that block compliance in regulated markets."
            }
          </p>

          <p>
            {
              "Startups that invest in custom AI development gain a durable competitive moat. When your AI system is trained on your proprietary data and optimised for your specific user journeys, it becomes increasingly difficult for competitors to replicate — even if they access the same underlying foundation models. The data flywheel effect means your AI grows smarter and more valuable as your user base expands, compounding your advantage continuously. This is fundamentally different from using a commodity SaaS tool that every competitor can access on identical terms."
            }
          </p>

          <p>
            {
              "Softplix specialises in startup-friendly AI development with fast MVP timelines, milestone-based contracts, and lean architectures built to evolve as your product-market understanding deepens. We have seen too many startups burn runway on AI projects that were over-engineered from the start. Our approach is to build the simplest system that delivers measurable value, validate it with real users, and scale it once the core behaviour is proven."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Enterprise AI Development: What Large Organisations Need"}
          </h3>

          <p>
            {
              "For enterprises, the AI challenge is structurally different from what startups face. The technology is rarely the limiting factor — organisational readiness, data quality at scale, legacy system integration, and governance frameworks are the real bottlenecks. An experienced enterprise AI development company brings not just engineering capability but change management expertise, compliance knowledge, and enterprise integration experience that generic agencies lack entirely."
            }
          </p>

          <p>
            {
              "Enterprise AI projects require robust MLOps infrastructure to manage model versioning, A/B testing, drift detection, performance monitoring, and compliance auditing. They require integration with legacy systems that were never designed for AI — ERPs, CRMs, proprietary databases, and multi-decade-old data warehouses. They require explainability and full audit trails to satisfy regulatory and legal requirements in banking, healthcare, insurance, and government. And they require multi-team usage with role-based access controls, SSO, and enterprise-grade security standards."
            }
          </p>

          <p>
            {
              "Softplix has delivered AI solutions for enterprise clients in financial services, healthcare, and logistics — all highly regulated, high-stakes environments where system reliability, data security, and compliance are non-negotiable. We bring enterprise-grade rigour to every engagement regardless of company size, because we believe production AI should be held to production standards from the very first line of code."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"AI Development Trends Shaping the Industry in 2025 and Beyond"}
          </h3>

          <p>
            {
              "The AI landscape is evolving faster than at any prior point in technology history. Large language models have moved from research curiosities to mission-critical production infrastructure in under three years. Multimodal AI — systems that reason simultaneously across text, images, audio, code, and video — is now commercially available and being embedded in enterprise workflows at an accelerating pace. The cost of inference has fallen by two to three orders of magnitude since 2022, making AI economically viable for use cases that were prohibitively expensive just eighteen months ago."
            }
          </p>

          <p>
            {
              "The most significant architectural shift reshaping AI development is the rise of autonomous AI agents. Where 2023 was the year of AI assistants that answered questions, 2024 and 2025 belong to AI agents that complete entire projects. Autonomous agents can plan multi-step tasks, use external tools and APIs, browse the internet, write and execute code, manage files, coordinate with other agents in hierarchical teams, and self-correct when they encounter obstacles. Businesses deploying AI agents are automating entire job functions — not just individual tasks — for the first time in history."
            }
          </p>

          <p>
            {
              "Retrieval-Augmented Generation, universally known as RAG, has become the standard architecture for enterprise AI applications that need to reason over large, frequently updated internal knowledge bases. Vector databases, embedding models, hybrid search, and advanced RAG pipelines are now core infrastructure for any serious AI deployment. Fine-tuning open-source foundation models on proprietary data — using models like Llama 3, Mistral, Qwen, and Phi — has become cost-effective and accessible, enabling businesses to create AI systems with deep domain expertise while retaining full data sovereignty."
            }
          </p>

          <p>
            {
              "At Softplix, we track these developments not to chase hype but to ensure our clients systems are built on architectures that remain relevant and cost-effective as the technology continues its rapid evolution. Every AI system we build is designed with future capability upgrades in mind — so you benefit from advances in foundation model capabilities without needing a full expensive rebuild every eighteen months."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right AI Development Company"}
          </h3>

          <p>
            {
              "The proliferation of so-called AI agencies following the generative AI boom means many providers are offering AI services without the foundational expertise required to deliver robust, production-grade systems. When evaluating an AI development partner, look beyond polished sales decks and ask for demonstrated evidence of production deployments with measurable outcomes, a clear and honest methodology for data strategy and model evaluation, transparent communication about limitations and failure risks, and a track record of long-term client partnerships rather than one-off projects that go silent after launch."
            }
          </p>

          <p>
            {
              "Ask potential partners to walk you through a retrospective on a project that did not go as planned. How they answer that question reveals everything about their technical maturity, their honesty culture, and whether they are the kind of team you want accountable for a mission-critical AI system. The best AI development companies earn trust through candour — not by promising certainty in a field that is, by nature, probabilistic and continuously evolving."
            }
          </p>

          <p>
            {
              "Softplix has built its reputation on technical excellence and commercial honesty. We will tell you when AI is not the right tool for your problem. We will flag data quality issues before they become expensive failures. We will be there for the long term — because we know that AI systems require ongoing care, monitoring, and evolution to deliver lasting value as the world around them changes."
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
    tag: "SaaS / Customer Success",
    title: "AI Chatbot Platform for B2B SaaS",
    desc: "Built a multi-tenant AI customer support platform handling 85% of tier-1 support tickets autonomously. Integrated with Zendesk and Salesforce, reducing support costs by 62% while cutting average first-response time from 4 hours to under 30 seconds.",
    metrics: [
      "85% ticket deflection",
      "62% cost reduction",
      "30s response time",
    ],
  },
  {
    tag: "E-commerce / Personalisation",
    title: "AI Recommendation Engine for Online Retail",
    desc: "Developed a real-time product recommendation system trained on 3 years of purchase history and behavioural data. The hybrid collaborative filtering model delivered a 34% uplift in average order value and 28% improvement in customer retention over 6 months.",
    metrics: ["34% AOV increase", "28% better retention", "<80ms latency"],
  },
  {
    tag: "Fintech / Operations",
    title: "AI Document Automation for Financial Services",
    desc: "Built an AI document intelligence system extracting, classifying, and routing financial documents with 97.4% accuracy. Replaced a 12-person manual review team and reduced processing time from 3 days to under 4 hours per batch.",
    metrics: ["97.4% accuracy", "90% time reduction", "$1.2M annual savings"],
  },
];

function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Case Studies"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"AI Projects We Have Delivered"}
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
    q: "What does an AI development company do?",
    a: "An AI development company designs, builds, and deploys artificial intelligence systems for businesses. This includes machine learning models, NLP applications, AI agents, computer vision systems, and intelligent automation workflows. We handle everything from data strategy and model training to API integration and production deployment.",
  },
  {
    q: "How much does custom AI development cost?",
    a: "AI development costs vary by scope. A focused AI feature such as a chatbot or document classifier typically ranges from $15,000 to $50,000. A full AI application ranges from $50,000 to $200,000. Enterprise AI platforms with custom ML models and complex integrations range higher. We provide fixed-price quotes after a free discovery session.",
  },
  {
    q: "How long does it take to build an AI software application?",
    a: "A working AI MVP typically takes 6 to 12 weeks from kickoff to deployment. A production-ready AI application with enterprise integrations typically takes 3 to 6 months. We use agile sprints with deliverables every two weeks so you see real progress throughout the engagement.",
  },
  {
    q: "What industries use AI development most?",
    a: "AI development is most mature in fintech, healthcare, e-commerce, SaaS, and logistics. However, virtually every industry now has compelling AI use cases — from legal tech and education to agriculture, manufacturing, and government services worldwide.",
  },
  {
    q: "What is the difference between AI development and regular software development?",
    a: "Traditional software follows deterministic logic. AI systems learn patterns from data and make probabilistic predictions. This requires different tools, different expertise such as data scientists and ML engineers, different testing methodologies, and ongoing maintenance to manage model drift as real-world data changes over time.",
  },
  {
    q: "Do you work with startups or only enterprise clients?",
    a: "We work with both. For startups, we offer milestone-based contracts, fast MVP timelines, and lean architectures. For enterprises, we provide governance frameworks, MLOps infrastructure, and complex integration capabilities. Our engagement models are designed to fit different growth stages.",
  },
  {
    q: "Who owns the AI models and code you build?",
    a: "You do. Full intellectual property ownership transfers to you upon final payment — including source code, trained model weights, training pipelines, and all documentation. We sign NDAs before kickoff and structure all work as work-for-hire agreements.",
  },
  {
    q: "What AI technologies does Softplix work with?",
    a: "We work across the full AI stack. For LLMs: GPT-4o, Claude, Gemini, Llama 3, and Mistral. For ML: PyTorch, TensorFlow, scikit-learn, and XGBoost. For AI agents: LangChain, LangGraph, AutoGen, and CrewAI. For MLOps: MLflow and Weights and Biases. For cloud: AWS, GCP, and Azure.",
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
            {"Frequently Asked Questions About AI Development"}
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
          {"Build Your AI Product With Expert Developers"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 50+ companies that chose Softplix to turn their AI ideas into production-grade software. Your free consultation is one click away."
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
              text: "50+ projects delivered",
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
      "Softplix is a leading AI development company helping startups and enterprises build AI-powered applications, AI agents, and machine learning solutions.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Development Services",
      itemListElement: [
        "AI Application Development",
        "Machine Learning Solutions",
        "AI Agent Development",
        "Generative AI Applications",
        "AI Automation Systems",
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

export default function AIDevelopmentCompanyPage() {
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
