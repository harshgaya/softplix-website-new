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
// ✅ FIX: removed duplicate `import { FaTriangleExclamation } from "react-icons/fa6"` that appeared mid-file

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
  title: "React State Not Persisting on Refresh — Fixed [2026]",
  description:
    "Fix React state not persisting on page refresh. Covers localStorage, sessionStorage, custom useLocalStorage hook, and when to use URL state or a database instead.",
  keywords:
    "react state not persisting on refresh fix 2026, react localstorage persist state, react state lost on page reload, react useState persist browser refresh",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-state-not-persisting-refresh",
  },
  openGraph: {
    title: "React State Not Persisting on Refresh — Fixed [2026]",
    description:
      "Fix React state lost on page refresh — localStorage, sessionStorage, URL state.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-state-not-persisting-refresh",
  },
};

const TOC = [
  { label: "Why React state resets on refresh", href: "#why" },
  { label: "Fix 1 — Persist to localStorage", href: "#fix-1" },
  { label: "Fix 2 — Custom useLocalStorage hook", href: "#fix-2" },
  { label: "Fix 3 — sessionStorage (tab-only)", href: "#fix-3" },
  { label: "Fix 4 — URL state for shareable filters", href: "#fix-4" },
  { label: "Fix 5 — Zustand with persist middleware", href: "#fix-5" },
  { label: "Which storage to use", href: "#which" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does React state reset on page refresh?",
    a: "React state is stored in memory — it lives only as long as the JavaScript is running. When you refresh, the browser reloads the page and all JavaScript memory is cleared. To persist state, you must save it somewhere outside of memory: localStorage, sessionStorage, a database, or the URL.",
  },
  {
    q: "How do I persist React state to localStorage?",
    a: "Read from localStorage on init: useState(() => JSON.parse(localStorage.getItem('key')) ?? defaultValue). Write to localStorage on change: useEffect(() => { localStorage.setItem('key', JSON.stringify(value)) }, [value]).",
  },
  {
    q: "What is the difference between localStorage and sessionStorage?",
    a: "localStorage persists forever until manually cleared — even after closing the browser. sessionStorage lasts only for the current browser tab session — cleared when the tab is closed. Use localStorage for theme/preferences, sessionStorage for temporary form data.",
  },
  {
    q: "localStorage is not defined in Next.js — how to fix?",
    a: "window and localStorage do not exist on the server. Access them only in useEffect (runs client-side only): useEffect(() => { const saved = localStorage.getItem('theme'); if (saved) setTheme(saved) }, []). Or check: if (typeof window !== 'undefined') { localStorage.getItem(...) }",
  },
  {
    q: "Should I use localStorage or a database to persist state?",
    a: "localStorage for user preferences (theme, language, UI settings) — private to one browser. Database for user data that should sync across devices and browsers. URL params for shareable state (search filters, pagination).",
  },
  {
    q: "Zustand vs localStorage for persisting state?",
    a: "Zustand with the persist middleware combines both — state is managed with Zustand (reactive, easy updates) and automatically synced to localStorage (persistent). It is cleaner than manually managing localStorage with useEffect.",
  },
];

/* ── Structured Data ─────────────────────────────────────────────────────── */

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React State Not Persisting on Refresh — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-state-not-persisting-refresh",
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
            tags={["React", "Error Fix"]}
            title="React State Not Persisting on Refresh"
            subtitle="— Fixed [2026]"
            sub="Also covers: localStorage · sessionStorage · Zustand persist · URL state"
            date="January 2026"
            read="6 min read"
            tech="React 18 · Next.js"
          />

          {/* Quick-glance summary */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              ⚡ Quick Fix — Persist to localStorage
            </p>
            <CodeBlock title="component.jsx">{`const [theme, setTheme] = useState(
  () => localStorage.getItem('theme') ?? 'light'  // read on init
)

useEffect(() => {
  localStorage.setItem('theme', theme)  // write on change
}, [theme])`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          {/* ── Why ── */}
          <SH id="why">Why React State Resets on Refresh</SH>
          <P>
            React state lives in JavaScript memory. When you refresh the page,
            the browser clears all memory and starts the JavaScript engine
            fresh. <IC>useState</IC> always starts with its initial value on a
            fresh page load. To keep data across refreshes, you need to save it
            somewhere permanent.
          </P>

          {/* ── Fix 1 ── */}
          <FixCard
            number="1"
            title="Persist to localStorage"
            time="2 min"
            tag="Survives refresh and browser close"
          >
            <CodeBlock title="components/ThemeToggle.jsx">{`import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    // ✅ Lazy initializer — read from localStorage on first render
    // Safe check for SSR (Next.js)
    if (typeof window === 'undefined') return 'light'
    return localStorage.getItem('theme') ?? 'light'
  })

  useEffect(() => {
    // ✅ Write to localStorage whenever theme changes
    localStorage.setItem('theme', theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')}>
      Theme: {theme}
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 2 ── */}
          <FixCard
            number="2"
            title="Custom useLocalStorage Hook"
            time="3 min"
            tag="Reusable — one line to persist any state"
          >
            <CodeBlock title="hooks/useLocalStorage.js">{`import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.warn('localStorage write failed:', err)
    }
  }, [key, value])

  return [value, setValue]
}

