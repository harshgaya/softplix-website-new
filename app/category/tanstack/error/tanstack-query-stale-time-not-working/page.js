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
  title: "TanStack Query staleTime Not Working — Fixed [2026]",
  description:
    "Fix TanStack Query staleTime not working — query refetches on every mount despite staleTime. Covers staleTime vs gcTime, default staleTime: 0, window focus refetch, and global defaults.",
  keywords:
    "tanstack query staleTime not working, react query staleTime not respected, useQuery refetches every mount staleTime, tanstack query staleTime 0 default 2026, react query refetchOnWindowFocus",
  alternates: {
    canonical:
      "https://softplix.com/category/tanstack/error/tanstack-query-stale-time-not-working",
  },
  openGraph: {
    title: "TanStack Query staleTime Not Working — Fixed [2026]",
    description:
      "Fix TanStack Query staleTime — staleTime vs gcTime, default 0, window focus, global config.",
    type: "article",
    url: "https://softplix.com/category/tanstack/error/tanstack-query-stale-time-not-working",
  },
};

const TOC = [
  { label: "Why staleTime appears to be ignored", href: "#why" },
  { label: "Fix 1 — Understand staleTime: 0 is the default", href: "#fix-1" },
  { label: "Fix 2 — Set staleTime globally on QueryClient", href: "#fix-2" },
  { label: "Fix 3 — Disable refetchOnWindowFocus", href: "#fix-3" },
  {
    label: "Fix 4 — Understand staleTime vs gcTime (cacheTime)",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Per-query staleTime for fine-grained control",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is staleTime in TanStack Query?",
    a: "staleTime is the duration in milliseconds that fetched data is considered fresh. While data is fresh, TanStack Query will not re-fetch it in the background, even if the component remounts or the window is refocused. The default is 0, meaning data is immediately stale after fetching and will refetch on every trigger.",
  },
  {
    q: "Why does my query refetch every time even with staleTime set?",
    a: "The most common cause is that staleTime is set correctly but refetchOnWindowFocus is also triggering. When you switch tabs and return, TanStack Query refetches stale queries by default. If your staleTime has already expired, the refetch is valid. Set refetchOnWindowFocus: false to disable this behaviour.",
  },
  {
    q: "What is the difference between staleTime and gcTime?",
    a: "staleTime controls when data is considered stale and triggers a background refetch. gcTime (formerly cacheTime in v4) controls how long unused cached data stays in memory before being garbage collected. A query can be stale but still have cached data — it will show the cached data immediately while refetching in the background.",
  },
  {
    q: "Should I set a global staleTime or per-query?",
    a: "Set a sensible global default on QueryClient (e.g. 60 seconds) and override per-query for data with different freshness requirements. Static data like config or categories can have Infinity staleTime; real-time data like prices can have 0 or a short staleTime.",
  },
  {
    q: "Can staleTime be Infinity?",
    a: "Yes. staleTime: Infinity means data never becomes stale and will never be refetched in the background. You must manually invalidate the query with queryClient.invalidateQueries() to trigger a refetch. Useful for data that only changes when you explicitly mutate it.",
  },
  {
    q: "Does staleTime affect the initial fetch?",
    a: "No. staleTime only applies after the first successful fetch. On the very first render when there is no cached data, the query always fetches regardless of staleTime. staleTime controls subsequent background refetches, not the initial load.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TanStack Query staleTime Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/tanstack/error/tanstack-query-stale-time-not-working",
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
            tags={["TanStack Query", "React Query", "Error Fix"]}
            title={"TanStack Query staleTime Not Working"}
            subtitle={"— Query Refetches Every Mount [Fixed 2026]"}
            sub={
              "Also covers: staleTime: 0 default · global QueryClient config · refetchOnWindowFocus · gcTime vs staleTime · Infinity staleTime"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TanStack Query v5 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Query refetches every time component mounts — even with staleTime set
const { data } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
  staleTime: 5 * 60 * 1000,  // 5 minutes — but it still refetches!
})`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {
                "✅ Fastest Fix — check refetchOnWindowFocus and global defaults"
              }
            </p>
            <CodeBlock title="Set global staleTime + disable window focus refetch">{`const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,          // 1 minute global default
      refetchOnWindowFocus: false,   // stop refetch on tab switch
    },
  },
})`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why staleTime Appears to Be Ignored"}</SH>
          <P>
            {
              "TanStack Query has three triggers that cause a refetch: component mount, window focus, and network reconnect. "
            }
            <IC>{"staleTime"}</IC>
            {
              " only prevents a refetch if data is still fresh at the moment a trigger fires. If the staleTime window has expired (or is 0 by default), all three triggers will cause a background refetch. Understanding which trigger is firing is the key to fixing unexpected refetches."
            }
          </P>

          <FixCard
            number="1"
            title="Understand staleTime: 0 Is the Default"
            time="2 min"
            tag="Root cause — data immediately stale after every fetch"
          >
            <P>
              {"The TanStack Query default is "}
              <IC>{"staleTime: 0"}</IC>
              {
                ", meaning data is considered stale the instant it arrives. Every mount, window focus, and reconnect will trigger a background refetch. You must explicitly set "
              }
              <IC>{"staleTime"}</IC>
              {" to prevent this."}
            </P>
            <CodeBlock title="The three refetch triggers and how staleTime affects each">{`// ❌ Default behaviour — staleTime: 0 means data always stale
