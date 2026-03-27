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
  title: "React useState Not Updating Immediately — Fixed [2026]",
  description:
    "Fix React useState not updating immediately. Understand state batching, stale closures, functional updates, and when to use useRef instead of useState.",
  keywords:
    "react usestate not updating, react state not updating immediately fix, react setstate not working 2026, react state update async fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/react-usestate-not-updating",
  },
  openGraph: {
    title: "React useState Not Updating Immediately — Fixed [2026]",
    description:
      "Fix React useState not updating — batching, closures, functional updates.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/react-usestate-not-updating",
  },
};

const TOC5 = [
  { label: "Why useState does not update immediately", href: "#why" },
  { label: "Fix 1 — Never read state right after setting it", href: "#fix-1" },
  { label: "Fix 2 — Functional update for derived state", href: "#fix-2" },
  { label: "Fix 3 — Fix stale closures in useEffect", href: "#fix-3" },
  { label: "Fix 4 — Object and array state updates", href: "#fix-4" },
  {
    label: "Fix 5 — Use useRef for values that don't trigger renders",
    href: "#fix-5",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS5 = [
  {
    q: "Why is useState not updating immediately in React?",
    a: "useState updates are asynchronous and batched. When you call setState, React schedules a re-render but does not update the variable immediately. The new value is only available in the next render. To read state after setting it, use useEffect with the state variable as a dependency.",
  },
  {
    q: "How do I get the updated state value right after setState?",
    a: "You cannot read state immediately after setting it in the same event handler. Use useEffect with the state as a dependency to react to changes: useEffect(() => { console.log('New value:', count) }, [count])",
  },
  {
    q: "React state update not working in async function — why?",
    a: "State updates work the same in async functions. The issue is usually a stale closure — the async function captured the old state value when it was created. Use the functional update form: setState(prev => prev + 1) instead of setState(state + 1).",
  },
  {
    q: "How do I update an object in useState?",
    a: "Always spread the existing state: setUser(prev => ({ ...prev, name: 'John' })). Never mutate the object directly — React uses reference equality to detect changes, and mutating the object without creating a new one will not trigger a re-render.",
  },
  {
    q: "What is a stale closure in React?",
    a: "A stale closure is when a function (like a useEffect callback or event handler) captures a state variable from a previous render. When that function runs, it uses the old value. Fix by adding the variable to the useEffect dependency array, or use the functional update form of setState.",
  },
  {
    q: "When should I use useRef instead of useState?",
    a: "Use useRef when you need to store a value that: 1) should not trigger a re-render when it changes, 2) needs to be read synchronously inside event handlers, or 3) persists across renders (like a DOM ref or a timer ID). Common examples: scroll position, previous values, interval IDs.",
  },
];

function A5Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React useState Not Updating Immediately — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/react-usestate-not-updating",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A5FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS5.map(({ q, a }) => ({
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
      <A5Schema />
      <A5FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["React", "Next.js", "Error Fix"]}
            title={"React useState Not Updating Immediately"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: stale closures · state batching · object state not updating"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18 · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Key Rule — State Updates Are Async"}
            </p>
            <CodeBlock title="component.jsx">{`const [count, setCount] = useState(0)

// ❌ WRONG — count is still 0 here, not 1
setCount(count + 1)
console.log(count)  // prints 0

// ✅ CORRECT — read new value in useEffect
useEffect(() => {
  console.log('Updated count:', count)  // prints 1 after re-render
}, [count])`}</CodeBlock>
          </div>

          <TOCBlock items={TOC5} />

          <SH id="why">{"Why useState Does Not Update Immediately"}</SH>
          <P>
            {"React state updates are "}
            <strong>{"asynchronous"}</strong>
            {" and "}
            <strong>{"batched"}</strong>
            {". When you call "}
            <IC>{"setState"}</IC>
            {
              ", React schedules a re-render for the next tick. The state variable in your current render is immutable — it will always hold the value from when that render started. The new value is only available in the next render cycle."
            }
          </P>

          <FixCard
            number="1"
            title="Never Read State Right After Setting It"
            time="2 min"
            tag="The most common mistake"
          >
            <CodeBlock title="Counter.jsx">{`import { useState, useEffect } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)

    // ❌ WRONG — still reads old value
    console.log(count)   // 0, not 1

    // ✅ CORRECT — use a local variable if you need the new value now
    const newCount = count + 1
    setCount(newCount)
    console.log(newCount)   // 1
  }

  // ✅ CORRECT — react to state changes with useEffect
  useEffect(() => {
    console.log('Count changed to:', count)
  }, [count])

  return <button onClick={handleClick}>Count: {count}</button>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Functional Update for Derived State"
            time="2 min"
            tag="Stale state in event handlers and async code"
          >
            <P>
              {
                "When new state depends on old state — especially in async code — always use the functional update form to get the latest value."
              }
            </P>
            <CodeBlock title="component.jsx">{`// ❌ WRONG — count may be stale in async handlers
async function handleAsyncOperation() {
  await doSomething()
  setCount(count + 1)   // 'count' is from when the handler was created
}

// ✅ CORRECT — functional update always gets latest state
async function handleAsyncOperation() {
  await doSomething()
  setCount(prev => prev + 1)  // 'prev' is always the latest value
}

// ✅ Also correct for multiple updates in one handler
function handleTripleClick() {
  // ❌ This only increments once — all three reads see count=0
  setCount(count + 1)
  setCount(count + 1)
  setCount(count + 1)

  // ✅ This increments three times
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
  setCount(prev => prev + 1)
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Stale Closures in useEffect"
            time="3 min"
            tag="useEffect reading old state value"
          >
            <CodeBlock title="Timer.jsx">{`import { useState, useEffect, useRef } from 'react'

// ❌ WRONG — stale closure: count is always 0 inside the interval
function BadTimer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1)  // 'count' captured as 0 at effect creation
    }, 1000)
    return () => clearInterval(id)
  }, [])  // ← missing count in deps → stale closure
}

// ✅ CORRECT — functional update avoids stale closure
function GoodTimer() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setCount(prev => prev + 1)  // always gets latest value
    }, 1000)
    return () => clearInterval(id)
  }, [])  // no deps needed with functional update
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Object and Array State Updates"
            time="2 min"
            tag="State object not updating — must spread"
          >
            <CodeBlock title="Form.jsx">{`// ❌ WRONG — mutating object does not trigger re-render
const [user, setUser] = useState({ name: '', email: '' })
user.name = 'John'   // React cannot detect this mutation
setUser(user)        // same reference → no re-render

// ✅ CORRECT — create a new object with spread
setUser(prev => ({ ...prev, name: 'John' }))

// ✅ Array state — always create new array
const [items, setItems] = useState([])
setItems(prev => [...prev, newItem])            // add
setItems(prev => prev.filter(i => i.id !== id)) // remove
setItems(prev => prev.map(i => i.id === id ? { ...i, done: true } : i)) // update`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use useRef for Values That Don't Need Re-render"
            time="2 min"
            tag="Value changes but component should not re-render"
          >
            <CodeBlock title="StopWatch.jsx">{`import { useState, useRef } from 'react'

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0)
  const intervalRef = useRef(null)  // ← ref for the interval ID

  function start() {
    // useRef — not useState — because changing it should not re-render
    intervalRef.current = setInterval(() => {
      setElapsed(prev => prev + 1)
    }, 1000)
  }

  function stop() {
    clearInterval(intervalRef.current)  // read synchronously — always current
  }

  return (
    <div>
      <p>{elapsed}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Never read state immediately after setting it in the same handler",
              "Use functional updates (prev => prev + 1) whenever new state depends on old state",
              "Add all state variables read inside useEffect to the dependency array",
              "Spread objects and arrays when updating: setUser(prev => ({ ...prev, name }))",
              "Use useRef for values that change but should not trigger re-renders",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS5} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: useEffect running twice React 18",
                href: "react-useeffect-running-twice",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js hydration failed",
                href: "nextjs-hydration-failed",
                time: "7 min read",
              },
              {
                tag: "React",
                title: "Fix: React component not re-rendering",
                href: "react-component-not-rerendering",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade Next.js Apps"}
            desc={
              "Softplix builds full-stack applications. Dealing with complex React state management? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
