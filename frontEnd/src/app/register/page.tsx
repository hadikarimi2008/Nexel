"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full bg-transparent border border-nexel-gray rounded-lg px-4 py-3 text-nexel-cream placeholder:text-nexel-sage outline-none focus:border-nexel-sage";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          family: form.get("family"),
          username: form.get("username"),
          password: form.get("password"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Registration failed.");
        return;
      }

      router.push("/login");
    } catch (error) {
      console.error(error);
      setError("Could not connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs flex flex-col gap-4"
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-semibold tracking-tight">Nexel</h1>
          <p className="text-sm text-nexel-sage mt-1">Create your account</p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          autoComplete="given-name"
          required
          className={inputClass}
        />

        <input
          type="text"
          name="family"
          placeholder="Family"
          autoComplete="family-name"
          required
          className={inputClass}
        />

        <input
          type="text"
          name="username"
          placeholder="Username"
          autoComplete="username"
          required
          className={inputClass}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          required
          className={inputClass}
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-nexel-cream text-nexel-dark rounded-lg py-3 font-medium disabled:opacity-50"
        >
          {loading ? "Creating account..." : "Sign up"}
        </button>

        <p className="text-sm text-nexel-sage text-center">
          Already have an account?{" "}
          <Link href="/login" className="text-nexel-cream">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
}
