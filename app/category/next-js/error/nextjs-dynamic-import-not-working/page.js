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
  FaCircleXmark,
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
function H3({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
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
  title: "Next.js Dynamic Import Not Working App Router — Fixed [2026]",
  description:
    "Fix Next.js dynamic import not working in App Router. Covers next/dynamic with ssr:false, Server vs Client Component rules, loading states, and lazy loading third-party libraries.",
  keywords:
    "nextjs dynamic import not working, next dynamic ssr false not working 2026, nextjs lazy load component fix, next dynamic import app router",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-dynamic-import-not-working",
  },
  openGraph: {
    title: "Next.js Dynamic Import Not Working App Router — Fixed [2026]",
    description:
      "Fix next/dynamic not working — ssr:false, Client Components, lazy loading.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-dynamic-import-not-working",
  },
};

const TOC = [
  {
    label: "Why dynamic import behaves differently in App Router",
    href: "#why",
  },
  {
    label: "Fix 1 — Dynamic import must be in a Client Component",
    href: "#fix-1",
  },
  { label: "Fix 2 — ssr: false requires 'use client'", href: "#fix-2" },
  { label: "Fix 3 — Loading and error states", href: "#fix-3" },
  { label: "Fix 4 — Dynamically import third-party libraries", href: "#fix-4" },
  { label: "Fix 5 — Named exports with dynamic", href: "#fix-5" },
  { label: "Fix 6 — Native import() in Server Components", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is next/dynamic not working in App Router?",
    a: "next/dynamic with ssr: false must be used in a Client Component (has 'use client'). In App Router, Server Components are default — you must opt in to client rendering. If you call next/dynamic in a Server Component, the ssr: false option is ignored and may cause errors.",
  },
  {
    q: "How do I use dynamic import with ssr: false in App Router?",
    a: "Add 'use client' to the file where you call dynamic(): 'use client'; import dynamic from 'next/dynamic'; const Chart = dynamic(() => import('./Chart'), { ssr: false }). The ssr: false option prevents SSR for that component only.",
  },
  {
    q: "When should I use ssr: false in Next.js?",
    a: "Use ssr: false for components that use browser-only APIs (window, localStorage, document), third-party widgets that do not support SSR, heavy libraries only needed on the client, or components that cause hydration errors due to browser-only code.",
  },
  {
    q: "Can I use dynamic() in a Server Component?",
    a: "dynamic() from 'next/dynamic' is designed for Client Components. In Server Components, use native async import(): const { default: Chart } = await import('./Chart'). This is true code splitting and works with Server Component async/await.",
  },
  {
    q: "Dynamic import loading state not showing — why?",
    a: "The loading component only shows during the lazy load phase (first time the component is needed). If the chunk is already cached by the browser, loading shows only for milliseconds. In development, chunks load fresh every time so loading is more visible.",
  },
  {
    q: "How do I dynamically import a named export?",
    a: "Pass the specific export in the factory function: const { SpecificComponent } = await import('./components'); const DynamicComp = dynamic(() => import('./components').then(mod => mod.SpecificComponent));",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Dynamic Import Not Working App Router — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-dynamic-import-not-working",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FaqSchema() {
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
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "App Router", "Error Fix"]}
            title={"Next.js Dynamic Import Not Working App Router"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: ssr:false not working · lazy loading · next/dynamic Client Component"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Next.js 13–15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix — Add 'use client'"}
            </p>
            <CodeBlock title="components/ChartWrapper.jsx">{`'use client'  // ← required for next/dynamic with ssr: false
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('./Chart'), {
  ssr: false,
  loading: () => <p>Loading chart...</p>,
})

export default function ChartWrapper({ data }) {
  return <Chart data={data} />
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">
            {"Why Dynamic Import Behaves Differently in App Router"}
          </SH>
          <P>
            {
              "In Next.js App Router, all components are Server Components by default. "
            }
            <IC>{"next/dynamic"}</IC>
            {
              " is a Client Component feature — it works with React's lazy loading system which runs in the browser. Using "
            }
            <IC>{"ssr: false"}</IC>
            {" in a Server Component is either ignored or causes errors."}
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Scenario"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Correct approach"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Client Component — lazy load with ssr:false",
                    "next/dynamic with 'use client'",
                  ],
                  [
                    "Server Component — code split async",
                    "Native await import() in async component",
                  ],
                  [
                    "Avoid hydration mismatch (window API)",
                    "dynamic() with ssr: false in Client Component",
                  ],
                  [
                    "Heavy chart / map library",
                    "dynamic() wrapping Client Component",
                  ],
                ].map(([s, a]) => (
                  <tr key={s} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 text-gray-700 text-sm">{s}</td>
                    <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                      {a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Dynamic Import Must Be in a Client Component"
            time="1 min"
            tag="Most common fix — missing 'use client'"
          >
            <CodeBlock title="components/MapWrapper.jsx">{`'use client'  // ← REQUIRED
import dynamic from 'next/dynamic'

// ✅ Dynamic import in Client Component
const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded" />,
})

