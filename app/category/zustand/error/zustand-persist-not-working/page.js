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
  title: "Zustand Persist Not Working — localStorage Not Saving [Fixed 2026]",
  description:
    "Fix Zustand persist middleware not saving state to localStorage. Covers persist setup, SSR hydration flash, partialize to exclude fields, version migration, and sessionStorage.",
  keywords:
    "zustand persist not working, zustand localStorage not saving, zustand persist middleware SSR hydration 2026, zustand partialize persist, zustand persist version migration",
  alternates: {
    canonical:
      "https://softplix.com/category/zustand/error/zustand-persist-not-working",
  },
  openGraph: {
    title: "Zustand Persist Not Working — Fixed [2026]",
    description:
      "Fix Zustand persist — localStorage, SSR hydration flash, partialize, version migration.",
    type: "article",
    url: "https://softplix.com/category/zustand/error/zustand-persist-not-working",
  },
};

const TOC = [
  { label: "Why Zustand persist doesn't save to localStorage", href: "#why" },
  { label: "Fix 1 — Correct persist middleware setup", href: "#fix-1" },
  { label: "Fix 2 — Fix SSR hydration flash in Next.js", href: "#fix-2" },
  {
    label: "Fix 3 — Use partialize to exclude non-serializable state",
    href: "#fix-3",
  },
  {
    label: "Fix 4 — Handle schema changes with version migration",
    href: "#fix-4",
  },
  { label: "Fix 5 — Use sessionStorage or custom storage", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is Zustand persist not saving to localStorage?",
    a: "The most common cause is wrapping the store creator incorrectly. persist() must wrap the inner function — create(persist(fn, options)) — not the other way around. Also ensure you have a unique name option — this is the localStorage key. Missing the name causes persist to silently fail.",
  },
  {
    q: "Why does my Zustand persisted state flash on page load in Next.js?",
    a: "Zustand's persist middleware reads localStorage asynchronously after hydration. During SSR, the store initializes with default values. On the client, it then hydrates from localStorage — causing a brief flash where the UI shows defaults before showing persisted values. Fix this by checking useStore.persist.hasHydrated() and showing a skeleton until hydration completes.",
  },
  {
    q: "What is partialize in Zustand persist?",
    a: "partialize lets you select which parts of your store to persist. By default, persist saves the entire store state. Use partialize to exclude actions (functions), non-serializable values like Date objects or Map/Set, sensitive data like auth tokens, or volatile state like loading flags.",
  },
  {
    q: "What happens to persisted state when I add new fields to my Zustand store?",
    a: "The persisted state in localStorage is merged with your store's initial state on hydration. New fields that don't exist in localStorage will use the initial state defaults. Removed fields in localStorage are ignored. If you change the shape of existing fields, use the version option with a migrate function to transform old data.",
  },
  {
    q: "Can I use Zustand persist with sessionStorage instead of localStorage?",
    a: "Yes. Pass a custom storage option to persist: storage: createJSONStorage(() => sessionStorage). sessionStorage clears when the browser tab is closed, unlike localStorage which persists indefinitely. Use it for temporary session data like current wizard step or unsaved draft state.",
  },
  {
    q: "How do I clear Zustand persisted state?",
    a: "Call useStore.persist.clearStorage() to remove the persisted data from localStorage. Or call localStorage.removeItem(storeName) directly with your store's name. To reset the store to initial state, also call useStore.setState(initialState) after clearing.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zustand Persist Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/zustand/error/zustand-persist-not-working",
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
            tags={["Zustand", "Persist", "Error Fix"]}
            title={"Zustand Persist Not Working"}
            subtitle={"— localStorage Not Saving [Fixed 2026]"}
            sub={
              "Also covers: correct persist setup · SSR hydration flash · partialize · version migration · sessionStorage"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Zustand v4/v5 · Next.js · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// State resets on page refresh — persist not saving to localStorage
// OR: localStorage key exists but state doesn't restore
// OR: SSR hydration flash — default values flash before persisted values load`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Correct persist setup"}
            </p>
            <CodeBlock title="Correct persist middleware structure">{`import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useStore = create(
  persist(                          // ← persist wraps the store creator
    (set) => ({
      count: 0,
      increment: () => set(s => ({ count: s.count + 1 })),
    }),
    {
      name: "my-app-store",         // ← required: localStorage key name
      storage: createJSONStorage(() => localStorage),
    }
  )
)`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Zustand Persist Doesn't Save to localStorage"}</SH>
          <P>
            {"The "}
            <IC>{"persist"}</IC>
            {" middleware wraps the store creator function and intercepts "}
            <IC>{"set()"}</IC>
            {
              " calls to write state to storage. Three things can silently prevent it from working: incorrect wrapping order, a missing "
            }
            <IC>{"name"}</IC>
            {
              " option, or non-serializable values in state (functions, Dates, Map/Set) that JSON.stringify converts to "
            }
            <IC>{"null"}</IC>
            {" or drops entirely."}
          </P>

          <FixCard
            number="1"
            title="Correct persist Middleware Setup"
            time="3 min"
            tag="State resets on refresh — persist silently not working"
          >
            <CodeBlock title="Complete TypeScript persist store">{`import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

interface SettingsStore {
  theme: "light" | "dark" | "system"
  language: string
  sidebarOpen: boolean
  setTheme: (theme: "light" | "dark" | "system") => void
  setLanguage: (lang: string) => void
  toggleSidebar: () => void
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      // Initial / default values
      theme: "system",
      language: "en",
      sidebarOpen: true,

      setTheme: (theme) => set({ theme }),
      setLanguage: (language) => set({ language }),
      toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
    }),
    {
      name: "settings-store",                           // ← localStorage key
      storage: createJSONStorage(() => localStorage),   // ← explicit storage
    }
  )
)

// Verify it works — check localStorage in DevTools:
// Application → Local Storage → http://localhost:3000 → "settings-store"
// Should contain: { "state": { "theme": "system", ... }, "version": 0 }`}</CodeBlock>
            <TipBox>
              {
                "After setting up persist, open DevTools → Application → Local Storage to confirm the key is being written. If the key is absent, the middleware is not running — check the wrapping order."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix SSR Hydration Flash in Next.js"
            time="4 min"
            tag="Default values flash before persisted values load"
          >
            <P>
              {
                "On SSR, the store initializes with defaults. On the client, persist hydrates from localStorage asynchronously — causing a visible flash. Guard components until hydration is complete."
              }
            </P>
            <CodeBlock title="useHydration hook — wait for persist to load">{`"use client"

import { useEffect, useState } from "react"
import { useSettingsStore } from "@/stores/settings"

// Hook to check if persist has hydrated
function useHydration() {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    // hasHydrated is true once persist has loaded localStorage data
    const unsubHydrate = useSettingsStore.persist.onHydrate(() => {})
    const unsubFinish = useSettingsStore.persist.onFinishHydration(() => {
      setHydrated(true)
    })

    // If already hydrated (fast path)
    if (useSettingsStore.persist.hasHydrated()) setHydrated(true)

    return () => {
      unsubHydrate()
      unsubFinish()
    }
  }, [])

  return hydrated
}

// Use in components that depend on persisted state
function ThemeToggle() {
  const hydrated = useHydration()
  const { theme, setTheme } = useSettingsStore()

  // Show skeleton until localStorage has loaded
  if (!hydrated) return <div className="w-8 h-8 bg-gray-200 rounded animate-pulse" />

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use partialize to Exclude Non-Serializable State"
            time="3 min"
            tag="Functions and non-serializable values breaking persist"
          >
            <P>
              {"Actions (functions) and non-serializable types like "}
              <IC>{"Date"}</IC>
              {"  , "}
              <IC>{"Map"}</IC>
              {"  , "}
              <IC>{"Set"}</IC>
              {" cannot be JSON-serialized. Use "}
              <IC>{"partialize"}</IC>
              {" to persist only the serializable data fields."}
            </P>
            <CodeBlock title="partialize — persist only selected fields">{`interface CartStore {
  items: CartItem[]
  couponCode: string | null
  isLoading: boolean          // ← don't persist (volatile)
  lastUpdated: Date           // ← don't persist (not serializable as-is)
  addItem: (item: CartItem) => void    // ← don't persist (function)
  removeItem: (id: string) => void     // ← don't persist (function)
}

const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      couponCode: null,
      isLoading: false,
      lastUpdated: new Date(),
      addItem: (item) => set(s => ({ items: [...s.items, item] })),
      removeItem: (id) => set(s => ({ items: s.items.filter(i => i.id !== id) })),
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(() => localStorage),

      // ✅ Only persist items and coupon — exclude functions, loading, Date
      partialize: (state) => ({
        items: state.items,
        couponCode: state.couponCode,
      }),
    }
  )
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Handle Schema Changes with Version Migration"
            time="4 min"
            tag="Updated store shape breaks old persisted data"
          >
            <P>
              {
                "When you change the structure of persisted state, old data in localStorage may be incompatible. Use "
              }
              <IC>{"version"}</IC>
              {" and "}
              <IC>{"migrate"}</IC>
              {" to transform old data to the new shape."}
            </P>
            <CodeBlock title="version + migrate — handle breaking changes">{`const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      // v2 shape — user object instead of flat fields
      user: null as User | null,
      preferences: { theme: "system", lang: "en" },
      setUser: (user) => set({ user }),
    }),
    {
      name: "user-store",
      version: 2,   // ← bump this when you change the persisted state shape

      migrate: (persistedState: any, version: number) => {
        // v0 → v1: renamed 'username' to 'name'
        if (version === 0) {
          persistedState.name = persistedState.username
          delete persistedState.username
        }

        // v1 → v2: moved flat fields into user object
        if (version <= 1) {
          persistedState.user = {
            name: persistedState.name,
            email: persistedState.email,
          }
          delete persistedState.name
          delete persistedState.email
        }

        return persistedState
      },
    }
  )
)`}</CodeBlock>
            <WarnBox>
              {
                "Increment the version number every time you change the persisted state shape. Without migration, users with old localStorage data may see corrupted state or runtime errors when the old shape doesn't match your new store structure."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use sessionStorage or Custom Storage"
            time="2 min"
            tag="Want storage that clears on tab close"
          >
            <CodeBlock title="sessionStorage and custom storage options">{`import { persist, createJSONStorage } from "zustand/middleware"

// ✅ sessionStorage — clears when browser tab closes
const useWizardStore = create()(
  persist(
    (set) => ({
      step: 1,
      formData: {},
      nextStep: () => set(s => ({ step: s.step + 1 })),
    }),
    {
      name: "wizard-store",
      storage: createJSONStorage(() => sessionStorage),   // ← sessionStorage
    }
  )
)

// ✅ Custom storage — e.g. IndexedDB via idb-keyval
import { get, set, del } from "idb-keyval"

const idbStorage = {
  getItem: async (name: string) => {
    return (await get(name)) ?? null
  },
  setItem: async (name: string, value: string) => {
    await set(name, value)
  },
  removeItem: async (name: string) => {
    await del(name)
  },
}

const useLargeDataStore = create()(
  persist(
    (set) => ({ data: [] }),
    {
      name: "large-data-store",
      storage: createJSONStorage(() => idbStorage),   // ← IndexedDB for large data
    }
  )
)

// ✅ Clear persisted storage:
useWizardStore.persist.clearStorage()
// or:
localStorage.removeItem("wizard-store")`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always include a unique name in persist options — it is the localStorage key and is required",
              "Use partialize to exclude actions, loading flags, and non-serializable values from persistence",
              "Guard SSR-sensitive components with hasHydrated() to prevent hydration flash in Next.js",
              "Increment version and write a migrate function every time you change the persisted state shape",
              "Use sessionStorage for transient session data, localStorage for cross-session persistence",
              "Check DevTools → Application → Local Storage to confirm your key is being written after any change",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Zustand",
                title: "Fix: Zustand state not updating",
                href: "/category/zustand/error/zustand-state-not-updating",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js 'use client' directive error",
                href: "/category/next-js/error/nextjs-use-client-directive-error",
                time: "6 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase auth session not persisting",
                href: "/category/supabase/error/supabase-auth-session-not-persisting",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build React Apps with Zustand"}
            desc={
              "Softplix engineers architect Zustand stores with persist, migrations, and SSR-safe hydration for production Next.js apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
