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
  title:
    "Node.js Memory Leak, Heap Out of Memory & Event Loop Blocked — Fixed [2026]",
  description:
    "Fix Node.js memory leaks, heap out of memory errors, and event loop blocked issues. Find memory leaks with Chrome DevTools, increase heap size, fix CPU-blocking code, and use worker threads.",
  keywords:
    "nodejs memory leak fix, nodejs heap out of memory, node js event loop blocked, fatal error allocation failed javascript heap 2026, nodejs performance fix",
  alternates: {
    canonical: "https://softplix.com/category/node-js/error/nodejs-memory-leak",
  },
  openGraph: {
    title:
      "Node.js Memory Leak, Heap Out of Memory & Event Loop Blocked — Fixed [2026]",
    description:
      "Fix Node.js memory leaks, heap OOM, and event loop blocked — profiling and prevention.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-memory-leak",
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
function EB({ children }) {
  return (
    <div className="my-6 rounded-2xl overflow-hidden border border-red-900 shadow-lg">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-red-950 border-b border-red-900">
        <FaTriangleExclamation className="text-red-400 text-xs flex-shrink-0" />
        <span className="text-xs font-mono text-red-300">{"Fatal Error"}</span>
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
  { label: "Understand what is happening", href: "#what" },
  {
    label: "Part 1: Memory Leak — Fix 1 — Monitor memory usage",
    href: "#fix-1",
  },
  {
    label: "Part 1: Memory Leak — Fix 2 — Find leaks with Chrome DevTools",
    href: "#fix-2",
  },
  {
    label: "Part 1: Memory Leak — Fix 3 — Common leak patterns and fixes",
    href: "#fix-3",
  },
  {
    label: "Part 2: Heap Out of Memory — Fix 4 — Increase heap size",
    href: "#fix-4",
  },
  {
    label: "Part 2: Heap Out of Memory — Fix 5 — Use streams for large files",
    href: "#fix-5",
  },
  {
    label: "Part 3: Event Loop Blocked — Fix 6 — Find blocking code",
    href: "#fix-6",
  },
  {
    label:
      "Part 3: Event Loop Blocked — Fix 7 — Move CPU work to Worker Threads",
    href: "#fix-7",
  },
  {
    label: "Part 3: Event Loop Blocked — Fix 8 — Use setImmediate for chunking",
    href: "#fix-8",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I find a memory leak in Node.js?",
    a: "Start your server with: node --inspect server.js. Open Chrome at chrome://inspect. Take heap snapshots over time in the Memory tab. Look for objects that keep growing. Alternatively, log process.memoryUsage().heapUsed every 30 seconds — if it keeps climbing without coming down, you have a leak.",
  },
  {
    q: "How do I fix Node.js heap out of memory?",
    a: "Short-term: increase heap size with node --max-old-space-size=2048 server.js. Long-term: find and fix the memory leak. Use streams instead of loading entire files into memory. Process large datasets in chunks.",
  },
  {
    q: "What causes Node.js event loop to be blocked?",
    a: "CPU-intensive synchronous operations: large JSON.parse/stringify, image processing, crypto operations, heavy computations, or synchronous file reads of large files. These block the event loop and prevent the server from handling other requests.",
  },
  {
    q: "How do I know if the event loop is blocked?",
    a: "Use the event loop lag metric. Install clinicjs: npm install -g clinic. Run: clinic doctor -- node server.js. It shows event loop delays visually. Or measure manually with: const start = Date.now(); setImmediate(() => console.log('Loop lag:', Date.now() - start, 'ms'))",
  },
  {
    q: "Common Node.js memory leak causes?",
    a: "1) Global variables accumulating data, 2) Event listeners not removed, 3) Closures holding references to large objects, 4) Caches with no eviction policy, 5) Growing arrays/maps never cleared, 6) Database connection pools not closed.",
  },
  {
    q: "What are Worker Threads in Node.js?",
    a: "Worker Threads (built into Node.js 10.5+) let you run JavaScript in separate threads. Use them for CPU-intensive work like image processing, encryption, or data transformation that would otherwise block the event loop. Import with: const { Worker, isMainThread, parentPort } = require('worker_threads')",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Node.js Memory Leak, Heap Out of Memory & Event Loop Blocked — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-memory-leak",
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
    title: "Fix: Node.js server crashing automatically",
    href: "nodejs-server-crashing-automatically",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js port alreday in use",
    href: "nodejs-port-already-in-use",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
    time: "7 min read",
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
            <span className="text-gray-500">{"Memory Leak / Event Loop"}</span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Performance", "Error Fix"].map((t) => (
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
              {"Node.js Memory Leak, Heap Out of Memory"}
              <span className="block text-indigo-600">
                {"& Event Loop Blocked — Fixed [2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {
                "Covers: FATAL ERROR Allocation failed · JavaScript heap out of memory · Event loop lag · Worker Threads"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"10 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Immediate Fixes"}
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-3">
              {[
                {
                  label: "Heap OOM",
                  fix: "node --max-old-space-size=2048 server.js",
                },
                {
                  label: "Monitor memory",
                  fix: "node --inspect server.js → chrome://inspect",
                },
                {
                  label: "Event loop lag",
                  fix: "npx clinic doctor -- node server.js",
                },
              ].map(({ label, fix }) => (
                <div
                  key={label}
                  className="bg-white rounded-xl border border-green-100 px-4 py-3"
                >
                  <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="font-mono text-xs text-slate-700 break-all">
                    {fix}
                  </p>
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

          <SH id="what">{"Understand What Is Happening"}</SH>
          <P>
            {
              "These three problems are related but distinct. Each has a different cause and a different fix:"
            }
          </P>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Problem"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"What happens"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Root cause"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Memory leak",
                    "Heap grows over hours/days → crash",
                    "Objects never garbage collected",
                  ],
                  [
                    "Heap out of memory",
                    "Immediate crash: FATAL ERROR",
                    "Processing too-large data or memory leak reached limit",
                  ],
                  [
                    "Event loop blocked",
                    "Server stops responding for seconds",
                    "Synchronous CPU-intensive code running on main thread",
                  ],
                ].map(([p, w, c]) => (
                  <tr key={p} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-semibold text-gray-700 text-sm">
                      {p}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{w}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ═══ PART 1: MEMORY LEAK ═══ */}
          <div className="my-10 rounded-2xl bg-slate-900 px-6 py-4">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              {"Part 1 — Node.js Memory Leak"}
            </p>
          </div>

          <FixCard
            number="1"
            title="Monitor Memory Usage"
            time="2 min"
            tag="See if memory is actually growing"
          >
            <CodeBlock title="server.js — log memory every 30s">{`// Add to your server — watch for steady upward trend
setInterval(() => {
  const mem = process.memoryUsage()
  console.log({
    heapUsed:  Math.round(mem.heapUsed  / 1024 / 1024) + ' MB',
    heapTotal: Math.round(mem.heapTotal / 1024 / 1024) + ' MB',
    rss:       Math.round(mem.rss       / 1024 / 1024) + ' MB',
    external:  Math.round(mem.external  / 1024 / 1024) + ' MB',
  })
}, 30000)

// If heapUsed grows from 100MB to 500MB over an hour
// without coming back down → memory leak`}</CodeBlock>
            <TipBox>
              {
                "A healthy server's heap usage fluctuates — it grows during requests and comes back down after garbage collection. A memory leak shows a one-way upward trend over time."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Find Leaks with Chrome DevTools"
            time="10 min"
            tag="Heap snapshots — identify leaking objects"
          >
            <CodeBlock title="Step 1 — Start with inspector">{`node --inspect server.js
# Open Chrome and go to: chrome://inspect`}</CodeBlock>
            <CheckList
              items={[
                "Open Chrome → chrome://inspect → click 'inspect' under your Node process",
                "Go to Memory tab → click 'Take snapshot'",
                "Make several requests to your app",
                "Take a second snapshot",
                "Select 'Comparison' view to see what grew",
                "Look for objects with large Retained Size that keep growing",
              ]}
            />
            <H3>{"Or use the --heap-prof flag"}</H3>
            <CodeBlock title="terminal">{`# Generate heap profile
node --heap-prof server.js
# Run some requests, then Ctrl+C
# A .heapprofile file is created
# Load it in Chrome DevTools → Memory → Load Profile`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Common Memory Leak Patterns and Fixes"
            time="5 min"
            tag="The actual code fixes"
          >
            <H3>{"1. Growing global arrays / maps"}</H3>
            <CodeBlock title="server.js">{`// ❌ WRONG — cache grows forever
const cache = {}
app.get('/data/:id', async (req, res) => {
  cache[req.params.id] = await fetchData(req.params.id)  // never evicted!
  res.json(cache[req.params.id])
})

// ✅ CORRECT — use LRU cache with size limit
const LRU = require('lru-cache')
const cache = new LRU({ max: 500 })  // keeps only 500 most recent items`}</CodeBlock>

            <H3>{"2. Event listeners not removed"}</H3>
            <CodeBlock title="server.js">{`// ❌ WRONG — new listener added on every request
app.get('/stream', (req, res) => {
  emitter.on('data', (data) => {
    res.write(data)  // new listener each request — never removed
  })
})

// ✅ CORRECT — remove listener when connection closes
app.get('/stream', (req, res) => {
  const handler = (data) => res.write(data)
  emitter.on('data', handler)
  req.on('close', () => emitter.off('data', handler))  // cleanup!
})`}</CodeBlock>

            <H3>{"3. Timers not cleared"}</H3>
            <CodeBlock title="server.js">{`// ❌ WRONG — interval never cleared
function startPolling() {
  setInterval(() => fetchUpdates(), 1000)  // grows if called multiple times
}

// ✅ CORRECT — store reference and clear when done
let pollInterval = null
function startPolling() {
  if (pollInterval) clearInterval(pollInterval)
  pollInterval = setInterval(() => fetchUpdates(), 1000)
}
function stopPolling() {
  clearInterval(pollInterval)
  pollInterval = null
}`}</CodeBlock>

            <H3>{"4. Closures holding large objects"}</H3>
            <CodeBlock title="server.js">{`// ❌ WRONG — closure keeps entire file in memory
function processFile(content) {
  const largeBuffer = content  // held in closure
  return function handler(req, res) {
    res.send(largeBuffer)      // largeBuffer never GC'd
  }
}

// ✅ CORRECT — only keep what you need
function processFile(content) {
  const result = extract(content)  // process and discard
  return function handler(req, res) {
    res.send(result)               // only keep small result
  }
}`}</CodeBlock>
          </FixCard>

          {/* ═══ PART 2: HEAP OOM ═══ */}
          <div className="my-10 rounded-2xl bg-slate-900 px-6 py-4">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              {"Part 2 — Heap Out of Memory"}
            </p>
          </div>

          <EB>{`FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
 1: 0xb7c9e0 node::Abort() [node]
 2: 0xa93510 node::FatalError(char const*, char const*) [node]
Aborted (core dumped)`}</EB>

          <FixCard
            number="4"
            title="Increase Heap Size"
            time="1 min"
            tag="Immediate fix while you find the root cause"
          >
            <CodeBlock title="terminal / package.json">{`# Run with 2GB heap (default is ~1.5GB)
node --max-old-space-size=2048 server.js

# 4GB for very large workloads
node --max-old-space-size=4096 server.js

# In package.json scripts
{
  "scripts": {
    "start": "node --max-old-space-size=2048 server.js"
  }
}

# With PM2
pm2 start server.js --node-args="--max-old-space-size=2048"

# Check current heap limit
node -e "console.log(require('v8').getHeapStatistics().heap_size_limit / 1024 / 1024, 'MB')"`}</CodeBlock>
            <WarnBox>
              {
                "Increasing heap size is a temporary fix. The real solution is finding why the heap grows — use Fix 2 and Fix 3. Unlimited heap growth will always eventually crash the server."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use Streams for Large Files"
            time="5 min"
            tag="Process large data without loading into RAM"
          >
            <P>
              {
                "The most common cause of instant heap OOM is loading an entire large file (CSV, JSON, video) into memory. Use streams to process data piece by piece."
              }
            </P>
            <CodeBlock title="server.js">{`const fs   = require('fs')
const path = require('path')

// ❌ WRONG — loads entire 1GB file into memory at once
app.get('/download', (req, res) => {
  const content = fs.readFileSync('/data/huge-file.csv')  // 1GB in RAM!
  res.send(content)
})

// ✅ CORRECT — stream the file, only a chunk in memory at once
app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'huge-file.csv')
  const stream = fs.createReadStream(filePath)
  stream.pipe(res)  // streams directly to response — minimal memory
})

// ✅ Stream + transform (e.g. CSV processing)
const { Transform } = require('stream')

const processLine = new Transform({
  transform(chunk, encoding, callback) {
    const processed = chunk.toString().toUpperCase()
    callback(null, processed)
  }
})

fs.createReadStream('huge.csv')
  .pipe(processLine)
  .pipe(res)`}</CodeBlock>
            <TipBox>
              {
                "Streaming a 1GB file uses only ~64KB of RAM at any time. Loading it with readFileSync uses 1GB immediately. Always stream large files."
              }
            </TipBox>
          </FixCard>

          {/* ═══ PART 3: EVENT LOOP ═══ */}
          <div className="my-10 rounded-2xl bg-slate-900 px-6 py-4">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">
              {"Part 3 — Event Loop Blocked"}
            </p>
          </div>

          <FixCard
            number="6"
            title="Find Blocking Code"
            time="5 min"
            tag="Identify what is blocking the event loop"
          >
            <P>
              {
                "When the event loop is blocked, all incoming requests queue up and wait. The server appears frozen during heavy operations. Here is how to find the culprit:"
              }
            </P>
            <CodeBlock title="terminal">{`# Install clinic.js profiler
npm install -g clinic

# Profile your app
clinic doctor -- node server.js

# Make requests to your app while it runs
# Then Ctrl+C — clinic generates an HTML report
# Look for event loop delay spikes`}</CodeBlock>

            <H3>{"Measure event loop lag manually"}</H3>
            <CodeBlock title="server.js">{`// Add this to your server — watch for values above 10ms
setInterval(() => {
  const start = process.hrtime.bigint()
  setImmediate(() => {
    const lag = Number(process.hrtime.bigint() - start) / 1_000_000
    if (lag > 100) {
      console.warn(\`Event loop blocked for \${lag.toFixed(0)}ms!\`)
    }
  })
}, 1000)`}</CodeBlock>

            <H3>{"Common blocking operations"}</H3>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="text-left px-4 py-3 font-bold text-red-600">
                      {"Blocking ❌"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-green-700">
                      {"Non-blocking ✅"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["JSON.parse(huge string)", "Stream + JSONStream package"],
                    [
                      "fs.readFileSync(large file)",
                      "fs.promises.readFile() or stream",
                    ],
                    ["bcrypt.hashSync()", "bcrypt.hash() async"],
                    ["crypto sync operations", "Use async crypto APIs"],
                    [
                      "Heavy computation loop",
                      "Worker Thread or setImmediate chunks",
                    ],
                  ].map(([b, g]) => (
                    <tr
                      key={b}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-red-600">
                        {b}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-green-700">
                        {g}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FixCard>

          <FixCard
            number="7"
            title="Move CPU Work to Worker Threads"
            time="5 min"
            tag="True parallel processing for heavy computation"
          >
            <P>
              {
                "Worker Threads run JavaScript in separate OS threads — CPU-intensive work runs in parallel without blocking the main event loop."
              }
            </P>
            <CodeBlock title="worker.js">{`const { parentPort, workerData } = require('worker_threads')

// Heavy computation here — runs in its own thread
function heavyComputation(data) {
  let result = 0
  for (let i = 0; i < data.count; i++) {
    result += Math.sqrt(i) * Math.PI
  }
  return result
}

const result = heavyComputation(workerData)
parentPort.postMessage({ result })`}</CodeBlock>

            <CodeBlock title="server.js">{`const { Worker } = require('worker_threads')
const path = require('path')

function runWorker(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'worker.js'), {
      workerData: data
    })
    worker.on('message', resolve)
    worker.on('error', reject)
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(\`Worker stopped with exit code \${code}\`))
    })
  })
}

// Express route — computation runs in worker, event loop stays free
app.post('/process', async (req, res) => {
  try {
    const result = await runWorker({ count: 10_000_000 })
    res.json(result)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})`}</CodeBlock>
            <TipBox>
              {
                "Use a worker pool (via 'piscina' package) in production so you reuse workers instead of creating a new thread per request: npm install piscina"
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="8"
            title="Use setImmediate for Long Loops"
            time="3 min"
            tag="Yield control back to event loop periodically"
          >
            <P>
              {
                "If you have a long computation that cannot be moved to a worker thread, break it into chunks using "
              }
              <IC>{"setImmediate"}</IC>
              {" to yield control between chunks."}
            </P>
            <CodeBlock title="server.js">{`// ❌ WRONG — blocks event loop for entire duration
function processItems(items) {
  for (const item of items) {
    heavyProcess(item)  // 10,000 items × 1ms = 10 seconds blocked!
  }
}

// ✅ CORRECT — process in chunks, yielding between each
async function processItemsAsync(items, chunkSize = 100) {
  for (let i = 0; i < items.length; i += chunkSize) {
    const chunk = items.slice(i, i + chunkSize)
    chunk.forEach(item => heavyProcess(item))

    // Yield control to event loop — let other requests run
    await new Promise(resolve => setImmediate(resolve))
  }
}

app.post('/process-all', async (req, res) => {
  await processItemsAsync(req.body.items)
  res.json({ done: true })
})`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention Checklist"}</SH>
          <CheckList
            items={[
              "Monitor memory with process.memoryUsage() logged every 30 seconds",
              "Set max_memory_restart in PM2 to auto-restart before OOM crash",
              "Always stream large files — never readFileSync for files over 1MB",
              "Use LRU caches with size limits — never unbounded global objects",
              "Remove event listeners when connections close",
              "Clear timers and intervals when no longer needed",
              "Use Worker Threads for CPU-intensive operations",
              "Profile regularly with clinic.js in staging",
              "Set --max-old-space-size in production as a safety net",
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
              {"We Optimise Production Node.js Applications"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds and optimises full-stack Node.js applications. Dealing with memory leaks or performance issues in production? We can profile, diagnose, and fix."
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
