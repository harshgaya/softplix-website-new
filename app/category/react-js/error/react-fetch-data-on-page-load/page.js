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

/* ── Reusable Components ─────────────────────────────────────────────────── */

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
        <span className="text-xs font-mono text-red-300">Error</span>
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
          Table of Contents
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
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
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
      <h2 className="text-lg font-bold text-gray-900 mb-5">Related Articles</h2>
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
        Need Expert Help?
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        Talk to an Engineer <FaArrowRight className="text-xs" />
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
          2026 Updated
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

/* ── Page Data ───────────────────────────────────────────────────────────── */

export const metadata = {
  title: "React Fetch Data on Page Load — Complete Guide [2026]",
  description:
    "Complete guide to fetching data on page load in React. Covers useEffect with fetch and async/await, custom useFetch hook, SWR, TanStack Query, and Next.js Server Components.",
  keywords:
    "react fetch data on page load, react useeffect fetch data guide 2026, how to fetch api data react, react async data fetching",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-fetch-data-on-page-load",
  },
  openGraph: {
    title: "React Fetch Data on Page Load — Complete Guide [2026]",
    description:
      "Fetch data on page load in React — useEffect, SWR, TanStack Query, Server Components.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-fetch-data-on-page-load",
  },
};

const TOC = [
  { label: "Which pattern should you use?", href: "#which" },
  { label: "Pattern 1 — useEffect with fetch (standard)", href: "#fix-1" },
  { label: "Pattern 2 — Reusable useFetch custom hook", href: "#fix-2" },
  { label: "Pattern 3 — SWR (recommended for most apps)", href: "#fix-3" },
  { label: "Pattern 4 — TanStack Query", href: "#fix-4" },
  {
    label: "Pattern 5 — Next.js Server Component (App Router)",
    href: "#fix-5",
  },
  { label: "Handle loading, error, and empty states", href: "#states" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I fetch data when a React component loads?",
    a: "Use useEffect with empty deps: useEffect(() => { fetch('/api/data').then(r => r.json()).then(setData) }, []). The empty [] means it runs once on mount. Always use AbortController to cancel if the component unmounts before the fetch completes.",
  },
  {
    q: "React fetch runs twice in development — how to stop it?",
    a: "React 18 StrictMode mounts components twice in development. Fix with AbortController: const controller = new AbortController(); fetch(url, { signal: controller.signal }); return () => controller.abort(). The first fetch is cancelled, only the second completes.",
  },
  {
    q: "Should I use useEffect for data fetching?",
    a: "For simple cases yes, but SWR or TanStack Query are better for production — they handle caching, deduplication, retries, and background revalidation automatically. useEffect requires you to implement all of that yourself.",
  },
  {
    q: "How do I re-fetch data when props change?",
    a: "Add the prop to useEffect's dependency array: useEffect(() => { fetchUser(userId) }, [userId]). With SWR: useSWR(`/api/users/${userId}`, fetcher) — it automatically re-fetches when the URL changes.",
  },
  {
    q: "How do I handle errors when fetching?",
    a: "Use try/catch with async/await: try { const res = await fetch(url); if (!res.ok) throw new Error('Failed: ' + res.status); setData(await res.json()) } catch (err) { if (err.name !== 'AbortError') setError(err.message) }",
  },
  {
    q: "Best way to fetch data in Next.js App Router?",
    a: "Use async Server Components — they can directly await fetch() without useEffect. No loading state needed — the page only renders when data is ready. For client-side fetching after navigation, use SWR or TanStack Query.",
  },
];

