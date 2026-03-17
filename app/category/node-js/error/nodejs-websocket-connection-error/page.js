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
  title: "Node.js WebSocket Connection Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Node.js WebSocket connection errors. Configure Socket.IO and ws correctly, fix CORS for WebSockets, handle disconnects and reconnections, and deploy WebSockets behind nginx.",
  keywords:
    "nodejs websocket connection error, socket.io connection error fix, websocket cors error nodejs, socket.io not connecting 2026, ws connection error nodejs",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-websocket-connection-error",
  },
  openGraph: {
    title: "Node.js WebSocket Connection Error — Fixed [Complete Guide 2026]",
    description:
      "Fix Node.js WebSocket connection errors — Socket.IO, ws, CORS, nginx, reconnection.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-websocket-connection-error",
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
          {"Browser / Terminal Error"}
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
  { label: "Diagnose your WebSocket error", href: "#diagnose" },
  { label: "Fix 1 — Socket.IO CORS configuration", href: "#fix-1" },
  { label: "Fix 2 — Socket.IO correct server setup", href: "#fix-2" },
  { label: "Fix 3 — Client connecting to wrong URL", href: "#fix-3" },
  { label: "Fix 4 — Handle disconnects and reconnection", href: "#fix-4" },
  { label: "Fix 5 — WebSocket behind nginx (production)", href: "#fix-5" },
  { label: "Fix 6 — Raw ws library connection errors", href: "#fix-6" },
  { label: "Fix 7 — Authenticate WebSocket connections", href: "#fix-7" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is Socket.IO not connecting?",
    a: "Most common causes: CORS not configured (add cors option to Socket.IO server), client connecting to wrong URL or port, nginx not configured for WebSocket upgrade, or the HTTP server is not passed to Socket.IO correctly.",
  },
  {
    q: "How do I fix WebSocket CORS error in Node.js?",
    a: "In Socket.IO: const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000', credentials: true } }). This is separate from Express cors — Socket.IO has its own CORS config.",
  },
  {
    q: "Socket.IO works locally but not in production?",
    a: "nginx is likely blocking the WebSocket upgrade. Add these lines to your nginx location block: proxy_http_version 1.1; proxy_set_header Upgrade $http_upgrade; proxy_set_header Connection 'upgrade'. Without these, nginx closes WebSocket connections.",
  },
  {
    q: "What is the difference between Socket.IO and ws?",
    a: "ws is a lightweight WebSocket library — pure WebSocket protocol. Socket.IO uses WebSocket underneath but adds rooms, namespaces, auto-reconnection, fallback to long-polling, and a custom event system. Use ws for simple cases, Socket.IO for feature-rich real-time apps.",
  },
  {
    q: "How do I handle WebSocket disconnects gracefully?",
    a: "On the server: io.on('connection', socket => { socket.on('disconnect', reason => { console.log('Disconnected:', reason) }) }). On the client: Socket.IO auto-reconnects by default. Configure: { reconnectionAttempts: 5, reconnectionDelay: 1000 }",
  },
  {
    q: "WebSocket connection closes immediately — why?",
    a: "Common causes: server-side error during connection handler, authentication failure, CORS rejection, or an exception in the connection event listener crashing the socket. Add error event handler: socket.on('error', console.error) and check server logs.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Node.js WebSocket Connection Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-websocket-connection-error",
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
    title: "Fix: CORS error in Node.js",
    href: "cors-error-nodejs",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js JWT authentication error",
    href: "nodejs-jwt-authentication-error",
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server crashing automatically",
    href: "nodejs-server-crashing-automatically",
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
            <span className="text-gray-500">
              {"WebSocket Connection Error"}
            </span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "Socket.IO", "Error Fix"].map((t) => (
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
              {"Node.js WebSocket Connection Error"}
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
                {"Node.js · Socket.IO · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Most Common Fix — Socket.IO CORS"}
            </p>
            <CodeBlock title="server.js">{`const { Server } = require('socket.io')

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
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

          <SH id="diagnose">{"Diagnose Your WebSocket Error"}</SH>
          <ErrorBlock>{`WebSocket connection to 'ws://localhost:5000/socket.io/?...' failed:
Error during WebSocket handshake: Unexpected response code: 400

# or:
Access to XMLHttpRequest at 'http://localhost:5000/socket.io/?...'
from origin 'http://localhost:3000' has been blocked by CORS policy`}</ErrorBlock>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error / Symptom"}
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
                    "CORS policy blocked",
                    "Socket.IO cors not configured",
                    "#fix-1",
                  ],
                  [
                    "Unexpected response code: 400",
                    "Server not passing httpServer to Socket.IO",
                    "#fix-2",
                  ],
                  [
                    "Connection refused / ERR_CONNECTION",
                    "Wrong port or URL on client",
                    "#fix-3",
                  ],
                  [
                    "Works locally, fails in production",
                    "nginx not forwarding WebSocket upgrade",
                    "#fix-5",
                  ],
                  [
                    "Disconnects every 60s",
                    "nginx proxy_read_timeout too short",
                    "#fix-5",
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
            title="Socket.IO CORS Configuration"
            time="2 min"
            tag="CORS policy blocked — most common issue"
          >
            <P>
              {
                "Socket.IO requires its own CORS configuration — separate from Express cors middleware."
              }
            </P>
            <CodeBlock title="server.js">{`const express = require('express')
const http    = require('http')
const { Server } = require('socket.io')
const cors    = require('cors')

const app    = express()
const server = http.createServer(app)

// Express cors (for REST routes)
app.use(cors({ origin: 'http://localhost:3000' }))

// Socket.IO cors (separate config!)
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'https://yourapp.com'],
    methods: ['GET', 'POST'],
    credentials: true,
  }
})

