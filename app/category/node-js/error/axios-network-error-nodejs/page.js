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
  title: "Axios Network Error in Node.js — Fixed [Complete Guide 2026]",
  description:
    "Fix Axios Network Error in Node.js. Covers CORS errors, wrong base URL, SSL certificate issues, timeouts, proxy configuration, and error handling best practices.",
  keywords:
    "axios network error nodejs, axios network error fix, axios request failed nodejs 2026, axios econnrefused fix, axios timeout error",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/axios-network-error-nodejs",
  },
  openGraph: {
    title: "Axios Network Error in Node.js — Fixed [Complete Guide 2026]",
    description:
      "Fix Axios Network Error in Node.js — CORS, wrong URL, SSL, timeouts, proxy.",
    type: "article",
    url: "category/node-js/error/axios-network-error-nodej",
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
function Tip({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-indigo-50 border border-indigo-100 rounded-2xl px-5 py-4">
      <FaLightbulb className="text-indigo-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-indigo-900 leading-relaxed">{children}</p>
    </div>
  );
}
function Warn({ children }) {
  return (
    <div className="my-6 flex gap-3 bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
      <FaTriangleExclamation className="text-amber-500 text-lg flex-shrink-0 mt-0.5" />
      <p className="text-sm text-amber-900 leading-relaxed">{children}</p>
    </div>
  );
}
function FC({ n, title, time, tag, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {n}
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
      {items.map((i, k) => (
        <li key={k} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleCheck className="text-green-500 mt-0.5 flex-shrink-0" />
          <span>{i}</span>
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
  { label: "What causes Axios network error?", href: "#what" },
  {
    label: "Fix 1 — Diagnose with error.response and error.request",
    href: "#fix-1",
  },
  { label: "Fix 2 — CORS error (browser context)", href: "#fix-2" },
  { label: "Fix 3 — Wrong base URL or endpoint", href: "#fix-3" },
  { label: "Fix 4 — Server not running (ECONNREFUSED)", href: "#fix-4" },
  { label: "Fix 5 — SSL certificate errors", href: "#fix-5" },
  { label: "Fix 6 — Timeout configuration", href: "#fix-6" },
  { label: "Fix 7 — Proxy configuration", href: "#fix-7" },
  { label: "Fix 8 — Proper Axios error handling", href: "#fix-8" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes Axios Network Error?",
    a: "Axios throws 'Network Error' when no response was received at all — the request never reached the server or the server never responded. Causes: CORS error blocking the response in browser, wrong URL/port, server not running, SSL certificate issue, or network timeout.",
  },
  {
    q: "Axios Network Error with no response — how to debug?",
    a: "Check error.request to see what was sent. In browser: check the Network tab in DevTools — the request may show a CORS error or failed DNS. In Node.js: add console.log(error.code) — ECONNREFUSED means the server is not running on that port.",
  },
  {
    q: "Axios Network Error only in browser not in Node?",
    a: "The browser is blocking the response due to CORS. The request reaches the server but the browser discards the response because the server is missing Access-Control-Allow-Origin header. Fix CORS on your Express server.",
  },
  {
    q: "How do I fix Axios ECONNREFUSED?",
    a: "The server you are trying to reach is not running. Start your backend server and verify the port number matches. Run: curl http://localhost:5000/api/test to verify the server responds.",
  },
  {
    q: "How do I handle Axios errors properly?",
    a: "Check error.response for server errors (4xx, 5xx), error.request for network errors (no response received), and error.message for everything else. Use axios.isAxiosError(error) to check if it is an Axios error.",
  },
  {
    q: "Axios SSL certificate error — how to fix?",
    a: "In development, you can disable SSL verification: httpsAgent: new https.Agent({ rejectUnauthorized: false }). In production, install the correct SSL certificate or add the CA cert. Never disable SSL verification in production.",
  },
];

function AS() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Axios Network Error in Node.js — Fixed [Complete Guide 2026]",
          author: { "@type": "Organization", name: "Softplix" },
          publisher: {
            "@type": "Organization",
            name: "Softplix",
            url: "https://softplix.com",
          },
          datePublished: "2026-01-01",
          mainEntityOfPage: "category/node-js/error/axios-network-error-nodej",
        }),
      }}
    />
  );
}
function FS() {
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

const RELATED = [
  {
    tag: "Node.js",
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: dotenv not working in Node.js",
    href: "dotenv-not-working-nodejs",
    time: "5 min read",
  },
];

export default function Page() {
  return (
    <>
      <AS />
      <FS />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* <nav className="flex items-center gap-1.5 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-indigo-600">
              {"Home"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <Link href="/blog" className="hover:text-indigo-600">
              {"Blog"}
            </Link>
            <FaChevronRight className="text-[10px]" />
            <span className="text-gray-500">{"Axios Network Error"}</span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Axios", "Error Fix"].map((t) => (
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
              {"Axios Network Error in Node.js"}
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
                {"Node.js · Axios · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Debug First — Network Error Has Multiple Causes"}
            </p>
            <CodeBlock title="Debug Axios error">{`axios.get('/api/data').catch(error => {
  if (error.response) {
    // Server responded with error status (4xx, 5xx)
    console.log('Status:', error.response.status)
    console.log('Data:', error.response.data)
  } else if (error.request) {
    // Request sent but no response received
    console.log('No response:', error.request)
    console.log('Code:', error.code)  // ECONNREFUSED, ETIMEDOUT etc.
  } else {
    console.log('Request setup error:', error.message)
  }
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

          <SH id="what">{"What Causes Axios Network Error?"}</SH>
          <EB>{`AxiosError: Network Error
    at XMLHttpRequest.handleError (axios/lib/adapters/xhr.js:117:14)
# or in Node.js:
AxiosError: connect ECONNREFUSED 127.0.0.1:5000`}</EB>
          <P>
            {
              "Axios throws 'Network Error' when no response was received — the request never completed. This is different from a 4xx or 5xx error (where the server responded with an error). Network Error means something prevented the response from arriving at all."
            }
          </P>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Scenario"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Root Cause"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Browser: works in Postman not browser",
                    "CORS — browser blocking response",
                    "#fix-2",
                  ],
                  [
                    "Node.js: ECONNREFUSED",
                    "Server not running on that port",
                    "#fix-4",
                  ],
                  [
                    "Request hangs then fails",
                    "Timeout — server too slow",
                    "#fix-6",
                  ],
                  [
                    "SSL/TLS error",
                    "Certificate invalid or self-signed",
                    "#fix-5",
                  ],
                  [
                    "Wrong data in response",
                    "Wrong base URL or endpoint",
                    "#fix-3",
                  ],
                ].map(([s, c, h]) => (
                  <tr key={s} className="border-b border-gray-50 last:border-0">
                    <td className="px-5 py-3 text-gray-700 text-sm">{s}</td>
                    <td className="px-5 py-3 text-gray-500 text-sm">{c}</td>
                    <td className="px-5 py-3">
                      <a
                        href={h}
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

          <FC
            n="1"
            title="Diagnose With error.response and error.request"
            time="2 min"
            tag="Identify the exact cause first"
          >
            <CodeBlock title="Complete Axios error handler">{`const handleAxiosError = (error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      // Server responded with non-2xx status
      console.error('Server error:', error.response.status, error.response.data)
    } else if (error.request) {
      // Request was made but no response
      console.error('Network error - no response received')
      console.error('Error code:', error.code)
      // ECONNREFUSED = server not running
      // ETIMEDOUT    = server too slow
      // ERR_NETWORK  = CORS or DNS failure (browser)
    } else {
      // Request setup error
      console.error('Request error:', error.message)
    }
  }
}

// Usage
try {
  const res = await axios.get('/api/data')
} catch (error) {
  handleAxiosError(error)
}`}</CodeBlock>
          </FC>

          <FC
            n="2"
            title="CORS Error in Browser Context"
            time="2 min"
            tag="Works in Node.js but fails in browser"
          >
            <P>
              {
                "In a browser, Axios Network Error is almost always a CORS issue. The request reaches the server but the browser blocks the response because the server is missing "
              }
              <IC>{"Access-Control-Allow-Origin"}</IC>
              {"."}
            </P>
            <CodeBlock title="server.js — fix on the backend">{`const cors = require('cors')
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))`}</CodeBlock>
            <Tip>
              {
                "Check the browser Network tab in DevTools. If the request shows a red CORS error, the fix is on the server — not in Axios."
              }
            </Tip>
          </FC>

          <FC
            n="3"
            title="Wrong Base URL or Endpoint"
            time="1 min"
            tag="404 or no response"
          >
            <CodeBlock title="Verify your Axios config">{`// Log the full URL Axios is requesting
axios.interceptors.request.use(config => {
  console.log('Requesting:', config.baseURL + config.url)
  return config
})

// Common mistakes
axios.get('localhost:5000/api/data')        // ❌ missing http://
axios.get('http://localhost:5000api/data')  // ❌ missing /
axios.get('http://localhost:3000/api/data') // ❌ wrong port

// Correct
axios.get('http://localhost:5000/api/data') // ✅

// Best practice — set baseURL once
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000',
  timeout: 10000,
})`}</CodeBlock>
          </FC>

          <FC
            n="4"
            title="Server Not Running (ECONNREFUSED)"
            time="1 min"
            tag="Node.js: connect ECONNREFUSED"
          >
            <P>
              {
                "ECONNREFUSED means nothing is listening on that port. Start your backend server and verify the port."
              }
            </P>
            <CodeBlock title="terminal">{`# Verify server is running and on correct port
