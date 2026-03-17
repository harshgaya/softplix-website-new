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
  title: "Error: ENOENT no such file or directory Node.js — Fixed [2026]",
  description:
    "Fix Error ENOENT no such file or directory in Node.js. Covers wrong file paths, __dirname vs process.cwd(), readFile errors, missing files, and path resolution in every OS.",
  keywords:
    "error enoent no such file or directory nodejs, nodejs enoent fix, nodejs readfile error, nodejs file not found fix 2026, enoent fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-enoent-no-such-file-or-directory-nodejs",
  },
  openGraph: {
    title: "Error: ENOENT no such file or directory Node.js — Fixed [2026]",
    description:
      "Fix ENOENT no such file or directory in Node.js — paths, __dirname, readFile, all OS.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-enoent-no-such-file-or-directory-nodejs",
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
  { label: "What does ENOENT mean?", href: "#what" },
  { label: "Fix 1 — Use __dirname for absolute paths", href: "#fix-1" },
  { label: "Fix 2 — Understand process.cwd() vs __dirname", href: "#fix-2" },
  { label: "Fix 3 — Verify the file actually exists", href: "#fix-3" },
  { label: "Fix 4 — Fix readFile and readFileSync errors", href: "#fix-4" },
  { label: "Fix 5 — ENOENT in ES Modules (no __dirname)", href: "#fix-5" },
  { label: "Fix 6 — ENOENT with fs.mkdir / fs.writeFile", href: "#fix-6" },
  { label: "Fix 7 — ENOENT in Docker / production", href: "#fix-7" },
  { label: "Path helpers — quick reference", href: "#path-helpers" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What does ENOENT mean in Node.js?",
    a: "ENOENT stands for 'Error NO ENTry' — the file or directory path you provided does not exist. Either the path is wrong, the file has not been created yet, or you are running Node from a different directory than expected.",
  },
  {
    q: "What is the difference between __dirname and process.cwd()?",
    a: "__dirname is the directory of the current JavaScript file — it never changes regardless of where you run node from. process.cwd() is the directory where you ran the node command — it changes if you run node from a different folder. Use __dirname for file paths.",
  },
  {
    q: "How do I fix readFile ENOENT?",
    a: "Use path.join(__dirname, 'filename.txt') instead of a bare filename. Bare filenames are resolved relative to process.cwd() (where you ran node), not your file's location. __dirname gives you an absolute path that always works.",
  },
  {
    q: "ENOENT error only on production — why?",
    a: "Your file exists locally but not on the server. The file may be in .gitignore, the directory structure may differ, or the file needs to be created at runtime. Check that all required files are committed and your deploy process creates any needed directories.",
  },
  {
    q: "How do I create a directory if it does not exist in Node.js?",
    a: "Use fs.mkdirSync(dirPath, { recursive: true }) or await fs.promises.mkdir(dirPath, { recursive: true }). The recursive: true option creates parent directories too and does not throw if the directory already exists.",
  },
  {
    q: "ENOENT with __dirname in ES modules?",
    a: "__dirname does not exist in ES modules. Use: import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename). Then use __dirname as normal.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Error: ENOENT no such file or directory Node.js — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-enoent-no-such-file-or-directory-nodejs",
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
    title: "Fix: Node.js file upload error",
    href: "nodejs-file-upload-error",
    time: "6 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server not starting",
    href: "nodejs-server-not-starting",
    time: "7 min read",
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
            <span className="text-gray-500">{"ENOENT no such file"}</span>
          </nav> */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "File System", "Error Fix"].map((t) => (
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
              {"Error: ENOENT no such file or directory"}
              <span className="block text-indigo-600">
                {"Node.js — Fixed [2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {
                "Also covers: Node.js readFile error · fs.readFileSync ENOENT · path resolution issues"
              }
            </p>
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
                {"Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — Use __dirname"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Replace relative paths with absolute paths using __dirname:"}
            </p>
            <CodeBlock title="server.js">{`const path = require('path')

// ❌ WRONG — relative to wherever you run node from
fs.readFile('data/config.json', handler)

// ✅ CORRECT — absolute path from this file's location
fs.readFile(path.join(__dirname, 'data', 'config.json'), handler)`}</CodeBlock>
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

          <SH id="what">{"What Does ENOENT Mean?"}</SH>
          <ErrorBlock>{`Error: ENOENT: no such file or directory, open 'config.json'
    at Object.openSync (node:fs:600:3)
    at Object.readFileSync (node:fs:468:35)
    at Object.<anonymous> (/Users/you/projects/app/server.js:5:14)

# Or with readFile:
Error: ENOENT: no such file or directory, open '/Users/you/data.txt'`}</ErrorBlock>
          <P>
            {"ENOENT stands for "}
            <strong>{"Error NO ENTry"}</strong>
            {
              " — a Unix error code meaning the file or directory path does not exist. Node.js throws this whenever it tries to read, write, open, or access a path that cannot be found. The most common cause is a relative path that resolves incorrectly based on where you run "
            }
            <IC>{"node"}</IC>
            {" from."}
          </P>

          <FixCard
            number="1"
            title="Use __dirname for Absolute Paths"
            time="2 min"
            tag="Most common fix — path resolution"
          >
            <P>
              {"In Node.js, "}
              <IC>{"__dirname"}</IC>
              {
                " is the absolute path of the directory containing your current file. It never changes regardless of where you run "
              }
              <IC>{"node"}</IC>
              {" from. Use "}
              <IC>{"path.join(__dirname, ...)"}</IC>
              {" for all file paths."}
            </P>
            <CodeBlock title="server.js">{`const fs   = require('fs')
const path = require('path')

// ❌ WRONG — relative to process.cwd() (where node is run from)
const config = fs.readFileSync('config.json', 'utf8')
// Fails if you run: node src/server.js from project root

// ✅ CORRECT — absolute path from this file's directory
const config = fs.readFileSync(
  path.join(__dirname, 'config.json'), 'utf8'
)
// Always works regardless of where node is run from

// ✅ Navigating to parent directories
const pkg = fs.readFileSync(
  path.join(__dirname, '..', 'package.json'), 'utf8'
)

// ✅ Building paths to subdirectories
const uploadPath = path.join(__dirname, 'uploads', 'images')`}</CodeBlock>
            <TipBox>
              {
                "path.join() handles OS differences automatically — it uses backslashes on Windows and forward slashes on macOS/Linux. Never concatenate paths with string operations like __dirname + '/file.txt'."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Understand process.cwd() vs __dirname"
            time="2 min"
            tag="The root cause of most ENOENT errors"
          >
            <P>
              {
                "These two are different and mixing them up causes most ENOENT errors:"
              }
            </P>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Variable"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Value"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Changes?"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-50">
                    <td className="px-4 py-3 font-mono text-xs text-indigo-700">
                      {"__dirname"}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {"Directory of the current .js file"}
                    </td>
                    <td className="px-4 py-3 text-green-600 text-sm font-semibold">
                      {"Never"}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs text-indigo-700">
                      {"process.cwd()"}
                    </td>
                    <td className="px-4 py-3 text-gray-600 text-sm">
                      {"Directory where you ran node"}
                    </td>
                    <td className="px-4 py-3 text-red-500 text-sm font-semibold">
                      {"Yes — depends on terminal location"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <CodeBlock title="Practical example">{`// Project structure:
// /home/user/myapp/
//   server.js
//   src/utils.js
//   config/settings.json

// In src/utils.js:
console.log(__dirname)      // /home/user/myapp/src
console.log(process.cwd())  // /home/user/myapp  (if run from myapp)
//                          // /home/user         (if run from /home/user)

// Run from project root:  node src/utils.js
// process.cwd() = /home/user/myapp → correct
// 'config/settings.json' → resolves to /home/user/myapp/config/settings.json ✅

// Run from /home/user: node myapp/src/utils.js
// process.cwd() = /home/user → WRONG
// 'config/settings.json' → resolves to /home/user/config/settings.json ❌ ENOENT`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Verify the File Actually Exists"
            time="1 min"
            tag="Before debugging paths — confirm the file"
          >
            <CodeBlock title="terminal">{`# macOS / Linux
ls -la /path/to/your/file.json
ls -la $(node -e "console.log(require('path').join(__dirname, 'config.json'))")

# Windows
dir C:\\path\\to\\file.json

# In Node.js — check existence before reading
const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'config.json')
if (!fs.existsSync(filePath)) {
  console.error('File not found at:', filePath)
} else {
  const content = fs.readFileSync(filePath, 'utf8')
}`}</CodeBlock>
            <TipBox>
              {
                "Print the full resolved path before reading: console.log('Reading:', path.join(__dirname, 'config.json')). This immediately shows you if the path is correct."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Fix readFile and readFileSync Errors"
            time="3 min"
            tag="Complete fs patterns — sync and async"
          >
            <H3>{"Async readFile — with error handling"}</H3>
            <CodeBlock title="server.js">{`const fs   = require('fs')
const path = require('path')

// Callback style — always check err first
fs.readFile(path.join(__dirname, 'data.txt'), 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found:', err.path)
    } else {
      console.error('Read error:', err.message)
    }
    return
  }
  console.log(data)
})

// Promise style (Node.js 10+)
const { readFile } = require('fs/promises')

async function readConfig() {
  try {
    const data = await readFile(path.join(__dirname, 'config.json'), 'utf8')
    return JSON.parse(data)
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Config file not found — using defaults')
      return {}  // return default config
    }
    throw err
  }
}`}</CodeBlock>

            <H3>{"Sync readFileSync — with try/catch"}</H3>
            <CodeBlock title="server.js">{`// Always wrap in try/catch
let config = {}
try {
  const raw = fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8')
  config = JSON.parse(raw)
} catch (err) {
  if (err.code === 'ENOENT') {
    console.warn('config.json not found — using defaults')
  } else {
    throw err  // re-throw unexpected errors
  }
}`}</CodeBlock>
            <WarnBox>
              {
                "readFileSync blocks the event loop while reading. For large files or high-traffic servers, use the async fs.promises.readFile() instead."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="ENOENT in ES Modules — No __dirname"
            time="2 min"
            tag="Using import/export — type: module"
          >
            <P>
              {"ES Modules do not have "}
              <IC>{"__dirname"}</IC>
              {" or "}
              <IC>{"__filename"}</IC>
              {" built in. Recreate them using "}
              <IC>{"import.meta.url"}</IC>
              {"."}
            </P>
            <CodeBlock title="server.js (ES Module)">{`import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import path from 'path'

// Recreate __filename and __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

// Now use normally
const config = await readFile(
  path.join(__dirname, 'config.json'), 'utf8'
)

// Or use import.meta.dirname (Node.js 21.2+)
// const config = await readFile(
//   path.join(import.meta.dirname, 'config.json'), 'utf8'
// )`}</CodeBlock>
          </FixCard>

          <FixCard
            number="6"
            title="ENOENT with fs.mkdir / fs.writeFile"
            time="2 min"
            tag="Writing to directories that don't exist"
          >
            <P>
              {"ENOENT on write operations means the "}
              <em>{"directory"}</em>
              {" you are writing to does not exist. Create it first."}
            </P>
            <CodeBlock title="server.js">{`const fs   = require('fs/promises')
const path = require('path')

async function saveFile(filename, content) {
  const dir      = path.join(__dirname, 'uploads', 'images')
  const filePath = path.join(dir, filename)

  // Create directory if it doesn't exist
  await fs.mkdir(dir, { recursive: true })
  // recursive: true = create parent dirs too + no error if exists

  // Now write the file
  await fs.writeFile(filePath, content)
  console.log('Saved to:', filePath)
}

// Sync version
fs.mkdirSync(path.join(__dirname, 'uploads'), { recursive: true })`}</CodeBlock>
            <TipBox>
              {
                "{ recursive: true } is the key option. It creates all parent directories in one call and does not throw if the directory already exists — safe to call every time."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="7"
            title="ENOENT in Docker / Production"
            time="3 min"
            tag="File exists locally but not on server"
          >
            <P>
              {
                "ENOENT in production almost always means a file that exists locally was not deployed — either it is in .gitignore, or you need to create it at runtime."
              }
            </P>
            <CheckList
              items={[
                "Check .gitignore — the file may be excluded from git and therefore not on the server",
                "Print the path at startup so you know exactly where Node is looking: console.log('Looking for:', path.join(__dirname, 'data.json'))",
                "In Docker — verify the file is COPY'd in Dockerfile: COPY data/ ./data/",
                "Create required directories at startup before reading files",
                "Use environment variables for file paths that differ between environments",
              ]}
            />
            <CodeBlock title="Dockerfile">{`FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .                    # copies all files including data/

# Ensure upload directory exists
RUN mkdir -p uploads/images

EXPOSE 3000
CMD ["node", "server.js"]`}</CodeBlock>
          </FixCard>

          <SH id="path-helpers">{"Path Helpers — Quick Reference"}</SH>
          <div className="my-6 rounded-2xl bg-slate-900 px-6 py-5 overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code className="text-green-400 font-mono whitespace-pre">{`const path = require('path')

// Join paths safely (handles / on any OS)
path.join(__dirname, 'data', 'file.txt')
// → /Users/you/app/data/file.txt

// Resolve to absolute path
path.resolve('relative/path')
// → /current/working/dir/relative/path

// Get directory of current file
__dirname
// → /Users/you/app/src

// Get file's basename
path.basename('/Users/you/app/src/server.js')
// → server.js

// Get file extension
path.extname('file.jpg')
// → .jpg

// Get directory from path
path.dirname('/Users/you/app/src/server.js')
// → /Users/you/app/src`}</code>
            </pre>
          </div>

          <SH id="prevention">{"How to Prevent ENOENT Errors"}</SH>
          <CheckList
            items={[
              "Always use path.join(__dirname, 'filename') — never bare relative paths",
              "Print resolved paths during debugging: console.log(path.join(__dirname, 'file.txt'))",
              "Check file existence with fs.existsSync() before reading",
              "Create directories with fs.mkdir(dir, { recursive: true }) before writing",
              "Recreate __dirname in ES modules with fileURLToPath(import.meta.url)",
              "In Docker: verify COPY commands include all required data files",
              "On servers: log paths at startup to confirm files are in expected locations",
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
                "Softplix builds full-stack applications. Dealing with file system issues in production? We can help."
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
