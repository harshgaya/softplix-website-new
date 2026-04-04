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
  title:
    "React useMemo Not Working — Still Re-computing Every Render [Fixed 2026]",
  description:
    "Fix React useMemo not working — memoization not preventing re-renders or re-computations. Covers dependency array mistakes, referential equality, object deps, and when NOT to use useMemo.",
  keywords:
    "react useMemo not working, useMemo still recalculating, react useMemo not memoizing 2026, useMemo dependency array wrong, react memo vs useMemo difference",
  alternates: {
    canonical:
      "https://softplix.com/category/react/error/react-usememo-not-working",
  },
  openGraph: {
    title: "React useMemo Not Working — Fixed [2026]",
    description:
      "Fix React useMemo — dependency array, referential equality, objects in deps, React.memo.",
    type: "article",
    url: "https://softplix.com/category/react/error/react-usememo-not-working",
  },
};

const TOC = [
  { label: "Why useMemo re-computes every render", href: "#why" },
  {
    label: "Fix 1 — Correct dependency array (most common mistake)",
    href: "#fix-1",
  },
  { label: "Fix 2 — Avoid objects and arrays as dependencies", href: "#fix-2" },
  {
    label: "Fix 3 — Combine useMemo with React.memo for prop memoization",
    href: "#fix-3",
  },
  { label: "Fix 4 — Memoize expensive derived data correctly", href: "#fix-4" },
  { label: "Fix 5 — When NOT to use useMemo", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is useMemo still re-computing even with dependencies set?",
    a: "useMemo re-computes whenever any dependency changes by reference, not by value. If you pass an object or array as a dependency that gets recreated on every render (e.g. defined inline), useMemo sees a new reference each time and treats it as changed, invalidating the cache on every render.",
  },
  {
    q: "What is the difference between useMemo and React.memo?",
    a: "useMemo memoizes the return value of a function — it caches expensive computed values. React.memo memoizes an entire component — it skips re-rendering a child component if its props haven't changed. They solve different problems and are often used together.",
  },
  {
    q: "Should I use useMemo for every expensive calculation?",
    a: "No. React is fast for most calculations, and useMemo has its own overhead (comparing dependencies, storing the cached value). Only use useMemo for genuinely expensive computations (sorting/filtering large arrays, complex math) or to stabilise object references passed as props to memoized child components.",
  },
  {
    q: "Why does useMemo not prevent child component re-renders?",
    a: "useMemo returns a stable value, but the child component still re-renders unless it is wrapped in React.memo. React.memo skips re-rendering when props are shallowly equal. Use useMemo to produce stable prop values, and React.memo on the child to skip rendering when those values haven't changed.",
  },
  {
    q: "Can I use useMemo with an empty dependency array?",
    a: "Yes — useMemo(() => compute(), []) computes once on mount and never again, like a constant. Use this for static expensive computations. But if the function uses any values from outside, they will be stale after updates — include them in the dependency array.",
  },
  {
    q: "Does React Strict Mode affect useMemo?",
    a: "In React Strict Mode (development only), React intentionally double-invokes functions including the useMemo factory function to detect side effects. This means useMemo may appear to compute twice in development. In production, this double-invocation does not happen.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React useMemo Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react/error/react-usememo-not-working",
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
            tags={["React", "Performance", "Error Fix"]}
            title={"React useMemo Not Working"}
            subtitle={"— Still Re-computing Every Render [Fixed 2026]"}
            sub={
              "Also covers: dependency array mistakes · referential equality · object deps · React.memo · when to skip useMemo"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"React 18/19 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// useMemo recalculates on every render despite dependencies
const sortedList = useMemo(() => {
  console.log("sorting...")   // logs on every render — memo not working!
  return [...items].sort((a, b) => a.name.localeCompare(b.name))
}, [items, filters])           // filters is an object created inline — new ref every render`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Root cause — unstable reference in dependencies"}
            </p>
            <CodeBlock title="Fix — use primitive values in deps, not objects">{`// ❌ Object dep — new reference every render
const filters = { status: "active", page: 1 }  // created inline
useMemo(() => compute(items, filters), [items, filters])

// ✅ Use primitives from the object as deps instead
useMemo(() => compute(items, status, page), [items, status, page])`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why useMemo Re-computes Every Render"}</SH>
          <P>
            {"React's "}
            <IC>{"useMemo"}</IC>
            {" uses "}
            <IC>{"Object.is"}</IC>
            {
              " to compare each dependency between renders. For primitive values (strings, numbers, booleans), this is value comparison. For objects and arrays, this is reference comparison — a new object with the same properties is still a different reference."
            }
          </P>
          <P>
            {
              "If any dependency changes reference between renders — even if its contents are identical — useMemo invalidates the cache and re-runs the factory function."
            }
          </P>

          <FixCard
            number="1"
            title="Correct the Dependency Array"
            time="2 min"
            tag="Most common mistake — missing or wrong deps"
          >
            <P>
              {
                "The dependency array must contain every value used inside the memo factory. Missing deps cause stale results; extra deps cause unnecessary recomputation. The ESLint rule "
              }
              <IC>{"exhaustive-deps"}</IC>
              {" catches both automatically."}
            </P>
            <CodeBlock title="Dependency array patterns">{`import { useMemo } from "react"

// ❌ Missing dependency — stale result when userId changes
const userPosts = useMemo(() => {
  return posts.filter(p => p.userId === userId)  // userId used but not in deps!
}, [posts])  // bug: userId missing

// ✅ All used values in deps
const userPosts = useMemo(() => {
  return posts.filter(p => p.userId === userId)
}, [posts, userId])  // both deps included

// ❌ Unnecessary dep — causes recompute when unrelated state changes
const sortedPosts = useMemo(() => {
  return [...posts].sort((a, b) => a.date - b.date)
}, [posts, currentUser])  // currentUser not used inside — remove it

// ✅ Only what you actually use inside the factory
const sortedPosts = useMemo(() => {
  return [...posts].sort((a, b) => a.date - b.date)
}, [posts])`}</CodeBlock>
            <TipBox>
              {
                "Install eslint-plugin-react-hooks and enable the react-hooks/exhaustive-deps rule. It automatically detects missing and unnecessary dependencies, turning dependency array mistakes into lint errors."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Avoid Objects and Arrays as Dependencies"
            time="3 min"
            tag="Object dep created inline — new ref every render"
          >
            <P>
              {
                "Objects and arrays created during render are new references every time, even if their contents are identical. Use primitive values from them as deps instead."
              }
            </P>
            <CodeBlock title="Replace object deps with primitives">{`// ❌ Object dep — {} !== {} — recomputes every render
function ProductList({ filters }: { filters: { status: string; minPrice: number } }) {
  const filtered = useMemo(() => {
    return products.filter(p => p.status === filters.status && p.price >= filters.minPrice)
  }, [products, filters])  // filters is a new object every render from the parent
  // ...
}

// ✅ Destructure to primitives — strings/numbers are stable
function ProductList({ filters }: { filters: { status: string; minPrice: number } }) {
  const { status, minPrice } = filters  // destructure outside useMemo

  const filtered = useMemo(() => {
    return products.filter(p => p.status === status && p.price >= minPrice)
  }, [products, status, minPrice])  // primitives — stable comparison
  // ...
}

// ✅ Alternative — memoize the filters object in the parent
const filters = useMemo(() => ({ status, minPrice }), [status, minPrice])
// Now filters is a stable reference — safe to pass and use as dep`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Combine useMemo with React.memo for Prop Memoization"
            time="5 min"
            tag="Child still re-renders despite useMemo"
          >
            <P>
              {
                "useMemo alone doesn't prevent child re-renders. The child must be wrapped in "
              }
              <IC>{"React.memo"}</IC>
              {
                " — then it only re-renders when its props change reference. Use "
              }
              <IC>{"useMemo"}</IC>
              {" to produce stable props, and "}
              <IC>{"React.memo"}</IC>
              {" on the child to skip rendering."}
            </P>
            <CodeBlock title="useMemo + React.memo — complete pattern">{`import { memo, useMemo } from "react"

// Child wrapped in React.memo — skips re-render if props are same reference
const ExpensiveChart = memo(function ExpensiveChart({
  data,
  config,
}: {
  data: ChartPoint[]
  config: ChartConfig
}) {
  // Only re-renders when data or config reference changes
  return <canvas>{/* chart rendering */}</canvas>
})

// Parent — produces stable props with useMemo
function Dashboard({ rawData, theme }: { rawData: RawPoint[]; theme: string }) {
  // Stable transformed data — only recomputes when rawData changes
  const chartData = useMemo(() =>
    rawData.map(p => ({ x: p.timestamp, y: p.value })),
    [rawData]
  )

  // Stable config object — only recomputes when theme changes
  const chartConfig = useMemo(() => ({
    theme,
    showGrid: true,
    animationDuration: 300,
  }), [theme])

  // ExpensiveChart only re-renders when chartData or chartConfig reference changes
  return <ExpensiveChart data={chartData} config={chartConfig} />
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Memoize Expensive Derived Data Correctly"
            time="3 min"
            tag="Sorting, filtering, or aggregating large arrays"
          >
            <P>
              {
                "useMemo is most valuable for computations that are genuinely expensive — sorting or filtering arrays of thousands of items, complex aggregations, or heavy string transformations."
              }
            </P>
            <CodeBlock title="Real-world expensive computation patterns">{`import { useMemo } from "react"

// ✅ Sorting a large list — O(n log n) — worth memoizing
function ProductTable({ products, sortKey, sortDir }: Props) {
  const sorted = useMemo(() => {
    return [...products].sort((a, b) => {
      const cmp = a[sortKey] < b[sortKey] ? -1 : a[sortKey] > b[sortKey] ? 1 : 0
      return sortDir === "asc" ? cmp : -cmp
    })
  }, [products, sortKey, sortDir])

  return <table>{sorted.map(p => <ProductRow key={p.id} product={p} />)}</table>
}

// ✅ Multi-step filter + aggregation
function SalesDashboard({ orders, dateRange, region }: Props) {
  const stats = useMemo(() => {
    const filtered = orders.filter(o =>
      o.date >= dateRange.start &&
      o.date <= dateRange.end &&
      (region === "all" || o.region === region)
    )
    return {
      total: filtered.reduce((sum, o) => sum + o.amount, 0),
      count: filtered.length,
      average: filtered.length > 0
        ? filtered.reduce((sum, o) => sum + o.amount, 0) / filtered.length
        : 0,
    }
  }, [orders, dateRange.start, dateRange.end, region])  // primitives from dateRange

  return <StatsPanel stats={stats} />
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="When NOT to Use useMemo"
            time="2 min"
            tag="Over-memoization — adds overhead without benefit"
          >
            <P>
              {
                "useMemo has a cost: React must store the previous value and compare dependencies on every render. For cheap computations, this overhead exceeds the savings. Avoid useMemo for these patterns:"
              }
            </P>
            <CodeBlock title="Cases where useMemo is not worth it">{`// ❌ Simple calculation — faster without useMemo
const total = useMemo(() => price * quantity, [price, quantity])
const total = price * quantity  // ✅ just do it inline

// ❌ String concatenation — trivially cheap
const label = useMemo(() => \`\${firstName} \${lastName}\`, [firstName, lastName])
const label = \`\${firstName} \${lastName}\`  // ✅ inline

// ❌ Array of 3 items — sorting is instant
const sorted = useMemo(() => [...items].sort(), [items])
// ✅ Only worth it for large arrays (100+ items)

// ❌ JSX — use React.memo on the component instead
const element = useMemo(() => <MyComponent prop={value} />, [value])
// ✅ Wrap MyComponent in React.memo instead

// ✅ USE useMemo when:
// — Sorting/filtering 100+ items
// — Heavy string parsing or regex
// — Producing stable object references passed to React.memo children
// — Complex mathematical aggregations`}</CodeBlock>
            <WarnBox>
              {
                "Premature memoization is a real problem. Adding useMemo everywhere adds cognitive overhead and can actually slow down your app for simple computations. Profile first with React DevTools Profiler, then memoize only what the profiler shows is slow."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Enable eslint-plugin-react-hooks exhaustive-deps rule — catches wrong dependency arrays automatically",
              "Use primitives (strings, numbers) as deps, not objects or arrays created inline",
              "Combine useMemo with React.memo — useMemo stabilises values, React.memo skips child renders",
              "Profile with React DevTools Profiler before adding useMemo — only memoize proven bottlenecks",
              "Destructure objects outside useMemo and use individual primitive fields as deps",
              "Use useMemo for sorting/filtering 100+ items, complex aggregations, or stabilising object refs",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React useCallback infinite loop",
                href: "react-usecallback-infinite-loop",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React lazy and Suspense not working",
                href: "react-lazy-suspense-not-working",
                time: "5 min read",
              },
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query staleTime not working",
                href: "tanstack-query-stale-time-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build High-Performance React Applications"}
            desc={
              "Softplix engineers optimise React apps with memoization, code splitting, and profiling. Struggling with performance? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
