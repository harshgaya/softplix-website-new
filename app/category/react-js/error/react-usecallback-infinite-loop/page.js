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
  title: "React useCallback Causing Infinite Loop — Fixed [2026]",
  description:
    "Fix React useCallback causing infinite re-render loops. Covers useEffect + useCallback dependency cycles, function as useEffect dep, setState in callbacks, and useReducer as the escape hatch.",
  keywords:
    "react useCallback infinite loop, useCallback useEffect infinite re-render, react useCallback dependency cycle 2026, function as useEffect dependency infinite loop, react useReducer instead of useState useCallback",
  alternates: {
    canonical:
      "https://softplix.com/category/react/error/react-usecallback-infinite-loop",
  },
  openGraph: {
    title: "React useCallback Infinite Loop — Fixed [2026]",
    description:
      "Fix React useCallback infinite loops — useEffect cycles, setState in callbacks, useReducer.",
    type: "article",
    url: "https://softplix.com/category/react/error/react-usecallback-infinite-loop",
  },
};

const TOC = [
  { label: "Why useCallback causes infinite re-render loops", href: "#why" },
  { label: "Fix 1 — Remove the callback from useEffect deps", href: "#fix-1" },
  {
    label: "Fix 2 — Use the functional updater form of setState",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — Use useReducer to break callback-state cycles",
    href: "#fix-3",
  },
  {
    label: "Fix 4 — Use useRef to access latest value without adding deps",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Stabilise callbacks passed as props to child effects",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does useCallback cause an infinite loop with useEffect?",
    a: "The cycle is: useCallback depends on state → state changes → new callback reference → useEffect sees new dep → runs effect → updates state → new callback → repeat. The fix is to break one link in the chain: either remove the callback from useEffect deps, use the functional updater form of setState, or use useReducer.",
  },
  {
    q: "Should I wrap every function with useCallback?",
    a: "No. useCallback is only useful when: the function is passed as a prop to a React.memo child, or the function is a dependency of useEffect/useMemo and you need a stable reference. For event handlers that are not deps or props to memo'd children, useCallback adds overhead without benefit.",
  },
  {
    q: "What is the functional updater form of setState?",
    a: "Instead of setState(state + 1) which requires state as a dependency, use setState(prev => prev + 1). The functional form receives the previous state as an argument, so you don't need to close over state in the callback. This removes state from the dependency array and breaks infinite loops.",
  },
  {
    q: "When should I use useReducer instead of useState with useCallback?",
    a: "Use useReducer when your callback needs to read and update state, causing dependency cycles. useReducer's dispatch function is stable (never changes reference), so you can always include it in dependency arrays without triggering re-renders. This is the canonical escape hatch for complex callback-state interactions.",
  },
  {
    q: "Can I use useRef to avoid adding a dep to useCallback?",
    a: "Yes — this is called the useRef event handler pattern or ref callback pattern. Store the latest version of a function in a ref, then call ref.current() inside your stable callback. The stable callback never changes reference, while always calling the latest version of the function.",
  },
  {
    q: "What is the difference between useCallback and useMemo for functions?",
    a: "useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). Both memoize a value between renders. useCallback is syntactic sugar for the common case of memoizing a function. Use useCallback for functions, useMemo for computed values.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React useCallback Causing Infinite Loop — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react/error/react-usecallback-infinite-loop",
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
            tags={["React", "Hooks", "Error Fix"]}
            title={"React useCallback Causing Infinite Loop"}
            subtitle={"— Re-render Cycle Fixed [2026]"}
            sub={
              "Also covers: useEffect dependency cycle · functional setState · useReducer escape hatch · useRef stable callback pattern"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"React 18/19 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Infinite Loop"}
            </p>
            <ErrorBlock>{`// Infinite re-render cycle:
// count changes → new fetchData ref → useEffect runs → setCount → repeat

const fetchData = useCallback(async () => {
  const data = await api.get(\`/items?page=\${count}\`)
  setCount(c => c + 1)    // updates count
}, [count])               // depends on count

useEffect(() => {
  fetchData()             // runs when fetchData changes
}, [fetchData])           // fetchData changes every render → infinite loop`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ The cycle: state → callback → effect → state"}
            </p>
            <CodeBlock title="Break the cycle — 3 approaches">{`// Option 1: remove callback from effect deps (if safe)
// Option 2: use setState(prev => ...) to avoid closing over state
// Option 3: use useReducer — dispatch is always stable`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why useCallback Causes Infinite Re-render Loops"}</SH>
          <P>
            {"The infinite loop has a four-step cycle. Step 1: your "}
            <IC>{"useCallback"}</IC>
            {
              " depends on state. Step 2: when state updates, a new function reference is created. Step 3: "
            }
            <IC>{"useEffect"}</IC>
            {
              " sees the new function reference as a changed dep and runs. Step 4: the effect updates state, restarting the cycle."
            }
          </P>
          <P>
            {
              "The fix is to break one link in the chain. You have three reliable options: remove the callback from the effect's deps, use setState's functional updater form to avoid closing over state, or use "
            }
            <IC>{"useReducer"}</IC>
            {" whose "}
            <IC>{"dispatch"}</IC>
            {" is always stable."}
          </P>

          <FixCard
            number="1"
            title="Remove the Callback from useEffect Deps"
            time="2 min"
            tag="Quickest fix — when the callback itself never changes logic"
          >
            <P>
              {
                "If the callback is defined inside the component but its logic doesn't actually change between renders, you can safely omit it from the effect's dependency array. Disable the ESLint warning with a comment and document why."
              }
            </P>
            <CodeBlock title="Remove stable callback from effect deps">{`function DataFetcher({ userId }: { userId: string }) {
  const [data, setData] = useState(null)

  // This callback only needs to run when userId changes
  const fetchUserData = useCallback(async () => {
    const result = await api.get(\`/users/\${userId}\`)
    setData(result)
  }, [userId])  // only depends on userId — stable between userId changes

  useEffect(() => {
    fetchUserData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // fetchUserData is stable while userId is the same — safe to omit
  }, [userId])  // ✅ use the primitive dep directly instead of the function

  return <div>{data?.name}</div>
}

// Even simpler — skip useCallback entirely and inline the fetch:
useEffect(() => {
  async function load() {
    const result = await api.get(\`/users/\${userId}\`)
    setData(result)
  }
  load()
}, [userId])  // ✅ no callback reference — just the primitive dep`}</CodeBlock>
            <TipBox>
              {
                "Defining the async function inside useEffect and calling it immediately is the cleanest pattern. It avoids both useCallback and the dep cycle."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Use the Functional Updater Form of setState"
            time="2 min"
            tag="Callback reads state to produce next state"
          >
            <P>
              {
                "If your callback reads state only to compute the next state value, use "
              }
              <IC>{"setState(prev => nextValue)"}</IC>
              {
                "  . The functional form receives the previous state as an argument — no need to close over state in the callback, no need to include state in deps."
              }
            </P>
            <CodeBlock title="Functional updater removes state from callback deps">{`// ❌ Closes over count — count must be in deps → cycle
const increment = useCallback(() => {
  setCount(count + 1)   // reads count from closure
}, [count])             // count dep → new ref every render

// ✅ Functional updater — no need to close over count
const increment = useCallback(() => {
  setCount(prev => prev + 1)  // gets prev from React — count not needed in closure
}, [])                         // stable empty deps — no cycle

// ✅ Same pattern for complex state
const addItem = useCallback((item: Item) => {
  setItems(prev => [...prev, item])  // prev provided by React
}, [])  // stable — no items dep needed

// ✅ Pattern for toggling
const toggleOpen = useCallback(() => {
  setIsOpen(prev => !prev)
}, [])`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use useReducer to Break Callback-State Cycles"
            time="5 min"
            tag="Complex state interactions — the canonical escape hatch"
          >
            <P>
              {"useReducer's "}
              <IC>{"dispatch"}</IC>
              {
                " function is always referentially stable — it never changes between renders. Replace state + setState with useReducer to get a stable action dispatcher that you can safely put in any dependency array."
              }
            </P>
            <CodeBlock title="useReducer — stable dispatch breaks the cycle">{`import { useReducer, useCallback, useEffect } from "react"

type State = { count: number; data: any[]; loading: boolean }
type Action =
  | { type: "INCREMENT" }
  | { type: "SET_DATA"; payload: any[] }
  | { type: "SET_LOADING"; payload: boolean }

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 }
    case "SET_DATA":
      return { ...state, data: action.payload, loading: false }
    case "SET_LOADING":
      return { ...state, loading: action.payload }
    default:
      return state
  }
}

function PaginatedList() {
  const [state, dispatch] = useReducer(reducer, { count: 0, data: [], loading: false })

  // ✅ dispatch is stable — safe in deps, no cycle
  const fetchPage = useCallback(async (page: number) => {
    dispatch({ type: "SET_LOADING", payload: true })
    const data = await api.get(\`/items?page=\${page}\`)
    dispatch({ type: "SET_DATA", payload: data })
  }, [])  // empty deps — dispatch is stable, no state closure

  useEffect(() => {
    fetchPage(state.count)
  }, [fetchPage, state.count])  // safe — fetchPage is stable

  return (
    <div>
      {state.data.map(item => <div key={item.id}>{item.name}</div>)}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Next page</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use useRef to Access Latest Value Without Adding Deps"
            time="3 min"
            tag="Event handlers that need latest state without causing re-render"
          >
            <P>
              {
                "Store the latest version of a callback in a ref. Create a stable callback that reads from the ref. This pattern gives you always-current logic in a never-changing function reference."
              }
            </P>
            <CodeBlock title="useRef stable callback — latest value without dep cycle">{`import { useCallback, useEffect, useRef } from "react"

function useStableCallback<T extends (...args: any[]) => any>(fn: T): T {
  const ref = useRef(fn)

  // Keep the ref current without triggering re-renders
  useEffect(() => {
    ref.current = fn
  })

  // Return a stable callback that delegates to the latest ref
  return useCallback((...args: any[]) => ref.current(...args), []) as T
}

// Usage — the callback is always stable regardless of what it closes over
function SearchBox({ onSearch, filters }: { onSearch: (q: string) => void; filters: object }) {
  // Even though onSearch or filters might change, handleSearch is always stable
  const handleSearch = useStableCallback((query: string) => {
    onSearch(query)
    console.log("Filters at search time:", filters)  // always latest filters
  })

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter") handleSearch((e.target as HTMLInputElement).value)
    }
    window.addEventListener("keypress", handler)
    return () => window.removeEventListener("keypress", handler)
  }, [handleSearch])  // handleSearch is always stable — effect runs once
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Stabilise Callbacks Passed as Props to Child Effects"
            time="3 min"
            tag="Child useEffect runs every render because parent callback changed"
          >
            <P>
              {
                "If a parent passes an unstable callback as a prop to a child that uses it in useEffect, wrap it in useCallback in the parent. If the parent itself doesn't change the logic, use an empty dep array."
              }
            </P>
            <CodeBlock title="Parent → Child callback stability">{`// ❌ Parent creates new function every render
function Parent() {
  const [count, setCount] = useState(0)

  // new reference every render — child effect runs every render
  const onScroll = (y: number) => { console.log("scroll", y, count) }

  return <ScrollTracker onScroll={onScroll} />
}

// ✅ Stabilise with useCallback
function Parent() {
  const [count, setCount] = useState(0)

  const onScroll = useCallback((y: number) => {
    // use functional updater if you need to read count
    setCount(prev => {
      console.log("scroll at count:", prev, y)
      return prev
    })
  }, [])  // stable — no closure over count needed

  return <ScrollTracker onScroll={onScroll} />
}

// Child — uses onScroll in useEffect
function ScrollTracker({ onScroll }: { onScroll: (y: number) => void }) {
  useEffect(() => {
    const handler = () => onScroll(window.scrollY)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [onScroll])  // only re-attaches when onScroll changes reference
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Define async functions inside useEffect to avoid useCallback+useEffect dep cycles entirely",
              "Use setState(prev => next) instead of setState(state + x) — removes state from callback deps",
              "Use useReducer for complex state — dispatch is always stable, breaks any callback-state cycle",
              "Enable exhaustive-deps ESLint rule — it catches missing deps but not all cycle patterns",
              "Only use useCallback when the function is a dep of useEffect/useMemo or prop of React.memo child",
              "Use the useRef stable callback pattern for event handlers that need always-current values",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React useMemo not working",
                href: "react-usememo-not-working",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React lazy and Suspense not working",
                href: "react-lazy-suspense-not-working",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React forwardRef not working",
                href: "react-forwardref-not-working",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production React Applications"}
            desc={
              "Softplix engineers build React apps with clean hook architecture, performance optimisation, and zero infinite loop bugs. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
