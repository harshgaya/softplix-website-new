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
  title: "TypeScript tsconfig Paths Not Working — Fixed [2026 Guide]",
  description:
    "Fix TypeScript tsconfig path aliases not working. Covers baseUrl requirement, Vite alias config, webpack resolve.alias, Jest moduleNameMapper, and Next.js path setup.",
  keywords:
    "typescript tsconfig paths not working fix, typescript path aliases not resolving, tsconfig baseUrl paths 2026, typescript @alias cannot find module",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-tsconfig-paths-not-working",
  },
  openGraph: {
    title: "TypeScript tsconfig Paths Not Working — Fixed [2026 Guide]",
    description:
      "Fix tsconfig path aliases — baseUrl, Vite, webpack, Jest, Next.js configuration.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-tsconfig-paths-not-working",
  },
};

const TOC = [
  { label: "Why tsconfig paths need two configs", href: "#why-two-configs" },
  { label: "Fix 1 — baseUrl is missing in tsconfig", href: "#fix-1" },
  { label: "Fix 2 — Vite alias not matching tsconfig paths", href: "#fix-2" },
  { label: "Fix 3 — webpack resolve.alias not configured", href: "#fix-3" },
  { label: "Fix 4 — Jest moduleNameMapper not set", href: "#fix-4" },
  { label: "Fix 5 — Next.js path alias setup", href: "#fix-5" },
  { label: "Fix 6 — Node.js runtime resolution (tsc output)", href: "#fix-6" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why do tsconfig paths work in VS Code but fail at runtime?",
    a: "tsconfig paths only tell TypeScript's type checker where to find modules. They do NOT affect how Node.js, Vite, or webpack actually resolve files at runtime. You must also configure the same aliases in your bundler (Vite, webpack) or use tsconfig-paths for Node.js.",
  },
  {
    q: "Does Next.js support tsconfig paths automatically?",
    a: "Yes — Next.js 13+ reads tsconfig.json paths and configures webpack automatically. You only need to set paths and baseUrl in tsconfig.json. No vite.config.ts or webpack configuration needed.",
  },
  {
    q: "Why is baseUrl required when using paths in tsconfig?",
    a: "TypeScript's paths are always relative to baseUrl. Without baseUrl set, TypeScript doesn't know where to anchor the paths from. Always set baseUrl: '.' (project root) or './src' alongside any paths configuration.",
  },
  {
    q: "How do I fix path aliases in Jest?",
    a: "Add moduleNameMapper to your jest.config.js matching each tsconfig path. For example: { '^@/(.*)$': '<rootDir>/src/$1' }. This maps @/ imports to the correct filesystem path in the Jest test runner.",
  },
  {
    q: "Can I use tsconfig-paths to fix path aliases in Node.js?",
    a: "Yes. Install tsconfig-paths and run: node -r tsconfig-paths/register dist/server.js. For ts-node: ts-node -r tsconfig-paths/register src/server.ts. This makes Node.js read tsconfig.json paths at runtime.",
  },
  {
    q: "Path aliases work in dev but break in production build — why?",
    a: "The development server (Vite, Next.js) resolves aliases in memory. The production build also needs the bundler alias config. Check that vite.config.ts resolve.alias matches your tsconfig paths, and rebuild. For Docker, verify the build command runs in the correct directory.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript tsconfig Paths Not Working — Fixed [2026 Guide]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-tsconfig-paths-not-working",
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
            tags={["TypeScript", "tsconfig", "Error Fix"]}
            title={"TypeScript tsconfig Paths Not Working"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: path aliases · @/ imports · Vite · webpack · Jest · Next.js · Node.js"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"TypeScript · tsconfig · Vite · webpack"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Error You Are Seeing"}
            </p>
            <ErrorBlock>{`Cannot find module '@/components/Button' or its corresponding type declarations.

// OR at runtime after tsc compile:
Error: Cannot find module '@/lib/utils'
Require stack: - /app/dist/server.js`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why-two-configs">{"Why tsconfig Paths Need Two Configs"}</SH>
          <P>
            {"This is the most important thing to understand: "}
            <strong>
              {
                "tsconfig paths only affect TypeScript's type checker, not runtime module resolution."
              }
            </strong>
          </P>
          <P>
            {"When you write "}
            <IC>{"import Button from '@/components/Button'"}</IC>
            {", TypeScript knows where to find the types because of "}
            <IC>{"tsconfig.json"}</IC>
            {
              "  — but Node.js, Vite, and webpack are separate systems that need separate alias configuration."
            }
          </P>
          <CL
            items={[
              "VS Code / tsc type checking → reads tsconfig.json paths → works",
              "Vite dev server / production build → reads vite.config.ts alias → needs separate config",
              "webpack (Next.js, CRA) → reads next.config.js or webpack.config.js → Next.js auto-reads tsconfig",
              "Jest → reads jest.config.js moduleNameMapper → needs separate config",
              "Node.js runtime (tsc output) → reads nothing by default → needs tsconfig-paths",
            ]}
          />

          <FixCard
            number="1"
            title="baseUrl Is Missing in tsconfig"
            time="2 min"
            tag="Required — paths don't work without baseUrl"
          >
            <P>
              {"TypeScript's "}
              <IC>{"paths"}</IC>
              {" are always resolved relative to "}
              <IC>{"baseUrl"}</IC>
              {". Without "}
              <IC>{"baseUrl"}</IC>
              {", the paths configuration is silently ignored."}
            </P>
            <CodeBlock title="tsconfig.json — correct paths configuration">{`{
  "compilerOptions": {
    // baseUrl is REQUIRED for paths to work
    "baseUrl": ".",           // project root
    // or "baseUrl": "./src" if all your source is in src/

    "paths": {
      "@/*": ["./src/*"],          // @/anything → src/anything
      "@components/*": ["./src/components/*"],
      "@lib/*": ["./src/lib/*"],
      "@hooks/*": ["./src/hooks/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}`}</CodeBlock>
            <TipBox>
              {
                "The paths values are arrays — TypeScript will try each path in order. This supports fallback resolution, but for most projects you only need one path per alias."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Vite Alias Not Matching tsconfig Paths"
            time="3 min"
            tag="Must configure aliases in both tsconfig AND vite.config.ts"
          >
            <CodeBlock title="vite.config.ts — mirror tsconfig paths exactly">{`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Must match your tsconfig.json paths exactly
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },
});`}</CodeBlock>
            <CodeBlock title="Alternative — use vite-tsconfig-paths plugin (auto-sync)">{`# Install the plugin — reads tsconfig.json paths automatically
npm install -D vite-tsconfig-paths

# vite.config.ts — add the plugin (no manual alias needed)
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()], // reads tsconfig.json paths automatically
});`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="webpack resolve.alias Not Configured"
            time="3 min"
            tag="CRA eject · custom webpack · Electron"
          >
            <CodeBlock title="webpack.config.js — add resolve.alias">{`const path = require("path");

module.exports = {
  // ...other config
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Jest moduleNameMapper Not Set"
            time="3 min"
            tag="Path aliases break in Jest tests"
          >
            <ErrorBlock>{`Cannot find module '@/components/Button' from 'src/App.test.tsx'`}</ErrorBlock>
            <CodeBlock title="jest.config.js — add moduleNameMapper">{`/** @type {import('jest').Config} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // Map each tsconfig path alias to a filesystem path
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    // CSS/asset mocks
    "\\.css$": "identity-obj-proxy",
    "\\.(png|jpg|svg)$": "<rootDir>/src/__mocks__/fileMock.js",
  },
};`}</CodeBlock>
            <TipBox>
              {
                "The regex pattern in moduleNameMapper must use ^ and $ anchors and escape dots. ^ @/(.*)$ maps '@/anything' to 'src/anything'."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Next.js Path Alias Setup"
            time="2 min"
            tag="Next.js reads tsconfig.json paths natively"
          >
            <P>
              {"Next.js 13+ reads "}
              <IC>{"tsconfig.json"}</IC>
              {
                " paths and configures webpack automatically. You only need to configure tsconfig."
              }
            </P>
            <CodeBlock title="tsconfig.json — Next.js path aliases">{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
      // Note: in Next.js App Router, "@/*": ["./*"] maps to the project root
      // This lets you import from "@/app", "@/components", "@/lib" etc.
    }
  }
}

// Import in your Next.js pages/components:
import { Button } from "@/components/ui/Button";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";`}</CodeBlock>
            <WarnBox>
              {
                "In Next.js, '@/*': ['./*'] maps to the project root (where package.json is), not src/. If you have a src/ directory, use '@/*': ['./src/*'] instead."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="6"
            title="Node.js Runtime Resolution After tsc"
            time="3 min"
            tag="tsconfig-paths for compiled Node.js output"
          >
            <P>
              {"When you compile TypeScript with "}
              <IC>{"tsc"}</IC>
              {
                " and run the output with Node.js, path aliases are not resolved — Node.js only knows about filesystem paths."
              }
            </P>
            <CodeBlock title="Fix — use tsconfig-paths at runtime">{`# Install tsconfig-paths
npm install -D tsconfig-paths

# Run compiled output with path resolution
node -r tsconfig-paths/register dist/server.js

# Or with ts-node (development):
ts-node -r tsconfig-paths/register src/server.ts

# package.json scripts:
{
  "scripts": {
    "dev": "ts-node -r tsconfig-paths/register src/server.ts",
    "build": "tsc",
    "start": "node -r tsconfig-paths/register dist/server.js"
  }
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Always set baseUrl alongside paths in tsconfig.json — paths without baseUrl are ignored",
              "Use vite-tsconfig-paths plugin to auto-sync Vite aliases with tsconfig — one source of truth",
              "Configure Jest moduleNameMapper for every tsconfig path alias — tests and type checker must match",
              "In Next.js, set paths in tsconfig.json only — no webpack config needed",
              "For Node.js compiled output, include tsconfig-paths/register in your start script",
              "Document your path aliases in README — teammates often forget to configure their editors",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript Cannot Find Module",
                href: "/category/typescript/error/typescript-cannot-find-module",
                time: "7 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript Property Does Not Exist",
                href: "/category/typescript/error/typescript-property-does-not-exist",
                time: "7 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite Failed to Resolve Import",
                href: "/category/vite/error/vite-build-error-failed-to-resolve-import",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Configure TypeScript Projects From Scratch"}
            desc={
              "Softplix sets up production-ready TypeScript with path aliases, strict mode, and Jest configured correctly for Next.js, Vite, and Node.js projects."
            }
          />
        </div>
      </main>
    </>
  );
}
