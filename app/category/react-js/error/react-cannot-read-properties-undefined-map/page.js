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
  title:
    "React Cannot Read Properties of Undefined Reading 'map' — Fixed [2026]",
  description:
    "Fix React TypeError: Cannot read properties of undefined reading map. Covers undefined array state, async data loading, optional chaining, and defensive rendering patterns.",
  keywords:
    "react cannot read properties of undefined reading map, react map is not a function fix 2026, react undefined map error, react TypeError map fix",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-cannot-read-properties-undefined-map",
  },
  openGraph: {
    title:
      "React Cannot Read Properties of Undefined Reading 'map' — Fixed [2026]",
    description:
      "Fix React cannot read properties of undefined reading map — loading states, optional chaining.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-cannot-read-properties-undefined-map",
  },
};

const TOC = [
  { label: "Why does this error happen?", href: "#why" },
  { label: "Fix 1 — Initialize state as empty array", href: "#fix-1" },
  { label: "Fix 2 — Guard with loading state before mapping", href: "#fix-2" },
  { label: "Fix 3 — Optional chaining and nullish coalescing", href: "#fix-3" },
  { label: "Fix 4 — API returns unexpected shape", href: "#fix-4" },
  { label: "Fix 5 — Prop not passed — default prop value", href: "#fix-5" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does 'Cannot read properties of undefined reading map' happen in React?",
    a: "You are calling .map() on a value that is undefined or null. This happens when: data is still loading (undefined before API response), useState is initialized as undefined instead of [], the prop was not passed to the component, or the API returned a different shape than expected.",
  },
  {
    q: "How do I fix 'map is not a function' in React?",
    a: "The value you are mapping is not an array. Use Array.isArray() to check: if (Array.isArray(data)) { data.map(...) }. Or initialize state as empty array: useState([]) and guard the render until data arrives.",
  },
  {
    q: "How do I safely map over data that might be undefined?",
    a: "Use optional chaining and a fallback: (data ?? []).map(...) or data?.map(...). The first is safer as it renders nothing if data is undefined. The second also works but returns undefined which React renders as nothing.",
  },
  {
    q: "Map error only on first render — how to fix?",
    a: "Your data is undefined during the first render because the API call has not completed yet. Initialize state as an empty array: const [items, setItems] = useState([]) and show a loading indicator while fetching. The empty array maps to nothing, no error.",
  },
  {
    q: "API data nested differently than expected — map error?",
    a: "Always log the raw API response: console.log(data). The array may be nested: data.items, data.results, data.users etc. Access the correct path: data.items.map(...) or destructure: const { items } = await response.json().",
  },
  {
    q: "React map error after adding TypeScript — how to fix?",
    a: "TypeScript caught a real bug — the type system detected that the variable can be undefined. Fix by initializing with an empty array or adding a type guard: if (!data) return null.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "React Cannot Read Properties of Undefined Reading 'map' — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-cannot-read-properties-undefined-map",
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
            title={"React Cannot Read Properties of Undefined Reading 'map'"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: map is not a function · undefined before API loads · optional chaining"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18 · Next.js"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Most Common Fix — Initialize as Empty Array"}
            </p>
            <CodeBlock title="component.jsx">{`// ❌ WRONG — undefined on first render before API responds
const [users, setUsers] = useState()
users.map(u => ...)  // TypeError!

// ✅ CORRECT — empty array = safe to map, renders nothing
const [users, setUsers] = useState([])
users.map(u => ...)  // works, renders nothing until data arrives`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Does This Error Happen?"}</SH>
          <ErrorBlock>{`TypeError: Cannot read properties of undefined (reading 'map')
    at UserList (UserList.jsx:8:12)

# or:
TypeError: data.map is not a function`}</ErrorBlock>
          <P>
            {"JavaScript's "}
            <IC>{".map()"}</IC>
            {" method only exists on arrays. When called on "}
            <IC>{"undefined"}</IC>
            {", "}
            <IC>{"null"}</IC>
            {
              ", or any non-array value, it throws. In React, this happens most often when data is still loading or was not passed as a prop."
            }
          </P>

          <FixCard
            number="1"
            title="Initialize State as Empty Array"
            time="1 min"
            tag="The standard fix — safe default value"
          >
            <CodeBlock title="components/UserList.jsx">{`import { useState, useEffect } from 'react'

export default function UserList() {
  // ✅ Always initialize array state as [] not undefined
  const [users, setUsers]   = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/users')
      .then(r => r.json())
      .then(data => {
        setUsers(data)      // replace [] with real data
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading users...</p>

  // Safe to map — worst case is an empty array
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Guard With Loading State Before Mapping"
            time="2 min"
            tag="Show skeleton while data loads"
          >
            <CodeBlock title="components/ProductGrid.jsx">{`export default function ProductGrid({ products, loading }) {
  // ✅ Explicit loading guard
  if (loading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    )
  }

  // ✅ Null/empty guard
  if (!products || products.length === 0) {
    return <p className="text-gray-500">No products found.</p>
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Optional Chaining and Nullish Coalescing"
            time="1 min"
            tag="Concise defensive mapping"
          >
            <CodeBlock title="component.jsx">{`// ✅ Optional chaining — returns undefined if data is undefined (no error)
{data?.map(item => <Item key={item.id} item={item} />)}

// ✅ Nullish coalescing — falls back to empty array
{(data ?? []).map(item => <Item key={item.id} item={item} />)}

// ✅ Logical AND — only renders if data is truthy
{data && data.map(item => <Item key={item.id} item={item} />)}

// ✅ Array.isArray check — most explicit
{Array.isArray(data) && data.map(item => <Item key={item.id} item={item} />)}`}</CodeBlock>
            <TipBox>
              {
                "(data ?? []).map() is the safest pattern — it always returns an array to map over. data?.map() returns undefined when data is undefined, which React renders as nothing but can cause type errors in TypeScript."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="API Returns Unexpected Shape"
            time="2 min"
            tag="Data nested differently than expected"
          >
            <CodeBlock title="component.jsx">{`// Always log the raw API response first
useEffect(() => {
  fetch('/api/posts')
    .then(r => r.json())
    .then(data => {
      console.log('API response:', data)
      // Check: is data the array, or is it nested?
      // { posts: [...] }  → setItems(data.posts)
      // { data: { items: [...] } }  → setItems(data.data.items)
      // [...]  → setItems(data)

      // ✅ Defensive: ensure it's an array before setting
      setItems(Array.isArray(data) ? data : data.items ?? [])
    })
}, [])`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Prop Not Passed — Default Prop Value"
            time="1 min"
            tag="Component receives undefined from parent"
          >
            <CodeBlock title="components/TagList.jsx">{`// ❌ WRONG — no default, crashes if tags not passed
function TagList({ tags }) {
  return <div>{tags.map(t => <span key={t}>{t}</span>)}</div>
}

// ✅ CORRECT — default empty array
function TagList({ tags = [] }) {
  return <div>{tags.map(t => <span key={t}>{t}</span>)}</div>
}

// ✅ ALSO CORRECT — PropTypes default
TagList.defaultProps = { tags: [] }

// ✅ TypeScript — explicit optional with default
function TagList({ tags = [] }: { tags?: string[] }) {
  return <div>{tags.map(t => <span key={t}>{t}</span>)}</div>
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always initialize array state with useState([]) — never useState()",
              "Log raw API responses to verify the actual data shape before mapping",
              "Use optional chaining: data?.map() or (data ?? []).map()",
              "Add default parameter values to components: ({ items = [] })",
              "Show loading and empty states explicitly before rendering the list",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React too many re-renders",
                href: "react-too-many-re-renders",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React state not persisting after refresh",
                href: "react-state-not-persisting-refresh",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React key prop warning",
                href: "react-key-prop-warning",
                time: "4 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade React Apps"}
            desc={
              "Softplix builds full-stack React and Next.js applications. Need help with data fetching patterns or error handling? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
