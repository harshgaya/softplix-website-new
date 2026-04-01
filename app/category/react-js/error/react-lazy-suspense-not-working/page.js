import Link from "next/link";
import {
  FaClock,
  FaCalendarDays,
  FaTag,
  FaArrowRight,
  FaCircleCheck,
  FaCode,
  FaTerminal,
  FaTriangleExclamation,
  FaLightbulb,
  FaBookOpen,
} from "react-icons/fa6";

function CodeBlock({ title, children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-slate-800 shadow-lg">
      {title && (
        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700">
          <FaTerminal className="text-indigo-400 text-xs flex-shrink-0" />
          <span className="text-xs font-mono text-slate-300">{title}</span>
        </div>
      )}
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-green-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
function ErrorBlock({ children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-red-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-red-950 border-b border-red-900">
        <FaTriangleExclamation className="text-red-400 text-xs flex-shrink-0" />
        <span className="text-xs font-mono text-red-300">{"Error"}</span>
      </div>
      <pre className="bg-slate-900 px-5 py-4 overflow-x-auto text-sm leading-relaxed">
        <code className="text-red-400 font-mono whitespace-pre">
          {children}
        </code>
      </pre>
    </div>
  );
}
function TipBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
      <FaLightbulb className="text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}
function WarnBox({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <FaTriangleExclamation className="text-amber-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  );
}
function FixCard({ number, title, time, tag, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-900 text-base leading-tight">
            {title}
          </h3>
          {tag && (
            <span className="text-xs text-indigo-500 font-semibold">{tag}</span>
          )}
        </div>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap flex-shrink-0">
          <FaClock className="text-xs" />
          {time}
        </span>
      </div>
      <div className="px-6 py-5 bg-white">{children}</div>
    </div>
  );
}
function CL({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleCheck className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
function SH({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}
function P({ children }) {
  return (
    <p className="text-[15px] text-gray-600 leading-[1.85] my-4">{children}</p>
  );
}
function IC({ children }) {
  return (
    <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono text-indigo-700">
      {children}
    </code>
  );
}
function TOCBlock({ items }) {
  return (
    <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <FaBookOpen className="text-indigo-600 text-sm" />
        <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
          {"Table of Contents"}
        </span>
      </div>
      <ol className="space-y-2">
        {items.map(({ label, href }, i) => (
          <li key={href} className="flex items-center gap-2.5">
            <span className="text-xs font-bold text-indigo-400 w-5 flex-shrink-0 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={href}
              className="text-sm text-indigo-700 hover:text-indigo-900 hover:underline leading-snug"
            >
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
function FAQBlock({ items }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
        <details
          key={q}
          className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
        >
          <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-gray-900 text-sm hover:text-indigo-600 transition-colors select-none">
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
  );
}
function RelatedBlock({ items }) {
  return (
    <aside className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-5">
        {"Related Articles"}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map(({ tag, title, href, time }) => (
          <Link
            key={href}
            href={href}
            className="group block bg-slate-50 hover:bg-indigo-50 border border-gray-100 hover:border-indigo-200 rounded-2xl p-5 transition-all"
          >
            <span className="inline-block text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
              {tag}
            </span>
            <p className="text-sm font-semibold text-gray-900 group-hover:text-indigo-700 leading-snug mb-3">
              {title}
            </p>
            <span className="flex items-center gap-1 text-xs text-gray-400">
              <FaClock className="text-xs" />
              {time}
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
function CTA({ title, desc }) {
  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
        {"Need Expert Help?"}
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        {"Talk to an Engineer"}
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
function Header({ tags, title, subtitle, sub, date, read, tech }) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tags.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100"
          >
            <FaTag className="text-[10px]" />
            {t}
          </span>
        ))}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-green-50 text-green-700 border border-green-100">
          {"2026 Updated"}
        </span>
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight tracking-tight mb-5">
        {title}
        <span className="block text-indigo-600">{subtitle}</span>
      </h1>
      {sub && <p className="text-sm text-gray-500 mb-4">{sub}</p>}
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
          <FaCalendarDays className="text-xs" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <FaClock className="text-xs" />
          {read}
        </span>
        <span className="flex items-center gap-1.5">
          <FaCode className="text-xs" />
          {tech}
        </span>
      </div>
    </header>
  );
}

export const metadata = {
  title: "React lazy and Suspense Not Working — Fixed [2026]",
  description:
    "Fix React lazy and Suspense not working — lazy import errors, missing Suspense boundary, SSR issues in Next.js, error boundaries with lazy components, and loading states.",
  keywords:
    "react lazy suspense not working, react lazy import error, suspense boundary missing react 2026, react lazy next.js ssr error, react lazy component not loading",
  alternates: {
    canonical:
      "https://softplix.com/category/react/error/react-lazy-suspense-not-working",
  },
  openGraph: {
    title: "React lazy and Suspense Not Working — Fixed [2026]",
    description:
      "Fix React lazy and Suspense — import errors, missing boundaries, Next.js SSR, error boundaries.",
    type: "article",
    url: "https://softplix.com/category/react/error/react-lazy-suspense-not-working",
  },
};

const TOC = [
  { label: "Why React lazy and Suspense fail", href: "#why" },
  {
    label: "Fix 1 — Add a Suspense boundary above the lazy component",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Ensure the lazy import uses a default export",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — Fix React.lazy in Next.js (use next/dynamic)",
    href: "#fix-3",
  },
  {
    label: "Fix 4 — Add an Error Boundary for lazy load failures",
    href: "#fix-4",
  },
  { label: "Fix 5 — Preload lazy components on hover/intent", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does React lazy throw 'A React component suspended while rendering'?",
    a: "This error means a lazy component suspended but there was no Suspense boundary above it in the component tree. Every React.lazy component must have a parent Suspense component with a fallback prop. Without it, React does not know what to show while loading and throws an error.",
  },
  {
    q: "Can React.lazy be used in Next.js App Router?",
    a: "React.lazy works in Next.js Client Components. However, the recommended approach in Next.js is next/dynamic, which integrates better with SSR and adds support for server-side loading states. Use dynamic(() => import('./Component'), { ssr: false }) for components that use browser-only APIs.",
  },
  {
    q: "Why does React.lazy only work with default exports?",
    a: "React.lazy requires the dynamically imported module to have a default export that is a React component. Named exports are not supported directly. If you need a named export, create a wrapper module that re-exports it as default, or use a dynamic import with destructuring inside the lazy factory.",
  },
  {
    q: "What is the difference between React.lazy and next/dynamic?",
    a: "React.lazy is a core React API for code splitting with client-side dynamic imports. next/dynamic is Next.js's wrapper that adds SSR support, server-side loading states, and better integration with the Next.js bundler. In a Next.js app, prefer next/dynamic over React.lazy.",
  },
  {
    q: "How do I handle errors when a lazy component fails to load?",
    a: "Wrap your Suspense boundary with an Error Boundary component. When a lazy component's chunk fails to load (network error, deployment update), the error boundary catches the error and shows a fallback UI with a reload option.",
  },
  {
    q: "Can I preload a lazy component before the user navigates to it?",
    a: "Yes — call the lazy factory function directly to trigger the import without rendering the component. For example, on link hover: const lazyLoad = React.lazy(() => import('./HeavyPage')); then call import('./HeavyPage') on hover to start loading the chunk early.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React lazy and Suspense Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react/error/react-lazy-suspense-not-working",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FAQSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["React", "Code Splitting", "Error Fix"]}
            title={"React lazy and Suspense Not Working"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: missing Suspense boundary · default export requirement · Next.js next/dynamic · Error Boundary · preloading"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"React 18/19 · Next.js · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`Error: A React component suspended while rendering, but no fallback UI was specified.
// OR:
Error: React.lazy requires a default export.
// OR (Next.js):
Error: Dynamic require of "..." is not supported`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct pattern"}
            </p>
            <CodeBlock title="React lazy + Suspense — correct structure">{`import { lazy, Suspense } from "react"

const HeavyChart = lazy(() => import("./HeavyChart"))  // must default export

function Dashboard() {
  return (
    <Suspense fallback={<div>Loading chart...</div>}>  {/* ← required */}
      <HeavyChart />
    </Suspense>
  )
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why React lazy and Suspense Fail"}</SH>
          <P>
            {
              "React.lazy is a code-splitting API that defers loading a component's JavaScript bundle until it is first rendered. It works in two parts: "
            }
            <IC>{"React.lazy()"}</IC>
            {" wraps the dynamic import, and "}
            <IC>{"<Suspense>"}</IC>
            {
              " provides the loading fallback. Both parts are required — missing either one throws an error."
            }
          </P>

          <FixCard
            number="1"
            title="Add a Suspense Boundary Above the Lazy Component"
            time="2 min"
            tag="Most common error — missing Suspense wrapper"
          >
            <P>
              {"Every "}
              <IC>{"React.lazy"}</IC>
              {" component must have at least one "}
              <IC>{"<Suspense>"}</IC>
              {
                " ancestor. The boundary can be anywhere above the lazy component in the tree — the nearest one is used."
              }
            </P>
            <CodeBlock title="Correct Suspense placement">{`import { lazy, Suspense } from "react"

// ✅ Lazy components
const Modal = lazy(() => import("./Modal"))
const Chart = lazy(() => import("./Chart"))
const DataTable = lazy(() => import("./DataTable"))

// ✅ One Suspense boundary can cover multiple lazy components
function App() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      {/* All lazy components covered by this single boundary */}
      <Modal />
      <Chart />
      <DataTable />
    </Suspense>
  )
}

// ✅ Or granular boundaries per component
function Dashboard() {
  return (
    <div>
      <Suspense fallback={<ChartSkeleton />}>
        <Chart />
      </Suspense>
      <Suspense fallback={<TableSkeleton />}>
        <DataTable />
      </Suspense>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Ensure the Lazy Import Uses a Default Export"
            time="2 min"
            tag="React.lazy requires default export — named exports fail"
          >
            <CodeBlock title="Default export requirement">{`// ❌ Named export — lazy will throw
// HeavyChart.tsx:
export function HeavyChart() { return <canvas /> }

// ❌ This fails:
const HeavyChart = lazy(() => import("./HeavyChart"))  // no default export

// ✅ Option A — add default export to the component file
// HeavyChart.tsx:
export function HeavyChart() { return <canvas /> }
export default HeavyChart  // add this

// ✅ Option B — create a wrapper re-export
// HeavyChart.lazy.ts:
export { HeavyChart as default } from "./HeavyChart"
const LazyChart = lazy(() => import("./HeavyChart.lazy"))

// ✅ Option C — use a dynamic import with destructuring inside lazy
const HeavyChart = lazy(() =>
  import("./HeavyChart").then(m => ({ default: m.HeavyChart }))
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix React.lazy in Next.js — Use next/dynamic"
            time="3 min"
            tag="Dynamic require not supported / SSR errors"
          >
            <P>
              {"In Next.js, prefer "}
              <IC>{"next/dynamic"}</IC>
              {" over "}
              <IC>{"React.lazy"}</IC>
              {
                "  . It handles SSR, loading states, and works with both App and Pages Router."
              }
            </P>
            <CodeBlock title="next/dynamic — the Next.js way">{`import dynamic from "next/dynamic"

// ✅ Basic dynamic import with loading state
const HeavyChart = dynamic(() => import("@/components/HeavyChart"), {
  loading: () => <div>Loading chart...</div>,
})

// ✅ Disable SSR for browser-only components
const MapComponent = dynamic(() => import("@/components/Map"), {
  ssr: false,          // won't render on server — avoids window/document errors
  loading: () => <div>Loading map...</div>,
})

// ✅ Named export — use .then() to select it
const LineChart = dynamic(
  () => import("recharts").then(m => m.LineChart),
  { ssr: false }
)

// Usage — no Suspense needed (next/dynamic handles it internally)
export default function Dashboard() {
  return (
    <div>
      <HeavyChart data={data} />
      <MapComponent center={coords} />
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Add an Error Boundary for Lazy Load Failures"
            time="5 min"
            tag="Network errors or chunk failures crashing the whole page"
          >
            <CodeBlock title="Error boundary wrapping lazy + Suspense">{`"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

class LazyErrorBoundary extends Component<
  { children: ReactNode; fallback?: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Lazy load failed:", error, info)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="p-6 text-center border rounded-xl">
          <p className="text-gray-600 mb-3">Failed to load. Please try again.</p>
          <button onClick={() => this.setState({ hasError: false })} className="text-indigo-600 underline">
            Retry
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// Usage
function App() {
  return (
    <LazyErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <HeavyChart />
      </Suspense>
    </LazyErrorBoundary>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Preload Lazy Components on Hover/Intent"
            time="3 min"
            tag="Reduce perceived load time — start fetching before click"
          >
            <P>
              {
                "Trigger the dynamic import early — on link hover or button mouseenter — so the chunk is already loading when the user actually clicks."
              }
            </P>
            <CodeBlock title="Preload on hover">{`import { lazy, Suspense } from "react"

// Define the lazy component
const HeavyModal = lazy(() => import("./HeavyModal"))

// Preload function — triggers import without rendering
function preloadHeavyModal() {
  import("./HeavyModal")  // starts fetching the chunk
}

function Dashboard() {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      {/* Start loading on hover — chunk ready by the time user clicks */}
      <button
        onMouseEnter={preloadHeavyModal}
        onClick={() => setShowModal(true)}
      >
        Open Heavy Modal
      </button>

      {showModal && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyModal onClose={() => setShowModal(false)} />
        </Suspense>
      )}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always wrap lazy components in a Suspense boundary with a fallback prop",
              "Ensure every lazy-imported component has a default export",
              "In Next.js, use next/dynamic instead of React.lazy — it handles SSR automatically",
              "Wrap Suspense in an Error Boundary to handle chunk load failures gracefully",
              "Use ssr: false in next/dynamic for any component that uses window, document, or browser APIs",
              "Preload chunks on hover with import('./Component') to reduce perceived latency",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React useMemo not working",
                href: "/category/react/error/react-usememo-not-working",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React portal not rendering",
                href: "/category/react/error/react-portal-not-rendering",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js 'use client' directive error",
                href: "/category/next-js/error/nextjs-use-client-directive-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Fast React Applications with Code Splitting"}
            desc={
              "Softplix engineers architect React apps with lazy loading, Suspense, and optimal bundle strategies. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
