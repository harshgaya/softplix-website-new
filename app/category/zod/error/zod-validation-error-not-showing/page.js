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
  title: "Zod Validation Error Not Showing — react-hook-form Fixed [2026]",
  description:
    "Fix Zod validation errors not showing in forms. Covers zodResolver setup, react-hook-form integration, formState.errors, nested object errors, and custom error messages.",
  keywords:
    "zod validation error not showing, zod react-hook-form errors not displaying, zodResolver not working 2026, zod formState errors empty, zod nested error messages",
  alternates: {
    canonical:
      "https://softplix.com/category/zod/error/zod-validation-error-not-showing",
  },
  openGraph: {
    title: "Zod Validation Error Not Showing — Fixed [2026]",
    description:
      "Fix Zod validation errors — zodResolver, react-hook-form, formState.errors, nested errors.",
    type: "article",
    url: "https://softplix.com/category/zod/error/zod-validation-error-not-showing",
  },
};

const TOC = [
  { label: "Why Zod errors don't appear in your form", href: "#why" },
  { label: "Fix 1 — Add zodResolver to useForm", href: "#fix-1" },
  { label: "Fix 2 — Display errors from formState.errors", href: "#fix-2" },
  {
    label: "Fix 3 — Fix nested object and array validation errors",
    href: "#fix-3",
  },
  { label: "Fix 4 — Add custom Zod error messages", href: "#fix-4" },
  { label: "Fix 5 — Trigger validation on blur vs submit", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why are my Zod validation errors not showing up?",
    a: "The most common cause is missing the zodResolver in useForm. Without the resolver, react-hook-form uses its own basic validation and never runs your Zod schema. Add resolver: zodResolver(schema) to your useForm options to connect Zod to react-hook-form.",
  },
  {
    q: "How do I show Zod validation errors next to form fields?",
    a: "Access errors through formState.errors from useForm. For each field, check errors.fieldName?.message and display it. The message is the string you set in your Zod schema with z.string().min(1, 'This field is required').",
  },
  {
    q: "Why does formState.errors show the error object but not the message?",
    a: "Zod errors are nested — for a field named email, the error is at errors.email.message. If you see the error object but not the message string, you are probably accessing errors.email instead of errors.email?.message. Always access .message for the string.",
  },
  {
    q: "How do I show errors for nested Zod objects?",
    a: "For a schema with a nested object like address: z.object({ city: z.string() }), access the nested error with errors.address?.city?.message. react-hook-form mirrors the schema structure in the errors object.",
  },
  {
    q: "What is the difference between mode: 'onChange' and mode: 'onSubmit' in react-hook-form?",
    a: "mode controls when validation runs. onSubmit (default) only validates when the form is submitted. onChange validates on every keystroke. onBlur validates when the field loses focus. For the best UX, use mode: 'onBlur' for initial validation and reValidateMode: 'onChange' to fix errors as the user types.",
  },
  {
    q: "Can I use Zod validation without react-hook-form?",
    a: "Yes. Call schema.safeParse(data) directly on any object. If success is false, access error.flatten().fieldErrors for a map of field names to error message arrays. This works for Server Actions, API route validation, or any plain JavaScript/TypeScript validation.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Zod Validation Error Not Showing — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/zod/error/zod-validation-error-not-showing",
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
            tags={["Zod", "React Hook Form", "Error Fix"]}
            title={"Zod Validation Error Not Showing"}
            subtitle={"— react-hook-form Fixed [2026]"}
            sub={
              "Also covers: zodResolver setup · formState.errors · nested errors · custom messages · onChange vs onBlur mode"
            }
            date={"January 2026"}
            read={"6 min read"}
            tech={"Zod v3 · react-hook-form · TypeScript"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Form submits without errors — Zod schema never runs
const { register, handleSubmit, formState: { errors } } = useForm()
// errors is always {} — zodResolver not connected!

// OR: errors object has error but message is undefined
console.log(errors.email)         // { type: 'too_small', ... }
console.log(errors.email.message) // undefined — accessing wrong level`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Fix — add zodResolver and access .message"}
            </p>
            <CodeBlock title="Complete setup">{`import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({ email: z.string().email("Invalid email") })
type FormData = z.infer<typeof schema>

const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
  resolver: zodResolver(schema),   // ← connect Zod
})
// Access error: errors.email?.message`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why Zod Errors Don't Appear in Your Form"}</SH>
          <P>
            {
              "Zod and react-hook-form are separate libraries. They are connected by "
            }
            <IC>{"@hookform/resolvers/zod"}</IC>
            {". Without the "}
            <IC>{"zodResolver"}</IC>
            {" in "}
            <IC>{"useForm"}</IC>
            {
              ", react-hook-form runs its own basic built-in validation and never touches your Zod schema. The result is no validation errors or only HTML5 required-field errors."
            }
          </P>

          <FixCard
            number="1"
            title="Add zodResolver to useForm"
            time="3 min"
            tag="Root cause — Zod not connected to react-hook-form"
          >
            <CodeBlock title="Install resolver and connect Zod">{`npm install @hookform/resolvers zod react-hook-form

// types/forms.ts — define schema and infer type
import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  phone: z.string().optional(),
})
export type ContactFormData = z.infer<typeof contactSchema>

// components/contact-form.tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { contactSchema, type ContactFormData } from "@/types/forms"

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),   // ← connects Zod to react-hook-form
    mode: "onBlur",                        // validate on blur, re-validate on change
  })

  const onSubmit = (data: ContactFormData) => {
    console.log("Valid data:", data)   // only runs if Zod validates successfully
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* fields with error display */}
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="2"
            title="Display Errors from formState.errors"
            time="3 min"
            tag="Errors object exists but nothing shown in UI"
          >
            <P>
              {"Access errors with "}
              <IC>{"errors.fieldName?.message"}</IC>
              {
                " — the optional chaining handles undefined safely. Display the message string below each field."
              }
            </P>
            <CodeBlock title="Complete form with error display">{`export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Name field */}
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          {...register("name")}
          className={\`w-full border rounded px-3 py-2 \${errors.name ? "border-red-500" : "border-gray-300"}\`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email field */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          {...register("email")}
          type="email"
          className={\`w-full border rounded px-3 py-2 \${errors.email ? "border-red-500" : "border-gray-300"}\`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Message field */}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          {...register("message")}
          className={\`w-full border rounded px-3 py-2 \${errors.message ? "border-red-500" : "border-gray-300"}\`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>Submit</button>
    </form>
  )
}`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Nested Object and Array Validation Errors"
            time="3 min"
            tag="errors.address.city.message — nested field errors"
          >
            <P>
              {
                "For nested schemas, errors mirror the schema structure. Access nested errors with dot-notation chaining."
              }
            </P>
            <CodeBlock title="Nested schema and error access">{`const addressSchema = z.object({
  name: z.string().min(1, "Name required"),
  address: z.object({
    street: z.string().min(1, "Street required"),
    city: z.string().min(1, "City required"),
    postcode: z.string().regex(/^\d{5}$/, "Must be 5 digits"),
  }),
  tags: z.array(z.string()).min(1, "Add at least one tag"),
})

// Access nested errors:
// errors.address?.street?.message
// errors.address?.city?.message
// errors.tags?.message  (array-level error — too few items)
// errors.tags?.[0]?.message  (item-level error)

// In JSX:
{errors.address?.city && (
  <p className="text-red-600 text-sm">{errors.address.city.message}</p>
)}

// Register nested fields with dot notation:
<input {...register("address.city")} />`}</CodeBlock>
          </FixCard>

          <FixCard
            number="4"
            title="Add Custom Zod Error Messages"
            time="2 min"
            tag="Default messages too generic — customise per field"
          >
            <CodeBlock title="Custom messages for every validation">{`import { z } from "zod"

const registerSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters")
    .regex(/^[a-z0-9_]+$/, "Only lowercase letters, numbers, and underscores"),

  email: z
    .string()
    .min(1, "Email is required")           // empty string check
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),

  confirmPassword: z.string(),

  age: z
    .number({ invalid_type_error: "Age must be a number" })
    .min(18, "You must be 18 or older")
    .max(120, "Please enter a valid age"),
}).refine(
  data => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],    // which field the error appears on
  }
)`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Trigger Validation on Blur vs Submit"
            time="2 min"
            tag="Errors only show after submit — configure mode"
          >
            <CodeBlock title="Validation mode options">{`// mode: when initial validation runs
// reValidateMode: when re-validation runs after first error

// ✅ Best UX pattern:
const form = useForm<FormData>({
  resolver: zodResolver(schema),
  mode: "onBlur",               // first error shows when user leaves field
  reValidateMode: "onChange",   // error clears as user types a fix
})

// Options:
// mode: "onSubmit"    — default, only validates on submit
// mode: "onBlur"     — validates when field loses focus
// mode: "onChange"   — validates on every keystroke (can be noisy)
// mode: "all"        — both onChange and onBlur

// Manually trigger validation for a specific field:
const { trigger } = useForm({ resolver: zodResolver(schema) })
await trigger("email")    // validates just the email field
await trigger()           // validates all fields`}</CodeBlock>
            <TipBox>
              {
                "For the best user experience: use mode: 'onBlur' so errors appear when the user moves to the next field, and reValidateMode: 'onChange' so the error message disappears as soon as the user fixes it."
              }
            </TipBox>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always install @hookform/resolvers and add resolver: zodResolver(schema) to useForm",
              "Access errors with errors.fieldName?.message — the optional chaining prevents undefined crashes",
              "Use z.infer<typeof schema> for the form type — keeps TypeScript and Zod in sync automatically",
              "Add custom error messages to every Zod validator — defaults like 'String must contain at least 1 character(s)' confuse users",
              "Use mode: 'onBlur' and reValidateMode: 'onChange' for the best validation UX",
              "For nested schemas, access errors with dot notation: errors.address?.city?.message",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "Zod",
                title: "Fix: Zod parse vs safeParse error",
                href: "/category/zod/error/zod-parse-vs-safeParse-error",
                time: "5 min read",
              },
              {
                tag: "Zod",
                title: "Fix: Zod optional field not working",
                href: "/category/zod/error/zod-optional-field-not-working",
                time: "5 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui form validation not showing",
                href: "/category/shadcn/error/shadcn-form-validation-not-showing",
                time: "6 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Forms with Zod + react-hook-form"}
            desc={
              "Softplix engineers build type-safe, validated forms with Zod schemas, react-hook-form, and shadcn/ui — production ready. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
