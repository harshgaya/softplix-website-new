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
  title: "useRouter is Not a Function Next.js App Router — Fixed [2026]",
  description:
    "Fix useRouter is not a function in Next.js App Router. Covers wrong import path, using usePathname and useSearchParams instead, and navigation patterns in Next.js 13–15.",
  keywords:
    "userouter is not a function nextjs, nextjs userouter app router fix, next js userouter not working 2026, nextjs 13 userouter fix",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-userouter-not-a-function",
  },
  openGraph: {
    title: "useRouter is Not a Function Next.js App Router — Fixed [2026]",
    description:
      "Fix useRouter not a function in Next.js App Router — correct hooks and navigation.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-userouter-not-a-function",
  },
};

const TOC6 = [
  { label: "Why useRouter errors in App Router", href: "#why" },
  {
    label: "Fix 1 — Import from next/navigation not next/router",
    href: "#fix-1",
  },
  { label: "Fix 2 — Add 'use client' directive", href: "#fix-2" },
  { label: "Fix 3 — usePathname for current route", href: "#fix-3" },
  { label: "Fix 4 — useParams for dynamic route params", href: "#fix-4" },
  { label: "Fix 5 — useSearchParams for query strings", href: "#fix-5" },
  { label: "Navigation hook cheat sheet", href: "#cheatsheet" },
  { label: "FAQ", href: "#faq" },
];

const FAQS6 = [
  {
    q: "Why is useRouter not working in Next.js App Router?",
    a: "In Next.js 13+ App Router, you must import useRouter from 'next/navigation' not 'next/router'. The next/router package is for the Pages Router only. Also, useRouter and all navigation hooks require the 'use client' directive.",
  },
  {
    q: "What replaced useRouter in Next.js App Router?",
    a: "The App Router splits useRouter into multiple hooks: useRouter() for programmatic navigation (push, replace, back), usePathname() for the current URL path, useParams() for dynamic route params, and useSearchParams() for query string params.",
  },
  {
    q: "Can I use useRouter in a Server Component?",
    a: "No. useRouter, usePathname, useParams, and useSearchParams are all Client Component hooks. They require 'use client' at the top of the file. In Server Components, access route params and search params through the component's props instead.",
  },
  {
    q: "How do I navigate programmatically in Next.js App Router?",
    a: "Import useRouter from 'next/navigation': const router = useRouter(); Then: router.push('/dashboard') to navigate, router.replace('/login') to replace history, router.back() to go back. This must be in a Client Component.",
  },
  {
    q: "How do I get the current route in Next.js App Router?",
    a: "Use usePathname from 'next/navigation': const pathname = usePathname(). This returns the current URL path like '/dashboard/settings'. For full URL including query string, use useSearchParams in combination.",
  },
  {
    q: "useRouter().query is undefined in App Router — how to fix?",
    a: "router.query does not exist in App Router. Use useParams() for dynamic segment params ([id], [slug]) and useSearchParams() for URL query parameters (?page=2). Both are in 'next/navigation'.",
  },
];

