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
  title: "Error: Cannot find module 'mongoose' — Fixed [Complete Guide 2026]",
  description:
    "Fix Error Cannot find module mongoose in Node.js. Install mongoose correctly, connect to MongoDB, and configure your schema and models the right way.",
  keywords:
    "error cannot find module mongoose, cannot find module mongoose nodejs, mongoose not installed, mongoose module not found 2026, npm install mongoose",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-mongoose",
  },
  openGraph: {
    title: "Error: Cannot find module 'mongoose' — Fixed [Complete Guide 2026]",
    description:
      "Fix Cannot find module mongoose in Node.js — install, connect, and configure correctly.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/error-cannot-find-module-mongoose",
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
  { label: "What causes this error?", href: "#what-it-means" },
  { label: "Fix 1 — Install mongoose", href: "#fix-1" },
  { label: "Fix 2 — Connect to MongoDB correctly", href: "#fix-2" },
  { label: "Fix 3 — Wrong directory / git clone", href: "#fix-3" },
  { label: "Fix 4 — Reinstall all dependencies", href: "#fix-4" },
  { label: "Fix 5 — Define schemas and models", href: "#fix-5" },
  { label: "Fix 6 — mongoose with ES Modules", href: "#fix-6" },
  {
    label: "After installing — common connection errors",
    href: "#connection-errors",
  },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "How do I install mongoose in Node.js?",
    a: "Run npm install mongoose in your project directory. Then require it: const mongoose = require('mongoose') and connect with mongoose.connect(process.env.MONGODB_URI). Always handle connection errors with .catch().",
  },
  {
    q: "Cannot find module mongoose after npm install?",
    a: "Verify you are in the correct project directory. Run ls node_modules | grep mongoose to confirm it installed. If missing, run npm install mongoose again from the folder containing package.json.",
  },
  {
    q: "How do I connect mongoose to MongoDB Atlas?",
    a: "Set your connection string in .env: MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname. Then call mongoose.connect(process.env.MONGODB_URI) in your app. Make sure your IP is whitelisted in Atlas Network Access.",
  },
  {
    q: "Mongoose connected but queries not working?",
    a: "Make sure you are running queries after the connection is established. Use await mongoose.connect() or check mongoose.connection.readyState === 1 before querying.",
  },
  {
    q: "Which mongoose version should I use?",
    a: "Use the latest version: npm install mongoose@latest. Mongoose 7+ and 8+ require Node.js 14+ and MongoDB 4.4+. Check npm info mongoose version for the current stable release.",
  },
  {
    q: "Cannot find module mongoose in production?",
    a: "Your production server is missing node_modules. Make sure your deployment pipeline runs npm install before starting the app. Check that mongoose is in dependencies (not devDependencies) in package.json.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Error: Cannot find module 'mongoose' — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/error-cannot-find-module-mongoose",
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
    tag: "MongoDB",
    title: "Fix: Mongoose connection error",
    href: "mongoose-connection-error",
    time: "5 min read",
  },
  {
    tag: "Mongoose",
    title: "Fix: Mongoose schema validation error",
    href: "mongoose-schema-validation-error",
    time: "4 min read",
  },
  {
    tag: "Express",
    title: "Fix: req.body undefined in Express",
    href: "req-body-undefined-express",
    time: "4 min read",
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
              {"Cannot find module mongoose"}
            </span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["Node.js", "MongoDB", "Error Fix"].map((t) => (
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
              {"Error: Cannot find module 'mongoose'"}
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
                {"Node.js · MongoDB · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — 60 seconds"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Navigate to your project and install mongoose:"}
            </p>
            <CodeBlock title="terminal">
              {"cd your-project-folder\nnpm install mongoose"}
            </CodeBlock>
            <p className="text-sm text-green-700 mb-3">
              {"Then connect to MongoDB in your entry file:"}
            </p>
            <CodeBlock title="server.js">{`const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection failed:', err.message))`}</CodeBlock>
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
            {"What Causes Cannot find module 'mongoose'?"}
          </SectionHeading>

          <ErrorBlock>{`Error: Cannot find module 'mongoose'
Require stack:
- /Users/you/projects/api/server.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15)
    at Module.require (node:internal/modules/cjs/loader:1005:19)
    at require (node:internal/modules/cjs/helpers:94:18)
    at Object.<anonymous> (/Users/you/projects/api/server.js:3:19)`}</ErrorBlock>

          <Prose>
            {
              "mongoose is an npm package for connecting to and querying MongoDB. It is not built into Node.js and must be installed separately. This error means Node.js cannot find mongoose in your "
            }
            <IC>{"node_modules"}</IC>
            {" directory."}
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
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
                    "mongoose was never installed",
                    "Fix 1 — npm install mongoose",
                  ],
                  [
                    "Wrong directory — node_modules elsewhere",
                    "Fix 3 — cd to correct folder",
                  ],
                  [
                    "Cloned repo — node_modules not committed",
                    "Fix 3 — npm install",
                  ],
                  ["Corrupted node_modules", "Fix 4 — clean reinstall"],
                  [
                    "Production — missing node_modules on server",
                    "Run npm install on server",
                  ],
                ].map(([cause, fix]) => (
                  <tr
                    key={cause}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 text-gray-700 text-sm">{cause}</td>
                    <td className="px-5 py-3 font-semibold text-indigo-600 text-sm">
                      {fix}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Install mongoose"
            time="1 min"
            tag="Most common fix"
          >
            <CodeBlock title="terminal">
              {
                "cd your-project-folder\nnpm install mongoose\n\n# Verify it installed\nls node_modules | grep mongoose\n\n# Check version\nnpm list mongoose"
              }
            </CodeBlock>
            <Prose>
              {"After installing, mongoose should appear in your "}
              <IC>{"package.json"}</IC>
              {" dependencies:"}
            </Prose>
            <CodeBlock title="package.json">{`{
  "dependencies": {
    "mongoose": "^8.2.0"
  }
}`}</CodeBlock>
            <TipBox>
              {
                "Always run npm install from the directory containing package.json — not from a parent or child directory."
              }
            </TipBox>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Connect to MongoDB Correctly"
            time="3 min"
            tag="Complete working setup after installing"
          >
            <Prose>
              {
                "Installing mongoose only makes the module available. You still need to call "
              }
              <IC>{"mongoose.connect()"}</IC>
              {
                " with your MongoDB connection string to establish the database connection."
              }
            </Prose>

            <SubHeading>{"Local MongoDB"}</SubHeading>
            <CodeBlock title="server.js">{`const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('Connection error:', err.message))`}</CodeBlock>

            <SubHeading>{"MongoDB Atlas (cloud)"}</SubHeading>
            <CodeBlock title=".env">
              {
                "MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/mydb"
              }
            </CodeBlock>
            <CodeBlock title="server.js">{`require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Connection error:', err.message))`}</CodeBlock>

            <SubHeading>{"With connection event handlers"}</SubHeading>
            <CodeBlock title="server.js">{`mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected')
})`}</CodeBlock>

            <TipBox>
              {
                "Never hardcode MongoDB credentials in source code. Always use process.env.MONGODB_URI from a .env file."
              }
            </TipBox>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Wrong Directory or After Git Clone"
            time="1 min"
            tag="node_modules missing"
          >
            <Prose>
              {"If you just cloned a repository, "}
              <IC>{"node_modules"}</IC>
              {" will not exist — it is never committed to git. Run "}
              <IC>{"npm install"}</IC>
              {" to recreate it."}
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Correct workflow after cloning\ngit clone https://github.com/user/my-api.git\ncd my-api\nnpm install          # recreates node_modules\nnode server.js"
              }
            </CodeBlock>
            <CodeBlock title="terminal">
              {
                "# Verify mongoose is in node_modules\nls node_modules | grep mongoose"
              }
            </CodeBlock>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Reinstall All Dependencies"
            time="3 min"
            tag="Corrupted node_modules"
          >
            <CodeBlock title="macOS / Linux">
              {"rm -rf node_modules package-lock.json\nnpm install"}
            </CodeBlock>
            <CodeBlock title="Windows PowerShell">
              {
                "Remove-Item -Recurse -Force node_modules\nRemove-Item package-lock.json\nnpm install"
              }
            </CodeBlock>
          </FixCard>

          {/* Fix 5 */}
          <FixCard
            number="5"
            title="Define Schemas and Models Correctly"
            time="3 min"
            tag="After installing and connecting — set up models"
          >
            <Prose>
              {
                "After mongoose is installed and connected, here is the complete pattern for defining schemas and using models:"
              }
            </Prose>
            <CodeBlock title="models/User.js">{`const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('User', userSchema)`}</CodeBlock>

            <CodeBlock title="routes/users.js">{`const User = require('../models/User')

// Create user
const user = await User.create({ name: 'John', email: 'john@example.com' })

// Find all users
const users = await User.find()

// Find by ID
const user = await User.findById(req.params.id)

// Update
await User.findByIdAndUpdate(id, { name: 'Jane' }, { new: true })

// Delete
await User.findByIdAndDelete(id)`}</CodeBlock>
          </FixCard>

          {/* Fix 6 */}
          <FixCard
            number="6"
            title="mongoose with ES Modules"
            time="2 min"
            tag="Using import/export syntax"
          >
            <Prose>
              {"If your project uses ES Modules ("}
              <IC>{'"type": "module"'}</IC>
              {" in package.json), use import syntax instead of require:"}
            </Prose>
            <CodeBlock title="server.js (ES Module)">{`import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

await mongoose.connect(process.env.MONGODB_URI)
console.log('MongoDB connected')`}</CodeBlock>
            <CodeBlock title="models/User.js (ES Module)">{`import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
})

export default mongoose.model('User', userSchema)`}</CodeBlock>
          </FixCard>

          {/* Connection errors */}
          <SectionHeading id="connection-errors">
            {"After Installing — Common Connection Errors"}
          </SectionHeading>
          <Prose>
            {
              "Once mongoose is installed, you may hit connection errors. Here is the most common ones and their quick fixes:"
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-slate-50">
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Error"}
                  </th>
                  <th className="text-left px-5 py-3 font-bold text-gray-700">
                    {"Cause & Fix"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "ECONNREFUSED 127.0.0.1:27017",
                    "MongoDB not running locally — start it: brew services start mongodb-community",
                  ],
                  [
                    "Authentication failed",
                    "Wrong username/password in connection string — check Atlas Database Access",
                  ],
                  [
                    "ServerSelectionTimeout",
                    "IP not whitelisted in Atlas Network Access — add your IP",
                  ],
                  [
                    "Connection string invalid",
                    "Missing +srv for Atlas — use: mongodb+srv://user:pass@cluster.mongodb.net/db",
                  ],
                ].map(([error, fix]) => (
                  <tr
                    key={error}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-mono text-red-600 text-xs">
                      {error}
                    </td>
                    <td className="px-5 py-3 text-gray-600 text-sm">{fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Add mongoose to package.json with npm install mongoose",
              "Store MongoDB URI in .env — never hardcode credentials",
              "Always run npm install after cloning a repository",
              "Add node_modules to .gitignore",
              "Commit package.json and package-lock.json to git",
              "In production deployments, ensure npm install runs before starting the app",
              "For CI/CD, use npm ci instead of npm install for faster, deterministic installs",
            ]}
          />

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
              {"We Build Production-Grade Node.js & MongoDB Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Need help with MongoDB architecture or a complex Node.js backend? We can help."
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
