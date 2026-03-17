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
  title: "Mongoose Connection Error — Fixed [Complete Guide 2026]",
  description:
    "Fix Mongoose connection errors. Covers ECONNREFUSED, MongoServerError authentication failed, MongoDB connection refused, Atlas network access, wrong connection strings, and connection retry logic.",
  keywords:
    "mongoose connection error, mongoservererror authentication failed, mongodb connection refused, mongoose connect error fix 2026, mongodb econnrefused fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/mongoose-connection-error",
  },
  openGraph: {
    title: "Mongoose Connection Error — Fixed [Complete Guide 2026]",
    description:
      "Fix all Mongoose connection errors — ECONNREFUSED, auth failed, Atlas, connection strings.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/mongoose-connection-error",
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
  { label: "Diagnose your error fast", href: "#diagnose" },
  {
    label: "Fix 1 — MongoDB not running locally (ECONNREFUSED)",
    href: "#fix-1",
  },
  { label: "Fix 2 — Wrong connection string format", href: "#fix-2" },
  { label: "Fix 3 — MongoServerError authentication failed", href: "#fix-3" },
  { label: "Fix 4 — Atlas IP not whitelisted", href: "#fix-4" },
  { label: "Fix 5 — Special characters in password", href: "#fix-5" },
  { label: "Fix 6 — MongoDB connection refused on server", href: "#fix-6" },
  { label: "Fix 7 — Add connection event handlers", href: "#fix-7" },
  { label: "Fix 8 — Connection retry logic for production", href: "#fix-8" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "What causes Mongoose connection error?",
    a: "The four most common causes are: MongoDB not running locally (start it with brew services start mongodb-community), wrong connection string format, authentication failure (wrong credentials), or your IP address not being whitelisted in MongoDB Atlas Network Access.",
  },
  {
    q: "How do I fix MongoServerSelectionError connect ECONNREFUSED 127.0.0.1:27017?",
    a: "MongoDB is not running on your local machine. Start it: sudo systemctl start mongod (Linux) or brew services start mongodb-community (macOS). Then verify it is running with mongosh.",
  },
  {
    q: "How do I fix MongoServerError authentication failed?",
    a: "Your MongoDB username or password is wrong. For Atlas: go to Database Access, edit your user, auto-generate a new password, and update your MONGODB_URI in .env. URL-encode special characters in passwords.",
  },
  {
    q: "Mongoose connects locally but fails in production?",
    a: "Your production server IP is not whitelisted in Atlas Network Access. Go to Atlas → Security → Network Access → Add IP Address. For CI/CD, add 0.0.0.0/0 (allow all) only temporarily or use your deployment platform's static IP.",
  },
  {
    q: "How do I check if MongoDB is running?",
    a: "Run mongosh on your machine. If it connects, MongoDB is running. On Linux: sudo systemctl status mongod. On macOS: brew services list | grep mongodb.",
  },
  {
    q: "MongoDB URI with special characters not working?",
    a: "URL-encode special characters in your MongoDB password. @ becomes %40, # becomes %23, $ becomes %24. In Node.js: const pass = encodeURIComponent('p@ss'); const uri = `mongodb+srv://user:${pass}@cluster.mongodb.net/db`",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mongoose Connection Error — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/mongoose-connection-error",
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
    title: "Fix: Mongoose schema validation error",
    href: "mongoose-schema-validation-error",
    time: "5 min read",
  },
  {
    tag: "Node.js",
    title: "Fix: Node.js server crashing automatically",
    href: "nodejs-server-crashing-automatically",
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
            <span className="text-gray-500">{"Mongoose Connection Error"}</span>
          </nav> */}

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["MongoDB", "Mongoose", "Error Fix"].map((t) => (
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
              {"Mongoose Connection Error"}
              <span className="block text-indigo-600">
                {"— Fixed [Complete Guide 2026]"}
              </span>
            </h1>
            <p className="text-sm text-gray-500 mb-3">
              {
                "Also covers: MongoServerError authentication failed · MongoDB connection refused · ECONNREFUSED 127.0.0.1:27017"
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
                {"MongoDB · Node.js · All OS"}
              </span>
            </div>
          </header>

          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Identify Your Error in 30 Seconds"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "The exact error message tells you what is wrong. Check yours below:"
              }
            </p>
            <div className="space-y-2 text-sm">
              {[
                {
                  err: "ECONNREFUSED 127.0.0.1:27017",
                  fix: "MongoDB not running locally → Fix 1",
                },
                {
                  err: "MongoServerError: Authentication failed",
                  fix: "Wrong credentials → Fix 3",
                },
                {
                  err: "ServerSelectionTimeoutError",
                  fix: "Atlas IP not whitelisted → Fix 4",
                },
                {
                  err: "Invalid scheme",
                  fix: "Wrong connection string format → Fix 2",
                },
              ].map(({ err, fix }) => (
                <div key={err} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-red-600 bg-red-50 px-2 py-1 rounded flex-shrink-0">
                    {err}
                  </span>
                  <span className="text-green-700">{fix}</span>
                </div>
              ))}
            </div>
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

          <SectionHeading id="diagnose">
            {"Diagnose Your Error Fast"}
          </SectionHeading>

          <div className="space-y-4">
            {[
              {
                title: "ECONNREFUSED 127.0.0.1:27017",
                color: "red",
                desc: "MongoDB is not running on your local machine. Nothing is listening on port 27017.",
              },
              {
                title: "MongoServerError: Authentication failed",
                color: "red",
                desc: "MongoDB rejected your username/password. Wrong credentials or user does not have permission for that database.",
              },
              {
                title:
                  "MongoServerSelectionError / ServerSelectionTimeoutError",
                color: "amber",
                desc: "Cannot reach MongoDB at all — either it is not running, IP is blocked by firewall, or Atlas Network Access has not whitelisted your IP.",
              },
              {
                title:
                  "Invalid scheme, expected connection string to start with mongodb:// or mongodb+srv://",
                color: "amber",
                desc: "Connection string format is wrong — missing the protocol prefix or using a malformed URI.",
              },
            ].map(({ title, color, desc }) => (
              <div
                key={title}
                className={`rounded-xl border px-5 py-4 ${color === "red" ? "border-red-200 bg-red-50" : "border-amber-200 bg-amber-50"}`}
              >
                <p
                  className={`font-mono text-xs font-bold mb-1 ${color === "red" ? "text-red-700" : "text-amber-700"}`}
                >
                  {title}
                </p>
                <p
                  className={`text-sm ${color === "red" ? "text-red-800" : "text-amber-800"}`}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>

          <FixCard
            number="1"
            title="MongoDB Not Running Locally (ECONNREFUSED)"
            time="2 min"
            tag="ECONNREFUSED 127.0.0.1:27017"
          >
            <ErrorBlock>{`MongoServerSelectionError: connect ECONNREFUSED 127.0.0.1:27017
    at Timeout._onTimeout (node_modules/mongoose/lib/connection.js:748:12)`}</ErrorBlock>

            <Prose>
              {
                "This error means nothing is listening on port 27017 — MongoDB is simply not running on your machine. Start it:"
              }
            </Prose>

            <SubHeading>{"macOS — Homebrew"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Start MongoDB\nbrew services start mongodb-community\n\n# Check it is running\nbrew services list | grep mongodb\n# Should show: mongodb-community started\n\n# Test with mongosh\nmongosh\n# If this opens a prompt — MongoDB is running"
              }
            </CodeBlock>

            <SubHeading>{"Linux (Ubuntu / Debian)"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "sudo systemctl start mongod\n\n# Check status\nsudo systemctl status mongod\n# Should show: active (running)\n\n# Enable auto-start on boot\nsudo systemctl enable mongod"
              }
            </CodeBlock>

            <SubHeading>{"Windows"}</SubHeading>
            <CodeBlock title="cmd">
              {
                "# Start MongoDB service\nnet start MongoDB\n\n# Or via Services:\n# Press Win+R → services.msc → find MongoDB → Start"
              }
            </CodeBlock>

            <TipBox>
              {
                "After starting MongoDB, wait 2–3 seconds and retry your connection. MongoDB needs a brief moment to initialise before accepting connections."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Wrong Connection String Format"
            time="2 min"
            tag="Invalid scheme / connection refused"
          >
            <Prose>
              {
                "The connection string format must match your MongoDB deployment type. Local MongoDB uses a different format from Atlas."
              }
            </Prose>

            <SubHeading>{"Local MongoDB — correct format"}</SubHeading>
            <CodeBlock title=".env">{`# Local MongoDB — standard format
MONGODB_URI=mongodb://localhost:27017/mydb

# Local with auth
MONGODB_URI=mongodb://username:password@localhost:27017/mydb

# Local replica set
MONGODB_URI=mongodb://localhost:27017/mydb?replicaSet=rs0`}</CodeBlock>

            <SubHeading>{"MongoDB Atlas — correct format"}</SubHeading>
            <CodeBlock title=".env">{`# Atlas — MUST use +srv format
MONGODB_URI=mongodb+srv://username:password@cluster0.abc123.mongodb.net/mydb

# NOT the standard format — wrong for Atlas:
# mongodb://cluster0.abc123.mongodb.net:27017  ← WRONG`}</CodeBlock>

            <SubHeading>{"Connect with correct error handling"}</SubHeading>
            <CodeBlock title="server.js">{`require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection failed:', err.message)
    process.exit(1)
  })`}</CodeBlock>

            <TipBox>
              {
                "Always use process.env.MONGODB_URI from a .env file. Never hardcode credentials in source code."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="3"
            title="MongoServerError: Authentication Failed"
            time="3 min"
            tag="Wrong username, password, or database user permissions"
          >
            <ErrorBlock>{`MongoServerError: Authentication failed.
MongooseError: Authentication failed
    at Connection.onMessage (node_modules/mongodb/lib/cmap/connection.js:229:26)`}</ErrorBlock>

            <Prose>
              {
                "Authentication failed means MongoDB received your connection but rejected your credentials. Causes: wrong username/password, user does not exist, user lacks permission for that specific database, or the password contains unencoded special characters."
              }
            </Prose>

            <SubHeading>{"Fix for MongoDB Atlas"}</SubHeading>
            <CheckList
              items={[
                "Go to MongoDB Atlas dashboard",
                "Click Security → Database Access",
                "Click Edit on your database user",
                "Click Edit Password → Autogenerate Secure Password",
                "Copy the new password",
                "Update MONGODB_URI in your .env file",
                "Test connection with mongosh using the new credentials",
              ]}
            />

            <SubHeading>
              {"Fix for local MongoDB — create user with correct permissions"}
            </SubHeading>
            <CodeBlock title="mongosh">{`// Connect to admin database
use admin

// Create admin user
db.createUser({
  user: 'myuser',
  pwd: 'mypassword',
  roles: [
    { role: 'readWrite', db: 'mydb' }
  ]
})

// Verify user exists
db.getUsers()`}</CodeBlock>

            <SubHeading>{"Verify authentication database"}</SubHeading>
            <CodeBlock title=".env">{`# If user is in admin db but connecting to app db:
MONGODB_URI=mongodb://user:pass@localhost:27017/mydb?authSource=admin`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Atlas IP Not Whitelisted"
            time="3 min"
            tag="ServerSelectionTimeoutError with Atlas"
          >
            <ErrorBlock>{`MongoServerSelectionError: connection <monitor> to cluster.mongodb.net:27017 closed
    [server selection timed out after 30000 ms]`}</ErrorBlock>

            <Prose>
              {
                "MongoDB Atlas requires you to whitelist IP addresses that are allowed to connect. If your current IP is not in the list, the connection times out silently — no error message, just a timeout."
              }
            </Prose>

            <SubHeading>{"Add your IP to Atlas"}</SubHeading>
            <CheckList
              items={[
                "Open MongoDB Atlas dashboard at cloud.mongodb.com",
                "Click Security → Network Access",
                "Click Add IP Address",
                "Click Add Current IP Address (for development)",
                "Or enter 0.0.0.0/0 to allow all IPs (development only)",
                "Click Confirm",
                "Wait 60–90 seconds for the change to propagate",
                "Retry your connection",
              ]}
            />

            <SubHeading>{"For production — get your server IP"}</SubHeading>
            <CodeBlock title="terminal on your server">
              {
                "# Get your server's public IP\ncurl ifconfig.me\n# Add this exact IP to Atlas Network Access"
              }
            </CodeBlock>

            <WarnBox>
              {
                "Never leave 0.0.0.0/0 (allow all) in Atlas production. It allows any IP on the internet to attempt connections to your database. Only use it temporarily during development or debugging."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Special Characters in Password"
            time="2 min"
            tag="Connection string malformed despite correct credentials"
          >
            <Prose>
              {
                "MongoDB connection strings are URLs. Special characters in your password ("
              }
              <IC>{"@ # $ ! & : /"}</IC>
              {
                ") must be URL-encoded. If they are not encoded, the connection string is parsed incorrectly and authentication fails."
              }
            </Prose>

            <SubHeading>
              {"Common special characters and their encodings"}
            </SubHeading>
            <div className="my-4 rounded-xl border border-gray-100 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-slate-50">
                    <th className="px-4 py-2 text-left font-bold text-gray-700">
                      {"Character"}
                    </th>
                    <th className="px-4 py-2 text-left font-bold text-gray-700">
                      {"Encoded"}
                    </th>
                    <th className="px-4 py-2 text-left font-bold text-gray-700">
                      {"Character"}
                    </th>
                    <th className="px-4 py-2 text-left font-bold text-gray-700">
                      {"Encoded"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["@", "%40"],
                    ["#", "%23"],
                    ["$", "%24"],
                    ["!", "%21"],
                    ["&", "%26"],
                    ["/", "%2F"],
                    [":", "%3A"],
                    [" ", "%20"],
                  ]
                    .reduce((rows, item, i) => {
                      if (i % 2 === 0) rows.push([item]);
                      else rows[rows.length - 1].push(item);
                      return rows;
                    }, [])
                    .map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <td className="px-4 py-2 font-mono text-red-600 text-xs">
                          {row[0][0]}
                        </td>
                        <td className="px-4 py-2 font-mono text-green-700 text-xs">
                          {row[0][1]}
                        </td>
                        <td className="px-4 py-2 font-mono text-red-600 text-xs">
                          {row[1] ? row[1][0] : ""}
                        </td>
                        <td className="px-4 py-2 font-mono text-green-700 text-xs">
                          {row[1] ? row[1][1] : ""}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <SubHeading>{"Encode automatically in Node.js"}</SubHeading>
            <CodeBlock title="server.js">{`const username = encodeURIComponent(process.env.DB_USER)
const password = encodeURIComponent(process.env.DB_PASS)
const cluster  = process.env.DB_CLUSTER
const database = process.env.DB_NAME

const uri = \`mongodb+srv://\${username}:\${password}@\${cluster}/\${database}\`
mongoose.connect(uri)`}</CodeBlock>

            <TipBox>
              {
                "The cleanest solution: use MongoDB Atlas auto-generated passwords. They avoid special characters entirely. Or use a password manager to generate a password using only alphanumeric characters."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="6"
            title="MongoDB Connection Refused on Production Server"
            time="5 min"
            tag="Self-hosted MongoDB on VPS / Ubuntu"
          >
            <Prose>
              {
                "On a self-hosted Linux server, ECONNREFUSED usually means MongoDB is either not running, configured to only accept localhost connections, or blocked by a firewall."
              }
            </Prose>

            <SubHeading>{"Check MongoDB is running"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "sudo systemctl status mongod\n\n# If not running:\nsudo systemctl start mongod\nsudo systemctl enable mongod   # auto-start on reboot"
              }
            </CodeBlock>

            <SubHeading>{"Fix bind_ip to allow remote connections"}</SubHeading>
            <CodeBlock title="/etc/mongod.conf">{`net:
  port: 27017
  bindIp: 127.0.0.1   # ← default, only localhost

# Change to allow remote connections:
net:
  port: 27017
  bindIp: 0.0.0.0     # ← all interfaces`}</CodeBlock>

            <CodeBlock title="terminal">
              {"sudo systemctl restart mongod"}
            </CodeBlock>

            <SubHeading>{"Open firewall port"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Ubuntu UFW\nsudo ufw allow 27017/tcp\n\n# Or allow only from specific IP\nsudo ufw allow from YOUR_APP_SERVER_IP to any port 27017"
              }
            </CodeBlock>

            <WarnBox>
              {
                "Never open MongoDB port 27017 to the public internet (0.0.0.0). Only allow connections from your application server's specific IP address. An exposed MongoDB instance is a major security risk."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="7"
            title="Add Connection Event Handlers"
            time="2 min"
            tag="Debugging and monitoring connections"
          >
            <Prose>
              {
                "Adding event handlers gives you visibility into connection state — essential for debugging and for implementing reconnection logic."
              }
            </Prose>
            <CodeBlock title="server.js">{`mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log('✅ Mongoose connected to MongoDB')
})

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error:', err.message)
})

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️  Mongoose disconnected from MongoDB')
})

// Check connection state anytime
// mongoose.connection.readyState:
// 0 = disconnected, 1 = connected, 2 = connecting, 3 = disconnecting
console.log('Connection state:', mongoose.connection.readyState)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="8"
            title="Connection Retry Logic for Production"
            time="3 min"
            tag="Prevent crashes when DB is briefly unavailable"
          >
            <Prose>
              {
                "In production, MongoDB may be temporarily unavailable during restarts or maintenance. Add retry logic so your app reconnects automatically instead of crashing."
              }
            </Prose>
            <CodeBlock title="database.js">{`const mongoose = require('mongoose')

const connectWithRetry = async (maxRetries = 5, delay = 5000) => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      await mongoose.connect(process.env.MONGODB_URI, {
        serverSelectionTimeoutMS: 5000,
      })
      console.log(\`✅ MongoDB connected (attempt \${attempt})\`)
      return
    } catch (err) {
      console.error(\`❌ Connection attempt \${attempt}/\${maxRetries} failed:\`, err.message)
      if (attempt === maxRetries) {
        console.error('All connection attempts failed. Exiting.')
        process.exit(1)
      }
      console.log(\`Retrying in \${delay / 1000} seconds...\`)
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }
}

// Handle disconnection — reconnect automatically
mongoose.connection.on('disconnected', () => {
  console.warn('MongoDB disconnected. Reconnecting...')
  setTimeout(() => connectWithRetry(), 5000)
})

module.exports = connectWithRetry`}</CodeBlock>

            <CodeBlock title="server.js">{`const connectWithRetry = require('./database')

async function startServer() {
  await connectWithRetry()
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running')
  })
}

startServer()`}</CodeBlock>
          </FixCard>

          <SectionHeading id="prevention">
            {"How to Prevent Mongoose Connection Errors"}
          </SectionHeading>
          <CheckList
            items={[
              "Store MONGODB_URI in .env — never hardcode credentials",
              "Enable MongoDB auto-start on boot: sudo systemctl enable mongod",
              "For Atlas: keep your IP whitelisted — check Network Access after changing networks",
              "URL-encode special characters in passwords or use auto-generated passwords",
              "Add connection event handlers so errors are visible in logs",
              "Use connection retry logic in production — never crash permanently on DB disconnect",
              "Wrap mongoose.connect() in try/catch and handle rejection with .catch()",
            ]}
          />

          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Error → Fix Reference"}
            </h2>
            <div className="space-y-3">
              {[
                {
                  err: "ECONNREFUSED 127.0.0.1:27017",
                  fix: "Start MongoDB: brew services start mongodb-community",
                },
                {
                  err: "Authentication failed",
                  fix: "Reset password in Atlas → Database Access → Edit User",
                },
                {
                  err: "ServerSelectionTimeoutError",
                  fix: "Whitelist IP in Atlas → Security → Network Access",
                },
                {
                  err: "Invalid scheme",
                  fix: "Use mongodb+srv:// for Atlas, mongodb:// for local",
                },
                {
                  err: "Special char in URI",
                  fix: "URL-encode password: encodeURIComponent(password)",
                },
              ].map(({ err, fix }) => (
                <div key={err} className="flex items-start gap-3 text-sm">
                  <span className="font-mono text-xs text-red-600 bg-red-50 border border-red-100 rounded px-2 py-1 flex-shrink-0 mt-0.5">
                    {err}
                  </span>
                  <span className="text-gray-600">{fix}</span>
                </div>
              ))}
            </div>
          </div>

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
                "Softplix builds full-stack applications with MongoDB and Node.js. Dealing with database architecture or connection issues in production? We can help."
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
