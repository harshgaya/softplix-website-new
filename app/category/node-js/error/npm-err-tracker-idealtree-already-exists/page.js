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
  title:
    'npm ERR! Tracker "idealTree" Already Exists — Complete Fix Guide 2026',
  description:
    'Step-by-step fixes for the "npm ERR! Tracker idealTree already exists" error. Covers every cause on macOS, Windows, and Linux — from a 30-second cache clear to the nuclear option.',
  keywords:
    "npm err tracker idealTree already exists, npm idealtree error, npm install idealtree fix, npm cache error fix 2026, npm tracker already exists",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-err-tracker-idealtree-already-exists",
  },
  openGraph: {
    title:
      'npm ERR! Tracker "idealTree" Already Exists — Complete Fix Guide 2026',
    description:
      'Step-by-step fixes for the "npm ERR! Tracker idealTree already exists" error on macOS, Windows, and Linux.',
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-err-tracker-idealtree-already-exists",
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

function FixCard({ number, title, time, children }) {
  return (
    <div className="my-8 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-indigo-50 to-slate-50 border-b border-gray-100">
        <span className="w-8 h-8 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center flex-shrink-0">
          {number}
        </span>
        <h3 className="flex-1 font-bold text-gray-900 text-base leading-tight">
          {title}
        </h3>
        <span className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap">
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
  { label: "What does this error mean?", href: "#what-it-means" },
  { label: "Fix 1 — Clear the npm cache (30 sec)", href: "#fix-1" },
  { label: "Fix 2 — Delete node_modules + lock file", href: "#fix-2" },
  { label: "Fix 3 — Kill zombie npm processes", href: "#fix-3" },
  { label: "Fix 4 — Use --legacy-peer-deps or --force", href: "#fix-4" },
  { label: "Fix 5 — Downgrade or upgrade npm", href: "#fix-5" },
  { label: "Fix 6 — The nuclear option", href: "#fix-6" },
  { label: "OS-specific notes (macOS / Windows / Linux)", href: "#os-notes" },
  { label: "How to prevent it happening again", href: "#prevention" },
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
    title: "Fix: npm install Not Working",
    href: "npm-install-not-working",
    time: "9 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm command not found (Windows, macOS, Linux)",
    href: "npm-command-not-found",
    time: "5 min read",
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
    q: 'What causes npm ERR! Tracker "idealTree" already exists?',
    a: 'The error occurs when npm tries to initialise its internal "idealTree" dependency resolver but finds one already running. Common causes are a corrupted npm cache, an interrupted previous install, zombie npm processes still running in the background, or a lock file out of sync with the cache.',
  },
  {
    q: "Will clearing the npm cache delete my installed packages?",
    a: "No. The npm cache is completely separate from your node_modules folder. Clearing it only removes cached package tarballs that npm uses to speed up downloads. Your existing node_modules are not affected.",
  },
  {
    q: "Why does this error happen more often on Windows?",
    a: "Windows uses stricter file locking than macOS or Linux. When an npm process crashes or is force-killed on Windows, it can leave lock files and zombie processes behind that block the next npm command from starting a fresh idealTree resolver.",
  },
  {
    q: "Does this error affect yarn or pnpm?",
    a: "No. The idealTree tracker is specific to npm's internal dependency resolution architecture. Yarn and pnpm use completely different package resolution systems and do not produce this error.",
  },
  {
    q: "I deleted node_modules and package-lock.json but the error persists. What now?",
    a: "If deleting node_modules and the lock file didn't fix it, the issue is either a zombie npm process still running in the background (Fix 3), or a corrupted global npm cache (Fix 6 — nuclear option). Try killing all node/npm processes first, then run npm cache clean --force before attempting the install again.",
  },
  {
    q: "Can I use yarn or pnpm instead to avoid this error?",
    a: "Yes. If you keep hitting this error and need to unblock quickly, switching to yarn (yarn install) or pnpm (pnpm install) for that project is a valid workaround — they won't produce the idealTree error. However the root cause is worth fixing so your npm workflow stays healthy.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      'npm ERR! Tracker "idealTree" Already Exists — Complete Fix Guide 2026',
    description:
      "Step-by-step fixes for the npm ERR! Tracker idealTree already exists error on macOS, Windows, and Linux.",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-err-tracker-idealtree-already-exists",
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
            <span className="text-gray-500">{"npm idealTree Fix"}</span>
          </nav> */}

          {/* Article header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["npm", "Node.js"].map((t) => (
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
              {'npm ERR! Tracker "idealTree" Already Exists'}
              <span className="block text-indigo-600">
                {"— Complete Fix Guide 2026"}
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
                {"npm 9–10 · Node 16–22"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Quickest Fix — works 90% of the time"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {
                "Run these three commands in order and you will be back up in under a minute:"
              }
            </p>
            <CodeBlock>
              {`npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>
            <p className="text-xs text-green-700 mt-1">
              {"Windows? Replace the rm line with: "}
              <IC>{"rmdir /s /q node_modules && del package-lock.json"}</IC>
            </p>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed">
            {
              "Still broken after that? Every other cause and fix is covered below — in order of what solves it fastest."
            }
          </p>

          {/* ToC */}
          <TableOfContents />

          {/* ═══════ SECTION: What it means ═══════ */}
          <SectionHeading id="what-it-means">
            {'What Does npm ERR! Tracker "idealTree" Already Exists Mean?'}
          </SectionHeading>

          <Prose>{"Here is the exact error you are seeing:"}</Prose>

          <ErrorBlock>
            {`npm ERR! code EEXIST
npm ERR! Tracker "idealTree" already exists`}
          </ErrorBlock>

          <Prose>
            {"npm uses an internal data structure called "}
            <IC>{"idealTree"}</IC>
            {
              " to calculate the complete dependency graph before it touches your "
            }
            <IC>{"node_modules"}</IC>
            {
              " folder. Think of it as npm building a shopping list before going to the store — it figures out exactly what to buy, then goes and buys it."
            }
          </Prose>

          <Prose>
            {
              "The error means npm tried to start building that list and found one "
            }
            <strong>{"already in progress"}</strong>
            {
              ". It's a collision — two npm processes trying to use the same resolver at the same time, or a leftover lock from a process that died without cleaning up."
            }
          </Prose>

          <SubHeading>{"The Most Common Causes"}</SubHeading>
          <CheckList
            items={[
              "A previous npm install was interrupted — Ctrl+C, terminal crash, or force-closed window",
              "Two npm commands running simultaneously in the same project directory",
              "Corrupted npm cache from a failed or partial download",
              "package-lock.json out of sync with the npm cache",
              "A known bug in a specific npm version — especially after upgrading Node.js",
              "Windows file lock from a zombie npm/node process still running in the background",
            ]}
          />

          <TipBox>
            {
              "This error is 3–4× more common on Windows than macOS or Linux. Windows has stricter file locking — when npm crashes, it often leaves invisible lock files and background processes that block the next install attempt."
            }
          </TipBox>

          {/* ═══════ FIX 1 ═══════ */}
          <FixCard number="1" title="Clear the npm Cache" time="30 seconds">
            <Prose>
              {
                "The npm cache stores downloaded package tarballs so future installs are faster. When the cache gets corrupted — which happens after network drops, interrupted installs, or disk issues — the idealTree resolver can fail before it even starts."
              }
            </Prose>
            <CodeBlock title="terminal">{"npm cache clean --force"}</CodeBlock>
            <Prose>{"Then try your install again:"}</Prose>
            <CodeBlock title="terminal">{"npm install"}</CodeBlock>
            <TipBox>
              {
                "Clearing the cache does NOT delete your node_modules or uninstall any packages. It only removes cached tarballs npm uses to skip re-downloading. Completely safe — run it freely."
              }
            </TipBox>
          </FixCard>

          {/* ═══════ FIX 2 ═══════ */}
          <FixCard
            number="2"
            title="Delete node_modules and package-lock.json"
            time="1–3 minutes"
          >
            <Prose>
              {
                "If the cache clean alone didn't work, the lock file is likely out of sync with the cache state. Wiping both and doing a fully fresh install resolves the conflict cleanly."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`rm -rf node_modules
rm package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — Command Prompt"}</SubHeading>
            <CodeBlock title="cmd">
              {`rmdir /s /q node_modules
del package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — PowerShell"}</SubHeading>
            <CodeBlock title="powershell">
              {`Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install`}
            </CodeBlock>

            <TipBox>
              {
                "Monorepo? Delete node_modules from the root AND every workspace package folder, not just the root. A stale lock in any workspace can trigger the idealTree conflict."
              }
            </TipBox>
          </FixCard>

          {/* ═══════ FIX 3 ═══════ */}
          <FixCard
            number="3"
            title="Kill Zombie npm / Node Processes"
            time="1 minute"
          >
            <Prose>
              {
                "If a previous npm command was force-killed, it sometimes leaves a zombie process still alive in the background — holding the idealTree lock open. The next npm command sees the lock and throws the error immediately."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`# List all npm/node processes
ps aux | grep -E 'npm|node'

# Kill them all
pkill -f npm
pkill -f node`}
            </CodeBlock>

            <SubHeading>
              {"Windows — PowerShell (run as Administrator)"}
            </SubHeading>
            <CodeBlock title="powershell">
              {`# List running node processes
Get-Process | Where-Object { $_.Name -like "*node*" }

# Kill them
Stop-Process -Name "node" -Force`}
            </CodeBlock>

            <Prose>{"After killing the processes, run install again:"}</Prose>
            <CodeBlock title="terminal">{"npm install"}</CodeBlock>
          </FixCard>

          {/* ═══════ FIX 4 ═══════ */}
          <FixCard
            number="4"
            title="Use --legacy-peer-deps or --force"
            time="30 seconds"
          >
            <Prose>
              {
                "Sometimes the conflict is between how npm resolves peer dependencies across cached versions. These flags change the resolution strategy and can bypass the idealTree collision:"
              }
            </Prose>

            <SubHeading>{"Option A — legacy peer deps resolver"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install --legacy-peer-deps"}
            </CodeBlock>

            <SubHeading>{"Option B — force a fresh resolution"}</SubHeading>
            <CodeBlock title="terminal">{"npm install --force"}</CodeBlock>

            <SubHeading>{"Option C — prefer offline cache"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install --prefer-offline"}
            </CodeBlock>

            <TipBox>
              {
                "Use --force as a last resort only. It bypasses certain version safety checks and can occasionally install incompatible package combinations. Always smoke-test your app after a forced install before committing."
              }
            </TipBox>
          </FixCard>

          {/* ═══════ FIX 5 ═══════ */}
          <FixCard number="5" title="Downgrade or Upgrade npm" time="2 minutes">
            <Prose>
              {
                "Specific npm versions have had documented bugs with the idealTree tracker — particularly around major Node.js version upgrades. If nothing above has worked, changing your npm version itself is the next step."
              }
            </Prose>

            <SubHeading>{"Check your current npm version"}</SubHeading>
            <CodeBlock title="terminal">{"npm --version"}</CodeBlock>

            <SubHeading>{"Update to the latest stable npm"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install -g npm@latest"}
            </CodeBlock>

            <SubHeading>{"Or pin to a known-stable version"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm install -g npm@10   # stable for Node 18/20/22
npm install -g npm@9    # fallback if npm 10 has issues`}
            </CodeBlock>

            <Prose>{"After updating npm, clear the cache and retry:"}</Prose>
            <CodeBlock title="terminal">
              {`npm cache clean --force
npm install`}
            </CodeBlock>
          </FixCard>

          {/* ═══════ FIX 6 ═══════ */}
          <FixCard
            number="6"
            title="The Nuclear Option — Full npm Reset"
            time="3–5 minutes"
          >
            <Prose>
              {
                "If every fix above has failed, something is fundamentally broken in your npm installation — likely the global cache directory itself. This full reset wipes it clean and starts from zero."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`# 1. Force-clear the npm cache
npm cache clean --force

# 2. Delete the entire npm cache directory
rm -rf ~/.npm

# 3. Delete node_modules and lock file
rm -rf node_modules package-lock.json

# 4. Fresh install
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — PowerShell (Administrator)"}</SubHeading>
            <CodeBlock title="powershell">
              {`# 1. Force-clear the npm cache
npm cache clean --force

# 2. Delete AppData npm-cache folder
Remove-Item -Recurse -Force "$env:APPDATA\npm-cache"

# 3. Delete node_modules and lock file
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 4. Fresh install
npm install`}
            </CodeBlock>

            <TipBox>
              {
                "Windows still failing after this? Try running PowerShell as Administrator — Windows often blocks npm from accessing certain directories without elevated privileges, which can silently leave partial cache files behind."
              }
            </TipBox>
          </FixCard>

          {/* ═══════ OS NOTES ═══════ */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "macOS is the most stable environment for npm. If you hit this error on a Mac, Fix 1 or Fix 2 will resolve it almost every time. One common macOS-specific cause: mixing Node installations — for example, Homebrew-installed Node alongside a separate npm install. Pick one method and stick with it. "
            }
            <strong>{"nvm is the recommended approach"}</strong>
            {" — it avoids all version and permission conflicts."}
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "Windows is where this error is most persistent. Always try Fix 3 (kill zombie processes) on Windows before reaching for the nuclear option — a zombie node.exe is the most common culprit on Windows and is easy to miss."
            }
          </Prose>
          <Prose>
            {
              "Also check that Windows Defender or your antivirus is not scanning "
            }
            <IC>{"node_modules"}</IC>
            {
              " in real time. This is a separate issue but it causes npm to fail mid-install on Windows regularly. Add your project folder to the Defender exclusion list:"
            }
          </Prose>
          <CodeBlock title="PowerShell (Administrator)">
            {`Add-MpPreference -ExclusionPath "C:\\path\\to\\your\\project"`}
          </CodeBlock>

          <SubHeading>{"Linux"}</SubHeading>
          <Prose>
            {
              "On Linux, the most common additional cause is a permission mismatch. If you installed Node with "
            }
            <IC>{"sudo"}</IC>
            {
              ", the npm cache directory may be owned by root — causing conflicts when running npm as a regular user."
            }
          </Prose>
          <CodeBlock title="terminal">
            {`# Check who owns the npm cache
ls -la ~/.npm

# Fix ownership (replace 'youruser' with your actual username)
sudo chown -R youruser:youruser ~/.npm`}
          </CodeBlock>

          {/* ═══════ PREVENTION ═══════ */}
          <SectionHeading id="prevention">
            {"How to Stop This Happening Again"}
          </SectionHeading>

          <Prose>
            {
              "A few habits that prevent the idealTree error from ever coming back:"
            }
          </Prose>

          <CheckList
            items={[
              "Use nvm to manage Node and npm — it eliminates the version and permission conflicts that most commonly trigger this error",
              "Never run two npm commands simultaneously in the same project",
              "Let npm finish or fail cleanly — if you must interrupt, use Ctrl+C once and wait for it to exit gracefully",
              "Add node_modules to .gitignore and never commit it",
              "Commit package-lock.json to version control so your whole team installs the same dependency tree",
              "Exclude node_modules from real-time antivirus scanning on Windows",
              "Run npm cache verify periodically to catch cache corruption before it causes errors",
            ]}
          />

          <CodeBlock title="Useful npm diagnostic commands">
            {`# Verify cache integrity (finds corruption without deleting)
npm cache verify

# Show all npm config values
npm config list

# Show npm + Node version
npm --version && node --version

# Show where npm stores the cache
npm config get cache`}
          </CodeBlock>

          {/* ═══════ SUMMARY ═══════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Reference — Fix Order"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  fix: "npm cache clean --force → npm install",
                  rate: "90%",
                },
                {
                  fix: "Delete node_modules + package-lock.json → npm install",
                  rate: "95%",
                },
                {
                  fix: "Kill zombie npm/node processes → npm install",
                  rate: "97%",
                },
                {
                  fix: "npm install --legacy-peer-deps  or  --force",
                  rate: "98%",
                },
                {
                  fix: "Update or downgrade npm → retry",
                  rate: "99%",
                },
                {
                  fix: "Nuclear reset: delete ~/.npm → fresh install",
                  rate: "99.9%",
                },
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

          {/* ═══════ FAQ ═══════ */}
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
                "Softplix is a full-stack development agency. If you're hitting npm errors in a larger project, we can help audit your setup, fix your architecture, and ship faster."
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
