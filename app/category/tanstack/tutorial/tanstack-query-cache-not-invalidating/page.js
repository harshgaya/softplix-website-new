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
  title: "TanStack Query Cache Not Invalidating — Fixed [2026]",
  description:
    "Fix TanStack Query cache not invalidating after mutations. Covers invalidateQueries key matching, useMutation onSuccess, exact vs partial key matching, and optimistic updates.",
  keywords:
    "tanstack query cache not invalidating, react query invalidateQueries not working, useMutation onSuccess not updating, tanstack query queryKey mismatch 2026, react query optimistic update",
  alternates: {
    canonical:
      "https://softplix.com/category/tanstack/error/tanstack-query-cache-not-invalidating",
  },
  openGraph: {
    title: "TanStack Query Cache Not Invalidating — Fixed [2026]",
    description:
      "Fix TanStack Query cache invalidation — key matching, onSuccess, optimistic updates.",
    type: "article",
    url: "https://softplix.com/category/tanstack/error/tanstack-query-cache-not-invalidating",
  },
};

const TOC = [
  { label: "Why invalidateQueries silently does nothing", href: "#why" },
  { label: "Fix 1 — Match the queryKey exactly", href: "#fix-1" },
  { label: "Fix 2 — Call invalidateQueries in onSuccess", href: "#fix-2" },
  {
    label: "Fix 3 — Use partial key matching to invalidate related queries",
    href: "#fix-3",
  },
  {
    label: "Fix 4 — Use setQueryData for instant optimistic updates",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Await invalidateQueries to prevent race conditions",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does invalidateQueries not trigger a refetch?",
    a: "The most common cause is a queryKey mismatch — the key passed to invalidateQueries does not match the queryKey used in useQuery. TanStack Query uses deep equality to match keys, so ['posts', { userId }] and ['posts', userId] are different keys even if the values look the same.",
  },
  {
    q: "Where should I call invalidateQueries after a mutation?",
    a: "Call invalidateQueries inside the onSuccess callback of useMutation. This ensures it only runs after the mutation succeeds — not on error or loading. You can also use onSettled to invalidate regardless of success or failure, which is safer for ensuring UI consistency.",
  },
  {
    q: "What is the difference between invalidateQueries and refetchQueries?",
    a: "invalidateQueries marks matching queries as stale so they will refetch the next time they have active subscribers. refetchQueries immediately triggers a refetch regardless of staleTime. Use invalidateQueries for most mutations — it is more efficient because it only refetches if the query is currently in use.",
  },
  {
    q: "How do I invalidate all queries for a feature at once?",
    a: "Use partial key matching — pass just the first segment of your queryKey array. For example, invalidateQueries({ queryKey: ['posts'] }) will invalidate ['posts'], ['posts', 1], ['posts', { status: 'published' }], and any other key starting with 'posts'.",
  },
  {
    q: "What is an optimistic update in TanStack Query?",
    a: "An optimistic update uses setQueryData to immediately update the cache with the expected result before the mutation completes. If the mutation fails, you roll back the cache to the previous value using the context returned from onMutate. This makes the UI feel instant.",
  },
  {
    q: "Should I use invalidateQueries or setQueryData after a mutation?",
    a: "Use setQueryData for instant optimistic updates when user experience is critical (editing a todo, liking a post). Use invalidateQueries to trigger a server refetch after mutations that affect data you can't predict client-side (creating a post with server-generated fields like ID and timestamps).",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TanStack Query Cache Not Invalidating — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/tanstack/error/tanstack-query-cache-not-invalidating",
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
            title={"TanStack Query Cache Not Invalidating"}
            subtitle={"— invalidateQueries Not Working [Fixed 2026]"}
            sub={
              "Also covers: queryKey mismatch · onSuccess · partial key matching · setQueryData · optimistic updates · race conditions"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TanStack Query v5 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Mutation succeeds — but the list doesn't update
const mutation = useMutation({
  mutationFn: createPost,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["post"] })  // wrong key!
    // The query uses ["posts"] — note the 's'
  },
})`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — match queryKey exactly"}
            </p>
            <CodeBlock title="Correct — key must match useQuery exactly">{`// useQuery uses:
queryKey: ["posts"]