curl http://localhost:5000/api/health
# If this fails — server is not running

# Check what is on the port
lsof -i :5000         # macOS/Linux
netstat -ano | findstr :5000   # Windows

# Start your server
npm start
# or
node server.js`}</CodeBlock>
          </FC>

          <FC
            n="5"
            title="SSL Certificate Errors"
            time="3 min"
            tag="DEPTH_ZERO_SELF_SIGNED_CERT / unable to verify"
          >
            <CodeBlock title="Node.js Axios — disable SSL in development">{`const https = require('https')

const api = axios.create({
  // Development only — NEVER in production
  httpsAgent: new https.Agent({ rejectUnauthorized: false })
})

// Production — use proper certificate
// or add your CA cert:
const httpsAgent = new https.Agent({
  ca: require('fs').readFileSync('/path/to/ca-cert.pem')
})
const api = axios.create({ httpsAgent })`}</CodeBlock>
            <Warn>
              {
                "Never use rejectUnauthorized: false in production. It disables certificate validation completely and makes HTTPS meaningless."
              }
            </Warn>
          </FC>

          <FC
            n="6"
            title="Timeout Configuration"
            time="2 min"
            tag="Request hangs — ETIMEDOUT or ECONNABORTED"
          >
            <CodeBlock title="Axios timeout setup">{`// Set timeout on axios instance (milliseconds)
