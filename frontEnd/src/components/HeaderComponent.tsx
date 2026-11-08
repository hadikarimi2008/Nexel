"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import logo from "../../public/images/logo/NexelLogo.png";
import AuthButton from "./auth/AuthButton";
import HeaderProfile from "./HeaderProfile";
import CartLink from "./CartLink";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Store", href: "/store" },
  { title: "About", href: "/about" },
];

export default function HeaderComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Suspense fallback={null}>
      <header className="sticky top-0 z-50 w-full border-b border-nexel-sage/30 bg-nexel-dark text-nexel-cream shadow-md">
        <nav className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            aria-label="Nexel - Home"
            className="shrink-0"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={logo}
              alt="Nexel Logo"
              priority
              className="h-9 w-auto object-contain sm:h-11"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-nexel-cream transition-colors hover:bg-nexel-gray focus:outline-none focus:ring-2 focus:ring-nexel-sage md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="m6 6 12 12M18 6 6 18" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>

          <div
            className={`w-full md:flex md:w-auto md:items-center md:gap-4 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <ul className="mt-4 flex flex-col gap-2 rounded-xl p-3 font-medium md:mt-0 md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-4 py-2.5 text-nexel-cream md:px-3 md:py-2"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 px-7 pb-2 pt-1 md:p-0">
              <CartLink />
              <HeaderProfile />
              <AuthButton />
            </div>
          </div>
        </nav>
      </header>
    </Suspense>
  );
}
