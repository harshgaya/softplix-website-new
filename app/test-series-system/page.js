import TestSeriesPage from "./test-series-page";
export const metadata = {
  metadataBase: new URL("https://softplix.com"),

  title: "Test Series System for Coaching Institutes | SoftPlix",

  description:
    "Launch your own test series platform for your coaching institute. Conduct tests, manage students, track performance, and generate monthly revenue with SoftPlix.",

  keywords: [
    "Test Series Software",
    "Coaching Test Series System",
    "Online Test Platform India",
    "Coaching Institute Software",
    "Test Series Demo",
    "Coaching Monetization",
    "Online Exam System",
    "JEE NEET Test Platform",
    "Coaching Business Growth",
    "EdTech Software India",
  ],

  authors: [{ name: "SoftPlix", url: "https://softplix.com" }],

  creator: "SoftPlix",

  openGraph: {
    title: "Test Series System for Coaching Institutes | SoftPlix",
    description:
      "Create and run your own test series, manage students, and build a consistent revenue stream for your coaching institute.",
    url: "https://softplix.com/test-series-system",
    siteName: "SoftPlix",
    type: "website",

    images: [
      {
        url: "https://softplix.com/demos/test-system.png",
        width: 1200,
        height: 630,
        alt: "Test Series System for Coaching Institutes",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@SoftPlix",
    creator: "@SoftPlix",
    title: "Test Series System for Coaching Institutes",
    description:
      "Run your own test series, track performance, and grow your coaching institute with SoftPlix.",
    images: ["https://softplix.com/demos/test-system.png"],
  },

  icons: {
    icon: "https://softplix.com/demos/test-system.png",
    apple: "https://softplix.com/demos/test-system.png",
  },

  alternates: {
    canonical: "https://softplix.com/test-series-system",
    languages: {
      en: "https://softplix.com/test-series-system",
    },
  },

  robots: {
    index: true,
    follow: true,
  },
};
export default function TestSystemPage() {
  return <TestSeriesPage />;
}
