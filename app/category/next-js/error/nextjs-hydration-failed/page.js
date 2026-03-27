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
  FaCircleXmark,
} from "react-icons/fa6";

export const metadata = {
  title: "Next.js Hydration Failed — Fixed [Complete Guide 2026]",
  description:
    "Fix Next.js hydration failed error. Covers mismatched server and client HTML, browser extensions, date/time differences, localStorage in render, and all common hydration mismatch causes.",
  keywords:
    "nextjs hydration failed, hydration error nextjs fix, next js hydration mismatch 2026, there was an error while hydrating, nextjs hydration failed because initial ui does not match",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/nextjs-hydration-failed",
  },
  openGraph: {
    title: "Next.js Hydration Failed — Fixed [Complete Guide 2026]",
    description:
      "Fix Next.js hydration failed — mismatched HTML, localStorage, dates, browser extensions.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/nextjs-hydration-failed",
  },
};

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
        <span className="text-xs font-mono text-red-300">
          {"Browser Error"}
        </span>
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
function H3({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
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

const TOC = [
  { label: "What causes hydration failed?", href: "#what" },
  { label: "Fix 1 — Invalid HTML nesting", href: "#fix-1" },
  { label: "Fix 2 — localStorage / window in render", href: "#fix-2" },
  { label: "Fix 3 — Date and time mismatches", href: "#fix-3" },
  { label: "Fix 4 — Math.random() and dynamic IDs", href: "#fix-4" },
  { label: "Fix 5 — suppressHydrationWarning", href: "#fix-5" },
  { label: "Fix 6 — useEffect for client-only content", href: "#fix-6" },
  { label: "Fix 7 — Browser extensions causing mismatch", href: "#fix-7" },
  { label: "Fix 8 — Third-party scripts modifying the DOM", href: "#fix-8" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes Next.js hydration failed error?",
    a: "Hydration fails when the HTML generated by the server during SSR does not match what React renders on the client. Common causes: accessing browser-only APIs (window, localStorage) during render, date/time differences, invalid HTML nesting, Math.random() in JSX, or browser extensions modifying the DOM.",
  },
  {
    q: "How do I fix hydration error in Next.js?",
    a: "Find the component causing the mismatch. Common fixes: move browser-only code (localStorage, window) into useEffect, use suppressHydrationWarning on elements that intentionally differ, or wrap client-only content in a component that only renders after mount.",
  },
  {
    q: "Next.js hydration error in production but not development?",
    a: "Development mode shows warnings; production mode throws errors. The underlying cause is the same — server/client HTML mismatch. Check for timezone-sensitive date formatting, conditional rendering based on browser detection, or any code path that differs between server and client.",
  },
  {
    q: "Can I use suppressHydrationWarning to fix hydration errors?",
    a: "Only for intentional mismatches where you know the content will differ (like timestamps). Do NOT use it to silence real bugs — the underlying mismatch can still cause visual glitches and wrong content being displayed to users.",
  },
  {
    q: "Hydration error caused by browser extension — how to fix?",
    a: "Browser extensions like Grammarly, password managers, and ad blockers inject attributes (data-lt-installed, etc.) into the DOM. This is not your bug — but you can add suppressHydrationWarning to <body> or the affected element. In development, test in a private browser window with no extensions.",
  },
  {
    q: "How do I find which component is causing hydration error?",
    a: "Next.js 13+ shows the exact component tree in the error overlay. For older versions: add React.StrictMode warnings, check the browser console for the specific attribute or text that mismatches, and use React DevTools to inspect the hydrated tree.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js Hydration Failed — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/nextjs-hydration-failed",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FaqSchema() {
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

const RELATED = [
  {
    tag: "Next.js",
    title: "Fix: useRouter is not a function Next.js",
    href: "nextjs-userouter-not-a-function",
    time: "5 min read",
  },
  {
    tag: "Next.js",
    title: "Fix: Next.js build failing on Vercel",
    href: "nextjs-build-failing-vercel",
    time: "6 min read",
  },
  {
    tag: "React",
    title: "Fix: useEffect running twice React 18",
    href: "react-useeffect-running-twice",
    time: "5 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Next.js", "React", "Error Fix"].map((t) => (
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
              {"Next.js Hydration Failed"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {
                "Also covers: There was an error while hydrating · Hydration mismatch · suppressHydrationWarning"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"7 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Next.js 13 · 14 · 15 · App Router"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Most Common Fix — Move Browser Code Into useEffect"}
            </p>
            <CodeBlock title="components/MyComponent.jsx">{`'use client'
import { useState, useEffect } from 'react'

// ❌ WRONG — localStorage read during render causes hydration mismatch
export default function MyComponent() {
  const theme = localStorage.getItem('theme')  // crashes on server!
  return <div>{theme}</div>
}

// ✅ CORRECT — read after mount, server and client render match
export default function MyComponent() {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    setTheme(localStorage.getItem('theme'))
  }, [])
  return <div>{theme}</div>
}`}</CodeBlock>
          </div>

          <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
            <div className="flex items-center gap-2 mb-4">
              <FaBookOpen className="text-indigo-600 text-sm" />
              <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
                {"Table of Contents"}
              </span>
            </div>
            <ol className="space-y-2">
              {TOC.map(({ label, href }, i) => (
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

          <SH id="what">{"What Causes Next.js Hydration Failed?"}</SH>
          <ErrorBlock>{`Error: Hydration failed because the initial UI does not match what was rendered on the server.
Warning: Expected server HTML to contain a matching <div> in <div>.
    at div
    at MyComponent

There was an error while hydrating. Because the error happened outside of a Suspense boundary,
the entire root will switch to client rendering.`}</ErrorBlock>

          <P>
            {
              "Next.js renders your pages on the server first (SSR), sending HTML to the browser. React then "
            }
            <strong>{"hydrates"}</strong>
            {
              " that HTML — attaching event listeners and making it interactive. Hydration fails when the HTML React tries to attach to does not match what React would render itself. React cannot reconcile the difference and throws this error."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"What happens"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "localStorage / window in render",
                    "Server throws — client renders fine",
                    "#fix-2",
                  ],
                  [
                    "Date / time formatting",
                    "Server time ≠ client time",
                    "#fix-3",
                  ],
                  [
                    "Math.random() in JSX",
                    "Different values each render",
                    "#fix-4",
                  ],
                  [
                    "Invalid HTML nesting",
                    "Browser auto-corrects → mismatch",
                    "#fix-1",
                  ],
                  [
                    "Browser extension injecting attributes",
                    "Grammarly, LastPass add DOM attrs",
                    "#fix-7",
                  ],
                  [
                    "Conditional render based on window",
                    "Server: false, client: true",
                    "#fix-6",
                  ],
                ].map(([c, w, h]) => (
                  <tr
                    key={c}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {c}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{w}</td>
                    <td className="px-5 py-3">
                      <a
                        href={h}
                        className="text-xs font-bold text-indigo-600 hover:underline"
                      >
                        {"Jump →"}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Invalid HTML Nesting"
            time="2 min"
            tag="Browser auto-corrects invalid HTML — React sees different DOM"
          >
            <P>
              {"The browser silently fixes invalid HTML (like "}
              <IC>{"<p>"}</IC>
              {" inside "}
              <IC>{"<p>"}</IC>
              {", or "}
              <IC>{"<div>"}</IC>
              {" inside "}
              <IC>{"<p>"}</IC>
              {
                "). The server sends one structure, the browser corrects it, React tries to hydrate the corrected version — mismatch."
              }
            </P>
            <CodeBlock title="components/Card.jsx">{`// ❌ WRONG — <div> cannot be a child of <p>
export default function Card({ text }) {
  return (
    <p>
      <div>Some content</div>  {/* invalid! browser moves this out */}
      {text}
    </p>
  )
}

// ✅ CORRECT — use valid nesting
export default function Card({ text }) {
  return (
    <div>
      <div>Some content</div>
      <p>{text}</p>
    </div>
  )
}

// Other common invalid patterns:
// <a> inside <a>
// <button> inside <button>
// <ul> / <ol> with non-<li> direct children
// <table> without <tbody> (browser adds it automatically)`}</CodeBlock>
            <TipBox>
              {
                "Run your HTML through the W3C Validator or install the 'axe' accessibility extension — both catch invalid nesting that causes hydration errors."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="localStorage / window in Render"
            time="3 min"
            tag="Server has no window — most common cause"
          >
            <P>
              {"The server has no "}
              <IC>{"window"}</IC>
              {", "}
              <IC>{"localStorage"}</IC>
              {", "}
              <IC>{"document"}</IC>
              {", or "}
              <IC>{"navigator"}</IC>
              {"."}{" "}
              {
                "Accessing them during render crashes the server render, causing a mismatch."
              }
            </P>
            <CodeBlock title="components/ThemeProvider.jsx">{`'use client'
import { useState, useEffect } from 'react'

// ❌ WRONG — crashes on server
export default function ThemeProvider({ children }) {
  const saved = localStorage.getItem('theme') || 'light'  // ReferenceError on server
  const [theme, setTheme] = useState(saved)
  return <div data-theme={theme}>{children}</div>
}

// ✅ CORRECT — start with null/default, read after mount
export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')  // safe default for server

  useEffect(() => {
    // Only runs on client, after hydration
    const saved = localStorage.getItem('theme')
    if (saved) setTheme(saved)
  }, [])

  return <div data-theme={theme}>{children}</div>
}

// ✅ Also correct — typeof check
const isClient = typeof window !== 'undefined'
const saved = isClient ? localStorage.getItem('theme') : 'light'`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Date and Time Mismatches"
            time="2 min"
            tag="Server and client render different timestamps"
          >
            <P>
              {"If you render "}
              <IC>{"new Date().toLocaleDateString()"}</IC>
              {
                " or any current time during SSR, the server renders one value and the client renders a different one (even milliseconds later). This is a guaranteed hydration mismatch."
              }
            </P>
            <CodeBlock title="components/Timestamp.jsx">{`'use client'
import { useState, useEffect } from 'react'

// ❌ WRONG — renders different time on server vs client
export default function Timestamp() {
  return <span>{new Date().toLocaleTimeString()}</span>
}

// ✅ CORRECT — render placeholder on server, real time on client
export default function Timestamp() {
  const [time, setTime] = useState(null)
  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
  }, [])
  if (!time) return null  // or a skeleton
  return <span>{time}</span>
}

// ✅ For static dates (build time) — these are consistent
export default function BuildDate() {
  // This is fine — renders same value on server and client
  return <span>{"Published: 2026-01-15"}</span>
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Math.random() and Dynamic IDs"
            time="1 min"
            tag="Different random values on server and client"
          >
            <CodeBlock title="components/UniqueId.jsx">{`// ❌ WRONG — Math.random() produces different values
export default function Avatar({ name }) {
  const id = Math.random().toString(36)  // server: 'abc', client: 'xyz' → mismatch
  return <div id={id}>{name}</div>
}

// ✅ CORRECT — use React's useId hook (React 18+)
import { useId } from 'react'

export default function Avatar({ name }) {
  const id = useId()  // same value on server and client
  return <div id={id}>{name}</div>
}

// ✅ CORRECT — derive IDs from stable props
export default function Avatar({ name, userId }) {
  return <div id={\`avatar-\${userId}\`}>{name}</div>
}`}</CodeBlock>
            <TipBox>
              {
                "React 18's useId() hook is specifically designed for this — it generates stable IDs that match between server and client renders."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="suppressHydrationWarning"
            time="1 min"
            tag="For intentional mismatches only"
          >
            <P>
              {
                "Some elements legitimately differ between server and client — like timestamps or user-specific content. Use "
              }
              <IC>{"suppressHydrationWarning"}</IC>
              {
                " to tell React to ignore the mismatch for that specific element."
              }
            </P>
            <CodeBlock title="components/LiveClock.jsx">{`// suppressHydrationWarning only applies to the element it is on
// and its direct text content — NOT its children

export default function LiveClock() {
  return (
    <time suppressHydrationWarning>
      {new Date().toLocaleTimeString()}
    </time>
  )
}

// ❌ DO NOT use this as a blanket fix
// <body suppressHydrationWarning>   ← this silences ALL hydration errors
// Only use on specific elements where the mismatch is intentional`}</CodeBlock>
            <WarnBox>
              {
                "suppressHydrationWarning does not fix the underlying problem — it just silences the warning. If the mismatch causes wrong content to be shown to users, they will see it even with the warning suppressed."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="6"
            title="useEffect for Client-Only Content"
            time="3 min"
            tag="Conditional rendering based on browser APIs"
          >
            <P>
              {
                "A very common pattern: showing different content based on whether the user is logged in, what OS they are on, or any other browser-detected value. The server always renders the default state."
              }
            </P>
            <CodeBlock title="components/ClientOnly.jsx">{`'use client'
import { useState, useEffect } from 'react'

// Reusable wrapper — renders nothing on server, children on client
export function ClientOnly({ children, fallback = null }) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return mounted ? children : fallback
}

// Usage
import { ClientOnly } from './ClientOnly'

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>
      <ClientOnly fallback={<p>Loading...</p>}>
        {/* This only renders on client — no hydration mismatch */}
        <UserDashboard />
      </ClientOnly>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="Browser Extensions Causing Mismatch"
            time="1 min"
            tag="Grammarly, LastPass, Honey, ad blockers"
          >
            <P>
              {
                "Browser extensions inject attributes and elements into the DOM after the page loads. Grammarly adds "
              }
              <IC>{"data-lt-installed"}</IC>
              {
                ", password managers add attributes to forms, ad blockers remove elements. React sees a different DOM than what it rendered."
              }
            </P>
            <CodeBlock title="app/layout.jsx">{`// Suppress on body for extension-injected attributes
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}

// Test in private/incognito window with extensions disabled
// If hydration error disappears → extension is the cause`}</CodeBlock>
            <TipBox>
              {
                "Always test hydration errors in a private browser window with no extensions. If the error disappears, add suppressHydrationWarning to the body — this is a legitimate use case."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="8"
            title="Third-Party Scripts Modifying the DOM"
            time="2 min"
            tag="Analytics, chat widgets, A/B testing scripts"
          >
            <P>
              {
                "Scripts like Google Analytics, Intercom, and Optimizely modify the DOM after load. Load them using Next.js "
              }
              <IC>{"Script"}</IC>
              {
                " component with the correct strategy so they do not interfere with hydration."
              }
            </P>
            <CodeBlock title="app/layout.jsx">{`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* afterInteractive — runs after hydration completes */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
          strategy="afterInteractive"
        />

        {/* lazyOnload — runs when browser is idle */}
        <Script
          src="https://widget.intercom.io/widget/APP_ID"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"How to Prevent Hydration Errors"}</SH>
          <CL
            items={[
              "Never access window, localStorage, document, or navigator during render — always use useEffect",
              "Use React 18's useId() for dynamic IDs instead of Math.random()",
              "Keep date/time rendering client-side only — initialize state to null and set in useEffect",
              "Validate HTML nesting — <div> inside <p> is invalid and causes browser corrections",
              "Test in a private browser window with no extensions during development",
              "Load third-party scripts with strategy='afterInteractive' or 'lazyOnload'",
              "Use suppressHydrationWarning only for genuinely intentional mismatches",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <div className="space-y-3">
            {FAQS.map(({ q, a }) => (
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

          <aside className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-lg font-bold text-gray-900 mb-5">
              {"Related Articles"}
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {RELATED.map(({ tag, title, href, time }) => (
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

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Next.js applications. Dealing with hydration errors or SSR issues in production? We can help."
              }
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
            >
              {"Talk to an Engineer"}
              <FaArrowRight className="text-xs" />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
