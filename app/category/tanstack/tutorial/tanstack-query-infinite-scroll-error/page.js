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
  title: "TanStack Query Infinite Scroll Error — useInfiniteQuery Fixed [2026]",
  description:
    "Fix TanStack Query infinite scroll errors — useInfiniteQuery setup, getNextPageParam, IntersectionObserver trigger, flat pages, and hasNextPage not updating correctly.",
  keywords:
    "tanstack query infinite scroll error, useInfiniteQuery not working, react query infinite scroll 2026, getNextPageParam undefined, useInfiniteQuery hasNextPage false, fetchNextPage not triggering",
  alternates: {
    canonical:
      "https://softplix.com/category/tanstack/error/tanstack-query-infinite-scroll-error",
  },
  openGraph: {
    title: "TanStack Query Infinite Scroll Error — Fixed [2026]",
    description:
      "Fix useInfiniteQuery — getNextPageParam, IntersectionObserver, flat pages, hasNextPage.",
    type: "article",
    url: "https://softplix.com/category/tanstack/error/tanstack-query-infinite-scroll-error",
  },
};

const TOC = [
  { label: "How useInfiniteQuery works in TanStack Query v5", href: "#how" },
  {
    label: "Fix 1 — Return nextCursor from getNextPageParam correctly",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Trigger fetchNextPage with IntersectionObserver",
    href: "#fix-2",
  },
  { label: "Fix 3 — Flatten pages into a single item array", href: "#fix-3" },
  { label: "Fix 4 — Fix hasNextPage always false", href: "#fix-4" },
  {
    label: "Fix 5 — Handle the v5 initialPageParam requirement",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is useInfiniteQuery in TanStack Query?",
    a: "useInfiniteQuery is a TanStack Query hook for paginated or cursor-based data loading. Unlike useQuery which holds a single result, useInfiniteQuery stores multiple pages of results and provides fetchNextPage to load more. It is the standard way to implement infinite scroll in React.",
  },
  {
    q: "Why is hasNextPage always false in my useInfiniteQuery?",
    a: "hasNextPage is derived from getNextPageParam — it is true only when getNextPageParam returns a non-undefined, non-null value. If your getNextPageParam always returns undefined (even when there are more pages), hasNextPage will always be false. Check that your API response includes a nextCursor or nextPage field and that you are reading it correctly.",
  },
  {
    q: "What is getNextPageParam in TanStack Query?",
    a: "getNextPageParam is a function that receives the last page of data (and all pages so far) and must return the cursor or page number for the next page. If there are no more pages, return undefined or null. The return value is passed as the pageParam argument to your queryFn on the next fetch.",
  },
  {
    q: "Why do I need initialPageParam in TanStack Query v5?",
    a: "TanStack Query v5 made initialPageParam a required option for useInfiniteQuery. In v4, the first fetch had pageParam as undefined by default. In v5, you must explicitly set initialPageParam: 0 (for page-based) or initialPageParam: null (for cursor-based). Not setting this causes a TypeScript error and incorrect first-page fetching.",
  },
  {
    q: "How do I flatten useInfiniteQuery pages into a flat array?",
    a: "Use data.pages.flatMap(page => page.items) to combine all page results into a single array. data.pages is an array of page responses — each page has your API's response shape. Access items within each page using the appropriate field name from your API (e.g. .items, .data, .results, .posts).",
  },
  {
    q: "What is IntersectionObserver and why do I need it for infinite scroll?",
    a: "IntersectionObserver is a browser API that notifies you when an element becomes visible in the viewport. For infinite scroll, you attach it to a sentinel element at the bottom of your list. When the sentinel becomes visible, you call fetchNextPage to load the next batch of items. It is more performant than scroll event listeners.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TanStack Query Infinite Scroll Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/tanstack/error/tanstack-query-infinite-scroll-error",
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
            tags={["TanStack Query", "Infinite Scroll", "Error Fix"]}
            title={"TanStack Query Infinite Scroll Error"}
            subtitle={"— useInfiniteQuery Fixed [2026]"}
            sub={
              "Also covers: getNextPageParam · initialPageParam (v5) · IntersectionObserver · flatMap pages · hasNextPage false"
            }
            date={"January 2026"}
            read={"8 min read"}
            tech={"TanStack Query v5 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`// hasNextPage is always false — no more pages load
// OR:
TypeError: data.pages.flat is not a function
// OR (TanStack Query v5):
Error: initialPageParam is required for useInfiniteQuery`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct v5 useInfiniteQuery structure"}
            </p>
            <CodeBlock title="Minimal working useInfiniteQuery (v5)">{`const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: ({ pageParam }) => fetchPosts({ cursor: pageParam }),
  initialPageParam: null,                          // ← required in v5
  getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
})

const allPosts = data?.pages.flatMap(page => page.items) ?? []`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="how">{"How useInfiniteQuery Works in TanStack Query v5"}</SH>
          <P>
            {"Unlike "}
            <IC>{"useQuery"}</IC>
            {" which stores a single result, "}
            <IC>{"useInfiniteQuery"}</IC>
            {" stores an array of page results in "}
            <IC>{"data.pages"}</IC>
            {"  . Each time you call "}
            <IC>{"fetchNextPage()"}</IC>
            {", TanStack Query calls your "}
            <IC>{"queryFn"}</IC>
            {" with the next "}
            <IC>{"pageParam"}</IC>
            {" returned by "}
            <IC>{"getNextPageParam"}</IC>
            {"  . The new page is appended to "}
            <IC>{"data.pages"}</IC>
            {" and your component re-renders with the full accumulated list."}
          </P>
          <P>
            {"TanStack Query v5 made "}
            <IC>{"initialPageParam"}</IC>
            {" a required option. Missing it is the most common upgrade error."}
          </P>

          <FixCard
            number="1"
            title="Return nextCursor from getNextPageParam Correctly"
            time="5 min"
            tag="hasNextPage false — pagination never advances"
          >
            <P>
              {"Your "}
              <IC>{"getNextPageParam"}</IC>
              {
                " function receives the last page response and must return the next cursor or page number. Returning "
              }
              <IC>{"undefined"}</IC>
              {
                " signals no more pages — ensure your API response actually contains the next cursor field."
              }
            </P>
            <CodeBlock title="API response shape — what your server returns">{`// Example API response for cursor-based pagination:
{
  items: [ /* posts array */ ],
  nextCursor: "eyJpZCI6MTAwfQ==",  // base64 cursor — null when no more pages
  hasMore: true
}

// Example API response for page-number pagination:
{
  posts: [ /* posts array */ ],
  page: 1,
  totalPages: 10
}`}</CodeBlock>
            <CodeBlock title="getNextPageParam — cursor-based and page-number patterns">{`// Pattern A — cursor-based (recommended for large datasets)
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: async ({ pageParam }) => {
    const url = pageParam
      ? \`/api/posts?cursor=\${pageParam}\`
      : "/api/posts"
    const res = await fetch(url)
    return res.json()
    // Returns: { items: [...], nextCursor: "abc" | null }
  },
  initialPageParam: null,
  getNextPageParam: (lastPage) => {
    // ✅ Return cursor if there are more pages, undefined if not
    return lastPage.nextCursor ?? undefined
  },
})

// Pattern B — page number based
const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: async ({ pageParam }) => {
    const res = await fetch(\`/api/posts?page=\${pageParam}&limit=10\`)
    return res.json()
    // Returns: { posts: [...], page: 1, totalPages: 10 }
  },
  initialPageParam: 1,
  getNextPageParam: (lastPage) => {
    // ✅ Return next page number, or undefined if on last page
    return lastPage.page < lastPage.totalPages
      ? lastPage.page + 1
      : undefined
  },
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Trigger fetchNextPage with IntersectionObserver"
            time="8 min"
            tag="Complete infinite scroll implementation"
          >
            <P>
              {"The most reliable way to trigger "}
              <IC>{"fetchNextPage"}</IC>
              {
                " is to observe a sentinel element at the bottom of the list. When it enters the viewport, load the next page."
              }
            </P>
            <CodeBlock title="hooks/use-intersection-observer.ts">{`import { useEffect, useRef } from "react"

export function useIntersectionObserver(
  callback: () => void,
  options: IntersectionObserverInit = { threshold: 0.1 }
) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback()
    }, options)

    observer.observe(el)
    return () => observer.disconnect()
  }, [callback, options])

  return ref
}`}</CodeBlock>
            <CodeBlock title="components/post-list.tsx — complete infinite scroll">{`"use client"

