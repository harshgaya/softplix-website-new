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
  title: "Tailwind CSS Classes Not Applying — Fixed [Complete Guide 2026]",
  description:
    "Fix Tailwind CSS classes not applying in Next.js. Covers content config, Tailwind v4 setup, PostCSS, purged classes, dynamic class names, and dark mode issues.",
  keywords:
    "tailwind css classes not applying, tailwind not working nextjs fix, tailwind v4 not working 2026, tailwind css not applying fix, tailwind styles not showing",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/tailwind-css-classes-not-applying",
  },
  openGraph: {
    title: "Tailwind CSS Classes Not Applying — Fixed [Complete Guide 2026]",
    description:
      "Fix Tailwind CSS classes not applying — content config, v4 setup, dynamic classes, PostCSS.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/tailwind-css-classes-not-applying",
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
        <span className="text-xs font-mono text-red-300">{"Problem"}</span>
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
  { label: "Why Tailwind classes are not applying", href: "#why" },
  { label: "Fix 1 — Tailwind v3: fix the content config", href: "#fix-1" },
  { label: "Fix 2 — Tailwind v4: new setup in Next.js", href: "#fix-2" },
  { label: "Fix 3 — CSS not imported in layout", href: "#fix-3" },
  { label: "Fix 4 — Dynamic class names being purged", href: "#fix-4" },
  { label: "Fix 5 — PostCSS not configured", href: "#fix-5" },
  { label: "Fix 6 — Specificity conflict with other CSS", href: "#fix-6" },
  { label: "Fix 7 — Tailwind dark mode not working", href: "#fix-7" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why are Tailwind CSS classes not applying in Next.js?",
    a: "The most common causes: 1) The content array in tailwind.config.js does not include your file paths — Tailwind does not scan those files and purges the classes, 2) globals.css is not imported in your root layout, 3) Using Tailwind v4 without updating the config format.",
  },
  {
    q: "Tailwind classes work in development but not in production?",
    a: "Your content paths in tailwind.config.js are wrong or too narrow. Tailwind only includes CSS classes it finds in the files listed in content. In development the full stylesheet is generated; in production it is purged. Fix the content array to include all your component files.",
  },
  {
    q: "How do I use Tailwind v4 with Next.js?",
    a: "Tailwind v4 changed the configuration format significantly. Install @tailwindcss/postcss and update your postcss.config.js. The tailwind.config.js file is no longer needed for basic setup — configuration moves to your CSS file using @theme directive.",
  },
  {
    q: "Why are dynamically constructed Tailwind classes not working?",
    a: "Tailwind scans your source files for complete class strings at build time. If you construct class names dynamically (e.g. 'text-' + color), Tailwind cannot detect them and removes them. Use complete class names or add them to the safelist in tailwind.config.js.",
  },
  {
    q: "Tailwind CSS is not applying after upgrading to v4 — how to fix?",
    a: "Tailwind v4 changed how PostCSS is configured. Replace the plugins in postcss.config.js: use @tailwindcss/postcss instead of tailwindcss and autoprefixer. Also update your CSS import from @tailwind base/components/utilities to @import 'tailwindcss'.",
  },
  {
    q: "How do I add classes to the Tailwind safelist?",
    a: "In tailwind.config.js: module.exports = { safelist: ['bg-red-500', 'text-blue-600', { pattern: /bg-(red|blue)-(100|500)/ }] }. This prevents those classes from being purged even if they are not found as complete strings in your source files.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tailwind CSS Classes Not Applying — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/tailwind-css-classes-not-applying",
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
    title: "Fix: Next.js hydration failed",
    href: "nextjs-hydration-failed",
    time: "7 min read",
  },
  {
    tag: "Next.js",
    title: "Fix: Next.js build failing on Vercel",
    href: "nextjs-build-failing-vercel",
    time: "6 min read",
  },
  {
    tag: "Next.js",
    title: "Fix: Shadcn/ui component not rendering",
    href: "shadcn-ui-component-not-rendering",
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
              {["Tailwind CSS", "Next.js", "Error Fix"].map((t) => (
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
              {"Tailwind CSS Classes Not Applying"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {
                "Also covers: Tailwind v4 not working · styles not showing · classes purged in production"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"6 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Tailwind v3 · v4 · Next.js"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Identify Your Version First"}
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mt-3">
              {[
                {
                  v: "Tailwind v3",
                  fix: "Fix content array in tailwind.config.js → Fix 1",
                },
                {
                  v: "Tailwind v4",
                  fix: "New PostCSS config and CSS import → Fix 2",
                },
              ].map(({ v, fix }) => (
                <div
                  key={v}
                  className="bg-white rounded-xl border border-green-100 px-4 py-3"
                >
                  <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">
                    {v}
                  </p>
                  <p className="text-xs text-gray-600">{fix}</p>
                </div>
              ))}
            </div>
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

          <SH id="why">{"Why Tailwind Classes Are Not Applying"}</SH>
          <P>
            {
              "Tailwind is a utility-first CSS framework that only includes the CSS for classes it finds in your source files. If a class is not found during the build scan, it is not included in the output CSS — and therefore has no effect. This process is called purging (v3) or content detection (v4)."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Symptom"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "No styles at all — page unstyled",
                    "globals.css not imported",
                    "#fix-3",
                  ],
                  [
                    "Some classes work, some don't",
                    "Content paths incomplete",
                    "#fix-1",
                  ],
                  [
                    "Works in dev, broken in production",
                    "Classes purged — content paths wrong",
                    "#fix-1",
                  ],
                  [
                    "Dynamic classes missing",
                    "Constructed strings not detected",
                    "#fix-4",
                  ],
                  [
                    "v4 installed but nothing works",
                    "Old config format / import",
                    "#fix-2",
                  ],
                  [
                    "Tailwind classes lose to other CSS",
                    "Specificity conflict",
                    "#fix-6",
                  ],
                ].map(([s, c, h]) => (
                  <tr
                    key={s}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {s}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{c}</td>
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
            title="Tailwind v3 — Fix the Content Config"
            time="2 min"
            tag="Classes being purged — most common cause"
          >
            <P>
              {"The "}
              <IC>{"content"}</IC>
              {
                " array tells Tailwind which files to scan for class names. If your files are not listed, their classes are purged."
              }
            </P>
            <CodeBlock title="tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // App Router
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Pages Router
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',      // if using src/ directory
  ],
  theme: { extend: {} },
  plugins: [],
}

// ❌ Common mistake — too narrow
content: ['./app/**/*.tsx']  // misses .js, .jsx files

// ❌ Another common mistake — missing directories
content: ['./components/**/*.{js,ts,jsx,tsx}']  // misses app/ pages/`}</CodeBlock>
            <TipBox>
              {
                "After changing tailwind.config.js, always restart your dev server — Next.js does not hot reload config changes."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Tailwind v4 — New Setup for Next.js"
            time="5 min"
            tag="Everything changed in v4 — old config does not work"
          >
            <P>
              {
                "Tailwind v4 (released early 2025) completely changed the configuration format. The old "
              }
              <IC>{"tailwind.config.js"}</IC>
              {" and "}
              <IC>{"@tailwind"}</IC>
              {" directives no longer work the same way."}
            </P>
            <CodeBlock title="terminal">
              {"npm install tailwindcss@latest @tailwindcss/postcss"}
            </CodeBlock>
            <CodeBlock title="postcss.config.mjs — v4 format">{`// ❌ OLD (v3)
export default {
  plugins: { tailwindcss: {}, autoprefixer: {} }
}

// ✅ NEW (v4)
export default {
  plugins: { '@tailwindcss/postcss': {} }
}`}</CodeBlock>
            <CodeBlock title="app/globals.css — v4 import">{`/* ❌ OLD (v3) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ NEW (v4) — single import */
@import "tailwindcss";`}</CodeBlock>
            <CodeBlock title="app/layout.jsx">{`import './globals.css'  // ← must still be imported here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="CSS Not Imported in Root Layout"
            time="1 min"
            tag="No Tailwind styles at all — completely unstyled"
          >
            <P>
              {"If your page has zero styles, "}
              <IC>{"globals.css"}</IC>
              {" is not imported in your root layout file."}
            </P>
            <CodeBlock title="app/layout.jsx">{`import './globals.css'  // ← THIS LINE IS REQUIRED

export const metadata = { title: 'My App' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Dynamic Class Names Being Purged"
            time="3 min"
            tag="Conditionally built class strings disappear"
          >
            <P>
              {
                "Tailwind scans your source for complete class name strings. If you build class names dynamically, Tailwind cannot detect them."
              }
            </P>
            <CodeBlock title="components/Button.jsx">{`// ❌ WRONG — Tailwind cannot detect these
const color = 'red'
return <div className={\`bg-\${color}-500\`}>  // 'bg-red-500' not in source as string

// ❌ Also wrong
const classes = { danger: 'bg-red', success: 'bg-green' }
return <div className={\`\${classes[type]}-500\`}>

// ✅ CORRECT — full class names as complete strings
const colorMap = {
  danger:  'bg-red-500 hover:bg-red-600',
  success: 'bg-green-500 hover:bg-green-600',
  info:    'bg-blue-500 hover:bg-blue-600',
}
return <div className={colorMap[type]}>

// ✅ ALSO CORRECT — add to safelist for truly dynamic cases
// tailwind.config.js
module.exports = {
  safelist: [
    'bg-red-500', 'bg-green-500', 'bg-blue-500',
    { pattern: /bg-(red|green|blue)-(100|500|900)/ },
  ]
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="PostCSS Not Configured"
            time="2 min"
            tag="Tailwind plugin not running at all"
          >
            <CodeBlock title="postcss.config.js — v3">{`// Must exist in project root for Tailwind v3
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`}</CodeBlock>
            <CodeBlock title="postcss.config.mjs — v4">{`export default {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Specificity Conflict With Other CSS"
            time="2 min"
            tag="Tailwind classes applied but overridden"
          >
            <P>
              {
                "If you import other CSS files or use CSS Modules alongside Tailwind, those styles may override Tailwind's utilities due to specificity."
              }
            </P>
            <CodeBlock title="Diagnosis">{`/* Check browser DevTools — if Tailwind class appears with strikethrough,
   another rule is overriding it */

/* Option 1 — use !important modifier */
<div className="!text-red-500">  {/* ← forces Tailwind to win */}

/* Option 2 — remove conflicting global CSS */

/* Option 3 — import order matters */
/* In globals.css, import Tailwind LAST */
@import './other-styles.css';
@import 'tailwindcss';  /* v4 */`}</CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="Tailwind Dark Mode Not Working"
            time="2 min"
            tag="Dark mode classes ignored"
          >
            <CodeBlock title="tailwind.config.js">{`module.exports = {
  darkMode: 'class',  // ← 'class' uses .dark class on <html>
  // or
  darkMode: 'media',  // ← 'media' uses prefers-color-scheme
  content: [...],
}

// For 'class' mode — add/remove 'dark' class on <html>
// app/layout.jsx
<html lang="en" className="dark">  {/* force dark */}

// For dynamic toggle:
document.documentElement.classList.toggle('dark')`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always include all file extensions in content: ['./app/**/*.{js,ts,jsx,tsx,mdx}']",
              "Restart dev server after any change to tailwind.config.js",
              "Never construct Tailwind class names dynamically — always use complete strings",
              "Add dynamic classes to the safelist in tailwind.config.js",
              "After upgrading to v4: update postcss.config and CSS import immediately",
              "Verify globals.css is imported at the top of your root layout",
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
                "Softplix builds full-stack Next.js applications with Tailwind CSS. Need help with your project setup or Tailwind configuration? We can help."
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
