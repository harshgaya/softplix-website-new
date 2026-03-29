// ============================================================
// ARTICLE 33: vite-build-error-failed-to-resolve-import.jsx
// Save as: /category/vite/error/vite-build-error-failed-to-resolve-import/page.jsx
// ============================================================

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

// ─── Article 33 ────────────────────────────────────────────

export const metadata = {
  title: "Vite Build Error: Failed to Resolve Import — Fixed [2026 Guide]",
  description:
    "Fix Vite failed to resolve import error in build and dev. Covers missing packages, path aliases, CSS imports, Node.js built-ins, and dynamic import resolution.",
  keywords:
    "vite failed to resolve import fix, vite build error failed to resolve 2026, vite cannot find module, vite import not found fix",
  alternates: {
    canonical:
      "https://softplix.com/category/vite/error/vite-build-error-failed-to-resolve-import",
  },
  openGraph: {
    title: "Vite Build Error: Failed to Resolve Import — Fixed [2026 Guide]",
    description:
      "Fix Vite failed to resolve import — missing packages, path aliases, CSS, Node built-ins.",
    type: "article",
    url: "https://softplix.com/category/vite/error/vite-build-error-failed-to-resolve-import",
  },
};

const TOC33 = [
  { label: "Read the Vite error message carefully", href: "#read-error" },
  { label: "Fix 1 — Package not installed", href: "#fix-1" },
  { label: "Fix 2 — Path alias not configured in Vite", href: "#fix-2" },
  {
    label: "Fix 3 — Node.js built-in module (fs, path, crypto)",
    href: "#fix-3",
  },
  { label: "Fix 4 — CSS or asset import failing", href: "#fix-4" },
  {
    label: "Fix 5 — Works in dev but fails in production build",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS33 = [
  {
    q: "What causes Vite 'failed to resolve import' error?",
    a: "Vite cannot find the module you are importing. Most common causes: the npm package is not installed, a path alias is not configured in vite.config.ts, you're importing a Node.js built-in (fs, path) in browser code, or the file path has a typo or wrong case.",
  },
  {
    q: "Vite 'failed to resolve import' works in dev but fails in build — why?",
    a: "Vite's dev server uses native ESM and is more lenient. The production build uses Rollup which is stricter about bare specifiers and dynamic imports. Check for dynamic import() calls with variables, or imports of Node.js built-ins that only work server-side.",
  },
  {
    q: "How do I import Node.js built-ins like 'path' in a Vite browser project?",
    a: "You can't directly — Node.js built-ins (fs, path, crypto, os) don't exist in the browser. Either move the code to a server file, use a browser-compatible polyfill, or configure Vite's resolve.alias to point to a browser polyfill package.",
  },
  {
    q: "Vite failed to resolve import for a CSS file — how to fix?",
    a: "Make sure the CSS file exists at the exact path and the extension is included. Vite is case-sensitive on Linux (production). Use ?url suffix for importing CSS as a URL string, or import the CSS directly without quotes in JS (import './styles.css').",
  },
  {
    q: "How do I fix Vite failed to resolve import for a dynamic import with a variable?",
    a: "Vite's Rollup bundler needs to statically analyze imports. Dynamic imports with fully variable paths (import(variable)) cannot be bundled. Use import.meta.glob for dynamic imports: const modules = import.meta.glob('./pages/*.tsx') — Vite handles these at build time.",
  },
  {
    q: "Does Vite support CommonJS require() imports?",
    a: "No — Vite uses native ESM. Use import instead of require(). If a dependency uses CommonJS only, Vite's dependency pre-bundling (using esbuild) usually handles it transparently. For persistent issues, add the package to vite.config.ts optimizeDeps.include.",
  },
];

function A33Schema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Vite Build Error: Failed to Resolve Import — Fixed [2026 Guide]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/vite/error/vite-build-error-failed-to-resolve-import",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function A33FAQ() {
  const s = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS33.map(({ q, a }) => ({
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
      <A33Schema />
      <A33FAQ />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Vite", "Build Error", "Error Fix"]}
            title={"Vite Build Error: Failed to Resolve Import"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: missing package · path alias · Node built-ins · dynamic import · CSS import"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Vite · Rollup · React"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error You Are Seeing"}
            </p>
            <ErrorBlock>{`[vite] Internal server error: Failed to resolve import "lodash" from "src/utils.ts".
Does the file exist?

[vite:resolve] Failed to resolve import "@/components/Button" from "src/App.tsx".

Error: Cannot find module 'path' — browser build cannot use Node.js built-in`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC33} />

          <SH id="read-error">{"Read the Vite Error Message Carefully"}</SH>
          <P>
            {
              "The Vite error message contains the import string that failed and the file it was imported from. These two pieces of information tell you exactly what to fix."
            }
          </P>
          <CL
            items={[
              "A bare specifier like 'lodash' or 'axios' → package not installed",
              "A path alias like '@/components/Button' → alias not in vite.config.ts",
              "A Node.js built-in like 'fs', 'path', 'crypto' → browser code cannot use Node modules",
              "A relative path like '../utils/helper' → file doesn't exist or wrong case",
            ]}
          />

          <FixCard
            number="1"
            title="Package Not Installed"
            time="2 min"
            tag="Most common — forgot to npm install"
          >
            <CodeBlock title="terminal">{`# Install the missing package
npm install lodash
npm install axios

# If package is in package.json but missing from node_modules:
rm -rf node_modules package-lock.json
npm install

# Verify installation
ls node_modules/lodash`}</CodeBlock>
            <TipBox>
              {
                "In a monorepo, make sure you install the package in the correct workspace package — the one that imports it, not just the root."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Path Alias Not Configured in Vite"
            time="3 min"
            tag="@/ aliases work in TS but not at runtime"
          >
            <P>
              {
                "tsconfig paths don't affect Vite's module resolver. You must also configure aliases in "
              }
              <IC>{"vite.config.ts"}</IC>
              {"."}
            </P>
            <CodeBlock title="vite.config.ts — add resolve.alias">{`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// OR — use vite-tsconfig-paths to auto-sync with tsconfig.json
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
});`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Node.js Built-in Module in Browser Code"
            time="3 min"
            tag="fs · path · crypto · os — browser cannot use these"
          >
            <ErrorBlock>{`Pre-transform error: Failed to resolve import "path" from "src/utils.ts"
Node built-in modules are not available in browser environments.`}</ErrorBlock>
            <P>
              {
                "Node.js built-ins cannot run in the browser. You need to either move the code server-side or use browser-compatible alternatives."
              }
            </P>
            <CodeBlock title="alternatives for common Node.js built-ins">{`// path.join → use URL API or template strings in browser
// Instead of: import path from 'path'; path.join(dir, file)
const url = new URL(file, baseUrl).pathname;

// crypto.randomUUID → available natively in modern browsers
const id = crypto.randomUUID(); // no import needed

// fs → use browser File API or fetch for file operations
const response = await fetch("/api/file-content");
const text = await response.text();

// For Vite SSR or server-side only files, mark them:
// These run only on the server, never in browser builds
if (import.meta.env.SSR) {
  const { readFile } = await import("fs/promises");
}`}</CodeBlock>
            <CodeBlock title="vite.config.ts — polyfill Node built-ins (last resort)">{`import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ["path", "crypto", "buffer"],
    }),
  ],
});`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="CSS or Asset Import Failing"
            time="2 min"
            tag="Static assets · image imports · CSS modules"
          >
            <CodeBlock title="correct Vite asset imports">{`// CSS — import directly (no quotes around path)
import "./styles/global.css";
import styles from "./Button.module.css"; // CSS modules

// Images — import as URL
import logoUrl from "./assets/logo.png";
// Use in JSX: <img src={logoUrl} />

// SVG — import as React component (with @svgr/rollup plugin)
import { ReactComponent as Logo } from "./logo.svg";

// Raw file content
import shaderCode from "./shader.glsl?raw";

// URL only (no file inlining)
import assetUrl from "./file.bin?url";`}</CodeBlock>
            <TipBox>
              {
                "Vite uses query suffixes (?raw, ?url, ?worker) to control how assets are imported. If a plain import fails, try the appropriate suffix."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Works in Dev but Fails in Production Build"
            time="3 min"
            tag="Dynamic imports · optimizeDeps · Rollup strictness"
          >
            <CodeBlock title="fix dynamic imports with import.meta.glob">{`// WRONG — Rollup cannot statically analyze variable paths
const module = await import(\`./pages/\${pageName}\`);

// CORRECT — use import.meta.glob for dynamic page loading
const pages = import.meta.glob("./pages/*.tsx");
const module = await pages[\`./pages/\${pageName}.tsx\`]();

// For packages that cause pre-bundling issues:
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    include: ["problematic-package"],
    exclude: ["package-that-bundles-itself"],
  },
});`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Run vite build locally before deploying — catches resolution errors before CI",
              "Use vite-tsconfig-paths plugin to keep aliases in sync with tsconfig",
              "Never import Node.js built-ins (fs, path) in files that run in the browser",
              "Use import.meta.glob for dynamic module loading — not template literal imports",
              "Check for case sensitivity in file paths — Vite on Linux is case-sensitive",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS33} />

          <RelatedBlock
            items={[
              {
                tag: "Vite",
                title: "Fix: Vite Environment Variables Not Working",
                href: "/category/vite/error/vite-environment-variables-not-working",
                time: "5 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite CORS Error",
                href: "/category/vite/error/vite-cors-error",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript tsconfig Paths Not Working",
                href: "/category/typescript/error/typescript-tsconfig-paths-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Vite-Powered React Apps"}
            desc={
              "Softplix migrates CRA projects to Vite and builds new React applications with optimal Vite configuration, TypeScript, and CI/CD pipelines."
            }
          />
        </div>
      </main>
    </>
  );
}