export default function MapWrapper({ center, zoom }) {
  return <LeafletMap center={center} zoom={zoom} />
}

// Then use in a Server Component page:
// import MapWrapper from '@/components/MapWrapper'
// <MapWrapper center={[51.5, -0.09]} zoom={13} />`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="ssr: false — Client-Only Libraries"
            time="2 min"
            tag="window / document / browser-only APIs"
          >
            <P>
              {"Use "}
              <IC>{"ssr: false"}</IC>
              {
                " for components that use browser APIs unavailable on the server, or third-party widgets that break during SSR."
              }
            </P>
            <CodeBlock title="components/ClientWidgets.jsx">{`'use client'
import dynamic from 'next/dynamic'

// Leaflet (map) — requires window
const Map = dynamic(() => import('./Map'), { ssr: false })

// Monaco Editor — requires browser DOM
const Editor = dynamic(() => import('@monaco-editor/react'), { ssr: false })

// Lottie animation — browser canvas API
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Chart.js — requires canvas
const LineChart = dynamic(
  () => import('react-chartjs-2').then(mod => mod.Line),
  { ssr: false }
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Loading and Error States"
            time="2 min"
            tag="Show skeleton while chunk loads"
          >
            <CodeBlock title="components/HeavyComponent.jsx">{`'use client'
import dynamic from 'next/dynamic'

const HeavyEditor = dynamic(() => import('./HeavyEditor'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-64 bg-gray-50 rounded-xl">
      <div className="flex items-center gap-2 text-gray-400">
        <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <span>Loading editor...</span>
      </div>
    </div>
  ),
})

export default function EditorPage() {
  return (
    <div>
      <h1>Document Editor</h1>
      <HeavyEditor />
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Dynamically Import Third-Party Libraries"
            time="2 min"
            tag="Reduce initial bundle size"
          >
            <CodeBlock title="components/ExportButton.jsx">{`'use client'

export default function ExportButton({ data }) {
  async function handleExport() {
    // Import heavy library only when button is clicked
    const { default: XLSX } = await import('xlsx')
    const ws = XLSX.utils.json_to_sheet(data)
    const wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1')
    XLSX.writeFile(wb, 'export.xlsx')
  }

  return <button onClick={handleExport}>Export to Excel</button>
}

// This pattern works for any heavy library:
// PDF generation: pdfmake, jspdf
// Image processing: sharp (in API routes), canvas
// QR codes: qrcode, react-qr-code`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Named Exports With dynamic()"
            time="1 min"
            tag="Import a specific named export"
          >
            <CodeBlock title="components/SpecificChart.jsx">{`'use client'
import dynamic from 'next/dynamic'

// ✅ Named export — wrap in arrow function returning the named export
const BarChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.BarChart })),
  { ssr: false }
)

// ✅ Multiple named exports from same package
const LineChart = dynamic(
  () => import('recharts').then(mod => ({ default: mod.LineChart })),
  { ssr: false }
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Native import() in Server Components"
            time="2 min"
            tag="Code splitting without next/dynamic"
          >
            <P>
              {"Server Components support native "}
              <IC>{"import()"}</IC>
              {" with async/await — no "}
              <IC>{"next/dynamic"}</IC>
              {" needed."}
            </P>
            <CodeBlock title="app/report/page.jsx">{`// Server Component — native async import works perfectly
export default async function ReportPage() {
  // Conditionally load heavy module
  if (process.env.NODE_ENV === 'development') {
    const { generateDebugReport } = await import('@/lib/debug-report')
    await generateDebugReport()
  }

  // Load based on feature flag
  const renderer = await import(
    process.env.USE_NEW_RENDERER === 'true'
      ? '@/lib/new-renderer'
      : '@/lib/old-renderer'
  )

  return <div>{await renderer.render()}</div>
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always add 'use client' to files using next/dynamic with ssr: false",
              "Create a Client Component wrapper for any dynamically imported library",
              "Use the loading prop to show a skeleton — improves perceived performance",
              "For Server Components, use native await import() instead of next/dynamic",
              "Use inline import() in event handlers for click-triggered heavy libraries",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js hydration failed",
                href: "nextjs-hydration-failed",
                time: "7 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js build failing on Vercel",
                href: "nextjs-build-failing-vercel",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: useEffect running twice React 18",
                href: "react-useeffect-running-twice",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade Next.js Apps"}
            desc={
              "Softplix builds full-stack Next.js applications. Need help with performance, code splitting, or App Router patterns? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
