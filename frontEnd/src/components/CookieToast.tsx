"use client";

import { useEffect, useState } from "react";
import { getUserId } from "@/lib/auth/auth";

function cookieName() {
  return `nexel_cookie_consent_${getUserId() ?? "guest"}`;
}

export default function CookieToast() {
  const [visible, setVisible] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const accepted = document.cookie
      .split("; ")
      .includes(`${cookieName()}=accepted`);

    if (accepted) return;

    setVisible(true);
    const timer = setTimeout(() => setEntered(true), 1500);

    return () => clearTimeout(timer);
  }, []);

  function close() {
    setEntered(false);
    setTimeout(() => setVisible(false), 700);
  }

  function accept() {
    document.cookie = `${cookieName()}=accepted; max-age=31536000; path=/; SameSite=Lax`;
    close();
  }

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Cookie preferences"
      inert={!entered}
      className={`fixed left-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-neutral-700 bg-neutral-950 p-5 text-white transition-all duration-700 ease-out motion-reduce:transition-none ${
        entered ? "translate-x-0 opacity-100" : "-translate-x-[120%] opacity-0"
      }`}
    >
      <h2 className="text-base font-medium">Cookies</h2>

      <p className="mt-2 text-sm leading-relaxed text-neutral-400">
        Nexel uses cookies and browser storage to keep you signed in and make
        the store work. If you accept, we save your choice for this account on
        this device, so we won&apos;t ask again.
      </p>

      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={close}
          className="w-full rounded-xl border border-neutral-600 px-4 py-2.5 text-sm font-medium text-white"
        >
          Decline
        </button>
        <button
          type="button"
          onClick={accept}
          className="w-full rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-neutral-950"
        >
          Accept
        </button>
      </div>
    </aside>
  );
}
