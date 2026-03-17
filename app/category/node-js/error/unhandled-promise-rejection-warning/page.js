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
  title: "UnhandledPromiseRejectionWarning — Fixed [Complete Guide 2026]",
  description:
    "Fix UnhandledPromiseRejectionWarning in Node.js. Add try/catch to async functions, use promise catch handlers, add global rejection handlers, and stop Node.js from crashing on unhandled rejections.",
  keywords:
    "unhandledpromiserejectionwarning fix, unhandled promise rejection nodejs, promise rejection warning fix 2026, nodejs async error handling",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/unhandled-promise-rejection-warning",
  },
  openGraph: {
    title: "UnhandledPromiseRejectionWarning — Fixed [Complete Guide 2026]",
    description:
      "Fix UnhandledPromiseRejectionWarning in Node.js — try/catch, global handlers, async patterns.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/unhandled-promise-rejection-warning",
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
          {"Terminal Warning / Error"}
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
  { label: "What causes UnhandledPromiseRejectionWarning?", href: "#what" },
  { label: "Fix 1 — Add try/catch to every async function", href: "#fix-1" },
  { label: "Fix 2 — Add .catch() to promise chains", href: "#fix-2" },
  { label: "Fix 3 — Add global unhandledRejection handler", href: "#fix-3" },
  { label: "Fix 4 — Fix Express async route handlers", href: "#fix-4" },
  { label: "Fix 5 — asyncHandler utility wrapper", href: "#fix-5" },
  { label: "Fix 6 — Find which promise is rejecting", href: "#fix-6" },
  {
    label: "Node.js 15+ — unhandled rejections crash the process",
    href: "#v15",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes UnhandledPromiseRejectionWarning?",
    a: "A promise was rejected but no .catch() handler or try/catch block was there to handle it. In Node.js 15+, this crashes the process. The warning includes the rejection reason — that tells you exactly what failed.",
  },
  {
    q: "How do I fix UnhandledPromiseRejectionWarning?",
    a: "Add try/catch to every async function that might throw: try { await riskyOperation() } catch (err) { console.error(err) }. Or add .catch() to promise chains: fetchData().catch(err => console.error(err)).",
  },
  {
    q: "UnhandledPromiseRejectionWarning crashes my server in production — why?",
    a: "Node.js 15 and above changed the default behaviour from warning to crash. An unhandled rejection now terminates the process. Add try/catch to your async code and use process.on('unhandledRejection') as a safety net.",
  },
  {
    q: "How do I find which promise is rejecting?",
    a: "Node.js prints the rejection reason in the warning. Run with --trace-warnings: node --trace-warnings server.js. This shows the full stack trace including the exact line that created the unhandled promise.",
  },
  {
    q: "Is it safe to suppress UnhandledPromiseRejectionWarning?",
    a: "No. The warning means an error occurred that you are not handling. Suppressing it hides bugs. Fix the root cause by adding proper error handling to the async code that is failing.",
  },
  {
    q: "How do I handle errors in Express async routes?",
    a: "Wrap route logic in try/catch and call next(err) on error: app.get('/route', async (req, res, next) => { try { const data = await fetch(); res.json(data) } catch (err) { next(err) } }). Or use an asyncHandler wrapper utility.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "UnhandledPromiseRejectionWarning — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/unhandled-promise-rejection-warning",
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
    tag: "Express",
    title: "Fix: Cannot set headers after they are sent",
    href: "error-cannot-set-headers-after-they-are-sent",
    time: "5 min read",
  },
  {
    tag: "Express",
    title: "Fix: Express session not working",
    href: "express-session-not-working",
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
            <span className="text-gray-500">
              {"UnhandledPromiseRejectionWarning"}
            </span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "JavaScript", "Error Fix"].map((t) => (
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
              {"UnhandledPromiseRejectionWarning"}
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
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Universal Fix — Add try/catch to Every async Function"}
            </p>
            <CodeBlock title="Every async function">{`// ❌ WRONG — rejection not handled
async function loadUser(id) {
  const user = await User.findById(id)   // if this throws → UnhandledRejection
  return user
}

// ✅ CORRECT — catch and handle the rejection
async function loadUser(id) {
  try {
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.error('loadUser failed:', err.message)
    return null  // or throw, depending on context
  }
}`}</CodeBlock>
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

          <SH id="what">{"What Causes UnhandledPromiseRejectionWarning?"}</SH>
          <ErrorBlock>{`(node:12345) UnhandledPromiseRejectionWarning: MongoServerError: Authentication failed
(node:12345) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
This error originated either by throwing inside of an async function without a
catch block, or by rejecting a promise which was not handled with .catch().
(Use \`node --pending-deprecation\` to see where the warning was created)
(node:12345) [DEP0018] DeprecationWarning: Unhandled promise rejections are
deprecated. In the future, promise rejections that are not handled will
terminate the Node.js process with a non-zero exit code.`}</ErrorBlock>

          <P>
            {
              "This warning fires when a promise rejects — throws an error — and no "
            }
            <IC>{".catch()"}</IC>
            {" handler or "}
            <IC>{"try/catch"}</IC>
            {
              " block is present to handle it. The warning message always includes the rejection reason — read it carefully, it tells you exactly what failed."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Pattern"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Result"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "await riskyFn() without try/catch",
                    "Unhandled rejection if riskyFn() throws",
                  ],
                  [
                    "somePromise() without .catch()",
                    "Unhandled rejection if promise rejects",
                  ],
                  [
                    "async function that throws",
                    "Caller must catch or it propagates",
                  ],
                  [
                    "Promise.all([...]) without .catch()",
                    "Any single rejection causes unhandled rejection",
                  ],
                ].map(([p, r]) => (
                  <tr key={p} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {p}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{r}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Add try/catch to Every async Function"
            time="5 min"
            tag="The correct fix — handle errors where they occur"
          >
            <CodeBlock title="routes/users.js">{`// ❌ WRONG — no error handling
app.get('/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id)  // throws → UnhandledRejection
  res.json(user)
})

// ✅ CORRECT — every await wrapped in try/catch
app.get('/users/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ error: 'User not found' })
    res.json(user)
  } catch (err) {
    next(err)  // passes to Express error middleware
  }
})

// ✅ Multiple awaits — one try/catch covers all of them
app.post('/orders', async (req, res, next) => {
  try {
    const user    = await User.findById(req.body.userId)
    const product = await Product.findById(req.body.productId)
    const order   = await Order.create({ user, product })
    res.status(201).json(order)
  } catch (err) {
    next(err)
  }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Add .catch() to Promise Chains"
            time="2 min"
            tag="For non-async/await code or fire-and-forget tasks"
          >
            <CodeBlock title="server.js">{`// ❌ WRONG — promise chain with no .catch()
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB connected'))
// if connect() rejects → UnhandledRejection

// ✅ CORRECT — always chain .catch()
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('DB connected'))
  .catch(err => {
    console.error('DB connection failed:', err.message)
    process.exit(1)
  })

// ✅ Fire-and-forget tasks — must still handle rejection
function sendEmailAsync(to, subject) {
  mailer.sendMail({ to, subject })
    .then(() => console.log('Email sent'))
    .catch(err => console.error('Email failed:', err.message))
  // Do NOT just call: mailer.sendMail({ to, subject }) with no handler
}

// ✅ Promise.all — catch covers all
const [users, products] = await Promise.all([
  User.find(),
  Product.find(),
]).catch(err => {
  console.error('Batch query failed:', err)
  throw err
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Add Global unhandledRejection Handler"
            time="2 min"
            tag="Safety net — catch any missed rejections"
          >
            <P>
              {
                "Add this to the very top of your entry file as a last-resort safety net. It catches any rejection that slipped past your try/catch blocks."
              }
            </P>
            <CodeBlock title="server.js — line 1">{`// Safety net — add at very top of entry file
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise)
  console.error('Reason:', reason)
  // Log to your error tracker (Sentry etc.) here
  // Do NOT silently suppress — the underlying error is real
})`}</CodeBlock>
            <WarnBox>
              {
                "The global handler is a safety net, not a solution. It does not fix the underlying unhandled rejection — it just prevents the crash. Track down and fix the missing try/catch."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Express Async Route Handlers"
            time="3 min"
            tag="Express does not catch async errors automatically"
          >
            <P>
              {
                "Express 4 does not automatically catch errors thrown in async route handlers. You must either use try/catch with "
              }
              <IC>{"next(err)"}</IC>
              {" or use Express 5 (which handles async errors automatically)."}
            </P>
            <CodeBlock title="server.js">{`// Express 4 — manual try/catch required
app.get('/data', async (req, res, next) => {
  try {
    const data = await fetchData()
    res.json(data)
  } catch (err) {
    next(err)  // passes to error middleware below
  }
})

// Error middleware — MUST be last, MUST have 4 params
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message })
})

// Express 5 — async errors caught automatically (no try/catch needed)
// npm install express@5
// app.get('/data', async (req, res) => {
//   const data = await fetchData()   // throws → caught by Express 5
//   res.json(data)
// })`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="asyncHandler Utility — Clean Up Repetitive try/catch"
            time="3 min"
            tag="DRY pattern for Express routes"
          >
            <P>
              {
                "If every route handler repeats the same try/catch boilerplate, extract it into a utility wrapper."
              }
            </P>
            <CodeBlock title="utils/asyncHandler.js">{`// Wraps an async function and automatically calls next(err) on rejection
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next)

module.exports = asyncHandler`}</CodeBlock>
            <CodeBlock title="routes/users.js">{`const asyncHandler = require('../utils/asyncHandler')

// No try/catch needed — asyncHandler handles rejections
router.get('/:id', asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id)
  if (!user) return res.status(404).json({ error: 'Not found' })
  res.json(user)
}))

router.post('/', asyncHandler(async (req, res) => {
  const user = await User.create(req.body)
  res.status(201).json(user)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ deleted: true })
}))`}</CodeBlock>
            <TipBox>
              {
                "The 'express-async-errors' package patches Express globally to catch async errors: just require('express-async-errors') at the top of your app — no wrapper needed."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Find Which Promise Is Rejecting"
            time="2 min"
            tag="Use --trace-warnings to get full stack trace"
          >
            <CodeBlock title="terminal">{`# Show full stack trace for all warnings
node --trace-warnings server.js

# Output will include:
# (node:12345) UnhandledPromiseRejectionWarning: Error: ...
#     at processTicksAndRejections (node:internal/process/task_queues:95:5)
#     at async User.findById (/app/routes/users.js:12:20)  ← LINE 12!

# Also useful: enable async stack traces
node --async-stack-traces server.js

# With NODE_OPTIONS env var (no code change needed)
NODE_OPTIONS='--trace-warnings' node server.js`}</CodeBlock>
            <TipBox>
              {
                "The stack trace shows the exact file and line number where the rejected promise was created. Go to that line and add try/catch."
              }
            </TipBox>
          </FixCard>

          <SH id="v15">
            {"Node.js 15+ — Unhandled Rejections Crash the Process"}
          </SH>
          <P>
            {
              "Before Node.js 15, unhandled promise rejections printed a warning but the process continued running. From Node.js 15 onwards, they terminate the process with exit code 1."
            }
          </P>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Node version"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Unhandled rejection behaviour"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Node.js < 15",
                    "Prints DeprecationWarning — process continues",
                  ],
                  ["Node.js 15+", "Terminates process with non-zero exit code"],
                ].map(([v, b]) => (
                  <tr key={v} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-gray-700">
                      {v}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <P>
            {
              "If your app suddenly started crashing after a Node upgrade, this is why. The same unhandled rejections that were warnings before are now crashes."
            }
          </P>

          <SH id="prevention">{"How to Prevent Unhandled Rejections"}</SH>
          <CheckList
            items={[
              "Add try/catch to every async function — no exceptions",
              "Always chain .catch() on promise chains that are not awaited",
              "Add process.on('unhandledRejection') as a global safety net",
              "Use asyncHandler wrapper or express-async-errors package for Express routes",
              "Add error middleware (4 params) as last middleware in Express",
              "Run node --trace-warnings to see stack traces for remaining warnings",
              "Consider upgrading to Express 5 which catches async route errors automatically",
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
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack applications with robust error handling. Dealing with promise handling issues in production? We can help."
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
