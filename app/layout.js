import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import PixelInit from "@/components/navigation/pixel-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://softplix.com/"),
  title: "SoftPlix: Website & Mobile App Development Company ",
  description:
    "SoftPlix provides innovative software solutions to empower businesses worldwide with cutting-edge technology and exceptional service.",
  keywords:
    "SoftPlix, Software Solutions, Business Technology, Innovative Software, IT Services,Mobile App Development Company, Website Development Company, Custom Software Development, Technology Consulting, AI Agents",
  authors: [{ name: "SoftPlix", url: "https://softplix.com/" }],
  creator: "SoftPlix: Website & Mobile App Development Company ",
  openGraph: {
    title: "SoftPlix: Website & Mobile App Development Company",
    description:
      "SoftPlix provides innovative software solutions to empower businesses worldwide with cutting-edge technology and exceptional service.",
    url: "https://softplix.com/",
    type: "website",
    siteName: "SoftPlix: Website & Mobile App Development Company",
    images: [
      {
        url: "/home/header/softplix-logo.png",
        width: 1200,
        height: 630,
        alt: "SoftPlix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SoftPlix",
    title: "SoftPlix: Website & Mobile App Development Company",
    description:
      "Empowering businesses with innovative software solutions. Discover how SoftPlix can help transform your business.",
    images: ["/navigation/logo.png"],
  },
  icons: {
    icon: "/navigation/logo.png",
    apple: "/navigation/logo.png",
  },
  alternates: {
    canonical: "https://softplix.com/",
    languages: {
      en: "https://softplix.com/",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PixelInit />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16812620227"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16812620227');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
