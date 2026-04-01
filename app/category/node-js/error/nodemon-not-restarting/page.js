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
  title:
    "Nodemon Not Restarting — Server Not Detecting File Changes [Fixed 2026]",
  description:
    "Fix nodemon not restarting when files change. Covers watch paths, ignore patterns, extension configuration, nodemon.json setup, and switching to Node.js --watch flag.",
  keywords:
    "nodemon not restarting, nodemon not watching files, nodemon ignore node_modules 2026, nodemon.json configuration, nodemon TypeScript tsx watch",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodemon-not-restarting",
  },
  openGraph: {
    title: "Nodemon Not Restarting — Fixed [2026]",
    description:
      "Fix nodemon not detecting file changes — watch paths, extensions, nodemon.json, Node --watch.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodemon-not-restarting",
  },
};

const TOC = [
  { label: "Why nodemon stops detecting file changes", href: "#why" },
  { label: "Fix 1 — Specify watch paths explicitly", href: "#fix-1" },
  { label: "Fix 2 — Add file extensions nodemon should watch", href: "#fix-2" },
  { label: "Fix 3 — Use nodemon.json for full configuration", href: "#fix-3" },
  {
    label: "Fix 4 — Use tsx or ts-node for TypeScript projects",
    href: "#fix-4",
  },
  {
    label: "Fix 5 — Use Node.js --watch flag (Node 18+) instead",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is nodemon not restarting when I save a file?",
    a: "The most common causes are: the changed file is in a directory not watched by nodemon (defaults to the current directory), the file extension is not in nodemon's watch list (defaults to .js, .mjs, .json), or the file path matches an ignore pattern like node_modules. Add --watch and --ext flags or configure nodemon.json.",
  },
  {
    q: "How do I make nodemon watch TypeScript files?",
    a: "Add --ext ts,js to the nodemon command, and use tsx or ts-node-esm as the executor: nodemon --exec 'tsx src/index.ts' --ext ts,js. This tells nodemon to watch .ts files and use tsx to run them directly without a separate compile step.",
  },
  {
    q: "What is the difference between nodemon --watch and --ext?",
    a: "--watch specifies which directories or files to monitor. --ext specifies which file extensions trigger a restart. Both are needed for non-standard setups: --watch src tells nodemon to watch the src directory, --ext ts,js,json tells it which file types in that directory to react to.",
  },
  {
    q: "Why does nodemon restart on every save even without changes?",
    a: "Nodemon is probably watching generated output files that change when nodemon restarts (e.g. TypeScript compile output). Use --ignore to exclude build directories: nodemon --ignore dist/ --ignore .next/. Also exclude log files and temporary files that your app writes during startup.",
  },
  {
    q: "What is the Node.js --watch flag and should I use it instead of nodemon?",
    a: "Node.js 18+ has a built-in --watch flag that restarts the process when imported files change. It is simpler and requires no dependencies. Use node --watch src/index.js for simple projects. For TypeScript, combine it with tsx: tsx --watch src/index.ts. For complex setups with ignore patterns and multiple extensions, nodemon still has more configuration options.",
  },
  {
    q: "Can I use nodemon with ES modules (ESM)?",
    a: "Yes, but you may need to set --experimental-specifier-resolution=node or use an .mjs extension. For ESM TypeScript, use tsx which natively handles ESM: nodemon --exec 'tsx src/index.ts'. Alternatively, use the Node.js --watch flag which has better native ESM support.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nodemon Not Restarting — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodemon-not-restarting",
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
            tags={["Node.js", "Nodemon", "Error Fix"]}
            title={"Nodemon Not Restarting"}
            subtitle={"— File Changes Not Detected [Fixed 2026]"}
            sub={
              "Also covers: watch paths · --ext flag · nodemon.json · TypeScript with tsx · Node.js --watch alternative"
            }
            date={"January 2026"}
            read={"5 min read"}
            tech={"Node.js 18/20/22 · TypeScript · Nodemon"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`# nodemon running but server doesn't restart on file save
$ nodemon src/index.ts
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
# .ts files not in extension list → changes ignored!`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — add extensions and exec"}
            </p>
            <CodeBlock title="Correct nodemon command for TypeScript">{`nodemon --exec "tsx" --ext "ts,js,json" --watch src src/index.ts`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why nodemon Stops Detecting File Changes"}</SH>
          <P>
            {
              "nodemon watches files using the OS file system events (same as Vite). By default it watches the current directory for "
            }
            <IC>{".js"}</IC>
            {", "}
            <IC>{".mjs"}</IC>
            {", "}
            <IC>{".cjs"}</IC>
            {", and "}
            <IC>{".json"}</IC>
            {" files. TypeScript "}
            <IC>{".ts"}</IC>
            {" files are not watched by default — you must add them with "}
            <IC>{"--ext"}</IC>
            {"  ."}
          </P>

          <FixCard
            number="1"
            title="Specify Watch Paths Explicitly"
            time="2 min"
            tag="nodemon not watching the right directory"
          >
            <CodeBlock title="--watch flag — specify directories">{`# ❌ Watches everything in cwd including node_modules (slow)
nodemon index.js

# ✅ Watch only src directory
nodemon --watch src index.js

# ✅ Watch multiple directories
nodemon --watch src --watch config index.js

# ✅ Watch specific file
nodemon --watch src/config.json index.js`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add File Extensions nodemon Should Watch"
            time="2 min"
            tag="TypeScript or other file types not triggering restart"
          >
            <CodeBlock title="--ext flag — file extensions to watch">{`# Default extensions: js,mjs,cjs,json
# TypeScript not included — add ts,tsx:

nodemon --ext "js,ts,json" src/index.ts

# Full TypeScript + config files:
nodemon --ext "js,ts,tsx,json,yaml,yml" src/index.ts

# package.json scripts:
{
  "scripts": {
    "dev": "nodemon --ext 'ts,js,json' --exec 'tsx' src/index.ts"
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use nodemon.json for Full Configuration"
            time="3 min"
            tag="Long CLI flags — centralise in config file"
          >
            <CodeBlock title="nodemon.json — complete configuration">{`{
  "watch": ["src", "config"],
  "ext": "ts,js,json,yaml",
  "ignore": [
    "src/**/*.spec.ts",
    "src/**/*.test.ts",
    "dist/",
    "node_modules/",
    "*.log"
  ],
  "exec": "tsx src/index.ts",
  "delay": 500,
  "env": {
    "NODE_ENV": "development"
  }
}

// package.json — just run nodemon (picks up nodemon.json automatically):
{
  "scripts": {
    "dev": "nodemon"
  }
}

// Or point to config explicitly:
{
  "scripts": {
    "dev": "nodemon --config nodemon.json"
  }
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Use tsx or ts-node for TypeScript Projects"
            time="3 min"
            tag="TypeScript files need a runtime — nodemon can't run .ts directly"
          >
            <CodeBlock title="TypeScript executors with nodemon">{`# Install tsx (recommended — fast, no config needed)
npm install -D tsx

# Run TypeScript with nodemon + tsx
nodemon --exec "tsx" --ext "ts,js" --watch src src/index.ts

# Or with nodemon.json:
{ "exec": "tsx src/index.ts", "ext": "ts,js,json" }

# Alternative — ts-node (slower, needs tsconfig)
npm install -D ts-node
nodemon --exec "ts-node" --ext "ts" src/index.ts

# For ESM TypeScript:
nodemon --exec "tsx" --ext "ts" src/index.ts
# tsx handles ESM natively — no extra flags needed

# package.json scripts:
{
  "scripts": {
    "dev": "nodemon --exec tsx --ext ts,js --watch src src/index.ts",
    "dev:config": "nodemon"  // uses nodemon.json
  }
}`}</CodeBlock>
            <TipBox>
              {
                "tsx is the fastest TypeScript executor for development — no compilation step, native ESM support, and works with path aliases from tsconfig. Install it with npm install -D tsx and use it as the nodemon exec."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use Node.js --watch Flag (Node 18+) Instead"
            time="2 min"
            tag="Simple projects — built-in watch without nodemon dependency"
          >
            <CodeBlock title="Node.js --watch — zero dependency alternative">{`# Node.js 18+ built-in watch mode — no nodemon needed
node --watch src/index.js

# With tsx for TypeScript (Node 18+):
tsx --watch src/index.ts

# package.json:
{
  "scripts": {
    "dev": "node --watch src/index.js",
    "dev:ts": "tsx --watch src/index.ts"
  }
}

# Node --watch-path — watch additional directories:
node --watch --watch-path=./config src/index.js

# Ignore patterns (Node 22+):
node --watch --watch-path=src --ignore-watch=src/generated src/index.js

# When to use --watch vs nodemon:
# --watch: simple projects, single entry point, no ignore patterns
# nodemon: complex watch configs, multiple extensions, legacy projects`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always add --ext ts,js,json when working on TypeScript projects — .ts is not watched by default",
              "Use nodemon.json to centralise config — avoids long CLI flags and ensures consistency across team",
              "Use tsx as the exec for TypeScript — faster than ts-node, no separate tsconfig needed",
              "Add ignore patterns for dist/, *.log, and *.spec.ts to avoid restart loops",
              "For Node 18+ simple projects, use tsx --watch src/index.ts — zero dependencies",
              "On Linux/WSL2, increase inotify watches if nodemon randomly stops detecting changes",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Node.js",
                title: "Fix: Node.js HTTPS SSL certificate error",
                href: "/category/node-js/error/nodejs-https-ssl-certificate-error",
                time: "6 min read",
              },
              {
                tag: "Node.js",
                title: "Fix: Node.js child process error",
                href: "/category/node-js/error/nodejs-child-process-error",
                time: "6 min read",
              },
              {
                tag: "Vite",
                title: "Fix: Vite HMR not working",
                href: "/category/vite/error/vite-hmr-not-working",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production Node.js Backends"}
            desc={
              "Softplix engineers build Node.js and Express APIs with TypeScript, proper watch configuration, and production-ready deployments. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
