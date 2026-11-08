"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageOff } from "lucide-react";
import { getUserId, isLoggedIn, logout } from "@/lib/auth/auth";
import { Usertype } from "@/types/UsersType";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<Usertype | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        if (!isLoggedIn()) {
          logout();
          return router.replace("/login");
        }

        const id = getUserId();

        if (!id) {
          logout();
          return router.replace("/login");
        }

        const res = await fetch(`http://localhost:5000/api/users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (res.status === 401) {
          logout();
          return router.replace("/login");
        }

        if (!res.ok) {
          throw new Error("Could not load user");
        }

        setUser(await res.json());
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [router]);

  if (loading)
    return <p className="py-12 text-center text-nexel-sage">Loading...</p>;

  if (!user)
    return (
      <p className="py-12 text-center text-nexel-sage">
        Could not load your profile.
      </p>
    );

  return (
    <main className="flex justify-center px-4 py-12">
      <section className="w-full max-w-sm flex flex-col gap-6 border border-nexel-gray rounded-lg p-6">
        <div className="flex justify-center">
          {user.image ? (
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={`http://localhost:5000/uploads/users/${user.image}`}
              alt="Profile"
            />
          ) : (
            <ImageOff
              size={96}
              strokeWidth={1.2}
              className="text-nexel-sage"
              aria-label="No image available"
            />
          )}
        </div>

        <dl className="flex flex-col gap-3 text-sm">
          <div className="flex justify-between border-t border-nexel-gray pt-3">
            <dt className="text-nexel-sage">Name</dt>
            <dd>{user.name}</dd>
          </div>

          <div className="flex justify-between border-t border-nexel-gray pt-3">
            <dt className="text-nexel-sage">Family</dt>
            <dd>{user.family}</dd>
          </div>

          <div className="flex justify-between border-t border-nexel-gray pt-3">
            <dt className="text-nexel-sage">Username</dt>
            <dd>{user.username}</dd>
          </div>
        </dl>

        <Link
          href={`/dashboard/edit/${user.id}`}
          className="w-full bg-nexel-cream text-nexel-dark rounded-lg py-3 text-center font-medium"
        >
          Edit profile
        </Link>
      </section>
    </main>
  );
}
