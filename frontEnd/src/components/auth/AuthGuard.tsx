"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn, logout } from "@/lib/auth/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) return setOk(true);

    logout();
    router.replace("/login");
  }, [router]);

  useEffect(() => {
    console.log(
      "token:",
      localStorage.getItem("token"),
      "loggedIn:",
      isLoggedIn(),
    );

    if (isLoggedIn()) return setOk(true);

    logout();
    router.replace("/login");
  }, [router]);

  return ok ? children : null;
}
