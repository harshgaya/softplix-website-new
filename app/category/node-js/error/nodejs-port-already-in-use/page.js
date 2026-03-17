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
  title: "Node.js Port Already in Use — Fixed [Complete Guide 2026]",
  description:
    "Fix Node.js port already in use error instantly. Kill the process on port 3000, 8080, or any port with copy-paste commands for macOS, Windows, and Linux. Includes prevention tips.",
  keywords:
    "nodejs port already in use, node port already in use fix, kill process on port 3000, port 3000 already in use, nodejs port conflict fix 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-port-already-in-use",
  },
  openGraph: {
    title: "Node.js Port Already in Use — Fixed [Complete Guide 2026]",
    description:
      "Fix Node.js port already in use — kill commands for macOS, Windows, Linux.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-port-already-in-use",
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
  { label: "What causes port already in use?", href: "#what-it-means" },
  { label: "Fix 1 — Kill the port — macOS / Linux", href: "#fix-1" },
  { label: "Fix 2 — Kill the port — Windows", href: "#fix-2" },
  { label: "Fix 3 — Find exactly what is using the port", href: "#fix-3" },
  { label: "Fix 4 — Change your app port", href: "#fix-4" },
  { label: "Fix 5 — Auto-kill port on every dev restart", href: "#fix-5" },
  { label: "Fix 6 — Docker port conflict", href: "#fix-6" },
  { label: "Kill commands for every OS — quick table", href: "#quick-table" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does Node.js say port is already in use?",
    a: "Another process is listening on the same port. Either a previous Node.js server did not shut down cleanly, another application is using the same port, or you started your server twice in different terminals.",
  },
  {
    q: "How do I kill a process on port 3000 on Mac?",
    a: "Run kill -9 $(lsof -ti:3000) in your terminal. This finds the process ID using port 3000 and kills it in one command. Replace 3000 with your actual port.",
  },
  {
    q: "How do I kill a process on port 3000 on Windows?",
    a: "Run: netstat -ano | findstr :3000 to find the PID, then: taskkill /PID <PID> /F to kill it. Replace <PID> with the number from the first command.",
  },
  {
    q: "Port still in use after killing the process — why?",
    a: "Windows has a TCP TIME_WAIT period where the OS keeps a port reserved for ~4 minutes after a process releases it. Either wait a few minutes or use a different port temporarily.",
  },
  {
    q: "How do I prevent port already in use in development?",
    a: "Use the kill-port npm package in your dev script: 'dev': 'kill-port 3000 && nodemon server.js'. Or always stop your server with Ctrl+C before restarting.",
  },
  {
    q: "Node.js port already in use in Docker?",
    a: "Another container is bound to the same host port. Run docker ps to list containers and docker stop <id> to stop the conflicting one. Or change your Docker port mapping: -p 3001:3000.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js Port Already in Use — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-port-already-in-use",
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
    title: "Fix: Error listen EADDRINUSE address already in use",
    href: "error-listen-eaddrinuse-address-already-in-use",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Error listen EACCES permission denied",
    href: "error-listen-eacces-permission-denied",
    time: "4 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
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
              {"Node.js Port Already in Use"}
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
              {"Node.js Port Already in Use"}
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
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Kill whatever is on the port, then restart your server:"}
            </p>
            <CodeBlock title="macOS / Linux — one command">
              {"kill -9 $(lsof -ti:3000)   # replace 3000 with your port"}
            </CodeBlock>
            <CodeBlock title="Windows PowerShell">
              {"netstat -ano | findstr :3000\ntaskkill /PID <PID_NUMBER> /F"}
            </CodeBlock>
            <p className="text-xs text-green-700">
              {
                "After killing — wait 2 seconds, then run npm start or npm run dev again."
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

          <SectionHeading id="what-it-means">
            {"What Causes Port Already in Use?"}
          </SectionHeading>

          <ErrorBlock>{`Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1318:16)
    at listenInCluster (net.js:1366:12)
    at Server.listen (net.js:1452:7)`}</ErrorBlock>

          <Prose>
            {
              "Your Node.js app tried to bind to a port that another process is already listening on. The OS only allows one process per port at a time. This is almost always caused by one of these:"
            }
          </Prose>

          <CheckList
            items={[
              "A previous npm start did not shut down properly — the server is still running in the background",
              "You opened a second terminal and started the server again",
              "nodemon crashed mid-restart and left the old process running",
              "macOS AirPlay Receiver is using port 5000 (common on macOS Monterey+)",
              "Another app — a database, nginx, or another Node server — is on the same port",
              "In Docker — another container is mapped to the same host port",
            ]}
          />

          <TipBox>
            {
              "Quick diagnostic: run lsof -i :3000 (macOS/Linux) or netstat -ano | findstr :3000 (Windows). The output shows exactly which process is holding the port."
            }
          </TipBox>

          <FixCard
            number="1"
            title="Kill the Port — macOS / Linux"
            time="30 sec"
            tag="One command fix"
          >
            <SubHeading>{"One-liner — fastest way"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Kill whatever is on port 3000\nkill -9 $(lsof -ti:3000)\n\n# Other common ports\nkill -9 $(lsof -ti:8080)\nkill -9 $(lsof -ti:5000)\nkill -9 $(lsof -ti:4000)"
              }
            </CodeBlock>

            <SubHeading>
              {"Step by step — see what you are killing first"}
            </SubHeading>
            <CodeBlock title="terminal">
              {
                "# Step 1: Find what is on the port\nlsof -i :3000\n# Shows: COMMAND, PID, USER, TYPE, NODE, NAME\n# Example output:\n# node    14523  john   IPv6  TCP  *:3000 (LISTEN)\n\n# Step 2: Kill using the PID\nkill -9 14523"
              }
            </CodeBlock>

            <SubHeading>{"Linux fuser command"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "fuser -k 3000/tcp\n\n# Verify port is free\nlsof -i :3000   # should return nothing now"
              }
            </CodeBlock>

            <TipBox>
              {
                "After killing the process, wait 2–3 seconds before restarting your server. The OS needs a brief moment to fully release the port."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Kill the Port — Windows"
            time="1 min"
            tag="Windows Command Prompt and PowerShell"
          >
            <SubHeading>{"Command Prompt"}</SubHeading>
            <CodeBlock title="cmd">
              {
                "# Step 1: Find PID on port 3000\nnetstat -ano | findstr :3000\n# Example output:\n# TCP    0.0.0.0:3000   0.0.0.0:0   LISTENING   14523\n#                                              ^^^^^ this is the PID\n\n# Step 2: Kill it\ntaskkill /PID 14523 /F"
              }
            </CodeBlock>

            <SubHeading>{"PowerShell — cleaner one-liner"}</SubHeading>
            <CodeBlock title="PowerShell">
              {
                "# Find and kill in two steps\n$pid = (Get-NetTCPConnection -LocalPort 3000).OwningProcess\nStop-Process -Id $pid -Force\n\n# Or check what process it is first\nGet-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess"
              }
            </CodeBlock>

            <SubHeading>{"If taskkill says Access is denied"}</SubHeading>
            <CodeBlock title="PowerShell (run as Administrator)">
              {
                "# Run PowerShell as Administrator then:\n$pid = (Get-NetTCPConnection -LocalPort 3000).OwningProcess\nStop-Process -Id $pid -Force"
              }
            </CodeBlock>

            <WarnBox>
              {
                "Windows sometimes keeps ports in TIME_WAIT state for ~4 minutes after a process is killed. If the port seems stuck, either wait a few minutes or switch to port 3001 temporarily."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="3"
            title="Find Exactly What Is Using the Port"
            time="1 min"
            tag="Identify before killing"
          >
            <Prose>
              {
                "Before killing a process — especially on shared or production servers — it is worth knowing what you are killing."
              }
            </Prose>

            <SubHeading>{"macOS / Linux — detailed view"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Full details of process on port 3000\nlsof -i :3000\n# Columns: COMMAND, PID, USER, FD, TYPE, DEVICE, SIZE, NODE, NAME\n\n# See ALL listening ports\nlsof -i -P -n | grep LISTEN\n\n# Linux — modern ss command\nss -tulpn | grep :3000\n\n# Linux — classic netstat\nnetstat -tlnp | grep :3000"
              }
            </CodeBlock>

            <SubHeading>{"Windows — see process name"}</SubHeading>
            <CodeBlock title="cmd">
              {
                '# Find PID\nnetstat -ano | findstr :3000\n\n# See what program owns the PID\ntasklist /FI "PID eq 14523"'
              }
            </CodeBlock>

            <TipBox>
              {
                "If the COMMAND column shows 'node' — safe to kill. If it shows 'nginx', 'postgres', 'mongod', or another service — change your Node.js port instead (Fix 4)."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Change Your App Port"
            time="1 min"
            tag="When you cannot or should not kill the process"
          >
            <Prose>
              {
                "If the port is being used by a critical service, the cleanest solution is changing your Node.js app to use a different port."
              }
            </Prose>
            <CodeBlock title="server.js">{`// Use environment variable for flexible port config
const PORT = process.env.PORT || 3001   // changed from 3000

app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`)
})`}</CodeBlock>

            <SubHeading>
              {"Run on different port without changing code"}
            </SubHeading>
            <CodeBlock title="terminal">
              {
                "PORT=3001 node server.js       # macOS / Linux\n$env:PORT=3001; node server.js  # Windows PowerShell"
              }
            </CodeBlock>

            <SubHeading>{"Update package.json scripts"}</SubHeading>
            <CodeBlock title="package.json">{`{
  "scripts": {
    "dev": "PORT=3001 nodemon server.js",
    "start": "node server.js"
  }
}`}</CodeBlock>

            <TipBox>
              {
                "Always use process.env.PORT — hosting platforms like Heroku, Railway, and Render set this automatically in production. Never hardcode a port number in production code."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="5"
            title="Auto-Kill Port on Every Dev Restart"
            time="2 min"
            tag="Development workflow — never hit this again"
          >
            <Prose>
              {
                "Set up your dev workflow to kill the port automatically before every restart so you never manually deal with this again."
              }
            </Prose>

            <SubHeading>{"Install kill-port"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install --save-dev kill-port"}
            </CodeBlock>

            <SubHeading>{"Add to package.json scripts"}</SubHeading>
            <CodeBlock title="package.json">{`{
  "scripts": {
    "dev": "kill-port 3000 && nodemon server.js",
    "start": "kill-port 3000 && node server.js"
  }
}`}</CodeBlock>

            <SubHeading>{"Or add graceful shutdown to your server"}</SubHeading>
            <CodeBlock title="server.js">{`const server = app.listen(PORT, () => {
  console.log(\`Server on port \${PORT}\`)
})

// Clean up on exit — releases the port properly
process.on('SIGTERM', () => server.close(() => process.exit(0)))
process.on('SIGINT', () => server.close(() => process.exit(0)))`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="Docker Port Conflict"
            time="3 min"
            tag="Running Node.js in Docker"
          >
            <Prose>
              {
                "In Docker environments, port already in use usually means another container is mapped to the same host port — not a process on the host machine."
              }
            </Prose>

            <SubHeading>{"Find the conflicting container"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# List all running containers and their port mappings\ndocker ps\n# Look for a container showing 0.0.0.0:3000->3000/tcp\n\n# Stop the conflicting container\ndocker stop <container_id>"
              }
            </CodeBlock>

            <SubHeading>{"Change the host port mapping"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Map to different host port\ndocker run -p 3001:3000 my-node-app\n#               ^^^^  host port\n#                    ^^^^ container port (keep this the same)"
              }
            </CodeBlock>

            <SubHeading>{"docker-compose.yml"}</SubHeading>
            <CodeBlock title="docker-compose.yml">{`services:
  app:
    build: .
    ports:
      - "3001:3000"   # changed host port from 3000 to 3001`}</CodeBlock>
          </FixCard>

          <SectionHeading id="quick-table">
            {"Kill Commands for Every OS — Quick Reference"}
          </SectionHeading>
          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Replace 3000 with your actual port"}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-white">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"OS"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Command"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["macOS / Linux", "kill -9 $(lsof -ti:3000)"],
                    ["Linux (fuser)", "fuser -k 3000/tcp"],
                    [
                      "Windows CMD",
                      "netstat -ano | findstr :3000  →  taskkill /PID <PID> /F",
                    ],
                    [
                      "Windows PowerShell",
                      "Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force",
                    ],
                    [
                      "Docker",
                      "docker stop $(docker ps -q --filter publish=3000)",
                    ],
                    ["npm script", "npx kill-port 3000"],
                  ].map(([os, cmd]) => (
                    <tr
                      key={os}
                      className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap w-40">
                        {os}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-indigo-700 break-all">
                        {cmd}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <SectionHeading id="prevention">
            {"How to Prevent Port Already in Use"}
          </SectionHeading>
          <CheckList
            items={[
              "Always use Ctrl+C to stop Node.js — never just close the terminal window",
              "Add kill-port to your dev script so the port clears automatically before every restart",
              "Use process.env.PORT — never hardcode port numbers in production",
              "Add SIGTERM and SIGINT handlers to release ports on clean shutdown",
              "Use PM2 in production — it manages process lifecycle and prevents zombie processes",
              "On macOS Monterey+: if you use port 5000, disable AirPlay Receiver in System Settings → Sharing",
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
                "Softplix is a full-stack development agency. Dealing with Node.js infrastructure issues in production? We can help you build something stable."
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
