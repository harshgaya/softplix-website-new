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
  title: "Node.js App Not Starting on Server — PM2 & Production Fixed [2026]",
  description:
    "Fix Node.js app not starting on server, PM2 app not starting, and Node.js app crashing on production. Covers missing node_modules, environment variables, PM2 config, port issues, and deployment checklists.",
  keywords:
    "nodejs app not starting on server, pm2 app not starting, nodejs app crashing on production, node server not starting linux 2026, pm2 startup fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-app-not-starting-on-server",
  },
  openGraph: {
    title: "Node.js App Not Starting on Server — PM2 & Production Fixed [2026]",
    description:
      "Fix Node.js not starting on server, PM2 errors, and production crashes — complete guide.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-app-not-starting-on-server",
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
  { label: "Diagnose — read the logs first", href: "#diagnose" },
  { label: "Fix 1 — Run npm install on the server", href: "#fix-1" },
  { label: "Fix 2 — Set environment variables in production", href: "#fix-2" },
  { label: "Fix 3 — Wrong Node.js version on server", href: "#fix-3" },
  { label: "Fix 4 — Port permission or conflict", href: "#fix-4" },
  { label: "Fix 5 — PM2 app not starting", href: "#fix-5" },
  { label: "Fix 6 — PM2 starts but app crashes in a loop", href: "#fix-6" },
  {
    label: "Fix 7 — App works locally but crashes in production",
    href: "#fix-7",
  },
  { label: "Fix 8 — Auto-start PM2 on server reboot", href: "#fix-8" },
  { label: "Production deployment checklist", href: "#checklist" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is my Node.js app not starting on the server?",
    a: "The most common causes are: missing node_modules (run npm install), missing environment variables (.env not on server — set them via platform dashboard or manually), wrong Node.js version, port already in use, or a syntax/runtime error. Check logs: pm2 logs or node server.js directly to see the exact error.",
  },
  {
    q: "How do I check PM2 logs for why an app is not starting?",
    a: "Run pm2 logs app-name to see real-time logs. Or pm2 logs app-name --lines 100 for the last 100 lines. For the full error on crash: pm2 describe app-name shows the exit code and restart count.",
  },
  {
    q: "PM2 shows online but app returns 502 bad gateway?",
    a: "Your Node.js app is running but crashed internally — PM2 shows the process but the HTTP server failed. Check pm2 logs for errors inside the app. Usually a missing env variable causes the DB connection to fail on startup.",
  },
  {
    q: "Node.js app works locally but not on server — why?",
    a: "Common differences: different environment variables (database URLs, secrets), different Node.js version, missing node_modules (always run npm install on server), different OS path separators, or less available memory on server.",
  },
  {
    q: "How do I make PM2 start on server reboot?",
    a: "Run: pm2 startup — this prints a command to run as root. Run that command. Then: pm2 save — saves the current process list. On reboot, PM2 automatically restarts all saved processes.",
  },
  {
    q: "App crashes on production under load but not locally — why?",
    a: "Production-only causes: concurrent requests revealing race conditions, memory limits being hit under real traffic, unhandled promise rejections that only occur with real data, or rate limiting from external APIs. Enable error tracking (Sentry) to capture crash context.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Node.js App Not Starting on Server — PM2 & Production Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-app-not-starting-on-server",
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
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: UnhandledPromiseRejectionWarning",
    href: "unhandled-promise-rejection-warning",
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
            <span className="text-gray-500">
              {"App Not Starting on Server"}
            </span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "PM2", "Production"].map((t) => (
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
              {"Node.js App Not Starting on Server"}
              <span className="block text-indigo-600">
                {"— PM2 & Production Fixed [2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              {
                "Also covers: PM2 app not starting · Node.js app crashing on production"
              }
            </p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"8 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"Node.js · PM2 · Linux"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ First Step — Read the Logs"}
            </p>
            <CodeBlock title="terminal">{`# Direct Node — shows error immediately
node server.js

# PM2 — view logs
pm2 logs my-app
pm2 logs my-app --lines 200

# PM2 — full process info
pm2 describe my-app`}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "The error message tells you exactly what is wrong. Match it to the fixes below."
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

          <SH id="diagnose">{"Diagnose — Read the Logs First"}</SH>
          <P>
            {
              "Every startup failure has a specific error message. The fix depends entirely on reading it. Here is the fastest way to see what is happening:"
            }
          </P>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error in logs"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Cannot find module", "Run npm install — Fix 1"],
                  [
                    "undefined (env variable)",
                    "Set environment variables — Fix 2",
                  ],
                  [
                    "SyntaxError / ReferenceError",
                    "Code error — fix the bug then redeploy",
                  ],
                  ["EADDRINUSE: port already in use", "Kill the port — Fix 4"],
                  ["EACCES: permission denied", "Port below 1024 — Fix 4"],
                  [
                    "MongoServerSelectionError",
                    "DB env var not set or IP not whitelisted",
                  ],
                  [
                    "Exit code 1, no error shown",
                    "Run node server.js directly to see error",
                  ],
                ].map(([e, f]) => (
                  <tr
                    key={e}
                    className="border-b border-gray-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-mono text-xs text-red-600">
                      {e}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm font-semibold">
                      {f}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <FixCard
            number="1"
            title="Run npm install on the Server"
            time="2 min"
            tag="Cannot find module — missing node_modules"
          >
            <P>
              {
                "node_modules is in .gitignore and never deployed. After every deployment or git pull, you must run npm install on the server."
              }
            </P>
            <CodeBlock title="terminal — on your server">{`cd /home/ubuntu/myapp

# Install all dependencies
npm install

# For production — faster, deterministic, no devDependencies
npm ci --omit=dev

# Verify a specific package installed
ls node_modules | grep express

# Then restart
pm2 restart my-app
# or
node server.js`}</CodeBlock>
            <TipBox>
              {
                "Add npm install (or npm ci) to your deployment script or CI/CD pipeline so it runs automatically on every deploy."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Set Environment Variables in Production"
            time="5 min"
            tag="process.env undefined — database, secrets not loaded"
          >
            <P>
              {
                "Your .env file is in .gitignore and is never deployed. Production servers need environment variables set through a different mechanism."
              }
            </P>
            <H3>{"Option A — set manually on the server"}</H3>
            <CodeBlock title="terminal — on your server">{`# Create .env manually on server (not in git)
nano /home/ubuntu/myapp/.env
# Add: DATABASE_URL=mongodb+srv://...
# Add: SESSION_SECRET=...
# Add: NODE_ENV=production

# Then load it with dotenv as normal
# require('dotenv').config() in your code`}</CodeBlock>
            <H3>{"Option B — PM2 ecosystem file"}</H3>
            <CodeBlock title="ecosystem.config.js">{`module.exports = {
  apps: [{
    name: 'my-app',
    script: 'server.js',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
      DATABASE_URL: 'mongodb+srv://user:pass@cluster.mongodb.net/mydb',
      SESSION_SECRET: 'your-secret-here',
    }
  }]
}

// Start: pm2 start ecosystem.config.js --env production`}</CodeBlock>
            <H3>{"Option C — platform environment variables"}</H3>
            <CodeBlock>
              {
                "# Heroku\nheroku config:set DATABASE_URL=mongodb+srv://...\n\n# Railway / Render\n# Dashboard → Variables tab → add each key/value\n\n# DigitalOcean App Platform\n# App → Settings → App-Level Environment Variables"
              }
            </CodeBlock>
            <WarnBox>
              {
                "Never commit .env to git. Never hardcode production secrets in ecosystem.config.js if that file is committed. Use your platform's secret management."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="3"
            title="Wrong Node.js Version on Server"
            time="5 min"
            tag="Syntax errors that only occur on older Node versions"
          >
            <CodeBlock title="terminal">{`# Check Node version on server
node --version

# Check what version your app requires
cat package.json | grep '"node"'
# "engines": { "node": ">=20.0.0" }

# If version is wrong — install correct version via nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.bashrc
nvm install 20
nvm use 20
nvm alias default 20

# Verify
node --version   # v20.x.x`}</CodeBlock>
            <TipBox>
              {
                'Add an engines field to package.json to document required Node version: "engines": { "node": ">=20.0.0" }. This causes npm install to warn if the version is wrong.'
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Port Permission or Conflict"
            time="2 min"
            tag="EADDRINUSE or EACCES on startup"
          >
            <CodeBlock title="terminal">{`# Port already in use
kill -9 $(lsof -ti:3000)

# Permission denied on port 80 — use port 3000+ and nginx instead
# Or grant Node the capability:
sudo setcap 'cap_net_bind_service=+ep' $(which node)

# With PM2 — kill PM2's port before restart
pm2 stop my-app
kill -9 $(lsof -ti:3000)
pm2 start my-app`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="PM2 App Not Starting"
            time="5 min"
            tag="PM2 shows errored or stopped status"
          >
            <H3>{"Diagnose PM2 errors"}</H3>
            <CodeBlock title="terminal">{`# See all apps and their status
pm2 list

# See full details of a specific app
pm2 describe my-app

# View logs (most important — shows the actual error)
pm2 logs my-app
pm2 logs my-app --err --lines 100  # errors only

# View logs file directly
cat ~/.pm2/logs/my-app-error.log

# Test by running directly (shows errors in terminal)
pm2 stop my-app
node server.js   # run manually to see raw error output`}</CodeBlock>

            <H3>{"Common PM2 fixes"}</H3>
            <CodeBlock title="terminal">{`# Wrong script path — verify file exists
ls server.js
ls src/index.js

# Fix script path in PM2
pm2 stop my-app
pm2 delete my-app
pm2 start server.js --name my-app

# Or use ecosystem.config.js (recommended)
pm2 start ecosystem.config.js

# Regenerate PM2 startup config
pm2 unstartup
pm2 startup
# (run the printed command as root)
pm2 save`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="PM2 Starts But App Crashes in a Loop"
            time="3 min"
            tag="restart_count keeps climbing"
          >
            <P>
              {
                "If PM2 shows an app as 'online' but it is restarting every few seconds, the app is crashing immediately after start. The process manager brings it back up, it crashes again — a crash loop."
              }
            </P>
            <CodeBlock title="terminal">{`# Check restart count
pm2 list   # look at restarts column

# Stop the crash loop — prevent PM2 from restarting
pm2 stop my-app

# Run directly to see the raw error
node server.js

# Common causes of crash loops:
# - Missing DATABASE_URL  → MongoServerSelectionError
# - PORT already in use   → EADDRINUSE
# - SyntaxError           → parsing failure
# - Missing npm install   → Cannot find module`}</CodeBlock>
            <CodeBlock title="ecosystem.config.js — limit restart attempts">{`module.exports = {
  apps: [{
    name: 'my-app',
    script: 'server.js',
    max_restarts: 5,          // stop trying after 5 crashes
    restart_delay: 3000,      // wait 3 seconds between restarts
    min_uptime: '5s',         // must stay up 5s to count as successful
    max_memory_restart: '500M',
  }]
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="7"
            title="App Works Locally But Crashes in Production"
            time="5 min"
            tag="Environment differences between local and server"
          >
            <P>
              {
                "Production crashes that do not happen locally are caused by environment differences. Work through this checklist systematically:"
              }
            </P>
            <CheckList
              items={[
                "NODE_ENV is set to 'production' — some libraries behave differently",
                "All environment variables set — compare .env.example with production config",
                "Database connection string is correct — Atlas IP whitelisted for production server IP",
                "Node.js version matches — check node --version on both machines",
                "npm install was run after latest deployment",
                "File permissions correct — app can read/write its required directories",
                "Memory limit — production server may have less RAM than local machine",
              ]}
            />
            <CodeBlock title="terminal — add startup validation">{`// server.js — validate all required env vars at startup
const required = [
  'DATABASE_URL',
  'SESSION_SECRET',
  'PORT',
]

const missing = required.filter(key => !process.env[key])
if (missing.length > 0) {
  console.error('Missing required environment variables:', missing)
  process.exit(1)   // fail fast with clear message
}

console.log('All required env vars present — starting server...')`}</CodeBlock>
          </FixCard>

          <FixCard
            number="8"
            title="Auto-Start PM2 on Server Reboot"
            time="3 min"
            tag="Keep app running after server restarts"
          >
            <CodeBlock title="terminal">{`# Step 1 — generate startup script for your OS
pm2 startup
# Output: [PM2] To setup the Startup Script, copy/paste the following command:
# sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
# ← run that exact command

# Step 2 — save current process list
pm2 save
# [PM2] Saving current process list...
# [PM2] Successfully saved in /home/ubuntu/.pm2/dump.pm2

# Step 3 — verify
sudo reboot
# After reboot: pm2 list   ← should show your apps running`}</CodeBlock>
            <TipBox>
              {
                "After any change to your PM2 process list (new apps, deleted apps), run pm2 save again to update what starts on reboot."
              }
            </TipBox>
          </FixCard>

          <SH id="checklist">{"Production Deployment Checklist"}</SH>
          <div className="my-6 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <ol className="space-y-3">
              {[
                {
                  step: "git pull (or rsync/deploy files)",
                  note: "Get latest code onto server",
                },
                { step: "npm ci --omit=dev", note: "Reinstall dependencies" },
                {
                  step: "Verify environment variables",
                  note: "Check all required vars are set",
                },
                {
                  step: "node --check server.js",
                  note: "Validate syntax without running",
                },
                { step: "pm2 restart my-app", note: "Restart with new code" },
                {
                  step: "pm2 logs my-app",
                  note: "Watch logs for 30 seconds after restart",
                },
                {
                  step: "curl http://localhost:3000/health",
                  note: "Hit a health check endpoint",
                },
                {
                  step: "pm2 save",
                  note: "Persist current process list for reboots",
                },
              ].map(({ step, note }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-mono text-xs text-indigo-700 bg-white border border-gray-100 rounded px-2 py-1 inline-block mb-1">
                      {step}
                    </p>
                    <p className="text-gray-500 text-xs">{note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

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
              {"We Deploy & Manage Production Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix builds and deploys full-stack applications. Struggling with production deployment or PM2 setup? We can help configure a stable, zero-downtime deployment."
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