io.on('connection', (socket) => {
  console.log('Client connected:', socket.id)
  socket.on('disconnect', () => console.log('Client disconnected'))
})

server.listen(5000)`}</CodeBlock>
            <WarnBox>
              {
                "Using origin: '*' with credentials: true is invalid. Specify exact origins when using credentials."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Correct Socket.IO Server Setup"
            time="3 min"
            tag="400 error — Socket.IO not attached to HTTP server"
          >
            <P>
              {
                "Socket.IO must be attached to the HTTP server, not the Express app directly. This is a very common mistake."
              }
            </P>
            <CodeBlock title="server.js">{`const express = require('express')
const http    = require('http')
const { Server } = require('socket.io')

const app    = express()

// ❌ WRONG — passing Express app to Socket.IO
// const io = new Server(app, { ... })  // 400 errors!

// ✅ CORRECT — create HTTP server from Express, pass that
const server = http.createServer(app)
const io     = new Server(server, {
  cors: { origin: 'http://localhost:3000' }
})

io.on('connection', (socket) => {
  console.log('Connected:', socket.id)

  // Emit to this client
  socket.emit('welcome', { message: 'Connected!' })

  // Receive from client
  socket.on('message', (data) => {
    console.log('Received:', data)
    // Broadcast to all clients
    io.emit('message', data)
  })
})

