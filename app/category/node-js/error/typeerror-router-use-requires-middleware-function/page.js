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
    "TypeError: Router.use() requires a middleware function — Fixed [2026]",
  description:
    "Fix TypeError Router.use() requires a middleware function in Express. Covers wrong exports, undefined imports, circular dependencies, and incorrect middleware signatures — all OS.",
  keywords:
    "typeerror router.use requires middleware function, express router use error, router use not a function, fix express router middleware 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/typeerror-router-use-requires-middleware-function",
  },
  openGraph: {
    title:
      "TypeError: Router.use() requires a middleware function — Fixed [2026]",
    description:
      "Fix TypeError Router.use() requires a middleware function in Express — every cause covered.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/typeerror-router-use-requires-middleware-function",
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
  { label: "Fix 1 — Wrong router export", href: "#fix-1" },
  { label: "Fix 2 — Wrong import / destructuring", href: "#fix-2" },
  { label: "Fix 3 — Middleware is not a function", href: "#fix-3" },
  { label: "Fix 4 — Circular dependency causing undefined", href: "#fix-4" },
  { label: "Fix 5 — Middleware missing next() parameter", href: "#fix-5" },
  { label: "Fix 6 — Conditionally applied middleware", href: "#fix-6" },
  { label: "Correct Express router structure", href: "#correct-structure" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does TypeError Router.use() requires a middleware function mean?",
    a: "Express expected a function (middleware or Router) but received something else — usually undefined, null, or a plain object. The most common cause is exporting a router incorrectly from a routes file.",
  },
  {
    q: "How do I properly export and import an Express router?",
    a: "In your routes file: const router = express.Router(); /* define routes */; module.exports = router. In main app: const usersRouter = require('./routes/users'); app.use('/users', usersRouter).",
  },
  {
    q: "TypeError Router.use got undefined — why?",
    a: "Your import returned undefined. Either the routes file exports nothing, exports an object instead of the router directly, or a circular dependency is causing the import to be undefined at load time.",
  },
  {
    q: "Can I use app.use() and router.use() the same way?",
    a: "Yes. Both accept middleware functions, Router instances, or path + middleware combinations. The same rules apply: the second argument must be a function or Router — not an object or undefined.",
  },
  {
    q: "How do I apply middleware to only some routes in Express?",
    a: "Pass the middleware before the handler: app.get('/protected', authMiddleware, handler). Or apply to a router: router.use(authMiddleware) before the routes that need it, then mount the router on a path.",
  },
  {
    q: "TypeError got Object instead of Function — what does this mean?",
    a: "You exported an object containing your router instead of the router itself. Fix: module.exports = router (not module.exports = { router }). Then import without destructuring: const router = require('./routes/users').",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "TypeError: Router.use() requires a middleware function — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/typeerror-router-use-requires-middleware-function",
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
    title: "Fix: TypeError Router.use() requires middleware",
    href: "typeerror-router-use-requires-middleware-function",
    time: "5 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
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
              {"Router.use() middleware error"}
            </span>
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
              {"TypeError: Router.use() requires a middleware function"}
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

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — Check Your Router Export"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "The most common cause is wrong export syntax in your routes file:"
              }
            </p>
            <CodeBlock title="routes/users.js">{`const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.json({ users: [] }))

// ✅ CORRECT — export the router directly
module.exports = router

// ❌ WRONG — exports an object, not the router
// module.exports = { router }`}</CodeBlock>
            <CodeBlock title="server.js">{`// ✅ CORRECT — import directly, no destructuring
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)`}</CodeBlock>
          </div>

          {/* TOC */}
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

          <ErrorBlock>{`TypeError: Router.use() requires a middleware function but got a Object
    at Function.use (/node_modules/express/lib/router/index.js:458:13)
    at Function.<anonymous> (/node_modules/express/lib/application.js:227:21)
    at Object.<anonymous> (/Users/you/projects/api/server.js:8:5)

# Or with undefined:
TypeError: Router.use() requires a middleware function but got a undefined`}</ErrorBlock>

          <Prose>
            {"Express's "}
            <IC>{"app.use()"}</IC>
            {" and "}
            <IC>{"router.use()"}</IC>
            {
              " expect a function — specifically a middleware function or an Express Router instance. When you pass "
            }
            <IC>{"undefined"}</IC>
            {", "}
            <IC>{"null"}</IC>
            {
              ", or a plain object instead, Express throws this error immediately at startup."
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error says"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "got a Object",
                    "Exported { router } instead of router",
                    "#fix-1",
                  ],
                  [
                    "got a undefined",
                    "Import returned undefined — wrong path or circular dep",
                    "#fix-2 / #fix-4",
                  ],
                  [
                    "got a Function (but crashes)",
                    "Middleware missing (err, req, res, next) signature",
                    "#fix-5",
                  ],
                ].map(([err, cause, href]) => (
                  <tr
                    key={err}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {err}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{cause}</td>
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
            title="Wrong Router Export — Most Common Cause"
            time="1 min"
            tag="Got a Object instead of Function"
          >
            <Prose>
              {
                "This is the most common cause. Adding curly braces around the export turns it into a plain object — not the router Express expects."
              }
            </Prose>

            <SubHeading>{"Side by side — wrong vs correct"}</SubHeading>
            <CodeBlock title="routes/users.js">{`const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.json({ users: [] }))
router.post('/', (req, res) => res.status(201).json({ created: true }))

// ❌ WRONG — exports { router: [Function] }
module.exports = { router }

// ✅ CORRECT — exports the router function directly
module.exports = router`}</CodeBlock>

            <CodeBlock title="server.js">{`// ❌ WRONG — usersRouter becomes { router: [Function] }
const { router: usersRouter } = require('./routes/users')
app.use('/users', usersRouter)   // TypeError!

// ✅ CORRECT — usersRouter is the Router function
const usersRouter = require('./routes/users')
app.use('/users', usersRouter)   // works!`}</CodeBlock>

            <TipBox>
              {
                "Rule of thumb: export routers with module.exports = router (no curly braces) and import without destructuring: const router = require('./routes/file')."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Wrong Import Path or Destructuring"
            time="1 min"
            tag="Got undefined"
          >
            <Prose>
              {
                "If the import path is wrong — a typo, wrong relative path, or missing file — "
              }
              <IC>{"require()"}</IC>
              {" returns "}
              <IC>{"undefined"}</IC>
              {" or throws Cannot find module."}
            </Prose>

            <CodeBlock title="server.js">{`// ❌ WRONG path — file does not exist at this location
const usersRouter = require('./routes/user')   // missing 's'
const postsRouter = require('../routes/posts') // wrong relative path

// ✅ CORRECT — verify file exists at this exact path
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')

// Debug: log what you actually imported
console.log(typeof usersRouter)  // should print 'function'`}</CodeBlock>

            <SubHeading>{"Verify the import is a function"}</SubHeading>
            <CodeBlock title="server.js — debug check">{`const usersRouter = require('./routes/users')

// Add this before app.use() to diagnose
console.log('usersRouter type:', typeof usersRouter)
// Expected: 'function'
// If 'object' → wrong export (see Fix 1)
// If 'undefined' → wrong path or circular dep (see Fix 4)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Passing Non-Function as Middleware"
            time="2 min"
            tag="Passing a value instead of a function"
          >
            <Prose>
              {
                "Sometimes the issue is not the router but a middleware you pass to "
              }
              <IC>{"app.use()"}</IC>
              {
                ". Anything you pass must be a function — not a string, object, or the result of calling a function that returns undefined."
              }
            </Prose>

            <CodeBlock title="server.js">{`// ❌ WRONG — passing string
app.use('/users', 'usersRouter')    // TypeError!

// ❌ WRONG — middleware returns undefined instead of a function
const auth = createAuthMiddleware()  // returns undefined
app.use(auth)                        // TypeError!

// ❌ WRONG — calling the middleware instead of passing it
app.use(cors())   // ✅ this one is correct — cors() returns a function
app.use(cors)     // ✅ also valid
app.use(cors({})) // ✅ also valid

// ❌ WRONG — auth is not a function at all
const auth = { check: (req, res, next) => next() }
app.use(auth)     // TypeError! — must pass auth.check`}</CodeBlock>

            <SubHeading>{"Correct middleware patterns"}</SubHeading>
            <CodeBlock title="server.js">{`const express = require('express')
const cors = require('cors')
const app = express()

// ✅ All of these are valid
app.use(express.json())                // built-in middleware
app.use(cors())                        // third-party package
app.use(require('./middleware/auth'))   // custom middleware file
app.use((req, res, next) => next())    // inline middleware function
app.use('/api', require('./routes/api')) // router mounted at path`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Circular Dependency Causing undefined"
            time="5 min"
            tag="Advanced — undefined despite correct export"
          >
            <Prose>
              {"If your routes file imports something from "}
              <IC>{"server.js"}</IC>
              {
                " (or vice versa), you have a circular dependency. When Node.js loads circular imports, one of them will receive an empty object instead of the real exports — causing the middleware to appear as undefined."
              }
            </Prose>

            <SubHeading>{"How to detect a circular dependency"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Install madge\nnpx madge --circular server.js\n# Lists any circular dependencies found"
              }
            </CodeBlock>

            <SubHeading>{"The pattern that creates circular deps"}</SubHeading>
            <CodeBlock title="routes/users.js — creates circular dep">{`// ❌ This file imports from server.js which imports this file
const { app } = require('../server')   // circular!
const express = require('express')
const router = express.Router()
module.exports = router`}</CodeBlock>

            <SubHeading>
              {"Fix — separate app creation from server startup"}
            </SubHeading>
            <CodeBlock title="app.js — create and export app separately">{`// app.js — ONLY creates the Express app
const express = require('express')
const app = express()

app.use(express.json())
app.use('/users', require('./routes/users'))

module.exports = app`}</CodeBlock>

            <CodeBlock title="server.js — only imports and starts">{`// server.js — ONLY starts the server
const app = require('./app')

app.listen(3000, () => {
  console.log('Server running')
})`}</CodeBlock>

            <TipBox>
              {
                "Keep app.js (Express setup) and server.js (port binding) separate. Routes only need to import from app.js or not at all — not from server.js. This eliminates all circular dependency risk."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Error Middleware Missing Fourth Parameter"
            time="1 min"
            tag="Error handler not recognised by Express"
          >
            <Prose>
              {
                "Express identifies error-handling middleware by the number of parameters. It must have exactly four: "
              }
              <IC>{"(err, req, res, next)"}</IC>
              {
                ". If you write only three, Express treats it as regular middleware and errors pass through it unhandled."
              }
            </Prose>

            <CodeBlock title="server.js">{`// ❌ WRONG — 3 params — Express treats this as regular middleware
app.use((req, res, next) => {
  res.status(500).json({ error: 'server error' })
  // errors from routes never reach this
})

// ✅ CORRECT — 4 params — Express recognises as error middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal server error'
  })
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Conditionally Applied Middleware"
            time="2 min"
            tag="Middleware that might be undefined at runtime"
          >
            <Prose>
              {
                "If you conditionally load middleware, make sure it is always a function — never undefined — when passed to "
              }
              <IC>{"app.use()"}</IC>
              {"."}
            </Prose>

            <CodeBlock title="server.js">{`// ❌ WRONG — authMiddleware might be undefined
const authMiddleware = process.env.AUTH_ENABLED
  ? require('./middleware/auth')
  : undefined   // TypeError when passed to app.use!

app.use('/api', authMiddleware, router)

// ✅ CORRECT — always pass a function
const authMiddleware = process.env.AUTH_ENABLED
  ? require('./middleware/auth')
  : (req, res, next) => next()   // pass-through function

app.use('/api', authMiddleware, router)

// ✅ ALTERNATIVE — apply conditionally
if (process.env.AUTH_ENABLED) {
  app.use('/api', require('./middleware/auth'))
}
app.use('/api', router)`}</CodeBlock>
          </FixCard>

          <SectionHeading id="correct-structure">
            {"Correct Express Router Structure"}
          </SectionHeading>
          <Prose>
            {
              "Here is the complete, correct pattern for structuring Express routes in a multi-file project — the exact setup that prevents this error:"
            }
          </Prose>

          <CodeBlock title="routes/users.js">{`const express = require('express')
const router = express.Router()

// Define all routes on the router
router.get('/', async (req, res, next) => {
  try {
    res.json({ users: [] })
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    res.json({ id: req.params.id })
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    res.status(201).json({ created: true })
  } catch (err) {
    next(err)
  }
})

// Export the router — NOT { router }
module.exports = router`}</CodeBlock>

          <CodeBlock title="app.js">{`const express = require('express')
const cors = require('cors')

// Import routers — no destructuring
const usersRouter = require('./routes/users')
const postsRouter = require('./routes/posts')
const authRouter  = require('./routes/auth')

const app = express()

// Middleware first
app.use(cors({ origin: process.env.CORS_ORIGIN }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Mount routers
app.use('/api/users', usersRouter)
app.use('/api/posts', postsRouter)
app.use('/api/auth',  authRouter)

// Error handler — LAST, 4 params
app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({ error: err.message })
})

module.exports = app`}</CodeBlock>

          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Always export routers directly: module.exports = router (never with curly braces)",
              "Import routers without destructuring: const router = require('./routes/file')",
              "Add console.log(typeof yourRouter) before app.use() when debugging",
              "Keep app.js and server.js separate to avoid circular dependencies",
              "Error middleware must have exactly 4 parameters: (err, req, res, next)",
              "Never pass conditional values to app.use() — use a pass-through function as fallback",
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
              {"We Build Production-Grade Express & Node.js APIs"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Dealing with complex Express architecture issues? We can help build something solid."
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
