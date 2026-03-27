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
  title: "React Key Prop Warning — Each Child Must Have Unique Key [2026]",
  description:
    "Fix React warning: Each child in a list should have a unique key prop. Understand why keys are needed, what makes a good key, and common key mistakes to avoid.",
  keywords:
    "react key prop warning fix, each child in list should have unique key 2026, react key warning, react list key error fix",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-key-prop-warning",
  },
  openGraph: {
    title: "React Key Prop Warning — Each Child Must Have Unique Key [2026]",
    description:
      "Fix React key prop warning — unique keys, why keys matter, index as key.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-key-prop-warning",
  },
};

const TOC = [
  { label: "Why React needs keys", href: "#why" },
  { label: "Fix 1 — Add key to every mapped element", href: "#fix-1" },
  { label: "Fix 2 — Use stable unique IDs as keys", href: "#fix-2" },
  { label: "Fix 3 — When index as key is acceptable", href: "#fix-3" },
  { label: "Fix 4 — Keys on fragments", href: "#fix-4" },
  { label: "Fix 5 — Keys must be unique among siblings only", href: "#fix-5" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does React need a key prop on list items?",
    a: "React uses keys to identify which items in a list have changed, been added, or removed. Without keys, React re-renders the entire list on every change. With stable, unique keys, React can update only the items that changed — much more efficient.",
  },
  {
    q: "Can I use array index as a key in React?",
    a: "Only if the list is static and never reordered or filtered. Using index as key when items can be added, removed, or reordered causes bugs: state tied to an item moves to the wrong item. Use a stable unique ID from your data whenever possible.",
  },
  {
    q: "React key warning but I already added a key — why?",
    a: "Common causes: 1) The key is on the wrong element — it must be on the outermost element returned by map, 2) The key is not unique among siblings, 3) Using an undefined value as key (console.log the key to verify it is defined and unique).",
  },
  {
    q: "How do I generate a key for items without IDs?",
    a: "If items have no natural ID: use a combination of fields that together are unique: key={item.name + '-' + item.date}. Or use crypto.randomUUID() when creating items. Avoid using Math.random() as key — it changes on every render causing unnecessary remounts.",
  },
  {
    q: "Do keys need to be globally unique across the whole app?",
    a: "No. Keys only need to be unique among siblings — elements at the same level in the same list. The same key can appear in different lists without conflict.",
  },
  {
    q: "Does adding key fix performance or just silence the warning?",
    a: "Both. The warning tells you React cannot efficiently update your list. Adding proper unique keys enables React's reconciliation algorithm to make targeted DOM updates instead of re-rendering the entire list. This is a real performance improvement, not just silencing a warning.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Key Prop Warning — Each Child Must Have Unique Key [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-key-prop-warning",
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
            title={"React Key Prop Warning"}
            subtitle={"— Each Child Must Have Unique Key [2026]"}
            sub={
              "Understand why keys matter, stable IDs vs index, and Fragment keys"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18 · Next.js"}
          />
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix"}
            </p>
            <CodeBlock title="component.jsx">{`// ❌ WRONG — no key
{items.map(item => <li>{item.name}</li>)}

// ✅ CORRECT — stable unique ID as key
{items.map(item => <li key={item.id}>{item.name}</li>)}`}</CodeBlock>
          </div>
          <TOCBlock items={TOC} />
          <SH id="why">{"Why React Needs Keys"}</SH>
          <P>
            {
              "React uses keys to match elements between renders. Without them, React cannot tell which list item was updated, added, or removed — so it re-renders the entire list. Keys enable React's reconciliation algorithm to make targeted, efficient updates."
            }
          </P>
          <FixCard
            number="1"
            title="Add key to Every Mapped Element"
            time="1 min"
            tag="The warning — key missing from outermost element"
          >
            <CodeBlock title="components/UserList.jsx">{`// ❌ WRONG — no key
{users.map(user => (
  <div className="card">
    <p>{user.name}</p>
  </div>
))}

// ✅ CORRECT — key on outermost element returned by map
{users.map(user => (
  <div key={user.id} className="card">
    <p>{user.name}</p>
  </div>
))}`}</CodeBlock>
          </FixCard>
          <FixCard
            number="2"
            title="Use Stable Unique IDs as Keys"
            time="2 min"
            tag="Best key — from your database or API"
          >
            <CodeBlock title="component.jsx">{`// ✅ Database ID — best key
{posts.map(post => <Post key={post.id} post={post} />)}

// ✅ Slug — stable, readable
{pages.map(page => <Page key={page.slug} page={page} />)}

// ✅ Compound key — when single field is not unique
{items.map(item => (
  <Item key={\`\${item.category}-\${item.id}\`} item={item} />
))}`}</CodeBlock>
          </FixCard>
          <FixCard
            number="3"
            title="When Index as Key Is Acceptable"
            time="2 min"
            tag="Static lists that never change order"
          >
            <CodeBlock title="component.jsx">{`// ✅ OK to use index — static list, no reorder/add/remove
const STEPS = ['Choose plan', 'Enter details', 'Confirm']
{STEPS.map((step, i) => <Step key={i} label={step} />)}

// ❌ BAD — dynamic list with add/remove/sort
{todos.map((todo, i) => (
  <TodoItem key={i} todo={todo} />  // state will shift when item removed!
))}

// ✅ CORRECT for dynamic list — use stable ID
{todos.map(todo => (
  <TodoItem key={todo.id} todo={todo} />
))}`}</CodeBlock>
            <WarnBox>
              {
                "Using index as key on a dynamic list causes bugs with controlled inputs and component state. When item 2 is deleted, item 3 becomes index 2 and inherits item 2's state."
              }
            </WarnBox>
          </FixCard>
          <FixCard
            number="4"
            title="Keys on Fragments"
            time="1 min"
            tag="key prop on React.Fragment"
          >
            <CodeBlock title="component.jsx">{`import { Fragment } from 'react'

// ❌ WRONG — short syntax <> doesn't support key
{items.map(item => (
  <>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </>
))}

// ✅ CORRECT — use Fragment with key
{items.map(item => (
  <Fragment key={item.id}>
    <dt>{item.term}</dt>
    <dd>{item.definition}</dd>
  </Fragment>
))}`}</CodeBlock>
          </FixCard>
          <FixCard
            number="5"
            title="Keys Must Be Unique Among Siblings Only"
            time="1 min"
            tag="Scope of key uniqueness"
          >
            <CodeBlock title="component.jsx">{`// ✅ Same key in different lists is fine
<ul>
  {categoryA.map(item => <li key={item.id}>{item.name}</li>)}
</ul>
<ul>
  {categoryB.map(item => <li key={item.id}>{item.name}</li>)} // same IDs OK
</ul>

// ❌ Duplicate keys in SAME list — React warns
{allItems.map(item => <Item key={item.categoryId} item={item} />)}
// if multiple items share categoryId → duplicate key warning`}</CodeBlock>
          </FixCard>
          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always add key to the outermost element returned by .map()",
              "Use stable IDs from your database or API — not index for dynamic lists",
              "Use React.Fragment (not short syntax) when you need key on a fragment",
              "Verify key values are defined and unique: console.log before using as key",
              "Use compound keys (id + category) when a single field is not unique",
            ]}
          />
          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React cannot read properties of undefined map",
                href: "react-cannot-read-properties-undefined-map",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React component not re-rendering",
                href: "react-component-not-rerendering",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: Too many re-renders React",
                href: "react-too-many-re-renders",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade React Apps"}
            desc={
              "Softplix builds full-stack React and Next.js applications. Need help with list rendering or performance optimisation? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