import { useInfiniteQuery } from "@tanstack/react-query"
import { useCallback } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

async function fetchPosts({ pageParam }: { pageParam: string | null }) {
  const url = pageParam
    ? \`/api/posts?cursor=\${pageParam}\`
    : "/api/posts"
  const res = await fetch(url)
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json() as Promise<{ items: Post[]; nextCursor: string | null }>
}

export function PostList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    staleTime: 5 * 60 * 1000,
  })

  // Memoised callback — fetchNextPage is stable but wrap anyway
  const loadMore = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // Attach observer to sentinel element
  const sentinelRef = useIntersectionObserver(loadMore)

  // Flatten all pages into one array
  const posts = data?.pages.flatMap(page => page.items) ?? []

  if (isLoading) return <div>Loading posts...</div>
  if (isError) return <div>Error loading posts</div>

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="border rounded p-4 mb-3">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}

      {/* Sentinel — triggers fetchNextPage when visible */}
      <div ref={sentinelRef} className="h-4" />

      {isFetchingNextPage && <div>Loading more...</div>}
      {!hasNextPage && posts.length > 0 && <div>No more posts</div>}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Flatten Pages into a Single Item Array"
            time="2 min"
            tag="TypeError: Cannot read properties of undefined"
          >
            <P>
              {"A very common mistake is trying to map over "}
              <IC>{"data.pages"}</IC>
              {" directly, or using "}
              <IC>{".flat()"}</IC>
              {" instead of "}
              <IC>{".flatMap()"}</IC>
              {"  . You must use "}
              <IC>{"flatMap"}</IC>
              {" to access the items array inside each page."}
            </P>
            <CodeBlock title="Correct page flattening">{`// data.pages shape:
// [
//   { items: [post1, post2, post3], nextCursor: "abc" },  ← page 1
//   { items: [post4, post5, post6], nextCursor: "def" },  ← page 2
//   { items: [post7, post8], nextCursor: null },           ← page 3
// ]

// ❌ Wrong — maps over page OBJECTS, not items
const posts = data?.pages.map(page => page)   // array of page objects

// ❌ Wrong — .flat() flattens one level but page is an object not array
const posts = data?.pages.flat()              // still array of page objects

// ✅ Correct — flatMap extracts items from each page
const posts = data?.pages.flatMap(page => page.items) ?? []

// ✅ With TypeScript — ensure type safety
type PostsPage = { items: Post[]; nextCursor: string | null }
const posts: Post[] = data?.pages.flatMap((page: PostsPage) => page.items) ?? []`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix hasNextPage Always False"
            time="3 min"
            tag="getNextPageParam always returning undefined"
          >
            <P>
              {"If "}
              <IC>{"hasNextPage"}</IC>
              {" is always "}
              <IC>{"false"}</IC>
              {"  , debug your "}
              <IC>{"getNextPageParam"}</IC>
              {" by logging the last page and checking what it contains."}
            </P>
            <CodeBlock title="Debug getNextPageParam">{`const { data, hasNextPage } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: async ({ pageParam }) => {
    const res = await fetch(\`/api/posts?cursor=\${pageParam ?? ""}\`)
    const data = await res.json()
    console.log("Page data:", data)           // ← check what your API returns
    console.log("nextCursor:", data.nextCursor)  // ← is this actually set?
    return data
  },
  initialPageParam: null,
  getNextPageParam: (lastPage, allPages) => {
    console.log("getNextPageParam called:", lastPage) // ← check the last page
    // Common mistakes:
    // ❌ return lastPage.next_cursor  // wrong field name (underscore)
    // ❌ return lastPage.data.nextCursor  // wrong nesting
    // ✅ return lastPage.nextCursor ?? undefined  // correct
    return lastPage.nextCursor ?? undefined
  },
})

console.log("hasNextPage:", hasNextPage)    // should be true when more pages exist`}</CodeBlock>
            <TipBox>
              {
                "Open React Query DevTools (add ReactQueryDevtools to your provider) and inspect the infinite query. It shows all pages, the current pageParam, and whether hasNextPage is true — invaluable for debugging."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Handle the v5 initialPageParam Requirement"
            time="2 min"
            tag="Upgrading from TanStack Query v4 — breaking change"
          >
            <P>
              {"TanStack Query v5 requires "}
              <IC>{"initialPageParam"}</IC>
              {" explicitly. In v4, "}
              <IC>{"pageParam"}</IC>
              {" started as "}
              <IC>{"undefined"}</IC>
              {" by default. In v5, you must declare the initial value."}
            </P>
            <CodeBlock title="v4 → v5 migration">{`// ❌ v4 pattern — pageParam started as undefined
const { data } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: ({ pageParam = null }) => fetchPosts(pageParam),  // default in queryFn
  getNextPageParam: (lastPage) => lastPage.nextCursor,
})

// ✅ v5 pattern — initialPageParam is required
const { data } = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: ({ pageParam }) => fetchPosts(pageParam),         // no default needed
  initialPageParam: null,                                     // ← declare here
  getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
})

// Also changed in v5:
// - data.pages is now typed correctly with TypeScript
// - getNextPageParam and getPreviousPageParam receive (lastPage, allPages, lastPageParam)
// - cacheTime renamed to gcTime`}</CodeBlock>
            <CodeBlock title="Complete TypeScript-typed useInfiniteQuery (v5)">{`import { useInfiniteQuery } from "@tanstack/react-query"

type Post = { id: string; title: string; content: string }
type PostsPage = { items: Post[]; nextCursor: string | null }

function useInfinitePosts() {
  return useInfiniteQuery<PostsPage, Error, PostsPage, string[], string | null>({
    queryKey: ["posts"],
    queryFn: async ({ pageParam }) => {
      const url = pageParam ? \`/api/posts?cursor=\${pageParam}\` : "/api/posts"
      const res = await fetch(url)
      return res.json()
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 5 * 60 * 1000,
  })
}

// Usage:
function PostList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfinitePosts()
  const posts = data?.pages.flatMap(page => page.items) ?? []
  // ...
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always set initialPageParam explicitly in v5 — use null for cursor-based, 1 for page-number based",
              "Log your API response inside queryFn during development to confirm the nextCursor field name and location",
              "Use flatMap(page => page.items) to flatten pages — never .flat() or iterating pages directly",
              "Return undefined (not null) from getNextPageParam when there are no more pages — null is treated as a valid pageParam",
              "Use IntersectionObserver for scroll detection — more reliable and performant than scroll event listeners",
              "Install ReactQueryDevtools and inspect infinite query state to debug hasNextPage and page counts",
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
                title: "Fix: TanStack Query staleTime not working",
                href: "/category/tanstack/error/tanstack-query-stale-time-not-working",
                time: "6 min read",
              },
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query not refetching",
                href: "/category/tanstack/error/tanstack-query-not-refetching",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Infinite Scroll with TanStack Query"}
            desc={
              "Softplix engineers implement cursor-based pagination, infinite scroll, and optimistic UIs with TanStack Query v5. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
