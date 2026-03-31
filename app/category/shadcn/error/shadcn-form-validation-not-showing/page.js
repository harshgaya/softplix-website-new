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
  title: "shadcn/ui Form Validation Not Showing — Fixed [2026]",
  description:
    "Fix shadcn/ui form validation errors not displaying. Covers react-hook-form + zod setup, FormMessage, FormField, Controller, and error display patterns.",
  keywords:
    "shadcn form validation not showing, shadcn ui form error not displaying 2026, react-hook-form zod shadcn, shadcn FormMessage not working, shadcn form field error",
  alternates: {
    canonical:
      "https://softplix.com/category/shadcn/error/shadcn-form-validation-not-showing",
  },
  openGraph: {
    title: "shadcn/ui Form Validation Not Showing — Fixed [2026]",
    description:
      "Fix shadcn/ui form validation — react-hook-form, zod, FormMessage, FormField, Controller.",
    type: "article",
    url: "https://softplix.com/category/shadcn/error/shadcn-form-validation-not-showing",
  },
};

const TOC = [
  { label: "Why shadcn/ui form errors don't appear", href: "#why" },
  {
    label: "Fix 1 — Correct Form + FormField + FormMessage structure",
    href: "#fix-1",
  },
  { label: "Fix 2 — Connect zod schema to react-hook-form", href: "#fix-2" },
  { label: "Fix 3 — Fix errors not showing on first submit", href: "#fix-3" },
  {
    label: "Fix 4 — Show validation on custom inputs with Controller",
    href: "#fix-4",
  },
  { label: "Fix 5 — Display server-side validation errors", href: "#fix-5" },
  { label: "Prevention checklist", href: "#prevention" },
  { label: "FAQ", href: "#faq" },
];

const FAQS = [
  {
    q: "Why do shadcn/ui form errors not show up?",
    a: "The most common cause is a missing or misplaced FormMessage component. shadcn/ui's Form component integrates with react-hook-form — each field needs Form, FormField, FormItem, FormLabel, FormControl, and FormMessage in the correct nesting order. If FormMessage is missing or outside FormField, errors won't display.",
  },
  {
    q: "What is the relationship between shadcn/ui Form and react-hook-form?",
    a: "shadcn/ui's Form component is a thin wrapper around react-hook-form that provides context. FormField uses react-hook-form's Controller internally. FormMessage reads the field error from the form context and displays it. Without the shadcn Form wrapper, the sub-components have no context to read errors from.",
  },
  {
    q: "Why does validation only fire after the first submit, not on typing?",
    a: "By default, react-hook-form validates on submit (mode: 'onSubmit'). To validate while typing or on blur, set mode: 'onChange' or mode: 'onBlur' in useForm(). You can also use reValidateMode: 'onChange' to re-validate after the first submit attempt.",
  },
  {
    q: "How do I integrate zod with shadcn/ui forms?",
    a: "Install @hookform/resolvers and zod. Define a zod schema, then pass zodResolver(schema) to useForm's resolver option. The types flow automatically — useForm infers field types from the zod schema. Use z.infer<typeof schema> to type your form values.",
  },
  {
    q: "How do I show server-side validation errors in a shadcn/ui form?",
    a: "Use form.setError('fieldName', { message: 'Server error message' }) after receiving an error from your API or Server Action. This registers the error in react-hook-form's state, which FormMessage then displays automatically for that field.",
  },
  {
    q: "Can I use shadcn/ui Form without react-hook-form?",
    a: "Technically yes — you can use the UI components individually without the Form wrapper. But you would lose the integration between FormField, FormMessage, and validation state. For uncontrolled forms, you can use HTML form + Server Actions without react-hook-form at all.",
  },
];

