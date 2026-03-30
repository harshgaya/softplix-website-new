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
    "Next.js Dynamic Server Usage — Route Couldn't Be Rendered Statically [Fixed 2026]",
  description:
    "Fix Next.js error: Dynamic server usage — Route couldn't be rendered statically. Covers cookies(), headers(), searchParams, force-dynamic, and Suspense boundaries.",
  keywords:
    "nextjs dynamic server usage route couldn't be rendered statically, next.js cookies headers not static, force-dynamic nextjs, searchParams static error nextjs 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-dynamic-server-usage-error",
  },
  openGraph: {
    title: "Next.js Dynamic Server Usage Error — Fixed [2026]",
    description:
      "Fix the dynamic server usage error — force-dynamic, Suspense, cookies, searchParams.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-dynamic-server-usage-error",
  },
};

const TOC = [
  { label: "What causes the dynamic server usage error?", href: "#why" },
  {
    label: "Fix 1 — Add export const dynamic = 'force-dynamic'",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Wrap dynamic parts in a Suspense boundary",
    href: "#fix-2",
  },
  { label: "Fix 3 — Move searchParams to a child component", href: "#fix-3" },
  {
    label: "Fix 4 — Fix cookies() and headers() in static routes",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Use generateStaticParams for dynamic routes",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does 'Route couldn't be rendered statically' mean in Next.js?",
    a: "Next.js tries to statically render routes at build time for performance. When a route uses cookies(), headers(), or searchParams directly, it requires per-request data that cannot be known at build time. Next.js throws this error to tell you the route must be dynamic.",
  },
  {
    q: "How do I fix the dynamic server usage error?",
    a: "The fastest fix is to add export const dynamic = 'force-dynamic' at the top of the page file. This tells Next.js to always render the route on the server per request, accepting the dynamic nature of the data. Alternatively, wrap the dynamic section in a Suspense boundary with Partial Prerendering.",
  },
  {
    q: "When should I use force-dynamic vs Suspense?",
    a: "Use force-dynamic when the entire page depends on per-request data (e.g., a user dashboard). Use Suspense when only part of the page is dynamic — this lets the static shell render at build time and the dynamic content stream in per request, which is faster and better for SEO.",
  },
  {
    q: "Why does reading searchParams make a route dynamic?",
    a: "searchParams (query strings) are part of the URL and can vary per request. Next.js cannot know at build time what query strings will be used, so any page that reads searchParams directly must render dynamically. Move searchParams access to a child component inside a Suspense boundary to preserve partial static rendering.",
  },
  {
    q: "Can I use cookies() in a statically rendered page?",
    a: "No. cookies() reads HTTP headers that are only available at request time. Using it forces the entire route to be dynamic. This is correct behaviour — you should not cache pages that read cookies, as different users have different cookies.",
  },
  {
    q: "What is Partial Prerendering (PPR) in Next.js?",
    a: "PPR (available in Next.js 14+ as experimental) allows a page to have a static shell that is served instantly and dynamic parts that stream in from the server. You mark dynamic sections with Suspense boundaries — the shell is cached at the CDN and the dynamic parts are fetched per request.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Dynamic Server Usage Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-dynamic-server-usage-error",
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
            title={"Next.js: Dynamic server usage —"}
            subtitle={"Route couldn't be rendered statically [Fixed 2026]"}
            sub={
              "Also covers: cookies() · headers() · searchParams · force-dynamic · Suspense · PPR"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Next.js 14/15 · App Router"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error"}
            </p>
            <ErrorBlock>{`Error: Dynamic server usage:
Route /dashboard couldn't be rendered statically because
it used \`cookies\`. See more info here:
https://nextjs.org/docs/messages/dynamic-server-error`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fastest Fix"}
            </p>
            <CodeBlock title="app/dashboard/page.tsx">{`// Add this line at the top of the file
export const dynamic = "force-dynamic"

import { cookies } from "next/headers"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const session = cookieStore.get("session")
  // ...
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"What Causes the Dynamic Server Usage Error?"}</SH>
          <P>
            {
              "Next.js App Router statically renders routes at build time by default. Static rendering is faster and cheaper — pages are built once and served from a CDN. But some APIs are inherently per-request: "
            }
            <IC>{"cookies()"}</IC>
            {", "}
            <IC>{"headers()"}</IC>
            {", and "}
            <IC>{"searchParams"}</IC>
            {" all return data that is only known at request time."}
          </P>
          <P>
            {
              "When Next.js detects these APIs in a statically-expected route, it throws the dynamic server usage error. You have two choices: accept the dynamic rendering with "
            }
            <IC>{"force-dynamic"}</IC>
            {
              ", or isolate the dynamic parts into a Suspense boundary for partial prerendering."
            }
          </P>

          <FixCard
            number="1"
            title="Add export const dynamic = 'force-dynamic'"
            time="1 min"
            tag="Fastest fix — entire route renders per-request"
          >
            <CodeBlock title="app/dashboard/page.tsx">{`export const dynamic = "force-dynamic"  // ← add this

import { cookies, headers } from "next/headers"

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const headersList = await headers()

  const session = cookieStore.get("session")?.value
  const userAgent = headersList.get("user-agent")

  return <Dashboard session={session} userAgent={userAgent} />
}`}</CodeBlock>
            <TipBox>
              {
                "force-dynamic is appropriate for authenticated pages, dashboards, and any route where the content is user-specific. It is not appropriate for public marketing pages — those should stay static."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Wrap Dynamic Parts in a Suspense Boundary"
            time="5 min"
            tag="Best for performance — static shell + dynamic content"
          >
            <P>
              {"If only part of the page is dynamic, wrap just that part in "}
              <IC>{"<Suspense>"}</IC>
              {
                "  and move the dynamic API calls into a child Server Component. The static shell renders at build time; the dynamic part streams in per request."
              }
            </P>
            <CodeBlock title="app/shop/page.tsx — static shell with dynamic cart">{`import { Suspense } from "react"
import { ProductList } from "@/components/product-list"
import { CartCount } from "@/components/cart-count"

// Page stays STATIC — no force-dynamic needed
export default function ShopPage() {
  return (
    <div>
      <h1>Our Products</h1>
      {/* Static — rendered at build time */}
      <ProductList />
      {/* Dynamic — streams per request, Suspense fallback shown until ready */}
      <Suspense fallback={<span>Loading cart...</span>}>
        <CartCount />  {/* reads cookies() internally */}
      </Suspense>
    </div>
  )
}`}</CodeBlock>
            <CodeBlock title="components/cart-count.tsx — isolated dynamic component">{`import { cookies } from "next/headers"

export async function CartCount() {
  const cookieStore = await cookies()
  const cartId = cookieStore.get("cart_id")?.value
  const count = cartId ? await getCartItemCount(cartId) : 0
  return <span>Cart ({count})</span>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix searchParams Making a Route Dynamic"
            time="3 min"
            tag="Search pages, filtered listings, paginated routes"
          >
            <P>
              {"Reading "}
              <IC>{"searchParams"}</IC>
              {
                " directly in a page component makes the entire route dynamic. Move the searchParams consumer into a child component inside a Suspense boundary instead."
              }
            </P>
            <CodeBlock title="Before — entire page becomes dynamic">{`// ❌ searchParams access at page level = force-dynamic on entire route
export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; page?: string }
}) {
  const query = searchParams.q ?? ""  // makes entire page dynamic
  const results = await searchProducts(query)
  return <ResultsList results={results} />
}`}</CodeBlock>
            <CodeBlock title="After — static shell, dynamic search results">{`// app/search/page.tsx — stays static
import { Suspense } from "react"
import { SearchResults } from "@/components/search-results"

export default function SearchPage() {
  return (
    <div>
      <h1>Search</h1>
      <Suspense fallback={<div>Searching...</div>}>
        <SearchResults />  {/* reads searchParams inside */}
      </Suspense>
    </div>
  )
}

// components/search-results.tsx
import { type UnsafeUnwrappedSearchParams } from "next/dist/server/app-render/app-render"

export async function SearchResults() {
  // searchParams accessed here in a Suspense-wrapped child
  const { searchParams } = await import("next/headers")  // example approach
  // or receive as prop from parent via async data
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix cookies() and headers() in Static Routes"
            time="2 min"
            tag="Middleware is often the better place for cookie logic"
          >
            <P>
              {
                "If you only need to read a cookie to redirect or check auth, consider doing it in "
              }
              <IC>{"middleware.ts"}</IC>
              {
                " instead. Middleware runs before rendering and does not affect the static/dynamic status of the page."
              }
            </P>
            <CodeBlock title="middleware.ts — read cookies without affecting page rendering">{`import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const session = request.cookies.get("session")?.value

  // Redirect unauthenticated users without making the page dynamic
  if (!session && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use generateStaticParams for Dynamic Routes"
            time="3 min"
            tag="[slug] pages getting dynamic server usage error"
          >
            <P>
              {"For dynamic route segments like "}
              <IC>{"[id]"}</IC>
              {" or "}
              <IC>{"[slug]"}</IC>
              {", export "}
              <IC>{"generateStaticParams"}</IC>
              {
                " to pre-render known paths at build time and avoid the dynamic server usage error for those paths."
              }
            </P>
            <CodeBlock title="app/blog/[slug]/page.tsx">{`// Generate static pages for all known blog posts at build time
export async function generateStaticParams() {
  const posts = await db.post.findMany({ select: { slug: true } })
  return posts.map((post) => ({ slug: post.slug }))
}

// This page is now statically rendered for known slugs
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await db.post.findUnique({ where: { slug: params.slug } })
  if (!post) notFound()
  return <Article post={post} />
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Never read cookies(), headers(), or searchParams at the top level of a page you want to be static",
              "Use middleware.ts for auth checks and redirects based on cookies — keeps pages static",
              "Wrap dynamic sections in Suspense boundaries to preserve static rendering for the rest of the page",
              "Add export const dynamic = 'force-dynamic' intentionally on user-specific routes like dashboards",
              "Use generateStaticParams for dynamic route segments with known values (blog posts, product pages)",
              "Run next build locally and check the route type output (●  static, λ  dynamic) before deploying",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Next.js cookies() in Server Component",
                href: "/category/next-js/error/nextjs-cookies-server-component",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js fetch not caching",
                href: "/category/next-js/error/nextjs-fetch-not-caching",
                time: "7 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js params undefined",
                href: "/category/next-js/error/nextjs-params-undefined",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Architect High-Performance Next.js Applications"}
            desc={
              "Softplix engineers design Next.js applications with optimal static/dynamic rendering strategies. Need help maximising your App Router performance? Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
