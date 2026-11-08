"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { logout } from "@/lib/auth/auth";
import ImageDropzone from "@/components/ImageDropzone";

type ProductData = Record<string, string | number | null>;

const hiddenFields = ["id", "image", "created_at", "updated_at"];

const inputClass =
  "w-full bg-transparent border border-nexel-gray rounded-lg px-4 py-3 text-nexel-cream placeholder:text-nexel-sage outline-none focus:border-nexel-sage";

const labelClass = "flex flex-col gap-1 text-sm capitalize text-nexel-sage";

export default function EditProductPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductData | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      const res = await fetch(`http://localhost:5000/api/products/${id}`);
      const data = await res.json().catch(() => null);

      return data ? setProduct(data) : router.replace("/admin");
    }

    loadProduct();
  }, [id, router]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!product) return;
    setError("");

    const form = new FormData(e.currentTarget);
    const body = new FormData();

    for (const [key, original] of Object.entries(product)) {
      if (hiddenFields.includes(key)) continue;

      const value = form.get(key) as string;
      if (value === "" && original === null) continue;

      body.append(key, value);
    }

    const file = form.get("image");
    if (file instanceof File && file.size > 0) body.append("image", file);

    const res = await fetch(`http://localhost:5000/api/products/${id}`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      body,
    });

    if (res.status === 401) {
      logout();
      return router.replace("/login");
    }

    if (res.ok) return router.push("/admin");

    setError("Could not update product.");
  }

  if (!product)
    return <p className="py-12 text-center text-nexel-sage">Loading...</p>;

  const currentImage =
    typeof product.image === "string" && product.image
      ? `http://localhost:5000/uploads/products/${product.image}`
      : null;

  return (
    <main className="flex justify-center px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-4 border border-nexel-gray rounded-lg p-6"
      >
        <h1 className="text-xl font-semibold tracking-tight">
          Edit product{" "}
          <span className="text-sm text-nexel-sage">#{product.id}</span>
        </h1>

        <ImageDropzone name="image" currentImage={currentImage} />

        {Object.entries(product)
          .filter(([key]) => !hiddenFields.includes(key))
          .map(([key, value]) => (
            <label key={key} className={labelClass}>
              {key}
              {typeof value === "string" && value.length > 80 ? (
                <textarea
                  name={key}
                  defaultValue={value}
                  rows={4}
                  className={inputClass}
                />
              ) : (
                <input
                  type={typeof value === "number" ? "number" : "text"}
                  step={typeof value === "number" ? "any" : undefined}
                  name={key}
                  defaultValue={value ?? ""}
                  required={value !== null}
                  className={inputClass}
                />
              )}
            </label>
          ))}

        {error && <div className="text-sm text-nexel-cream">{error}</div>}

        <div className="flex gap-3">
          <Link
            href="/admin"
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
