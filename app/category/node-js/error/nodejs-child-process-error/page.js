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
} from "react-icons/fa6";

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
function CL({ items }) {
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
function TOCBlock({ items }) {
  return (
    <nav className="my-8 rounded-2xl border border-indigo-100 bg-indigo-50 px-6 py-5">
      <div className="flex items-center gap-2 mb-4">
        <FaBookOpen className="text-indigo-600 text-sm" />
        <span className="text-sm font-bold text-indigo-900 uppercase tracking-widest">
          {"Table of Contents"}
        </span>
      </div>
      <ol className="space-y-2">
        {items.map(({ label, href }, i) => (
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
  );
}
function FAQBlock({ items }) {
  return (
    <div className="space-y-3">
      {items.map(({ q, a }) => (
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
  );
}
function RelatedBlock({ items }) {
  return (
    <aside className="mt-16 pt-10 border-t border-gray-100">
      <h2 className="text-lg font-bold text-gray-900 mb-5">
        {"Related Articles"}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map(({ tag, title, href, time }) => (
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
  );
}
function CTA({ title, desc }) {
  return (
    <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
        {"Need Expert Help?"}
      </p>
      <h2 className="text-xl font-extrabold text-white mb-3">{title}</h2>
      <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
        {desc}
      </p>
      <Link
        href="/contact-us"
        className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all text-sm shadow-lg"
      >
        {"Talk to an Engineer"}
        <FaArrowRight className="text-xs" />
      </Link>
    </div>
  );
}
function Header({ tags, title, subtitle, sub, date, read, tech }) {
  return (
    <header className="mb-8">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {tags.map((t) => (
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
        {title}
        <span className="block text-indigo-600">{subtitle}</span>
      </h1>
      {sub && <p className="text-sm text-gray-500 mb-4">{sub}</p>}
      <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
        <span className="flex items-center gap-1.5">
          <FaCalendarDays className="text-xs" />
          {date}
        </span>
        <span className="flex items-center gap-1.5">
          <FaClock className="text-xs" />
          {read}
        </span>
        <span className="flex items-center gap-1.5">
          <FaCode className="text-xs" />
          {tech}
        </span>
      </div>
    </header>
  );
}

export const metadata = {
  title: "Node.js Child Process Error — exec spawn Fixed [2026]",
  description:
    "Fix Node.js child process errors — ENOENT, spawn not found, exec stderr, exit code 1. Covers exec vs spawn vs execFile, output capture, error handling, and promisify patterns.",
  keywords:
    "nodejs child process error, spawn ENOENT nodejs, exec child process not working 2026, nodejs exec stderr, child_process promisify, nodejs spawn exit code 1",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/nodejs-child-process-error",
  },
  openGraph: {
    title: "Node.js Child Process Error — Fixed [2026]",
    description:
      "Fix Node.js child process — ENOENT, spawn, exec, stderr capture, promisify, exit codes.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/nodejs-child-process-error",
  },
};

const TOC = [
  { label: "exec vs spawn vs execFile — which to use", href: "#which" },
  { label: "Fix 1 — Fix ENOENT: command not found", href: "#fix-1" },
  { label: "Fix 2 — Capture stdout and stderr correctly", href: "#fix-2" },
  { label: "Fix 3 — Use promisify for async/await with exec", href: "#fix-3" },
  { label: "Fix 4 — Handle non-zero exit codes", href: "#fix-4" },
  { label: "Fix 5 — Stream large output with spawn", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What is the difference between exec and spawn in Node.js?",
    a: "exec runs a command through a shell, buffers all output, and returns it in a callback when the process exits — best for short commands where you need the complete output. spawn starts the process directly (no shell by default), streams stdout/stderr as they arrive — best for long-running processes or large output. execFile is like exec but runs a file directly without a shell.",
  },
  {
    q: "Why do I get ENOENT when running a command with child_process?",
    a: "ENOENT means the command was not found. With spawn, the command must be in the system PATH or you must provide the full path. On Windows, many commands (like git, npm) have .cmd or .exe extensions — use spawn('git', args, { shell: true }) or execFile to handle this. Also check that the required tool is installed on the machine.",
  },
  {
    q: "How do I capture stderr from a child process?",
    a: "With exec, stderr is passed as the third argument in the callback: exec(cmd, (error, stdout, stderr) => {}). With spawn, listen to the stderr data event: child.stderr.on('data', (chunk) => {}). An exit code of 1 does not always mean error — check both exit code and stderr content.",
  },
  {
    q: "Why does exec silently fail with no error?",
    a: "exec buffers output up to a limit (default 200KB). If the command output exceeds maxBuffer, exec silently kills the process and returns an error with code 'ERR_CHILD_PROCESS_STDIO_MAXBUFFER'. Increase maxBuffer: exec(cmd, { maxBuffer: 10 * 1024 * 1024 }) or switch to spawn for large output.",
  },
  {
    q: "How do I run a child process and wait for it to finish?",
    a: "Use util.promisify(exec) to get a Promise-based version. Then await it: const { stdout } = await execAsync('npm list'). Alternatively, use the child_process/promises submodule in Node 15+: import { exec } from 'node:child_process/promises'.",
  },
  {
    q: "How do I pass environment variables to a child process?",
    a: "Pass env in the options object. To inherit parent env and add extras: spawn('npm', ['start'], { env: { ...process.env, MY_VAR: 'value' } }). Without spreading process.env, the child process only gets the variables you explicitly set and loses PATH and all other parent environment variables.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Node.js Child Process Error — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/nodejs-child-process-error",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
    />
  );
}
function FAQSchema() {
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

export default function Page() {
  return (
    <>
      <ArticleSchema />
      <FAQSchema />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <Header
            tags={["Node.js", "child_process", "Error Fix"]}
            title={"Node.js Child Process Error"}
            subtitle={"— exec, spawn, ENOENT Fixed [2026]"}
            sub={
              "Also covers: exec vs spawn · capturing stderr · promisify · exit codes · large output streaming · env vars"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Node.js 18/20/22 · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ Common Errors"}
            </p>
            <ErrorBlock>{`Error: spawn git ENOENT         ← command not found in PATH
Error: spawnSync /bin/sh ENOENT  ← shell not found (Windows)
Error: stdout maxBuffer exceeded  ← output too large for exec buffer`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Choose the right API"}
            </p>
            <CodeBlock title="exec vs spawn — quick selection guide">{`// Short command, need complete output → exec (or promisified exec)
const { stdout } = await execAsync("git log --oneline -10")

// Long-running, large output, streaming → spawn
const child = spawn("npm", ["run", "build"])
child.stdout.pipe(process.stdout)`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="which">{"exec vs spawn vs execFile — Which to Use"}</SH>
          <P>
            {"Node.js has three main child process APIs. "}
            <IC>{"exec"}</IC>
            {
              " runs through a shell, buffers all output, best for short commands. "
            }
            <IC>{"spawn"}</IC>
            {
              " runs the process directly, streams I/O, best for long-running processes. "
            }
            <IC>{"execFile"}</IC>
            {
              " runs a file directly without a shell, better security for known executables."
            }
          </P>

          <FixCard
            number="1"
            title="Fix ENOENT: Command Not Found"
            time="3 min"
            tag="spawn ENOENT — command not in PATH or wrong name"
          >
            <CodeBlock title="ENOENT fixes">{`import { spawn, exec } from "child_process"

// ❌ ENOENT — 'git' not found (rare on Linux, common on Windows)
spawn("git", ["status"])

// ✅ Fix A — use shell: true (runs through system shell, resolves PATH)
spawn("git", ["status"], { shell: true })

// ✅ Fix B — provide full path to executable
spawn("/usr/bin/git", ["status"])

// ✅ Fix C — use exec (always uses shell)
exec("git status", (err, stdout) => {
  if (err) console.error(err)
  else console.log(stdout)
})

// Windows-specific — many commands have .cmd/.exe extension:
// ❌ spawn("npm", ["install"]) — fails on Windows (npm is npm.cmd)
// ✅ spawn("npm", ["install"], { shell: true }) — shell resolves npm.cmd

// Check if command exists before spawning:
import { execSync } from "child_process"
try {
  execSync("git --version", { stdio: "ignore" })
  console.log("git is available")
} catch {
  console.error("git is not installed")
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Capture stdout and stderr Correctly"
            time="3 min"
            tag="Output missing or only getting partial results"
          >
            <CodeBlock title="Capture output from exec and spawn">{`import { exec, spawn } from "child_process"

// --- exec — callback with stdout and stderr ---
exec("npm list --depth=0", { maxBuffer: 5 * 1024 * 1024 }, (error, stdout, stderr) => {
  if (error) {
    console.error("Exit code:", error.code)
    console.error("stderr:", stderr)
    return
  }
  console.log("stdout:", stdout)
})

// --- spawn — event-based streaming ---
const child = spawn("npm", ["run", "build"])

let stdout = ""
let stderr = ""

child.stdout.on("data", (chunk: Buffer) => {
  stdout += chunk.toString()
  process.stdout.write(chunk)  // stream to parent stdout in real time
})

child.stderr.on("data", (chunk: Buffer) => {
  stderr += chunk.toString()
  process.stderr.write(chunk)  // stream stderr
})

child.on("close", (code) => {
  console.log(\`Process exited with code \${code}\`)
  if (code !== 0) {
    console.error("Build failed:", stderr)
  }
})`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Use promisify for async/await with exec"
            time="2 min"
            tag="Callback-style exec in async code — convert to Promise"
          >
            <CodeBlock title="promisify exec — async/await pattern">{`import { exec } from "child_process"
import { promisify } from "util"

// ✅ Promisify exec for async/await
const execAsync = promisify(exec)

async function getGitLog(): Promise<string[]> {
  const { stdout, stderr } = await execAsync("git log --oneline -20", {
    maxBuffer: 1024 * 1024,  // 1MB buffer
  })

  if (stderr) console.warn("git stderr:", stderr)
  return stdout.trim().split("\n").filter(Boolean)
}

// ✅ Node 15+ — import directly from child_process/promises
import { exec } from "node:child_process/promises"

async function runCommand(cmd: string) {
  try {
    const { stdout } = await exec(cmd)
    return stdout.trim()
  } catch (err: any) {
    // err.code = exit code, err.stderr = error output
    throw new Error(\`Command failed (\${err.code}): \${err.stderr}\`)
  }
}

// Usage:
const version = await runCommand("node --version")
console.log("Node version:", version)  // v22.0.0`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Handle Non-Zero Exit Codes"
            time="3 min"
            tag="Process exits with code 1 — treat as error and extract stderr"
          >
            <CodeBlock title="Exit code handling">{`import { spawn } from "child_process"

function runScript(script: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    const child = spawn("node", [script], {
      env: { ...process.env },  // inherit parent environment
    })

    let stdout = ""
    let stderr = ""

    child.stdout.on("data", (d: Buffer) => { stdout += d.toString() })
    child.stderr.on("data", (d: Buffer) => { stderr += d.toString() })

    child.on("close", (code) => {
      if (code === 0) {
        resolve({ stdout, stderr })
      } else {
        reject(new Error(\`Script exited with code \${code}\\nstderr: \${stderr}\`))
      }
    })

    child.on("error", (err) => {
      reject(err)  // ENOENT, permission denied, etc.
    })
  })
}

// Usage:
try {
  const { stdout } = await runScript("./scripts/migrate.js")
  console.log("Migration output:", stdout)
} catch (err) {
  console.error("Migration failed:", err.message)
  process.exit(1)
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Stream Large Output with spawn"
            time="3 min"
            tag="exec maxBuffer exceeded — output too large"
          >
            <CodeBlock title="spawn for large output and piping">{`import { spawn } from "child_process"
import { createWriteStream } from "fs"

// ❌ exec maxBuffer exceeded for large output
// exec("git log --all", ...) → Error: stdout maxBuffer exceeded

// ✅ spawn — streams output without buffering limit
const logFile = createWriteStream("./git.log")

const child = spawn("git", ["log", "--all", "--format=%H %s"])

// Pipe stdout directly to a file
child.stdout.pipe(logFile)

child.on("close", (code) => {
  logFile.close()
  console.log(\`Wrote git log with exit code \${code}\`)
})

// ✅ Pass env variables to child process
const build = spawn("npm", ["run", "build"], {
  env: {
    ...process.env,          // ← inherit PATH and all parent vars
    NODE_ENV: "production",  // ← override or add specific vars
    CI: "true",
  },
  stdio: "inherit",          // ← child process shares parent's stdio (prints directly)
})

build.on("close", (code) => {
  if (code !== 0) process.exit(code ?? 1)
})`}</CodeBlock>
            <TipBox>
              {
                "Use stdio: 'inherit' to connect the child process directly to the parent's stdin/stdout/stderr. This is the simplest way to show a subprocess's output in your terminal without piping events manually."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Use shell: true in spawn options on Windows or when the command relies on shell PATH resolution",
              "Use promisify(exec) or import from 'node:child_process/promises' for clean async/await patterns",
              "Always listen to the 'error' event on spawned processes — it fires for ENOENT and permission errors",
              "Check exit code AND stderr — exit code 0 with stderr content is common for warnings",
              "Set maxBuffer for exec when output may be larger than the default 200KB",
              "Use spawn with stdio: 'inherit' for build scripts that should display output in real time",
              "Always spread ...process.env when setting env — omitting it loses PATH and breaks most commands",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Node.js",
                title: "Fix: Nodemon not restarting",
                href: "/category/node-js/error/nodemon-not-restarting",
                time: "5 min read",
              },
              {
                tag: "Node.js",
                title: "Fix: Node.js HTTPS SSL certificate error",
                href: "/category/node-js/error/nodejs-https-ssl-certificate-error",
                time: "6 min read",
              },
              {
                tag: "Drizzle ORM",
                title: "Fix: Drizzle ORM connection error",
                href: "/category/drizzle-orm/error/drizzle-orm-connection-error",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Production Node.js Backends"}
            desc={
              "Softplix engineers build Node.js APIs, CLI tools, and automation scripts with TypeScript, proper process management, and production-grade error handling. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
