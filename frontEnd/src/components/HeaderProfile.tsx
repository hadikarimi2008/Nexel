"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ImageOff, ImageOffIcon } from "lucide-react";
import { getUserId, getUsername, isLoggedIn } from "@/lib/auth/auth";

export default function HeaderProfile() {
  const pathname = usePathname();

  const [logged, setLogged] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    async function loadImage() {
      const ok = isLoggedIn();
      const username = getUsername();

      setLogged(ok);
      setAdmin(ok && username === "HadiKarimiDev");

      if (!ok) {
        setImage(null);
        return;
      }

      try {
        const res = await fetch(
          `http://localhost:5000/api/users/${getUserId()}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          },
        );

        if (!res.ok) {
          setImage(null);
          return;
        }

        const user = await res.json();
        setImage(user.image);
      } catch {
        setImage(null);
      }
    }

    loadImage();
  }, [pathname]);

  return (
    <div className="group relative">
      {image ? (
        <Link href="/dashboard" aria-label="Dashboard" className="block">
          <img
            className="h-10 w-10 shrink-0 rounded-full border border-nexel-gray object-cover"
            src={`http://localhost:5000/uploads/users/${image}`}
            alt="Profile"
          />
        </Link>
      ) : (
        <Link href="/dashboard" aria-label="Dashboard" className="block">
          <ImageOffIcon />
        </Link>
      )}

      {admin && (
        <div className="invisible absolute left-0 top-full z-50 pt-2 group-hover:visible group-focus-within:visible">
          <div className="rounded-xl border border-nexel-gray bg-nexel-dark p-1 text-sm">
            <Link
              href="/admin"
              className="block whitespace-nowrap rounded-lg px-4 py-2 text-nexel-cream"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
