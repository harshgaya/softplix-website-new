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
  title: "Next.js 'use client' Directive Error — Fixed [2026]",
  description:
    "Fix Next.js error: You're importing a component that needs useState/useEffect but none of its parents are marked with 'use client'. Complete App Router guide.",
  keywords:
    "nextjs use client error, you're importing a component that needs useState use client, next.js app router use client directive 2026, react hooks server component error",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-use-client-directive-error",
  },
  openGraph: {
    title: "Next.js 'use client' Directive Error — Fixed [2026]",
    description:
      "Fix the 'use client' directive error in Next.js App Router — hooks in Server Components, client boundaries, and best practices.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-use-client-directive-error",
  },
};

const TOC = [
  { label: "What causes the 'use client' error?", href: "#why" },
  { label: "Fix 1 — Add 'use client' to the file", href: "#fix-1" },
  { label: "Fix 2 — Extract an interactive child component", href: "#fix-2" },
  { label: "Fix 3 — Move hooks out of Server Components", href: "#fix-3" },
  { label: "Fix 4 — Fix third-party library components", href: "#fix-4" },
  { label: "Fix 5 — Understand the client boundary tree", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does 'use client' mean in Next.js?",
    a: "'use client' is a directive you place at the top of a file to mark it and its imports as a Client Component. Without it, every component in the App Router is a Server Component by default, which cannot use React hooks like useState, useEffect, or browser APIs.",
  },
  {
    q: "Where exactly do I put 'use client'?",
    a: "Place 'use client' as the very first line of the file, before any imports. It must be a string literal at the top of the module — not inside a function, not after an import statement.",
  },
  {
    q: "Do I need 'use client' on every file that uses hooks?",
    a: "No. 'use client' marks a boundary — every component imported into a 'use client' file automatically becomes a Client Component too. You only need the directive on the topmost file in a subtree that requires client-side behaviour.",
  },
  {
    q: "Can a Server Component import a Client Component?",
    a: "Yes. Server Components can import and render Client Components. The reverse is not true — Client Components cannot import Server Components (but they can receive them as children props).",
  },
  {
    q: "Why does my third-party library cause a 'use client' error?",
    a: "Many npm packages use hooks or browser APIs internally but don't include the 'use client' directive because they were written before Next.js App Router existed. Wrap them in your own client component file that has 'use client' at the top.",
  },
  {
    q: "Can I use useState in a Server Component?",
    a: "No. useState, useEffect, useRef, useCallback, useMemo, and all other hooks are client-only. They require a browser environment and the React reconciler, which is only available on the client side in App Router.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js 'use client' Directive Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-use-client-directive-error",
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
            tags={["Next.js", "App Router", "Error Fix"]}
            title={
              "Next.js Error: You're importing a component that needs useState"
            }
            subtitle={"— 'use client' Directive Fix [2026]"}
            sub={
              "Also covers: hooks in Server Components · client boundary · third-party libraries · App Router migration"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js 14/15 · App Router · React 19"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`You're importing a component that needs useState.
It only works in a Client Component but none of its
parents are marked with "use client", so they're
Server Components by default.`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest Fix"}
            </p>
            <CodeBlock title="any-component.tsx">{`"use client"   // ← add this as the very first line

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"What Causes the 'use client' Error?"}</SH>
          <P>
            {
              "In Next.js App Router, every component is a Server Component by default. Server Components run only on the server — they have no access to browser APIs, event handlers, or React hooks like "
            }
            <IC>{"useState"}</IC>
            {" and "}
            <IC>{"useEffect"}</IC>
            {
              ". When you use a hook in a Server Component (or import a library that does), Next.js throws this error because it detects a client-only API in a server-only context."
            }
          </P>
          <P>
            {
              "The fix is always to mark the component (or its boundary ancestor) with the "
            }
            <IC>{'"use client"'}</IC>
            {
              " directive — turning it into a Client Component that runs in the browser."
            }
          </P>

          <FixCard
            number="1"
            title={"Add 'use client' to the file"}
            time="1 min"
            tag="Root cause fix — always try this first"
          >
            <P>
              {"Place "}
              <IC>{'"use client"'}</IC>
              {
                " as the absolute first line of any file that uses hooks or browser APIs. It must come before all import statements."
              }
            </P>
            <CodeBlock title="components/counter.tsx">{`"use client"

import { useState, useEffect } from "react"

export default function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = \`Count: \${count}\`
  }, [count])

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Clicked {count} times
    </button>
  )
}`}</CodeBlock>
            <TipBox>
              {
                "'use client' marks a boundary — every component imported into this file also becomes a Client Component automatically. You do not need to add 'use client' to every file in the subtree."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Extract an interactive child component"
            time="5 min"
            tag="Best pattern — keep Server Components as data fetchers"
          >
            <P>
              {
                "Rather than converting your entire page to a Client Component, extract only the interactive parts into a small client component. This keeps the page as a Server Component (which can fetch data, access the database, etc.) and delegates client logic to a leaf component."
              }
            </P>
            <CodeBlock title="app/products/page.tsx — Server Component">{`// No "use client" here — this stays a Server Component
import { AddToCartButton } from "@/components/add-to-cart-button"

async function getProduct(id: string) {
  // Can fetch from DB directly — server only
  const product = await db.product.findUnique({ where: { id } })
  return product
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Client Component rendered inside Server Component — totally fine */}
      <AddToCartButton productId={product.id} price={product.price} />
    </div>
  )
}`}</CodeBlock>
            <CodeBlock title="components/add-to-cart-button.tsx — Client Component">{`"use client"

import { useState } from "react"

export function AddToCartButton({ productId, price }: { productId: string; price: number }) {
  const [added, setAdded] = useState(false)

  return (
    <button
      onClick={async () => {
        await fetch("/api/cart", { method: "POST", body: JSON.stringify({ productId }) })
        setAdded(true)
      }}
    >
      {added ? "Added!" : \`Add to cart — $\${price}\`}
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Move hooks out of Server Components"
            time="3 min"
            tag="Common mistake when migrating from Pages Router"
          >
            <P>
              {
                "When migrating from the Pages Router, it is easy to move a component file to the App Router without realising it became a Server Component. Identify every hook usage and move it to a dedicated client file."
              }
            </P>
            <CodeBlock title="Before — broken in App Router">{`// app/dashboard/page.tsx
// Missing "use client" — will throw the error

import { useState, useEffect } from "react"

export default function DashboardPage() {
  const [data, setData] = useState(null)   // ❌ hook in Server Component

  useEffect(() => {                         // ❌ hook in Server Component
    fetch("/api/stats").then(r => r.json()).then(setData)
  }, [])

  return <div>{data?.visits}</div>
}`}</CodeBlock>
            <CodeBlock title="After — correct App Router pattern">{`// app/dashboard/page.tsx — Server Component fetches data directly
export default async function DashboardPage() {
  const data = await fetch("https://api.example.com/stats").then(r => r.json())
  return <DashboardClient initialData={data} />
}

// app/dashboard/dashboard-client.tsx — Client Component for interactivity
"use client"
import { useState } from "react"

export function DashboardClient({ initialData }: { initialData: any }) {
  const [data, setData] = useState(initialData)
  return <div>{data?.visits}</div>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix third-party library components"
            time="3 min"
            tag="react-icons, framer-motion, chart.js wrappers"
          >
            <P>
              {
                "Many popular libraries (charting, animation, UI) use hooks internally but predate the App Router. Wrap them in a thin client component to create the boundary Next.js needs."
              }
            </P>
            <CodeBlock title="components/chart-wrapper.tsx">{`"use client"

// framer-motion, recharts, react-chartjs-2 etc. all need this wrapper
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

export function RevenueChart({ data }: { data: { month: string; revenue: number }[] }) {
  return (
    <LineChart width={600} height={300} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="revenue" stroke="#6366f1" />
    </LineChart>
  )
}`}</CodeBlock>
            <CodeBlock title="app/reports/page.tsx — still a Server Component">{`import { RevenueChart } from "@/components/chart-wrapper"

export default async function ReportsPage() {
  const data = await getRevenueData() // server-side DB call
  return (
    <div>
      <h1>Revenue Report</h1>
      <RevenueChart data={data} />
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Understand the client boundary tree"
            time="4 min"
            tag="Architecture — avoid over-using 'use client'"
          >
            <P>
              {"A common mistake is adding "}
              <IC>{'"use client"'}</IC>
              {
                " to too many files, effectively turning your entire app into a client-rendered SPA and losing all Server Component benefits. The boundary should be as low as possible in the component tree."
              }
            </P>
            <CodeBlock title="Good boundary placement">{`// ✅ Good — "use client" only on the interactive leaf
app/page.tsx              → Server Component (fetches data)
  └── ProductList.tsx     → Server Component (renders list)
       └── AddToCart.tsx  → "use client" (only interactive part)

// ❌ Bad — unnecessary "use client" bubbles up
"use client"
app/page.tsx              → Client Component (loses SSR)
  └── ProductList.tsx     → Client Component (loses SSR)
       └── AddToCart.tsx  → Client Component`}</CodeBlock>
            <WarnBox>
              {
                "Avoid adding 'use client' to layout.tsx or the root page unless absolutely necessary. This converts your entire route to client rendering, removing all performance and SEO benefits of the App Router."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Default to Server Components — only add 'use client' when you actually need hooks or browser APIs",
              "Place 'use client' as the first line, before all import statements",
              "Extract interactive parts to small leaf components rather than converting entire pages",
              "Wrap third-party libraries that use hooks in your own 'use client' wrapper file",
              "Never add 'use client' to layout.tsx unless every route in that layout needs client rendering",
              "Use the Next.js ESLint plugin — it flags missing 'use client' directives automatically",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js Server Actions not working",
                href: "/category/next-js/error/nextjs-server-action-not-working",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title:
                  "Fix: Next.js fetch not caching — force-cache vs no-store",
                href: "/category/next-js/error/nextjs-fetch-not-caching",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js hydration failed error",
                href: "/category/next-js/error/nextjs-hydration-failed",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Next.js App Router Applications"}
            desc={
              "Softplix engineers build production Next.js apps with correct Server/Client Component architecture. Struggling with App Router migration or performance? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