const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })
// Refetches on: component mount ✅, window focus ✅, network reconnect ✅

// ✅ With staleTime — data fresh for 5 minutes
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 5 * 60 * 1000,  // 5 minutes in ms
})
// During staleTime window: NO background refetch on mount or focus
// After staleTime expires: refetches again on next trigger`}</CodeBlock>
            <TipBox>
              {
                "staleTime does NOT prevent showing cached data — it only prevents background refetches. Even with staleTime: 0, cached data is shown instantly while the refetch happens in the background. This is what makes TanStack Query feel fast."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Set staleTime Globally on QueryClient"
            time="3 min"
            tag="Apply consistent caching across all queries"
          >
            <P>
              {"Rather than adding "}
              <IC>{"staleTime"}</IC>
              {" to every "}
              <IC>{"useQuery"}</IC>
              {
                " call, set a sensible global default. Individual queries can override it as needed."
              }
            </P>
            <CodeBlock title="providers/query-provider.tsx">{`"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,            // 1 minute — good default for most data
          gcTime: 5 * 60 * 1000,           // 5 minutes in memory after unmount
          refetchOnWindowFocus: true,      // keep true — staleTime controls whether it fires
          refetchOnReconnect: true,
          retry: 1,
        },
      },
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}`}</CodeBlock>
            <CodeBlock title="Per-query overrides — different data needs different freshness">{`// Static data — config, categories, countries
const { data: categories } = useQuery({
  queryKey: ["categories"],
  queryFn: fetchCategories,
  staleTime: Infinity,           // never refetch unless manually invalidated
})

// Semi-static — blog posts, products
const { data: posts } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 5 * 60 * 1000,     // 5 minutes
})

// Real-time — prices, stock, live scores
const { data: price } = useQuery({
  queryKey: ["price", ticker],
  queryFn: () => fetchPrice(ticker),
  staleTime: 0,                  // always stale — refetch every trigger
  refetchInterval: 10_000,       // also poll every 10 seconds
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Disable refetchOnWindowFocus"
            time="2 min"
            tag="Query refetches every time you switch browser tabs"
          >
            <P>
              {
                "By default, TanStack Query refetches stale queries when the browser window regains focus. This is useful for keeping dashboards fresh, but annoying for static data. Disable it globally or per-query."
              }
            </P>
            <CodeBlock title="Disable window focus refetch">{`// Option A — disable globally (simpler, loses dashboard freshness)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,   // ← no refetch on tab switch
    },
  },
})

// Option B — disable per-query (more granular)
const { data } = useQuery({
  queryKey: ["config"],
  queryFn: fetchConfig,
  staleTime: Infinity,
  refetchOnWindowFocus: false,     // override just for this query
})

