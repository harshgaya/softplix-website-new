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
  FaMobileScreen,
  FaMobileScreenButton,
  FaTabletScreenButton,
  FaApple,
  FaAndroid,
  FaLayerGroup,
  FaGears,
  FaDatabase,
  FaCloudArrowUp,
  FaFlask,
  FaLandmark,
  FaHeartPulse,
  FaCubes,
  FaTruck,
  FaGraduationCap,
  FaBuilding,
  FaCartShopping,
  FaCalendarDays,
  FaBullseye,
  FaPenRuler,
  FaHandshake,
  FaPersonRunning,
  FaMoneyBillWave,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title:
    "Mobile App Development Company | iOS & Android App Development | Softplix",
  description:
    "Softplix is a leading mobile app development company building high-performance iOS, Android, and cross-platform mobile applications for startups and enterprises worldwide.",
  keywords:
    "mobile app development company, ios app development company, android app development company, cross-platform app development, react native app development company",
  alternates: {
    canonical: "https://softplix.com/mobile-app-development-company",
  },
  openGraph: {
    title:
      "Mobile App Development Company | iOS & Android App Development | Softplix",
    description:
      "Softplix is a leading mobile app development company building high-performance iOS, Android, and cross-platform mobile applications for startups and enterprises worldwide.",
    type: "website",
    url: "https://softplix.com/mobile-app-development-company",
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
        <Badge>{"#1 Mobile App Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"Mobile App Development Company"}
          <br />
          <span className="text-indigo-400">
            {"for Startups and Enterprises"}
          </span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds high-performance iOS, Android, and cross-platform mobile applications that users love and businesses scale on. From concept to App Store — fast, production-grade, and built to grow."
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
      value: "100+",
      label: "Apps Delivered",
    },
    {
      icon: <FaMobileScreen className="text-indigo-600 text-2xl" />,
      value: "18+",
      label: "Mobile Engineers",
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
    icon: <FaLayerGroup />,
    title: "Cross-Platform App Development",
    desc: "Ship on iOS and Android simultaneously from a single codebase using React Native or Flutter. Half the cost, half the timeline, and a native-quality experience on every device your users carry.",
  },
  {
    icon: <FaApple />,
    title: "iOS App Development",
    desc: "Native Swift and SwiftUI applications engineered for the Apple ecosystem — iPhone, iPad, Apple Watch, and macOS. Built to App Store standards with the performance and polish that Apple users expect.",
  },
  {
    icon: <FaAndroid />,
    title: "Android App Development",
    desc: "Native Kotlin and Jetpack Compose applications optimised for the full diversity of the Android device landscape. From budget handsets to flagship tablets — tested, tuned, and Google Play ready.",
  },
  {
    icon: <FaFlask />,
    title: "AI-Powered Mobile Apps",
    desc: "Mobile applications with AI built in from the first sprint — on-device ML models, LLM integrations, intelligent personalisation, computer vision, and conversational interfaces that genuinely differentiate your product.",
  },
  {
    icon: <FaDatabase />,
    title: "Mobile Backend Development",
    desc: "Scalable backend APIs, real-time data infrastructure, push notification systems, offline sync, and cloud architecture purpose-built for mobile traffic patterns and the unique demands of mobile user behaviour.",
  },
  {
    icon: <FaGears />,
    title: "App Modernisation & Rebuild",
    desc: "Legacy app rebuilds, performance overhauls, and platform migrations for businesses whose existing mobile product is limiting growth. We assess, remediate, and modernise — or rebuild from scratch where that is the right call.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Mobile App Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"iOS and Android App Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "End-to-end mobile development from UX strategy to App Store launch — delivered by specialists with deep platform, backend, and product expertise."
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
                {"Get a free mobile app roadmap for your project"}
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
    desc: "We audit your business goals, target users, platform requirements, and existing systems to define the optimal mobile architecture and technology choices.",
  },
  {
    num: "02",
    title: "UX & Design",
    desc: "User journey mapping, wireframes, and pixel-perfect UI designed to platform guidelines. Fully approved before development begins — no surprises mid-build.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Two-week sprints with live demo builds every fortnight. Real, installable software — not status updates — throughout the entire development cycle.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Device matrix testing, performance profiling, accessibility audits, security review, and App Store compliance checks before every release.",
  },
  {
    num: "05",
    title: "Launch & Scale",
    desc: "App Store submission, CI/CD pipeline, crash monitoring, analytics integration, and ongoing feature development and maintenance post-launch.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our Mobile App Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A structured, sprint-based process that delivers polished mobile apps on time — without the surprises or scope creep that derails most projects."
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
    desc: "Mobile banking apps, payment wallets, investment platforms, lending tools, and PCI-compliant financial applications for the mobile-first generation.",
  },
  {
    icon: <FaHeartPulse />,
    name: "Healthcare",
    desc: "Telemedicine apps, patient monitoring, appointment scheduling, medication management, and HIPAA-compliant mobile health platforms.",
  },
  {
    icon: <FaCartShopping />,
    name: "E-commerce",
    desc: "Shoppable mobile storefronts, social commerce apps, loyalty programmes, AR try-on features, and one-tap checkout experiences.",
  },
  {
    icon: <FaCubes />,
    name: "SaaS & B2B",
    desc: "Mobile companions for SaaS platforms, field service apps, sales enablement tools, and enterprise productivity applications.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Driver apps, delivery tracking, fleet management, warehouse scanning, and on-demand logistics marketplace applications.",
  },
  {
    icon: <FaGraduationCap />,
    name: "EdTech",
    desc: "Mobile learning platforms, interactive course players, live tutoring apps, and gamified skills assessment applications.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Mobile App Development Across Every Industry"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "We have delivered mobile applications across high-stakes, user-intensive, and regulated sectors for clients on six continents."
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
    title: "Dedicated Mobile Specialists",
    body: "Our team is composed of dedicated iOS, Android, and React Native engineers — not web developers who also do mobile on the side. Depth of platform expertise is the single biggest driver of mobile app quality.",
  },
  {
    icon: <FaCubes />,
    title: "Scalable Architecture",
    body: "Mobile backends designed to handle 100 to 10 million users without expensive rewrites. Offline-first data sync, real-time infrastructure, and push notification systems engineered for scale from day one.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Time to Market",
    body: "Cross-platform development, pre-built component libraries, and battle-tested architecture patterns mean we ship production mobile apps significantly faster than teams building separate native codebases.",
  },
  {
    icon: <FaTag />,
    title: "Startup-Friendly Pricing",
    body: "Fixed-price milestone contracts, dedicated team models, and sprint retainers — structured to fit pre-seed budgets and enterprise procurement requirements alike with full cost transparency.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "All source code, design assets, API specifications, and documentation transfer to you upon final payment. NDAs signed before kickoff, work-for-hire structure on every engagement.",
  },
  {
    icon: <FaHandshake />,
    title: "Long-Term Support",
    body: "App Store algorithms, OS versions, and device form factors change constantly. We offer structured maintenance retainers that keep your app current, performant, and compliant long after launch.",
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
              {"Why Choose Softplix as Your Mobile App Development Partner"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have shipped mobile products from first-sprint prototype to millions of users across dozens of industries. Here is what sets us apart from every other agency that claims to build mobile apps."
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
          {"What Is a Mobile App Development Company — And Why Does It Matter?"}
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "A mobile app development company is a specialised technology partner that designs, engineers, and launches mobile applications for iOS, Android, and cross-platform environments. Unlike a generalist software agency or a web development firm that dabbles in mobile, a dedicated mobile development company brings deep expertise in platform-specific toolchains, App Store optimisation and compliance, mobile UX patterns, offline-first architecture, push notification infrastructure, and the unique performance constraints of mobile devices. The difference between a mobile specialist and a generalist working outside their core competency is immediately visible in the final product — in app launch times, scroll smoothness, battery consumption, and the invisible thousand interactions that determine whether users keep your app or delete it."
            }
          </p>

          <p>
            {
              "Softplix has built mobile applications across every major vertical — fintech, healthtech, e-commerce, logistics, SaaS, and consumer products — and shipped them to the App Store and Google Play for clients ranging from first-time founders to listed enterprises. Every mobile product we build is engineered to the same standard: native-quality performance, App Store compliance from the first build, and a codebase structured to accept the next two years of features without architectural surgery."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Cross-Platform vs Native: Making the Right Choice for Your App"}
          </h3>

          <p>
            {
              "The most consequential technology decision in mobile app development is whether to build natively — separate Swift or Kotlin codebases for iOS and Android — or cross-platform, using a framework like React Native or Flutter that generates native UI components from a single shared codebase. This decision has enormous implications for your development budget, your time to market, your long-term maintenance costs, and the ceiling on what your app can do technically."
            }
          </p>

          <p>
            {
              "For the vast majority of mobile products — including marketplace apps, SaaS companions, consumer apps, delivery platforms, and enterprise tools — cross-platform development with React Native or Flutter delivers native-quality performance at roughly half the cost and timeline of building separate native apps. Modern cross-platform frameworks have eliminated the performance gap that once made native the default for serious products. React Native is used in production by Facebook, Shopify, Airbnb, and Tesla. Flutter powers apps at Google, BMW, and eBay. The technology is proven, mature, and battle-tested at scale."
            }
          </p>

          <p>
            {
              "Native development remains the right choice in specific circumstances: apps that push the absolute performance ceiling of the hardware, apps with deeply complex platform-specific integrations like ARKit or custom Android hardware APIs, and apps where the development team is already native-specialist and the incremental cost of maintaining two codebases is justified by the marginal performance gain. Softplix will tell you honestly which approach is right for your product — not which approach is more profitable for us to build."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "React Native App Development: The Industry Standard for Cross-Platform"
            }
          </h3>

          <p>
            {
              "React Native, developed by Meta and used by some of the largest consumer apps in the world, is the dominant framework for cross-platform mobile development. It renders genuine native UI components — not web views or approximations — which means React Native apps feel and perform like native apps to users who have no idea what framework was used to build them. The development experience is fast, the component ecosystem is enormous, and the talent pool is the largest of any mobile framework, making future hiring significantly easier than with more niche technology choices."
            }
          </p>

          <p>
            {
              "The React Native architecture has been substantially rebuilt in recent years through the New Architecture initiative, replacing the old JavaScript bridge with JSI — a synchronous, lower-latency communication layer between JavaScript and native code. This upgrade dramatically improves performance for complex animations, gesture handling, and real-time interactions, closing the remaining performance gap between React Native and fully native development for all but the most demanding use cases."
            }
          </p>

          <p>
            {
              "Softplix's React Native practice covers the full delivery stack — UI component libraries, custom native modules where needed, deep linking and universal link configuration, push notification infrastructure with APNs and FCM, offline data sync with WatermelonDB or MMKV, CI/CD pipelines with Fastlane, and App Store submission. We have shipped React Native applications that have processed millions of transactions, handled hundreds of thousands of concurrent users, and achieved top chart positions in their respective App Store categories."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Flutter App Development: Google's Cross-Platform Framework"}
          </h3>

          <p>
            {
              "Flutter, Google's open-source cross-platform framework, takes a fundamentally different approach to cross-platform development than React Native. Rather than mapping to native UI components, Flutter renders every pixel of its UI through its own high-performance graphics engine — Skia and the newer Impeller renderer — giving it extraordinary control over visual consistency and animation performance across every platform it targets. Flutter targets iOS, Android, web, macOS, Windows, and Linux from a single codebase, making it the broadest-reach cross-platform framework available today."
            }
          </p>

          <p>
            {
              "Flutter's particular strengths are in applications with complex, custom UI — rich animations, custom drawing, branded design systems that go beyond standard platform UI conventions, and interactive data visualisations. The framework's widget composition model makes building custom interfaces faster and more predictable than either native development or React Native for visually ambitious products. For applications where the interface is itself a core product differentiator, Flutter is often the superior choice."
            }
          </p>

          <p>
            {
              "Softplix has delivered Flutter applications for clients in fintech, healthtech, and consumer products — categories where polished UI and cross-platform reach both matter enormously. Our Flutter engineers are proficient in Dart, BLoC and Riverpod state management, Flutter's animation system, platform channel development for native integrations, and the full Flutter DevTools pipeline for performance profiling and release management."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Mobile App Development for Startups: Speed, Quality, and Capital Efficiency"
            }
          </h3>

          <p>
            {
              "For startups, mobile app development presents a specific set of trade-offs that do not exist in the same form for enterprises. Every week of development consumes runway. Every feature added to the initial scope delays the feedback that determines whether the product hypothesis is correct. Every architectural shortcut taken to ship faster creates technical debt that the next engineer to touch the code will have to pay, usually at a significantly higher rate than the original saving. Managing these trade-offs correctly is what separates the mobile development companies that consistently help startups succeed from the ones that consistently take money and deliver disappointment."
            }
          </p>

          <p>
            {
              "The right approach for startup mobile development is to build the smallest possible app that validates the highest-value hypothesis — and to build it to production standards, not prototype standards. A prototype-grade app cannot be submitted to the App Store without a review rejection. It cannot be shown to investors without signalling poor technical judgment. And it cannot be extended by the next engineer without a rewrite. Production-grade mobile development is not slower than prototype development when you factor in the rework that prototype-grade code always eventually requires."
            }
          </p>

          <p>
            {
              "Softplix has helped dozens of startups ship their first mobile products within four to eight weeks of kickoff — products that have gone on to attract seed and Series A investment, achieve App Store top chart positions, and accumulate hundreds of thousands of users. The consistent thread across all of these outcomes is not luck — it is disciplined scope management, fast decision-making, and mobile engineering that treats the first version as the foundation for everything that follows."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Enterprise Mobile App Development: Governance, Security, and Scale"
            }
          </h3>

          <p>
            {
              "Enterprise mobile development introduces a different class of challenges. Large organisations deploying mobile applications to internal workforces or regulated customer bases need Mobile Device Management compatibility, enterprise SSO integration with identity providers like Okta, Azure AD, and Google Workspace, end-to-end encryption of data at rest and in transit, biometric authentication, remote wipe capability, and detailed audit logging of all user actions. These are not afterthoughts — they are architectural requirements that must be addressed in the design phase, not bolted on after the product is built."
            }
          </p>

          <p>
            {
              "Enterprise mobile apps also face the challenge of integration with legacy backend systems that were never designed for mobile API consumption. SOAP services, mainframe data, ERP systems, and proprietary databases all require adaptation layers that bridge the gap between mobile client expectations and enterprise backend realities. Softplix has deep experience building these integration layers — API gateways, data transformation services, and caching infrastructure that give mobile clients the fast, clean, RESTful interfaces they need without requiring changes to legacy systems that organisations cannot or will not modify."
            }
          </p>

          <p>
            {
              "Accessibility in enterprise mobile applications has moved from nice-to-have to regulatory requirement in many sectors. WCAG 2.1 mobile accessibility standards, iOS VoiceOver support, Android TalkBack compatibility, dynamic type scaling, and sufficient touch target sizing are all compliance requirements for mobile apps in government, healthcare, and financial services. Softplix builds mobile accessibility into every enterprise engagement as a first-class engineering requirement — because retrofitting accessibility onto a production mobile app is dramatically more expensive than building it correctly from the start."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Mobile App Development Trends in 2025 and Beyond"}
          </h3>

          <p>
            {
              "The mobile landscape in 2025 is being reshaped by several converging forces that are changing what users expect from mobile applications and what development teams need to deliver. On-device AI inference has become practically viable for a wide range of tasks — powered by Apple's Core ML, Google's ML Kit, and dedicated neural processing units now standard in flagship devices. Apps that can perform intelligent tasks without round-tripping to a server deliver dramatically better performance and maintain functionality in offline or low-connectivity conditions. The delta between AI-augmented mobile apps and their non-AI equivalents is becoming a meaningful competitive differentiator across most categories."
            }
          </p>

          <p>
            {
              "The lines between mobile apps and web apps continue to blur. Progressive Web Apps have matured to the point where they are viable replacements for native apps in many categories, particularly for content consumption, simple utilities, and B2B tools. Meanwhile, native apps are increasingly consuming web content and web technologies through embedded WebViews and hybrid architectures. The right architecture for a given product in 2025 is not always purely native, purely web, or purely cross-platform — it is often a thoughtful combination of the three, chosen based on the specific performance, distribution, and capability requirements of the product."
            }
          </p>

          <p>
            {
              "Foldable devices, larger phone displays, and the continued growth of tablet usage are forcing mobile development teams to build genuinely adaptive UIs — not just responsive layouts that scale awkwardly from phone to tablet. Apple's iPad-first design guidelines and Samsung's large screen guidance both require deliberate design and engineering investment to support well. Softplix builds adaptive mobile UIs that deliver a purpose-designed experience at every screen size rather than a scaled-up phone UI that wastes the real estate of larger devices."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right Mobile App Development Company"}
          </h3>

          <p>
            {
              "The mobile app development market is large, competitive, and deeply uneven in quality. Thousands of agencies globally offer iOS and Android development services. The range of outcomes — from world-class products to expensive failures — is as wide as the range of prices. Choosing the wrong partner at this stage is not just a financial risk. It is a market timing risk: your competitors are shipping while you are managing a troubled development relationship and wondering why your launch keeps slipping."
            }
          </p>

          <p>
            {
              "When evaluating a mobile app development company, ask to download and use apps they have shipped — not just see screenshots. Ask specifically which engineers will work on your project and review their individual experience. Ask how they handle App Store rejections, which happen on almost every first submission. Ask about their testing process and what device matrix they test against. Ask what the handover process looks like and whether you will receive full source code, build configuration, and App Store account access on the first day of final payment."
            }
          </p>

          <p>
            {
              "Softplix has built our mobile practice on the quality of our shipped products and the honesty of our client relationships. We will tell you when cross-platform is the better choice for your budget, even when native would generate a larger engagement. We will tell you when your feature list is too large for your timeline. We will flag App Store compliance risks before they become launch-blocking rejections. And we will be here after launch — because mobile products require ongoing engineering care, and the companies that thrive are the ones with a committed long-term development partner."
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
    tag: "Fintech / Consumer",
    title: "Mobile Payment Wallet for Emerging Markets",
    desc: "Built a cross-platform React Native payment wallet with QR payments, peer-to-peer transfers, bill payments, and biometric authentication. Launched in three markets simultaneously and processed over $2M in transactions within the first 90 days post-launch.",
    metrics: ["3 market launch", "$2M+ transactions", "React Native / Node.js"],
  },
  {
    tag: "HealthTech / B2C",
    title: "On-Demand Physiotherapy App",
    desc: "Designed and shipped an iOS and Android telemedicine app connecting patients with licensed physiotherapists via video consultation, with AI-guided exercise programmes and real-time progress tracking. Grew to 15,000 active users in the first six months.",
    metrics: ["6-week MVP", "15k users in 6 months", "Flutter / Firebase"],
  },
  {
    tag: "Logistics / B2B",
    title: "Driver and Dispatcher Mobile Platform",
    desc: "Built a two-sided mobile platform — a driver app for iOS and Android with real-time job dispatch, GPS navigation, and digital proof-of-delivery, plus a web dispatcher dashboard. Reduced average dispatch time from 8 minutes to under 45 seconds.",
    metrics: [
      "45s avg dispatch time",
      "iOS + Android + Web",
      "React Native / Next.js",
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
            {"Mobile Apps We Have Delivered"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Real apps, real users, real outcomes — for startups and enterprises across every major vertical."
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
    q: "What does a mobile app development company do?",
    a: "A mobile app development company designs, engineers, and launches iOS, Android, and cross-platform mobile applications. This covers UX and UI design, frontend mobile development, backend API development, App Store submission, performance optimisation, and ongoing maintenance. We handle the complete technical delivery from initial architecture to live launch and post-launch support.",
  },
  {
    q: "How much does mobile app development cost?",
    a: "Mobile app development costs vary by scope and platform. A cross-platform MVP with core features typically ranges from $20,000 to $60,000. A full-featured consumer or enterprise application typically ranges from $60,000 to $200,000. Native iOS and Android with separate codebases cost more. We provide fixed-price quotes after a free scoping session — no hourly billing surprises.",
  },
  {
    q: "How long does it take to build a mobile app?",
    a: "A cross-platform MVP typically takes 6 to 10 weeks from design kickoff to App Store submission. A full-featured mobile application with complex backend integrations typically takes 3 to 6 months. We work in two-week sprints with live demo builds every fortnight so you can see real progress throughout the engagement.",
  },
  {
    q: "Should I build a native app or a cross-platform app?",
    a: "For the majority of mobile products — consumer apps, SaaS companions, marketplace apps, enterprise tools — cross-platform development with React Native or Flutter delivers native-quality performance at significantly lower cost and timeline. Native development makes sense for apps pushing hardware performance ceilings or requiring deeply complex platform-specific integrations. We will give you an honest recommendation based on your specific product requirements.",
  },
  {
    q: "What is the difference between React Native and Flutter?",
    a: "React Native maps to native UI components and uses JavaScript, making it the better choice for apps with standard UI patterns and teams with existing JavaScript expertise. Flutter renders its own UI through a custom graphics engine, making it superior for visually complex, highly customised interfaces and apps targeting multiple platforms including web and desktop from a single codebase. Both are production-proven at scale.",
  },
  {
    q: "Do you handle App Store submission?",
    a: "Yes. We manage the full App Store and Google Play submission process — including developer account setup, app metadata, screenshots, privacy policy requirements, App Store review compliance, and resubmission if the initial review is rejected. App Store rejections are common on first submission and we factor them into our timeline and process.",
  },
  {
    q: "Who owns the mobile app code after you build it?",
    a: "You do. All source code, design assets, API specifications, and documentation transfer to you upon final payment. We sign NDAs before kickoff and structure every engagement as a work-for-hire agreement. You also retain full ownership of your App Store developer accounts and certificates.",
  },
  {
    q: "Do you offer mobile app maintenance after launch?",
    a: "Yes. Mobile apps require ongoing maintenance as iOS and Android release major OS updates annually, App Store guidelines evolve, and third-party libraries require security patches. We offer structured maintenance retainers covering OS compatibility updates, dependency management, crash monitoring, performance tuning, and ongoing feature development.",
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
            {"Frequently Asked Questions About Mobile App Development"}
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
          {"Build Your Mobile App With Expert Developers"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 100+ companies that chose Softplix to ship fast, scalable, App Store-ready mobile applications. Your free consultation is one click away."
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
              text: "100+ apps delivered",
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
      "Softplix is a leading mobile app development company building high-performance iOS, Android, and cross-platform mobile applications for startups and enterprises worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mobile App Development Services",
      itemListElement: [
        "Cross-Platform App Development",
        "iOS App Development",
        "Android App Development",
        "AI-Powered Mobile Apps",
        "Mobile Backend Development",
        "App Modernisation & Rebuild",
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

export default function MobileAppDevelopmentCompanyPage() {
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