// Listen on the HTTP server — not app.listen()
server.listen(5000, () => console.log('Server on port 5000'))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Client Connecting to Wrong URL"
            time="1 min"
            tag="Connection refused — wrong port or protocol"
          >
            <CodeBlock title="Frontend client">{`import { io } from 'socket.io-client'

// ❌ WRONG — common URL mistakes
const socket = io('http://localhost:3000')  // wrong port (backend is on 5000)
const socket = io('ws://localhost:5000')    // Socket.IO uses http/https, not ws://
const socket = io()                         // no URL — may resolve wrong

// ✅ CORRECT — explicit URL matching backend port
const socket = io('http://localhost:5000')

// Production — use environment variable
const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000')

// Debug — log connection status
socket.on('connect', () => console.log('Connected:', socket.id))
socket.on('connect_error', (err) => console.error('Connection error:', err.message))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Handle Disconnects and Auto-Reconnection"
            time="3 min"
            tag="Connections dropping — robust client setup"
          >
            <H3>{"Server — handle disconnection events"}</H3>
            <CodeBlock title="server.js">{`io.on('connection', (socket) => {
  const { userId } = socket.handshake.auth

  // Track user sessions
  userSockets.set(userId, socket.id)

  socket.on('disconnect', (reason) => {
    console.log(\`User \${userId} disconnected: \${reason}\`)
    userSockets.delete(userId)
    // Notify others
    io.emit('user:offline', { userId })
  })

  socket.on('error', (err) => {
    console.error('Socket error:', err)
  })
})`}</CodeBlock>

            <H3>{"Client — robust reconnection config"}</H3>
            <CodeBlock title="Frontend">{`const socket = io('http://localhost:5000', {
  reconnection: true,          // auto-reconnect (default: true)
  reconnectionAttempts: 10,    // try 10 times before giving up
  reconnectionDelay: 1000,     // start with 1s delay
  reconnectionDelayMax: 5000,  // max 5s between attempts
  auth: { token: localStorage.getItem('token') },  // send auth token
})

socket.on('connect', () => {
  console.log('Connected')
  // Re-join rooms after reconnection
  socket.emit('join:room', { roomId: currentRoom })
})

socket.on('disconnect', (reason) => {
  console.log('Disconnected:', reason)
  if (reason === 'io server disconnect') {
    // Server intentionally disconnected — reconnect manually
    socket.connect()
  }
})

socket.on('reconnect', (attempt) => {
  console.log('Reconnected after', attempt, 'attempts')
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="WebSocket Behind nginx (Production)"
            time="5 min"
            tag="Works locally but fails in production"
          >
            <P>
              {
                "nginx does not forward WebSocket connections by default. Without the Upgrade headers, nginx closes the WebSocket connection as a regular HTTP request."
              }
            </P>
            <CodeBlock title="/etc/nginx/sites-available/myapp">{`server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;

        # ← These two lines are REQUIRED for WebSockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

        # Prevent nginx from closing idle WebSocket connections
        proxy_read_timeout 86400;
        proxy_send_timeout 86400;
    }
}`}</CodeBlock>
            <CodeBlock title="terminal">
              {
                "sudo nginx -t          # test config\nsudo systemctl reload nginx"
              }
            </CodeBlock>
            <TipBox>
              {
                "proxy_read_timeout 86400 sets the timeout to 24 hours. Without this, nginx closes WebSocket connections that are idle for more than 60 seconds (the default)."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="Raw ws Library Connection Errors"
            time="3 min"
            tag="Using ws package instead of Socket.IO"
          >
            <CodeBlock title="terminal">{"npm install ws"}</CodeBlock>
            <CodeBlock title="server.js — ws server">{`const { WebSocketServer } = require('ws')
const http = require('http')

const server = http.createServer()
const wss    = new WebSocketServer({ server })

wss.on('connection', (ws, req) => {
  const origin = req.headers.origin
  console.log('Connection from:', origin)

  ws.on('message', (data) => {
    console.log('Received:', data.toString())
    // Echo back
    ws.send(\`Echo: \${data}\`)
  })

  ws.on('error', (err) => console.error('WebSocket error:', err))
  ws.on('close', (code, reason) => {
    console.log('Closed:', code, reason.toString())
  })

  ws.send('Welcome!')
})

server.listen(5000)`}</CodeBlock>
            <CodeBlock title="Client — native WebSocket API">{`const ws = new WebSocket('ws://localhost:5000')

ws.addEventListener('open', () => {
  console.log('Connected')
  ws.send('Hello server!')
})

ws.addEventListener('message', (event) => {
  console.log('Received:', event.data)
})

ws.addEventListener('error', (error) => {
  console.error('WebSocket error:', error)
})

ws.addEventListener('close', (event) => {
  console.log('Disconnected:', event.code, event.reason)
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="Authenticate WebSocket Connections"
            time="3 min"
            tag="JWT auth for Socket.IO"
          >
            <CodeBlock title="server.js">{`const jwt = require('jsonwebtoken')

// Middleware runs before connection event
io.use((socket, next) => {
  const token = socket.handshake.auth.token

  if (!token) {
    return next(new Error('Authentication required'))
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    socket.userId = payload.userId  // attach to socket
    next()
  } catch (err) {
    next(new Error('Invalid token'))
  }
})

io.on('connection', (socket) => {
  console.log('Authenticated user:', socket.userId)
})`}</CodeBlock>
            <CodeBlock title="Frontend — send token">{`const socket = io('http://localhost:5000', {
  auth: {
    token: localStorage.getItem('authToken')
  }
})`}</CodeBlock>
          </FixCard>

          <SH id="prevention">
            {"How to Prevent WebSocket Connection Errors"}
          </SH>
          <CheckList
            items={[
              "Always pass the HTTP server to Socket.IO — not the Express app",
              "Configure Socket.IO cors separately from Express cors",
              "Add proxy_set_header Upgrade and Connection 'upgrade' to nginx config",
              "Set proxy_read_timeout 86400 in nginx to prevent idle disconnects",
              "Implement reconnection handling on the client",
              "Add authentication middleware to Socket.IO before the connection event",
              "Log socket.on('connect_error') on client for immediate feedback",
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
              {"We Build Real-Time Node.js Applications"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds real-time applications with Socket.IO and WebSockets. Need help with a chat app, live dashboard, or notification system? We can help."
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
