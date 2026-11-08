"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin, isLoggedIn, logout } from "@/lib/auth/auth";

export default function AdminGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (isAdmin()) return setOk(true);

    if (!isLoggedIn()) {
      logout();
      return router.replace("/login");
    }

    router.replace("/");
  }, [router]);

  return ok ? children : null;
}
