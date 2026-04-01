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
  title: "Zustand State Not Updating — Component Not Re-rendering [Fixed 2026]",
  description:
    "Fix Zustand state not updating or component not re-rendering after setState. Covers mutating state directly, selector memoization, shallow equality, immer middleware, and store reset patterns.",
  keywords:
    "zustand state not updating, zustand component not re-rendering, zustand set state not working 2026, zustand mutating state directly, zustand shallow selector",
  alternates: {
    canonical:
      "https://softplix.com/category/zustand/error/zustand-state-not-updating",
  },
  openGraph: {
    title: "Zustand State Not Updating — Fixed [2026]",
    description:
      "Fix Zustand state not updating — direct mutation, selectors, shallow equality, immer.",
    type: "article",
    url: "https://softplix.com/category/zustand/error/zustand-state-not-updating",
  },
};

const TOC = [
  { label: "Why Zustand state doesn't trigger a re-render", href: "#why" },
  {
    label: "Fix 1 — Never mutate state directly — always use set()",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Use a selector to subscribe to specific state slices",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — Use shallow for object and array selectors",
    href: "#fix-3",
  },
  { label: "Fix 4 — Update nested state correctly", href: "#fix-4" },
  {
    label: "Fix 5 — Use immer middleware for complex nested updates",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my Zustand component not re-rendering after state changes?",
    a: "The most common cause is direct state mutation — modifying the state object in-place instead of calling set() with a new object. Zustand uses referential equality to detect changes: if the state object reference hasn't changed, no re-render is triggered. Always return a new object from set().",
  },
  {
    q: "What is a Zustand selector and why should I use one?",
    a: "A selector is the function you pass to useStore — it extracts the specific piece of state your component needs. Without a selector, your component re-renders on every single state change in the store. With a selector, it only re-renders when the selected value changes.",
  },
  {
    q: "When do I need to use shallow in Zustand?",
    a: "Use shallow when your selector returns an object or array. Zustand uses Object.is for comparison — a new object { a: 1 } !== { a: 1 } even if contents are identical. shallow does a one-level property comparison, so components only re-render when the actual values change, not just the reference.",
  },
  {
    q: "How do I update nested state in Zustand?",
    a: "Spread each nested level to create new object references. Zustand's set() merges the top level automatically, but nested objects must be spread manually: set(state => ({ user: { ...state.user, name: 'Alice' } })). For deeply nested state, use the immer middleware to write mutations that are internally converted to immutable updates.",
  },
  {
    q: "Can I use Zustand without a selector?",
    a: "Yes, but it causes over-rendering. useStore() without a selector returns the whole state and re-renders your component on every state change anywhere in the store. Always use a selector: const count = useStore(s => s.count) to subscribe only to what your component needs.",
  },
  {
    q: "What is the immer middleware in Zustand?",
    a: "The immer middleware lets you write state mutations as if they were direct mutations (e.g. state.user.name = 'Alice') and automatically converts them to proper immutable updates behind the scenes. It is particularly useful for deeply nested state where manual spreading becomes cumbersome.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zustand State Not Updating — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/zustand/error/zustand-state-not-updating",
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
            tags={["Zustand", "State Management", "Error Fix"]}
            title={"Zustand State Not Updating"}
            subtitle={"— Component Not Re-rendering [Fixed 2026]"}
            sub={
              "Also covers: direct mutation · selectors · shallow equality · nested state · immer middleware"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Zustand v4/v5 · React · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Direct mutation — state changes but component never re-renders
const useStore = create((set, get) => ({
  user: { name: "Alice" },
  updateName: (name) => {
    get().user.name = name   // ❌ mutating state directly — no re-render
  },
}))`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — always use set() and return new objects"}
            </p>
            <CodeBlock title="Correct — spread to create new object reference">{`updateName: (name) =>
  set(state => ({ user: { ...state.user, name } }))  // ✅ new object → re-renders`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Zustand State Doesn't Trigger a Re-render"}</SH>
          <P>
            {
              "Zustand detects state changes by reference equality — it compares the previous state reference to the new one. If you mutate the existing state object in-place, the reference stays the same, Zustand sees no change, and components don't re-render. You must always return a new object (or value) from "
            }
            <IC>{"set()"}</IC>
            {"."}
          </P>

          <FixCard
            number="1"
            title="Never Mutate State Directly — Always Use set()"
            time="2 min"
            tag="Root cause — in-place mutation bypasses Zustand change detection"
          >
            <CodeBlock title="Direct mutation vs correct set() pattern">{`import { create } from "zustand"

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  // ❌ Mutating the array directly — no re-render
  addItem: (item) => {
    get().items.push(item)   // in-place mutation — reference unchanged
  },

  // ✅ Return new array — Zustand detects change, triggers re-render
  addItem: (item) => set(state => ({
    items: [...state.items, item]
  })),

  // ✅ Filter returns new array
  removeItem: (id) => set(state => ({
    items: state.items.filter(item => item.id !== id)
  })),

  // ✅ Replace with empty array — new reference
  clearCart: () => set({ items: [] }),
}))`}</CodeBlock>
            <TipBox>
              {
                "Zustand's set() automatically merges top-level state — you only need to return the changed keys, not the entire state. set({ items: [] }) is equivalent to set(state => ({ ...state, items: [] }))."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Use a Selector to Subscribe to Specific State Slices"
            time="2 min"
            tag="Component re-renders on every store change — select only what you need"
          >
            <CodeBlock title="Selector patterns — subscribe to minimum state">{`const useStore = create<Store>()((set) => ({
  count: 0,
  user: { name: "Alice", role: "admin" },
  theme: "dark",
  increment: () => set(s => ({ count: s.count + 1 })),
}))

// ❌ No selector — re-renders on ANY store change (count, user, theme, etc.)
function Counter() {
  const store = useStore()   // subscribes to entire store
  return <button onClick={store.increment}>{store.count}</button>
}

// ✅ Selector — only re-renders when count changes
function Counter() {
  const count = useStore(s => s.count)
  const increment = useStore(s => s.increment)
  return <button onClick={increment}>{count}</button>
}

// ✅ Combine selectors for multiple values
function UserBadge() {
  const name = useStore(s => s.user.name)
  const role = useStore(s => s.user.role)
  return <span>{name} ({role})</span>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use shallow for Object and Array Selectors"
            time="3 min"
            tag="Selector returns object — component re-renders every time despite same values"
          >
            <P>
              {
                "When your selector returns an object or array, Zustand compares the reference — a new object with identical contents still triggers a re-render. Use "
              }
              <IC>{"shallow"}</IC>
              {" to compare one level deep by value."}
            </P>
            <CodeBlock title="shallow equality for object selectors">{`import { useShallow } from "zustand/react/shallow"

const useStore = create<Store>()((set) => ({
  user: { name: "Alice", role: "admin", avatar: null },
  settings: { theme: "dark", lang: "en" },
}))

// ❌ Returns new object on every render — re-renders even if values unchanged
function UserInfo() {
  const { name, role } = useStore(s => ({ name: s.user.name, role: s.user.role }))
  // New { name, role } object created every render → always different reference
}

// ✅ useShallow — compares values one level deep, not the object reference
function UserInfo() {
  const { name, role } = useStore(
    useShallow(s => ({ name: s.user.name, role: s.user.role }))
  )
  // Only re-renders when name or role actually changes
}

// ✅ Alternative — use separate selectors per primitive value
function UserInfo() {
  const name = useStore(s => s.user.name)   // string — stable comparison
  const role = useStore(s => s.user.role)   // string — stable comparison
  // No shallow needed — primitives use Object.is which works correctly
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Update Nested State Correctly"
            time="3 min"
            tag="Nested object update — top level updates but nested values don't reflect"
          >
            <P>
              {
                "Zustand merges at the top level only. For nested objects, you must manually spread each level to create new references at every depth that changed."
              }
            </P>
            <CodeBlock title="Nested state update patterns">{`interface Store {
  user: {
    profile: { name: string; bio: string }
    preferences: { theme: string; notifications: boolean }
  }
}

const useStore = create<Store>()((set) => ({
  user: {
    profile: { name: "Alice", bio: "" },
    preferences: { theme: "dark", notifications: true },
  },

  // ❌ Wrong — only spreads top level, user.profile reference unchanged
  updateName: (name: string) => set(state => ({
    user: { name }   // replaces entire user — loses profile and preferences
  })),

  // ✅ Spread each nested level that changes
  updateName: (name: string) => set(state => ({
    user: {
      ...state.user,             // keep preferences unchanged
      profile: {
        ...state.user.profile,   // keep bio unchanged
        name,                    // update only name
      },
    },
  })),

  // ✅ Toggle notifications — spread every level
  toggleNotifications: () => set(state => ({
    user: {
      ...state.user,
      preferences: {
        ...state.user.preferences,
        notifications: !state.user.preferences.notifications,
      },
    },
  })),
}))`}</CodeBlock>
            <WarnBox>
              {
                "Deeply nested manual spreading becomes verbose and error-prone quickly. If you have more than 2 levels of nesting, switch to the immer middleware (Fix 5) which handles this automatically."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use immer Middleware for Complex Nested Updates"
            time="4 min"
            tag="3+ levels of nesting — immer makes mutations readable"
          >
            <CodeBlock title="immer middleware — write mutations, get immutable updates">{`import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface Store {
  cart: {
    items: { id: string; qty: number; price: number }[]
    coupon: string | null
    shipping: { method: string; cost: number }
  }
  updateQty: (id: string, qty: number) => void
  applyCoupon: (code: string) => void
  setShipping: (method: string, cost: number) => void
}

// ✅ immer middleware — write as if mutating, immer handles immutability
const useCartStore = create<Store>()(
  immer((set) => ({
    cart: {
      items: [],
      coupon: null,
      shipping: { method: "standard", cost: 5.99 },
    },

    // Write like direct mutation — immer converts to immutable update
    updateQty: (id, qty) => set(state => {
      const item = state.cart.items.find(i => i.id === id)
      if (item) item.qty = qty   // looks like mutation — immer handles it
    }),

    applyCoupon: (code) => set(state => {
      state.cart.coupon = code   // direct assignment — works with immer
    }),

    setShipping: (method, cost) => set(state => {
      state.cart.shipping.method = method
      state.cart.shipping.cost = cost
    }),
  }))
)

// Compare without immer — same updateQty:
// updateQty: (id, qty) => set(state => ({
//   cart: {
//     ...state.cart,
//     items: state.cart.items.map(i => i.id === id ? { ...i, qty } : i)
//   }
// }))`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Never mutate state directly — always call set() and return new objects or values",
              "Always use a selector in useStore(s => s.value) — never subscribe to the whole store",
              "Use useShallow when your selector returns an object or array to avoid unnecessary re-renders",
              "Spread every nested level that changes — Zustand only auto-merges the top level",
              "Use immer middleware for stores with 3+ levels of nesting — cleaner and less error-prone",
              "Install Zustand DevTools middleware in development to inspect state changes in real time",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Zustand",
                title: "Fix: Zustand persist not working",
                href: "/category/zustand/error/zustand-persist-not-working",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React useMemo not working",
                href: "/category/react/error/react-usememo-not-working",
                time: "6 min read",
              },
              {
                tag: "TanStack Query",
                title: "Fix: TanStack Query cache not invalidating",
                href: "/category/tanstack/error/tanstack-query-cache-not-invalidating",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build React Apps with Zustand"}
            desc={
              "Softplix engineers architect Zustand stores with selectors, immer, and persistence for production React apps. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