// Option C — keep window focus but control via staleTime
// If staleTime is 5 minutes, window focus only triggers refetch AFTER 5 mins
// This is the recommended approach — set a meaningful staleTime and keep focus on
const { data } = useQuery({
  queryKey: ["dashboard"],
  queryFn: fetchDashboard,
  staleTime: 30 * 1000,            // 30 seconds — refetches on focus after 30s
  refetchOnWindowFocus: true,      // keep enabled — staleTime does the limiting
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Understand staleTime vs gcTime (cacheTime)"
            time="3 min"
            tag="Confusion between these two options"
          >
            <P>
              {"These two options control different things. "}
              <IC>{"staleTime"}</IC>
              {" controls freshness (when to refetch). "}
              <IC>{"gcTime"}</IC>
              {
                " controls memory (when to remove from cache). Getting them confused leads to unexpected behaviour."
              }
            </P>
            <CodeBlock title="staleTime vs gcTime — visual model">{`// Timeline after a successful fetch:
//
// t=0s      Data fetched ← fresh (no background refetch triggered)
// t=60s     staleTime expires ← data is now STALE
//           Next mount/focus/reconnect WILL trigger background refetch
// t=300s    gcTime expires ← query removed from cache if no subscribers
//           Next mount will show loading (no cached data)

const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 60 * 1000,     // fresh for 1 minute
  gcTime: 5 * 60 * 1000,    // stay in cache for 5 minutes after no subscribers
})

// ✅ Common pattern: gcTime > staleTime
// Data becomes stale → triggers background refetch on next trigger
// But cached (stale) data shows instantly while refetch happens
// After gcTime: cache cleared → next mount shows loading state again`}</CodeBlock>
            <WarnBox>
              {
                "gcTime was called cacheTime in TanStack Query v4. If you are upgrading from v4, rename cacheTime to gcTime in all your query options. The default gcTime is 5 minutes."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Per-Query staleTime for Fine-Grained Control"
            time="3 min"
            tag="Different data types need different freshness windows"
          >
            <P>
              {"A well-architected app uses different "}
              <IC>{"staleTime"}</IC>
              {
                " values based on how frequently the underlying data changes. Use custom hooks to encapsulate these settings."
              }
            </P>
            <CodeBlock title="hooks — encapsulate staleTime per data type">{`import { useQuery } from "@tanstack/react-query"

// Static data — app config, feature flags, categories
export function useConfig() {
  return useQuery({
    queryKey: ["config"],
    queryFn: () => fetch("/api/config").then(r => r.json()),
    staleTime: Infinity,           // never background-refetch
    gcTime: Infinity,              // keep in memory forever
  })
}

// User-owned data — changes when user edits
export function useUserProfile(userId: string) {
  return useQuery({
    queryKey: ["profile", userId],
    queryFn: () => fetch(\`/api/users/\${userId}\`).then(r => r.json()),
    staleTime: 5 * 60 * 1000,     // 5 minutes
    enabled: !!userId,
  })
}

// Volatile data — changes frequently without user action
export function useStockPrice(ticker: string) {
  return useQuery({
    queryKey: ["stock", ticker],
    queryFn: () => fetch(\`/api/stocks/\${ticker}\`).then(r => r.json()),
    staleTime: 0,                  // always stale
    refetchInterval: 15_000,       // poll every 15 seconds
    refetchIntervalInBackground: false,
  })
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Never rely on the default staleTime: 0 in production — set a meaningful global default on QueryClient",
              "Use staleTime: Infinity for static data (config, categories, countries) and invalidate manually after mutations",
              "Keep refetchOnWindowFocus: true but use staleTime to control how frequently it actually fires",
              "Set gcTime longer than staleTime so users see cached data instantly while a refetch happens in background",
              "Rename cacheTime to gcTime if upgrading from TanStack Query v4 to v5",
              "Encapsulate staleTime per data type in custom hooks — makes freshness requirements explicit and consistent",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query cache not invalidating",
                href: "/category/tanstack/error/tanstack-query-cache-not-invalidating",
                time: "6 min read",
              },
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query not refetching",
                href: "/category/tanstack/error/tanstack-query-not-refetching",
                time: "6 min read",
              },
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query data undefined",
                href: "/category/tanstack/error/tanstack-query-data-undefined",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build React Apps with TanStack Query"}
            desc={
              "Softplix engineers architect data-fetching layers with TanStack Query — caching, mutations, optimistic updates, and SSR hydration. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
