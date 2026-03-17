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
  title: "npm: command not found — Fixed [Complete Guide 2026]",
  description:
    'Fix "npm: command not found" on macOS, Windows, and Linux. Covers Node.js not installed, PATH issues, nvm problems — step-by-step commands for every OS.',
  keywords:
    "npm command not found, npm not found mac, npm command not found linux, npm not recognized windows, fix npm command not found 2026",
  alternates: {
    canonical:
      "https://softplix.com/category/node-js/error/npm-command-not-found",
  },
  openGraph: {
    title: "npm: command not found — Fixed [Complete Guide 2026]",
    description:
      "Fix npm command not found on macOS, Windows, and Linux. Every cause covered.",
    type: "article",
    url: "https://softplix.com/category/node-js/error/npm-command-not-found",
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
  { label: "Why does this happen?", href: "#what-it-means" },
  { label: "Diagnose in 30 seconds", href: "#diagnose" },
  { label: "Fix 1 — Install Node.js via nvm", href: "#fix-1" },
  { label: "Fix 2 — Install Node.js directly", href: "#fix-2" },
  { label: "Fix 3 — Fix PATH not set correctly", href: "#fix-3" },
  { label: "Fix 4 — Fix on Windows", href: "#fix-4" },
  { label: "Fix 5 — Open a new terminal window", href: "#fix-5" },
  { label: "OS-specific notes", href: "#os-notes" },
  { label: "Prevention", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why does npm command not found happen after installing Node.js?",
    a: "The most common reason is that your terminal window was open before Node was installed. PATH changes are not picked up by existing terminal sessions. Open a brand new terminal window and npm will be found.",
  },
  {
    q: "How do I fix npm command not found on Mac?",
    a: "The fastest fix on Mac is installing Node via nvm. Run the nvm install script, source your shell config (source ~/.zshrc), then nvm install --lts. This installs Node and npm with correct PATH setup automatically.",
  },
  {
    q: "How do I fix npm command not found on Ubuntu Linux?",
    a: "Run: curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && sudo apt install -y nodejs. This installs the latest LTS Node and npm from the NodeSource repository.",
  },
  {
    q: "npm not recognized in Windows — how to fix?",
    a: "Go to System Properties → Environment Variables → Path and add C:\\Program Files\\nodejs to the list. Then open a new Command Prompt or PowerShell window and run npm again.",
  },
  {
    q: "Node is installed but npm says command not found — why?",
    a: "npm might be in a location not in your PATH. Run: node -e \"console.log(require('path').dirname(process.execPath))\" to find where Node is, then add that path to PATH.",
  },
  {
    q: "How do I check if npm is installed correctly?",
    a: "Run npm --version in a new terminal window. If it prints a version like 10.x.x, npm is working correctly. If it says command not found, follow Fix 1 or Fix 3 above.",
  },
];

function ArticleSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "npm: command not found — Fixed [Complete Guide 2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/node-js/error/npm-command-not-found",
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
    tag: "npm",
    title: "Fix: npm install Not Working",
    href: "npm-install-not-working",
    time: "9 min read",
  },
  {
    tag: "npm",
    title: "Fix: npm ERR! cb.apply is not a function",
    href: "npm-err-cb-apply-is-not-a-function",
    time: "6 min read",
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
            <span className="text-gray-500">{"npm command not found"}</span>
          </nav> */}

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
              {"npm: command not found"}
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
                {"macOS · Windows · Linux"}
              </span>
            </div>
          </header>

          {/* Quick fix */}
          <div className="my-6 rounded-2xl bg-green-50 border border-green-200 px-6 py-5">
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest">
              {"⚡ Try This First"}
            </p>
            <p className="text-sm text-green-700 mb-3">
              {"Open a brand new terminal window and run:"}
            </p>
            <CodeBlock>{"npm --version"}</CodeBlock>
            <p className="text-sm text-green-700">
              {
                "If that works — your old terminal window just needed refreshing. If not, keep reading."
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
            {"Why Does npm: command not found Happen?"}
          </SectionHeading>

          <ErrorBlock>{`npm: command not found
# or on Windows:
'npm' is not recognized as an internal or external command,
operable program or batch file.`}</ErrorBlock>

          <Prose>
            {
              "npm ships bundled with Node.js. This error means your terminal cannot find the npm executable. There are four possible reasons, and the fix depends on which one applies to you:"
            }
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
                  ["Node.js is not installed", "Fix 1 or Fix 2"],
                  ["Node installed but PATH not updated", "Fix 3"],
                  [
                    "Terminal window was open before install",
                    "Fix 5 — open new terminal",
                  ],
                  ["Windows installer did not add to PATH", "Fix 4"],
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

          {/* Diagnose */}
          <SectionHeading id="diagnose">
            {"Diagnose in 30 Seconds"}
          </SectionHeading>

          <CodeBlock title="terminal">
            {
              "# Step 1: Is Node.js installed?\nnode --version\n# If this returns v20.x.x — Node is installed\n# If this also says command not found — Node is NOT installed\n\n# Step 2: Is npm somewhere on your system?\nwhich npm        # macOS / Linux\nwhere npm        # Windows\n# If this returns a path — npm is installed but not in PATH\n# If this returns nothing — npm is not installed at all"
            }
          </CodeBlock>

          <TipBox>
            {
              "The single most common cause of this error: you just installed Node.js but are still in the same terminal window that was open before the install. The fix is simply opening a new terminal window."
            }
          </TipBox>

          {/* Fix 1 */}
          <FixCard
            number="1"
            title="Install Node.js via nvm (Recommended)"
            time="5 min"
            tag="Best permanent fix — handles PATH automatically"
          >
            <Prose>
              {
                "nvm (Node Version Manager) is the cleanest way to install Node and npm. It installs everything in your home directory with automatic PATH configuration — no sudo, no permission issues, and you can switch Node versions instantly."
              }
            </Prose>

            <SubHeading>{"macOS / Linux"}</SubHeading>
            <CodeBlock title="terminal">{`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# Reload your shell config
source ~/.zshrc    # zsh (default on macOS)
source ~/.bashrc   # bash

# Install latest LTS Node + npm
nvm install --lts
nvm use --lts

# Make it default for all new terminals
nvm alias default node

# Verify both installed
node --version
npm --version`}</CodeBlock>

            <SubHeading>{"Windows"}</SubHeading>
            <Prose>
              {
                "Windows uses a separate project called nvm-windows. Download the installer from "
              }
              <IC>{"github.com/coreybutler/nvm-windows"}</IC>
              {" — it provides the same commands as nvm on Unix."}
            </Prose>
            <CodeBlock title="PowerShell (after nvm-windows install)">{`nvm install lts
nvm use lts
npm --version`}</CodeBlock>

            <TipBox>
              {
                "nvm installs Node in your home directory (~/.nvm) where you always have full write access — eliminating permission issues forever."
              }
            </TipBox>
          </FixCard>

          {/* Fix 2 */}
          <FixCard
            number="2"
            title="Install Node.js Directly"
            time="3 min"
            tag="macOS / Linux / Windows — official installer"
          >
            <SubHeading>{"macOS — via Homebrew"}</SubHeading>
            <CodeBlock title="terminal">
              {"brew install node\n\n# Verify\nnode --version\nnpm --version"}
            </CodeBlock>

            <SubHeading>{"Ubuntu / Debian Linux"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt install -y nodejs\n\n# Verify\nnode --version\nnpm --version"
              }
            </CodeBlock>

            <SubHeading>{"Windows — official installer"}</SubHeading>
            <CheckList
              items={[
                "Download latest LTS installer from nodejs.org",
                "Run the .msi installer",
                "Make sure 'Add to PATH' is checked during installation",
                "Open a NEW terminal window after installation",
                "Verify: node --version && npm --version",
              ]}
            />

            <WarnBox>
              {
                "On macOS, do not mix Homebrew Node and nvm Node. Pick one installation method and stick to it — having both causes version conflicts and PATH confusion."
              }
            </WarnBox>
          </FixCard>

          {/* Fix 3 */}
          <FixCard
            number="3"
            title="Fix PATH Not Set Correctly"
            time="3 min"
            tag="Node is installed but npm still not found"
          >
            <Prose>
              {"If "}
              <IC>{"node --version"}</IC>
              {" works but "}
              <IC>{"npm --version"}</IC>
              {
                " says command not found, npm is installed but its location is not in your PATH."
              }
            </Prose>

            <SubHeading>{"Find where npm is installed"}</SubHeading>
            <CodeBlock title="terminal">
              {
                "# Find Node's bin directory\nnode -e \"console.log(require('path').dirname(process.execPath))\"\n\n# Find npm specifically\nfind /usr /usr/local -name 'npm' 2>/dev/null"
              }
            </CodeBlock>

            <SubHeading>{"Add to PATH — macOS / Linux"}</SubHeading>
            <CodeBlock title="~/.zshrc or ~/.bashrc">
              {
                '# Add Node bin to PATH\nexport PATH="/usr/local/bin:$PATH"\n\n# Or with the path from the command above:\nexport PATH="/home/youruser/.nvm/versions/node/v20.0.0/bin:$PATH"'
              }
            </CodeBlock>

            <CodeBlock title="terminal">
              {
                "# Reload shell config\nsource ~/.zshrc\n\n# Verify\nnpm --version"
              }
            </CodeBlock>

            <TipBox>
              {
                "Always open a new terminal after editing PATH — existing windows do not pick up changes until reloaded."
              }
            </TipBox>
          </FixCard>

          {/* Fix 4 */}
          <FixCard
            number="4"
            title="Fix on Windows — Add to PATH"
            time="5 min"
            tag="Windows specific"
          >
            <Prose>
              {
                "On Windows, npm not found after installing Node.js means the installer did not add Node's directory to the system PATH, or the PATH change has not been picked up by your current terminal."
              }
            </Prose>

            <SubHeading>
              {"Check if Node is installed but not in PATH"}
            </SubHeading>
            <CodeBlock title="cmd">
              {
                '# Check if Node exists at default location\ndir "C:\\Program Files\\nodejs\\npm.cmd"\n# If this shows the file, Node is installed — just not in PATH'
              }
            </CodeBlock>

            <SubHeading>{"Add Node to PATH via System Properties"}</SubHeading>
            <CheckList
              items={[
                "Press Windows + R, type sysdm.cpl, press Enter",
                "Click Advanced tab → Environment Variables",
                "Under System Variables, select Path → click Edit",
                "Click New and add: C:\\Program Files\\nodejs",
                "Click OK on all dialogs",
                "Open a NEW terminal window",
                "Verify: npm --version",
              ]}
            />

            <SubHeading>{"Or via PowerShell (Administrator)"}</SubHeading>
            <CodeBlock title="PowerShell (Administrator)">{`[Environment]::SetEnvironmentVariable(
  "Path",
  $env:Path + ";C:\\Program Files\\nodejs",
  "Machine"
)
# Then open new terminal and verify
npm --version`}</CodeBlock>

            <WarnBox>
              {
                "Always open a brand new terminal window after modifying PATH on Windows. The currently open window will not see the change."
              }
            </WarnBox>
          </FixCard>

          {/* Fix 5 */}
          <FixCard
            number="5"
            title="Open a New Terminal Window"
            time="10 seconds"
            tag="After any Node.js installation or PATH change"
          >
            <Prose>
              {
                "This is the most commonly overlooked fix — and solves the problem 40% of the time. When you install Node.js or change PATH, your currently open terminal window does not know about it. The shell loads PATH once when it starts."
              }
            </Prose>
            <CodeBlock title="terminal">
              {
                "# Close your current terminal completely\n# Open a brand new terminal window\n# Then verify:\nnode --version\nnpm --version"
              }
            </CodeBlock>
            <TipBox>
              {
                "On macOS: Cmd+Q to fully quit Terminal, then reopen it. Just closing the tab is not enough — the parent process must be restarted."
              }
            </TipBox>
          </FixCard>

          {/* OS Notes */}
          <SectionHeading id="os-notes">{"OS-Specific Notes"}</SectionHeading>

          <SubHeading>{"macOS"}</SubHeading>
          <Prose>
            {
              "macOS Catalina and later uses zsh as the default shell. If you added PATH to ~/.bashrc it will not work — add it to ~/.zshrc instead. After any change run "
            }
            <IC>{"source ~/.zshrc"}</IC>
            {" and open a new terminal."}
          </Prose>

          <SubHeading>{"Windows"}</SubHeading>
          <Prose>
            {
              "If you have both a standalone Node.js installation and Node installed via another tool like Chocolatey or winget, they can conflict with each other in PATH. Uninstall all but one and use nvm-windows going forward."
            }
          </Prose>

          <SubHeading>{"Linux"}</SubHeading>
          <Prose>
            {
              "The apt package for nodejs on Ubuntu is often outdated (sometimes as old as Node 12). Always use the NodeSource repository or nvm to get a current LTS version on Linux."
            }
          </Prose>
          <CodeBlock title="terminal">
            {
              "# Check your Node version\nnode --version\n# If below v18 — upgrade immediately via NodeSource or nvm"
            }
          </CodeBlock>

          {/* Prevention */}
          <SectionHeading id="prevention">
            {"How to Prevent This Error"}
          </SectionHeading>
          <CheckList
            items={[
              "Use nvm to install Node.js — it handles PATH automatically and lets you switch versions",
              "Always open a new terminal window after installing Node.js or changing PATH",
              "On Windows, check 'Add to PATH' during the Node.js installer",
              "Add a .nvmrc file to projects to pin the Node version: echo '20' > .nvmrc",
              "On macOS, do not mix Homebrew Node and nvm — pick one",
            ]}
          />

          {/* Summary */}
          <div className="mt-12 rounded-2xl bg-slate-50 border border-gray-100 px-6 py-6">
            <h2 className="text-lg font-extrabold text-gray-900 mb-5">
              {"Quick Diagnosis — Work Through in Order"}
            </h2>
            <ol className="space-y-3">
              {[
                {
                  check: "Open a new terminal window and retry npm --version",
                  fix: "Fixes it 40% of the time — try this first",
                },
                {
                  check: "node --version — does it return a version?",
                  fix: "If yes: PATH issue (Fix 3). If no: not installed (Fix 1)",
                },
                {
                  check: "Install Node via nvm",
                  fix: "Best permanent fix for macOS/Linux",
                },
                {
                  check: "Install via official nodejs.org installer (Windows)",
                  fix: "Check Add to PATH during install",
                },
                {
                  check: "Add Node bin directory to PATH manually",
                  fix: "Fix 3 — edit .zshrc or Environment Variables",
                },
              ].map(({ check, fix }, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-semibold">{check}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{fix}</p>
                  </div>
                </li>
              ))}
            </ol>
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
              {"We Build Production-Grade Next.js & Node.js Apps"}
            </h2>
            <p className="text-indigo-200 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              {
                "Softplix is a full-stack development agency. Struggling with Node.js environment issues in production? We can fix your setup."
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
