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
  title: "req.body undefined in Express — Fixed [Complete Guide 2026]",
  description:
    "Fix req.body undefined in Express. Add body parser middleware, fix Content-Type headers, handle multipart forms, and get POST data working correctly in every scenario.",
  keywords:
    "req body undefined express, express req body undefined fix, express body parser not working, express post body empty 2026, req body undefined fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/req-body-undefined-express",
  },
  openGraph: {
    title: "req.body undefined in Express — Fixed [Complete Guide 2026]",
    description:
      "Fix req.body undefined in Express — body parser middleware, Content-Type, multipart forms.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/req-body-undefined-express",
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
          {"Terminal Output"}
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
  { label: "Why is req.body undefined?", href: "#what-it-means" },
  { label: "Fix 1 — Add body parser middleware (most common)", href: "#fix-1" },
  { label: "Fix 2 — Middleware in wrong order", href: "#fix-2" },
  { label: "Fix 3 — Fix frontend Content-Type header", href: "#fix-3" },
  {
    label: "Fix 4 — Express version below 4.16 (use body-parser)",
    href: "#fix-4",
  },
  { label: "Fix 5 — File uploads (multipart/form-data)", href: "#fix-5" },
  { label: "Fix 6 — Increase body size limit (413 error)", href: "#fix-6" },
  { label: "Fix 7 — req.body is {} (empty object)", href: "#fix-7" },
  { label: "Debug checklist", href: "#debug" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is req.body undefined in Express?",
    a: "Body parser middleware is missing or placed after your routes. Add app.use(express.json()) and app.use(express.urlencoded({ extended: true })) BEFORE all route definitions.",
  },
  {
    q: "Do I need to install body-parser in Express 4?",
    a: "No. Express 4.16+ has body-parser built in. Use app.use(express.json()) instead of installing the separate body-parser package. Only use body-parser if you are on an older Express version.",
  },
  {
    q: "req.body is an empty object {} — why?",
    a: "Your frontend is sending the request without the correct Content-Type header. For JSON add: headers: { 'Content-Type': 'application/json' }. Axios sets this automatically when you pass an object.",
  },
  {
    q: "How do I receive file uploads in Express?",
    a: "express.json() does not handle multipart/form-data (file uploads). Install multer: npm install multer. Then: const upload = multer({ dest: 'uploads/' }); app.post('/upload', upload.single('file'), handler).",
  },
  {
    q: "req.body works for some routes but not others?",
    a: "The body parser middleware is added after some routes. Move app.use(express.json()) to the very top of your middleware chain, before any route definitions.",
  },
  {
    q: "Express body parser 413 error — how to fix?",
    a: "Your request body exceeds the default 100kb limit. Increase it: app.use(express.json({ limit: '10mb' })) and app.use(express.urlencoded({ extended: true, limit: '10mb' })).",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "req.body undefined in Express — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/req-body-undefined-express",
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
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
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
              {"req.body undefined Express"}
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
              {"req.body undefined in Express"}
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
                {"Express 4.x · Node.js · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — Two Lines"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Add these two lines to your Express app BEFORE all routes:"}
            </p>
            <CodeBlock title="server.js / app.js">{`const express = require('express')
const app = express()

// ← ADD THESE TWO LINES BEFORE ROUTES
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes come AFTER
app.post('/api/users', (req, res) => {
  console.log(req.body)  // now populated
  res.json(req.body)
})`}</CodeBlock>
            <p className="text-sm text-green-700">
              {"Still undefined? Check that your frontend is sending "}
              <IC>{"Content-Type: application/json"}</IC>
              {". See Fix 3."}
            </p>
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
            {"Why Is req.body undefined in Express?"}
          </SectionHeading>

          <ErrorBlock>{`// console.log(req.body) inside your route:
undefined

// or an empty object even though you sent data:
{}`}</ErrorBlock>

          <Prose>
            {
              "Express does not parse request bodies by default. You must explicitly add middleware to tell Express how to read the request body. Without it, "
            }
            <IC>{"req.body"}</IC>
            {" is always "}
            <IC>{"undefined"}</IC>
            {"."}
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Symptom"}
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
                    "req.body is undefined",
                    "Body parser middleware missing",
                    "#fix-1",
                  ],
                  [
                    "req.body is undefined for some routes",
                    "Middleware added after routes",
                    "#fix-2",
                  ],
                  [
                    "req.body is {} (empty object)",
                    "Frontend not sending Content-Type",
                    "#fix-3",
                  ],
                  [
                    "req.body is undefined in old Express",
                    "Express below 4.16",
                    "#fix-4",
                  ],
                  [
                    "req.body undefined for file uploads",
                    "multipart/form-data not handled",
                    "#fix-5",
                  ],
                  [
                    "413 Request Entity Too Large",
                    "Body size limit exceeded",
                    "#fix-6",
                  ],
                ].map(([symptom, cause, href]) => (
                  <tr
                    key={symptom}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {symptom}
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
            title="Add Body Parser Middleware"
            time="1 min"
            tag="Express 4.16+ — no extra packages needed"
          >
            <Prose>
              {
                "Since Express 4.16, body parsing is built in. You do not need to install any additional packages."
              }
            </Prose>

            <CodeBlock title="server.js — complete working example">{`const express = require('express')
const app = express()

// Parse JSON bodies (application/json)
app.use(express.json())

// Parse URL-encoded bodies (application/x-www-form-urlencoded)
// e.g. HTML form submissions
app.use(express.urlencoded({ extended: true }))

// Routes AFTER middleware — always
app.post('/api/users', (req, res) => {
  console.log(req.body)  // { name: 'John', email: 'john@example.com' }
  res.status(201).json({ created: req.body })
})

app.post('/contact', (req, res) => {
  console.log(req.body)  // form data from HTML form
  res.json({ received: true })
})

app.listen(3000)`}</CodeBlock>

            <SubHeading>{"What each middleware handles"}</SubHeading>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Middleware"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Handles"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Content-Type"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "express.json()",
                      "JSON data from fetch/axios",
                      "application/json",
                    ],
                    [
                      "express.urlencoded()",
                      "HTML form submissions",
                      "application/x-www-form-urlencoded",
                    ],
                    [
                      "multer (separate package)",
                      "File uploads",
                      "multipart/form-data",
                    ],
                  ].map(([mw, handles, ct]) => (
                    <tr
                      key={mw}
                      className="border-b border-gray-50 last:border-0"
                    >
                      <td className="px-4 py-3 font-mono text-xs text-indigo-700">
                        {mw}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">
                        {handles}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">
                        {ct}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <TipBox>
              {
                "Add both express.json() AND express.urlencoded() — they handle different request types and do not conflict with each other."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Middleware Must Go Before Routes"
            time="1 min"
            tag="Works for some routes but not others"
          >
            <Prose>
              {
                "Express applies middleware in the order it is defined. If body parser is added after a route, that route never has access to req.body."
              }
            </Prose>

            <CodeBlock title="server.js">{`// ❌ WRONG — body parser after routes
const app = express()

app.post('/users', (req, res) => {
  console.log(req.body)  // undefined!
  res.json(req.body)
})

app.use(express.json())   // too late — route already defined above

// ✅ CORRECT — body parser first, routes second
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/users', (req, res) => {
  console.log(req.body)  // populated!
  res.json(req.body)
})`}</CodeBlock>

            <TipBox>
              {
                "The correct order: 1. Security middleware (helmet, cors), 2. Body parsers (express.json, urlencoded), 3. Logging middleware, 4. Routes, 5. Error handler."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Frontend Content-Type Header"
            time="2 min"
            tag="req.body is empty object {}"
          >
            <Prose>
              {"Even with body parser middleware, "}
              <IC>{"req.body"}</IC>
              {" will be empty if your frontend does not send the correct "}
              <IC>{"Content-Type"}</IC>
              {
                " header. Express uses this header to decide which parser to apply."
              }
            </Prose>

            <SubHeading>
              {"fetch API — must set Content-Type manually"}
            </SubHeading>
            <CodeBlock title="Frontend JavaScript">{`// ❌ WRONG — no Content-Type header
fetch('/api/users', {
  method: 'POST',
  body: JSON.stringify({ name: 'John' })
  // missing Content-Type → req.body is {}
})

// ✅ CORRECT — Content-Type: application/json
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John' })
})`}</CodeBlock>

            <SubHeading>{"Axios — sets Content-Type automatically"}</SubHeading>
            <CodeBlock title="Frontend JavaScript">{`// ✅ Axios automatically sets Content-Type: application/json
// when you pass an object as the request body
axios.post('/api/users', { name: 'John' })

// ✅ Axios also handles arrays correctly
axios.post('/api/items', [1, 2, 3])`}</CodeBlock>

            <SubHeading>
              {"HTML form — sets Content-Type automatically"}
            </SubHeading>
            <CodeBlock title="HTML form">{`<!-- HTML forms send application/x-www-form-urlencoded by default -->
<!-- express.urlencoded() handles this -->
<form method="POST" action="/contact">
  <input name="name" value="John" />
  <button type="submit">Submit</button>
</form>`}</CodeBlock>

            <SubHeading>{"Debug: log the Content-Type header"}</SubHeading>
            <CodeBlock title="server.js — temporary debug">{`app.post('/api/users', (req, res) => {
  console.log('Content-Type:', req.headers['content-type'])
  console.log('req.body:', req.body)
  // Expected: Content-Type: application/json
  // If undefined or different → fix the frontend
  res.json({ received: req.body })
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Express Below 4.16 — Install body-parser"
            time="2 min"
            tag="Older Express versions"
          >
            <Prose>
              {"If you are using Express 4.15 or below (check: "}
              <IC>{"npm list express"}</IC>
              {
                "), the built-in body parser is not available. Install the separate body-parser package."
              }
            </Prose>

            <CodeBlock title="terminal">{"npm install body-parser"}</CodeBlock>

            <CodeBlock title="server.js">{`const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// body-parser for older Express versions
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))`}</CodeBlock>

            <WarnBox>
              {
                "Express 4.16+ is now almost universal. If you are on an older version, upgrading to the latest Express is a better long-term fix: npm install express@latest"
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="File Uploads — multipart/form-data"
            time="5 min"
            tag="req.body undefined for file upload routes"
          >
            <Prose>
              {
                "express.json() and express.urlencoded() do NOT handle file uploads. For multipart/form-data (file uploads), you must use multer."
              }
            </Prose>

            <CodeBlock title="terminal">{"npm install multer"}</CodeBlock>

            <CodeBlock title="routes/upload.js">{`const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

// Single file upload
app.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)     // uploaded file info
  console.log(req.body)     // other form fields
  res.json({ uploaded: req.file.filename })
})

// Multiple files
app.post('/photos', upload.array('photos', 5), (req, res) => {
  console.log(req.files)    // array of uploaded files
  res.json({ count: req.files.length })
})

// Mixed: files + form fields
app.post('/profile', upload.fields([
  { name: 'avatar', maxCount: 1 },
  { name: 'gallery', maxCount: 10 }
]), (req, res) => {
  console.log(req.files)    // { avatar: [...], gallery: [...] }
  console.log(req.body)     // text fields from the form
  res.json({ success: true })
})`}</CodeBlock>

            <CodeBlock title="Frontend — sending files">{`// FormData for file uploads
const formData = new FormData()
formData.append('file', fileInput.files[0])
formData.append('name', 'My Photo')

// Do NOT set Content-Type manually with FormData
// The browser sets it automatically with the correct boundary
fetch('/upload', {
  method: 'POST',
  body: formData
})`}</CodeBlock>

            <TipBox>
              {
                "Never set Content-Type manually when using FormData. The browser automatically adds the multipart/form-data boundary that multer needs to parse the file correctly."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Increase Body Size Limit (413 Error)"
            time="1 min"
            tag="PayloadTooLargeError / 413 Request Entity Too Large"
          >
            <ErrorBlock>{`PayloadTooLargeError: request entity too large
    at readStream (/node_modules/raw-body/index.js:155:17)`}</ErrorBlock>

            <Prose>
              {
                "The default body size limit is 100kb. Large JSON payloads or base64-encoded files exceed this. Increase the limit:"
              }
            </Prose>

            <CodeBlock title="server.js">{`// Increase limit for JSON bodies
app.use(express.json({ limit: '10mb' }))

// Increase limit for URL-encoded bodies
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Or set a very high limit (use carefully — large payloads can be a DoS risk)
app.use(express.json({ limit: '50mb' }))`}</CodeBlock>

            <WarnBox>
              {
                "Set the smallest limit that covers your use case. Very large body limits can be exploited for denial-of-service attacks. For file uploads over a few MB, use multer with disk storage instead of base64-encoded JSON."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="7"
            title="req.body is Empty Object {}"
            time="2 min"
            tag="Middleware working but body appears empty"
          >
            <Prose>
              {"If req.body is "}
              <IC>{"{}"}</IC>
              {
                " (not undefined — actually an empty object), the middleware is working correctly but the frontend is either not sending data or sending with the wrong Content-Type."
              }
            </Prose>

            <SubHeading>{"Debug step by step"}</SubHeading>
            <CodeBlock title="server.js — add debug middleware">{`// Add this BEFORE your routes to debug all requests
app.use((req, res, next) => {
  console.log('Method:', req.method)
  console.log('Content-Type:', req.headers['content-type'])
  console.log('Body:', req.body)
  next()
})`}</CodeBlock>

            <SubHeading>{"Common reasons for empty body"}</SubHeading>
            <CheckList
              items={[
                "Frontend sending GET request instead of POST — GET requests have no body",
                "Content-Type: text/plain instead of application/json — Express ignores it",
                "JSON.stringify() not called — sending [object Object] as text",
                "Empty object being sent: {} — this is valid, req.body will be {}",
                "Query parameters confused for body — use req.query not req.body for URL params",
              ]}
            />
          </FixCard>

          <SectionHeading id="debug">{"Debug Checklist"}</SectionHeading>
          <div className="mt-6 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <ol className="space-y-3">
              {[
                {
                  check: "Is app.use(express.json()) present?",
                  fix: "Add it before all routes",
                },
                {
                  check: "Is it placed BEFORE your routes?",
                  fix: "Move it to the top of middleware chain",
                },
                {
                  check:
                    "Is Content-Type: application/json set in the request?",
                  fix: "Add to fetch headers or use axios",
                },
                {
                  check: "Is it a file upload? (multipart/form-data)",
                  fix: "Use multer instead of express.json()",
                },
                {
                  check: "Is the body over 100kb?",
                  fix: "Increase: app.use(express.json({ limit: '10mb' }))",
                },
                {
                  check: "Is it still {} after all fixes?",
                  fix: "Log Content-Type header to confirm what is being sent",
                },
              ].map(({ check, fix }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">{check}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{fix}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Always add express.json() and express.urlencoded() at the top of your middleware chain",
              "Use a template or boilerplate that includes body parsers by default",
              "Always set Content-Type: application/json when sending JSON from fetch",
              "Use axios — it sets Content-Type automatically for object bodies",
              "Use multer for file uploads — express.json() cannot handle multipart/form-data",
              "Add a debug middleware in development to log Content-Type and body for every request",
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
                "Softplix is a full-stack development agency specialising in Node.js backends. Dealing with Express configuration issues? We can help."
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
