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
  FaChevronRight,
  FaCircleXmark,
} from "react-icons/fa6";

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "npm ERR! Missing Script: Start — Fixed [Complete Guide 2026]",
  description:
    'Fix "npm ERR! missing script: start" instantly. Covers every cause — missing scripts field, wrong package.json, custom start commands, Next.js, React, Express — with copy-paste fixes for all frameworks.',
  keywords:
    "npm err missing script start, npm missing script start fix, npm error missing script start, npm run start error, package.json missing start script, fix npm missing script 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-err-missing-script-start",
  },
  openGraph: {
    title: "npm ERR! Missing Script: Start — Fixed [Complete Guide 2026]",
    description:
      'Fix "npm ERR! missing script: start" for any framework — Next.js, React, Express, Vite, and more.',
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-err-missing-script-start",
  },
};

// ─── Reusable UI ───────────────────────────────────────────────────────────────

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
          {"Terminal Error"}
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

function CheckList({ items }) {
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

function XList({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleXmark className="text-red-400 mt-0.5 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SectionHeading({ id, children }) {
  return (
    <h2
      id={id}
      className="text-2xl font-extrabold text-gray-900 mt-12 mb-4 leading-tight tracking-tight scroll-mt-8"
    >
      {children}
    </h2>
  );
}

function SubHeading({ children }) {
  return (
    <h3 className="text-lg font-bold text-gray-900 mt-8 mb-3 leading-snug">
      {children}
    </h3>
  );
}

function Prose({ children }) {
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

// ─── Table of Contents ─────────────────────────────────────────────────────────

const TOC = [
  { label: "What does this error mean?", href: "#what-it-means" },
  { label: "Fix 1 — Add a start script to package.json", href: "#fix-1" },
  { label: "Fix 2 — You are in the wrong directory", href: "#fix-2" },
  { label: "Fix 3 — Start scripts by framework", href: "#fix-3" },
  { label: "Fix 4 — package.json is corrupted or empty", href: "#fix-4" },
  { label: "Fix 5 — Use node directly instead", href: "#fix-5" },
  { label: "Fix 6 — Wrong script name (dev vs start)", href: "#fix-6" },
  { label: "Framework quick-reference", href: "#framework-ref" },
  { label: "How to prevent this error", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

function TableOfContents() {
  return (
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
  );
}

// ─── Related Articles ──────────────────────────────────────────────────────────

const RELATED = [
  {
    tag: "npm",
    title: 'Fix: npm ERR! Tracker "idealTree" Already Exists',
    href: "npm-err-tracker-idealtree-already-exists",
    time: "6 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! code ENOENT No Such File or Directory",
    href: "npm-err-code-enoent-no-such-file-or-directory",
    time: "7 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm command not found (Windows, macOS, Linux)",
    href: "npm-command-not-found",
    time: "5 min read",
  },
];

function RelatedArticles() {
  return (
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
  );
}

// ─── Schemas ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'What does "npm ERR! missing script: start" mean?',
    a: 'It means npm tried to run the "start" script defined in the scripts section of your package.json, but that key does not exist. npm has no idea what command to run to start your app, so it throws this error.',
  },
  {
    q: "How do I add a start script to package.json?",
    a: 'Open package.json and add a "scripts" section if it does not exist, then add "start" as a key with the command to run your app as its value. For example: { "scripts": { "start": "node index.js" } }. Then run npm start again.',
  },
  {
    q: "What is the difference between npm start and npm run dev?",
    a: '"npm start" runs the "start" script — conventionally used for production. "npm run dev" runs the "dev" script — conventionally used for development with hot reloading. Many frameworks like Next.js and Vite only define "dev" by default, so you must run npm run dev, not npm start, during development.',
  },
  {
    q: "npm start works locally but fails on the server — why?",
    a: "The most common cause is that your server is running npm start from a different directory than the one containing your package.json, or your production package.json is missing the start script that your local copy has. Check that your deployment pipeline copies the correct package.json and runs npm install before npm start.",
  },
  {
    q: "Can I rename the start script to something else?",
    a: 'Yes, but only "start", "test", "stop", and "restart" are special npm lifecycle scripts that can be run with "npm scriptname" (no "run" required). Any other script name requires "npm run scriptname". So if you rename "start" to "launch", you would need "npm run launch".',
  },
  {
    q: "What should the start script be for a Next.js app?",
    a: 'For Next.js in production: "start": "next start". For development: "dev": "next dev". You must run "npm run build" before "npm start" in a Next.js app — next start serves the production build and will fail if no build exists.',
  },
  {
    q: "What should the start script be for an Express app?",
    a: 'For Express: "start": "node index.js" or "start": "node server.js" — wherever your Express app entry point is. For development with auto-restart, use "dev": "nodemon index.js" instead.',
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "npm ERR! Missing Script: Start — Fixed [Complete Guide 2026]",
    description:
      "Complete fix guide for npm ERR! missing script: start — covering every cause and framework-specific solutions for Next.js, React, Express, Vite, and more.",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-err-missing-script-start",
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600 transition-colors">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link
              href="/blog"
              className="hover:text-indigo-600 transition-colors"
            >
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"npm Missing Script: Start"}</span>
          </nav> */}

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["npm", "Node.js", "Error Fix"].map((t) => (
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
              {"npm ERR! Missing Script: Start"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>

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
                {"npm 9–10 · All Frameworks"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — 60 seconds"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Open your package.json and add a start script. Pick the right command for your framework:"
              }
            </p>
            <CodeBlock title="package.json">
              {`{
  "scripts": {
    "start": "node index.js"        // Plain Node.js
    "start": "next start"           // Next.js (production)
    "start": "react-scripts start"  // Create React App
    "start": "vite preview"         // Vite
    "start": "node server.js"       // Express
  }
}`}
            </CodeBlock>
            <p className="text-sm text-green-700">
              {"Save the file, then run "}
              <IC>{"npm start"}</IC>
              {" again. Done."}
            </p>
          </div>

          <Prose>
            {
              "Not sure which one applies to you? The full breakdown — including why this happens, every possible cause, and framework-specific fixes — is below."
            }
          </Prose>

          <TableOfContents />

          {/* ════ WHAT IT MEANS ════ */}
          <SectionHeading id="what-it-means">
            {'What Does "npm ERR! Missing Script: Start" Mean?'}
          </SectionHeading>

          <Prose>{"Here is the exact error:"}</Prose>

          <ErrorBlock>
            {`npm ERR! Missing script: "start"
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run`}
          </ErrorBlock>

          <Prose>
            {"When you run "}
            <IC>{"npm start"}</IC>
            {", npm looks inside your "}
            <IC>{"package.json"}</IC>
            {" for a "}
            <IC>{"scripts"}</IC>
            {" section and within it a key called "}
            <IC>{"start"}</IC>
            {
              ". If that key does not exist — for any reason — npm has no command to run and throws this error immediately."
            }
          </Prose>

          <Prose>
            {
              "It is a configuration error, not a code error. Your application code is fine. The problem is that npm does not know "
            }
            <strong>{"how"}</strong>
            {" to start it."}
          </Prose>

          <SubHeading>{"Every Possible Cause"}</SubHeading>
          <CheckList
            items={[
              'The scripts section in package.json has no "start" key',
              "You are in the wrong directory — the package.json here belongs to a different project",
              "You cloned a project that uses npm run dev instead of npm start",
              "Your package.json was accidentally emptied, overwritten, or corrupted",
              'The "start" key was renamed (to "dev", "serve", "launch", etc.) during development',
              "You are running npm start on a library package — not an app — which has no start command",
              "A deployment pipeline created a stripped package.json without the scripts section",
            ]}
          />

          {/* ════ FIX 1 ════ */}
          <FixCard
            number="1"
            title='Add a "start" Script to package.json'
            time="1 minute"
            tag="Most common fix"
          >
            <Prose>
              {"The direct fix is always the same: open "}
              <IC>{"package.json"}</IC>
              {" and add a "}
              <IC>{"start"}</IC>
              {" script. The value is whatever command your app uses to run."}
            </Prose>

            <SubHeading>{"How package.json scripts work"}</SubHeading>
            <CodeBlock title="package.json">
              {`{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "build": "tsc",
    "test": "jest"
  }
}`}
            </CodeBlock>

            <Prose>
              {"The "}
              <IC>{"scripts"}</IC>
              {" object maps script names to shell commands. When you run "}
              <IC>{"npm start"}</IC>
              {", npm runs whatever string is in the "}
              <IC>{"start"}</IC>
              {" field as a shell command in your project directory."}
            </Prose>

            <SubHeading>{"View what scripts are currently defined"}</SubHeading>
            <Prose>
              {
                "Before editing, run this to see all scripts your project currently has:"
              }
            </Prose>
            <CodeBlock title="terminal">{"npm run"}</CodeBlock>

            <Prose>
              {"If the output shows "}
              <IC>{"dev"}</IC>
              {" but no "}
              <IC>{"start"}</IC>
              {" — you probably need "}
              <IC>{"npm run dev"}</IC>
              {", not "}
              <IC>{"npm start"}</IC>
              {". See Fix 6."}
            </Prose>

            <TipBox>
              {
                "npm start is shorthand — it is the only script name (along with test, stop, and restart) you can run without the 'run' keyword. All other scripts need 'npm run scriptname'."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 2 ════ */}
          <FixCard
            number="2"
            title="You Are in the Wrong Directory"
            time="30 seconds"
            tag="Very common — check this early"
          >
            <Prose>
              {"If you typed "}
              <IC>{"npm start"}</IC>
              {" in a folder that contains a "}
              <IC>{"package.json"}</IC>
              {" from a "}
              <strong>{"different"}</strong>
              {
                " project — one without a start script — you will get this exact error. Especially common when working across multiple projects or after opening a new terminal window."
              }
            </Prose>

            <CodeBlock title="terminal">
              {`# Check where you are
pwd            # macOS/Linux
cd             # Windows

# Check what package.json is here
cat package.json

# Navigate to your actual project
cd ~/projects/my-app
npm start`}
            </CodeBlock>

            <TipBox>
              {
                "Run 'npm run' with no arguments — it lists every script defined in the local package.json. If 'start' is not in that list, you have the wrong package.json, a missing script, or both."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 3 ════ */}
          <FixCard
            number="3"
            title="Start Scripts by Framework"
            time="1 minute"
            tag="Next.js · React · Express · Vite · more"
          >
            <Prose>
              {
                "Each framework uses a slightly different start command. Here is the correct "
              }
              <IC>{"start"}</IC>
              {" script for every major framework:"}
            </Prose>

            <SubHeading>{"Next.js"}</SubHeading>
            <WarnBox>
              {
                "Next.js requires a build before you can run npm start. The 'next start' command serves the production build — it will fail with a different error if you have not run 'npm run build' first."
              }
            </WarnBox>
            <CodeBlock title="package.json — Next.js">
              {`{
  "scripts": {
    "dev": "next dev",        // development
    "build": "next build",    // create production build
    "start": "next start",    // serve production build
    "lint": "next lint"
  }
}`}
            </CodeBlock>

            <SubHeading>{"Create React App"}</SubHeading>
            <CodeBlock title="package.json — Create React App">
              {`{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}`}
            </CodeBlock>

            <SubHeading>{"Vite (React, Vue, Svelte)"}</SubHeading>
            <Prose>
              {"Vite uses "}
              <IC>{"dev"}</IC>
              {" for development and "}
              <IC>{"preview"}</IC>
              {" to preview the production build — it has no "}
              <IC>{"start"}</IC>
              {" script by default. If your team uses "}
              <IC>{"npm start"}</IC>
              {", add one:"}
            </Prose>
            <CodeBlock title="package.json — Vite">
              {`{
  "scripts": {
    "dev": "vite",              // development
    "build": "vite build",
    "preview": "vite preview",
    "start": "vite"             // add this if you want npm start to work
  }
}`}
            </CodeBlock>

            <SubHeading>{"Express / Plain Node.js"}</SubHeading>
            <CodeBlock title="package.json — Express or Node.js">
              {`{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"   // hot reload in development
  }
}`}
            </CodeBlock>

            <SubHeading>{"NestJS"}</SubHeading>
            <CodeBlock title="package.json — NestJS">
              {`{
  "scripts": {
    "start": "nest start",
    "start:dev": "nest start --watch",
    "start:prod": "node dist/main"
  }
}`}
            </CodeBlock>

            <SubHeading>{"Astro"}</SubHeading>
            <CodeBlock title="package.json — Astro">
              {`{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",     // alias so npm start works
    "build": "astro build",
    "preview": "astro preview"
  }
}`}
            </CodeBlock>

            <SubHeading>{"Angular"}</SubHeading>
            <CodeBlock title="package.json — Angular">
              {`{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "test": "ng test"
  }
}`}
            </CodeBlock>
          </FixCard>

          {/* ════ FIX 4 ════ */}
          <FixCard
            number="4"
            title="package.json Is Corrupted, Empty, or Missing"
            time="2 minutes"
            tag="After bad merges or manual edits"
          >
            <Prose>
              {"If your "}
              <IC>{"package.json"}</IC>
              {
                " was accidentally emptied during a git merge conflict, manually broken during editing, or simply does not exist — npm will throw the missing script error because it cannot read a valid scripts section."
              }
            </Prose>

            <SubHeading>{"Check if package.json is valid JSON"}</SubHeading>
            <CodeBlock title="terminal">
              {`# macOS / Linux
cat package.json

# Validate JSON syntax
node -e "require('./package.json')" && echo "Valid JSON" || echo "Invalid JSON"`}
            </CodeBlock>

            <SubHeading>
              {"If package.json has merge conflict markers"}
            </SubHeading>
            <Prose>
              {
                "After a git merge, package.json sometimes contains conflict markers that break JSON syntax:"
              }
            </Prose>
            <ErrorBlock>
              {`<<<<<<< HEAD
  "start": "node index.js",
=======
  "start": "node server.js",
>>>>>>> feature-branch`}
            </ErrorBlock>
            <Prose>
              {
                "Open the file, resolve the conflict by keeping the correct version, delete the conflict markers, and save. Then verify it is valid JSON:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {"node -e \"require('./package.json')\" && echo 'Valid'"}
            </CodeBlock>

            <SubHeading>{"If package.json is genuinely missing"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm init -y
# Then manually add your scripts section`}
            </CodeBlock>

            <TipBox>
              {
                "Always use a JSON validator or your editor's built-in JSON linting after manually editing package.json. A single misplaced comma or missing quote will silently break the entire file."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 5 ════ */}
          <FixCard
            number="5"
            title="Run Node Directly Without a Start Script"
            time="30 seconds"
            tag="Quick workaround"
          >
            <Prose>
              {
                "If you just need to run your app immediately and do not want to edit "
              }
              <IC>{"package.json"}</IC>
              {
                " right now, you can bypass npm scripts entirely and run Node directly:"
              }
            </Prose>

            <CodeBlock title="terminal">
              {`# Run your entry point file directly
node index.js
node server.js
node app.js
node src/index.js`}
            </CodeBlock>

            <Prose>
              {
                "This is fine as a temporary workaround but adding a proper start script to "
              }
              <IC>{"package.json"}</IC>
              {
                " is always better for the long term — it documents how to run the app for your whole team and integrates with deployment pipelines that call "
              }
              <IC>{"npm start"}</IC>
              {"."}
            </Prose>

            <SubHeading>{"Or use npx for framework CLIs"}</SubHeading>
            <CodeBlock title="terminal">
              {`npx next dev
npx vite
npx astro dev`}
            </CodeBlock>
          </FixCard>

          {/* ════ FIX 6 ════ */}
          <FixCard
            number="6"
            title='Wrong Script Name — Use "npm run dev" Instead'
            time="30 seconds"
            tag="Vite, Next.js, and modern frameworks"
          >
            <Prose>
              {
                "Many modern frameworks — especially Vite and Next.js — scaffold projects with a "
              }
              <IC>{"dev"}</IC>
              {" script for development but "}
              <strong>{"no"}</strong> <IC>{"start"}</IC>
              {" script. If you habitually type "}
              <IC>{"npm start"}</IC>
              {", you will hit this error every time."}
            </Prose>

            <SubHeading>{"Check what scripts exist"}</SubHeading>
            <CodeBlock title="terminal">{"npm run"}</CodeBlock>

            <SubHeading>{"If you see 'dev' but not 'start'"}</SubHeading>
            <CodeBlock title="terminal">
              {`# Use this instead of npm start
npm run dev`}
            </CodeBlock>

            <SubHeading>{"Or add a start alias pointing to dev"}</SubHeading>
            <CodeBlock title="package.json">
              {`{
  "scripts": {
    "dev": "next dev",
    "start": "next dev"    // alias — both commands now work
  }
}`}
            </CodeBlock>

            <TipBox>
              {
                "The convention in modern JavaScript is: 'dev' = development with hot reload, 'start' = production server. If you only have a dev environment, using 'npm run dev' is perfectly correct — you do not need a start script."
              }
            </TipBox>
          </FixCard>

          {/* ════ FRAMEWORK REFERENCE ════ */}
          <SectionHeading id="framework-ref">
            {"Framework Quick Reference — Correct Start Commands"}
          </SectionHeading>

          <Prose>
            {
              "Bookmark this table. It covers the correct commands to start every major JavaScript framework — and which ones use "
            }
            <IC>{"npm start"}</IC>
            {" vs "}
            <IC>{"npm run dev"}</IC>
            {"."}
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Framework Start Commands"}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-white">
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Framework"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Dev command"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Production start"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"npm start works?"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "Next.js",
                      "npm run dev",
                      "npm start (after build)",
                      "✅ Yes (prod only)",
                    ],
                    ["Create React App", "npm start", "npm start", "✅ Yes"],
                    [
                      "Vite",
                      "npm run dev",
                      "npm run preview",
                      "❌ Not by default",
                    ],
                    ["Express", "npm start", "npm start", "✅ Yes"],
                    [
                      "NestJS",
                      "npm run start:dev",
                      "npm start",
                      "✅ Yes (prod)",
                    ],
                    [
                      "Astro",
                      "npm run dev",
                      "npm run preview",
                      "❌ Not by default",
                    ],
                    ["Angular", "npm start", "npm start", "✅ Yes"],
                    [
                      "Vue CLI",
                      "npm run serve",
                      "npm run serve",
                      "❌ Uses 'serve'",
                    ],
                    ["Nuxt 3", "npm run dev", "npm run start", "✅ Yes (prod)"],
                    [
                      "SvelteKit",
                      "npm run dev",
                      "npm run preview",
                      "❌ Not by default",
                    ],
                  ].map(([fw, dev, prod, works]) => (
                    <tr
                      key={fw}
                      className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-5 py-3 font-semibold text-gray-800">
                        {fw}
                      </td>
                      <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                        {dev}
                      </td>
                      <td className="px-5 py-3 font-mono text-xs text-indigo-700">
                        {prod}
                      </td>
                      <td
                        className={`px-5 py-3 text-xs font-bold ${works.startsWith("✅") ? "text-green-600" : "text-red-500"}`}
                      >
                        {works}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ════ PREVENTION ════ */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>

          <CheckList
            items={[
              'Always add a "start" script when initialising a new project — even if it just points to "node index.js"',
              'Use "npm run" with no arguments to see all available scripts before assuming "npm start" will work',
              "Commit package.json to version control and never .gitignore it",
              "Add a README.md to every project documenting how to run it — it saves your future self and your teammates",
              "In CI/CD pipelines, always verify npm run works before deploying — a missing start script on a server is harder to debug than locally",
              "After resolving git merge conflicts in package.json, validate the JSON with: node -e \"require('./package.json')\"",
              "Use a consistent convention across your projects — pick either npm start or npm run dev and stick to it",
            ]}
          />

          {/* ════ SUMMARY ════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Diagnosis — Work Through This in Order"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  check: "Run 'npm run' — see if a start script exists at all",
                  fix: "If not → add one to package.json",
                },
                {
                  check: "Check your working directory with pwd / cd",
                  fix: "If wrong → cd into your project",
                },
                {
                  check: "Does it show 'dev' but not 'start'?",
                  fix: "Run npm run dev instead",
                },
                {
                  check: "Is package.json valid JSON?",
                  fix: "node -e \"require('./package.json')\"",
                },
                {
                  check: "Check which framework you are using",
                  fix: "Copy the correct start script from Fix 3",
                },
                {
                  check: "Still broken? Run node directly",
                  fix: "node index.js or node server.js",
                },
              ].map(({ check, fix }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{check}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{fix}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* ════ FAQ ════ */}
          <SectionHeading id="faq">
            {"Frequently Asked Questions"}
          </SectionHeading>
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

          {/* Related */}
          <RelatedArticles />

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js & Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Struggling with npm configuration in a larger project? We can help you ship faster with a clean, scalable setup."
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
