"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
    { label: "Our Work", href: "/our-work" },
    { label: "Case Study", href: "/case-study-fintech" },
    { label: "Business Solution", href: "/business-solution" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-200 via-indigo-100 to-white text-black backdrop-blur-lg border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Image
              src={"/navigation/logo.png"}
              alt="SoftPlix"
              width={150}
              height={150}
            />
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="#contact"
              className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden text-black bg-gradient-to-b from-indigo-100 via-indigo-50 to-white border-t">
          <div className="px-4 py-4 space-y-3 text-sm text-gray-700">
            {navItems.map((item) => (
              <Link className="block" key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