// Usage — exactly like useState, but persists
function Settings() {
  const [theme,    setTheme]    = useLocalStorage('theme', 'light')
  const [language, setLanguage] = useLocalStorage('lang', 'en')
  const [cart,     setCart]     = useLocalStorage('cart', [])

  return <div>Theme: {theme}</div>
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 3 ── */}
          <FixCard
            number="3"
            title="sessionStorage — Tab Session Only"
            time="1 min"
            tag="Cleared when tab closes"
          >
            <CodeBlock title="hooks/useSessionStorage.js">{`import { useState, useEffect } from 'react'

export function useSessionStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue
    const stored = sessionStorage.getItem(key)
    return stored !== null ? JSON.parse(stored) : initialValue
  })

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

// Use case: persist multi-step form data across page navigations
// but clear it when the user closes the tab
function CheckoutFlow() {
  const [step, setStep]         = useSessionStorage('checkout-step', 1)
  const [formData, setFormData] = useSessionStorage('checkout-data', {})
  return <div>Step {step}</div>
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 4 ── */}
          <FixCard
            number="4"
            title="URL State — Shareable and Bookmark-Friendly"
            time="2 min"
            tag="For filters, search, pagination"
          >
            <CodeBlock title="components/ProductFilter.jsx">{`'use client'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export default function ProductFilter() {
  const router       = useRouter()
  const pathname     = usePathname()
  const searchParams = useSearchParams()

  const category = searchParams.get('category') ?? 'all'
  const page     = Number(searchParams.get('page') ?? '1')

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams)
    params.set(key, value)
    router.push(pathname + '?' + params.toString())
    // URL changes → state persists on refresh AND is shareable
  }

  return (
    <div>
      <select value={category} onChange={e => updateFilter('category', e.target.value)}>
        <option value="all">All</option>
        <option value="shoes">Shoes</option>
      </select>
      <p>Page {page}</p>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 5 ── */}
          <FixCard
            number="5"
            title="Zustand With Persist Middleware"
            time="3 min"
            tag="Production state management — automatic persistence"
          >
            <CodeBlock title="terminal">{"npm install zustand"}</CodeBlock>
            <CodeBlock title="stores/useCartStore.js">{`import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem:    (item) => set(s => ({ items: [...s.items, item] })),
      removeItem: (id)   => set(s => ({ items: s.items.filter(i => i.id !== id) })),
      clearCart:  ()     => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price, 0),
    }),
    {
      name: 'cart-storage',                        // localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
)

// Usage in any component — automatically persists to localStorage
function CartButton() {
  const { items, addItem } = useCartStore()
  return <button onClick={() => addItem(product)}>Cart ({items.length})</button>
}`}</CodeBlock>
          </FixCard>

          {/* ── Which storage ── */}
          <SH id="which">Which Storage to Use</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Use case
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Best option
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Theme, language, display preferences", "localStorage"],
                  [
                    "Multi-step form data (discard on tab close)",
                    "sessionStorage",
                  ],
                  ["Search filters, pagination (shareable link)", "URL params"],
                  [
                    "Shopping cart, auth token (simple)",
                    "localStorage or Zustand persist",
                  ],
                  [
                    "User data (across devices/browsers)",
                    "Database (API call)",
                  ],
                  ["Auth session", "httpOnly cookie (via server)"],
                ].map(([u, b]) => (
                  <tr key={u} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 text-gray-700 text-sm">{u}</td>
                    <td className="px-5 py-3 font-semibold text-indigo-700 text-sm">
                      {b}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── FAQ ── */}
          <SH id="faq">Frequently Asked Questions</SH>
          <FAQBlock items={FAQS} />

          {/* ── Related ── */}
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React too many re-renders",
                // ✅ FIX: relative paths corrected to absolute hrefs
                href: "/category/react-js/error/react-too-many-re-renders",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React context not updating",
                href: "/category/react-js/error/react-context-not-updating",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: React hooks only in function component error",
                href: "/category/react-js/error/react-hooks-only-in-function-component",
                time: "7 min read",
              },
            ]}
          />

          <CTA
            title="We Build Production-Grade React Apps"
            desc="Softplix builds full-stack React and Next.js applications. Need help with state management or persistence architecture? We can help."
          />
        </div>
      </main>
    </>
  );
}
