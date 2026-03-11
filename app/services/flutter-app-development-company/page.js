import Link from "next/link";
import { EMAIL_S, WHATSAPP } from "@/lib/constants";
import {
  FaMobile,
  FaPalette,
  FaCode,
  FaGears,
  FaCloudArrowUp,
  FaWhatsapp,
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
  FaGraduationCap,
  FaStar,
  FaCircleCheck,
  FaClockRotateLeft,
  FaLock,
  FaLayerGroup,
  FaWrench,
  FaVial,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "Flutter App Development Company | Cross-Platform Apps | Softplix",
  description:
    "Softplix is a leading Flutter app development company building high-performance cross-platform mobile and web applications for startups and enterprises worldwide.",
  keywords:
    "flutter app development company, flutter app development services, cross-platform app development, flutter mobile app development, hire flutter developers",
  alternates: {
    canonical: "https://softplix.com/flutter-app-development-company",
  },
  openGraph: {
    title: "Flutter App Development Company | Cross-Platform Apps | Softplix",
    description:
      "Softplix is a leading Flutter app development company building high-performance cross-platform mobile and web applications for startups and enterprises worldwide.",
    type: "website",
    url: "https://softplix.com/flutter-app-development-company",
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
        href="/contact"
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
        <Badge>{"#1 Flutter App Development Company"}</Badge>

        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
          {"Flutter App Development Company for"}
          <br />
          <span className="text-indigo-400">{"Startups and Enterprises"}</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
          {
            "Softplix builds pixel-perfect, high-performance Flutter applications for iOS, Android, and Web from a single codebase. We deliver beautiful cross-platform apps that feel native — faster and more cost-effectively than any other approach."
          }
        </p>

        <div className="mt-10">
          <CTAGroup center size="lg" />
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          {[
            "One codebase, all platforms",
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
      value: "60+",
      label: "Apps Delivered",
    },
    {
      icon: <FaMobile className="text-indigo-600 text-2xl" />,
      value: "12+",
      label: "Flutter Developers",
    },
    {
      icon: <FaGlobe className="text-indigo-600 text-2xl" />,
      value: "25+",
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
    icon: <FaMobile />,
    title: "Flutter Mobile App Development",
    desc: "Native-quality iOS and Android applications built with Flutter. We craft smooth 60fps experiences, responsive layouts, and platform-adaptive UI — all from a single Dart codebase that cuts delivery time in half.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Cross-Platform App Development",
    desc: "One codebase that runs on iOS, Android, Web, Desktop, and embedded devices. Reduce development cost by up to 40% while maintaining a premium, consistent experience across every platform your users rely on.",
  },
  {
    icon: <FaPalette />,
    title: "Flutter UI/UX Design",
    desc: "Pixel-perfect custom UI with Flutter's rich widget library and custom painter. We build design systems, animations, and micro-interactions that make your app stand out and keep users engaged.",
  },
  {
    icon: <FaCloudArrowUp />,
    title: "Flutter Backend Integration",
    desc: "Seamless integration with REST APIs, GraphQL, Firebase, Supabase, and custom backends. Real-time sync, offline-first architecture, push notifications, and secure authentication built right.",
  },
  {
    icon: <FaVial />,
    title: "Flutter App Testing & QA",
    desc: "Comprehensive unit, widget, and integration testing pipelines. We use Flutter's native testing framework alongside automated CI/CD to ensure your app ships bug-free across every device and OS version.",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Flutter App Development Services"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Cross-Platform Flutter Development Services"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "End-to-end Flutter development from UI design to production deployment — by specialists with deep Dart and mobile engineering expertise."
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
                {"Get a free Flutter app roadmap for your project"}
              </h3>
            </div>
            <Link
              href="/contact"
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
    desc: "We map your product goals, user personas, platform requirements, and existing tech stack to define the optimal Flutter architecture.",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Wireframes, interactive prototypes, and a complete design system built for Flutter's widget model — reviewed and approved before a single line of code.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Agile sprints with bi-weekly demos. Clean Dart code, BLoC or Riverpod state management, and modular architecture built for long-term maintainability.",
  },
  {
    num: "04",
    title: "Testing & QA",
    desc: "Automated unit, widget, and integration tests. Manual QA across real iOS and Android devices covering edge cases, performance, and accessibility.",
  },
  {
    num: "05",
    title: "Launch & Support",
    desc: "App Store and Google Play submission, CI/CD pipeline setup, crash monitoring, and ongoing feature development post-launch.",
  },
];

function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"How We Work"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Our Flutter App Development Process"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "A structured, sprint-based process that delivers polished Flutter apps on time — without surprises."
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
    desc: "Mobile banking apps, digital wallets, investment platforms, and real-time payment solutions built with enterprise-grade security.",
  },
  {
    icon: <FaHeartPulse />,
    name: "Healthcare",
    desc: "Patient portals, telemedicine apps, health monitoring dashboards, and HIPAA-compliant mobile platforms.",
  },
  {
    icon: <FaCartShopping />,
    name: "E-commerce",
    desc: "High-converting shopping apps, loyalty programmes, AR try-on features, and seamless checkout experiences.",
  },
  {
    icon: <FaCubes />,
    name: "SaaS Startups",
    desc: "Mobile companions for web SaaS products, offline-capable tools, and cross-platform B2B productivity apps.",
  },
  {
    icon: <FaTruck />,
    name: "Logistics",
    desc: "Driver apps, fleet tracking dashboards, delivery management tools, and warehouse scanning solutions.",
  },
  {
    icon: <FaGraduationCap />,
    name: "EdTech",
    desc: "Interactive learning apps, live tutoring platforms, gamified course experiences, and student progress tracking.",
  },
];

