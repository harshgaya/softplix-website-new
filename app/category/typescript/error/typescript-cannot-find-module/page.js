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
  title: "TypeScript Cannot Find Module — Fixed [Complete Guide 2026]",
  description:
    "Fix TypeScript cannot find module or its corresponding type declarations. Covers missing @types, path aliases, moduleResolution, declaration files, and monorepo setups.",
  keywords:
    "typescript cannot find module, typescript cannot find module or its corresponding type declarations fix 2026, ts2307 fix, typescript module not found",
  alternates: {
    canonical:
      "https://softplix.com/category/typescript/error/typescript-cannot-find-module",
  },
  openGraph: {
    title: "TypeScript Cannot Find Module — Fixed [Complete Guide 2026]",
    description:
      "Fix TypeScript cannot find module — @types, path aliases, moduleResolution, declaration files.",
    type: "article",
    url: "https://softplix.com/category/typescript/error/typescript-cannot-find-module",
  },
};

const TOC = [
  { label: "What causes TS2307 cannot find module", href: "#cause" },
  { label: "Fix 1 — Missing @types package", href: "#fix-1" },
  { label: "Fix 2 — Path aliases not configured in tsconfig", href: "#fix-2" },
  { label: "Fix 3 — moduleResolution set incorrectly", href: "#fix-3" },
  { label: "Fix 4 — Missing declaration file (.d.ts)", href: "#fix-4" },
  { label: "Fix 5 — Cannot find module in monorepo", href: "#fix-5" },
  { label: "Fix 6 — VS Code shows error but build works", href: "#fix-6" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is TypeScript error TS2307 cannot find module?",
    a: "TS2307 means TypeScript cannot locate the module you are importing. Either the package is not installed, it lacks type declarations, your tsconfig paths are misconfigured, or moduleResolution is set incorrectly for your bundler/runtime.",
  },
  {
    q: "TypeScript cannot find module but it is installed — why?",
    a: "The package exists in node_modules but lacks TypeScript type declarations. Check if a corresponding @types/package-name exists on npm and install it. If not, create a declaration file: declare module 'package-name'; in a .d.ts file.",
  },
  {
    q: "How do I fix path alias 'cannot find module @/components'?",
    a: 'Set paths in tsconfig.json: { "@/*": ["./src/*"] }. Also configure the same alias in your bundler — Vite needs alias in vite.config.ts, webpack needs resolve.alias, and Next.js reads tsconfig.json paths natively.',
  },
  {
    q: "What is the correct moduleResolution for Next.js 2026?",
    a: "Use moduleResolution: 'bundler' for Next.js 14+ and Vite projects, or 'node16'/'nodenext' for pure Node.js projects with ESM. The legacy 'node' setting does not support subpath exports and causes module resolution failures with modern packages.",
  },
  {
    q: "Cannot find module only in VS Code but builds fine — why?",
    a: "VS Code uses its own TypeScript server which may be using a different TypeScript version than your project. Press Cmd+Shift+P → 'TypeScript: Select TypeScript Version' → 'Use Workspace Version'. This forces VS Code to use your project's node_modules typescript.",
  },
  {
    q: "How do I create a type declaration for a package that has no @types?",
    a: "Create a file src/types/packages.d.ts and add: declare module 'package-name'; This tells TypeScript to treat the module as any type. For better types, declare module 'package-name' { export function myFn(): void; } with the actual exports.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TypeScript Cannot Find Module — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/typescript/error/typescript-cannot-find-module",
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
            tags={["TypeScript", "Error Fix"]}
            title={"TypeScript Cannot Find Module"}
            subtitle={"— Fixed [Complete Guide 2026]"}
            sub={
              "Also covers: TS2307 · cannot find type declarations · path aliases · moduleResolution"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"TypeScript · tsconfig · Node.js"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Errors You Are Seeing"}
            </p>
            <ErrorBlock>{`error TS2307: Cannot find module 'lodash' or its corresponding type declarations.

error TS2307: Cannot find module '@/components/Button' or its corresponding type declarations.

error TS2307: Cannot find module './utils' or its corresponding type declarations.`}</ErrorBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="cause">{"What Causes TS2307 Cannot Find Module"}</SH>
          <P>
            {
              "TS2307 fires when TypeScript's module resolver cannot locate a module you are importing. There are four distinct root causes — each with a different fix:"
            }
          </P>
          <CL
            items={[
              "Package installed but missing type declarations (no @types/package)",
              "Path aliases like @/ configured in tsconfig but not in the bundler, or vice versa",
              "moduleResolution in tsconfig.json is wrong for your bundler or runtime",
              "Importing a file without an extension that TypeScript cannot find",
            ]}
          />

          <FixCard
            number="1"
            title="Missing @types Package"
            time="3 min"
            tag="Cannot find type declarations for 'lodash', 'express', etc."
          >
            <P>
              {
                "Many npm packages ship JavaScript only, without TypeScript types. The DefinitelyTyped project provides "
              }
              <IC>{"@types/*"}</IC>
              {" packages that add types for these."}
            </P>
            <CodeBlock title="terminal — install missing @types">{`# Install type declarations for common packages
npm install -D @types/node
npm install -D @types/lodash
npm install -D @types/express
npm install -D @types/react @types/react-dom

# Check if @types exists for your package
npm info @types/your-package-name

# If @types does NOT exist, create a declaration file (see Fix 4)`}</CodeBlock>
            <CodeBlock title="tsconfig.json — ensure @types are included">{`{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"],
    "types": ["node"] // explicitly include node types if needed
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Modern packages (React 18+, Prisma, Next.js) ship their own types and do not need a separate @types install. Only legacy packages need @types."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Path Aliases Not Configured"
            time="4 min"
            tag="@/ aliases · import from '@/components/Button'"
          >
            <P>
              {"Path aliases require configuration in two places: "}
              <IC>{"tsconfig.json"}</IC>
              {
                " (for TypeScript to understand) AND your bundler config (for the runtime to resolve them)."
              }
            </P>
            <CodeBlock title="tsconfig.json — define paths">{`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./src/components/*"],
      "@lib/*": ["./src/lib/*"],
      "@types/*": ["./src/types/*"]
    }
  }
}`}</CodeBlock>
            <CodeBlock title="vite.config.ts — mirror aliases for Vite">{`import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@lib": path.resolve(__dirname, "./src/lib"),
    },
  },
});`}</CodeBlock>
            <CodeBlock title="next.config.js — Next.js reads tsconfig paths automatically">{`// Next.js 13+ reads tsconfig.json paths natively — no extra config needed
// Just set paths in tsconfig.json and Next.js will resolve them

// If using webpack directly, add to next.config.js:
module.exports = {
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    return config;
  },
};`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="moduleResolution Set Incorrectly"
            time="3 min"
            tag="Cannot find module for packages with exports field"
          >
            <P>
              {"Modern packages use the "}
              <IC>{"exports"}</IC>
              {" field in package.json for subpath exports. The legacy "}
              <IC>{"node"}</IC>
              {" moduleResolution does not support this — upgrade to "}
              <IC>{"bundler"}</IC>
              {" or "}
              <IC>{"node16"}</IC>
              {"."}
            </P>
            <CodeBlock title="tsconfig.json — correct moduleResolution settings">{`// For Next.js 14+ and Vite projects:
{
  "compilerOptions": {
    "moduleResolution": "bundler",
    "module": "ESNext",
    "target": "ES2017"
  }
}

// For Node.js with native ESM (package.json type: "module"):
{
  "compilerOptions": {
    "moduleResolution": "node16",
    "module": "node16"
  }
}

// For traditional Node.js (CommonJS):
{
  "compilerOptions": {
    "moduleResolution": "node",
    "module": "commonjs"
  }
}`}</CodeBlock>
            <WarnBox>
              {
                "If you switch moduleResolution from 'node' to 'bundler', you may see new errors in other files. Fix each one — the new setting is more correct and will catch real bugs."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Missing Declaration File (.d.ts)"
            time="3 min"
            tag="Package with no @types — write your own declarations"
          >
            <P>
              {"When a package has no "}
              <IC>{"@types"}</IC>
              {
                " equivalent, create a local declaration file to silence the error."
              }
            </P>
            <CodeBlock title="src/types/vendor.d.ts — minimal declaration">{`// Minimal — treats the whole module as 'any'
declare module "untyped-package";

// Better — declare the actual exports you use
declare module "untyped-package" {
  export function doThing(input: string): Promise<void>;
  export interface Config {
    timeout: number;
    retries: number;
  }
  export default function main(config: Config): void;
}`}</CodeBlock>
            <CodeBlock title="tsconfig.json — include your types directory">{`{
  "compilerOptions": {
    "typeRoots": ["./node_modules/@types", "./src/types"]
  },
  "include": ["src", "src/types"]
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Cannot Find Module in Monorepo"
            time="4 min"
            tag="Turborepo · pnpm workspaces · package references"
          >
            <CodeBlock title="tsconfig.json — project references for monorepos">{`// Root tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@myapp/utils": ["./packages/utils/src"],
      "@myapp/ui": ["./packages/ui/src"]
    }
  },
  "references": [
    { "path": "./packages/utils" },
    { "path": "./packages/ui" }
  ]
}

// packages/utils/package.json — ensure main/exports/types are set
{
  "name": "@myapp/utils",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts"
  }
}`}</CodeBlock>
            <TipBox>
              {
                'In pnpm workspaces, make sure each internal package is listed in the consumer\'s package.json dependencies as "@myapp/utils": "workspace:*".'
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="VS Code Shows Error but Build Works"
            time="2 min"
            tag="TypeScript version mismatch between editor and project"
          >
            <P>
              {
                "VS Code ships with its own TypeScript version. If your project's "
              }
              <IC>{"typescript"}</IC>
              {
                " version differs, you see editor errors that do not appear in the build."
              }
            </P>
            <CodeBlock title="VS Code — use workspace TypeScript">{`# 1. Open Command Palette: Cmd+Shift+P (Mac) / Ctrl+Shift+P (Windows)
# 2. Type: TypeScript: Select TypeScript Version
# 3. Choose: Use Workspace Version
# This forces VS Code to use your project's node_modules/typescript

# Alternatively, set in .vscode/settings.json:
{
  "typescript.tsdk": "node_modules/typescript/lib"
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CL
            items={[
              "Set moduleResolution: 'bundler' for Vite/Next.js projects from the start",
              "Configure path aliases in both tsconfig.json AND your bundler config simultaneously",
              "Install @types/node when using Node.js built-in modules like path, fs, os",
              "Use 'TypeScript: Select TypeScript Version → Workspace Version' in VS Code",
              "In monorepos, always set main, types, and exports in each package's package.json",
              "Create a src/types/ directory for vendor declarations — keep them organized",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "TypeScript",
                title: "Fix: TypeScript Property Does Not Exist",
                href: "/category/typescript/error/typescript-property-does-not-exist",
                time: "6 min read",
              },
              {
                tag: "TypeScript",
                title: "Fix: TypeScript tsconfig Paths Not Working",
                href: "/category/typescript/error/typescript-tsconfig-paths-not-working",
                time: "5 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Build Failing on Vercel",
                href: "/category/next-js/error/nextjs-build-failing-vercel",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Configure TypeScript Projects From Scratch"}
            desc={
              "Softplix sets up production-ready TypeScript configurations for Next.js, Vite, and Node.js projects. Strict mode, path aliases, and monorepo support included."
            }
          />
        </div>
      </main>
    </>
  );
}
