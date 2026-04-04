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
  title: "TanStack Query Not Refetching — Fixed [2026]",
  description:
    "Fix TanStack Query not automatically refetching data. Covers staleTime, refetchOnWindowFocus, refetchInterval, query invalidation, and manual refetch.",
  keywords:
    "tanstack query not refetching, react query not refetching on focus 2026, tanstack query staleTime infinity, react query refetchInterval, useQuery manual refetch",
  alternates: {
    canonical:
      "https://softplix.com/category/tanstack/error/tanstack-query-not-refetching",
  },
  openGraph: {
    title: "TanStack Query Not Refetching — Fixed [2026]",
    description:
      "Fix TanStack Query not refetching — staleTime, window focus, refetchInterval, invalidation.",
    type: "article",
    url: "https://softplix.com/category/tanstack/error/tanstack-query-not-refetching",
  },
};

const TOC = [
  { label: "Why TanStack Query stops refetching", href: "#why" },
  { label: "Fix 1 — Reduce staleTime (default is 0)", href: "#fix-1" },
  { label: "Fix 2 — Enable refetchOnWindowFocus", href: "#fix-2" },
  { label: "Fix 3 — Use refetchInterval for polling", href: "#fix-3" },
  { label: "Fix 4 — Manually trigger a refetch", href: "#fix-4" },
  { label: "Fix 5 — Invalidate queries after mutations", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does TanStack Query not refetch when I switch tabs?",
    a: "Refetch on window focus is enabled by default in TanStack Query. If it is not firing, either you have set refetchOnWindowFocus: false in your query or global config, or staleTime: Infinity which prevents refetching even on focus. Check your QueryClient defaultOptions.",
  },
  {
    q: "What is staleTime in TanStack Query?",
    a: "staleTime is how long (in milliseconds) a query's data is considered fresh. During this time, queries will not refetch even if the window focuses or the component remounts. After the staleTime expires, the data is 'stale' and a background refetch is triggered on the next observer event.",
  },
  {
    q: "How do I make TanStack Query poll data every 30 seconds?",
    a: "Set refetchInterval: 30000 in your useQuery options. The query will refetch every 30 seconds in the background. Combine with refetchIntervalInBackground: true to keep polling even when the user's tab is in the background.",
  },
  {
    q: "What is the difference between refetch() and invalidateQueries()?",
    a: "refetch() triggers a refetch for the specific query instance immediately. invalidateQueries() marks matching queries as stale and triggers a background refetch on any active observer — it is broader and works across components. Use refetch() for one-off user-triggered fetches; use invalidateQueries() after mutations.",
  },
  {
    q: "Why is TanStack Query not refetching after a mutation?",
    a: "After a mutation that changes data, you must invalidate the relevant queries using queryClient.invalidateQueries({ queryKey: ['posts'] }). TanStack Query does not know when your server data changes — you must tell it by invalidating the cache keys that cover the affected data.",
  },
  {
    q: "Can TanStack Query refetch in the background without showing a loading state?",
    a: "Yes. Background refetches don't set isLoading to true — they use isFetching instead. isLoading is only true when there is no cached data at all. Use isFetching to show a subtle refresh indicator while the background refetch runs.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TanStack Query Not Refetching — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/tanstack/error/tanstack-query-not-refetching",
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
            title={"TanStack Query Not Refetching"}
            subtitle={"— staleTime, Polling & Invalidation [2026]"}
            sub={
              "Also covers: staleTime · refetchOnWindowFocus · refetchInterval · manual refetch · invalidateQueries after mutation"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TanStack Query v5 · React"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Data never updates after first fetch
// Switching tabs doesn't trigger a refetch
// Mutations complete but query shows stale data`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Key settings that control refetching"}
            </p>
            <CodeBlock title="useQuery refetch options">{`useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 60_000,            // data is fresh for 1 min
  refetchOnWindowFocus: true,   // refetch when tab regains focus
  refetchInterval: false,       // no polling by default
})`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why TanStack Query Stops Refetching"}</SH>
          <P>
            {
              "TanStack Query refetches in the background when certain triggers fire: window focus, component remount, network reconnect, or manual invalidation. These refetches only happen when the data is "
            }
            <IC>{"stale"}</IC>
            {"  . If "}
            <IC>{"staleTime"}</IC>
            {" is set very high or "}
            <IC>{"Infinity"}</IC>
            {
              ", data is never considered stale and background refetches never trigger."
            }
          </P>

          <FixCard
            number="1"
            title="Understand and Set staleTime Correctly"
            time="2 min"
            tag="Data never refetches — staleTime too high"
          >
            <CodeBlock title="staleTime — choose the right value">{`// staleTime: 0 (default) — always stale, refetches on every focus/mount
// staleTime: 60_000 — fresh for 1 minute
// staleTime: Infinity — never stale, never background-refetches

// Per-query staleTime
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  staleTime: 5 * 60 * 1000,   // 5 minutes — good for slowly-changing data
})

// Global default staleTime in QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,   // 1 minute for all queries by default
    },
  },
})`}</CodeBlock>
            <TipBox>
              {
                "Use staleTime: Infinity only for truly static data (config, translations). For user data, prices, or anything that changes, use a specific time value so background refetches keep the UI fresh."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Enable refetchOnWindowFocus"
            time="1 min"
            tag="Data stays stale after switching tabs"
          >
            <CodeBlock title="refetchOnWindowFocus options">{`// Global — enabled by default, but you may have disabled it
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,    // default — true
      refetchOnMount: true,          // default — true
      refetchOnReconnect: true,      // default — true
    },
  },
})

// Per-query override
const { data } = useQuery({
  queryKey: ["live-prices"],
  queryFn: fetchPrices,
  staleTime: 0,                   // always stale
  refetchOnWindowFocus: true,     // refetch when user returns to tab
})

// Set to 'always' to refetch even when data is not stale
const { data } = useQuery({
  queryKey: ["notifications"],
  queryFn: fetchNotifications,
  refetchOnWindowFocus: "always",   // always refetch on focus, even if fresh
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use refetchInterval for Polling"
            time="2 min"
            tag="Live data that must update automatically"
          >
            <CodeBlock title="Polling — refetchInterval">{`// Poll every 30 seconds
const { data: liveData } = useQuery({
  queryKey: ["live-dashboard"],
  queryFn: fetchDashboardData,
  refetchInterval: 30_000,            // poll every 30 seconds
  refetchIntervalInBackground: true,  // keep polling even in background tab
})

// Conditional polling — stop when data meets a condition
const { data: job } = useQuery({
  queryKey: ["job", jobId],
  queryFn: () => fetchJob(jobId),
  refetchInterval: (query) => {
    // Stop polling when job is complete
    if (query.state.data?.status === "completed") return false
    return 5000   // poll every 5 seconds while running
  },
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Manually Trigger a Refetch"
            time="2 min"
            tag="Button click / user action triggers fresh fetch"
          >
            <CodeBlock title="Manual refetch with refetch()">{`"use client"

import { useQuery } from "@tanstack/react-query"

export function DataPanel() {
  const { data, isFetching, refetch } = useQuery({
    queryKey: ["stats"],
    queryFn: fetchStats,
  })

  return (
    <div>
      <div className="flex items-center gap-2">
        <h2>Statistics</h2>
        {isFetching && <span className="text-xs text-gray-400">Refreshing...</span>}
        <button
          onClick={() => refetch()}   // ← triggers an immediate refetch
          disabled={isFetching}
        >
          Refresh
        </button>
      </div>
      <Stats data={data} />
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Invalidate Queries After Mutations"
            time="3 min"
            tag="Mutation completes but list shows stale data"
          >
            <CodeBlock title="useMutation + invalidateQueries">{`import { useMutation, useQueryClient } from "@tanstack/react-query"

export function CreatePostButton() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (newPost: { title: string; content: string }) =>
      fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
      }).then(r => r.json()),

    onSuccess: () => {
      // ✅ Invalidate the posts list — triggers background refetch
      queryClient.invalidateQueries({ queryKey: ["posts"] })

      // ✅ Invalidate multiple related queries
      queryClient.invalidateQueries({ queryKey: ["posts"] })
      queryClient.invalidateQueries({ queryKey: ["user-stats"] })
    },

    onError: (error) => {
      console.error("Failed to create post:", error)
    },
  })

  return (
    <button
      onClick={() => mutation.mutate({ title: "New Post", content: "..." })}
      disabled={mutation.isPending}
    >
      {mutation.isPending ? "Creating..." : "Create Post"}
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Set staleTime based on how frequently your data changes — not staleTime: Infinity for mutable data",
              "Always call queryClient.invalidateQueries after mutations — TanStack Query cannot know data changed otherwise",
              "Use isFetching (not isLoading) to show a refresh indicator during background refetches",
              "Install ReactQueryDevtools to visualise stale/fresh state and trigger times",
              "Use refetchInterval for live data like prices, notifications, or job status polling",
              "Never disable refetchOnWindowFocus globally — it's one of TanStack Query's best UX features",
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
                title: "Fix: TanStack Query stale time not working",
                href: "/category/tanstack/error/tanstack-query-stale-time-not-working",
                time: "5 min read",
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
            title={"We Build Data-Driven UIs with TanStack Query"}
            desc={
              "Softplix engineers implement TanStack Query with optimal caching, invalidation, and real-time refresh strategies. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
