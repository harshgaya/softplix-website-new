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

export const metadata = {
  title: "Node.js Server Crashing Automatically — Fixed [Complete Guide 2026]",
  description:
    "Fix Node.js server crashing automatically. Handle unhandled promise rejections, uncaught exceptions, memory leaks, and use PM2 to auto-restart your app in production.",
  keywords:
    "nodejs server crashing automatically, node server keeps crashing, nodejs app crashing fix, node process exits unexpectedly 2026, node server crash loop",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-server-crashing-automatically",
  },
  openGraph: {
    title:
      "Node.js Server Crashing Automatically — Fixed [Complete Guide 2026]",
    description:
      "Fix Node.js server crashing automatically — find the crash cause and prevent it.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-server-crashing-automatically",
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

const TOC = [
  { label: "Find the crash cause first", href: "#diagnose" },
  { label: "Fix 1 — Handle unhandled promise rejections", href: "#fix-1" },
  { label: "Fix 2 — Catch uncaught exceptions", href: "#fix-2" },
  { label: "Fix 3 — Add Express error middleware", href: "#fix-3" },
  { label: "Fix 4 — Fix async route handlers", href: "#fix-4" },
  { label: "Fix 5 — Use PM2 for auto-restart (production)", href: "#fix-5" },
  { label: "Fix 6 — Fix memory-related crashes", href: "#fix-6" },
  { label: "Fix 7 — Database connection crashes", href: "#fix-7" },
  { label: "Prevention — the definitive checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does my Node.js server keep crashing?",
    a: "The most common causes are unhandled promise rejections, uncaught exceptions, or out-of-memory errors. Add process.on('uncaughtException') and process.on('unhandledRejection') handlers at the top of your entry file to log the exact crash cause.",
  },
  {
    q: "How do I keep Node.js running after a crash?",
    a: "Use PM2: npm install -g pm2, then pm2 start server.js. PM2 automatically restarts your app when it crashes and logs the crash reason. It also starts your app on system reboot.",
  },
  {
    q: "Node.js server exits without any error message — why?",
    a: "Add these handlers to see the hidden error: process.on('uncaughtException', console.error) and process.on('unhandledRejection', console.error). The crash reason will now be logged before the process exits.",
  },
  {
    q: "How do I handle errors in Express so the server does not crash?",
    a: "Add error middleware as the LAST middleware: app.use((err, req, res, next) => { console.error(err); res.status(500).json({ error: err.message }) }). This catches all Express route errors.",
  },
  {
    q: "Node.js crashes on production but not locally — why?",
    a: "Common production-only causes: different environment variables, less available memory, more concurrent requests revealing race conditions, different Node.js version, or a missing .env configuration. Check production logs with pm2 logs.",
  },
  {
    q: "How do I monitor Node.js crashes in production?",
    a: "Use PM2 (pm2 logs, pm2 monit) for basic monitoring. For production-grade monitoring, use tools like Sentry (error tracking), Datadog, or New Relic to capture crash data with full context.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Node.js Server Crashing Automatically — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-server-crashing-automatically",
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
    tag: "Node.js",
    title: "Fix: UnhandledPromiseRejectionWarning",
    href: "unhandled-promise-rejection-warning",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Error listen EACCES permission denied",
    href: "error-listen-eacces-permission-denied",
    time: "4 min read",
  },
];

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
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
            <span className="text-gray-500">{"Node.js Server Crashing"}</span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Express", "Error Fix"].map((t) => (
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
              {"Node.js Server Crashing Automatically"}
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
                {"7 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ First Step — Find the Crash Cause"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Add these two lines at the very top of your entry file to log exactly what is crashing:"
              }
            </p>
            <CodeBlock title="server.js — add as line 1 and 2">{`process.on('uncaughtException', (err) => console.error('CRASH:', err))
process.on('unhandledRejection', (reason) => console.error('REJECTION:', reason))`}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "Restart your server — the crash message will now appear in your logs. Fix the underlying error, then implement proper error handling from the fixes below."
              }
            </p>
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

          <SectionHeading id="diagnose">
            {"Find the Crash Cause First"}
          </SectionHeading>

          <Prose>
            {
              "A Node.js server crashes for a reason. Every crash. The process exits because it encountered an error it did not know how to handle — and without proper error handlers, that reason disappears silently. The first step is always making the crash visible."
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Crash type"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"What you see"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Unhandled promise rejection",
                    "UnhandledPromiseRejectionWarning",
                    "#fix-1",
                  ],
                  [
                    "Uncaught exception",
                    "Error message then process exits",
                    "#fix-2",
                  ],
                  [
                    "Express route error",
                    "Server crashes on specific requests",
                    "#fix-3",
                  ],
                  [
                    "Async route without try/catch",
                    "Crash when route throws",
                    "#fix-4",
                  ],
                  [
                    "Memory overflow",
                    "FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed",
                    "#fix-6",
                  ],
                  [
                    "Database connection drop",
                    "MongoNetworkError or similar then crash",
                    "#fix-7",
                  ],
                ].map(([type, symptom, href]) => (
                  <tr
                    key={type}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm">
                      {type}
                    </td>
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {symptom}
                    </td>
                    <td className="px-5 py-3">
                      <a
                        href={href}
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
            title="Handle Unhandled Promise Rejections"
            time="3 min"
            tag="Most common crash cause in modern Node.js"
          >
            <Prose>
              {
                "In Node.js 15+, unhandled promise rejections crash the process immediately. Before that they were just warnings. This is the most common reason modern Node.js apps crash after running fine for a while."
              }
            </Prose>

            <ErrorBlock>{`UnhandledPromiseRejectionWarning: MongoNetworkError: connect ECONNREFUSED
(Use \`node --trace-warnings ...\` to show where the warning was created)
node:internal/process/promises:279
    triggerUncaughtException(err, true /* fromPromise */);
[1] + 1234 killed node server.js`}</ErrorBlock>

            <SubHeading>{"Add a global unhandledRejection handler"}</SubHeading>
            <CodeBlock title="server.js — top of file">{`process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise)
  console.error('Reason:', reason)
  // Log to error tracking service (Sentry etc.) here
  // Do NOT crash the process — log and continue
})`}</CodeBlock>

            <SubHeading>{"But also fix the underlying async code"}</SubHeading>
            <CodeBlock title="routes/data.js">{`// WRONG — unhandled rejection if fetchData() rejects
app.get('/data', async (req, res) => {
  const data = await fetchData()  // if this throws → crash!
  res.json(data)
})

// CORRECT — catch the error
app.get('/data', async (req, res) => {
  try {
    const data = await fetchData()
    res.json(data)
  } catch (err) {
    console.error('Route error:', err)
    res.status(500).json({ error: 'Failed to fetch data' })
  }
})`}</CodeBlock>

            <TipBox>
              {
                "The global handler is a safety net, not a substitute for try/catch in async functions. Always add try/catch to every async route handler."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Catch Uncaught Exceptions"
            time="2 min"
            tag="Synchronous errors outside try/catch"
          >
            <Prose>
              {
                "Uncaught exceptions are synchronous errors that were not caught by any try/catch block. They crash the process immediately."
              }
            </Prose>

            <CodeBlock title="server.js — top of file">{`process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err)
  console.error(err.stack)
  // Optionally: send alert, log to service, graceful shutdown
  // process.exit(1)  // uncomment if you want to force restart via PM2
})`}</CodeBlock>

            <SubHeading>{"Common sources of uncaught exceptions"}</SubHeading>
            <CheckList
              items={[
                "JSON.parse() on invalid data — wrap in try/catch",
                "fs.readFileSync() on a file that does not exist",
                "Accessing a property of undefined or null",
                "Throwing inside a synchronous event handler",
              ]}
            />

            <WarnBox>
              {
                "Do not use uncaughtException as a general error suppressor. It should log the error and ideally restart the process via PM2. A process that caught an uncaught exception is in an unknown state and should not be trusted to continue."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="3"
            title="Add Express Error Middleware"
            time="2 min"
            tag="Express route errors crashing the server"
          >
            <Prose>
              {
                "Without error middleware, an error thrown in an Express route propagates to Node.js as an uncaught exception and crashes the whole server. Error middleware catches these before they escape."
              }
            </Prose>

            <CodeBlock title="server.js — add LAST, after all routes">{`// ✅ Add this AFTER all your route definitions
app.use((err, req, res, next) => {
  console.error('Express error:', err.message)
  console.error(err.stack)

  // Send clean error response — no crash
  res.status(err.status || 500).json({
    error: process.env.NODE_ENV === 'production'
      ? 'Internal server error'
      : err.message
  })
})

// Catch 404 — add before error middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})`}</CodeBlock>

            <TipBox>
              {
                "Express error middleware must have FOUR parameters: (err, req, res, next). If you write only three, Express will not recognize it as error middleware."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Async Route Handlers"
            time="3 min"
            tag="Every async route needs try/catch"
          >
            <Prose>
              {
                "Every async Express route handler needs a try/catch. Without it, any rejected promise inside the handler becomes an unhandled rejection and crashes the server."
              }
            </Prose>

            <SubHeading>{"Option A — try/catch in every handler"}</SubHeading>
            <CodeBlock title="routes/users.js">{`app.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    next(err)  // passes to Express error middleware
  }
})

app.post('/users', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    res.status(201).json(user)
  } catch (err) {
    next(err)
  }
})`}</CodeBlock>

            <SubHeading>
              {"Option B — async wrapper utility (cleaner)"}
            </SubHeading>
            <CodeBlock title="utils/asyncHandler.js">{`// Utility that wraps async handlers automatically
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

module.exports = asyncHandler`}</CodeBlock>

            <CodeBlock title="routes/users.js">{`const asyncHandler = require('../utils/asyncHandler')

// No try/catch needed — asyncHandler catches rejections
app.get('/users', asyncHandler(async (req, res) => {
  const users = await User.find()
  res.json(users)
}))

app.post('/users', asyncHandler(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use PM2 for Auto-Restart in Production"
            time="5 min"
            tag="Production — keep server alive after crashes"
          >
            <Prose>
              {
                "PM2 is a production process manager for Node.js. Even after fixing crash causes, production apps will sometimes encounter unexpected errors. PM2 catches crashes, logs them, and automatically restarts the app."
              }
            </Prose>

            <CodeBlock title="terminal">
              {
                "# Install PM2 globally\nnpm install -g pm2\n\n# Start your app\npm2 start server.js --name my-app\n\n# Auto-restart on crash with delay\npm2 start server.js --name my-app --restart-delay=3000\n\n# View running apps\npm2 list\n\n# View logs including crash logs\npm2 logs my-app\npm2 logs my-app --lines 200\n\n# Monitor in real-time\npm2 monit\n\n# Restart / stop\npm2 restart my-app\npm2 stop my-app\n\n# Start on system boot\npm2 startup\npm2 save"
              }
            </CodeBlock>

            <SubHeading>{"PM2 ecosystem file (recommended)"}</SubHeading>
            <CodeBlock title="ecosystem.config.js">{`module.exports = {
  apps: [{
    name: 'my-app',
    script: 'server.js',
    instances: 'max',        // use all CPU cores
    exec_mode: 'cluster',
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: 'logs/error.log',
    out_file: 'logs/output.log',
    log_file: 'logs/combined.log',
  }]
}

// Start with: pm2 start ecosystem.config.js`}</CodeBlock>

            <TipBox>
              {
                "max_memory_restart: '500M' tells PM2 to automatically restart the app if it uses more than 500MB of memory — preventing memory leak crashes from taking down the server permanently."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Fix Memory-Related Crashes"
            time="5 min"
            tag="FATAL ERROR: Allocation failed — JavaScript heap"
          >
            <ErrorBlock>{`FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: 0xb7c9e0 node::Abort() [node]
 2: 0xa93510 node::FatalError(char const*, char const*) [node]
Aborted (core dumped)`}</ErrorBlock>

            <SubHeading>{"Increase heap size"}</SubHeading>
            <CodeBlock title="terminal / package.json">{`# Run with increased memory
node --max-old-space-size=2048 server.js   # 2GB

# In package.json scripts
{
  "scripts": {
    "start": "node --max-old-space-size=2048 server.js"
  }
}

# With PM2
pm2 start server.js --node-args="--max-old-space-size=2048"`}</CodeBlock>

            <SubHeading>{"Find memory leaks"}</SubHeading>
            <CodeBlock title="server.js — monitor memory">{`// Log memory usage every 30 seconds
setInterval(() => {
  const mem = process.memoryUsage()
  console.log({
    heapUsed: Math.round(mem.heapUsed / 1024 / 1024) + ' MB',
    heapTotal: Math.round(mem.heapTotal / 1024 / 1024) + ' MB',
    rss: Math.round(mem.rss / 1024 / 1024) + ' MB',
  })
}, 30000)`}</CodeBlock>

            <CheckList
              items={[
                "Close database connections when no longer needed",
                "Clear intervals and timeouts when they finish",
                "Avoid storing large arrays in memory — use streams for large files",
                "Remove event listeners when components unmount or are destroyed",
              ]}
            />
          </FixCard>

          <FixCard
            number="7"
            title="Fix Database Connection Crashes"
            time="3 min"
            tag="Server crashes when DB disconnects"
          >
            <Prose>
              {
                "If your database goes down or the connection drops, unhandled errors from pending queries will crash the server. Implement reconnection logic and error handling."
              }
            </Prose>

            <SubHeading>{"Mongoose — handle connection drops"}</SubHeading>
            <CodeBlock title="server.js">{`mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err)
  // Don't crash — log and attempt reconnect
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected — attempting reconnect...')
  setTimeout(() => {
    mongoose.connect(process.env.MONGODB_URI)
  }, 5000)
})`}</CodeBlock>

            <SubHeading>{"Add connection timeout and retry"}</SubHeading>
            <CodeBlock title="server.js">{`const connectWithRetry = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    })
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection failed:', err.message)
    console.log('Retrying in 5 seconds...')
    setTimeout(connectWithRetry, 5000)
  }
}

connectWithRetry()`}</CodeBlock>
          </FixCard>

          <SectionHeading id="prevention">
            {"Prevention — The Definitive Checklist"}
          </SectionHeading>

          <Prose>
            {
              "A production Node.js app should never crash permanently. Here is the complete set of defensive patterns that protect against every crash type:"
            }
          </Prose>

          <CheckList
            items={[
              "Add process.on('uncaughtException') and process.on('unhandledRejection') handlers",
              "Wrap every async route handler in try/catch or use an asyncHandler utility",
              "Add Express error middleware as the last middleware (4 parameters)",
              "Use PM2 in production with max_memory_restart configured",
              "Implement database reconnection logic — never crash on DB disconnect",
              "Set NODE_ENV=production to disable stack traces in error responses",
              "Use a logging library (winston, pino) with file output for persistent crash logs",
              "Set up error tracking (Sentry, Datadog) to get alerts when crashes occur in production",
              "Add health check endpoints so load balancers can detect unhealthy instances",
            ]}
          />

          <div className="mt-8 rounded-2xl bg-slate-900 px-6 py-5">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
              {"Complete crash-proof server template"}
            </p>
            <pre className="overflow-x-auto text-sm leading-relaxed">
              <code className="text-green-400 font-mono whitespace-pre">{`// server.js — crash-proof boilerplate
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err)
  process.exit(1)  // let PM2 restart
})

process.on('unhandledRejection', (reason) => {
  console.error('UNHANDLED REJECTION:', reason)
})

require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())

// Your routes here...

// Error middleware — LAST
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Internal server error' })
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('Server running')
})

// Graceful shutdown
process.on('SIGTERM', () => server.close(() => process.exit(0)))`}</code>
            </pre>
          </div>

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
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds stable, scalable Node.js backends for startups and enterprises. Dealing with production crashes? We can fix your error handling architecture."
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
