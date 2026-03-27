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

export const metadata = {
  title: "useEffect Running Twice React 18 — Fixed [2026]",
  description:
    "Fix useEffect running twice in React 18 and Next.js. Understand why StrictMode causes double invocation, how to handle cleanup, and when not to fight it.",
  keywords:
    "useeffect running twice react 18, react useeffect called twice fix, nextjs useeffect twice strictmode 2026, react 18 double render fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/react-useeffect-running-twice",
  },
  openGraph: {
    title: "useEffect Running Twice React 18 — Fixed [2026]",
    description:
      "Fix useEffect running twice in React 18 — StrictMode, cleanup functions, fetch deduplication.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/react-useeffect-running-twice",
  },
};

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
        <span className="text-xs font-mono text-red-300">
          {"Console Output"}
        </span>
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

const TOC = [
  { label: "Why does useEffect run twice?", href: "#why" },
  {
    label: "Fix 1 — Add a cleanup function (correct approach)",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Deduplicate API calls with AbortController",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — Prevent duplicate side effects with a ref",
    href: "#fix-3",
  },
  { label: "Fix 4 — Remove StrictMode (not recommended)", href: "#fix-4" },
  { label: "Fix 5 — Use a data fetching library instead", href: "#fix-5" },
  { label: "Fix 6 — Analytics and tracking — fire once only", href: "#fix-6" },
  { label: "Only happens in development", href: "#dev-only" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does useEffect run twice in React 18?",
    a: "React 18 StrictMode intentionally mounts, unmounts, and remounts every component in development to help you find cleanup bugs. useEffect runs twice (mount → unmount → mount) so you notice if your effects do not properly clean up. This does NOT happen in production.",
  },
  {
    q: "Does useEffect run twice in production?",
    a: "No. The double invocation only happens in development when React StrictMode is enabled. In production, useEffect runs exactly once per mount (or once per dependency change).",
  },
  {
    q: "How do I make useEffect run only once in React 18?",
    a: "The correct approach is to add a cleanup function. For API calls: use AbortController and abort in the cleanup. For subscriptions: unsubscribe in cleanup. For event listeners: removeEventListener in cleanup. This makes the double run safe.",
  },
  {
    q: "How do I stop useEffect from fetching data twice?",
    a: "Use AbortController: const controller = new AbortController(); fetch(url, { signal: controller.signal }). In cleanup: return () => controller.abort(). The second call aborts the first, so only one fetch completes.",
  },
  {
    q: "useEffect running twice is causing duplicate database writes — how to fix?",
    a: "Use a ref flag: const didRun = useRef(false); if (didRun.current) return; didRun.current = true; — then your write logic. This ensures the write only happens once even in StrictMode.",
  },
  {
    q: "Should I remove StrictMode to fix useEffect running twice?",
    a: "No. StrictMode is surfacing a real problem — your effect is not cleanup-safe. Removing it hides the bug without fixing it, and the bug may still cause issues in production when components unmount and remount (e.g. navigating away and back).",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "useEffect Running Twice React 18 — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/react-useeffect-running-twice",
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

const RELATED = [
  {
    tag: "Next.js",
    title: "Fix: Next.js hydration failed",
    href: "nextjs-hydration-failed",
    time: "7 min read",
  },
  {
    tag: "React",
    title: "Fix: React useState not updating",
    href: "react-usestate-not-updating",
    time: "5 min read",
  },
  {
    tag: "React",
    title: "Fix: React component not re-rendering",
    href: "react-component-not-rerendering",
    time: "5 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["React", "Next.js", "Error Fix"].map((t) => (
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
              {"useEffect Running Twice React 18"}
              <span className="block text-indigo-600">{"— Fixed [2026]"}</span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {
                "Also covers: API called twice · StrictMode double render · fetch running twice in Next.js"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"6 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"React 18 · Next.js 13–15"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ The Real Fix — Add a Cleanup Function"}
            </p>
            <CodeBlock title="components/DataFetcher.jsx">{`useEffect(() => {
  const controller = new AbortController()

  fetch('/api/data', { signal: controller.signal })
    .then(res => res.json())
    .then(data => setData(data))
    .catch(err => {
      if (err.name === 'AbortError') return  // ignore — this is expected
      console.error(err)
    })

  return () => controller.abort()  // ← cleanup cancels the first call
}, [])`}</CodeBlock>
          </div>

          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map(({ label, href }, i) => (
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

          <SH id="why">{"Why Does useEffect Run Twice in React 18?"}</SH>
          <ErrorBlock>{`// You see this in console in development:
Fetching data...   // ← first mount
Fetching data...   // ← second mount (StrictMode!)

// Your API gets called twice, state gets set twice,
// event listeners get attached twice...`}</ErrorBlock>

          <P>
            {"React 18 intentionally runs "}
            <IC>{"useEffect"}</IC>
            {" twice in development when "}
            <IC>{"<React.StrictMode>"}</IC>
            {
              " is enabled (which Next.js enables by default). The sequence is: mount → run effects → unmount → cleanup → remount → run effects again."
            }
          </P>
          <P>
            {"This is "}
            <strong>{"not a bug"}</strong>
            {
              " — it is React stress-testing your components to ensure effects are cleanup-safe. If your effect causes problems when run twice, it means the cleanup function is missing or incomplete."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Effect type"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Correct cleanup"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["fetch / API call", "AbortController → abort() in cleanup"],
                  ["EventListener", "removeEventListener in cleanup"],
                  ["WebSocket / SSE", "close() the connection in cleanup"],
                  [
                    "setInterval / setTimeout",
                    "clearInterval / clearTimeout in cleanup",
                  ],
                  [
                    "Database write / side effect",
                    "Ref flag to prevent second execution",
                  ],
                ].map(([e, c]) => (
                  <tr key={e} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                      {e}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Add a Cleanup Function — The Correct Approach"
            time="3 min"
            tag="Every useEffect that does async work needs this"
          >
            <P>
              {"Every "}
              <IC>{"useEffect"}</IC>
              {
                " that starts an asynchronous operation should return a cleanup function that cancels or ignores the result when the component unmounts."
              }
            </P>
            <CodeBlock title="The cleanup pattern for every effect type">{`// ✅ Fetch with AbortController
useEffect(() => {
  const controller = new AbortController()
  fetch('/api/user', { signal: controller.signal })
    .then(r => r.json()).then(setUser)
    .catch(e => { if (e.name !== 'AbortError') console.error(e) })
  return () => controller.abort()
}, [userId])

// ✅ Event listener
useEffect(() => {
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])

// ✅ setInterval
useEffect(() => {
  const id = setInterval(tick, 1000)
  return () => clearInterval(id)
}, [])

// ✅ WebSocket
useEffect(() => {
  const ws = new WebSocket('wss://api.example.com')
  ws.onmessage = (e) => setMessages(m => [...m, e.data])
  return () => ws.close()
}, [])`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Deduplicate API Calls With AbortController"
            time="3 min"
            tag="API called twice — most painful symptom"
          >
            <P>
              {
                "When StrictMode mounts twice, an unguarded fetch fires twice. The AbortController pattern cancels the first call when the component unmounts, so only the second (real) call completes."
              }
            </P>
            <CodeBlock title="hooks/useData.js">{`import { useState, useEffect } from 'react'

export function useData(url) {
  const [data, setData]   = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)

    async function load() {
      try {
        const res = await fetch(url, { signal: controller.signal })
        if (!res.ok) throw new Error('Request failed: ' + res.status)
        const json = await res.json()
        setData(json)
      } catch (err) {
        if (err.name === 'AbortError') return  // expected — ignore
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
    return () => controller.abort()
  }, [url])

  return { data, error, loading }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Prevent Duplicate Side Effects With a Ref"
            time="2 min"
            tag="Database writes, analytics, one-time operations"
          >
            <P>
              {
                "For side effects that must only run once — analytics events, database writes, initialisation — use a ref to track whether it has already run."
              }
            </P>
            <CodeBlock title="components/Analytics.jsx">{`import { useEffect, useRef } from 'react'

export default function ProductPage({ productId }) {
  const tracked = useRef(false)

  useEffect(() => {
    if (tracked.current) return   // already ran — skip second invocation
    tracked.current = true

    // This now only fires once even in StrictMode
    analytics.track('product_viewed', { productId })
  }, [productId])

  return <div>Product {productId}</div>
}`}</CodeBlock>
            <TipBox>
              {
                "The ref approach is for truly one-time operations. For data fetching, prefer AbortController (Fix 2) because it handles network cancellation properly."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Remove StrictMode — Use Only as Last Resort"
            time="1 min"
            tag="Not recommended — hides the real problem"
          >
            <P>
              {
                "You can remove StrictMode to stop the double invocation but this hides the underlying cleanup bug rather than fixing it. Only consider this temporarily while debugging."
              }
            </P>
            <CodeBlock title="app/layout.jsx">{`// ❌ Not recommended — disables StrictMode entirely
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>  {/* removed React.StrictMode */}
    </html>
  )
}

// Next.js reactStrictMode toggle (next.config.js)
module.exports = {
  reactStrictMode: false,  // ← removes StrictMode — not recommended
}`}</CodeBlock>
            <WarnBox>
              {
                "Removing StrictMode means React will not warn you about other cleanup bugs, deprecated APIs, or unexpected side effects. Fix the cleanup instead."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use a Data Fetching Library"
            time="5 min"
            tag="Best long-term solution — handles deduplication automatically"
          >
            <P>
              {
                "Libraries like SWR and TanStack Query handle deduplication, caching, and race conditions automatically. They are immune to the StrictMode double-invoke problem."
              }
            </P>
            <CodeBlock title="terminal">
              {"npm install swr\n# or\nnpm install @tanstack/react-query"}
            </CodeBlock>
            <CodeBlock title="SWR — recommended for Next.js">{`import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(r => r.json())

export default function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(\`/api/users/\${userId}\`, fetcher)

  if (isLoading) return <div>Loading...</div>
  if (error)     return <div>Error: {error.message}</div>
  return <div>{data.name}</div>
  // No useEffect needed — SWR handles everything
}`}</CodeBlock>
            <CodeBlock title="TanStack Query">{`import { useQuery } from '@tanstack/react-query'

export default function UserProfile({ userId }) {
  const { data, isLoading } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
  })

  if (isLoading) return <div>Loading...</div>
  return <div>{data.name}</div>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Analytics and Tracking — Fire Once Only"
            time="2 min"
            tag="Page view events firing twice"
          >
            <CodeBlock title="hooks/usePageView.js">{`import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function usePageView() {
  const pathname = usePathname()
  const lastPath = useRef(null)

  useEffect(() => {
    // Only track when path actually changes, not StrictMode remount
    if (pathname === lastPath.current) return
    lastPath.current = pathname
    analytics.page({ path: pathname })
  }, [pathname])
}`}</CodeBlock>
          </FixCard>

          <SH id="dev-only">{"This Only Happens in Development"}</SH>
          <P>
            {
              "It is worth repeating: the double invocation is a development-only behaviour. React StrictMode does not run in production. Your users will never see the doubled effects. The purpose is to make you write correct cleanup code, which protects against real production bugs when components unmount and remount during navigation."
            }
          </P>

          <SH id="prevention">{"Prevention — Write Cleanup-Safe Effects"}</SH>
          <CL
            items={[
              "Every fetch in useEffect needs an AbortController — always",
              "Every event listener added must be removed in the cleanup function",
              "Every interval and timeout must be cleared in cleanup",
              "Every subscription (WebSocket, SSE, Redux) must be closed/unsubscribed",
              "Use useRef flag for truly one-time side effects like analytics",
              "Consider SWR or TanStack Query — they handle all of this automatically",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
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

          <aside className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {"Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map(({ tag, title, href, time }) => (
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

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Next.js applications. Dealing with React hook issues or SSR complexity? We can help."
              }
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
            >
              {"Talk to an Engineer"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
