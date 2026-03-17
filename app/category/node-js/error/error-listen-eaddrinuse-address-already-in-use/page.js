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
  title: "Error: listen EADDRINUSE: address already in use — Fixed [2026]",
  description:
    "Fix Error listen EADDRINUSE address already in use in Node.js. Kill the process on port 3000, 8080 or any port — copy-paste commands for macOS, Windows, and Linux.",
  keywords:
    "error listen eaddrinuse address already in use, eaddrinuse fix, port already in use node.js, kill process on port 3000, nodejs address already in use 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-listen-eaddrinuse-address-already-in-use",
  },
  openGraph: {
    title: "Error: listen EADDRINUSE: address already in use — Fixed [2026]",
    description:
      "Fix EADDRINUSE port already in use error in Node.js — macOS, Windows, Linux.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-listen-eaddrinuse-address-already-in-use",
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
  { label: "What does EADDRINUSE mean?", href: "#what-it-means" },
  { label: "Fix 1 — Kill the process (macOS/Linux)", href: "#fix-1" },
  { label: "Fix 2 — Kill the process (Windows)", href: "#fix-2" },
  { label: "Fix 3 — Find what is using the port", href: "#fix-3" },
  { label: "Fix 4 — Change your app port", href: "#fix-4" },
  { label: "Fix 5 — Auto-kill port on dev restart", href: "#fix-5" },
  { label: "Fix 6 — Use PM2 in production", href: "#fix-6" },
  { label: "OS-specific notes", href: "#os-notes" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does EADDRINUSE mean in Node.js?",
    a: 'EADDRINUSE stands for "Error: ADDRess IN USE" — the port your Node.js server is trying to bind to is already occupied by another process. The OS allows only one process per port at a time.',
  },
  {
    q: "How do I kill a process on port 3000 on Mac?",
    a: "Run kill -9 $(lsof -ti:3000) in your terminal. This finds the process ID using port 3000 and kills it in one command. Replace 3000 with your actual port.",
  },
  {
    q: "How do I kill a process on port 3000 on Windows?",
    a: "Run: netstat -ano | findstr :3000 to find the PID, then: taskkill /PID <PID> /F to kill it. Replace <PID> with the actual number from the first command.",
  },
  {
    q: "Why does EADDRINUSE happen after Ctrl+C?",
    a: "Sometimes Node.js does not fully terminate when you press Ctrl+C — it leaves a zombie process holding the port. Use lsof -i :3000 to check. If a process is still listed, kill it with kill -9 <PID>.",
  },
  {
    q: "How do I prevent EADDRINUSE in development?",
    a: 'Use the kill-port npm package in your dev script: "dev": "kill-port 3000 && nodemon server.js". Or always use Ctrl+C cleanly to stop your server.',
  },
  {
    q: "Port 3000 in use in Docker — how to fix?",
    a: "Another container or service is binding to the same host port. Change your Docker port mapping: -p 3001:3000 or stop the conflicting container first with docker ps and docker stop <container>.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Error: listen EADDRINUSE: address already in use — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-listen-eaddrinuse-address-already-in-use",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FaqSchema() {
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
    title: "Fix: Node.js Port Already in Use",
    href: "nodejs-port-already-in-use",
    time: "4 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Error listen EACCES permission denied",
    href: "error-listen-eacces-permission-denied",
    time: "4 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js Server Not Starting",
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
            <span className="text-gray-500">{"EADDRINUSE Fix"}</span>
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
              {"Error: listen EADDRINUSE"}
              <span className="block text-indigo-600">
                {"address already in use — Fixed [2026]"}
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

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Kill whatever is running on the port, then restart your server:"
              }
            </p>
            <CodeBlock title="macOS / Linux">
              {"kill -9 $(lsof -ti:3000)"}
            </CodeBlock>
            <CodeBlock title="Windows PowerShell">
              {"netstat -ano | findstr :3000\ntaskkill /PID <PID_NUMBER> /F"}
            </CodeBlock>
            <p className="text-xs text-green-700">
              {
                "Replace 3000 with your actual port. Then run npm start or npm run dev again."
              }
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

          {/* What it means */}
          <SectionHeading id="what-it-means">
            {"What Does EADDRINUSE Mean?"}
          </SectionHeading>

          <ErrorBlock>{`Error: listen EADDRINUSE: address already in use :::3000
    at Server.setupListenHandle [as _listen2] (net.js:1318:16)
    at listenInCluster (net.js:1366:12)
    at Server.listen (net.js:1452:7)
    at Function.listen (/node_modules/express/lib/application.js:635:24)
    at Object.<anonymous> (/Users/you/projects/myapp/server.js:10:5)`}</ErrorBlock>

          <Prose>
            {"EADDRINUSE stands for "}
            <strong>{"Error: ADDRess IN USE"}</strong>
            {
              ". It means the port your Node.js server is trying to bind to is already occupied by another process. The OS only allows one process per port at a time — so Node.js throws this error immediately."
            }
          </Prose>

          <SubHeading>{"The Most Common Causes"}</SubHeading>
          <CheckList
            items={[
              "A previous npm start was not properly stopped — the server is still running in the background",
              "You opened a second terminal window and ran npm start again",
              "Another application (a database, nginx, another Node server) is using the same port",
              "A crashed server left a zombie process holding the port",
              "nodemon restarted but the old process did not terminate cleanly",
            ]}
          />

          <TipBox>
            {
              "The fastest way to confirm: run lsof -i :3000 (macOS/Linux) or netstat -ano | findstr :3000 (Windows). If something appears in the output — that is the process you need to kill."
            }
          </TipBox>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Kill the Process — macOS / Linux"
            time="30 sec"
            tag="One command fix"
          >
            <SubHeading>{"Kill in one command (fastest)"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Kill whatever is on port 3000\nkill -9 $(lsof -ti:3000)\n\n# Different port? Change the number:\nkill -9 $(lsof -ti:8080)\nkill -9 $(lsof -ti:5000)"
              }
            </CodeBlock>

            <SubHeading>
              {"Step by step (to see what you are killing first)"}
            </SubHeading>
            <CodeBlock title="terminal">
              {
                "# Step 1: Find what is on port 3000\nlsof -i :3000\n# Output shows: COMMAND, PID, USER, etc.\n\n# Step 2: Kill it by PID\nkill -9 <PID_FROM_ABOVE>\n\n# Example:\nkill -9 12345"
              }
            </CodeBlock>

            <SubHeading>{"Linux alternative"}</SubHeading>
            <CodeBlock title="terminal">{"fuser -k 3000/tcp"}</CodeBlock>

            <TipBox>
              {
                "After killing the process, wait 2–3 seconds before starting your server again. The OS needs a moment to release the port."
              }
            </TipBox>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Kill the Process — Windows"
            time="1 min"
            tag="Windows specific"
          >
            <SubHeading>{"Command Prompt"}</SubHeading>
            <CodeBlock title="cmd">
              {
                "# Step 1: Find what is on port 3000\nnetstat -ano | findstr :3000\n# Note the PID in the last column\n\n# Step 2: Kill it\ntaskkill /PID <PID_NUMBER> /F\n\n# Example:\ntaskkill /PID 12345 /F"
              }
            </CodeBlock>

            <SubHeading>{"PowerShell (cleaner output)"}</SubHeading>
            <CodeBlock title="PowerShell">
              {
                "# Find the process\nGet-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess\n\n# Kill it directly\nStop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force"
              }
            </CodeBlock>

            <SubHeading>
              {"If port still appears stuck after killing"}
            </SubHeading>
            <CodeBlock title="PowerShell (Administrator)">
              {
                "# Force release TCP port\nnetsh int ipv4 delete excludedportrange protocol=tcp startport=3000 numberofports=1"
              }
            </CodeBlock>

            <WarnBox>
              {
                "If taskkill says 'Access is denied', open Command Prompt or PowerShell as Administrator and retry the command."
              }
            </WarnBox>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Find What Is Using the Port"
            time="1 min"
            tag="Before killing — identify the process"
          >
            <Prose>
              {
                "Sometimes it is useful to know WHAT is using the port before killing it — especially on production servers where you do not want to accidentally kill the wrong process."
              }
            </Prose>

            <SubHeading>{"macOS / Linux — detailed view"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Detailed process info on port 3000\nlsof -i :3000\n# COMMAND   PID   USER   TYPE  DEVICE  SIZE/OFF  NODE  NAME\n# node    12345  john   IPv6    ...          ...   TCP  *:3000\n\n# See ALL ports in use\nlsof -i -P -n | grep LISTEN"
              }
            </CodeBlock>

            <SubHeading>{"Linux — using ss or netstat"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Modern way\nss -tulpn | grep :3000\n\n# Classic netstat\nnetstat -tlnp | grep :3000"
              }
            </CodeBlock>

            <SubHeading>{"Windows — see process name"}</SubHeading>
            <CodeBlock title="cmd">
              {
                '# Find PID\nnetstat -ano | findstr :3000\n\n# See what program the PID belongs to\ntasklist /FI "PID eq 12345"\n# Output shows the process name'
              }
            </CodeBlock>

            <TipBox>
              {
                "On macOS/Linux, if the COMMAND column shows 'node' you are safe to kill it. If it shows 'nginx', 'postgres', or 'mongod' — change your Node.js app port instead (Fix 4)."
              }
            </TipBox>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Change Your App Port"
            time="1 min"
            tag="When you cannot kill the existing process"
          >
            <Prose>
              {
                "If another critical service needs port 3000, the cleanest solution is configuring your Node.js app to use a different port."
              }
            </Prose>

            <SubHeading>{"In your Node.js / Express app"}</SubHeading>
            <CodeBlock title="server.js">
              {
                "const PORT = process.env.PORT || 3001  // changed from 3000\n\napp.listen(PORT, () => {\n  console.log(`Server running on http://localhost:${PORT}`)\n})"
              }
            </CodeBlock>

            <SubHeading>
              {"Run on a different port via environment variable"}
            </SubHeading>
            <CodeBlock title="terminal">
              {
                "PORT=3001 node server.js          # macOS/Linux\n$env:PORT=3001; node server.js     # Windows PowerShell"
              }
            </CodeBlock>

            <SubHeading>{"Add to package.json scripts"}</SubHeading>
            <CodeBlock title="package.json">
              {
                '{\n  "scripts": {\n    "dev": "PORT=3001 nodemon server.js",\n    "start": "node server.js"\n  }\n}'
              }
            </CodeBlock>

            <TipBox>
              {
                "Using process.env.PORT is best practice for production — hosting platforms like Heroku, Railway, and Render set this environment variable automatically."
              }
            </TipBox>
          </FixCard>

          {/* Fix 5 */}
          <FixCard
            number="5"
            title="Auto-Kill Port on Dev Restart"
            time="2 min"
            tag="Development workflow — nodemon"
          >
            <Prose>
              {
                "If you hit EADDRINUSE regularly during development, automate the port cleanup so it never blocks you again."
              }
            </Prose>

            <SubHeading>{"Install kill-port"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install --save-dev kill-port"}
            </CodeBlock>

            <SubHeading>{"Add to package.json scripts"}</SubHeading>
            <CodeBlock title="package.json">
              {
                '{\n  "scripts": {\n    "dev": "kill-port 3000 && nodemon server.js",\n    "start": "kill-port 3000 && node server.js"\n  }\n}'
              }
            </CodeBlock>

            <SubHeading>{"Or use nodemon with graceful shutdown"}</SubHeading>
            <CodeBlock title="server.js">
              {
                "// Graceful shutdown on process termination\nprocess.on('SIGTERM', () => {\n  server.close(() => {\n    console.log('Server closed')\n    process.exit(0)\n  })\n})\n\nprocess.on('SIGINT', () => {\n  server.close(() => {\n    process.exit(0)\n  })\n})"
              }
            </CodeBlock>
          </FixCard>

          {/* Fix 6 */}
          <FixCard
            number="6"
            title="Use PM2 in Production"
            time="5 min"
            tag="Production — prevents zombie processes"
          >
            <Prose>
              {
                "In production, EADDRINUSE often happens when an app crash leaves a zombie process holding the port. PM2 manages your Node.js process lifecycle and prevents this."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "npm install -g pm2\n\n# Start app with PM2\npm2 start server.js --name my-app\n\n# PM2 handles crashes, restarts, and port cleanup automatically\npm2 list          # see all running apps\npm2 logs my-app   # view logs\npm2 restart my-app\npm2 stop my-app\n\n# Start on system boot\npm2 startup\npm2 save"
              }
            </CodeBlock>
            <TipBox>
              {
                "PM2 automatically restarts your app on crash and on server reboot. It also prevents zombie processes that leave ports occupied."
              }
            </TipBox>
          </FixCard>

          {/* OS Notes */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "On macOS, AirPlay Receiver uses port 5000 by default. If your Node.js app uses port 5000 you will hit EADDRINUSE from AirPlay, not from another Node process. Go to System Preferences → Sharing → uncheck AirPlay Receiver, or change your app to port 5001."
            }
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "Windows has a quirk called 'TCP TIME_WAIT' — after a process releases a port, Windows keeps it reserved for 4 minutes by default. If you restart your server quickly you may still get EADDRINUSE even after killing the process. Either wait a few minutes or use the netsh command in Fix 2 to force-release the port."
            }
          </Prose>

          <SubHeading>{"Linux / Docker"}</SubHeading>
          <Prose>
            {
              "In Docker, EADDRINUSE usually means another container is already bound to the host port you are trying to map. Run "
            }
            <IC>{"docker ps"}</IC>
            {" to see running containers and "}
            <IC>{"docker stop <container_id>"}</IC>
            {" to stop the conflicting one."}
          </Prose>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent EADDRINUSE"}
          </SectionHeading>
          <CheckList
            items={[
              "Always use Ctrl+C to stop Node.js — do not just close the terminal window",
              "Use process.env.PORT for flexible port configuration",
              "Add the kill-port package to your dev script for automatic port cleanup",
              "Use nodemon in development for clean process management",
              "Use PM2 in production to prevent zombie processes",
              "Add graceful shutdown handlers (SIGTERM, SIGINT) to your Node.js app",
            ]}
          />

          {/* Summary */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Reference — Kill Port Commands"}
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-white">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"OS"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"One-liner command"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["macOS / Linux", "kill -9 $(lsof -ti:3000)"],
                    ["Linux (fuser)", "fuser -k 3000/tcp"],
                    [
                      "Windows CMD",
                      "FOR /F \"tokens=5\" %P IN ('netstat -ano ^| findstr :3000') DO taskkill /PID %P /F",
                    ],
                    [
                      "Windows PS",
                      "Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force",
                    ],
                    [
                      "Docker",
                      'docker stop $(docker ps -q --filter "publish=3000")',
                    ],
                  ].map(([os, cmd]) => (
                    <tr
                      key={os}
                      className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-semibold text-gray-700 whitespace-nowrap">
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

          {/* FAQ */}
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
                "Softplix is a full-stack development agency. Dealing with Node.js issues in production? We can help you ship a stable, scalable system."
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
