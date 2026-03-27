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

/* ── Reusable Components ─────────────────────────────────────────────────── */

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
        <span className="text-xs font-mono text-red-300">Error</span>
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

function TOCBlock({ items }) {
  return (
    <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <FaBookOpen className="text-indigo-600 text-sm" />
        <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
          Table of Contents
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
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
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
      <h2 className="text-lg font-bold text-gray-900 mb-5">Related Articles</h2>
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
        Need Expert Help?
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        Talk to an Engineer <FaArrowRight className="text-xs" />
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
          2026 Updated
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

/* ── Page Data ───────────────────────────────────────────────────────────── */

export const metadata = {
  title: "React useRef Not Working — Fixed [2026]",
  description:
    "Fix React useRef not working. Covers ref.current null on first render, forwarding refs to child components, DOM refs vs mutable refs, and callback refs.",
  keywords:
    "react useref not working fix, ref current null react 2026, react forwardref fix, react ref not attached to dom",
  alternates: {
    canonical:
      "https://softplix.com/category/react-js/error/react-useref-not-working",
  },
  openGraph: {
    title: "React useRef Not Working — Fixed [2026]",
    description:
      "Fix React useRef not working — null ref, forwardRef, DOM refs, callback refs.",
    type: "article",
    url: "https://softplix.com/category/react-js/error/react-useref-not-working",
  },
};

const TOC = [
  { label: "Why ref.current is null", href: "#why" },
  {
    label: "Fix 1 — Read ref.current after mount, not during render",
    href: "#fix-1",
  },
  {
    label: "Fix 2 — Passing ref to a custom component — forwardRef",
    href: "#fix-2",
  },
  {
    label: "Fix 3 — useImperativeHandle — expose specific methods",
    href: "#fix-3",
  },
  {
    label: "Fix 4 — Callback ref — run code when element mounts",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Mutable ref for values without re-renders",
    href: "#fix-5",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is ref.current null in React?",
    a: "refs are populated after the component mounts and the DOM element is created. During the initial render (before mount), ref.current is null. Always access ref.current inside useEffect, event handlers, or other callbacks — never directly in the render body.",
  },
  {
    q: "How do I pass a ref to a custom component?",
    a: "Use React.forwardRef: const MyInput = forwardRef((props, ref) => <input ref={ref} {...props} />). Then the parent can pass a ref to it: const inputRef = useRef(null); <MyInput ref={inputRef} />.",
  },
  {
    q: "Can I put a ref on a function component?",
    a: "Not directly — function components do not have instances. You must use forwardRef to forward the ref to a DOM element inside the component. In React 19, refs will be passable as regular props, but for now forwardRef is required.",
  },
  {
    q: "What is useRef used for in React?",
    a: "Two main uses: 1) Accessing DOM elements directly: const divRef = useRef(null); <div ref={divRef}> — then divRef.current is the DOM element. 2) Storing mutable values that should not trigger re-renders: const countRef = useRef(0); countRef.current++.",
  },
  {
    q: "Difference between useRef and useState for storing values?",
    a: "useState triggers a re-render when the value changes. useRef does not. Use useState when the UI needs to update based on the value. Use useRef when you need to store something (interval ID, previous value, DOM node) without causing a re-render.",
  },
  {
    q: "How do I run code when an element appears in the DOM?",
    a: "Use a callback ref: <div ref={(node) => { if (node) { console.log('mounted', node) } else { console.log('unmounted') } }}> The callback fires with the DOM element when it mounts and with null when it unmounts.",
  },
];

/* ── Structured Data ─────────────────────────────────────────────────────── */

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "React useRef Not Working — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/react-js/error/react-useref-not-working",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    // ✅ FIX: escaped quotes \"@type\" replaced with normal string keys
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Page Component ──────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["React", "Error Fix"]}
            title="React useRef Not Working"
            subtitle="— Fixed [2026]"
            sub="Also covers: ref.current null · forwardRef · callback ref · DOM refs"
            date="January 2026"
            read="5 min read"
            tech="React 18 · Next.js"
          />

          {/* Quick-glance summary */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              ⚡ Key Rule — Access ref.current After Mount
            </p>
            <CodeBlock title="component.jsx">{`const inputRef = useRef(null)

// ❌ WRONG — ref not yet attached during render
console.log(inputRef.current)  // null

// ✅ CORRECT — access after mount in useEffect or event handlers
useEffect(() => {
  inputRef.current.focus()     // DOM element available here
}, [])

return <input ref={inputRef} />`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          {/* ── Why ── */}
          <SH id="why">Why ref.current Is Null</SH>
          <P>
            React sets <IC>ref.current</IC> to the DOM element after the
            component mounts and the element is created in the DOM. During the
            first render (before mount), <IC>ref.current</IC> is <IC>null</IC>.
            Any code that runs during render cannot access the ref.
          </P>

          {/* ── Fix 1 ── */}
          <FixCard
            number="1"
            title="Read ref.current After Mount"
            time="1 min"
            tag="null ref — accessed during render"
          >
            <CodeBlock title="components/AutoFocusInput.jsx">{`import { useRef, useEffect } from 'react'

export default function AutoFocusInput() {
  const inputRef = useRef(null)

  // ✅ Access after mount
  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  }, [])

  function handleScroll() {
    // ✅ In event handlers — element exists when handler fires
    inputRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return <input ref={inputRef} onFocus={handleScroll} />
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 2 ── */}
          <FixCard
            number="2"
            title="Forward Ref to Custom Component"
            time="2 min"
            tag="ref on child component returns null"
          >
            <CodeBlock title="components/FancyInput.jsx">{`import { forwardRef } from 'react'

// ✅ forwardRef passes the ref through to the DOM element
const FancyInput = forwardRef(function FancyInput(props, ref) {
  return (
    <div className="relative">
      <input ref={ref} className="border rounded px-3 py-2" {...props} />
    </div>
  )
})

export default FancyInput

// Parent can now use ref
import { useRef, useEffect } from 'react'
import FancyInput from './FancyInput'

function LoginForm() {
  const emailRef = useRef(null)

  useEffect(() => {
    emailRef.current?.focus()  // works!
  }, [])

  return <FancyInput ref={emailRef} type="email" placeholder="Email" />
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 3 ── */}
          <FixCard
            number="3"
            title="useImperativeHandle — Expose Specific Methods"
            time="2 min"
            tag="Control what the parent can do with the ref"
          >
            <CodeBlock title="components/VideoPlayer.jsx">{`import { forwardRef, useImperativeHandle, useRef } from 'react'

const VideoPlayer = forwardRef(function VideoPlayer(props, ref) {
  const videoRef = useRef(null)

  // ✅ Expose only specific methods to the parent
  useImperativeHandle(ref, () => ({
    play:  () => videoRef.current.play(),
    pause: () => videoRef.current.pause(),
    seek:  (t) => { videoRef.current.currentTime = t },
    // Parent cannot access the raw DOM element — just these methods
  }))

  return <video ref={videoRef} src={props.src} />
})

// Usage
function Controls() {
  const playerRef = useRef(null)
  return (
    <div>
      <VideoPlayer ref={playerRef} src="/video.mp4" />
      <button onClick={() => playerRef.current.play()}>Play</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 4 ── */}
          <FixCard
            number="4"
            title="Callback Ref — Run Code on Mount"
            time="2 min"
            tag="Execute logic exactly when element appears"
          >
            <CodeBlock title="component.jsx">{`// Callback ref — fires with element on mount, null on unmount
function MeasuredBox() {
  const [size, setSize] = useState({ width: 0, height: 0 })

  const measuredRef = (node) => {
    if (node !== null) {
      setSize({
        width:  node.getBoundingClientRect().width,
        height: node.getBoundingClientRect().height,
      })
    }
  }

  return (
    <div ref={measuredRef} className="bg-gray-100 p-4">
      Size: {size.width} x {size.height}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          {/* ── Fix 5 ── */}
          <FixCard
            number="5"
            title="Mutable Ref — Store Values Without Re-render"
            time="2 min"
            tag="Track values without triggering renders"
          >
            <CodeBlock title="components/StopWatch.jsx">{`import { useState, useRef } from 'react'

export default function StopWatch() {
  const [elapsed,   setElapsed]   = useState(0)
  const intervalRef = useRef(null)   // mutable ref — no re-render on change
  const startTime   = useRef(null)

  function start() {
    startTime.current = Date.now() - elapsed
    intervalRef.current = setInterval(() => {
      setElapsed(Date.now() - startTime.current)
    }, 10)
  }

  function stop() {
    clearInterval(intervalRef.current)
  }

  return (
    <div>
      <p>{(elapsed / 1000).toFixed(2)}s</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          {/* ── Prevention ── */}
          <SH id="prevention">Prevention</SH>
          <CL
            items={[
              "Never access ref.current during render — use useEffect or event handlers",
              "Use forwardRef to pass refs through custom components",
              "Use optional chaining: ref.current?.focus() — safe if ref is not yet attached",
              "Use useImperativeHandle to expose controlled APIs rather than raw DOM nodes",
              "Use useRef (not useState) for interval IDs, timers, and previous values",
            ]}
          />

          {/* ── FAQ ── */}
          <SH id="faq">Frequently Asked Questions</SH>
          <FAQBlock items={FAQS} />

          {/* ── Related ── */}
          <RelatedBlock
            items={[
              {
                tag: "React",
                title: "Fix: React too many re-renders",
                // ✅ FIX: relative paths corrected to absolute hrefs
                href: "/category/react-js/error/react-too-many-re-renders",
                time: "5 min read",
              },
              {
                tag: "React",
                title: "Fix: React context not updating",
                href: "/category/react-js/error/react-context-not-updating",
                time: "6 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: React hooks only in function component error",
                href: "/category/react-js/error/react-hooks-only-in-function-component",
                time: "7 min read",
              },
            ]}
          />

          <CTA
            title="We Build Production-Grade React Apps"
            desc="Softplix builds full-stack React applications. Need help with complex ref patterns or component architecture? We can help."
          />
        </div>
      </main>
    </>
  );
}