function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <Badge>{"Industries We Serve"}</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {"Flutter Apps Across Every Industry"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "We have delivered Flutter applications across highly competitive, user-sensitive, and fast-moving sectors globally."
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
    title: "Dedicated Flutter Experts",
    body: "Our team builds exclusively with Flutter — not generalists who dabble in every framework. Deep Dart expertise, advanced widget knowledge, and proven production deployments.",
  },
  {
    icon: <FaLayerGroup />,
    title: "True Cross-Platform Quality",
    body: "We do not compromise on native feel. Platform-adaptive widgets, custom animations, and device-specific optimisations deliver iOS and Android experiences that users cannot tell apart from native.",
  },
  {
    icon: <FaBolt />,
    title: "Faster Time to Market",
    body: "One codebase across all platforms means your app ships in half the time compared to maintaining separate iOS and Android projects — without sacrificing quality.",
  },
  {
    icon: <FaTag />,
    title: "Startup-Friendly Pricing",
    body: "Transparent milestone-based pricing. Fixed-price projects, dedicated team models, and sprint retainers — structured to fit pre-seed, seed, and Series A budgets.",
  },
  {
    icon: <FaLock />,
    title: "Full IP Ownership",
    body: "Every line of code, every asset, every design system we create belongs to you from day one. NDAs signed before kickoff, work-for-hire contracts on every engagement.",
  },
  {
    icon: <FaWrench />,
    title: "Post-Launch Maintenance",
    body: "OS updates break apps. We offer long-term maintenance plans to keep your Flutter app compatible with new iOS and Android releases, fixing bugs and shipping features continuously.",
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
              {"Why Choose Softplix as Your Flutter Development Partner"}
            </h2>
            <p className="mt-4 text-gray-500 leading-relaxed text-sm">
              {
                "We have shipped Flutter apps from MVP to App Store in weeks. Here is what sets us apart from a generalist agency or a Flutter freelancer."
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
            "What Is a Flutter App Development Company — And Why Does It Matter?"
          }
        </h2>

        <div className="space-y-6 text-gray-600 text-[15px] leading-[1.9]">
          <p>
            {
              "A Flutter app development company is a specialised software partner that designs, builds, and launches cross-platform mobile and web applications using Google's Flutter framework. Unlike generalist mobile agencies that split effort across React Native, Swift, Kotlin, and Xamarin, a dedicated Flutter shop brings concentrated expertise in Dart, Flutter's widget model, and the Skia and Impeller rendering engines — allowing them to deliver higher quality output faster and more predictably than any multi-framework approach."
            }
          </p>

          <p>
            {
              "When you partner with a Flutter development company like Softplix, you gain a team that has solved the hard problems before — state management architecture decisions, platform-channel integrations, custom render pipelines, App Store and Google Play compliance, and performance profiling on low-end devices. This institutional knowledge is what separates a specialist partner from a generalist agency that learned Flutter last quarter."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {
              "Why Flutter Is the Best Choice for Cross-Platform App Development"
            }
          </h3>

          <p>
            {
              "Flutter has become the dominant cross-platform framework for serious mobile product development, and the business case is compelling. With Flutter, a single team maintains one codebase that compiles to native ARM code on iOS and Android, runs in the browser via WebAssembly, and targets macOS, Windows, and Linux desktops — all with a single shared business logic layer. This architectural advantage directly translates to lower development cost, faster iteration cycles, and a dramatically simpler maintenance burden compared to maintaining separate iOS and Android codebases."
            }
          </p>

          <p>
            {
              "Unlike React Native, which bridges JavaScript to native components and introduces a performance ceiling on complex UIs, Flutter renders its own pixels using its engine. This means Flutter apps are not constrained by the native component model — developers can build completely custom UI that looks and feels identical on every platform, with 60fps or 120fps performance on modern hardware. For product teams who care deeply about brand expression and user experience, this is a fundamental advantage that React Native simply cannot match."
            }
          </p>

          <p>
            {
              "Flutter's hot reload and hot restart capabilities compress the development feedback loop dramatically. Designers and developers can iterate on UI in real time, seeing changes reflected in the running app in under a second. Combined with Flutter's rich library of Material and Cupertino widgets, a comprehensive pub.dev ecosystem, and Google's multi-year investment in the framework, Flutter is positioned as the most productive and capable cross-platform framework available today."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"The Real Business Benefits of Custom Flutter App Development"}
          </h3>

          <p>
            {
              "The financial case for Flutter development is straightforward and compelling. Traditional native mobile development requires two separate engineering teams — one for iOS in Swift or Objective-C, and one for Android in Kotlin or Java. These teams produce different codebases that must be kept in sync as features evolve, doubling the maintenance burden and creating subtle platform divergences that frustrate users. Flutter eliminates this duplication entirely."
            }
          </p>

          <p>
            {
              "Businesses that switch to Flutter from dual native development typically report forty to sixty percent reduction in mobile engineering costs while maintaining or improving app quality. Startups that launch on Flutter reach both app stores simultaneously from their first release, without the common pattern of launching iOS first and leaving Android users waiting for months. For any company where mobile is a core product channel, this speed and cost advantage is transformational."
            }
          </p>

          <p>
            {
              "Beyond cost, Flutter's hot reload dramatically accelerates product iteration. A/B testing UI changes, responding to user feedback, and shipping new features happens in days rather than weeks. In competitive markets where shipping velocity determines which product wins, the ability to iterate faster than competitors who are maintaining two separate native codebases is a genuine and durable strategic advantage."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Flutter App Development for Startups: From MVP to Scale"}
          </h3>

          <p>
            {
              "For early-stage startups, Flutter is close to an ideal technology choice. The ability to launch on both iOS and Android simultaneously from a single team means you can validate your product hypothesis with the full addressable market from day one — not just the half that uses the platform you built for first. Every week spent maintaining platform parity on a dual native codebase is a week not spent on product discovery, which is the thing that actually determines startup outcomes."
            }
          </p>

          <p>
            {
              "Flutter also scales well beyond MVP stage. Companies like Alibaba, BMW, eBay, and the New York Times have deployed Flutter in production at massive scale. The architecture patterns that support a 10-screen MVP — clean BLoC or Riverpod state management, layered repository patterns, feature-first folder structures — are the same patterns that support a 100-screen enterprise app. You do not need to choose between a framework that is fast to prototype and one that is robust at scale; Flutter is credibly both."
            }
          </p>

          <p>
            {
              "Softplix specialises in Flutter MVP development with fixed-price contracts and six to ten week delivery timelines. We have taken apps from a product brief to both App Store and Google Play multiple times, and we know exactly where the risks and delays come from — third-party integrations, Apple review edge cases, deep link configuration, and notification permission flows. We build these mitigations into our process from the start, so your launch is not derailed by a last-minute App Store rejection."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Enterprise Flutter Development: What Large Teams Need"}
          </h3>

          <p>
            {
              "Enterprise Flutter development introduces challenges that require a different level of engineering maturity. Large organisations need modular monorepos where multiple teams can work on separate features without stepping on each other. They need robust CI/CD pipelines that build, test, and distribute to internal testers automatically on every commit. They need flavour configurations for development, staging, and production environments. They need deep platform channel integrations with legacy SDKs, biometric authentication, MDM solutions, and corporate SSO providers."
            }
          </p>

          <p>
            {
              "Accessibility is a non-negotiable requirement for enterprise Flutter apps deployed in regulated industries. Flutter has strong accessibility semantics support, but getting it right across complex, custom UI requires deliberate engineering attention — correct semantic labels, focus management, screen reader compatibility across VoiceOver and TalkBack, and dynamic text size support. Softplix builds accessibility requirements into our development process from day one, treating it as a first-class engineering concern rather than a post-launch checkbox."
            }
          </p>

          <p>
            {
              "Softplix has delivered Flutter solutions for enterprise clients with complex integration requirements — SSO via SAML and OAuth, offline-first data sync with conflict resolution, deep integration with SAP and Salesforce backends, and deployment through MDM platforms. We bring the same structured engineering practices to Flutter that we apply to all our enterprise work: documented architecture decisions, comprehensive test coverage, code reviews, and structured handover processes."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"Flutter Development Trends Shaping the Industry in 2025"}
          </h3>

          <p>
            {
              "Flutter's trajectory in 2025 is stronger than at any point in its history. Flutter 3.x has brought significant improvements to iOS fidelity, Android platform integration, and web performance. The Impeller rendering engine, now the default on iOS and increasingly on Android, delivers smoother animations and more predictable performance by pre-compiling shaders — eliminating the shader jank that was Flutter's most common user-facing complaint in earlier versions."
            }
          </p>

          <p>
            {
              "Flutter for Web has matured considerably, with WebAssembly compilation now in stable and delivering near-native performance for Flutter web applications. This opens a compelling use case for organisations that want to deploy the same codebase to mobile and web with a genuinely high-quality web experience — something that was a theoretical promise in Flutter's early days but is now a production reality for many teams."
            }
          </p>

          <p>
            {
              "The integration of AI capabilities into Flutter apps is an emerging trend with significant momentum. On-device ML inference using TensorFlow Lite and MediaPipe, integration with large language model APIs for conversational features, and AI-powered image processing are all production use cases that Softplix is actively delivering. Combining Flutter's UI capabilities with intelligent AI features creates genuinely differentiated mobile products that stand out in crowded app stores."
            }
          </p>

          <p>
            {
              "Flutter's position in the ecosystem is further strengthened by Google's Gemini Nano integration pathway for on-device AI on Android, Flutter's official support status as a first-class framework for Google's own apps, and the growing community of over a million Flutter developers worldwide. For teams making a framework decision in 2025, Flutter's combination of technical capability, community maturity, and long-term vendor commitment makes it the lowest-risk cross-platform choice available."
            }
          </p>

          <h3 className="text-xl font-bold text-gray-900 pt-4">
            {"How to Choose the Right Flutter App Development Company"}
          </h3>

          <p>
            {
              "Not all Flutter agencies are equal. The growth of Flutter's popularity has attracted many generalist agencies that have added Flutter to their service list without building genuine depth. When evaluating a Flutter development partner, ask to see working examples of apps they have shipped to the App Store and Google Play — not Dribbble mockups or Figma files. Ask specifically about their state management approach, how they handle platform channel integration, and what their testing strategy looks like. These questions quickly separate Flutter specialists from framework-agnostic generalists."
            }
          </p>

          <p>
            {
              "Look for evidence of post-launch maintenance. The best measure of a development partner's quality is not how the app works at launch — it is how it holds up six months later when iOS 18 ships and the third-party SDKs need updating. Partners who disappear after launch delivery are a common and painful experience in mobile development. Softplix offers structured maintenance retainers precisely because we know that apps are not products that you build once and forget."
            }
          </p>

          <p>
            {
              "Softplix has built our Flutter practice on the foundation of technical excellence, transparent communication, and long-term partnerships. We will tell you honestly when Flutter is not the right choice for your project. We will flag integration risks before they become launch blockers. We will be available after launch — because we understand that the relationship between a great app and its development partner does not end at App Store approval."
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
    tag: "Fintech / Mobile Banking",
    title: "Flutter Digital Wallet for Fintech Startup",
    desc: "Built a full-featured digital wallet app for iOS and Android with real-time transaction feeds, biometric authentication, QR payments, and push notifications. Delivered both stores in 10 weeks from design kickoff, passing Apple review on the first submission.",
    metrics: [
      "iOS & Android in 10 weeks",
      "Biometric auth",
      "First-pass App Store approval",
    ],
  },
  {
    tag: "E-commerce / Retail",
    title: "Cross-Platform Shopping App with AR Try-On",
    desc: "Developed a Flutter shopping app for a fashion retailer integrating AR-based product try-on, personalised recommendations, and a headless Shopify backend. Achieved a 41% improvement in add-to-cart rate compared to the previous mobile web experience.",
    metrics: [
      "41% higher add-to-cart",
      "AR product try-on",
      "Shopify integration",
    ],
  },
  {
    tag: "Logistics / Operations",
    title: "Fleet Management App for Logistics Company",
    desc: "Built an offline-first Flutter driver app handling route navigation, proof-of-delivery capture, barcode scanning, and real-time dispatch communication. The app operates fully offline and syncs automatically when connectivity is restored — critical for warehouse and rural routes.",
    metrics: [
      "Offline-first architecture",
      "Real-time dispatch sync",
      "Barcode & POD capture",
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
            {"Flutter Apps We Have Delivered"}
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            {
              "Real results for real businesses — from pre-seed startups to established global enterprises."
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
    q: "What is a Flutter app development company?",
    a: "A Flutter app development company specialises in building cross-platform mobile, web, and desktop applications using Google's Flutter framework and the Dart programming language. Unlike generalist agencies, a Flutter specialist delivers higher quality, better performance, and faster delivery by maintaining deep expertise in a single, powerful framework.",
  },
  {
    q: "How much does Flutter app development cost?",
    a: "Flutter app development costs depend on scope and complexity. A focused MVP with core features typically ranges from $15,000 to $40,000. A full-featured consumer or B2B app ranges from $40,000 to $120,000. Enterprise apps with complex backend integrations and custom UI range higher. We provide fixed-price quotes after a free discovery session.",
  },
  {
    q: "How long does it take to build a Flutter app?",
    a: "A production-ready Flutter MVP typically takes 6 to 12 weeks from design kickoff to App Store submission. A full-featured app with complex integrations takes 3 to 5 months. Because Flutter targets both iOS and Android from a single codebase, you receive both platform builds on the same timeline — not one after the other.",
  },
  {
    q: "Is Flutter better than React Native?",
    a: "Flutter and React Native are both mature cross-platform frameworks, but Flutter has key technical advantages: it renders its own pixels rather than bridging to native components, delivering more consistent UI and better performance on complex animations. Flutter also has better tooling, a more unified development experience, and Google's direct long-term investment. For most new projects, Flutter is the stronger technical choice.",
  },
  {
    q: "Can Flutter apps be submitted to both the App Store and Google Play?",
    a: "Yes. A single Flutter codebase compiles to native iOS and Android binaries that can be submitted to the Apple App Store and Google Play Store respectively. Softplix handles the full submission process including certificate management, build configuration, store listing preparation, and review compliance for both platforms.",
  },
  {
    q: "Do you build Flutter web apps as well as mobile?",
    a: "Yes. Flutter supports web deployment via HTML and WebAssembly renderers. We build Flutter web apps for admin dashboards, B2B tools, and companion web experiences that share business logic with the mobile app. For public-facing marketing sites, we recommend a dedicated web framework, but for product interfaces Flutter web is a strong choice.",
  },
  {
    q: "Who owns the Flutter app code you build?",
    a: "You do. Full intellectual property ownership transfers to you upon final payment — including all Dart source code, design assets, build configurations, and documentation. We sign NDAs before kickoff and structure every engagement as a work-for-hire agreement.",
  },
  {
    q: "Do you offer Flutter app maintenance after launch?",
    a: "Yes. New iOS and Android releases regularly require app updates to maintain compatibility and App Store compliance. We offer structured maintenance retainers covering OS compatibility updates, bug fixes, dependency upgrades, and ongoing feature development. We strongly recommend a maintenance plan for any production Flutter app.",
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
            {"Frequently Asked Questions About Flutter Development"}
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
          {"Build Your Flutter App With Expert Developers"}
        </h2>
        <p className="mt-4 text-indigo-200 text-lg max-w-2xl mx-auto leading-relaxed">
          {
            "Join 60+ companies that chose Softplix to ship beautiful, performant Flutter apps to both app stores. Your free consultation is one click away."
          }
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
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
              text: "60+ apps delivered",
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
      "Softplix is a leading Flutter app development company building high-performance cross-platform mobile and web applications for startups and enterprises worldwide.",
    contactPoint: {
      "@type": "ContactPoint",
      email: EMAIL_S,
      contactType: "customer support",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flutter App Development Services",
      itemListElement: [
        "Flutter Mobile App Development",
        "Cross-Platform App Development",
        "Flutter UI/UX Design",
        "Flutter Backend Integration",
        "Flutter App Testing & QA",
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

export default function FlutterAppDevelopmentPage() {
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
