"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isLoggedIn, logout } from "@/lib/auth/auth";

const buttonClass =
  "inline-flex h-10 items-center bg-nexel-cream text-nexel-dark rounded-lg px-5 text-sm font-medium";
  
export default function AuthButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [logged, setLogged] = useState<boolean | null>(null);

  useEffect(() => {
    setLogged(isLoggedIn());
  }, [pathname]);

  function handleLogout() {
    logout();
    setLogged(false);
    router.push("/");
    window.location.reload();
  }

  if (logged === null) return null;

  return logged ? (
    <button onClick={handleLogout} className={buttonClass} >
      Logout
    </button>
  ) : (
    <Link href="/login" className={buttonClass}>
      Login
    </Link>
  );
}
