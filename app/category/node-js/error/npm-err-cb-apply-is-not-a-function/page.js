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

// ─── Metadata ──────────────────────────────────────────────────────────────────
export const metadata = {
  title: "npm ERR! cb.apply is not a function — Fixed [Complete Guide 2026]",
  description:
    'Fix "npm ERR! cb.apply is not a function" instantly. Root cause is always a Node.js / npm version mismatch. Step-by-step fixes for macOS, Windows, and Linux — using nvm, reinstalling Node, and cleaning npm.',
  keywords:
    "npm err cb.apply is not a function, npm cb.apply fix, npm install cb.apply error, cb.apply is not a function npm, fix npm cb apply error 2026, npm node version mismatch fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-err-cb-apply-is-not-a-function",
  },
  openGraph: {
    title: "npm ERR! cb.apply is not a function — Fixed [Complete Guide 2026]",
    description:
      'Fix "npm ERR! cb.apply is not a function" — a Node.js/npm version mismatch error. Every fix covered for macOS, Windows, and Linux.',
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-err-cb-apply-is-not-a-function",
  },
};

// ─── Reusable UI ───────────────────────────────────────────────────────────────

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

function XList({ items }) {
  return (
    <ul className="space-y-2 my-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
          <FaCircleXmark className="text-red-400 mt-0.5 flex-shrink-0" />
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

// ─── Table of Contents ─────────────────────────────────────────────────────────

const TOC = [
  { label: "What causes this error?", href: "#what-it-means" },
  { label: "Fix 1 — Update npm to match your Node version", href: "#fix-1" },
  { label: "Fix 2 — Switch Node version with nvm", href: "#fix-2" },
  { label: "Fix 3 — Reinstall Node.js cleanly", href: "#fix-3" },
  { label: "Fix 4 — Clear npm cache + delete node_modules", href: "#fix-4" },
  { label: "Fix 5 — Fix broken npm on Windows", href: "#fix-5" },
  { label: "Fix 6 — The nuclear option", href: "#fix-6" },
  { label: "Compatible Node + npm version table", href: "#version-table" },
  { label: "OS-specific notes", href: "#os-notes" },
  { label: "How to prevent this error", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

function TableOfContents() {
  return (
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
  );
}

// ─── Related Articles ──────────────────────────────────────────────────────────

const RELATED = [
  {
    tag: "npm",
    title: 'Fix: npm ERR! Tracker "idealTree" Already Exists',
    href: "npm-err-tracker-idealtree-already-exists",
    time: "6 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! code ENOENT No Such File or Directory",
    href: "npm-err-code-enoent-no-such-file-or-directory",
    time: "7 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! Missing Script: Start",
    href: "npm-err-missing-script-start",
    time: "6 min read",
  },
];

function RelatedArticles() {
  return (
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
  );
}

// ─── Schemas ──────────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: 'What does "npm ERR! cb.apply is not a function" mean?',
    a: "This error means npm tried to call a function using the .apply() method but the value it was trying to call was not a function — it was undefined or some other non-function type. The root cause is almost always a Node.js and npm version mismatch: you upgraded Node but npm is still an old version that is incompatible with the new Node internals.",
  },
  {
    q: "Why does upgrading Node.js cause this error?",
    a: "npm ships bundled with Node.js, but the bundled npm version and a separately installed npm version can get out of sync. When you upgrade Node via a package manager like Homebrew or the official installer without also upgrading npm, the old npm tries to call internal Node APIs that have changed or been removed in the new Node version — causing cb.apply to fail.",
  },
  {
    q: "How do I check my Node and npm versions?",
    a: "Run 'node --version' and 'npm --version' in your terminal. Then cross-reference with the compatibility table — each major Node version ships with a specific bundled npm version that is guaranteed compatible.",
  },
  {
    q: "Will updating npm fix cb.apply is not a function?",
    a: "Yes, in most cases. Running 'npm install -g npm@latest' updates npm to the latest version which is compatible with current Node.js releases. If you are on a very old Node version, you may need to upgrade Node instead of (or as well as) npm.",
  },
  {
    q: "Does this error happen on all operating systems?",
    a: "Yes — macOS, Windows, and Linux can all produce this error. It is most common on macOS when Node is managed via Homebrew (which can upgrade Node independently of npm) and on Windows after using the Node.js installer which bundles a specific npm version.",
  },
  {
    q: "Can I get this error with nvm-installed Node?",
    a: "It is much less common with nvm because nvm installs a matching npm version alongside each Node version. However it can still occur if you manually upgrade npm globally to a version that is incompatible with the nvm Node version you are using. The fix is to run 'nvm use <version>' to switch to a matching Node version.",
  },
  {
    q: "What is the safest way to manage Node and npm to avoid version conflicts?",
    a: "Use nvm (Node Version Manager) on macOS and Linux, or nvm-windows on Windows. nvm installs each Node version with its own matched npm, keeps them isolated, and lets you switch between versions instantly. It is the most reliable way to avoid Node/npm version mismatch errors permanently.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "npm ERR! cb.apply is not a function — Fixed [Complete Guide 2026]",
    description:
      "Complete fix guide for npm ERR! cb.apply is not a function — a Node.js/npm version mismatch error — covering all fixes for macOS, Windows, and Linux.",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-err-cb-apply-is-not-a-function",
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function ArticlePage() {
  return (
    <>
      <ArticleSchema />
      <FaqSchema />

      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Breadcrumb */}
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
            <span className="text-gray-500">{"npm cb.apply Fix"}</span>
          </nav> */}

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["npm", "Node.js", "Error Fix"].map((t) => (
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
              {"npm ERR! cb.apply is not a function"}
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
                {"npm · Node.js · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — works 85% of the time"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Your npm version is out of sync with your Node.js version. Update npm first:"
              }
            </p>
            <CodeBlock>{`npm install -g npm@latest`}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "Then retry your command. If that did not fix it, read on — every other cause is covered below."
              }
            </p>
          </div>

          <TableOfContents />

          {/* ════ WHAT IT MEANS ════ */}
          <SectionHeading id="what-it-means">
            {'What Causes "npm ERR! cb.apply is not a function"?'}
          </SectionHeading>

          <Prose>{"Here is the full error:"}</Prose>

          <ErrorBlock>
            {`npm ERR! cb.apply is not a function

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/you/.npm/_logs/2026-01-01T00_00_00_000Z-debug.log`}
          </ErrorBlock>

          <Prose>
            {
              "Unlike most npm errors, this one does not point to your code or your project at all. "
            }
            <IC>{"cb.apply is not a function"}</IC>
            {
              " is a JavaScript runtime error thrown inside npm's own source code when it tries to call a callback ("
            }
            <IC>{"cb"}</IC>
            {") using "}
            <IC>{".apply()"}</IC>
            {" — but "}
            <IC>{"cb"}</IC>
            {" is "}
            <IC>{"undefined"}</IC>
            {" instead of a function."}
          </Prose>

          <Prose>
            {
              "This happens because npm internally relies on Node.js APIs. When your Node.js version and your npm version are out of sync — for example you upgraded Node but not npm, or vice versa — npm calls an internal API that has changed between versions, and the callback it expected is no longer there. The result is this cryptic error."
            }
          </Prose>

          <Prose>
            {
              "The good news: the fix is always about aligning your Node and npm versions. Your application code is not the problem."
            }
          </Prose>

          <SubHeading>{"The Most Common Triggers"}</SubHeading>
          <CheckList
            items={[
              "Upgraded Node.js via Homebrew, apt, or the official installer without updating npm",
              "Installed a new global npm version that is incompatible with your current Node.js",
              "Switched Node versions with nvm but the active npm is from a different version",
              "Installed Node.js on a new machine using a very old installer",
              "Running Node 6, 7, or 8 (end-of-life) with a modern npm — they are incompatible",
              "Partial or corrupted Node.js installation from a failed upgrade",
            ]}
          />

          <TipBox>
            {
              "Run 'node --version' and 'npm --version' right now. Then scroll to the compatibility table below. If your versions do not match the compatible pairs — that is your problem, and Fix 1 or Fix 2 will solve it."
            }
          </TipBox>

          {/* ════ FIX 1 ════ */}
          <FixCard
            number="1"
            title="Update npm to Match Your Node Version"
            time="1 minute"
            tag="Most common fix"
          >
            <Prose>
              {
                "The fastest fix in most cases. This updates npm to the latest version that is compatible with your current Node.js installation:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {"npm install -g npm@latest"}
            </CodeBlock>

            <Prose>{"Verify the update worked:"}</Prose>
            <CodeBlock title="terminal">
              {`npm --version   # should print a recent version like 10.x.x
node --version  # should print your Node version`}
            </CodeBlock>

            <Prose>{"Then retry whatever command was failing:"}</Prose>
            <CodeBlock title="terminal">{"npm install"}</CodeBlock>

            <WarnBox>
              {
                "On macOS, if npm is managed by Homebrew, 'npm install -g npm@latest' may not persist after a 'brew upgrade node' because Homebrew overwrites the bundled npm. Use nvm instead (Fix 2) to permanently solve this."
              }
            </WarnBox>
          </FixCard>

          {/* ════ FIX 2 ════ */}
          <FixCard
            number="2"
            title="Switch to the Correct Node Version with nvm"
            time="3–5 minutes"
            tag="Permanent fix — recommended"
          >
            <Prose>
              {"The cleanest, most permanent solution is using "}
              <strong>{"nvm (Node Version Manager)"}</strong>
              {
                " to install a matched Node + npm pair. nvm installs each Node version with its own bundled npm, keeping them in sync automatically."
              }
            </Prose>

            <SubHeading>{"Install nvm — macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Reload your shell config
source ~/.zshrc    # zsh (default on macOS)
source ~/.bashrc   # bash`}
            </CodeBlock>

            <SubHeading>{"Install nvm — Windows"}</SubHeading>
            <Prose>
              {"Download and run the installer from "}
              <IC>{"github.com/coreybutler/nvm-windows"}</IC>
              {". It provides the same interface as nvm on Unix."}
            </Prose>

            <SubHeading>
              {"Install and use a stable LTS Node version"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`# Install the latest LTS version (recommended)
nvm install --lts

# Use it
nvm use --lts

# Make it the default for all new terminals
nvm alias default node

# Verify both versions are now in sync
node --version
npm --version`}
            </CodeBlock>

            <SubHeading>{"Or install a specific version"}</SubHeading>
            <CodeBlock title="terminal">
              {`nvm install 20      # Node 20 LTS
nvm use 20
nvm alias default 20`}
            </CodeBlock>

            <TipBox>
              {
                "After switching Node versions with nvm, always run 'npm install' again in your project — node_modules built against a different Node version can cause subtle errors."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 3 ════ */}
          <FixCard
            number="3"
            title="Reinstall Node.js Cleanly"
            time="5–10 minutes"
            tag="When npm update alone doesn't work"
          >
            <Prose>
              {
                "If updating npm did not fix it, the Node.js installation itself may be corrupted or partially upgraded. A clean reinstall resolves this."
              }
            </Prose>

            <SubHeading>{"macOS — via official installer"}</SubHeading>
            <CheckList
              items={[
                "Download the latest LTS from nodejs.org",
                "Run the .pkg installer — it will overwrite the existing installation",
                "Open a new terminal window (important — old terminal caches the old path)",
                "Verify: node --version && npm --version",
              ]}
            />

            <SubHeading>{"macOS — via Homebrew"}</SubHeading>
            <CodeBlock title="terminal">
              {`brew uninstall node
brew install node

# Verify
node --version
npm --version`}
            </CodeBlock>

            <SubHeading>{"Ubuntu / Debian Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`# Remove existing Node
sudo apt remove nodejs npm
sudo apt autoremove

# Install via NodeSource (recommended — gets latest LTS)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install -y nodejs

# Verify
node --version
npm --version`}
            </CodeBlock>

            <SubHeading>{"Windows"}</SubHeading>
            <CheckList
              items={[
                "Open Add or Remove Programs → uninstall Node.js",
                "Delete any leftover folders: C:\\Program Files\\nodejs and C:\\Users\\you\\AppData\\Roaming\\npm",
                "Download the latest LTS installer from nodejs.org",
                "Run the installer with default options",
                "Open a new Command Prompt or PowerShell window",
                "Verify: node --version && npm --version",
              ]}
            />
          </FixCard>

          {/* ════ FIX 4 ════ */}
          <FixCard
            number="4"
            title="Clear npm Cache + Delete node_modules"
            time="2 minutes"
            tag="After fixing Node/npm versions"
          >
            <Prose>
              {
                "After fixing your Node and npm versions, the npm cache and your existing "
              }
              <IC>{"node_modules"}</IC>
              {
                " were built against the old mismatched versions. Clear both for a completely fresh state:"
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — PowerShell"}</SubHeading>
            <CodeBlock title="powershell">
              {`npm cache clean --force
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install`}
            </CodeBlock>

            <TipBox>
              {
                "This step is important even if npm install seems to work after fixing the version. node_modules built against Node 16 can contain native bindings that are incompatible with Node 20 and cause runtime errors that are hard to trace."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 5 ════ */}
          <FixCard
            number="5"
            title="Fix Broken npm on Windows"
            time="5 minutes"
            tag="Windows-specific"
          >
            <Prose>
              {
                "Windows has a specific additional problem: npm global installs go to "
              }
              <IC>{"%APPDATA%\\npm"}</IC>
              {
                " but the Node.js installer puts its bundled npm somewhere else. When these two npm installations get out of sync, "
              }
              <IC>{"cb.apply"}</IC>
              {" errors are common."}
            </Prose>

            <SubHeading>{"Find which npm is running"}</SubHeading>
            <CodeBlock title="PowerShell">
              {`# See the full path of the npm being used
where npm
# or
Get-Command npm | Select-Object -ExpandProperty Source`}
            </CodeBlock>

            <SubHeading>{"Remove conflicting global npm"}</SubHeading>
            <CodeBlock title="PowerShell (Administrator)">
              {`# Remove AppData npm folder contents
Remove-Item -Recurse -Force "$env:APPDATA\\npm"

# Reinstall npm cleanly
npm install -g npm@latest`}
            </CodeBlock>

            <SubHeading>{"Ensure PATH is correct"}</SubHeading>
            <Prose>
              {
                "Open System Properties → Environment Variables → Path and check that "
              }
              <IC>{"C:\\Program Files\\nodejs"}</IC>
              {
                " appears before any other Node paths. Multiple Node installations on the PATH is a frequent cause of this error on Windows."
              }
            </Prose>

            <WarnBox>
              {
                "If you have both a standalone Node.js installation AND Node installed via another tool like Chocolatey or winget, they can conflict. Pick one installation method and uninstall the other completely."
              }
            </WarnBox>
          </FixCard>

          {/* ════ FIX 6 ════ */}
          <FixCard
            number="6"
            title="Nuclear Option — Full Node + npm Reset"
            time="10 minutes"
            tag="When nothing else works"
          >
            <Prose>
              {
                "If every fix above has failed, perform a full reset: remove Node and npm entirely, wipe all caches and global package directories, and reinstall from scratch using nvm."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`# 1. Uninstall current Node (Homebrew example)
brew uninstall --force node

# 2. Remove npm cache and global packages
rm -rf ~/.npm
rm -rf ~/.nvm   # only if reinstalling nvm too

# 3. Install nvm fresh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.zshrc

# 4. Install Node LTS via nvm
nvm install --lts
nvm use --lts
nvm alias default node

# 5. Verify
node --version
npm --version

# 6. Reinstall your project dependencies
cd your-project
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows"}</SubHeading>
            <CheckList
              items={[
                "Uninstall Node.js from Add or Remove Programs",
                "Delete C:\\Program Files\\nodejs",
                "Delete C:\\Users\\you\\AppData\\Roaming\\npm and npm-cache",
                "Delete C:\\Users\\you\\AppData\\Local\\nvm (if using nvm-windows)",
                "Restart Windows",
                "Download and install nvm-windows from github.com/coreybutler/nvm-windows",
                "Run: nvm install lts && nvm use lts",
                "Verify: node --version && npm --version",
              ]}
            />
          </FixCard>

          {/* ════ VERSION TABLE ════ */}
          <SectionHeading id="version-table">
            {"Compatible Node.js and npm Version Pairs"}
          </SectionHeading>

          <Prose>
            {
              "This is the key reference table. If your Node and npm versions are not on the same row, they are likely incompatible — and that is the root cause of your error."
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Node.js LTS Releases and Bundled npm Versions"}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-white">
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Node.js version"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Bundled npm"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"LTS status"}
                    </th>
                    <th className="text-left px-5 py-3 font-bold text-gray-700">
                      {"Recommended?"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Node 22.x", "npm 10.x", "Active LTS", "✅ Yes"],
                    ["Node 20.x", "npm 10.x", "Active LTS", "✅ Yes"],
                    ["Node 18.x", "npm 9.x", "Maintenance LTS", "✅ Yes"],
                    ["Node 16.x", "npm 8.x", "End of Life", "⚠️ Upgrade now"],
                    ["Node 14.x", "npm 6.x", "End of Life", "❌ No"],
                    ["Node 12.x", "npm 6.x", "End of Life", "❌ No"],
                    ["Node 10.x", "npm 6.x", "End of Life", "❌ No"],
                  ].map(([node, bundledNpm, status, rec]) => (
                    <tr
                      key={node}
                      className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-5 py-3 font-mono text-indigo-700 text-xs font-bold">
                        {node}
                      </td>
                      <td className="px-5 py-3 font-mono text-gray-600 text-xs">
                        {bundledNpm}
                      </td>
                      <td className="px-5 py-3 text-gray-600 text-xs">
                        {status}
                      </td>
                      <td
                        className={`px-5 py-3 text-xs font-bold ${rec.startsWith("✅") ? "text-green-600" : rec.startsWith("⚠️") ? "text-amber-600" : "text-red-500"}`}
                      >
                        {rec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <TipBox>
            {
              "You can safely run a newer npm than the bundled version on any Node release — for example npm 10 on Node 18 works fine. What breaks things is running a much older npm on a newer Node, or running end-of-life Node versions with any modern npm."
            }
          </TipBox>

          {/* ════ OS NOTES ════ */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {"The most common macOS trigger: running "}
            <IC>{"brew upgrade"}</IC>
            {
              " which upgrades Node.js but leaves the system npm untouched. After any Homebrew Node upgrade, always run "
            }
            <IC>{"npm install -g npm@latest"}</IC>
            {
              " immediately. Better long-term: switch to nvm entirely and uninstall the Homebrew Node — Homebrew and nvm managing Node simultaneously causes conflicts."
            }
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "Windows users most commonly hit this after using the Node.js official installer. The installer bundles a specific npm version — if you later run "
            }
            <IC>{"npm install -g npm@latest"}</IC>
            {", it installs a newer npm into "}
            <IC>{"%APPDATA%\\npm"}</IC>
            {" while the old bundled npm still sits in "}
            <IC>{"C:\\Program Files\\nodejs"}</IC>
            {". Depending on which one is first in your "}
            <IC>{"PATH"}</IC>
            {
              ", you can end up running a mismatched combination. The permanent fix is using nvm-windows."
            }
          </Prose>

          <SubHeading>{"Linux"}</SubHeading>
          <Prose>
            {"On Ubuntu and Debian, installing Node via "}
            <IC>{"apt"}</IC>
            {
              " often installs an outdated version from the distro's package repository — sometimes as old as Node 12. Always use the "
            }
            <IC>{"NodeSource"}</IC>
            {
              " repository or nvm to get a current Node version on Linux. The system apt package for nodejs is almost always too old for modern npm."
            }
          </Prose>
          <CodeBlock title="Linux — check if your apt Node is outdated">
            {`node --version
# If this prints v12.x or v14.x, upgrade immediately via NodeSource or nvm`}
          </CodeBlock>

          {/* ════ PREVENTION ════ */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error Permanently"}
          </SectionHeading>

          <CheckList
            items={[
              "Use nvm to manage Node.js — it installs matching npm versions automatically and makes switching trivial",
              "After any Node.js upgrade, immediately run: npm install -g npm@latest",
              "Never run end-of-life Node versions (anything below 18.x as of 2026)",
              "On macOS: do not mix Homebrew Node and nvm Node — pick one and stick to it",
              "On Windows: use nvm-windows instead of the official Node.js installer",
              "Add a .nvmrc file to your project root to pin the Node version for your whole team",
              "In CI/CD pipelines, always specify an exact Node version using actions/setup-node or similar",
            ]}
          />

          <SubHeading>
            {"Pin your project's Node version with .nvmrc"}
          </SubHeading>
          <CodeBlock title=".nvmrc (project root)">{"20"}</CodeBlock>
          <CodeBlock title="terminal — any developer cloning the repo just runs:">
            {`nvm use      # automatically reads .nvmrc and switches to Node 20
npm install`}
          </CodeBlock>

          {/* ════ SUMMARY ════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Reference — Fix Order"}
            </h2>
            <ol className="space-y-3">
              {[
                { fix: "npm install -g npm@latest → retry", rate: "85%" },
                {
                  fix: "nvm install --lts && nvm use --lts → retry",
                  rate: "95%",
                },
                { fix: "Reinstall Node.js cleanly → retry", rate: "97%" },
                {
                  fix: "Clear cache + delete node_modules → npm install",
                  rate: "98%",
                },
                { fix: "Fix conflicting npm paths on Windows", rate: "99%" },
                { fix: "Full Node + npm nuclear reset via nvm", rate: "99.9%" },
              ].map(({ fix, rate }, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="flex-1 font-mono text-xs bg-white border border-gray-100 rounded-lg px-3 py-2 text-gray-700">
                    {fix}
                  </span>
                  <span className="text-xs font-bold text-green-600 whitespace-nowrap">
                    {rate}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* ════ FAQ ════ */}
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

          {/* Related */}
          <RelatedArticles />

          {/* CTA */}
          <div className="mt-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-700 px-8 py-8 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-200 mb-2">
              {"Need Expert Help?"}
            </p>
            <h2 className="text-xl font-extrabold text-white mb-3">
              {"We Build Production-Grade Next.js & Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Dealing with complex Node.js environment issues on a production project? We can fix your setup and keep it clean."
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
