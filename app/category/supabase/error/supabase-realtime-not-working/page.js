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
  title: "Supabase Realtime Not Working — Fixed [2026]",
  description:
    "Fix Supabase Realtime subscriptions not receiving events. Covers enabling Realtime on tables, RLS for Realtime, subscription patterns, cleanup, and React useEffect setup.",
  keywords:
    "supabase realtime not working, supabase subscription not receiving events, supabase realtime not firing 2026, supabase channel subscribe react, supabase postgres changes",
  alternates: {
    canonical:
      "https://softplix.com/category/supabase/error/supabase-realtime-not-working",
  },
  openGraph: {
    title: "Supabase Realtime Not Working — Fixed [2026]",
    description:
      "Fix Supabase Realtime — enable on table, RLS, React useEffect, channel cleanup.",
    type: "article",
    url: "https://softplix.com/category/supabase/error/supabase-realtime-not-working",
  },
};

const TOC = [
  { label: "Why Supabase Realtime events don't fire", href: "#why" },
  { label: "Fix 1 — Enable Realtime on the table", href: "#fix-1" },
  { label: "Fix 2 — Fix the subscription pattern in React", href: "#fix-2" },
  { label: "Fix 3 — Fix RLS blocking Realtime events", href: "#fix-3" },
  { label: "Fix 4 — Unsubscribe on component unmount", href: "#fix-4" },
  {
    label: "Fix 5 — Listen to Presence and Broadcast channels",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my Supabase Realtime subscription not receiving events?",
    a: "The two most common causes are: 1) Realtime is not enabled for the specific table in Supabase Dashboard — you must enable it per table under Database → Replication. 2) Your RLS policies block Realtime — add a SELECT policy on the table so the Realtime server can deliver events to authenticated users.",
  },
  {
    q: "How do I enable Supabase Realtime on a table?",
    a: "Go to Supabase Dashboard → Database → Replication → Tables. Toggle on the table you want to listen to. Without this, no Realtime events will fire for that table regardless of your subscription code.",
  },
  {
    q: "Do I need to unsubscribe from Supabase Realtime channels?",
    a: "Yes. Always call supabase.removeChannel(channel) when your component unmounts (React useEffect cleanup function). Not unsubscribing causes memory leaks and duplicate event handlers when components re-mount, leading to events firing multiple times.",
  },
  {
    q: "Does Supabase Realtime work with Row Level Security?",
    a: "Yes, but you need to ensure your RLS SELECT policies allow the authenticated user to read the rows. Realtime uses the user's JWT to check RLS — if the user can't SELECT the row, they won't receive Realtime events for it.",
  },
  {
    q: "What is the difference between postgres_changes and Broadcast in Supabase Realtime?",
    a: "postgres_changes listens to INSERT, UPDATE, and DELETE events on a database table — data changes. Broadcast lets clients send arbitrary messages to each other through a channel without hitting the database — useful for presence, cursors, or game state. Presence tracks which users are currently online in a channel.",
  },
  {
    q: "Why do I receive Realtime events twice?",
    a: "Duplicate events usually happen because the useEffect that sets up the subscription runs more than once (React Strict Mode double-invokes effects in development) and the cleanup function doesn't properly unsubscribe. Ensure you return the removeChannel call from useEffect.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supabase Realtime Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/supabase/error/supabase-realtime-not-working",
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
            tags={["Supabase", "Realtime", "Error Fix"]}
            title={"Supabase Realtime Not Working"}
            subtitle={"— Subscriptions Not Firing [Fixed 2026]"}
            sub={
              "Also covers: enable replication · RLS for Realtime · React useEffect cleanup · Broadcast · Presence"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"Supabase Realtime · React · PostgreSQL"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Symptom"}
            </p>
            <ErrorBlock>{`// Subscription set up with no error — but events never fire
const channel = supabase
  .channel("posts-changes")
  .on("postgres_changes", { event: "*", schema: "public", table: "posts" },
    (payload) => {
      console.log("Change received!", payload)  // never logs
    }
  )
  .subscribe()`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Step 1 — enable Realtime on the table"}
            </p>
            <CodeBlock title="Supabase Dashboard → Database → Replication">{`# Toggle ON the "posts" table (or whichever table you subscribe to)
# Without this toggle, NO events fire regardless of your subscription code`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Supabase Realtime Events Don't Fire"}</SH>
          <P>
            {
              "Supabase Realtime works through PostgreSQL's logical replication. For events to be delivered to your client, three things must all be true: Realtime must be enabled for the table in the dashboard, your RLS policies must allow the user to see the rows being changed, and your subscription code must be set up correctly with proper cleanup."
            }
          </P>

          <FixCard
            number="1"
            title="Enable Realtime on the Table"
            time="1 min"
            tag="Root cause — Realtime not enabled per table"
          >
            <P>
              {
                "Supabase does not enable Realtime on all tables by default. You must opt in per table."
              }
            </P>
            <CodeBlock title="Supabase Dashboard">{`# Go to: Database → Replication (in the left sidebar)
# Under "Tables", find your table and toggle it ON

# OR via SQL:
ALTER PUBLICATION supabase_realtime ADD TABLE posts;

# Verify it's enabled:
SELECT schemaname, tablename
FROM pg_publication_tables
WHERE pubname = 'supabase_realtime';`}</CodeBlock>
            <TipBox>
              {
                "You can also enable Realtime when creating a table in the Table Editor by checking the 'Enable Realtime' checkbox. For existing tables, use Database → Replication."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix the Subscription Pattern in React"
            time="5 min"
            tag="Correct useEffect setup with cleanup"
          >
            <P>
              {"Set up the subscription in a "}
              <IC>{"useEffect"}</IC>
              {
                " and always return a cleanup function that removes the channel. This prevents memory leaks and duplicate events."
              }
            </P>
            <CodeBlock title="hooks/use-realtime-posts.ts">{`"use client"

import { createClient } from "@/lib/supabase/client"
import { useEffect, useState } from "react"

type Post = { id: string; title: string; created_at: string }

export function useRealtimePosts(initialPosts: Post[]) {
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const supabase = createClient()

  useEffect(() => {
    const channel = supabase
      .channel("posts-realtime")           // unique channel name
      .on(
        "postgres_changes",
        {
          event: "*",                       // INSERT | UPDATE | DELETE | *
          schema: "public",
          table: "posts",
          // Optional: filter to specific rows
          // filter: "user_id=eq.some-uuid",
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setPosts((prev) => [payload.new as Post, ...prev])
          }
          if (payload.eventType === "UPDATE") {
            setPosts((prev) =>
              prev.map((p) => (p.id === payload.new.id ? (payload.new as Post) : p))
            )
          }
          if (payload.eventType === "DELETE") {
            setPosts((prev) => prev.filter((p) => p.id !== payload.old.id))
          }
        }
      )
      .subscribe((status) => {
        console.log("Realtime status:", status)  // SUBSCRIBED | CHANNEL_ERROR
      })

    // ✅ Always return cleanup — prevents duplicate subscriptions
    return () => {
      supabase.removeChannel(channel)
    }
  }, [supabase])

  return posts
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix RLS Blocking Realtime Events"
            time="3 min"
            tag="Subscribed but no events — authenticated user"
          >
            <P>
              {
                "Supabase Realtime checks RLS policies before delivering events. If your SELECT policy doesn't cover the changed rows, the event is silently dropped."
              }
            </P>
            <CodeBlock title="Add SELECT policy for Realtime">{`-- Allow users to receive Realtime events for their own posts
CREATE POLICY "Users receive realtime for own posts"
  ON posts FOR SELECT
  USING (auth.uid() = user_id);

-- For public tables — allow anyone to receive Realtime events
CREATE POLICY "Public realtime on posts"
  ON posts FOR SELECT
  USING (true);

-- Verify your user can SELECT the rows in SQL Editor
SELECT * FROM posts WHERE user_id = 'your-user-uuid-here';
-- If this returns rows, Realtime should work for that user`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Unsubscribe on Component Unmount"
            time="2 min"
            tag="Events firing twice — cleanup not set up"
          >
            <P>
              {
                "In React Strict Mode (development), effects run twice. Without cleanup, you get two subscriptions and events fire twice. The "
              }
              <IC>{"removeChannel"}</IC>
              {" call in the cleanup function prevents this."}
            </P>
            <CodeBlock title="Correct cleanup pattern">{`useEffect(() => {
  const channel = supabase
    .channel("my-channel")
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" },
      (payload) => setMessages((prev) => [...prev, payload.new])
    )
    .subscribe()

  // ✅ This runs when component unmounts OR before effect re-runs
  return () => {
    supabase.removeChannel(channel)
  }
}, [])  // empty deps = runs once on mount, cleans up on unmount`}</CodeBlock>
            <WarnBox>
              {
                "If you see events firing twice in development, it is React Strict Mode double-invoking effects — not a bug in your code. In production, effects only run once. The cleanup function handles both cases correctly."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Broadcast and Presence Channels"
            time="5 min"
            tag="Real-time messaging, cursors, online users"
          >
            <P>
              {
                "For real-time features that don't need database persistence — chat messages, cursor positions, typing indicators, online presence — use Broadcast and Presence instead of postgres_changes."
              }
            </P>
            <CodeBlock title="Broadcast — send messages between clients">{`// Send a message (no database involved)
const channel = supabase.channel("chat-room")

channel
  .on("broadcast", { event: "message" }, ({ payload }) => {
    console.log("New message:", payload)
    setMessages((prev) => [...prev, payload])
  })
  .subscribe()

// Send from another component/user:
channel.send({
  type: "broadcast",
  event: "message",
  payload: { text: "Hello!", user: "Alice", timestamp: Date.now() },
})`}</CodeBlock>
            <CodeBlock title="Presence — track who is online">{`const channel = supabase.channel("online-users", {
  config: { presence: { key: userId } },
})

channel
  .on("presence", { event: "sync" }, () => {
    const state = channel.presenceState()
    const onlineUsers = Object.keys(state)
    setOnlineUsers(onlineUsers)
  })
  .subscribe(async (status) => {
    if (status === "SUBSCRIBED") {
      await channel.track({ user_id: userId, online_at: new Date().toISOString() })
    }
  })`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Enable Realtime in Dashboard → Database → Replication for every table you subscribe to",
              "Always add SELECT RLS policies — Realtime checks them before delivering events",
              "Return supabase.removeChannel(channel) from every useEffect that subscribes",
              "Use unique channel names per subscription to avoid conflicts",
              "Log the subscribe() status callback to catch CHANNEL_ERROR during setup",
              "Use Broadcast for ephemeral real-time data — it doesn't require RLS or table replication",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Supabase",
                title: "Fix: Supabase RLS blocking queries",
                href: "/category/supabase/error/supabase-row-level-security-blocking",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase session not persisting",
                href: "/category/supabase/error/supabase-auth-session-not-persisting",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase storage upload error",
                href: "/category/supabase/error/supabase-storage-upload-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Real-Time Features with Supabase"}
            desc={
              "Softplix engineers implement Supabase Realtime, Presence, and Broadcast for live dashboards, chat, and collaborative apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
