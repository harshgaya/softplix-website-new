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
  title: "React Component Not Re-rendering — Fixed [Complete Guide 2026]",
  description:
    "Fix React component not re-rendering when state or props change. Covers state mutation, same reference comparison, React.memo blocking updates, stale closures, and forced re-renders.",
  keywords:
    "react component not re-rendering fix, react component not updating 2026, react state change not updating ui, react props change no re-render",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-component-not-rerendering",
  },
  openGraph: {
    title: "React Component Not Re-rendering — Fixed [Complete Guide 2026]",
    description:
      "Fix React component not re-rendering — mutation, same reference, React.memo, closures.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-component-not-rerendering",
  },
};

const TOC = [
  { label: "Why React does not re-render", href: "#why" },
  {
    label: "Fix 1 — State mutation — must create new reference",
    href: "#fix-1",
  },
  { label: "Fix 2 — Same primitive value — no re-render", href: "#fix-2" },
  { label: "Fix 3 — React.memo blocking legitimate re-render", href: "#fix-3" },
  {
    label: "Fix 4 — Stale closure — component reads old value",
    href: "#fix-4",
  },
  { label: "Fix 5 — Child not re-rendering when parent does", href: "#fix-5" },
  { label: "Fix 6 — Force re-render with key prop", href: "#fix-6" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is React component not re-rendering when state changes?",
    a: "React uses reference equality to detect changes. If you mutate an object or array directly (item.name = 'new') instead of creating a new one, the reference stays the same and React skips the re-render. Always create a new object/array with spread: setState(prev => ({ ...prev, name: 'new' })).",
  },
  {
    q: "React state changes but UI does not update — how to fix?",
    a: "You are mutating state directly. Find where you write item.property = value or array.push() and replace with: setItems(prev => [...prev, newItem]) or setUser(prev => ({ ...prev, name: newName })). Never mutate state directly.",
  },
  {
    q: "React.memo preventing needed re-render — how to fix?",
    a: "React.memo does shallow comparison. If a parent passes new object/function references on every render, memo sees different props and does re-render. If it is not re-rendering when it should, remove memo, test, then re-add with custom comparison if needed.",
  },
  {
    q: "How do I force a React component to re-render?",
    a: "The cleanest way: change the key prop. When key changes, React unmounts and remounts the component fresh. Or add a forceUpdate state: const [, forceUpdate] = useReducer(x => x + 1, 0); forceUpdate(). Rarely needed — usually means state is structured incorrectly.",
  },
  {
    q: "Child component not re-rendering when parent state changes?",
    a: "By default, children re-render whenever the parent re-renders. If a child is wrapped in React.memo and its props did not change (or appear unchanged due to same primitive values), it will not re-render. Pass the relevant state as a prop to force the child to receive it.",
  },
  {
    q: "Component re-renders but shows old data — stale closure?",
    a: "The component is closing over an old value from a previous render. Fix by adding the variable to the useEffect dependency array, or use the functional update form: setState(prev => prev + 1) instead of setState(count + 1).",
  },
];

