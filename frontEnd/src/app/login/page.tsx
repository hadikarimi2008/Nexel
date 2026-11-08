"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full bg-transparent border border-nexel-gray rounded-lg px-4 py-3 text-nexel-cream placeholder:text-nexel-sage outline-none focus:border-nexel-sage";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    const form = new FormData(e.currentTarget);

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: form.get("username"),
          password: form.get("password"),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
        return;
      }

      if (!data.token) {
        setError("The server did not return an authentication token.");
        return;
      }

      localStorage.setItem("token", data.token);
      router.replace("/");
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
          <p className="text-sm text-nexel-sage mt-1">Sign in to continue</p>
        </div>

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
          autoComplete="current-password"
          required
          className={inputClass}
        />

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-nexel-cream text-nexel-dark rounded-lg py-3 font-medium disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>

        <p className="text-sm text-nexel-sage text-center">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-nexel-cream">
            Sign up
          </Link>
        </p>
      </form>
    </main>
  );
}
