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
  title: "npm install Not Working — Every Fix [Complete Guide 2026]",
  description:
    "npm install not working? This guide covers every possible cause and fix — network errors, permission issues, corrupted cache, version conflicts, proxy problems — for macOS, Windows, and Linux.",
  keywords:
    "npm install not working, npm install failing, npm install stuck, npm install error fix, npm install hanging 2026, why is npm install not working, npm install issues fix",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-install-not-working",
  },
  openGraph: {
    title: "npm install Not Working — Every Fix [Complete Guide 2026]",
    description:
      "npm install not working? Every cause and fix covered — network, permissions, cache, version conflicts, proxy — for macOS, Windows, and Linux.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-install-not-working",
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
  { label: "Read the error first — diagnose in 30 seconds", href: "#diagnose" },
  { label: "Fix 1 — Clear cache + delete node_modules", href: "#fix-1" },
  { label: "Fix 2 — Network and registry issues", href: "#fix-2" },
  { label: "Fix 3 — Permission errors (EACCES)", href: "#fix-3" },
  { label: "Fix 4 — npm install stuck / hanging forever", href: "#fix-4" },
  { label: "Fix 5 — Peer dependency conflicts", href: "#fix-5" },
  { label: "Fix 6 — Node / npm version mismatch", href: "#fix-6" },
  { label: "Fix 7 — Proxy and corporate network issues", href: "#fix-7" },
  { label: "Fix 8 — Disk space and memory issues", href: "#fix-8" },
  { label: "Fix 9 — The nuclear option", href: "#fix-9" },
  { label: "OS-specific notes", href: "#os-notes" },
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
    title: "Fix: npm ERR! cb.apply is not a function",
    href: "npm-err-cb-apply-is-not-a-function",
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
    q: "Why is npm install not working?",
    a: "npm install can fail for many reasons: corrupted cache, wrong directory, network issues, permission errors, Node/npm version mismatch, peer dependency conflicts, disk space exhaustion, or a corporate proxy blocking registry access. The best first step is to read the exact error message in your terminal — it tells you which category of problem you are dealing with.",
  },
  {
    q: "npm install is stuck and not doing anything — what do I do?",
    a: "A stuck npm install is almost always a network issue or a lock file conflict. Try: press Ctrl+C to cancel, run 'npm cache clean --force', then retry with 'npm install --prefer-offline'. If it hangs again, check your internet connection, disable VPN if active, and try switching to a different npm registry mirror.",
  },
  {
    q: "How do I fix npm install EACCES permission denied?",
    a: "Never use sudo with npm install for local packages — it creates files owned by root that cause future permission errors. Instead, fix the ownership of your npm cache: 'sudo chown -R $(whoami) ~/.npm' on macOS/Linux. On Windows, run your terminal as Administrator or use nvm-windows which avoids permission issues entirely.",
  },
  {
    q: "npm install says unable to resolve dependency tree — how do I fix it?",
    a: "This is a peer dependency conflict. Run 'npm install --legacy-peer-deps' to use the older, more permissive resolver that ignores peer dependency conflicts. Alternatively run 'npm install --force' but be aware this may install incompatible versions.",
  },
  {
    q: "npm install works locally but fails in CI — why?",
    a: "The most common CI-specific causes are: different Node version in CI than locally (fix with .nvmrc or actions/setup-node), missing package-lock.json in the repo (always commit it), network restrictions blocking the npm registry, or insufficient memory in the CI container for large installs.",
  },
  {
    q: "How do I speed up npm install?",
    a: "Use 'npm ci' instead of 'npm install' in CI environments — it is faster and more deterministic. Use '--prefer-offline' to use cached packages when possible. Consider switching to pnpm which uses a global content-addressable store and is significantly faster than npm for large monorepos.",
  },
  {
    q: "npm install keeps deleting and re-adding packages — what is happening?",
    a: "This usually means your package-lock.json is out of sync with package.json, often caused by a git merge conflict that was not fully resolved. Delete package-lock.json and node_modules, then run npm install to generate a fresh, consistent lock file.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "npm install Not Working — Every Fix [Complete Guide 2026]",
    description:
      "Complete troubleshooting guide for npm install not working — covering every cause and fix for macOS, Windows, and Linux.",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-install-not-working",
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
            <span className="text-gray-500">{"npm install Not Working"}</span>
          </nav> */}

          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {["npm", "Node.js", "Troubleshooting"].map((t) => (
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
              {"npm install Not Working"}
              <span className="block text-indigo-600">
                {"— Every Fix [Complete Guide 2026]"}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400 pb-8 border-b border-gray-100">
              <span className="flex items-center gap-1.5">
                <FaCalendarDays className="text-xs" />
                {"January 2026"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaClock className="text-xs" />
                {"9 min read"}
              </span>
              <span className="flex items-center gap-1.5">
                <FaCode className="text-xs" />
                {"npm 9–10 · Node 18–22 · All OS"}
              </span>
            </div>
          </header>

          {/* Quick fix box */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Try This First — Fixes 70% of Cases"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Three commands. Run them in order:"}
            </p>
            <CodeBlock>
              {`npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>
            <p className="text-xs text-green-700">
              {"Windows? Use "}
              <IC>{"rmdir /s /q node_modules && del package-lock.json"}</IC>
              {" instead of the rm line."}
            </p>
          </div>

          <Prose>
            {
              "Still broken? The problem is one of nine specific causes. The next section will identify yours in under a minute."
            }
          </Prose>

          <TableOfContents />

          {/* ════ DIAGNOSE ════ */}
          <SectionHeading id="diagnose">
            {"Read the Error First — Diagnose in 30 Seconds"}
          </SectionHeading>

          <Prose>
            {
              "npm install not working is a symptom, not a cause. The terminal output tells you exactly what is wrong — if you know what to look for. Find your error type below and jump straight to the right fix."
            }
          </Prose>

          <div className="my-6 rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-slate-50 px-5 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                {"Error Message → Cause → Jump to Fix"}
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-white">
                    <th className="text-left px-4 py-3 font-bold text-gray-700 w-2/5">
                      {"Error contains..."}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Cause"}
                    </th>
                    <th className="text-left px-4 py-3 font-bold text-gray-700">
                      {"Fix"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    [
                      "ENOENT, cache error, idealTree",
                      "Corrupted cache or lock file",
                      "#fix-1",
                    ],
                    [
                      "ENOTFOUND, network, ETIMEDOUT",
                      "Network or registry unreachable",
                      "#fix-2",
                    ],
                    [
                      "EACCES, permission denied",
                      "File permission issue",
                      "#fix-3",
                    ],
                    [
                      "Hangs, no output, stuck",
                      "Network timeout or lock file",
                      "#fix-4",
                    ],
                    [
                      "ERESOLVE, peer dependency",
                      "Dependency version conflict",
                      "#fix-5",
                    ],
                    [
                      "EBADENGINE, engine mismatch",
                      "Wrong Node.js version",
                      "#fix-6",
                    ],
                    [
                      "ECONNREFUSED, proxy error",
                      "Corporate proxy blocking npm",
                      "#fix-7",
                    ],
                    [
                      "ENOSPC, out of disk space",
                      "Disk or memory full",
                      "#fix-8",
                    ],
                  ].map(([err, cause, href]) => (
                    <tr
                      key={err}
                      className="border-b border-gray-50 last:border-0 hover:bg-slate-50 transition-colors"
                    >
                      <td className="px-4 py-3 font-mono text-indigo-700 text-xs">
                        {err}
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">
                        {cause}
                      </td>
                      <td className="px-4 py-3">
                        <a
                          href={href}
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
          </div>

          <TipBox>
            {
              "Run npm install with verbose logging to get the most detail: 'npm install --verbose'. This shows exactly which step failed and why — much easier to diagnose than the default output."
            }
          </TipBox>

          {/* ════ FIX 1 ════ */}
          <FixCard
            number="1"
            title="Clear Cache + Delete node_modules"
            time="2–5 min"
            tag="Corrupted cache · idealTree errors · stale lock file"
          >
            <Prose>
              {
                "The most common cause of a suddenly broken npm install is a corrupted cache or a "
              }
              <IC>{"package-lock.json"}</IC>
              {
                " that has drifted out of sync with the registry. This clears everything and starts fresh."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm cache clean --force
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — Command Prompt"}</SubHeading>
            <CodeBlock title="cmd">
              {`npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
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
                "Clearing the npm cache does not delete your installed packages or your source code. It only removes cached package tarballs. Completely safe to run at any time."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 2 ════ */}
          <FixCard
            number="2"
            title="Network and Registry Issues"
            time="2–5 min"
            tag="ENOTFOUND · ETIMEDOUT · registry errors"
          >
            <Prose>
              {"If npm cannot reach the registry at "}
              <IC>{"registry.npmjs.org"}</IC>
              {
                ", every install will fail. This can be caused by no internet connection, DNS issues, a misconfigured registry URL, or VPN interference."
              }
            </Prose>

            <SubHeading>{"Check your internet and registry"}</SubHeading>
            <CodeBlock title="terminal">
              {`# Can you reach the npm registry?
ping registry.npmjs.org

# What registry is npm pointing to?
npm config get registry`}
            </CodeBlock>

            <SubHeading>{"Registry is wrong — reset to default"}</SubHeading>
            <Prose>
              {"If the registry shows something other than "}
              <IC>{"https://registry.npmjs.org/"}</IC>
              {", a previous tool changed it. Reset:"}
            </Prose>
            <CodeBlock title="terminal">
              {"npm config set registry https://registry.npmjs.org/"}
            </CodeBlock>

            <SubHeading>{"Try installing with verbose output"}</SubHeading>
            <CodeBlock title="terminal">{"npm install --verbose"}</CodeBlock>

            <SubHeading>{"Switch to a registry mirror"}</SubHeading>
            <Prose>
              {
                "If the main registry is slow or down in your region, try a mirror temporarily:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {`# Cloudflare npm mirror (fast globally)
npm install --registry https://registry.npmjs.cf/

# Or use npmmirror (popular in Asia)
npm install --registry https://registry.npmmirror.com/`}
            </CodeBlock>

            <SubHeading>{"Disable IPv6 if causing DNS issues"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm config set prefer-ipv4 true"}
            </CodeBlock>

            <TipBox>
              {
                "If you are on VPN, try disconnecting it and running npm install again. VPNs frequently intercept HTTPS traffic to the npm registry and cause ENOTFOUND or ETIMEDOUT errors without any obvious indication."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 3 ════ */}
          <FixCard
            number="3"
            title="Permission Errors (EACCES)"
            time="2 min"
            tag="EACCES · permission denied · sudo issues"
          >
            <ErrorBlock>
              {`npm ERR! code EACCES
npm ERR! syscall mkdir
npm ERR! path /usr/local/lib/node_modules
npm ERR! errno -13
npm ERR! Error: EACCES: permission denied`}
            </ErrorBlock>

            <Prose>
              {
                "This means npm is trying to write to a directory it does not have permission to modify. The most common cause on macOS and Linux is that "
              }
              <IC>{"node_modules"}</IC>
              {" or the npm cache is partially owned by root from a previous "}
              <IC>{"sudo npm install"}</IC>
              {"."}
            </Prose>

            <WarnBox>
              {
                "Never use 'sudo npm install' for local project packages. It creates root-owned files that break all future non-sudo installs. If you are using sudo because npm demands it, the real fix is fixing the ownership — not escalating privileges."
              }
            </WarnBox>

            <SubHeading>{"Fix npm cache ownership — macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}`}
            </CodeBlock>

            <SubHeading>{"Fix project node_modules ownership"}</SubHeading>
            <CodeBlock title="terminal">
              {`sudo chown -R $(whoami) node_modules
rm -rf node_modules package-lock.json
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows — run terminal as Administrator"}</SubHeading>
            <Prose>
              {
                "Right-click Command Prompt or PowerShell → Run as Administrator → retry "
              }
              <IC>{"npm install"}</IC>
              {
                ". For a permanent fix without admin access every time, use nvm-windows which installs Node in your user profile directory."
              }
            </Prose>

            <TipBox>
              {
                "The permanent fix for permission issues on macOS and Linux is to use nvm. It installs Node in your home directory (~/.nvm) where you always have full write access — no sudo required, ever."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 4 ════ */}
          <FixCard
            number="4"
            title="npm install Stuck or Hanging Forever"
            time="3 min"
            tag="No output · cursor blinking · never completes"
          >
            <Prose>
              {
                "npm install hangs at a blank cursor with zero output — no error, no progress. This is one of the most frustrating scenarios and has several distinct causes."
              }
            </Prose>

            <SubHeading>{"Step 1 — Cancel and check npm version"}</SubHeading>
            <CodeBlock title="terminal">
              {`# Press Ctrl+C to cancel the stuck install
# Then check versions
node --version
npm --version`}
            </CodeBlock>

            <SubHeading>{"Step 2 — Try with verbose flag"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm install --verbose
# Watch where it stops — that line is the problem`}
            </CodeBlock>

            <SubHeading>
              {"Step 3 — Clear cache and use prefer-offline"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`npm cache clean --force
npm install --prefer-offline`}
            </CodeBlock>

            <SubHeading>{"Step 4 — Increase network timeout"}</SubHeading>
            <Prose>
              {
                "npm defaults to a 30-second network timeout. On slow connections or large packages, this can cause installs to silently hang:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {`npm install --fetch-timeout=120000   # 2 minutes
npm install --fetch-retry-mintimeout=20000
npm install --fetch-retry-maxtimeout=120000`}
            </CodeBlock>

            <SubHeading>{"Step 5 — Check for a hung npm process"}</SubHeading>
            <CodeBlock title="macOS / Linux">
              {`ps aux | grep npm
pkill -f npm`}
            </CodeBlock>
            <CodeBlock title="Windows PowerShell">
              {`Get-Process | Where-Object { $_.Name -like "*node*" }
Stop-Process -Name "node" -Force`}
            </CodeBlock>

            <TipBox>
              {
                "Antivirus real-time scanning of node_modules is a common silent cause of hanging installs on Windows. Add your project folder to your antivirus exclusion list and the hang will often disappear immediately."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 5 ════ */}
          <FixCard
            number="5"
            title="Peer Dependency Conflicts (ERESOLVE)"
            time="2 min"
            tag="ERESOLVE · unable to resolve dependency tree"
          >
            <ErrorBlock>
              {`npm ERR! code ERESOLVE
npm ERR! ERESOLVE unable to resolve dependency tree
npm ERR!
npm ERR! While resolving: my-app@1.0.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^17.0.0" from some-package@2.1.0`}
            </ErrorBlock>

            <Prose>
              {
                "This means two packages in your dependency tree require incompatible versions of the same package. npm 7+ introduced strict peer dependency resolution which surfaces these conflicts as hard errors rather than silently installing the wrong version."
              }
            </Prose>

            <SubHeading>
              {"Option A — Use legacy peer deps (quickest)"}
            </SubHeading>
            <CodeBlock title="terminal">
              {"npm install --legacy-peer-deps"}
            </CodeBlock>

            <SubHeading>
              {"Option B — Force install (use with caution)"}
            </SubHeading>
            <CodeBlock title="terminal">{"npm install --force"}</CodeBlock>

            <SubHeading>{"Option C — Make it permanent in .npmrc"}</SubHeading>
            <Prose>
              {"If your project consistently requires "}
              <IC>{"--legacy-peer-deps"}</IC>
              {", add it to "}
              <IC>{".npmrc"}</IC>
              {" so you never need to type it again:"}
            </Prose>
            <CodeBlock title=".npmrc">{"legacy-peer-deps=true"}</CodeBlock>

            <SubHeading>
              {"Option D — Update the conflicting package"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`# Update the package causing the peer conflict
npm install some-package@latest

# Or check what version supports your react version
npm info some-package peerDependencies`}
            </CodeBlock>

            <WarnBox>
              {
                "Using --force can install genuinely incompatible versions that crash at runtime rather than install time. Always test your app after a forced install."
              }
            </WarnBox>
          </FixCard>

          {/* ════ FIX 6 ════ */}
          <FixCard
            number="6"
            title="Node / npm Version Mismatch (EBADENGINE)"
            time="3 min"
            tag="EBADENGINE · wrong Node version"
          >
            <Prose>
              {
                "Some packages require a minimum Node.js version to install correctly. If your Node version is too old, npm install will fail with an engine compatibility warning or error."
              }
            </Prose>

            <SubHeading>{"Check your versions"}</SubHeading>
            <CodeBlock title="terminal">
              {`node --version    # should be 18.x or higher in 2026
npm --version     # should be 9.x or 10.x`}
            </CodeBlock>

            <SubHeading>{"Update Node with nvm"}</SubHeading>
            <CodeBlock title="terminal">
              {`nvm install --lts
nvm use --lts
nvm alias default node

# Retry install
npm install`}
            </CodeBlock>

            <SubHeading>{"Bypass engine check temporarily"}</SubHeading>
            <CodeBlock title="terminal">
              {"npm install --engine-strict=false"}
            </CodeBlock>

            <TipBox>
              {
                "Check the engines field of the failing package: 'npm info package-name engines'. This tells you exactly what Node version it needs."
              }
            </TipBox>
          </FixCard>

          {/* ════ FIX 7 ════ */}
          <FixCard
            number="7"
            title="Proxy and Corporate Network Issues"
            time="5 min"
            tag="ECONNREFUSED · self-signed certificate · corporate firewall"
          >
            <Prose>
              {
                "Corporate networks often route traffic through a proxy or use SSL inspection that breaks npm's certificate validation. This causes "
              }
              <IC>{"ECONNREFUSED"}</IC>
              {", "}
              <IC>{"UNABLE_TO_GET_ISSUER_CERT_LOCALLY"}</IC>
              {", or silent hangs."}
            </Prose>

            <SubHeading>
              {"Configure npm to use your corporate proxy"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080`}
            </CodeBlock>

            <SubHeading>{"Fix self-signed certificate errors"}</SubHeading>
            <CodeBlock title="terminal">
              {`# Tell npm where the corporate CA cert is
npm config set cafile /path/to/corporate-cert.pem

# Or — less secure — disable strict SSL (dev only)
npm config set strict-ssl false`}
            </CodeBlock>

            <SubHeading>{"Check all current npm proxy settings"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm config list
# Look for proxy, https-proxy, registry, cafile entries`}
            </CodeBlock>

            <SubHeading>
              {"Remove proxy settings (if set incorrectly)"}
            </SubHeading>
            <CodeBlock title="terminal">
              {`npm config delete proxy
npm config delete https-proxy`}
            </CodeBlock>

            <WarnBox>
              {
                "Setting strict-ssl=false disables certificate validation entirely. Only use this as a last resort in a development environment — never in production CI/CD pipelines."
              }
            </WarnBox>
          </FixCard>

          {/* ════ FIX 8 ════ */}
          <FixCard
            number="8"
            title="Disk Space and Memory Issues (ENOSPC)"
            time="5 min"
            tag="ENOSPC · out of disk · JavaScript heap out of memory"
          >
            <ErrorBlock>
              {`npm ERR! code ENOSPC
npm ERR! syscall write
npm ERR! errno -28
npm ERR! ENOSPC: no space left on device`}
            </ErrorBlock>

            <Prose>
              {
                "npm install writes package files to disk. If your disk is nearly full, the install will fail mid-way with ENOSPC. Large projects with many dependencies can require several gigabytes of free space."
              }
            </Prose>

            <SubHeading>{"Check available disk space"}</SubHeading>
            <CodeBlock title="macOS / Linux">{"df -h"}</CodeBlock>
            <CodeBlock title="Windows PowerShell">{"Get-PSDrive C"}</CodeBlock>

            <SubHeading>{"Clear npm cache to free space"}</SubHeading>
            <CodeBlock title="terminal">
              {`npm cache clean --force

# See how much space the cache is using
du -sh ~/.npm`}
            </CodeBlock>

            <SubHeading>{"JavaScript heap out of memory"}</SubHeading>
            <Prose>
              {
                "For very large projects, npm can run out of memory during install. Increase Node's available heap:"
              }
            </Prose>
            <CodeBlock title="terminal">
              {`# Increase to 4GB
node --max-old-space-size=4096 $(which npm) install

# macOS / Linux shorthand
NODE_OPTIONS=--max-old-space-size=4096 npm install`}
            </CodeBlock>
          </FixCard>

          {/* ════ FIX 9 ════ */}
          <FixCard
            number="9"
            title="Nuclear Option — Full npm Reset"
            time="10 min"
            tag="When nothing else has worked"
          >
            <Prose>
              {
                "If every fix above has failed, the npm installation itself is broken. This full reset wipes all npm state and starts from scratch."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {`# 1. Clear all npm caches
npm cache clean --force
rm -rf ~/.npm

# 2. Remove project dependencies
rm -rf node_modules package-lock.json

# 3. Reinstall Node with nvm (clean install)
nvm install --lts
nvm use --lts
nvm alias default node

# 4. Fresh project install
npm install`}
            </CodeBlock>

            <SubHeading>{"Windows"}</SubHeading>
            <CodeBlock title="powershell (Administrator)">
              {`# 1. Clear caches
npm cache clean --force
Remove-Item -Recurse -Force "$env:APPDATA\npm-cache"

# 2. Remove project dependencies
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# 3. Reinstall via nvm-windows
# Download nvm-windows from github.com/coreybutler/nvm-windows
nvm install lts
nvm use lts

# 4. Fresh install
npm install`}
            </CodeBlock>
          </FixCard>

          {/* ════ OS NOTES ════ */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "The most common macOS-specific issues are permission errors from previous "
            }
            <IC>{"sudo npm install"}</IC>
            {
              " usage, and Homebrew upgrading Node without updating npm. If you are on macOS, the single best thing you can do is uninstall Homebrew Node and switch entirely to nvm. It eliminates almost every recurring npm install issue."
            }
          </Prose>
          <CodeBlock title="terminal">
            {`brew uninstall node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
source ~/.zshrc
nvm install --lts && nvm use --lts`}
          </CodeBlock>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "Windows-specific causes that rarely appear on Mac or Linux: antivirus real-time scanning of node_modules (causes hangs), long path limit of 260 characters (breaks deep dependency trees), and multiple conflicting Node installations from different package managers. Enable long paths and use nvm-windows:"
            }
          </Prose>
          <CodeBlock title="PowerShell (Administrator)">
            {`# Enable Windows long path support
New-ItemProperty -Path "HKLM:\\SYSTEM\\CurrentControlSet\\Control\\FileSystem" \`
  -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force

# Add project folder to Defender exclusions to stop antivirus hanging installs
Add-MpPreference -ExclusionPath "C:\\path\\to\\your\\project"`}
          </CodeBlock>

          <SubHeading>{"Linux / CI environments"}</SubHeading>
          <Prose>
            {"In CI pipelines and Linux servers, use "}
            <IC>{"npm ci"}</IC>
            {" instead of "}
            <IC>{"npm install"}</IC>
            {". It is faster, more deterministic, and fails loudly if "}
            <IC>{"package-lock.json"}</IC>
            {
              " is out of sync — catching problems in CI before they reach production."
            }
          </Prose>
          <CodeBlock title="CI pipeline">
            {`# In GitHub Actions, GitLab CI, Jenkins etc.
npm ci          # faster + deterministic + strict lock file check

# vs
npm install     # slower + may update package-lock.json`}
          </CodeBlock>

          {/* ════ SUMMARY ════ */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Complete Fix Checklist — Work Through in Order"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  check: "Read the exact error code in your terminal",
                  fix: "Match it to the diagnosis table above",
                },
                {
                  check: "Clear cache + delete node_modules + reinstall",
                  fix: "npm cache clean --force && rm -rf node_modules package-lock.json && npm install",
                },
                {
                  check: "Check internet + verify registry URL",
                  fix: "npm config get registry → reset if wrong",
                },
                {
                  check: "Fix permission errors",
                  fix: "sudo chown -R $(whoami) ~/.npm",
                },
                {
                  check: "Kill any stuck npm processes",
                  fix: "pkill -f npm (macOS/Linux)",
                },
                {
                  check: "Resolve peer dependency conflicts",
                  fix: "npm install --legacy-peer-deps",
                },
                {
                  check: "Update Node to LTS via nvm",
                  fix: "nvm install --lts && nvm use --lts",
                },
                {
                  check: "Configure proxy settings if on corporate network",
                  fix: "npm config set proxy http://...",
                },
                { check: "Check disk space", fix: "df -h (macOS/Linux)" },
                {
                  check: "Nuclear reset — wipe everything, reinstall via nvm",
                  fix: "See Fix 9",
                },
              ].map(({ check, fix }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">{check}</p>
                    <p className="text-gray-400 text-xs mt-0.5 font-mono">
                      {fix}
                    </p>
                  </div>
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
                "Softplix is a full-stack development agency. Stuck on npm issues in a production project? We can audit your setup and get you shipping again."
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