/* ── Structured Data ─────────────────────────────────────────────────────── */

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Component Not Re-rendering — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-component-not-rerendering",
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
    // ✅ FIX: escaped quotes \"@type\" replaced with normal string keys in a JS object literal
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
            title="React Component Not Re-rendering"
            subtitle="— Fixed [Complete Guide 2026]"
            sub="Also covers: state changes but UI does not update · mutation bug · stale closure"
            date="January 2026"
            read="6 min read"
            tech="React 18 · Next.js"
          />

          {/* Quick-glance summary */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              ⚡ Most Common Fix — Never Mutate State
            </p>
            <CodeBlock title="component.jsx">{`// ❌ WRONG — mutation, same reference, no re-render
const [user, setUser] = useState({ name: 'Alice' })
user.name = 'Bob'    // mutated in place
setUser(user)        // same object reference → React skips re-render

// ✅ CORRECT — new object reference → React detects change → re-renders
setUser(prev => ({ ...prev, name: 'Bob' }))`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          {/* ── Why React does not re-render ── */}
          <SH id="why">Why React Does Not Re-render</SH>
          <P>
            React uses <strong>reference equality</strong> to decide whether
            state changed. For primitives (string, number, boolean), it compares
            values. For objects and arrays, it compares references — the memory
            address. If the reference is the same, React assumes nothing changed
            and skips the render.
          </P>

          {/* Cause table */}
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Cause
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Why React skips
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    Fix
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Mutating object/array directly",
                    "Same reference",
                    "Spread into new object/array",
                  ],
                  [
                    "Setting same primitive value",
                    "Value unchanged",
                    "Design logic to produce new value",
                  ],
                  [
                    "React.memo with stable props",
                    "No prop change detected",
                    "Pass updated prop or remove memo",
                  ],
                  [
                    "Stale closure",
                    "Component reads old render value",
                    "Fix deps / use functional update",
                  ],
                  [
                    "Child not receiving updated prop",
                    "Parent not passing new value",
                    "Pass state as prop explicitly",
                  ],
                ].map(([c, w, f]) => (
                  <tr key={c} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {c}
                    </td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{w}</td>
                    <td className="px-5 py-3 text-gray-700 text-sm font-medium">
                      {f}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Fix 1 ── */}
          <FixCard
            number="1"
            title="State Mutation — Must Create New Reference"
            time="2 min"
            tag="UI stuck after state update — most common cause"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — all of these mutate without creating new reference
const [items, setItems] = useState([1, 2, 3])
items.push(4)                   // mutation
items[0] = 99                   // mutation
setItems(items)                 // same reference → no re-render

const [user, setUser] = useState({ name: 'Alice', score: 0 })
user.score++                    // mutation
setUser(user)                   // same reference → no re-render

// ✅ CORRECT — always create new reference
setItems(prev => [...prev, 4])                           // add
setItems(prev => prev.filter(i => i !== 2))              // remove
setItems(prev => prev.map(i => i === 1 ? 99 : i))        // update

setUser(prev => ({ ...prev, score: prev.score + 1 }))    // update property
setUser(prev => ({ ...prev, address: { ...prev.address, city: 'NYC' } })) // nested`}</CodeBlock>
          </FixCard>

          {/* ── Fix 2 ── */}
          <FixCard
            number="2"
            title="Same Primitive Value — No Re-render"
            time="1 min"
            tag="setState called but value is unchanged"
          >
            <CodeBlock title="component.jsx">{`// This is correct behaviour — React is being efficient
const [count, setCount] = useState(5)
setCount(5)   // same value → React skips re-render, nothing to update

// ✅ If you need a re-render even with same value (rare), use object
const [, forceUpdate] = useReducer(x => x + 1, 0)
forceUpdate()  // always triggers re-render

// More commonly — rethink why you need a re-render with the same value
// Usually means state structure needs redesigning`}</CodeBlock>
          </FixCard>

          {/* ── Fix 3 ── */}
          <FixCard
            number="3"
            title="React.memo Blocking Legitimate Re-render"
            time="2 min"
            tag="Memoized component not updating"
          >
            <CodeBlock title="component.jsx">{`// React.memo does shallow comparison
// Object and function props are NEW references every parent render
// → memo sees "different" props → does re-render (usually desired)
// → But if props are SAME primitives → memo blocks → desired

// Debugging: remove memo temporarily
// If component updates without memo → memo is blocking correctly
// If component still doesn't update without memo → mutation bug

// ✅ When memo correctly blocks re-render with same props:
const MemoChild = memo(function Child({ name, count }) {
  return <div>{name}: {count}</div>
})

// ✅ Custom comparison if needed:
const MemoChild = memo(
  function Child({ data }) { return <div>{data.name}</div> },
  (prevProps, nextProps) => prevProps.data.id === nextProps.data.id
)`}</CodeBlock>
          </FixCard>

          {/* ── Fix 4 ── */}
          <FixCard
            number="4"
            title="Stale Closure — Component Reads Old Value"
            time="2 min"
            tag="State updated but component shows old value"
          >
            <CodeBlock title="component.jsx">{`// ❌ WRONG — interval captures count=0 and never sees updates
const [count, setCount] = useState(0)
useEffect(() => {
  const id = setInterval(() => {
    console.log(count)   // always 0 — stale closure
    setCount(count + 1)  // always sets 1
  }, 1000)
  return () => clearInterval(id)
}, [])  // ← empty deps captures count=0 forever

// ✅ CORRECT — functional update avoids stale closure
useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1)  // always gets latest value
  }, 1000)
  return () => clearInterval(id)
}, [])`}</CodeBlock>
          </FixCard>

          {/* ── Fix 5 ── */}
          <FixCard
            number="5"
            title="Child Not Re-rendering When Parent Does"
            time="2 min"
            tag="Parent updates but child displays stale data"
          >
            <CodeBlock title="ParentComponent.jsx">{`// ❌ WRONG — child reads from its own local state, not parent
function Parent() {
  const [items, setItems] = useState([1, 2, 3])
  return (
    <div>
      <button onClick={() => setItems([...items, items.length + 1])}>Add</button>
      <Child />    {/* Child has no connection to parent's items state */}
    </div>
  )
}

function Child() {
  const [items] = useState([1, 2, 3])  // its own state, never updates!
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
}

// ✅ CORRECT — pass state as prop
function Parent() {
  const [items, setItems] = useState([1, 2, 3])
  return (
    <div>
      <button onClick={() => setItems(prev => [...prev, prev.length + 1])}>Add</button>
      <Child items={items} />   {/* receives updates as prop */}
    </div>
  )
}
function Child({ items }) {
  return <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 6 ── */}
          <FixCard
            number="6"
            title="Force Re-render With key Prop"
            time="1 min"
            tag="Reset a component completely"
          >
            <CodeBlock title="ParentComponent.jsx">{`// Changing key unmounts and remounts the component fresh
// Useful for: resetting forms, reinitialising third-party widgets

function Parent() {
  const [resetCount, setResetCount] = useState(0)

  return (
    <div>
      <ComplexForm key={resetCount} />  {/* changes key → fresh mount */}
      <button onClick={() => setResetCount(c => c + 1)}>Reset Form</button>
    </div>
  )
}

// Also useful for reinitialising when a prop changes:
// <UserProfile key={userId} userId={userId} />
// When userId changes → component fully remounts → no stale state`}</CodeBlock>
            <TipBox>
              {
                "The key trick is the React team's own recommended way to reset component state. It is not a hack — it is an intentional pattern documented in the React docs."
              }
            </TipBox>
          </FixCard>

          {/* ── Prevention ── */}
          <SH id="prevention">Prevention</SH>
          <CL
            items={[
              "Never mutate state directly — always spread objects and arrays into new references",
              "Use React DevTools Profiler to see which components are re-rendering and why",
              "Start without React.memo, add it only to verified performance bottlenecks",
              "Use functional updates (prev => ...) in async handlers to avoid stale closures",
              "Pass state down as props to children — never duplicate state in children",
            ]}
          />

          {/* ── FAQ ── */}
          <SH id="faq">Frequently Asked Questions</SH>
          <FAQBlock items={FAQS} />

          {/* ── Related ── */}
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React state not persisting after refresh",
                // ✅ FIX: relative paths corrected to absolute hrefs
                href: "/category/react-js/error/react-state-not-persisting-refresh",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: Too many re-renders React",
                href: "/category/react-js/error/react-too-many-re-renders",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React context not updating",
                href: "/category/react-js/error/react-context-not-updating",
                time: "6 min read",
              },
            ]}
          />

          <CTA
            title="We Build Production-Grade React Apps"
            desc="Softplix builds full-stack React and Next.js applications. Dealing with complex rendering issues or performance problems? We can help."
          />
        </div>
      </main>
    </>
  );
}