function ArticleSchema() {
  const s = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "shadcn/ui Form Validation Not Showing — Fixed [2026]",
    author: { "@type": "Organization", name: "Softplix" },
    publisher: {
      "@type": "Organization",
      name: "Softplix",
      url: "https://softplix.com",
    },
    datePublished: "2026-01-01",
    mainEntityOfPage:
      "https://softplix.com/category/shadcn/error/shadcn-form-validation-not-showing",
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
            tags={["shadcn/ui", "Forms", "Error Fix"]}
            title={"shadcn/ui Form Validation Not Showing"}
            subtitle={"— react-hook-form + zod Fix [2026]"}
            sub={
              "Also covers: FormField · FormMessage · zodResolver · Controller · server-side errors · onBlur validation"
            }
            date={"January 2026"}
            read={"7 min read"}
            tech={"shadcn/ui · react-hook-form · zod"}
          />

          <div className="my-6 rounded-2xl bg-red-50 border border-red-200 px-6 py-5">
            <p className="text-sm font-bold text-red-800 mb-1 uppercase tracking-widest">
              {"⚡ The Problem"}
            </p>
            <ErrorBlock>{`// Form submitted — validation fails — but no error messages appear
// OR: errors show in console (form.formState.errors) but not in UI
// OR: FormMessage renders but shows nothing`}</ErrorBlock>
            <p className="text-sm font-bold text-green-800 mb-1 uppercase tracking-widest mt-4">
              {"✅ Required nesting order"}
            </p>
            <CodeBlock title="Correct shadcn Form structure">{`<Form {...form}>
  <FormField control={form.control} name="email" render={({ field }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl><Input {...field} /></FormControl>
      <FormMessage />   {/* ← this must be inside FormField */}
    </FormItem>
  )} />
</Form>`}</CodeBlock>
          </div>

          <TOCBlock items={TOC} />

          <SH id="why">{"Why shadcn/ui Form Errors Don't Appear"}</SH>
          <P>
            {"shadcn/ui's Form system has a strict component hierarchy: "}
            <IC>{"Form → FormField → FormItem → FormControl + FormMessage"}</IC>
            {
              "  . Each component reads from react-hook-form context provided by "
            }
            <IC>{"FormField"}</IC>
            {"  . If "}
            <IC>{"FormMessage"}</IC>
            {" is placed outside "}
            <IC>{"FormField"}</IC>
            {", or "}
            <IC>{"FormField"}</IC>
            {
              " is missing entirely, there is no error context to read and nothing renders."
            }
          </P>

          <FixCard
            number="1"
            title="Correct Form + FormField + FormMessage Structure"
            time="5 min"
            tag="Most common fix — wrong nesting"
          >
            <CodeBlock title="Complete shadcn Form structure">{`"use client"

import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function ExampleForm() {
  const form = useForm({
    defaultValues: { email: "", password: "" },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <Form {...form}>                              {/* 1. spread form methods into context */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">

        <FormField
          control={form.control}                 {/* 2. pass control */}
          name="email"                           {/* 3. field name matches defaultValues */}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />                    {/* 4. MUST be inside FormField */}
            </FormItem>
          )}
        />

        <FormField control={form.control} name="password" render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl><Input type="password" {...field} /></FormControl>
            <FormMessage />
          </FormItem>
        )} />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}`}</CodeBlock>
            <WarnBox>
              {
                "FormMessage must be INSIDE the FormField render prop. Placing it outside — even one level up — disconnects it from the field error context and it renders nothing."
              }
            </WarnBox>
          </FixCard>

          <FixCard
            number="2"
            title="Connect Zod Schema to react-hook-form"
            time="5 min"
            tag="No validation firing at all — missing resolver"
          >
            <CodeBlock title="Full zod + react-hook-form + shadcn setup">{`"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// 1. Define zod schema
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters").max(50),
})

type FormValues = z.infer<typeof formSchema>

export function SignupForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),     // 2. connect zod schema
    defaultValues: { email: "", password: "", name: "" },
    mode: "onBlur",                        // 3. validate on blur (optional)
  })

  async function onSubmit(values: FormValues) {
    // values are fully typed and validated at this point
    await registerUser(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField control={form.control} name="name" render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl><Input placeholder="Alice" {...field} /></FormControl>
            <FormMessage />   {/* shows "Name must be at least 2 characters" */}
          </FormItem>
        )} />

        <FormField control={form.control} name="email" render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
            <FormMessage />   {/* shows "Please enter a valid email address" */}
          </FormItem>
        )} />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Creating account..." : "Sign up"}
        </Button>
      </form>
    </Form>
  )
}

// Install: npm install @hookform/resolvers zod`}</CodeBlock>
          </FixCard>

          <FixCard
            number="3"
            title="Fix Errors Not Showing on First Submit"
            time="2 min"
            tag="Errors appear after second submit only"
          >
            <P>
              {
                "By default react-hook-form only validates on submit. Switch to "
              }
              <IC>{"mode: 'onBlur'"}</IC>
              {" or "}
              <IC>{"mode: 'onChange'"}</IC>
              {" to validate as the user interacts, and use "}
              <IC>{"reValidateMode"}</IC>
              {" to control re-validation after the first submit."}
            </P>
            <CodeBlock title="Validation mode options">{`const form = useForm<FormValues>({
  resolver: zodResolver(formSchema),
  defaultValues: { email: "" },

  // Choose ONE:
  mode: "onSubmit",    // default — only validates on submit
  mode: "onBlur",      // validates when field loses focus (recommended)
  mode: "onChange",    // validates on every keystroke
  mode: "all",         // validates on blur + change

  // After first submit, re-validate on:
  reValidateMode: "onChange",   // default — re-validates on change after submit
})`}</CodeBlock>
            <TipBox>
              {
                "mode: 'onBlur' is the best UX — it doesn't interrupt typing but shows errors as soon as the user leaves the field. Pair with reValidateMode: 'onChange' so errors clear as the user corrects them."
              }
            </TipBox>
          </FixCard>

          <FixCard
            number="4"
            title="Show Validation on Custom Inputs with Controller"
            time="4 min"
            tag="Select, DatePicker, custom components not validating"
          >
            <P>
              {
                "For non-native inputs (shadcn Select, DatePicker, custom components), use "
              }
              <IC>{"FormField"}</IC>
              {" which wraps react-hook-form's "}
              <IC>{"Controller"}</IC>
              {" internally — it handles "}
              <IC>{"value"}</IC>
              {", "}
              <IC>{"onChange"}</IC>
              {", and error state automatically."}
            </P>
            <CodeBlock title="shadcn Select + FormField">{`import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<FormField
  control={form.control}
  name="role"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Role</FormLabel>
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <FormControl>
          <SelectTrigger><SelectValue placeholder="Select a role" /></SelectTrigger>
        </FormControl>
        <SelectContent>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="viewer">Viewer</SelectItem>
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  )}
/>`}</CodeBlock>
            <CodeBlock title="Checkbox with FormField">{`import { Checkbox } from "@/components/ui/checkbox"

<FormField
  control={form.control}
  name="acceptTerms"
  render={({ field }) => (
    <FormItem className="flex items-start space-x-2">
      <FormControl>
        <Checkbox
          checked={field.value}
          onCheckedChange={field.onChange}
        />
      </FormControl>
      <div>
        <FormLabel>I accept the terms and conditions</FormLabel>
        <FormMessage />
      </div>
    </FormItem>
  )}
/>`}</CodeBlock>
          </FixCard>

          <FixCard
            number="5"
            title="Display Server-Side Validation Errors"
            time="3 min"
            tag="API returns errors — show them in the form fields"
          >
            <CodeBlock title="Set server errors with form.setError()">{`"use client"

async function onSubmit(values: FormValues) {
  try {
    const result = await registerUser(values)

    if (!result.success) {
      // Set field-level errors from server response
      if (result.errors?.email) {
        form.setError("email", {
          type: "server",
          message: result.errors.email,   // "Email already in use"
        })
      }
      if (result.errors?.password) {
        form.setError("password", {
          type: "server",
          message: result.errors.password,
        })
      }

      // Set a root-level error (general form error)
      if (result.errors?.general) {
        form.setError("root", {
          message: result.errors.general,
        })
      }
      return
    }

    // Success — redirect or close dialog
    router.push("/dashboard")

  } catch (err) {
    form.setError("root", { message: "Something went wrong. Please try again." })
  }
}

// Display root error in JSX:
{form.formState.errors.root && (
  <p className="text-sm font-medium text-destructive">
    {form.formState.errors.root.message}
  </p>
)}`}</CodeBlock>
          </FixCard>

          <SH id="prevention">{"Prevention"}</SH>
          <CL
            items={[
              "Always nest FormMessage inside FormField — never outside the render prop",
              "Always spread {...form} onto the Form component — this provides react-hook-form context",
              "Use zodResolver from @hookform/resolvers/zod — plain useForm without a resolver has no validation rules",
              "Set mode: 'onBlur' for best UX — validates on field blur, not on every keystroke",
              "Use form.setError('fieldName', { message }) to show server-side errors in the correct field",
              "For custom inputs (Select, Checkbox), always use FormField's render prop — it handles onChange/value wiring",
            ]}
          />

          <SH id="faq">{"Frequently Asked Questions"}</SH>
          <FAQBlock items={FAQS} />

          <RelatedBlock
            items={[
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui dialog not closing",
                href: "/category/shadcn/error/shadcn-dialog-not-closing",
                time: "6 min read",
              },
              {
                tag: "shadcn/ui",
                title: "Fix: shadcn/ui not working in Next.js",
                href: "/category/shadcn/error/shadcn-ui-not-working-nextjs",
                time: "7 min read",
              },
              {
                tag: "Next.js",
                title: "Fix: Next.js Server Actions not working",
                href: "/category/next-js/error/nextjs-server-action-not-working",
                time: "7 min read",
              },
            ]}
          />
          <CTA
            title={"We Build Forms with shadcn/ui + zod"}
            desc={
              "Softplix engineers implement fully validated forms with shadcn/ui, react-hook-form, zod, and Server Actions. Let us help."
            }
          />
        </div>
      </main>
    </>
  );
}
