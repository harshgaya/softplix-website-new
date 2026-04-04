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
  title: "React Portal Not Rendering — createPortal Fixed [2026]",
  description:
    "Fix React createPortal not rendering — target DOM element not found, SSR hydration mismatch, modal z-index issues, and event bubbling through portals.",
  keywords:
    "react portal not rendering, createPortal not working, react createPortal target not found 2026, react portal ssr hydration mismatch, react portal modal z-index",
  alternates: {
    canonical:
      "https://softplix.com/category/react/error/react-portal-not-rendering",
  },
  openGraph: {
    title: "React Portal Not Rendering — createPortal Fixed [2026]",
    description:
      "Fix React createPortal — DOM target, SSR hydration, z-index, event bubbling.",
    type: "article",
    url: "https://softplix.com/category/react/error/react-portal-not-rendering",
  },
};

const TOC = [
  { label: "Why React portals fail to render", href: "#why" },
  { label: "Fix 1 — Ensure the target DOM element exists", href: "#fix-1" },
  { label: "Fix 2 — Fix SSR hydration mismatch with portals", href: "#fix-2" },
  { label: "Fix 3 — Fix z-index and stacking context issues", href: "#fix-3" },
  {
    label: "Fix 4 — Understand event bubbling through portals",
    href: "#fix-4",
  },
  { label: "Fix 5 — Build a reusable Modal portal component", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my React portal not rendering anything?",
    a: "The most common cause is that the target DOM element does not exist when createPortal runs. If you pass document.getElementById('portal-root') and that element is not in your HTML, the portal renders to null and nothing appears. Ensure the target element exists in your index.html or layout.tsx before the portal mounts.",
  },
  {
    q: "What is a React portal used for?",
    a: "Portals render a React component's DOM output into a different DOM node than the parent component's DOM node. The classic use case is modals, tooltips, and dropdown menus — you render them at the document.body level to escape overflow: hidden and z-index stacking contexts of parent elements.",
  },
  {
    q: "How do I use React portals with Next.js?",
    a: "In Next.js, document is not available during server-side rendering. Guard createPortal with a mounted state using useState and useEffect. Only call createPortal after the component has mounted (client-side). Or use isMounted state to conditionally render the portal.",
  },
  {
    q: "Does event bubbling work through React portals?",
    a: "Yes — React portals use synthetic events, which bubble through the React component tree, not the DOM tree. So a click inside a portal modal will bubble up to the React parent component that rendered the portal, even if the DOM node is at document.body. This is usually the desired behaviour.",
  },
  {
    q: "Why does my portal modal still get clipped by overflow: hidden?",
    a: "The portal's React output goes into the target DOM node (usually document.body), but if the target node itself has overflow: hidden or a stacking context constraint, the content is still clipped. Always render portals into a clean element appended directly to document.body, not into a container inside your main React root.",
  },
  {
    q: "Can I have multiple React portals on the same page?",
    a: "Yes. Each createPortal call targets a specific DOM node. You can have multiple portals pointing to the same node (common for modals) or different nodes. Stack order between portal contents is determined by DOM insertion order and z-index CSS.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React Portal Not Rendering — createPortal Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react/error/react-portal-not-rendering",
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
            tags={["React", "Portal", "Error Fix"]}
            title={"React Portal Not Rendering"}
            subtitle={"— createPortal Fixed [2026]"}
            sub={
              "Also covers: target DOM missing · SSR hydration mismatch · z-index stacking · event bubbling · reusable modal pattern"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"React 18/19 · Next.js · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Problems"}
            </p>
            <ErrorBlock>{`// Portal renders nothing — target element not in DOM
const portal = createPortal(<Modal />, document.getElementById("portal-root"))
// → null if #portal-root doesn't exist in HTML

// Next.js SSR error:
ReferenceError: document is not defined`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — add target to HTML and guard against SSR"}
            </p>
            <CodeBlock title="app/layout.tsx — add portal root">{`<body>
  {children}
  <div id="portal-root" />   {/* ← target for all portals */}
</body>`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why React Portals Fail to Render"}</SH>
          <P>
            {
              "React portals render to a DOM node outside your component's natural DOM position. Three things must all be true: the target DOM node must exist when the portal mounts, "
            }
            <IC>{"createPortal"}</IC>
            {
              " must run client-side (not during SSR), and the target node must not itself be constrained by CSS overflow or stacking."
            }
          </P>

          <FixCard
            number="1"
            title="Ensure the Target DOM Element Exists"
            time="2 min"
            tag="Portal renders null — getElementById returns null"
          >
            <CodeBlock title="Add portal-root to your HTML / Next.js layout">{`<!-- index.html (Vite/CRA) -->
<body>
  <div id="root"></div>
  <div id="portal-root"></div>  <!-- ← add this -->
</body>

{/* app/layout.tsx (Next.js App Router) */}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <div id="portal-root" />   {/* ← add after children */}
      </body>
    </html>
  )
}

{/* Usage in a component */}
import { createPortal } from "react-dom"

function Modal({ children }: { children: React.ReactNode }) {
  const el = document.getElementById("portal-root")
  if (!el) return null                     // guard if element somehow missing
  return createPortal(children, el)
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Fix SSR Hydration Mismatch with Portals"
            time="3 min"
            tag="document is not defined in Next.js"
          >
            <P>
              {
                "React portals use the browser DOM — they don't work during server-side rendering. Guard with a "
              }
              <IC>{"mounted"}</IC>
              {
                " state that is only set after the component mounts on the client."
              }
            </P>
            <CodeBlock title="SSR-safe portal component">{`"use client"

import { createPortal } from "react-dom"
import { useState, useEffect, type ReactNode } from "react"

interface PortalProps {
  children: ReactNode
  targetId?: string
}

export function Portal({ children, targetId = "portal-root" }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)       // only true after client-side mount
    return () => setMounted(false)
  }, [])

  // ✅ During SSR: mounted = false → render nothing → no hydration mismatch
  // After mount: render through portal
  if (!mounted) return null

  const target = document.getElementById(targetId)
  if (!target) return null

  return createPortal(children, target)
}

// Usage:
function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <Portal>
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        <div className="bg-white rounded-xl p-6 max-w-md w-full">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Portal>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix z-index and Stacking Context Issues"
            time="3 min"
            tag="Portal modal hidden behind other elements"
          >
            <CodeBlock title="Portal target and z-index setup">{`/* globals.css — ensure portal-root is above everything */
#portal-root {
  position: relative;
  z-index: 9999;          /* above all page content */
}

/* Modal overlay — fixed to viewport */
.modal-overlay {
  position: fixed;
  inset: 0;               /* top/right/bottom/left: 0 */
  background: rgba(0, 0, 0, 0.5);
  z-index: 50;            /* Tailwind z-50 */
  display: flex;
  align-items: center;
  justify-content: center;
}

/* In Tailwind: */
<div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
  <div className="relative bg-white rounded-xl shadow-2xl p-6 z-10">
    {/* modal content */}
  </div>
</div>`}</CodeBlock>
            <TipBox>
              {
                "The portal target at document.body level already escapes all parent overflow and stacking contexts. As long as you use position: fixed with a high z-index on the modal overlay, it will appear above all page content."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Understand Event Bubbling Through Portals"
            time="2 min"
            tag="Click events propagating unexpectedly"
          >
            <P>
              {
                "React portal events bubble through the React component tree (not the DOM tree). A click inside a portal bubbles to the React parent that rendered the portal. Stop propagation to prevent this when needed."
              }
            </P>
            <CodeBlock title="Event bubbling in portals">{`function App() {
  return (
    // ✅ This onClick WILL fire when clicking inside the portal modal
    // because React events bubble through the React tree, not the DOM tree
    <div onClick={() => console.log("App clicked!")}>
      <Modal />   {/* Modal content is at document.body in DOM, but here in React tree */}
    </div>
  )
}

// Fix — stop propagation inside the modal if you don't want parent to fire
function Modal() {
  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50"
      onClick={(e) => e.stopPropagation()}  // ← stop bubbling to React parent
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        Modal content
      </div>
    </div>,
    document.getElementById("portal-root")!
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Build a Reusable Modal Portal Component"
            time="5 min"
            tag="Production-ready pattern with accessibility"
          >
            <CodeBlock title="components/modal.tsx — complete reusable portal modal">{`"use client"

import { createPortal } from "react-dom"
import { useEffect, useState, type ReactNode } from "react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

export function Modal({ isOpen, onClose, children, title }: ModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isOpen, onClose])

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!mounted || !isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}   // close on backdrop click
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6"
        onClick={e => e.stopPropagation()}  // prevent backdrop close
      >
        {title && <h2 className="text-lg font-bold mb-4">{title}</h2>}
        {children}
      </div>
    </div>,
    document.getElementById("portal-root")!
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              'Add <div id="portal-root" /> to your index.html or layout.tsx before shipping any portal code',
              "Always guard createPortal with a mounted state in Next.js — document is not available during SSR",
              "Use position: fixed + high z-index on portal overlay — not position: absolute",
              "Stop event propagation inside portal content if you don't want clicks to bubble to React parent",
              "Add Escape key handler and body scroll lock to all modal portals for accessibility",
              "Render portal target AFTER the main app content in HTML so it naturally layers above",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React lazy and Suspense not working",
                href: "react-lazy-suspense-not-working",
                time: "6 min read",
              },
              {
                tag: "React",
                title: "Fix: React forwardRef not working",
                href: "react-forwardref-not-working",
                time: "5 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui dialog not closing",
                href: "/category/shadcn/error/shadcn-dialog-not-closing",
                time: "5 min read",
              },
            ]}
          />
          <CTA
            title={"We Build React Components for Production"}
            desc={
              "Softplix engineers build accessible, production-grade React components including modals, tooltips, and overlays. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
