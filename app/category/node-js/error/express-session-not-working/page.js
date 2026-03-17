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
  title: "Express Session Not Working — Fixed [Complete Guide 2026]",
  description:
    "Fix Express session not working. Configure express-session correctly, fix cookie settings for HTTPS, enable credentials for cross-origin requests, and use persistent session stores in production.",
  keywords:
    "express session not working, express-session fix, req session undefined express, express session not persisting 2026, express session cookie not set",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/express-session-not-working",
  },
  openGraph: {
    title: "Express Session Not Working — Fixed [Complete Guide 2026]",
    description:
      "Fix Express session not working — configuration, cookies, credentials, production stores.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/express-session-not-working",
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
          {"Terminal / Console Output"}
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
  { label: "Why is your session not working?", href: "#what-it-means" },
  { label: "Fix 1 — Install and configure express-session", href: "#fix-1" },
  { label: "Fix 2 — Middleware order matters", href: "#fix-2" },
  { label: "Fix 3 — Fix CORS with credentials", href: "#fix-3" },
  {
    label: "Fix 4 — Fix cookie settings for production (HTTPS)",
    href: "#fix-4",
  },
  { label: "Fix 5 — Use persistent session store", href: "#fix-5" },
  { label: "Fix 6 — Session not persisting between requests", href: "#fix-6" },
  { label: "Fix 7 — SameSite cookie issues", href: "#fix-7" },
  { label: "Session vs JWT — when to use each", href: "#session-vs-jwt" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is req.session undefined in Express?",
    a: "express-session middleware is not installed or not added to your app. Install it with npm install express-session, then add app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: false })) before your routes.",
  },
  {
    q: "Express session not persisting between requests?",
    a: "The default memory store loses sessions on server restart and is not suitable for production. For development, check that the session cookie is being sent back with each request. For production, use connect-mongo or connect-redis as the session store.",
  },
  {
    q: "Session not working across different domains (CORS)?",
    a: "Add credentials: true to your CORS config: app.use(cors({ origin: 'http://localhost:3000', credentials: true })). In your frontend, add credentials: 'include' to fetch calls or axios.defaults.withCredentials = true.",
  },
  {
    q: "What should I use as a session secret?",
    a: "A long random string stored in your .env file. Generate one with: node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\". Never hardcode it in source code.",
  },
  {
    q: "express-session vs JWT — which should I use?",
    a: "Sessions store state on the server and work well for traditional web apps with server-side rendering. JWT tokens are stateless and better for REST APIs, mobile apps, and microservices. Both are valid — choose based on your architecture.",
  },
  {
    q: "Session cookie not being set in browser?",
    a: "Check three things: 1) secure: false in development (HTTP), 2) sameSite setting matches your setup, 3) If cross-origin: credentials: true in cors and credentials: 'include' in frontend fetch. Use browser DevTools > Application > Cookies to debug.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Express Session Not Working — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/express-session-not-working",
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
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js JWT authentication error",
    href: "nodejs-jwt-authentication-error",
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
              {"Express Session Not Working"}
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
              {"Express Session Not Working"}
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
                {"Express · Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Complete Working Setup"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Install and configure express-session before all routes:"}
            </p>
            <CodeBlock title="terminal">
              {"npm install express-session"}
            </CodeBlock>
            <CodeBlock title="server.js">{`const session = require('express-session')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,      // true only in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000   // 24 hours
  }
}))`}</CodeBlock>
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
            {"Why Is Your Express Session Not Working?"}
          </SectionHeading>

          <Prose>
            {"Express does not have session management built in. The "}
            <IC>{"express-session"}</IC>
            {
              " package must be installed separately, configured correctly, and added to your app before routes. Sessions fail for several distinct reasons — identify yours in the table below:"
            }
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
                    "req.session is undefined",
                    "express-session not installed or configured",
                    "#fix-1",
                  ],
                  [
                    "Session set but lost after page reload",
                    "Cookie not sent back / wrong cookie config",
                    "#fix-6",
                  ],
                  [
                    "Sessions work locally, fail cross-origin",
                    "CORS credentials not configured",
                    "#fix-3",
                  ],
                  [
                    "Session lost in production (HTTPS)",
                    "secure: true but wrong proxy setup",
                    "#fix-4",
                  ],
                  [
                    "Sessions lost on server restart",
                    "Default memory store — use persistent store",
                    "#fix-5",
                  ],
                  [
                    "Cookie visible in DevTools but ignored",
                    "SameSite or domain mismatch",
                    "#fix-7",
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
            title="Install and Configure express-session"
            time="3 min"
            tag="req.session is undefined"
          >
            <CodeBlock title="terminal">
              {"npm install express-session"}
            </CodeBlock>

            <SubHeading>{"Minimum working configuration"}</SubHeading>
            <CodeBlock title="server.js">{`require('dotenv').config()
const express = require('express')
const session = require('express-session')

const app = express()

app.use(express.json())

// Session middleware — before routes
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret-change-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,     // set true only with HTTPS
    httpOnly: true,    // prevents XSS access to cookie
    maxAge: 1000 * 60 * 60 * 24   // 24 hours in milliseconds
  }
}))

// Now req.session is available in all routes
app.post('/login', (req, res) => {
  req.session.userId = 'user123'
  req.session.isLoggedIn = true
  res.json({ message: 'Logged in' })
})

app.get('/profile', (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' })
  }
  res.json({ userId: req.session.userId })
})

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ error: 'Logout failed' })
    res.clearCookie('connect.sid')
    res.json({ message: 'Logged out' })
  })
})`}</CodeBlock>

            <SubHeading>{"Generate a secure session secret"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\"\n# Copy the output to your .env file:\n# SESSION_SECRET=a1b2c3d4e5f6..."
              }
            </CodeBlock>

            <WarnBox>
              {
                "Never hardcode the session secret in source code. Store it in .env and load it with dotenv. A leaked session secret allows anyone to forge session cookies."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Middleware Order Matters"
            time="1 min"
            tag="Session undefined for some routes"
          >
            <Prose>
              {
                "Express applies middleware in the order it is defined. If session middleware is added after a route, that route cannot access "
              }
              <IC>{"req.session"}</IC>
              {"."}
            </Prose>
            <CodeBlock title="server.js">{`// ❌ WRONG — session added after route
app.get('/profile', (req, res) => {
  console.log(req.session)  // undefined!
})
app.use(session({ secret: '...' }))  // too late

// ✅ CORRECT — session before all routes
app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }))
app.use(cors())
app.use(express.json())

app.get('/profile', (req, res) => {
  console.log(req.session)  // populated!
})`}</CodeBlock>
            <TipBox>
              {
                "Correct order: cors → session → body parsers → routes → error handler. Session must come before any route that uses req.session."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="Fix CORS with Credentials (Cross-Origin)"
            time="3 min"
            tag="Session works locally but not cross-origin"
          >
            <Prose>
              {
                "When your frontend (e.g. React on port 3000) and backend (Express on port 5000) run on different origins, cookies are not sent by default. You must enable credentials on both sides."
              }
            </Prose>
            <CodeBlock title="server.js — backend">{`const cors = require('cors')

app.use(cors({
  origin: 'http://localhost:3000',   // exact frontend origin
  credentials: true,                  // allow cookies
}))`}</CodeBlock>

            <SubHeading>{"Frontend — fetch API"}</SubHeading>
            <CodeBlock title="Frontend JavaScript">{`// Must include credentials: 'include' in every request
fetch('http://localhost:5000/api/login', {
  method: 'POST',
  credentials: 'include',     // ← send and receive cookies
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'user@example.com', password: 'pass' })
})`}</CodeBlock>

            <SubHeading>{"Frontend — Axios"}</SubHeading>
            <CodeBlock title="Frontend JavaScript">{`import axios from 'axios'

// Set globally (recommended)
axios.defaults.withCredentials = true

// Or per-request
axios.post('http://localhost:5000/api/login', data, {
  withCredentials: true
})`}</CodeBlock>

            <WarnBox>
              {
                "When credentials: true, you CANNOT use origin: '*'. You must specify the exact frontend URL. Using wildcard with credentials will cause the browser to reject the response."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Cookie Settings for Production (HTTPS)"
            time="3 min"
            tag="Sessions work locally but fail in production"
          >
            <Prose>
              {
                "When deploying to production with HTTPS, cookie settings must be updated. The "
              }
              <IC>{"secure: true"}</IC>
              {
                " flag tells the browser to only send the cookie over HTTPS — but if Node.js is behind a proxy (nginx, Heroku, AWS), you need to tell Express to trust it."
              }
            </Prose>
            <CodeBlock title="server.js — production config">{`// Tell Express to trust the proxy (nginx, load balancer, etc.)
app.set('trust proxy', 1)

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',   // HTTPS only in prod
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,   // 1 week
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
  }
}))`}</CodeBlock>
            <TipBox>
              {
                "app.set('trust proxy', 1) is required on Heroku, Railway, Render, and any deployment behind a reverse proxy. Without it, Express sees all requests as HTTP even when they arrive over HTTPS."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Use Persistent Session Store (Production)"
            time="5 min"
            tag="Sessions lost on server restart"
          >
            <Prose>
              {
                "The default express-session store is in-memory. It loses all sessions every time the server restarts and cannot be shared across multiple Node.js processes. For production, use a database-backed store."
              }
            </Prose>

            <SubHeading>
              {"Option A — MongoDB store (connect-mongo)"}
            </SubHeading>
            <CodeBlock title="terminal">
              {"npm install connect-mongo"}
            </CodeBlock>
            <CodeBlock title="server.js">{`const MongoStore = require('connect-mongo')

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    ttl: 14 * 24 * 60 * 60,   // 14 days in seconds
    autoRemove: 'native',
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000,   // 14 days in ms
  }
}))`}</CodeBlock>

            <SubHeading>{"Option B — Redis store (connect-redis)"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install connect-redis redis"}
            </CodeBlock>
            <CodeBlock title="server.js">{`const { createClient } = require('redis')
const connectRedis = require('connect-redis')

const redisClient = createClient({ url: process.env.REDIS_URL })
redisClient.connect()

const RedisStore = connectRedis(session)

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true, httpOnly: true, maxAge: 86400000 }
}))`}</CodeBlock>
            <TipBox>
              {
                "Redis is faster than MongoDB for session storage and is the industry standard for high-traffic production apps. MongoDB is simpler if you are already using it for your database."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Session Not Persisting Between Requests"
            time="2 min"
            tag="Session set but not available on next request"
          >
            <Prose>
              {
                "If you set session data in one route but it is gone in the next request, the session cookie is not being sent back to the server. Check these:"
              }
            </Prose>

            <SubHeading>{"Debug — log session on every request"}</SubHeading>
            <CodeBlock title="server.js — temporary debug">{`app.use((req, res, next) => {
  console.log('Session ID:', req.sessionID)
  console.log('Session data:', req.session)
  next()
})`}</CodeBlock>

            <SubHeading>{"Common causes"}</SubHeading>
            <CheckList
              items={[
                "Frontend not sending credentials: 'include' — add to every fetch call",
                "CORS not configured with credentials: true",
                "Cookie domain mismatch — localhost vs 127.0.0.1 are different origins",
                "SameSite: 'strict' blocking cross-origin requests",
                "Cookie expired — check maxAge value",
              ]}
            />

            <SubHeading>{"Verify cookie in browser DevTools"}</SubHeading>
            <Prose>
              {
                "Open browser DevTools → Application tab → Cookies → check that "
              }
              <IC>{"connect.sid"}</IC>
              {
                " cookie exists after login. If it does not appear, the server is not setting it. If it appears but is not sent, it is a CORS or SameSite issue."
              }
            </Prose>
          </FixCard>

          <FixCard
            number="7"
            title="SameSite Cookie Issues"
            time="2 min"
            tag="Cookie set but not sent on cross-site requests"
          >
            <Prose>
              {
                "Modern browsers enforce SameSite cookie policies. If your frontend and backend are on different domains (not just ports), you need "
              }
              <IC>{"sameSite: 'none'"}</IC>
              {" with "}
              <IC>{"secure: true"}</IC>
              {"."}
            </Prose>
            <CodeBlock title="server.js">{`app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    // Same origin (localhost dev): 'lax' works
    // Cross-origin (different domains): 'none' + secure: true
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 86400000
  }
}))`}</CodeBlock>
            <WarnBox>
              {
                "sameSite: 'none' requires secure: true. Browsers reject sameSite: 'none' cookies without the Secure flag. This means cross-origin sessions only work in production over HTTPS."
              }
            </WarnBox>
          </FixCard>

          <SectionHeading id="session-vs-jwt">
            {"Session vs JWT — When to Use Each"}
          </SectionHeading>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-4 py-3 font-bold text-gray-700">
                    {"Factor"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-indigo-700">
                    {"Sessions (express-session)"}
                  </th>
                  <th className="text-left px-4 py-3 font-bold text-green-700">
                    {"JWT tokens"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["State", "Server-side (in store)", "Stateless (in token)"],
                  [
                    "Revoke login",
                    "Instant — delete from store",
                    "Cannot revoke until expiry",
                  ],
                  [
                    "Scalability",
                    "Needs shared store (Redis)",
                    "Scales horizontally easily",
                  ],
                  [
                    "Best for",
                    "Traditional web apps, SSR",
                    "REST APIs, mobile, SPA",
                  ],
                  [
                    "Security",
                    "More control",
                    "Token theft is harder to recover from",
                  ],
                ].map(([factor, sess, jwt]) => (
                  <tr
                    key={factor}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-600">
                      {factor}
                    </td>
                    <td className="px-4 py-3 text-indigo-700 text-sm">
                      {sess}
                    </td>
                    <td className="px-4 py-3 text-green-700 text-sm">{jwt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <SectionHeading id="prevention">
            {"How to Prevent Session Issues"}
          </SectionHeading>
          <CheckList
            items={[
              "Always store session secret in .env — never hardcode it",
              "Use connect-mongo or connect-redis in production — never default memory store",
              "Set app.set('trust proxy', 1) when behind nginx or any reverse proxy",
              "Add credentials: true to CORS and credentials: 'include' to frontend fetch",
              "Use sameSite: 'none' with secure: true only in production over HTTPS",
              "Log req.sessionID on each request during debugging to trace session flow",
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
              {"We Build Production-Grade Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack Node.js applications. Struggling with authentication or session management in production? We can help."
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