const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 10000,   // 10 seconds
})

// Or per request
axios.get('/api/slow-endpoint', { timeout: 30000 })

// Handle timeout specifically
axios.get('/api/data').catch(error => {
  if (error.code === 'ECONNABORTED') {
    console.error('Request timed out')
  }
})`}</CodeBlock>
          </FC>

          <FC
            n="7"
            title="Proxy Configuration"
            time="3 min"
            tag="Corporate network or custom proxy"
          >
            <CodeBlock title="Axios proxy config">{`// Set HTTP proxy
const api = axios.create({
  proxy: {
    protocol: 'http',
    host: 'proxy.company.com',
    port: 8080,
    auth: { username: 'user', password: 'pass' }
  }
})

// Disable proxy for specific requests
axios.get('/api/data', { proxy: false })

// Use environment variables (Axios reads these automatically)
// HTTP_PROXY=http://proxy.company.com:8080
// NO_PROXY=localhost,127.0.0.1`}</CodeBlock>
          </FC>

          <FC
            n="8"
            title="Proper Axios Error Handling"
            time="3 min"
            tag="Production-ready error handling pattern"
          >
            <CodeBlock title="api.js — production pattern">{`import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000',
  timeout: 15000,
  withCredentials: true,
})

// Request interceptor — add auth token
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) config.headers.Authorization = \`Bearer \${token}\`
    return config
  },
  error => Promise.reject(error)
)

// Response interceptor — handle errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Redirect to login
      window.location.href = '/login'
    }
    if (error.code === 'ERR_NETWORK') {
      console.error('Network error — check server and CORS')
    }
    return Promise.reject(error)
  }
)

export default api`}</CodeBlock>
          </FC>

          <SH id="prevention">{"How to Prevent Axios Network Errors"}</SH>
          <CL
            items={[
              "Set a baseURL on your Axios instance — avoid hardcoded URLs scattered across files",
              "Always add CORS middleware to your backend before routes",
              "Set a reasonable timeout — never let requests hang forever",
              "Use Axios interceptors for global error handling",
              "Verify server is running before testing frontend",
              "Use environment variables for API URLs — REACT_APP_API_URL or NEXT_PUBLIC_API_URL",
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
                "Softplix builds full-stack applications. Dealing with API integration issues in production? We can help."
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
