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
  title: "React Context Not Updating — Fixed [2026]",
  description:
    "Fix React context not updating in consumers. Covers missing Provider, wrong context value, memoization, mutation mistakes, and building a complete working context pattern.",
  keywords:
    "react context not updating fix, usecontext not working 2026, react context value not changing, context provider not re-rendering consumers",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-context-not-updating",
  },
  openGraph: {
    title: "React Context Not Updating — Fixed [2026]",
    description:
      "Fix React context not updating — Provider, value memoization, mutation, re-render.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-context-not-updating",
  },
};

const TOC = [
  { label: "Why context does not update consumers", href: "#why" },
  { label: "Fix 1 — Wrap consumers inside the Provider", href: "#fix-1" },
  { label: "Fix 2 — Pass state (not plain object) as value", href: "#fix-2" },
  { label: "Fix 3 — Never mutate the context value directly", href: "#fix-3" },
  { label: "Fix 4 — Memoize context value with useMemo", href: "#fix-4" },
  {
    label: "Fix 5 — One createContext() per context — no duplicates",
    href: "#fix-5",
  },
  { label: "Complete working context pattern", href: "#complete" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is React context not updating consumers?",
    a: "Context consumers only re-render when the context value reference changes. The three most common causes: 1) The consumer is not inside the Provider in the component tree, 2) You are mutating the context object instead of replacing it with setState, 3) A value object literal is created fresh every render but its contents did not change — use useMemo to stabilise.",
  },
  {
    q: "useContext returns undefined — how to fix?",
    a: "The component calling useContext is not wrapped inside the matching Provider. Move the Provider higher in the tree so it is an ancestor of all components that need the context. Also verify you are importing the same context object in both the Provider file and consumer files.",
  },
  {
    q: "Context updates but component does not re-render?",
    a: "React compares context value by reference. If you write <MyCtx.Provider value={{ count, setCount }}> directly, it creates a new object on every render but React may optimise away the update if contents appear the same. Use useMemo: const value = useMemo(() => ({ count, setCount }), [count]).",
  },
  {
    q: "How do I update context from a child component?",
    a: "Include the state setter in the context value: const [user, setUser] = useState(null); return <UserCtx.Provider value={{ user, setUser }}>{children}</UserCtx.Provider>. Children call setUser from useContext to update the shared state.",
  },
  {
    q: "Should I use React Context or Zustand/Redux for state?",
    a: "Context is best for low-frequency updates — theme, locale, auth session. For high-frequency updates (form inputs, real-time data), use Zustand, Jotai, or Redux Toolkit. Every context update re-renders all consumers, which can cause performance problems at high frequency.",
  },
  {
    q: "Can I have multiple Providers?",
    a: "Yes. You can nest multiple Providers for different concerns: <ThemeProvider><AuthProvider><LanguageProvider>{children}</LanguageProvider></AuthProvider></ThemeProvider>. Each context is independent. Components use only the context they need.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Context Not Updating — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-context-not-updating",
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
            tags={["React", "Error Fix"]}
            title={"React Context Not Updating"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: useContext returns undefined · context value not changing · memo blocking updates"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"React 18 · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Complete Working Context Pattern"}
            </p>
            <CodeBlock title="context/ThemeContext.jsx">{`import { createContext, useContext, useState, useMemo } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const value = useMemo(() => ({ theme, setTheme }), [theme])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be inside ThemeProvider')
  return ctx
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Context Does Not Update Consumers"}</SH>
          <P>
            {"React context triggers re-renders in consumers only when the "}
            <IC>{"value"}</IC>
            {
              " prop on the Provider changes by reference. Same reference = no re-render. Most context problems are caused by wrong tree structure, mutating state directly, or unstable value references."
            }
          </P>

          <FixCard
            number="1"
            title="Wrap Consumers Inside the Provider"
            time="1 min"
            tag="useContext returns undefined — component outside tree"
          >
            <CodeBlock title="app.jsx">{`// ❌ WRONG — UserProfile is outside the Provider
function App() {
  return (
    <div>
      <UserProfile />        {/* cannot access context — undefined! */}
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </div>
  )
}

// ✅ CORRECT — Provider wraps all consumers
function App() {
  return (
    <UserProvider>
      <UserProfile />        {/* ✅ has access */}
      <Dashboard />          {/* ✅ has access */}
    </UserProvider>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Pass State (Not Plain Object) as Value"
            time="2 min"
            tag="Context never updates — static value"
          >
            <CodeBlock title="context/CounterContext.jsx">{`import { createContext, useContext, useState } from 'react'

const CounterContext = createContext(null)

// ❌ WRONG — static object, never changes
export function CounterProvider({ children }) {
  const count = 0
  return <CounterContext.Provider value={{ count }}>{children}</CounterContext.Provider>
}

// ✅ CORRECT — useState triggers re-renders when count changes
export function CounterProvider({ children }) {
  const [count, setCount] = useState(0)
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  )
}

// Consumers
function CounterDisplay() {
  const { count } = useContext(CounterContext)
  return <p>{count}</p>  // re-renders when count changes
}

function IncrementButton() {
  const { setCount } = useContext(CounterContext)
  return <button onClick={() => setCount(c => c + 1)}>+1</button>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Never Mutate the Context Value Directly"
            time="2 min"
            tag="Mutation does not trigger re-render"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — mutation does not change reference → no re-render
const { user } = useContext(UserContext)
user.name = 'John'   // mutates the object — React does not see this

// ✅ CORRECT — replace via setter function from context
const { user, setUser } = useContext(UserContext)
setUser(prev => ({ ...prev, name: 'John' }))  // new object → re-render

// ✅ In the Provider — always use setState for updates
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Guest', role: 'viewer' })
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Memoize Context Value With useMemo"
            time="2 min"
            tag="Prevent unnecessary consumer re-renders"
          >
            <P>
              {
                "Without memoization, a new value object is created on every parent render, causing all consumers to re-render even if the context data has not changed."
              }
            </P>
            <CodeBlock title="context/AuthContext.jsx">{`import { createContext, useState, useMemo } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // ❌ Without useMemo — new object every render → all consumers re-render
  // return <AuthContext.Provider value={{ user, setUser, loading }}>

  // ✅ With useMemo — only re-renders consumers when user or loading changes
  const value = useMemo(
    () => ({ user, setUser, loading }),
    [user, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="One createContext() Per Context — No Duplicates"
            time="1 min"
            tag="Two different context objects — import mismatch"
          >
            <CodeBlock title="context/UserContext.js">{`// ❌ WRONG — createContext() in two files creates two DIFFERENT contexts
// fileA.js: export const UserCtx = createContext(null)
// fileB.js: export const UserCtx = createContext(null)  ← different object!
// Provider uses fileA, consumer imports fileB → never connected

// ✅ CORRECT — one file, one createContext(), export everywhere
// context/UserContext.js
export const UserContext = createContext(null)

// Provider file imports from context/UserContext.js
// Consumer files import from context/UserContext.js
// All use the SAME context object`}</CodeBlock>
          </FixCard>

          <SH id="complete">{"Complete Working Context Pattern"}</SH>
          <CodeBlock title="context/AppContext.jsx">{`import { createContext, useContext, useState, useCallback, useMemo } from 'react'

// 1. Create context
const AppContext = createContext(null)

// 2. Provider — owns the state
export function AppProvider({ children }) {
  const [user, setUser]     = useState(null)
  const [theme, setTheme]   = useState('light')

  const login  = useCallback((userData) => setUser(userData), [])
  const logout = useCallback(() => setUser(null), [])
  const toggleTheme = useCallback(() => setTheme(t => t === 'light' ? 'dark' : 'light'), [])

  const value = useMemo(
    () => ({ user, theme, login, logout, toggleTheme }),
    [user, theme, login, logout, toggleTheme]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// 3. Custom hook with guard
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}

// 4. Usage
function NavBar() {
  const { user, logout, toggleTheme } = useApp()
  return (
    <nav>
      <span>{user?.name ?? 'Guest'}</span>
      <button onClick={toggleTheme}>Toggle Theme</button>
      {user && <button onClick={logout}>Logout</button>}
    </nav>
  )
}`}</CodeBlock>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Provider must be an ancestor of all consumers in the component tree",
              "Always use useState or useReducer inside the Provider — never plain objects",
              "Use useMemo on context value to prevent unnecessary consumer re-renders",
              "Call createContext() once per context, export from one file",
              "Create a custom hook (useAuth, useTheme) that throws if used outside Provider",
              "Never mutate context values — always use the setter function",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: Too many re-renders React",
                href: "react-too-many-re-renders",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React component not re-rendering",
                href: "react-component-not-rerendering",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React useref not working",
                href: "react-useref-not-working",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade React Apps"}
            desc={
              "Softplix builds full-stack React and Next.js applications. Need help with state management or context architecture? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
