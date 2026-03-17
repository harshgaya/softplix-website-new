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
    "Error: Cannot set headers after they are sent to the client — Fixed [2026]",
  description:
    "Fix Error Cannot set headers after they are sent to the client in Node.js and Express. Add return statements before every response, fix middleware calling next() after res.send(), and prevent double responses.",
  keywords:
    "cannot set headers after they are sent, express headers already sent, res.send called twice fix, cannot set headers error nodejs 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-cannot-set-headers-after-they-are-sent",
  },
  openGraph: {
    title:
      "Error: Cannot set headers after they are sent to the client — Fixed [2026]",
    description:
      "Fix Cannot set headers after they are sent — add return statements and fix double responses.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-cannot-set-headers-after-they-are-sent",
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
  { label: "What causes this error?", href: "#what-it-means" },
  { label: "Fix 1 — Add return before every response", href: "#fix-1" },
  { label: "Fix 2 — Fix if/else chains in route handlers", href: "#fix-2" },
  { label: "Fix 3 — Fix async routes with try/catch", href: "#fix-3" },
  {
    label: "Fix 4 — Fix middleware calling next() after response",
    href: "#fix-4",
  },
  { label: "Fix 5 — Use res.headersSent guard", href: "#fix-5" },
  { label: "Fix 6 — Fix callbacks and event handlers", href: "#fix-6" },
  { label: "Common patterns — right vs wrong", href: "#patterns" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes Cannot set headers after they are sent?",
    a: "Your code sent two responses to the same request. HTTP only allows one response per request. This happens when you forget to add return before res.json() or res.send(), allowing code to continue executing and send a second response.",
  },
  {
    q: "How do I fix headers already sent in Express?",
    a: "Add return before every response: return res.status(400).json({ error: 'message' }). This stops code execution immediately after the first response is sent.",
  },
  {
    q: "How do I prevent double response in Express middleware?",
    a: "Never call next() after sending a response. If you send a response in middleware, return immediately without calling next: return res.status(401).json({ error: 'Unauthorized' })",
  },
  {
    q: "What is res.headersSent in Express?",
    a: "res.headersSent is a boolean that is true if a response has already been sent for the current request. You can use it as a safety guard: if (!res.headersSent) { res.json(data) }",
  },
  {
    q: "Cannot set headers error in async route — how to fix?",
    a: "Wrap the route in try/catch and add return before every res.json() call: try { return res.json(data) } catch(err) { return res.status(500).json({ error: err.message }) }",
  },
  {
    q: "Error appears randomly — not on every request?",
    a: "This usually means the double response only happens under certain conditions — like when an async operation completes after a timeout response was already sent. Add return before every response in the route and check for race conditions in async code.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Error: Cannot set headers after they are sent to the client — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-cannot-set-headers-after-they-are-sent",
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
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: UnhandledPromiseRejectionWarning",
    href: "unhandled-promise-rejection-warning",
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
            <span className="text-gray-500">{"Cannot set headers error"}</span>
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
              {"Error: Cannot set headers after they are sent"}
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
                {"5 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Express · Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ The Fix — One Rule"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Add return before every response. This stops execution immediately and prevents a second response from being sent:"
              }
            </p>
            <CodeBlock title="Every Express route handler">{`app.get('/user/:id', async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'ID required' })  // ← return!
  }
  const user = await User.findById(req.params.id)
  if (!user) {
    return res.status(404).json({ error: 'Not found' })    // ← return!
  }
  return res.json(user)                                     // ← return!
})`}</CodeBlock>
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

          <SectionHeading id="what-it-means">
            {"What Causes This Error?"}
          </SectionHeading>

          <ErrorBlock>{`Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (node:_http_outgoing:576:11)
    at ServerResponse.header (/node_modules/express/lib/response.js:794:10)
    at ServerResponse.json (/node_modules/express/lib/response.js:267:10)
    at /Users/you/projects/api/routes/users.js:25:9`}</ErrorBlock>

          <Prose>
            {
              "HTTP only allows one response per request. This error means your code called "
            }
            <IC>{"res.json()"}</IC>
            {", "}
            <IC>{"res.send()"}</IC>
            {", or "}
            <IC>{"res.redirect()"}</IC>
            {
              " twice on the same request. The second call fails because the response headers are already sent and cannot be changed."
            }
          </Prose>

          <Prose>
            {"The root cause is always the same: "}
            <strong>{"missing return statements"}</strong>
            {". When you forget to add "}
            <IC>{"return"}</IC>
            {
              " before sending a response, JavaScript continues executing the function and hits another response call."
            }
          </Prose>

          <FixCard
            number="1"
            title="Add return Before Every Response"
            time="2 min"
            tag="The universal fix — applies to all cases"
          >
            <CodeBlock title="routes/users.js">{`// ❌ WRONG — multiple responses possible
app.get('/user/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'ID required' })
    // code continues! hits the line below too
  }
  const user = await User.findById(req.params.id)
  res.json(user)  // second response → ERROR
})

// ✅ CORRECT — return stops execution
app.get('/user/:id', async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: 'ID required' })
    // execution stops here — no more code runs
  }
  const user = await User.findById(req.params.id)
  return res.json(user)
})`}</CodeBlock>

            <TipBox>
              {
                "Treat return res.json() as a single unit. Never write res.json() without return in front of it — unless it is the last line of the function and there is nothing else that could run after it."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix if/else Chains in Route Handlers"
            time="2 min"
            tag="Multiple conditions — each needs return"
          >
            <CodeBlock title="routes/auth.js">{`// ❌ WRONG — both conditions can run
app.post('/login', async (req, res) => {
  if (!req.body.email) {
    res.status(400).json({ error: 'Email required' })
    // falls through to next if!
  }
  if (!req.body.password) {
    res.status(400).json({ error: 'Password required' })
    // double response!
  }
  // even more code below...
  const user = await User.findOne({ email: req.body.email })
  res.json(user)  // third response!
})

// ✅ CORRECT — each condition returns immediately
app.post('/login', async (req, res) => {
  if (!req.body.email) {
    return res.status(400).json({ error: 'Email required' })
  }
  if (!req.body.password) {
    return res.status(400).json({ error: 'Password required' })
  }
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }
    return res.json({ token: 'abc123' })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Async Routes with try/catch"
            time="2 min"
            tag="Async routes sending response in both try and catch"
          >
            <CodeBlock title="routes/data.js">{`// ❌ WRONG — response in both try and the code after
app.get('/data', async (req, res) => {
  try {
    const data = await fetchData()
    res.json(data)   // first response
  } catch (err) {
    res.status(500).json({ error: err.message })  // second response!
  }
  res.json({ done: true })  // third response!
})

// ✅ CORRECT — return in try, return in catch, nothing after
app.get('/data', async (req, res) => {
  try {
    const data = await fetchData()
    return res.json(data)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
  // nothing here — the try/catch covers all cases
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Middleware Calling next() After Response"
            time="2 min"
            tag="Auth middleware, logging middleware"
          >
            <Prose>
              {"Middleware should either call "}
              <IC>{"next()"}</IC>
              {
                " OR send a response — never both. If you send a response in middleware, do not call "
              }
              <IC>{"next()"}</IC>
              {"."}
            </Prose>

            <CodeBlock title="middleware/auth.js">{`// ❌ WRONG — sends response AND calls next()
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    res.status(401).json({ error: 'Unauthorized' })
    next()  // ← wrong! calls the route handler too → double response
  }
  next()  // calls next even when unauthorized
}

// ✅ CORRECT — either respond OR call next, never both
function authMiddleware(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Unauthorized' })
    // return stops here — next() never called
  }
  next()  // only reaches here if authorized
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Use res.headersSent as a Safety Guard"
            time="1 min"
            tag="Defensive check for complex routes"
          >
            <Prose>
              {"In complex routes with multiple async callbacks, use "}
              <IC>{"res.headersSent"}</IC>
              {
                " to check if a response was already sent before sending another."
              }
            </Prose>

            <CodeBlock title="routes/complex.js">{`app.get('/complex', async (req, res) => {
  // Start a timeout fallback
  const timeout = setTimeout(() => {
    if (!res.headersSent) {
      res.status(408).json({ error: 'Request timeout' })
    }
  }, 5000)

  try {
    const data = await longRunningOperation()
    clearTimeout(timeout)  // clear timeout if operation completed

    if (!res.headersSent) {  // guard — timeout might have fired
      return res.json(data)
    }
  } catch (err) {
    clearTimeout(timeout)
    if (!res.headersSent) {
      return res.status(500).json({ error: err.message })
    }
  }
})`}</CodeBlock>

            <TipBox>
              {
                "res.headersSent should be a safety net — not your primary pattern. Fix the root cause with return statements first. Use headersSent only in routes with genuine async race conditions like timeouts."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Fix Callbacks and Event Handlers"
            time="3 min"
            tag="Legacy callback-style code"
          >
            <Prose>
              {
                "In callback-based code (not async/await), it is easy to accidentally call the response in both the error and success branches."
              }
            </Prose>

            <CodeBlock title="routes/file.js">{`const fs = require('fs')

// ❌ WRONG — response called even when err returns
app.get('/file', (req, res) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Read failed' })
      // does NOT return — falls through
    }
    res.json(JSON.parse(data))  // called even on error!
  })
})

// ✅ CORRECT — return after error response
app.get('/file', (req, res) => {
  fs.readFile('./data.json', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Read failed' })
      // returns here — success line never runs
    }
    return res.json(JSON.parse(data))
  })
})`}</CodeBlock>
          </FixCard>

          <SectionHeading id="patterns">
            {"Common Patterns — Right vs Wrong"}
          </SectionHeading>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Quick Reference — Always add return"}
              </p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-white">
                  <th className="text-left px-4 py-3 font-bold text-red-600">
                    {"❌ Wrong"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-green-700">
                    {"✅ Correct"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["res.json(data)", "return res.json(data)"],
                  ["res.send(text)", "return res.send(text)"],
                  [
                    "res.status(404).json({...})",
                    "return res.status(404).json({...})",
                  ],
                  ["res.redirect('/login')", "return res.redirect('/login')"],
                  ["res.status(401).end()", "return res.status(401).end()"],
                ].map(([wrong, right]) => (
                  <tr
                    key={wrong}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-mono text-xs text-red-600 bg-red-50">
                      {wrong}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-green-700 bg-green-50">
                      {right}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Add return before every res.json(), res.send(), res.redirect(), and res.end()",
              "Never call next() after sending a response in middleware",
              "Use if/else instead of multiple if blocks when conditions are mutually exclusive",
              "Wrap async routes in try/catch with return in both try and catch",
              "Use ESLint with the consistent-return rule to catch missing return statements",
              "Use res.headersSent as a safety check in routes with async race conditions",
            ]}
          />

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
              {"We Build Production-Grade Express APIs"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Node.js applications. Struggling with complex Express middleware or API architecture? We can help."
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
