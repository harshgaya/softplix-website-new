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
  title: "Next.js Fetch Not Caching — force-cache vs no-store [Fixed 2026]",
  description:
    "Fix Next.js fetch not caching data. Covers force-cache, no-store, revalidate, unstable_cache, and the new Next.js 15 default caching changes for App Router.",
  keywords:
    "nextjs fetch not caching, next.js fetch cache not working, force-cache nextjs, no-store nextjs, nextjs 15 caching changed, unstable_cache nextjs 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-fetch-not-caching",
  },
  openGraph: {
    title: "Next.js Fetch Not Caching — Fixed [2026]",
    description:
      "Fix Next.js fetch caching — force-cache, no-store, revalidate, Next.js 15 defaults.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-fetch-not-caching",
  },
};

const TOC = [
  {
    label: "How Next.js fetch caching works (and changed in v15)",
    href: "#how",
  },
  { label: "Fix 1 — Explicitly set cache: 'force-cache'", href: "#fix-1" },
  {
    label: "Fix 2 — Use next.revalidate for time-based caching",
    href: "#fix-2",
  },
  { label: "Fix 3 — Use cache tags with revalidateTag", href: "#fix-3" },
  { label: "Fix 4 — Fix caching for non-fetch data sources", href: "#fix-4" },
  { label: "Fix 5 — Force dynamic rendering with no-store", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why did Next.js fetch caching change in version 15?",
    a: "Next.js 15 changed the default fetch cache from 'force-cache' (cache everything) to 'no-store' (never cache). This means all fetch calls are now dynamic by default. You must explicitly opt into caching with cache: 'force-cache' or next: { revalidate: N }.",
  },
  {
    q: "What is the difference between force-cache and no-store?",
    a: "force-cache caches the response indefinitely until manually revalidated — good for static data like product catalogue or blog posts. no-store never caches and always fetches fresh data — good for user-specific or real-time data like dashboards or stock prices.",
  },
  {
    q: "How do I cache fetch responses in Next.js 15?",
    a: "Pass cache: 'force-cache' or next: { revalidate: 3600 } as the second argument to fetch(). For example: fetch(url, { next: { revalidate: 3600 } }) caches the response for one hour and then re-fetches in the background.",
  },
  {
    q: "What is unstable_cache and when should I use it?",
    a: "unstable_cache wraps any async function (not just fetch) with Next.js caching. Use it for database queries, Prisma calls, or any server-side data source that is not a fetch request. It supports the same revalidate and tags options as the fetch cache.",
  },
  {
    q: "Why is my static page fetching data on every request?",
    a: "In Next.js 15, the default changed to no-store. Add cache: 'force-cache' to your fetch calls or add export const revalidate = 3600 at the top of your page file to restore static/ISR behaviour for the entire route.",
  },
  {
    q: "How do I revalidate cached data on demand?",
    a: "Use revalidatePath(path) or revalidateTag(tag) inside a Server Action or API route handler. First tag your fetch with next: { tags: ['products'] }, then call revalidateTag('products') after a data mutation to purge just that cached data.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Fetch Not Caching — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-fetch-not-caching",
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
            tags={["Next.js", "Caching", "Error Fix"]}
            title={"Next.js Fetch Not Caching"}
            subtitle={"— force-cache vs no-store [Fixed 2026]"}
            sub={
              "Also covers: Next.js 15 caching defaults · revalidate · revalidateTag · unstable_cache · ISR"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Next.js 14/15 · App Router · React 19"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Data fetched on every request — page never statically cached
// Next.js 15 changed the default from force-cache → no-store

// Before (Next.js 14 default = cached):
fetch("https://api.example.com/products")  // was cached

// After (Next.js 15 default = not cached):
fetch("https://api.example.com/products")  // now dynamic!`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — explicitly opt into caching"}
            </p>
            <CodeBlock title="app/products/page.tsx">{`// Opt into caching explicitly in Next.js 15
const res = await fetch("https://api.example.com/products", {
  next: { revalidate: 3600 },  // revalidate every hour
})
const products = await res.json()`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">
            {"How Next.js Fetch Caching Works (and Changed in v15)"}
          </SH>
          <P>
            {"Next.js extends the native "}
            <IC>{"fetch"}</IC>
            {
              " API with a built-in data cache. In Next.js 14 and earlier, every "
            }
            <IC>{"fetch"}</IC>
            {" call was cached by default ("}
            <IC>{"force-cache"}</IC>
            {"). In Next.js 15, this default changed to "}
            <IC>{"no-store"}</IC>
            {
              " — meaning all routes are dynamic unless you explicitly opt into caching."
            }
          </P>
          <P>
            {
              "This change was made to avoid surprising developers with stale data, but it also means existing apps that relied on the default caching behaviour will suddenly hit their APIs on every request after upgrading."
            }
          </P>

          <FixCard
            number="1"
            title="Explicitly Set cache: 'force-cache'"
            time="1 min"
            tag="Static data — product catalogue, blog posts, config"
          >
            <P>
              {"For data that rarely changes, pass "}
              <IC>{"cache: 'force-cache'"}</IC>
              {" to cache the response until you manually revalidate it."}
            </P>
            <CodeBlock title="app/products/page.tsx">{`export default async function ProductsPage() {
  // Cached indefinitely — revalidate manually with revalidateTag
  const res = await fetch("https://api.example.com/products", {
    cache: "force-cache",
    next: { tags: ["products"] },
  })
  const products = await res.json()
  return <ProductList products={products} />
}

// Or set a default for the whole route:
export const fetchCache = "force-cache"  // applies to all fetches in this file`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Use next.revalidate for Time-Based Caching (ISR)"
            time="2 min"
            tag="Data changes periodically — news, prices, inventory"
          >
            <P>
              {
                "Incremental Static Regeneration (ISR) caches the response for N seconds, then re-fetches in the background on the next request. This is the sweet spot between static and dynamic for most content."
              }
            </P>
            <CodeBlock title="Per-fetch revalidate">{`// Cache for 60 seconds — serves cached version, refreshes in background
const res = await fetch("https://api.example.com/prices", {
  next: { revalidate: 60 },
})

// Cache for 1 hour
const res2 = await fetch("https://api.example.com/blog", {
  next: { revalidate: 3600 },
})`}</CodeBlock>
            <CodeBlock title="Route-level revalidate (applies to all fetches in the file)">{`// app/blog/page.tsx
export const revalidate = 3600  // revalidate entire route every hour

export default async function BlogPage() {
  const posts = await fetch("https://api.example.com/posts").then(r => r.json())
  return <PostList posts={posts} />
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use Cache Tags with revalidateTag"
            time="3 min"
            tag="On-demand revalidation after mutations"
          >
            <P>
              {"Tag your fetch calls with "}
              <IC>{"next: { tags: ['name'] }"}</IC>
              {" then call "}
              <IC>{"revalidateTag('name')"}</IC>
              {
                " in a Server Action to purge exactly that data without rebuilding the entire page."
              }
            </P>
            <CodeBlock title="app/products/page.tsx — tag the fetch">{`const res = await fetch("https://api.example.com/products", {
  next: {
    revalidate: 3600,
    tags: ["products"],  // ← tag for on-demand revalidation
  },
})
const products = await res.json()`}</CodeBlock>
            <CodeBlock title="app/actions.ts — revalidate on mutation">{`"use server"
import { revalidateTag } from "next/cache"

export async function createProduct(formData: FormData) {
  const name = formData.get("name") as string
  await db.product.create({ data: { name } })

  revalidateTag("products")  // ← purges all fetches tagged "products"
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Caching for Non-fetch Data (Prisma, DB queries)"
            time="3 min"
            tag="unstable_cache — wrap any async function"
          >
            <P>
              {"The Next.js fetch cache only works with "}
              <IC>{"fetch()"}</IC>
              {
                ". For Prisma queries, SDK calls, or any server-side data source, use "
              }
              <IC>{"unstable_cache"}</IC>
              {" to apply the same caching behaviour."}
            </P>
            <CodeBlock title="lib/cached-queries.ts">{`import { unstable_cache } from "next/cache"
import { db } from "@/lib/db"

// Wrap Prisma query with caching
export const getProducts = unstable_cache(
  async () => {
    return db.product.findMany({ orderBy: { createdAt: "desc" } })
  },
  ["products-list"],         // cache key
  {
    revalidate: 3600,        // revalidate every hour
    tags: ["products"],      // tag for on-demand revalidation
  }
)

// Use it in a Server Component
export default async function ProductsPage() {
  const products = await getProducts()  // cached!
  return <ProductList products={products} />
}`}</CodeBlock>
            <TipBox>
              {
                "unstable_cache is stable in production despite its name. The 'unstable_' prefix means the API may change in future versions, not that it is unreliable."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Force Dynamic Rendering with no-store"
            time="1 min"
            tag="User-specific or real-time data — dashboards, live prices"
          >
            <P>
              {
                "For data that must be fresh on every request (user sessions, live scores, personal dashboards), use "
              }
              <IC>{"cache: 'no-store'"}</IC>
              {" or set "}
              <IC>{"export const dynamic = 'force-dynamic'"}</IC>
              {" at the route level."}
            </P>
            <CodeBlock title="app/dashboard/page.tsx">{`// Option A — per-fetch no-store
const res = await fetch("https://api.example.com/user/stats", {
  cache: "no-store",  // always fresh
})

// Option B — force the entire route to be dynamic
export const dynamic = "force-dynamic"

export default async function DashboardPage() {
  const stats = await fetch("https://api.example.com/user/stats").then(r => r.json())
  return <Dashboard stats={stats} />
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "After upgrading to Next.js 15, audit all fetch calls — the default changed from force-cache to no-store",
              "Set cache behaviour explicitly on every fetch call — never rely on defaults between major versions",
              "Use next: { tags: ['name'] } on every cached fetch so you can revalidate precisely after mutations",
              "Use unstable_cache for Prisma and database queries — they are not covered by the fetch cache",
              "Set export const revalidate = N at route level to apply a consistent strategy to all fetches in that route",
              "Use export const dynamic = 'force-dynamic' for routes that serve user-specific or real-time data",
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
                time: "7 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js dynamic server usage error",
                href: "/category/next-js/error/nextjs-dynamic-server-usage-error",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js build failing on Vercel",
                href: "/category/next-js/error/nextjs-build-failing-vercel",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Fast, Cached Next.js Applications"}
            desc={
              "Softplix engineers architect Next.js apps with optimal caching strategies for performance and scalability. Need help with your App Router data layer? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
