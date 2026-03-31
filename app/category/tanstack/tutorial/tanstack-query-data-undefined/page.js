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
  title: "TanStack Query Data Undefined — Fixed [2026]",
  description:
    "Fix TanStack Query (React Query) data returning undefined. Covers QueryClient setup, queryFn returning void, enabled flag, initialData, and TypeScript generics.",
  keywords:
    "tanstack query data undefined, react query data undefined 2026, useQuery data undefined, tanstack query queryFn not returning, react query QueryClientProvider missing",
  alternates: {
    canonical:
      "https://softplix.com/category/tanstack/error/tanstack-query-data-undefined",
  },
  openGraph: {
    title: "TanStack Query Data Undefined — Fixed [2026]",
    description:
      "Fix TanStack Query data undefined — QueryClient, queryFn, enabled, initialData, TypeScript.",
    type: "article",
    url: "https://softplix.com/category/tanstack/error/tanstack-query-data-undefined",
  },
};

const TOC = [
  { label: "Why TanStack Query data is undefined", href: "#why" },
  { label: "Fix 1 — Wrap your app in QueryClientProvider", href: "#fix-1" },
  { label: "Fix 2 — Return data from queryFn (not void)", href: "#fix-2" },
  { label: "Fix 3 — Fix enabled: false blocking the query", href: "#fix-3" },
  { label: "Fix 4 — Add TypeScript generics to useQuery", href: "#fix-4" },
  { label: "Fix 5 — Use initialData or placeholderData", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is TanStack Query data undefined on first render?",
    a: "data is always undefined on the first render while the query is loading. This is normal and expected — use isLoading or isPending to show a skeleton, and only render data-dependent UI after the query resolves. If data stays undefined after loading, check that queryFn returns a value.",
  },
  {
    q: "Why does my queryFn cause data to be undefined?",
    a: "If your queryFn doesn't explicitly return the fetched data, it returns undefined by default. Ensure your async function returns the parsed response: return await res.json() — not just await res.json() without the return statement.",
  },
  {
    q: "What does enabled: false do in TanStack Query?",
    a: "enabled: false prevents the query from running automatically. The query stays in 'idle' state and data is undefined. Use enabled to conditionally run queries — for example, only fetch user data after authentication: enabled: !!userId.",
  },
  {
    q: "How do I show data immediately while TanStack Query fetches?",
    a: "Use placeholderData to show temporary data while the real data loads. placeholderData doesn't get cached — it only appears during the loading state. Alternatively, use initialData to seed the cache with pre-fetched or server-side data.",
  },
  {
    q: "Can I use TanStack Query with Next.js App Router?",
    a: "Yes. Create a QueryClient in a Client Component provider and wrap your app. Use @tanstack/react-query with ReactQueryStreamedHydration or dehydrate/hydrate for server-side data prefetching. The query client must be created per-request on the server, not as a singleton.",
  },
  {
    q: "Why does TypeScript show 'data is possibly undefined' with TanStack Query?",
    a: "TanStack Query v5 types data as T | undefined by default because data is undefined during loading. Either add a loading guard before accessing data, or use the select option to transform the data. You can also use the select option to provide a default value when data is undefined.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TanStack Query Data Undefined — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/tanstack/error/tanstack-query-data-undefined",
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
            title={"TanStack Query: data Is Undefined"}
            subtitle={"— queryFn & Setup Fix [2026]"}
            sub={
              "Also covers: QueryClientProvider · queryFn return · enabled flag · TypeScript generics · initialData · placeholderData"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TanStack Query v5 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`const { data } = useQuery({ queryKey: ["posts"], queryFn: fetchPosts })
console.log(data)  // undefined — even after loading finishes`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Check these in order"}
            </p>
            <CodeBlock title="Diagnostic checklist">{`1. Is QueryClientProvider wrapping your component tree?
2. Does queryFn return the data? (return await res.json())
3. Is enabled not set to false?
4. Check isLoading — data is always undefined while loading`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why TanStack Query Data Is Undefined"}</SH>
          <P>
            {"TanStack Query "}
            <IC>{"data"}</IC>
            {" is "}
            <IC>{"undefined"}</IC>
            {
              " in three distinct situations: while the query is loading (normal), when the query is disabled ("
            }
            <IC>{"enabled: false"}</IC>
            {"), or when "}
            <IC>{"queryFn"}</IC>
            {
              " doesn't return the data. The first is expected — handle it with a loading state. The latter two are bugs."
            }
          </P>

          <FixCard
            number="1"
            title="Wrap App in QueryClientProvider"
            time="3 min"
            tag="Missing provider — useQuery throws or returns undefined"
          >
            <CodeBlock title="providers/query-client-provider.tsx">{`"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from "react"

export function Providers({ children }: { children: React.ReactNode }) {
  // ✅ Create QueryClient inside component — not at module level
  // This ensures each user session gets its own cache (important for SSR)
  const [queryClient] = useState(
    () => new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,   // 1 minute
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
            <CodeBlock title="app/layout.tsx — wrap entire app">{`import { Providers } from "@/providers/query-client-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>           {/* ← wraps everything */}
          {children}
        </Providers>
      </body>
    </html>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Return Data from queryFn"
            time="2 min"
            tag="Most common bug — missing return statement"
          >
            <CodeBlock title="queryFn must return data">{`// ❌ Returns undefined — missing return
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const res = await fetch("/api/posts")
    await res.json()   // ← parsed but not returned!
  }
})

// ✅ Fix — return the parsed data
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: async () => {
    const res = await fetch("/api/posts")
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()   // ← return the data
  }
})

// ✅ Better — reusable fetch function
async function fetchPosts(): Promise<Post[]> {
  const res = await fetch("/api/posts")
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`)
  return res.json()
}

const { data, isLoading, error } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix enabled: false Blocking the Query"
            time="2 min"
            tag="Query never runs — data permanently undefined"
          >
            <CodeBlock title="enabled — conditional query execution">{`// ❌ Wrong — disabled query never runs, data stays undefined
const { data } = useQuery({
  queryKey: ["user"],
  queryFn: fetchUser,
  enabled: false,   // ← intentionally disabled — maybe forgot to remove?
})

// ✅ Conditionally enable — runs only when userId exists
const { userId } = useAuth()
const { data: user } = useQuery({
  queryKey: ["user", userId],
  queryFn: () => fetchUser(userId!),
  enabled: !!userId,   // ← runs as soon as userId is available
})

// ✅ Dependent query — runs after first query resolves
const { data: user } = useQuery({ queryKey: ["user"], queryFn: fetchUser })
const { data: posts } = useQuery({
  queryKey: ["posts", user?.id],
  queryFn: () => fetchPostsByUser(user!.id),
  enabled: !!user?.id,   // ← waits for user query to complete
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Add TypeScript Generics to useQuery"
            time="2 min"
            tag="data typed as unknown or any"
          >
            <CodeBlock title="Type-safe useQuery with generics">{`import { useQuery } from "@tanstack/react-query"

interface Post {
  id: string
  title: string
  content: string
  createdAt: string
}

// TanStack Query v5 — generics: <TData, TError>
const { data, isLoading, error } = useQuery<Post[], Error>({
  queryKey: ["posts"],
  queryFn: async (): Promise<Post[]> => {
    const res = await fetch("/api/posts")
    if (!res.ok) throw new Error("Failed to fetch")
    return res.json()
  },
})

// data is now typed as Post[] | undefined
if (isLoading) return <Skeleton />
if (error) return <ErrorMessage error={error.message} />
if (!data) return null

// data is Post[] here — TypeScript knows
return <PostList posts={data} />`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use initialData or placeholderData"
            time="3 min"
            tag="Show content immediately before query resolves"
          >
            <CodeBlock title="initialData and placeholderData patterns">{`// placeholderData — shown during loading, not cached
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  placeholderData: [],   // shows empty array during loading
})

// placeholderData from previous query (pagination)
import { keepPreviousData } from "@tanstack/react-query"
const { data, isPlaceholderData } = useQuery({
  queryKey: ["posts", page],
  queryFn: () => fetchPosts(page),
  placeholderData: keepPreviousData,  // keeps previous page while next loads
})

// initialData — seeds the cache (treated as real data)
const { data } = useQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  initialData: serverSidePosts,   // from getServerSideProps or Server Component
  initialDataUpdatedAt: Date.now() - 60000,  // mark as 60s old — triggers refetch
})`}</CodeBlock>
            <TipBox>
              {
                "Use placeholderData for skeleton UX — it shows placeholder content during loading but always refetches. Use initialData when you have real data from SSR — it's treated as cached data and only refetches when stale."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always guard against undefined before rendering: if (isLoading) return <Skeleton />",
              "Always return data from queryFn — missing return is the #1 cause of undefined data",
              "Create QueryClient inside useState() in the provider — not at module level",
              "Add TypeScript generics to useQuery<DataType, ErrorType> for type-safe data access",
              "Use enabled: !!dependency for dependent queries that need previous query data",
              "Install ReactQueryDevtools — it shows query state, cached data, and stale time visually",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query not refetching",
                href: "/category/tanstack/error/tanstack-query-not-refetching",
                time: "6 min read",
              },
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
            ]}
          />
          <CTA
            title={"We Build React Apps with TanStack Query"}
            desc={
              "Softplix engineers implement TanStack Query for data fetching, caching, and real-time sync in React and Next.js applications. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
