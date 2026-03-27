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
  title: "Tailwind CSS Not Working With Next.js App Router — Fixed [2026]",
  description:
    "Fix Tailwind CSS not working with Next.js App Router. Covers Tailwind v3 content config, Tailwind v4 PostCSS setup, globals.css import in layout, and dynamic class purging.",
  keywords:
    "tailwind css not working nextjs app router, tailwind not working nextjs 13 14 15 fix 2026, tailwindcss nextjs app router setup, tailwind classes missing nextjs",
  alternates: {
    canonical:
      "https://softplix.com/category/next-js/error/tailwind-not-working-nextjs-app-router",
  },
  openGraph: {
    title: "Tailwind CSS Not Working With Next.js App Router — Fixed [2026]",
    description:
      "Fix Tailwind CSS not working with Next.js App Router — content config, v4, globals.css.",
    type: "article",
    url: "https://softplix.com/category/next-js/error/tailwind-not-working-nextjs-app-router",
  },
};

const TOC = [
  { label: "Diagnose your Tailwind issue", href: "#diagnose" },
  { label: "Fix 1 — Import globals.css in root layout", href: "#fix-1" },
  {
    label: "Fix 2 — Tailwind v3 content config for App Router",
    href: "#fix-2",
  },
  { label: "Fix 3 — Tailwind v4 setup for Next.js", href: "#fix-3" },
  { label: "Fix 4 — Dynamic class names being purged", href: "#fix-4" },
  { label: "Fix 5 — Restart dev server after config changes", href: "#fix-5" },
  { label: "Fix 6 — Tailwind with CSS Modules conflict", href: "#fix-6" },
  { label: "Fresh working setup (v3 and v4)", href: "#setup" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is Tailwind CSS not working in Next.js App Router?",
    a: "The three most common causes: 1) globals.css is not imported in app/layout.jsx, 2) The content array in tailwind.config.js does not include app/**/*.{js,ts,jsx,tsx} paths, 3) Using Tailwind v4 with old v3 PostCSS config. Check each in order.",
  },
  {
    q: "Tailwind works in Pages Router but not App Router — why?",
    a: "The content paths changed. App Router uses the app/ directory instead of pages/. Update your tailwind.config.js content array: './app/**/*.{js,ts,jsx,tsx,mdx}'. Also verify globals.css is imported in app/layout.jsx not pages/_app.jsx.",
  },
  {
    q: "Tailwind works locally but classes are missing in production?",
    a: "Your content paths in tailwind.config.js are too narrow and classes are being purged. Make sure you include all file extensions: './app/**/*.{js,ts,jsx,tsx,mdx}'. Restart dev server and run a fresh production build to verify.",
  },
  {
    q: "How do I set up Tailwind v4 with Next.js?",
    a: "npm install tailwindcss@latest @tailwindcss/postcss. Update postcss.config.mjs to use '@tailwindcss/postcss': {}. In globals.css replace the three @tailwind directives with a single @import 'tailwindcss'. Restart the dev server.",
  },
  {
    q: "Tailwind IntelliSense not working in Next.js — how to fix?",
    a: "Install the Tailwind CSS IntelliSense VS Code extension. Make sure tailwind.config.js exists in project root. If using v4, add a tailwind.config.js with just module.exports = {} to help the extension detect the project.",
  },
  {
    q: "Some Tailwind classes work and others don't — why?",
    a: "Missing classes are being purged because they only exist as dynamically constructed strings. For example: 'text-' + color will not be detected. Always use complete class names as static strings and add dynamic ones to the safelist in tailwind.config.js.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tailwind CSS Not Working With Next.js App Router — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/next-js/error/tailwind-not-working-nextjs-app-router",
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

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Tailwind CSS", "Next.js", "Error Fix"]}
            title={"Tailwind CSS Not Working With Next.js App Router"}
            subtitle={"— Fixed [2026]"}
            sub={
              "Also covers: Tailwind v4 setup · classes purged in production · dynamic classes missing"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Tailwind v3 · v4 · Next.js 13–15"}
          />

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Check These Three Things First"}
            </p>
            <div className="space-y-2 mt-3">
              {[
                "1. globals.css imported in app/layout.jsx?",
                "2. tailwind.config.js content includes ./app/**/*.{js,ts,jsx,tsx,mdx}?",
                "3. Dev server restarted after config changes?",
              ].map((s) => (
                <p key={s} className="text-sm text-green-800 font-medium">
                  {s}
                </p>
              ))}
            </div>
          </div>

          <TOCBlock items={TOC} />

          <SH id="diagnose">{"Diagnose Your Tailwind Issue"}</SH>
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
                    "Page is completely unstyled",
                    "globals.css not imported",
                    "#fix-1",
                  ],
                  [
                    "Some classes work, some don't",
                    "content paths incomplete",
                    "#fix-2",
                  ],
                  [
                    "Works locally, broken in production",
                    "classes purged — wrong content paths",
                    "#fix-2",
                  ],
                  [
                    "v4 installed — nothing works",
                    "old PostCSS config / CSS import",
                    "#fix-3",
                  ],
                  [
                    "Dynamic colors missing",
                    "constructed strings not detected",
                    "#fix-4",
                  ],
                  [
                    "Tailwind and CSS Modules fighting",
                    "specificity conflict",
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
            title="Import globals.css in Root Layout"
            time="1 min"
            tag="Page completely unstyled — zero Tailwind classes applied"
          >
            <CodeBlock title="app/layout.jsx">{`import './globals.css'   // ← THIS LINE IS REQUIRED — must be first

export const metadata = { title: 'My App' }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}`}</CodeBlock>
            <TipBox>
              {
                "globals.css must be imported in the root layout — app/layout.jsx — not in individual page files. Importing it in page.jsx works for that page only."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Tailwind v3 Content Config for App Router"
            time="2 min"
            tag="Classes purged — content paths wrong"
          >
            <CodeBlock title="tailwind.config.js">{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',        // App Router — required
    './pages/**/*.{js,ts,jsx,tsx,mdx}',      // Pages Router (if mixed)
    './components/**/*.{js,ts,jsx,tsx,mdx}', // components folder
    './src/**/*.{js,ts,jsx,tsx,mdx}',        // src/ directory (if used)
  ],
  theme: { extend: {} },
  plugins: [],
}

// ❌ Too narrow — misses .js and .jsx files
content: ['./app/**/*.tsx']

// ❌ Missing the app/ folder entirely
content: ['./components/**/*.{js,ts,jsx,tsx}']`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Tailwind v4 Setup for Next.js"
            time="5 min"
            tag="Everything changed — old config format does not work"
          >
            <CodeBlock title="terminal">
              {"npm install tailwindcss@latest @tailwindcss/postcss"}
            </CodeBlock>
            <CodeBlock title="postcss.config.mjs — v4 format">{`// ❌ v3 (old)
export default { plugins: { tailwindcss: {}, autoprefixer: {} } }

// ✅ v4 (new)
export default { plugins: { '@tailwindcss/postcss': {} } }`}</CodeBlock>
            <CodeBlock title="app/globals.css — v4 import">{`/* ❌ v3 (old) */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* ✅ v4 (new) — single line replaces all three */
@import "tailwindcss";`}</CodeBlock>
            <WarnBox>
              {
                "After switching to v4, delete tailwind.config.js if it is empty — v4 no longer needs it for basic setup. Content detection is automatic in v4."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Dynamic Class Names Being Purged"
            time="2 min"
            tag="Conditional colors or sizes not applying"
          >
            <CodeBlock title="components/Badge.jsx">{`// ❌ WRONG — Tailwind cannot detect 'bg-red-500' in this string
const color = 'red'
<div className={\`bg-\${color}-500\`}>

// ✅ CORRECT — full class names as complete strings
const colorMap = {
  red:    'bg-red-500 text-red-900',
  green:  'bg-green-500 text-green-900',
  blue:   'bg-blue-500 text-blue-900',
}
<div className={colorMap[color]}>

// ✅ OR add to safelist in tailwind.config.js
module.exports = {
  safelist: [
    'bg-red-500', 'bg-green-500', 'bg-blue-500',
    { pattern: /bg-(red|green|blue)-(100|500|900)/ },
  ],
  content: [...]
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Restart Dev Server After Config Changes"
            time="1 min"
            tag="Most overlooked step"
          >
            <CodeBlock title="terminal">{`# Next.js does NOT hot-reload tailwind.config.js or postcss.config.js
# After ANY change to these files:
Ctrl+C           # stop the server
npm run dev      # restart completely`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Tailwind With CSS Modules Conflict"
            time="2 min"
            tag="Tailwind classes overridden by module CSS"
          >
            <CodeBlock title="components/Button.jsx">{`// ❌ CSS Modules can override Tailwind
import styles from './Button.module.css'
<button className={\`\${styles.btn} bg-indigo-600\`}>

// ✅ Use !important modifier to force Tailwind to win
<button className={\`\${styles.btn} !bg-indigo-600\`}>

// ✅ Better — choose one system per component, don't mix
// Option A: pure Tailwind
<button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">

// Option B: pure CSS Modules (import + className={styles.btn})`}</CodeBlock>
          </FixCard>

          <SH id="setup">{"Fresh Working Setup"}</SH>
          <H3>{"Tailwind v3 + Next.js App Router"}</H3>
          <CodeBlock title="terminal">
            {
              "npx create-next-app@latest my-app --tailwind\n# This sets up Tailwind v3 with the correct config automatically"
            }
          </CodeBlock>
          <H3>{"Tailwind v4 + Next.js App Router (manual)"}</H3>
          <CodeBlock title="terminal">
            {
              "npm install next react react-dom\nnpm install -D tailwindcss@latest @tailwindcss/postcss"
            }
          </CodeBlock>
          <CodeBlock title="postcss.config.mjs">
            {"export default { plugins: { '@tailwindcss/postcss': {} } }"}
          </CodeBlock>
          <CodeBlock title="app/globals.css">
            {"@import 'tailwindcss';"}
          </CodeBlock>
          <CodeBlock title="app/layout.jsx">{`import './globals.css'
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}`}</CodeBlock>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always import globals.css as the first import in app/layout.jsx",
              "Include all file extensions in content: {js,ts,jsx,tsx,mdx}",
              "Restart dev server after any change to tailwind.config.js or postcss.config.js",
              "Never construct Tailwind class names dynamically — use complete string maps",
              "After upgrading to v4 — update PostCSS config and CSS import immediately",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />
          <RelatedBlock
            items={[
              {
                tag: "Next.js",
                title: "Fix: Tailwind CSS classes not applying",
                href: "tailwind-css-classes-not-applying",
                time: "6 min read",
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
            ]}
          />
          <CTA
            title={"We Build Production Next.js Apps With Tailwind"}
            desc={
              "Softplix builds full-stack Next.js applications. Need help with Tailwind setup or CSS architecture? We can help."
            }
          />
        </div>
      </main>
    </>
  );
}
