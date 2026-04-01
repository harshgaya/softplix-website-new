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
  title: "Vite Tailwind CSS Not Purging Unused Styles — Fixed [2026]",
  description:
    "Fix Vite Tailwind CSS not purging unused styles in production build. Covers content paths, safelist, dynamic class names, JIT mode, and build bundle size checks.",
  keywords:
    "vite tailwind not purging, tailwind CSS unused styles not removed vite 2026, tailwind content path wrong, tailwind JIT dynamic classes purged, tailwind safelist",
  alternates: {
    canonical:
      "https://softplix.com/category/vite/error/vite-tailwind-not-purging",
  },
  openGraph: {
    title: "Vite Tailwind CSS Not Purging — Fixed [2026]",
    description:
      "Fix Vite Tailwind purging — content paths, safelist, dynamic classes, JIT mode.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-tailwind-not-purging",
  },
};

const TOC = [
  {
    label: "Why Tailwind styles are missing or bundle is too large",
    href: "#why",
  },
  {
    label: "Fix 1 — Set correct content paths in tailwind.config",
    href: "#fix-1",
  },
  { label: "Fix 2 — Never build class names dynamically", href: "#fix-2" },
  {
    label: "Fix 3 — Use safelist for dynamic or runtime classes",
    href: "#fix-3",
  },
  { label: "Fix 4 — Verify Tailwind is running in JIT mode", href: "#fix-4" },
  { label: "Fix 5 — Measure and audit bundle size", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why are some Tailwind classes missing in production?",
    a: "Tailwind scans your source files to find every class name used, then generates only those classes. If a class is built dynamically (e.g. 'text-' + color) or the file containing it is not in the content paths, Tailwind won't see it and won't generate it. The fix is to use complete class names as static strings.",
  },
  {
    q: "Why is my Tailwind production bundle still very large?",
    a: "If content paths are not set correctly, Tailwind falls back to generating all utility classes — which is 3–4MB of CSS. Check that tailwind.config.ts content array matches your actual source file locations. A properly purged Tailwind bundle is typically 5–15KB.",
  },
  {
    q: "What is Tailwind JIT mode and is it always on?",
    a: "JIT (Just-in-Time) mode generates classes on demand as Vite encounters them during development, instead of pre-generating all classes. Since Tailwind v3, JIT is always on by default — there is no need to enable it. If you are on Tailwind v2, you need to set mode: 'jit' in tailwind.config.js.",
  },
  {
    q: "How do I use Tailwind with dynamic class names?",
    a: "Never build partial class names at runtime. Instead, use a mapping object that contains complete class strings: const colors = { red: 'text-red-500', blue: 'text-blue-500' }. This way the complete class names appear as static strings in your source and Tailwind's scanner includes them.",
  },
  {
    q: "What is the Tailwind safelist and when should I use it?",
    a: "The safelist tells Tailwind to always generate specific classes regardless of whether they appear in your source files. Use it for classes generated by a CMS, fetched from an API, or built at runtime. You can also use regex patterns to safelist a group: { pattern: /bg-(red|blue|green)-(100|500|900)/ }.",
  },
  {
    q: "Does Tailwind purging work with CSS-in-JS or runtime styling?",
    a: "No. Tailwind's scanner reads static source files — it cannot scan runtime-generated class strings. If you generate Tailwind class names from API data or dynamic logic, use the safelist option in tailwind.config.ts to explicitly list or pattern-match those classes.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite Tailwind CSS Not Purging — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-tailwind-not-purging",
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
            tags={["Vite", "Tailwind CSS", "Error Fix"]}
            title={"Vite Tailwind CSS Not Purging"}
            subtitle={"— Unused Styles Fixed [2026]"}
            sub={
              "Also covers: content paths · dynamic class names · safelist · JIT mode · bundle size audit"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Tailwind CSS v3/v4 · Vite 5/6 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Symptoms"}
            </p>
            <ErrorBlock>{`# Production CSS is 3-4MB — Tailwind not purging (should be ~10KB)
# OR: class works in dev but disappears in production build
# Dynamic class like "text-" + color → purged → missing in prod`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — check content paths first"}
            </p>
            <CodeBlock title="tailwind.config.ts — content paths must match your source files">{`export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  // ← must cover all files using Tailwind classes
  ],
  // ...
}`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">
            {"Why Tailwind Styles Are Missing or Bundle Is Too Large"}
          </SH>
          <P>
            {
              "Tailwind CSS scans your source files as plain text to find class names, then generates only the CSS for those classes. If content paths miss some files, those files' classes are not generated. If content paths are too broad or missing entirely, Tailwind generates everything — a 3–4MB CSS file."
            }
          </P>

          <FixCard
            number="1"
            title="Set Correct Content Paths in tailwind.config"
            time="2 min"
            tag="Root cause — wrong or missing content array"
          >
            <CodeBlock title="tailwind.config.ts — correct content paths">{`import type { Config } from "tailwindcss"

export default {
  content: [
    // ✅ Standard React + Vite project:
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // ✅ If using shadcn/ui components:
    "./components/**/*.{js,ts,jsx,tsx}",

    // ✅ If using a UI library with Tailwind classes:
    "./node_modules/@your-ui-lib/components/**/*.{js,ts,jsx,tsx}",

    // ✅ Monorepo — include packages that use Tailwind:
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config`}</CodeBlock>
            <TipBox>
              {
                "After changing content paths, run npm run build and check the dist/assets/*.css file size. A correctly purged Tailwind bundle for a typical app is 8–20KB. If it's still 3MB+, the content paths aren't matching your files."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Never Build Class Names Dynamically"
            time="2 min"
            tag="Dynamic classes purged in production — class missing"
          >
            <CodeBlock title="Static vs dynamic class names">{`// ❌ Dynamic — Tailwind scanner can't see 'text-red-500' as a string
const color = "red"
const size = "500"
const className = \`text-\${color}-\${size}\`   // purged — class never appears as literal

// ❌ Also wrong — partial string concatenation
const btn = "bg-" + variant    // "bg-" is not a complete class

// ✅ Complete class names as static strings — always visible to scanner
const colorMap = {
  red: "text-red-500",      // ← complete literal string
  blue: "text-blue-500",    // ← complete literal string
  green: "text-green-500",  // ← complete literal string
}
const className = colorMap[color]   // scanner sees all three complete strings

// ✅ Conditional classes — always use complete strings
const buttonClass = variant === "primary"
  ? "bg-indigo-600 text-white hover:bg-indigo-700"   // complete strings
  : "bg-gray-100 text-gray-900 hover:bg-gray-200"    // complete strings

// ✅ clsx/cn utility — complete class strings in all branches
import { cn } from "@/lib/utils"
const cls = cn(
  "px-4 py-2 rounded font-medium",
  isActive && "bg-indigo-600 text-white",   // complete strings
  !isActive && "bg-gray-100 text-gray-700"  // complete strings
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use safelist for Dynamic or Runtime Classes"
            time="3 min"
            tag="CMS content or API-driven class names that can't be static"
          >
            <CodeBlock title="tailwind.config.ts — safelist patterns">{`export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  safelist: [
    // Exact class names — always generated
    "text-red-500",
    "bg-green-100",
    "border-blue-300",

    // Pattern — generate entire family
    {
      pattern: /bg-(red|blue|green|yellow|purple)-(100|500|900)/,
      variants: ["hover", "focus"],   // include hover:bg-red-500 etc.
    },

    // For status badges from API/CMS
    {
      pattern: /text-(red|green|yellow|gray)-\d{3}/,
    },
  ],

  theme: { extend: {} },
  plugins: [],
}`}</CodeBlock>
            <WarnBox>
              {
                "Use safelist sparingly — each safelisted pattern adds CSS for every matching combination. Safelisting /bg-.*/ would include ALL background color utilities and defeat the purpose of purging."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Verify Tailwind Is Running in JIT Mode"
            time="2 min"
            tag="Tailwind v2 — JIT not enabled, large dev CSS bundle"
          >
            <CodeBlock title="Tailwind v3+ — JIT is always on; v2 requires opt-in">{`// tailwind.config.js (v2 — requires explicit JIT mode)
module.exports = {
  mode: "jit",      // ← required in v2
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],  // v2 uses 'purge', not 'content'
  // ...
}

// tailwind.config.ts (v3/v4 — JIT always on, no mode needed)
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],  // v3 uses 'content'
  // mode: "jit" is redundant and not needed in v3+
}

// Check your Tailwind version:
npx tailwindcss --version

// Upgrade to v3 if still on v2:
npm install -D tailwindcss@latest postcss autoprefixer`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Measure and Audit Bundle Size"
            time="2 min"
            tag="Confirm purging is working after fixes"
          >
            <CodeBlock title="Measure CSS bundle size after build">{`# Build and check CSS size
npm run build
ls -lh dist/assets/*.css

# Expected sizes:
# ✅ Properly purged Tailwind: 5–25KB (gzipped: 2–8KB)
# ❌ Not purged: 3–4MB (gzipped: 400–600KB)

# Using vite-bundle-visualizer to inspect output:
npm install -D rollup-plugin-visualizer

# vite.config.ts:
import { visualizer } from "rollup-plugin-visualizer"
export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, filename: "stats.html" }),
  ],
})

# Build → stats.html opens automatically showing bundle breakdown

# PurgeCSS manual audit — list all generated classes:
npx tailwindcss -i ./src/index.css -o /tmp/out.css --minify
wc -c /tmp/out.css   # check byte count`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Set content paths to match all files that use Tailwind classes — check with a build and inspect CSS size",
              "Never build class names by concatenating strings at runtime — always use complete literal class names",
              "Use a colorMap / variantMap object with complete class strings instead of template literals",
              "Use safelist only for classes driven by external data (CMS, API) — with specific patterns, not wildcards",
              "After any tailwind.config.ts change, run npm run build and check the CSS file size in dist/assets/",
              "Upgrade to Tailwind v3 if on v2 — JIT is always on and content replaces purge",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Vite",
                title: "Fix: Vite HMR not working",
                href: "/category/vite/error/vite-hmr-not-working",
                time: "6 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite proxy not working",
                href: "/category/vite/error/vite-proxy-not-working",
                time: "5 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui dark mode not working",
                href: "/category/shadcn/error/shadcn-dark-mode-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Optimised Vite + Tailwind Applications"}
            desc={
              "Softplix engineers configure Vite and Tailwind for minimal CSS bundles, fast HMR, and production-optimised builds. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