function A6Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "useRouter is Not a Function Next.js App Router — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-userouter-not-a-function",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A6FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS6.map(({ q, a }) => ({
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
      <A6Schema />
      <A6FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Next.js", "App Router", "Error Fix"]}
            title={"useRouter is Not a Function"}
            subtitle={"Next.js App Router — Fixed [2026]"}
            sub={
              "Also covers: useRouter not working · router.query undefined · wrong import"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Next.js 13–15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Fix — Wrong Import"}
            </p>
            <CodeBlock title="component.jsx">{`// ❌ WRONG — next/router is Pages Router only
import { useRouter } from 'next/router'

// ✅ CORRECT — App Router uses next/navigation
import { useRouter, usePathname, useParams, useSearchParams } from 'next/navigation'`}</CodeBlock>
          </div>

          <TOCBlock items={TOC6} />

          <SH id="why">{"Why useRouter Errors in App Router"}</SH>
          <ErrorBlock>{`TypeError: useRouter is not a function
    at NavLink (components/NavLink.jsx:5)

# or:
Error: You're importing a component that needs useRouter.
This React hook only works in a client component.
Add the "use client" directive at the top of the file.`}</ErrorBlock>
          <P>
            {
              "Next.js 13 introduced the App Router with a completely different navigation system. The old "
            }
            <IC>{"next/router"}</IC>
            {" package (Pages Router) was replaced by "}
            <IC>{"next/navigation"}</IC>
            {", and a single "}
            <IC>{"useRouter"}</IC>
            {" was split into four separate hooks with more focused APIs."}
          </P>

          <FixCard
            number="1"
            title="Import From next/navigation Not next/router"
            time="1 min"
            tag="Wrong import — most common cause"
          >
            <CodeBlock title="components/NavLink.jsx">{`'use client'

// ❌ WRONG — Pages Router import
import { useRouter } from 'next/router'

// ✅ CORRECT — App Router import
import { useRouter } from 'next/navigation'

export default function NavLink() {
  const router = useRouter()

  return (
    <button onClick={() => router.push('/dashboard')}>
      Go to Dashboard
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add 'use client' Directive"
            time="1 min"
            tag="Hooks require Client Component"
          >
            <CodeBlock title="components/BackButton.jsx">{`'use client'  // ← REQUIRED — must be first line

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()
  return <button onClick={() => router.back()}>Back</button>
}`}</CodeBlock>
            <TipBox>
              {
                "If you cannot add 'use client' to a component because it is a Server Component, extract only the navigation logic into a small Client Component wrapper."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="usePathname for Current Route"
            time="1 min"
            tag="Replaced router.pathname"
          >
            <CodeBlock title="components/ActiveLink.jsx">{`'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavItem({ href, label }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={isActive ? 'text-indigo-600 font-bold' : 'text-gray-600'}
    >
      {label}
    </Link>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="useParams for Dynamic Route Params"
            time="1 min"
            tag="Replaced router.query for [id] segments"
          >
            <CodeBlock title="app/blog/[slug]/page.jsx">{`// Server Component — params come as props
export default function BlogPost({ params }) {
  const { slug } = params
  return <h1>{slug}</h1>
}

// Client Component — use useParams hook
'use client'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const params = useParams()
  const { slug } = params  // { slug: 'my-post-title' }
  return <h1>{slug}</h1>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="useSearchParams for Query Strings"
            time="2 min"
            tag="Replaced router.query for ?key=value"
          >
            <CodeBlock title="components/SearchResults.jsx">{`'use client'
import { useSearchParams, useRouter } from 'next/navigation'

export default function SearchResults() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const query = searchParams.get('q')    // ?q=nextjs → 'nextjs'
  const page  = searchParams.get('page') // ?page=2 → '2'

  function goToPage(n) {
    const params = new URLSearchParams(searchParams)
    params.set('page', n.toString())
    router.push(\`?\${params.toString()}\`)
  }

  return <div>Searching for: {query} — Page {page}</div>
}`}</CodeBlock>
          </FixCard>

          <SH id="cheatsheet">{"Navigation Hook Cheat Sheet"}</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Pages Router (old)"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"App Router (new)"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Purpose"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["router.push()", "useRouter().push()", "Navigate to route"],
                  ["router.pathname", "usePathname()", "Current URL path"],
                  ["router.query.id", "useParams().id", "Dynamic segment [id]"],
                  [
                    "router.query.page",
                    "useSearchParams().get('page')",
                    "Query string ?page=",
                  ],
                  ["router.back()", "useRouter().back()", "Browser back"],
                ].map(([old, n, p]) => (
                  <tr
                    key={old}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {old}
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-green-700">
                      {n}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS6} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js params undefined",
                href: "nextjs-params-undefined",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: useSearchParams must be wrapped in Suspense",
                href: "nextjs-usesearchparams-suspense",
                time: "4 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js hydration failed",
                href: "nextjs-hydration-failed",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production-Grade Next.js Apps"}
            desc={
              "Softplix builds full-stack Next.js applications. Need help migrating from Pages Router to App Router? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
