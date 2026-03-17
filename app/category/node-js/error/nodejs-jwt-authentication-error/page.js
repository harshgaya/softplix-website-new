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
  title: "Node.js JWT Authentication Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Node.js JWT authentication errors. Covers invalid signature, token expired, malformed JWT, missing secret, wrong algorithm, and building a complete JWT auth middleware for Express.",
  keywords:
    "nodejs jwt authentication error, jwt invalid signature fix, jsonwebtoken error nodejs, jwt token expired fix 2026, express jwt middleware fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-jwt-authentication-error",
  },
  openGraph: {
    title: "Node.js JWT Authentication Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Node.js JWT errors — invalid signature, expired, malformed, wrong secret, middleware.",
    type: "article",
    url: "https://softplix.com/blog/category/node-js/error/nodejs-jwt-authentication-error",
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
        <span className="text-xs font-mono text-red-300">{"JWT Error"}</span>
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
  { label: "All JWT error types explained", href: "#errors" },
  { label: "Fix 1 — JsonWebTokenError: invalid signature", href: "#fix-1" },
  { label: "Fix 2 — TokenExpiredError: jwt expired", href: "#fix-2" },
  { label: "Fix 3 — JsonWebTokenError: malformed", href: "#fix-3" },
  { label: "Fix 4 — JWT secret from environment variable", href: "#fix-4" },
  { label: "Fix 5 — Build complete auth middleware", href: "#fix-5" },
  { label: "Fix 6 — Handle JWT in frontend correctly", href: "#fix-6" },
  { label: "Fix 7 — Refresh tokens pattern", href: "#fix-7" },
  { label: "Complete JWT authentication flow", href: "#complete" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes JWT invalid signature error?",
    a: "The secret used to verify the token is different from the one used to sign it. Check that process.env.JWT_SECRET is the same value when signing and verifying. On different servers, the secret must be identical.",
  },
  {
    q: "How do I fix JWT token expired error?",
    a: "The token's exp claim has passed. Either issue a new token (login again) or implement refresh tokens. In your middleware, catch TokenExpiredError specifically and return a 401 with a 'token expired' message so the frontend knows to refresh.",
  },
  {
    q: "JWT works locally but invalid signature in production?",
    a: "Your JWT_SECRET environment variable is either not set in production or has a different value. Check that the secret is set via your platform dashboard (Heroku, Railway etc.) and matches exactly — including any trailing spaces or newlines.",
  },
  {
    q: "How do I extract JWT from Authorization header?",
    a: "The standard pattern: const authHeader = req.headers.authorization; if (!authHeader?.startsWith('Bearer ')) return res.status(401).json({ error: 'No token' }); const token = authHeader.split(' ')[1];",
  },
  {
    q: "Should I store JWT in localStorage or a cookie?",
    a: "Cookies with httpOnly: true, secure: true, sameSite: 'strict' are more secure — JavaScript cannot access them so XSS attacks cannot steal the token. localStorage is simpler but vulnerable to XSS. For most apps, httpOnly cookies are recommended.",
  },
  {
    q: "How long should JWT tokens expire?",
    a: "Access tokens: 15 minutes to 1 hour. Refresh tokens: 7 to 30 days. Short access token expiry limits the damage if a token is stolen. Pair with refresh tokens so users stay logged in without re-entering credentials.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js JWT Authentication Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-jwt-authentication-error",
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
    title: "Fix: Node.js WebSocket connection error",
    href: "nodejs-websocket-connection-error",
    time: "7 min read",
  },
  {
    tag: "Express",
    title: "Fix: Express session not working",
    href: "express-session-not-working",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: dotenv not working in Node.js",
    href: "dotenv-not-working-nodejs",
    time: "6 min read",
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
            <span className="text-gray-500">{"JWT Authentication Error"}</span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "JWT", "Error Fix"].map((t) => (
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
              {"Node.js JWT Authentication Error"}
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
                {"Node.js · Express · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quick Reference — Handle All JWT Errors"}
            </p>
            <CodeBlock title="middleware/auth.js">{`const jwt = require('jsonwebtoken')

try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)
} catch (err) {
  if (err.name === 'TokenExpiredError')    // token expired
  if (err.name === 'JsonWebTokenError')   // invalid signature or malformed
  if (err.name === 'NotBeforeError')      // token not yet valid
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

          <SH id="errors">{"All JWT Error Types Explained"}</SH>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error name"}
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
                    "JsonWebTokenError: invalid signature",
                    "Sign and verify secrets differ",
                    "#fix-1",
                  ],
                  [
                    "TokenExpiredError: jwt expired",
                    "Token exp claim has passed",
                    "#fix-2",
                  ],
                  [
                    "JsonWebTokenError: jwt malformed",
                    "Not a valid JWT string",
                    "#fix-3",
                  ],
                  [
                    "JsonWebTokenError: invalid algorithm",
                    "alg in token header ≠ expected",
                    "#fix-1",
                  ],
                  [
                    "NotBeforeError: jwt not active",
                    "nbf claim is in the future",
                    "Check server time sync",
                  ],
                ].map(([e, c, h]) => (
                  <tr key={e} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {e}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{c}</td>
                    <td className="px-5 py-3">
                      <a
                        href={h}
                        className="text-xs font-bold text-indigo-600 hover:underline"
                      >
                        {h.startsWith("#") ? "Jump →" : h}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Fix: invalid signature"
            time="2 min"
            tag="Signing secret differs from verifying secret"
          >
            <P>
              {
                "Invalid signature means the secret used to verify the token is different from the one used when the token was signed. This is almost always caused by a different or missing "
              }
              <IC>{"JWT_SECRET"}</IC>
              {" environment variable."}
            </P>
            <CodeBlock title="server.js">{`const jwt = require('jsonwebtoken')

// SIGN — uses JWT_SECRET
const token = jwt.sign(
  { userId: user._id, email: user.email },
  process.env.JWT_SECRET,   // ← secret used to sign
  { expiresIn: '1h' }
)

// VERIFY — must use the EXACT same secret
const decoded = jwt.verify(token, process.env.JWT_SECRET)  // ← must match

// Common mistakes that cause invalid signature:
// 1. Different values of JWT_SECRET on different servers
// 2. JWT_SECRET changed after tokens were issued
// 3. Using jwt.decode() instead of jwt.verify() (decode does NOT verify!)
// 4. Whitespace difference: 'secret ' vs 'secret'`}</CodeBlock>
            <TipBox>
              {
                "jwt.decode() does not verify the signature — it just reads the payload. Always use jwt.verify() to validate tokens. jwt.decode() is only for reading already-trusted tokens."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Fix: TokenExpiredError"
            time="3 min"
            tag="Token exp claim has passed"
          >
            <CodeBlock title="middleware/auth.js">{`const jwt = require('jsonwebtoken')

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ error: 'No token provided' })

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({
        error: 'Token expired',
        code: 'TOKEN_EXPIRED',  // frontend checks this to trigger refresh
      })
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' })
    }
    next(err)
  }
}`}</CodeBlock>
            <H3>{"Set appropriate expiry when signing"}</H3>
            <CodeBlock title="server.js">{`// Access token — short lived
const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: '15m',   // 15 minutes
})

// Refresh token — longer lived
const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
  expiresIn: '7d',    // 7 days
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix: jwt malformed"
            time="2 min"
            tag="Not a valid JWT string"
          >
            <P>
              {"Malformed JWT means the string passed to "}
              <IC>{"jwt.verify()"}</IC>
              {
                " is not a valid JWT. A valid JWT has exactly three parts separated by dots: "
              }
              <IC>{"header.payload.signature"}</IC>
              {"."}
            </P>
            <CodeBlock title="routes/protected.js">{`// Common sources of malformed JWT:
// 1. "Bearer" prefix not stripped
const header = req.headers.authorization  // "Bearer eyJhbGci..."
const token  = header                     // ❌ includes "Bearer"
const token  = header.split(' ')[1]       // ✅ just the JWT

// 2. Double encoding
const token = JSON.stringify(rawToken)    // ❌ JSON-stringified
const token = rawToken                    // ✅ raw string

// 3. Whitespace in the token
const token = req.body.token.trim()       // ✅ strip whitespace

// Debug — check what you're verifying
console.log('Token parts:', token.split('.').length)  // should be 3`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="JWT Secret from Environment Variable"
            time="2 min"
            tag="Missing or wrong JWT_SECRET in production"
          >
            <CodeBlock title=".env">{`# Generate a strong secret
JWT_SECRET=your-super-long-random-secret-minimum-32-chars
JWT_REFRESH_SECRET=different-secret-for-refresh-tokens

# Generate one in terminal:
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`}</CodeBlock>
            <CodeBlock title="server.js — validate at startup">{`// Check secrets exist before starting
if (!process.env.JWT_SECRET) {
  console.error('FATAL: JWT_SECRET not set')
  process.exit(1)
}
if (process.env.JWT_SECRET.length < 32) {
  console.error('FATAL: JWT_SECRET too short — minimum 32 characters')
  process.exit(1)
}`}</CodeBlock>
            <WarnBox>
              {
                "Never use a short or obvious secret like 'secret', 'password', or 'jwt'. A weak secret can be brute-forced. Use a cryptographically random string of at least 32 characters."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Complete JWT Auth Middleware"
            time="5 min"
            tag="Production-ready Express middleware"
          >
            <CodeBlock title="middleware/authenticate.js">{`const jwt = require('jsonwebtoken')

// Authenticate — required for protected routes
const authenticate = (req, res, next) => {
  // Extract token from Authorization header
  const authHeader = req.headers.authorization

  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization header required' })
  }

  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded    // { userId, email, role, iat, exp }
    next()
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired', code: 'TOKEN_EXPIRED' })
    }
    return res.status(401).json({ error: 'Invalid token' })
  }
}

// Authorize — check user role
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ error: 'Insufficient permissions' })
  }
  next()
}

module.exports = { authenticate, authorize }`}</CodeBlock>
            <CodeBlock title="routes/users.js">{`const { authenticate, authorize } = require('../middleware/authenticate')

// Protected route — any authenticated user
router.get('/profile', authenticate, (req, res) => {
  res.json({ user: req.user })
})

// Admin only
router.delete('/:id', authenticate, authorize('admin'), async (req, res) => {
  await User.findByIdAndDelete(req.params.id)
  res.json({ deleted: true })
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Handle JWT in Frontend Correctly"
            time="3 min"
            tag="Sending tokens — Axios and fetch patterns"
          >
            <CodeBlock title="Frontend — api.js">{`import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

// Add token to every request automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')
  if (token) config.headers.Authorization = \`Bearer \${token}\`
  return config
})

// Handle 401 responses — refresh token or redirect to login
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 &&
        error.response?.data?.code === 'TOKEN_EXPIRED' &&
        !originalRequest._retry) {
      originalRequest._retry = true
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        const { data } = await axios.post('/api/auth/refresh', { refreshToken })
        localStorage.setItem('accessToken', data.accessToken)
        originalRequest.headers.Authorization = \`Bearer \${data.accessToken}\`
        return api(originalRequest)
      } catch {
        // Refresh failed — redirect to login
        localStorage.clear()
        window.location.href = '/login'
      }
    }
    return Promise.reject(error)
  }
)

export default api`}</CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="Refresh Tokens Pattern"
            time="5 min"
            tag="Keep users logged in without re-entering credentials"
          >
            <CodeBlock title="routes/auth.js">{`const jwt = require('jsonwebtoken')
const crypto = require('crypto')

// In-memory refresh token store (use Redis in production)
const refreshTokens = new Set()

// Login — issue both tokens
router.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email })
  if (!user || !await user.comparePassword(req.body.password)) {
    return res.status(401).json({ error: 'Invalid credentials' })
  }

  const accessToken = jwt.sign(
    { userId: user._id, email: user.email, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  )

  const refreshToken = crypto.randomBytes(64).toString('hex')
  refreshTokens.add(refreshToken)

  res.json({ accessToken, refreshToken })
})

// Refresh — issue new access token
router.post('/refresh', (req, res) => {
  const { refreshToken } = req.body

  if (!refreshToken || !refreshTokens.has(refreshToken)) {
    return res.status(401).json({ error: 'Invalid refresh token' })
  }

  // Decode the old access token payload (without verification)
  // In production: look up user from database using stored refresh token
  const newAccessToken = jwt.sign(
    { userId: 'user._id', email: 'user.email' },
    process.env.JWT_SECRET,
    { expiresIn: '15m' }
  )

  res.json({ accessToken: newAccessToken })
})

// Logout — invalidate refresh token
router.post('/logout', (req, res) => {
  refreshTokens.delete(req.body.refreshToken)
  res.json({ message: 'Logged out' })
})`}</CodeBlock>
            <TipBox>
              {
                "In production, store refresh tokens in Redis or your database — not in memory. In-memory storage loses all tokens on server restart."
              }
            </TipBox>
          </FixCard>

          <SH id="complete">{"Complete JWT Authentication Flow"}</SH>
          <div className="my-6 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <ol className="space-y-3">
              {[
                {
                  step: "User sends email + password",
                  note: "POST /api/auth/login",
                },
                {
                  step: "Server verifies credentials",
                  note: "bcrypt.compare(password, hash)",
                },
                {
                  step: "Server creates JWT access token (15m)",
                  note: "jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' })",
                },
                {
                  step: "Server creates refresh token (7d)",
                  note: "crypto.randomBytes() — stored in DB/Redis",
                },
                {
                  step: "Client stores tokens",
                  note: "httpOnly cookie (secure) or localStorage",
                },
                {
                  step: "Client sends token with each request",
                  note: "Authorization: Bearer <accessToken>",
                },
                {
                  step: "Server verifies token on protected routes",
                  note: "jwt.verify(token, JWT_SECRET)",
                },
                {
                  step: "On 401 TOKEN_EXPIRED — client refreshes",
                  note: "POST /api/auth/refresh with refreshToken",
                },
              ].map(({ step, note }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-800">{step}</p>
                    <p className="font-mono text-xs text-gray-400 mt-0.5">
                      {note}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <SH id="prevention">{"How to Prevent JWT Errors"}</SH>
          <CheckList
            items={[
              "Store JWT_SECRET in .env — never hardcode it in source code",
              "Use a minimum 32-character random secret: node -e \"console.log(require('crypto').randomBytes(64).toString('hex'))\"",
              "Always use jwt.verify() — never jwt.decode() for security checks",
              "Handle TokenExpiredError specifically — return TOKEN_EXPIRED code for frontend to trigger refresh",
              "Validate JWT_SECRET exists at startup and exit if missing",
              "Use short access token expiry (15m) paired with longer refresh tokens (7d)",
              "Store refresh tokens in Redis/database — never in memory alone",
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
              {"We Build Secure Node.js Authentication Systems"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds full-stack applications with secure authentication. Need help with JWT, OAuth, or a complete auth system? We can help."
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
