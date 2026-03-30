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
  title: "Supabase Email Confirmation Not Sending — Fixed [2026]",
  description:
    "Fix Supabase confirmation emails not being sent or delivered. Covers rate limiting, SMTP setup, email templates, spam folders, custom SMTP providers, and resending emails.",
  keywords:
    "supabase email confirmation not sending, supabase signup email not received, supabase confirmation email not working, supabase custom smtp 2026, supabase resend email",
  alternates: {
    canonical:
      "https://softplix.com/category/supabase/error/supabase-email-confirmation-not-sending",
  },
  openGraph: {
    title: "Supabase Email Confirmation Not Sending — Fixed [2026]",
    description:
      "Fix Supabase email confirmation — rate limits, custom SMTP, Resend, spam, templates.",
    type: "article",
    url: "https://softplix.com/category/supabase/error/supabase-email-confirmation-not-sending",
  },
};

const TOC = [
  { label: "Why Supabase confirmation emails don't arrive", href: "#why" },
  {
    label: "Fix 1 — Check the Supabase rate limit (2 emails/hour on free)",
    href: "#fix-1",
  },
  { label: "Fix 2 — Configure custom SMTP with Resend", href: "#fix-2" },
  { label: "Fix 3 — Configure custom SMTP with SendGrid", href: "#fix-3" },
  { label: "Fix 4 — Fix email landing in spam folder", href: "#fix-4" },
  {
    label: "Fix 5 — Resend confirmation email programmatically",
    href: "#fix-5",
  },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why is Supabase not sending confirmation emails?",
    a: "The most common cause on the free plan is the built-in rate limit — Supabase only sends 2 emails per hour on the free tier. If you have tested signup multiple times, you may have hit this limit. The fix is to configure a custom SMTP provider like Resend or SendGrid, which removes this restriction.",
  },
  {
    q: "What is the Supabase email rate limit on the free plan?",
    a: "Supabase free tier allows 2 emails per hour using the built-in email service. For production or any serious development, you must connect a custom SMTP provider. The Pro plan increases this but custom SMTP is still recommended for reliability and deliverability.",
  },
  {
    q: "Which SMTP providers work well with Supabase?",
    a: "Resend is the most popular choice because it has a generous free tier (3,000 emails/month), excellent deliverability, and a simple API. SendGrid, Mailgun, Postmark, and AWS SES also work well. All are configured the same way in Supabase Dashboard → Project Settings → Authentication → SMTP Settings.",
  },
  {
    q: "How do I resend a confirmation email in Supabase?",
    a: "Call supabase.auth.resend({ type: 'signup', email: userEmail }) in your client code. This resends the confirmation email to the specified address. You can expose this as a button on your 'check your email' page for users who didn't receive it.",
  },
  {
    q: "Can I customise the Supabase confirmation email template?",
    a: "Yes. Go to Supabase Dashboard → Authentication → Email Templates. You can customise the HTML and subject line for confirmation emails, magic links, password reset, and invite emails. Use the {{ .ConfirmationURL }} variable to insert the confirmation link.",
  },
  {
    q: "Why do Supabase emails go to spam?",
    a: "Supabase's built-in email service sends from a shared domain (mail.supabase.io) with lower deliverability than a custom domain. Emails from shared sending domains are more likely to be marked as spam. Use a custom SMTP provider with your own domain and configure SPF, DKIM, and DMARC DNS records to improve deliverability.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Supabase Email Confirmation Not Sending — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/supabase/error/supabase-email-confirmation-not-sending",
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
            tags={["Supabase", "Email", "Error Fix"]}
            title={"Supabase Email Confirmation Not Sending"}
            subtitle={"— Custom SMTP Fix [2026]"}
            sub={
              "Also covers: free tier rate limits · Resend SMTP · SendGrid · spam folders · resend email · template customisation"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Supabase · Resend · SendGrid · SMTP"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// signUp() returns no error — but user never receives email
const { error } = await supabase.auth.signUp({ email, password })
console.log(error)  // null

// Common causes:
// 1. Free tier rate limit (2 emails/hour) — most common
// 2. Email landed in spam
// 3. No custom SMTP configured for production`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — configure custom SMTP (Resend recommended)"}
            </p>
            <CodeBlock title="Supabase Dashboard → Project Settings → Authentication → SMTP">{`SMTP Host:       smtp.resend.com
SMTP Port:       465
SMTP Username:   resend
SMTP Password:   re_your_api_key_here
Sender Email:    noreply@yourdomain.com
Sender Name:     Your App Name`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Supabase Confirmation Emails Don't Arrive"}</SH>
          <P>
            {
              "Supabase's built-in email service has a strict rate limit of 2 emails per hour on the free plan. If you sign up, test password reset, and sign up again in the same hour, you may have exhausted the limit. The emails appear to be sent (no error returned) but are silently queued and dropped."
            }
          </P>
          <P>
            {
              "For production, the built-in service also sends from a shared domain with lower deliverability. Custom SMTP with your own verified domain is essential for emails to reliably reach inboxes."
            }
          </P>

          <FixCard
            number="1"
            title="Check the Rate Limit — Free Tier Sends Only 2 Emails/Hour"
            time="1 min"
            tag="Most common cause during development"
          >
            <P>
              {
                "If you have been testing signups and password resets in the same hour, you have likely hit the limit. Wait 1 hour and try again, or immediately configure custom SMTP to remove the limit entirely."
              }
            </P>
            <CodeBlock title="Quick test — check if rate limit is the issue">{`// If this returns no error but email never arrives → rate limit hit
const { data, error } = await supabase.auth.signUp({
  email: "test@example.com",
  password: "password123",
})

// Solution: configure custom SMTP (see Fix 2 below)
// or temporarily disable email confirmation for development:
// Supabase Dashboard → Authentication → Providers → Email
//   → toggle OFF "Confirm email"`}</CodeBlock>
            <TipBox>
              {
                "During development, disable email confirmation entirely. Supabase Dashboard → Authentication → Providers → Email → turn off 'Confirm email'. Re-enable before going to production."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="2"
            title="Configure Custom SMTP with Resend"
            time="10 min"
            tag="Recommended — free tier, excellent deliverability"
          >
            <P>
              {
                "Resend offers 3,000 emails/month free, has excellent deliverability, and integrates with Supabase in minutes. This removes the 2-email/hour limit completely."
              }
            </P>
            <CodeBlock title="Step 1 — Set up Resend">{`# 1. Create account at resend.com
# 2. Add and verify your domain (follow their DNS guide)
# 3. Create an API key at resend.com/api-keys
# 4. Copy the API key (starts with "re_")`}</CodeBlock>
            <CodeBlock title="Step 2 — Configure in Supabase Dashboard">{`# Supabase Dashboard → Project Settings → Authentication → SMTP Settings

Enable Custom SMTP:  ✅ toggle ON

SMTP Host:           smtp.resend.com
SMTP Port:           465
SMTP Username:       resend
SMTP Password:       re_xxxxxxxxxxxxxxxxxxxx  (your Resend API key)
Sender Email:        noreply@yourdomain.com   (must be your verified domain)
Sender Name:         Your App Name

# Click "Save" — then test with a signup`}</CodeBlock>
            <CodeBlock title="Step 3 — Test the SMTP setup">{`# Supabase Dashboard has a "Send test email" button in SMTP settings
# Or test via your app signup flow
# Emails should now arrive immediately with no rate limit`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Configure Custom SMTP with SendGrid"
            time="10 min"
            tag="Alternative — enterprise-grade deliverability"
          >
            <CodeBlock title="SendGrid SMTP settings for Supabase">{`# 1. Create account at sendgrid.com
# 2. Settings → Sender Authentication → Domain Authentication
#    (verify your sending domain — required for production)
# 3. Settings → API Keys → Create API Key (Full Access or Mail Send only)

# Supabase Dashboard → Project Settings → Authentication → SMTP Settings:
SMTP Host:           smtp.sendgrid.net
SMTP Port:           587
SMTP Username:       apikey                    (literal string "apikey")
SMTP Password:       SG.xxxxxxxxxxxxxxxxxx     (your SendGrid API key)
Sender Email:        noreply@yourdomain.com
Sender Name:         Your App Name`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Fix Emails Landing in Spam"
            time="15 min"
            tag="Emails sending but not reaching inbox"
          >
            <P>
              {
                "If emails send but land in spam, the issue is deliverability — your sending domain lacks proper DNS authentication records."
              }
            </P>
            <CodeBlock title="Required DNS records for email deliverability">{`# Add these DNS records at your domain registrar
# (Resend / SendGrid provide exact values in their dashboard)

# 1. SPF — authorises your SMTP provider to send on your behalf
TXT  @    "v=spf1 include:_spf.resend.com ~all"

# 2. DKIM — cryptographically signs outgoing emails
CNAME  resend._domainkey  resend._domainkey.yourdomain.com.dkim.resend.com

# 3. DMARC — tells mail servers what to do with failed SPF/DKIM
TXT  _dmarc  "v=DMARC1; p=quarantine; rua=mailto:admin@yourdomain.com"

# After adding DNS records, allow 24-48 hours for propagation
# Then verify at: mail-tester.com or mxtoolbox.com`}</CodeBlock>
            <WarnBox>
              {
                "Always test your email deliverability score at mail-tester.com before going to production. A score below 8/10 means emails will frequently land in spam."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="5"
            title="Resend Confirmation Email Programmatically"
            time="2 min"
            tag="'Resend confirmation email' button for users"
          >
            <P>
              {
                "Add a resend button to your 'check your email' page so users who didn't receive the email can request a new one."
              }
            </P>
            <CodeBlock title="components/resend-confirmation.tsx">{`"use client"

import { createClient } from "@/lib/supabase/client"
import { useState } from "react"

export function ResendConfirmationButton({ email }: { email: string }) {
  const supabase = createClient()
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

  async function handleResend() {
    setStatus("sending")

    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
      options: {
        emailRedirectTo: \`\${window.location.origin}/auth/callback\`,
      },
    })

    setStatus(error ? "error" : "sent")
  }

  return (
    <div>
      <button onClick={handleResend} disabled={status === "sending" || status === "sent"}>
        {status === "idle" && "Resend confirmation email"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Email sent! Check your inbox"}
        {status === "error" && "Failed — try again"}
      </button>
      {status === "sent" && <p>Also check your spam folder.</p>}
    </div>
  )
}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Configure custom SMTP before testing signup more than twice — the free tier limit is 2 emails/hour",
              "Use Resend with a verified domain as your SMTP provider — simplest setup with best deliverability",
              "Add SPF, DKIM, and DMARC DNS records to ensure emails reach inboxes, not spam",
              "Disable email confirmation during development to remove all email dependency from your dev workflow",
              "Add a 'Resend confirmation email' button to your check-your-email page",
              "Test email deliverability at mail-tester.com before launch",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Supabase",
                title: "Fix: Supabase user null after login",
                href: "/category/supabase/error/supabase-auth-user-null-after-login",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase OAuth redirect error",
                href: "/category/supabase/error/supabase-oauth-redirect-error",
                time: "7 min read",
              },
              {
                tag: "Supabase",
                title: "Fix: Supabase session not persisting",
                href: "/category/supabase/error/supabase-auth-session-not-persisting",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Set Up Supabase Email for Production"}
            desc={
              "Softplix engineers configure Supabase with custom SMTP, domain verification, and email templates — ready for production from day one. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