// invalidateQueries must use the same key:
queryClient.invalidateQueries({ queryKey: ["posts"] })  // ✅ matches`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why invalidateQueries Silently Does Nothing"}</SH>
          <P>
            {
              "TanStack Query matches query keys using deep equality. If there is any difference between the key you pass to "
            }
            <IC>{"invalidateQueries"}</IC>
            {" and the key used in "}
            <IC>{"useQuery"}</IC>
            {
              " — a typo, different structure, different order of object properties — the invalidation silently matches nothing and no refetch occurs."
            }
          </P>
          <P>
            {"The second common cause is calling "}
            <IC>{"invalidateQueries"}</IC>
            {" outside of "}
            <IC>{"onSuccess"}</IC>
            {
              ", or without awaiting it, causing a race between the invalidation and the component's response to the mutation."
            }
          </P>

          <FixCard
            number="1"
            title="Match the queryKey Exactly"
            time="2 min"
            tag="Root cause — key typo or structural mismatch"
          >
            <P>
              {"Compare your "}
              <IC>{"useQuery"}</IC>
              {" key and your "}
              <IC>{"invalidateQueries"}</IC>
              {" key character by character. They must be identical arrays."}
            </P>
            <CodeBlock title="Common key mismatches">{`// ❌ Typo — "post" vs "posts"
useQuery({ queryKey: ["posts"], queryFn: fetchPosts })
queryClient.invalidateQueries({ queryKey: ["post"] })        // no match

// ❌ Wrong nesting — flat vs nested
useQuery({ queryKey: ["posts", userId], queryFn: ... })
queryClient.invalidateQueries({ queryKey: [["posts", userId]] })  // no match

// ❌ Object key — property order matters for some versions
useQuery({ queryKey: ["posts", { status: "published", userId }], queryFn: ... })
queryClient.invalidateQueries({ queryKey: ["posts", { userId, status: "published" }] })

// ✅ Use query key factories to avoid typos
export const postKeys = {
  all: ["posts"] as const,
  list: (filters?: object) => [...postKeys.all, filters] as const,
  detail: (id: string) => [...postKeys.all, id] as const,
}

// In useQuery:
queryKey: postKeys.list({ userId })

// In invalidateQueries:
queryClient.invalidateQueries({ queryKey: postKeys.list({ userId }) })`}</CodeBlock>
            <TipBox>
              {
                "Use query key factory objects (like postKeys above) to centralise your key definitions. This eliminates typos and makes invalidation reliable — one source of truth for every query key."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Call invalidateQueries in onSuccess"
            time="3 min"
            tag="Mutation succeeds but list doesn't update"
          >
            <P>
              {"Always trigger cache invalidation inside "}
              <IC>{"onSuccess"}</IC>
              {" of "}
              <IC>{"useMutation"}</IC>
              {
                "  . This guarantees the invalidation only happens after the server confirms success."
              }
            </P>
            <CodeBlock title="Complete useMutation + invalidation pattern">{`import { useMutation, useQueryClient } from "@tanstack/react-query"
import { postKeys } from "@/lib/query-keys"

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newPost: { title: string; content: string }) => {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      })
      if (!res.ok) throw new Error("Failed to create post")
      return res.json()
    },

    // ✅ Invalidate in onSuccess — runs only after confirmed success
    onSuccess: async (createdPost) => {
      // Invalidate the list — triggers refetch
      await queryClient.invalidateQueries({ queryKey: postKeys.all })

      // Optionally seed the individual post cache immediately
      queryClient.setQueryData(postKeys.detail(createdPost.id), createdPost)
    },

    onError: (error) => {
      console.error("Create post failed:", error)
    },
  })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use Partial Key Matching to Invalidate Related Queries"
            time="3 min"
            tag="Invalidate multiple related queries at once"
          >
            <P>
              {"Passing a partial key to "}
              <IC>{"invalidateQueries"}</IC>
              {
                " invalidates all queries whose key starts with that array. Use this to invalidate a whole feature's queries after a mutation."
              }
            </P>
            <CodeBlock title="Partial key matching — invalidate a family of queries">{`// Queries in your app:
// ["posts"]                       — post list
// ["posts", { status: "draft" }]  — filtered post list
// ["posts", "abc123"]             — single post detail
// ["posts", "abc123", "comments"] — post comments

// ✅ Invalidate ALL of the above with one call:
queryClient.invalidateQueries({ queryKey: ["posts"] })

// ✅ Invalidate only detail + comments (not lists):
queryClient.invalidateQueries({ queryKey: ["posts", postId] })

// ✅ Exact match only — does NOT invalidate children:
queryClient.invalidateQueries({
  queryKey: ["posts"],
  exact: true,           // only matches ["posts"], not ["posts", anything]
})

// ✅ After delete — invalidate everything related to posts
onSuccess: async () => {
  await queryClient.invalidateQueries({ queryKey: ["posts"] })
  await queryClient.invalidateQueries({ queryKey: ["comments"] })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use setQueryData for Instant Optimistic Updates"
            time="5 min"
            tag="UI lag after mutation — want instant feedback"
          >
            <P>
              {
                "Instead of waiting for a refetch, update the cache directly with "
              }
              <IC>{"setQueryData"}</IC>
              {
                " for instant UI response. Roll back with the snapshot if the mutation fails."
              }
            </P>
            <CodeBlock title="Optimistic update — complete pattern">{`export function useToggleLike(postId: string) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (liked: boolean) =>
      fetch(\`/api/posts/\${postId}/like\`, {
        method: liked ? "POST" : "DELETE",
      }),

    // onMutate runs BEFORE the mutation — save snapshot & optimistic update
    onMutate: async (liked) => {
      // Cancel in-flight refetches (prevent overwriting optimistic update)
      await queryClient.cancelQueries({ queryKey: ["posts", postId] })

      // Snapshot the previous value
      const previousPost = queryClient.getQueryData(["posts", postId])

      // Optimistically update the cache
      queryClient.setQueryData(["posts", postId], (old: any) => ({
        ...old,
        liked,
        likeCount: liked ? old.likeCount + 1 : old.likeCount - 1,
      }))

      // Return context for rollback
      return { previousPost }
    },

    // onError — rollback to snapshot
    onError: (err, liked, context) => {
      queryClient.setQueryData(["posts", postId], context?.previousPost)
    },

    // onSettled — always sync with server after mutation
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["posts", postId] })
    },
  })
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Await invalidateQueries to Prevent Race Conditions"
            time="2 min"
            tag="Query updates before mutation response arrives"
          >
            <P>
              {"If you do not await "}
              <IC>{"invalidateQueries"}</IC>
              {
                "  , the component may re-render and read stale data before the refetch completes. Awaiting ensures the refetch finishes before "
              }
              <IC>{"onSuccess"}</IC>
              {" returns."}
            </P>
            <CodeBlock title="Await invalidation in onSuccess">{`// ❌ Race condition — invalidation fires but doesn't wait for refetch
onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["posts"] })
  router.push("/posts")  // navigates before refetch finishes — stale data shown
}

// ✅ Await the invalidation — refetch finishes before navigation
onSuccess: async () => {
  await queryClient.invalidateQueries({ queryKey: ["posts"] })
  router.push("/posts")  // navigates after fresh data is in cache
}

// ✅ Or use onSettled to always invalidate (success or error):
onSettled: async () => {
  await queryClient.invalidateQueries({ queryKey: ["posts"] })
}`}</CodeBlock>
            <WarnBox>
              {
                "Awaiting invalidateQueries waits for the refetch to complete. This adds a brief delay before onSuccess finishes. For most UIs this is fine. For instant feedback, combine with an optimistic update (Fix 4) so the UI updates immediately while the refetch happens in background."
              }
            </WarnBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use query key factory objects (e.g. postKeys) — one source of truth for all key strings, eliminates typos",
              "Always call invalidateQueries inside onSuccess or onSettled of useMutation — never ad hoc",
              "Await invalidateQueries in onSuccess to prevent race conditions before navigation",
              "Use partial key matching to invalidate an entire feature's queries with a single call",
              "Install ReactQueryDevtools — inspect which queries are active and when they refetch",
              "For instant UI updates, combine optimistic setQueryData with invalidation in onSettled as the sync step",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
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
              "Softplix engineers implement TanStack Query with optimistic updates, key factories, and mutation pipelines for production React apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