/* ── Structured Data ─────────────────────────────────────────────────────── */

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Fetch Data on Page Load — Complete Guide [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-fetch-data-on-page-load",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // ✅ FIX: escaped quotes \"@type\" replaced with normal string keys
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Page Component ──────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["React", "Data Fetching", "Guide"]}
            title="React Fetch Data on Page Load"
            subtitle="— Complete Guide [2026]"
            sub="useEffect · custom hook · SWR · TanStack Query · Next.js Server Component"
            date="January 2026"
            read="7 min read"
            tech="React 18 · Next.js · SWR"
          />

          <TOCBlock items={TOC} />

          {/* ── Which pattern ── */}
          <SH id="which">Which Pattern Should You Use?</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Pattern
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Best for
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Complexity
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "useEffect + fetch",
                    "Learning, simple one-off fetches",
                    "Low",
                  ],
                  [
                    "Custom useFetch",
                    "Reusable across components, no dependency",
                    "Low",
                  ],
                  ["SWR", "Most production React apps", "Low"],
                  [
                    "TanStack Query",
                    "Complex apps — pagination, mutations, cache",
                    "Medium",
                  ],
                  [
                    "Server Component",
                    "Next.js App Router — best performance",
                    "Low (Next.js only)",
                  ],
                ].map(([p, b, c]) => (
                  <tr
                    key={p}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm">
                      {p}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{b}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Pattern 1 ── */}
          <FixCard
            number="1"
            title="useEffect With fetch — Standard Pattern"
            time="3 min"
            tag="The foundation — understand this first"
          >
            <CodeBlock title="components/UserList.jsx">{`import { useState, useEffect } from 'react'

export default function UserList() {
  const [users,   setUsers]   = useState([])
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    async function fetchUsers() {
      try {
        const res = await fetch('/api/users', { signal: controller.signal })
        if (!res.ok) throw new Error('Failed: ' + res.status)
        const data = await res.json()
        setUsers(data)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
    return () => controller.abort()   // cleanup on unmount
  }, [])  // [] = run once on mount

  if (loading) return <p>Loading...</p>
  if (error)   return <p>Error: {error}</p>
  if (!users.length) return <p>No users found.</p>

  return <ul>{users.map(u => <li key={u.id}>{u.name}</li>)}</ul>
}`}</CodeBlock>
          </FixCard>

          {/* ── Pattern 2 ── */}
          <FixCard
            number="2"
            title="Reusable useFetch Custom Hook"
            time="3 min"
            tag="DRY — one hook for all fetch calls"
          >
            <CodeBlock title="hooks/useFetch.js">{`import { useState, useEffect } from 'react'

export function useFetch(url) {
  const [data,    setData]    = useState(null)
  const [loading, setLoading] = useState(true)
  const [error,   setError]   = useState(null)

  useEffect(() => {
    if (!url) return
    const controller = new AbortController()
    setLoading(true)

    fetch(url, { signal: controller.signal })
      .then(res => { if (!res.ok) throw new Error('Failed: ' + res.status); return res.json() })
      .then(data => { setData(data); setLoading(false) })
      .catch(err => { if (err.name !== 'AbortError') { setError(err.message); setLoading(false) } })

    return () => controller.abort()
  }, [url])

  return { data, loading, error }
}

// Usage — one line anywhere
function ProductPage({ id }) {
  const { data: product, loading, error } = useFetch(\`/api/products/\${id}\`)
  if (loading) return <Skeleton />
  if (error)   return <ErrorMessage message={error} />
  return <ProductDetail product={product} />
}`}</CodeBlock>
          </FixCard>

          {/* ── Pattern 3 ── */}
          <FixCard
            number="3"
            title="SWR — Recommended for Most Apps"
            time="3 min"
            tag="Caching, revalidation, deduplication built-in"
          >
            <CodeBlock title="terminal">{"npm install swr"}</CodeBlock>
            <CodeBlock title="components/UserProfile.jsx">{`import useSWR from 'swr'

const fetcher = url => fetch(url).then(r => r.json())

export default function UserProfile({ userId }) {
  const { data, error, isLoading } = useSWR(
    \`/api/users/\${userId}\`,
    fetcher
  )

  if (isLoading) return <Skeleton />
  if (error)     return <ErrorMessage />
  return <div>{data.name}</div>
}

// SWR gives you for free:
// ✅ Request deduplication
// ✅ Cache — instant display on revisit
// ✅ Background revalidation
// ✅ Focus revalidation (reloads when tab regains focus)
// ✅ Automatic retry on error
// ✅ Loading and error states`}</CodeBlock>
          </FixCard>

          {/* ── Pattern 4 ── */}
          <FixCard
            number="4"
            title="TanStack Query — Complex Apps"
            time="3 min"
            tag="Full-featured — pagination, mutations, cache control"
          >
            <CodeBlock title="terminal">
              {"npm install @tanstack/react-query"}
            </CodeBlock>
            <CodeBlock title="app.jsx + components/Posts.jsx">{`// Setup — wrap app in QueryClientProvider
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>
  )
}

// Usage in component
import { useQuery } from '@tanstack/react-query'

function Posts() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: () => fetch('/api/posts').then(r => r.json()),
    staleTime: 5 * 60 * 1000,   // data fresh for 5 minutes
  })

  if (isLoading) return <Skeleton />
  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>
}`}</CodeBlock>
          </FixCard>

          {/* ── Pattern 5 ── */}
          <FixCard
            number="5"
            title="Next.js Server Component — Best Performance"
            time="2 min"
            tag="App Router — no useEffect needed"
          >
            <CodeBlock title="app/users/page.jsx">{`// ✅ Server Component — async/await directly in component
// No useEffect, no useState, no loading state needed
// Page only renders when data is ready

export default async function UsersPage() {
  const res   = await fetch('https://api.example.com/users', {
    next: { revalidate: 60 }   // ISR — revalidate every 60 seconds
  })
  const users = await res.json()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

// For dynamic data (per-request, no cache):
// fetch(url, { cache: 'no-store' })`}</CodeBlock>
            <TipBox>
              Server Components are the best way to fetch data in Next.js App
              Router. No waterfall, no client bundle overhead, data is ready
              before the page HTML is sent to the browser.
            </TipBox>
          </FixCard>

          {/* ── States ── */}
          <SH id="states">Handle Loading, Error, and Empty States</SH>
          <CodeBlock title="components/DataList.jsx">{`export default function DataList({ data, loading, error }) {
  if (loading) return (
    <div className="space-y-3">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-100 animate-pulse rounded-lg" />
      ))}
    </div>
  )

  if (error) return (
    <div className="rounded-lg bg-red-50 border border-red-200 p-4">
      <p className="text-red-700 text-sm">Failed to load: {error}</p>
    </div>
  )

  if (!data?.length) return (
    <p className="text-gray-500 text-center py-8">No items found.</p>
  )

  return <ul>{data.map(item => <li key={item.id}>{item.name}</li>)}</ul>
}`}</CodeBlock>

          {/* ── FAQ ── */}
          <SH id="faq">Frequently Asked Questions</SH>
          <FAQBlock items={FAQS} />

          {/* ── Related ── */}
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React cannot read properties of undefined (map)",
                // ✅ FIX: relative paths corrected to absolute hrefs
                href: "/category/react-js/error/react-cannot-read-properties-undefined-map",
                time: "6 min read",
              },
              {
                tag: "React",
                title:
                  "Fix: React Hooks can only be called inside the body of a function component",
                href: "/category/react-js/error/react-hooks-only-in-function-component",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title:
                  "Fix: React key prop warning — unique keys for list items",
                href: "/category/react-js/error/react-key-prop-warning",
                time: "7 min read",
              },
            ]}
          />

          <CTA
            title="We Build Production-Grade React Apps"
            desc="Softplix builds full-stack React and Next.js applications. Need help with data fetching architecture or API integration? We can help."
          />
        </div>
      </main>
    </>
  );
}
