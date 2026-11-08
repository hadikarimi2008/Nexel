"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageOff } from "lucide-react";
import { getUserId, logout } from "@/lib/auth/auth";
import { Usertype } from "@/types/UsersType";

const inputClass =
  "w-full bg-transparent border border-nexel-gray rounded-lg px-4 py-3 text-nexel-cream placeholder:text-nexel-sage outline-none focus:border-nexel-sage";

const labelClass = "flex flex-col gap-1 text-sm text-nexel-sage";

export default function EditProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<Usertype | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUser() {
      const res = await fetch(
        `http://localhost:5000/api/users/${getUserId()}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        },
      );

      if (res.status === 401) {
        logout();
        return router.replace("/login");
      }

      if (res.ok) setUser(await res.json());
    }

    loadUser();
  }, [router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    const res = await fetch(`http://localhost:5000/api/users/${getUserId()}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      body: new FormData(e.currentTarget),
    });

    if (res.status === 401) {
      logout();
      return router.replace("/login");
    }

    if (res.ok) return router.push("/dashboard");

    setError("Could not update profile. Try another username.");
  }

  if (!user)
    return <p className="py-12 text-center text-nexel-sage">Loading...</p>;

  return (
    <main className="flex justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4 border border-nexel-gray rounded-lg p-6"
      >
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

        <label className={labelClass}>
          Profile image
          <input
            type="file"
            name="image"
            accept="image/*"
            className="text-sm text-nexel-sage file:mr-4 file:rounded-lg file:border file:border-nexel-gray file:bg-transparent file:px-4 file:py-2 file:text-nexel-cream"
          />
        </label>

        <label className={labelClass}>
          Name
          <input
            type="text"
            name="name"
            defaultValue={user.name}
            minLength={2}
            required
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          Family
          <input
            type="text"
            name="family"
            defaultValue={user.family}
            minLength={2}
            required
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          Username
          <input
            type="text"
            name="username"
            defaultValue={user.username}
            minLength={3}
            autoComplete="username"
            required
            className={inputClass}
          />
        </label>

        <label className={labelClass}>
          New password
          <input
            type="password"
            name="password"
            placeholder="Leave empty to keep current"
            minLength={6}
            autoComplete="new-password"
            className={inputClass}
          />
        </label>

        {error && <div className="text-sm text-nexel-cream">{error}</div>}

        <div className="flex gap-3">
          <Link
            href="/dashboard"
            className="w-full border border-nexel-gray text-nexel-cream rounded-lg py-3 text-center font-medium"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="w-full bg-nexel-cream text-nexel-dark rounded-lg py-3 font-medium"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
}
