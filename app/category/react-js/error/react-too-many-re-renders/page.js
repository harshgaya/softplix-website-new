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

const TOC4 = [
  { label: "What causes too many re-renders?", href: "#what" },
  { label: "Fix 1 — setState called directly in render", href: "#fix-1" },
  {
    label: "Fix 2 — Calling event handler instead of passing it",
    href: "#fix-2",
  },
  { label: "Fix 3 — Infinite useEffect loop", href: "#fix-3" },
  { label: "Fix 4 — Object/array in dependency array", href: "#fix-4" },
  {
    label: "Fix 5 — useMemo and useCallback to prevent re-renders",
    href: "#fix-5",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS4 = [
  {
    q: "What causes 'too many re-renders' in React?",
    a: "React throws this error when a component re-renders more than the allowed limit (currently 25). The most common causes: calling setState directly during render (not inside an event handler or effect), calling an event handler function in JSX instead of passing it, or a useEffect that updates state in its dependency array causing infinite loops.",
  },
  {
    q: "How do I fix 'Maximum update depth exceeded' in React?",
    a: "Find where setState is being called on every render. Check: 1) Is setState called directly in the component body (not in useEffect or event handler)? 2) Are you writing onClick={handleClick()} instead of onClick={handleClick}? 3) Does your useEffect update a state that is in its own dependency array?",
  },
  {
    q: "useEffect causing infinite loop — how to fix?",
    a: "Your useEffect's dependency array includes a value that the effect itself changes. Solution: remove the state variable from the dependency array if the effect does not need to re-run when it changes, or use a ref instead, or restructure the effect to not update the dependency.",
  },
  {
    q: "Object in useEffect dependency array causing infinite loop?",
    a: "Objects and arrays are compared by reference in JavaScript. A new object literal {} is never equal to another {} even with the same contents. Memoize with useMemo: const config = useMemo(() => ({ key: value }), [value]). Or extract the specific primitive values from the object as dependencies.",
  },
  {
    q: "How do I stop a child component from causing re-renders?",
    a: "Wrap the child component in React.memo: export default React.memo(ChildComponent). This prevents re-renders when parent re-renders but props have not changed. Also wrap callback props in useCallback to preserve reference equality.",
  },
  {
    q: "React.memo not preventing re-renders — why?",
    a: "React.memo does a shallow comparison. If you pass objects, arrays, or functions as props, they are new references on each parent render. Memoize them: wrap function props with useCallback, wrap object/array props with useMemo, or move them outside the component if they are static.",
  },
];

/* ── Structured Data ─────────────────────────────────────────────────────── */

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Too Many Re-renders React — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-too-many-re-renders",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // ✅ FIX: arrow function was missing `>` — was `=>({` written as `=({`
    mainEntity: FAQS4.map(({ q, a }) => ({
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

/* ── Next.js Metadata ────────────────────────────────────────────────────── */

export const metadata = {
  title: "Too Many Re-renders React — Fixed [Complete Guide 2026]",
  description:
    "Fix Too many re-renders React error. Covers setState in render, infinite useEffect loops, event handler mistakes, and memoization with useMemo and useCallback.",
  keywords:
    "too many re-renders react fix, react too many re-renders error 2026, react infinite loop fix, react maximum update depth exceeded",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-too-many-re-renders",
  },
  openGraph: {
    title: "Too Many Re-renders React — Fixed [Complete Guide 2026]",
    description:
      "Fix Too many re-renders in React — setState in render, infinite loops, memoization.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-too-many-re-renders",
  },
};

/* ── Page Component ──────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["React", "Error Fix"]}
            title="Too Many Re-renders React"
            subtitle="— Fixed [Complete Guide 2026]"
            sub="Also covers: Maximum update depth exceeded · infinite loop · useEffect loop"
            date="January 2026"
            read="6 min read"
            tech="React 18 · Next.js"
          />

          {/* Quick-glance summary */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              ⚡ Two Most Common Causes
            </p>
            <CodeBlock title="component.jsx">{`// ❌ Cause 1 — calling function instead of passing it
<button onClick={handleClick()}>  // called on render!
<button onClick={handleClick}>    // ✅ passed as reference

// ❌ Cause 2 — setState in render body
function Component() {
  const [n, setN] = useState(0)
  setN(n + 1)  // infinite loop!
  return <div>{n}</div>
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC4} />

          {/* ── What causes it ── */}
          <SH id="what">What Causes Too Many Re-renders?</SH>
          <ErrorBlock>{`Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
    at renderWithHooks (react-dom.development.js:14985)

# or:
Error: Maximum update depth exceeded. This can happen when a component
calls setState inside useEffect, but useEffect either doesn't have a
dependency array, or one of the dependencies changes on every render.`}</ErrorBlock>
          <P>
            React caps re-renders at 25 per cycle. When this limit is hit, it
            means state is being updated on every render — creating a loop. The
            error message tells you the component but not the exact cause — you
            need to find the state update that fires unconditionally.
          </P>

          {/* ── Fix 1 ── */}
          <FixCard
            number="1"
            title="setState Called Directly in Render"
            time="1 min"
            tag="State updated unconditionally in component body"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — setState in render body = infinite loop
function Counter() {
  const [count, setCount] = useState(0)
  setCount(count + 1)   // runs on every render → triggers another render
  return <div>{count}</div>
}

// ✅ CORRECT — setState only in event handler
function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}

// ✅ CORRECT — setState in useEffect with condition
function Counter({ initialValue }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setCount(initialValue)  // runs once on mount
  }, [])   // empty deps = run once
  return <div>{count}</div>
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 2 ── */}
          <FixCard
            number="2"
            title="Calling Event Handler Instead of Passing It"
            time="1 min"
            tag="onClick={fn()} instead of onClick={fn}"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — () calls the function immediately during render
<button onClick={handleClick()}>Click</button>
<input onChange={handleChange()} />

// ✅ CORRECT — pass the function reference, don't call it
<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />

// ✅ If you need to pass arguments — use arrow function wrapper
<button onClick={() => handleDelete(item.id)}>Delete</button>
<input onChange={(e) => handleChange(e.target.value)} />`}</CodeBlock>
          </FixCard>

          {/* ── Fix 3 ── */}
          <FixCard
            number="3"
            title="Infinite useEffect Loop"
            time="3 min"
            tag="useEffect updating its own dependency"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — data is in deps, effect sets data → infinite loop
const [data, setData] = useState([])
useEffect(() => {
  fetchData().then(result => setData(result))
}, [data])   // ← data changes → effect runs → sets data → repeat

// ✅ CORRECT — empty deps, run once on mount
useEffect(() => {
  fetchData().then(result => setData(result))
}, [])

// ✅ CORRECT — depend on ID, not the data itself
useEffect(() => {
  fetchData(userId).then(result => setData(result))
}, [userId])  // re-run only when userId changes`}</CodeBlock>
            <TipBox>
              A safe rule: never put a state variable in a useEffect dependency
              array if that same effect sets that state. The effect will always
              cause a re-run.
            </TipBox>
          </FixCard>

          {/* ── Fix 4 ── */}
          <FixCard
            number="4"
            title="Object/Array in Dependency Array"
            time="3 min"
            tag="New object reference on every render"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — {} creates new reference every render
const options = { page: 1, limit: 10 }  // new object each render!
useEffect(() => { fetchData(options) }, [options])  // infinite loop

// ✅ CORRECT — useMemo stabilises the reference
const options = useMemo(() => ({ page: 1, limit: 10 }), [])

// ✅ CORRECT — use primitive values as deps instead
useEffect(() => {
  fetchData({ page, limit })
}, [page, limit])  // primitives compare by value — stable

// ✅ CORRECT — move object outside component if it's static
const OPTIONS = { page: 1, limit: 10 }  // defined once, never changes
function MyComponent() {
  useEffect(() => { fetchData(OPTIONS) }, [])
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 5 ── */}
          <FixCard
            number="5"
            title="useMemo and useCallback to Prevent Re-renders"
            time="3 min"
            tag="Memoize expensive computations and stable callbacks"
          >
            <CodeBlock title="ParentComponent.jsx">{`import { useState, useMemo, useCallback, memo } from 'react'

const ChildList = memo(function ChildList({ items, onDelete }) {
  console.log('ChildList rendered')
  return (
    <ul>
      {items.map(i => (
        <li key={i.id}>
          <button onClick={() => onDelete(i.id)}>Delete</button>
        </li>
      ))}
    </ul>
  )
})

export default function ParentComponent() {
  const [items, setItems] = useState([...])
  const [filter, setFilter] = useState('')

  // ✅ useMemo — only recalculates when items or filter changes
  const filteredItems = useMemo(
    () => items.filter(i => i.name.includes(filter)),
    [items, filter]
  )

  // ✅ useCallback — stable reference, won't cause child re-render
  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(i => i.id !== id))
  }, [])  // no deps — setItems is stable

  return <ChildList items={filteredItems} onDelete={handleDelete} />
}`}</CodeBlock>
          </FixCard>

          {/* ── Prevention ── */}
          <SH id="prevention">Prevention</SH>
          <CL
            items={[
              "Never call setState unconditionally in the component render body",
              "Pass event handlers as references: onClick={fn} not onClick={fn()}",
              "Be specific with useEffect deps — primitives over objects",
              "Stabilise objects with useMemo before using them as useEffect deps",
              "Use React.memo + useCallback to prevent unnecessary child re-renders",
              "Add React DevTools Profiler to spot which component is re-rendering frequently",
            ]}
          />

          {/* ── FAQ ── */}
          <SH id="faq">Frequently Asked Questions</SH>
          <FAQBlock items={FAQS4} />

          {/* ── Related ── */}
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React context not updating",
                // ✅ FIX: relative paths corrected to absolute hrefs
                href: "/category/react-js/error/react-context-not-updating",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: react fetch data on page load",
                href: "/category/react-js/error/react-fetch-data-on-page-load",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React component not re-rendering",
                href: "/category/react-js/error/react-component-not-rerendering",
                time: "5 min read",
              },
            ]}
          />

          <CTA
            title="We Build Production-Grade React Apps"
            desc="Softplix builds full-stack React and Next.js applications. Dealing with performance or rendering issues? We can help."
          />
        </div>
      </main>
    </>
  );
}
