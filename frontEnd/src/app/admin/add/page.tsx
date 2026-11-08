"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin, logout } from "@/lib/auth/auth";
import ImageDropzone from "@/components/ImageDropzone";

const inputClass =
  "w-full rounded-lg border border-nexel-gray bg-nexel-dark px-4 py-3 text-sm text-nexel-cream outline-none";

const labelClass = "text-sm text-nexel-sage";

export default function AddProductPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (!isAdmin()) {
      router.replace("/login");
    }
  }, [router]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        logout();
        router.replace("/login");
        return;
      }

      const form = e.currentTarget;
      const formData = new FormData(form);

      if (image) {
        formData.set("image", image);
      }

      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const text = await res.text();

      let data;

      try {
        data = JSON.parse(text);
      } catch {
        console.error("Invalid API response:", text);
        throw new Error("Server returned an invalid response.");
      }

      if (!res.ok) {
        throw new Error(data.message || "Could not create product.");
      }

      router.push("/admin");
      router.refresh();
    } catch (error) {
      console.error("Add Product Error:", error);

      setError(
        error instanceof Error ? error.message : "Could not create product.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12 sm:px-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-semibold">Add Product</h1>
        <p className="text-sm text-nexel-sage">
          Add a new product to your store.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className={labelClass}>
            Product Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Enter product title"
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="slug" className={labelClass}>
            Slug
          </label>
          <input
            id="slug"
            name="slug"
            type="text"
            placeholder="product-slug"
            className={inputClass}
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter product description"
            rows={5}
            className={inputClass}
            required
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="price" className={labelClass}>
              Price
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="discount" className={labelClass}>
              Discount
            </label>
            <input
              id="discount"
              name="discount"
              type="number"
              min="0"
              max="100"
              placeholder="Discount percentage"
              className={inputClass}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category" className={labelClass}>
              Category
            </label>
            <input
              id="category"
              name="category"
              type="text"
              placeholder="Category"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="brand" className={labelClass}>
              Brand
            </label>
            <input
              id="brand"
              name="brand"
              type="text"
              placeholder="Brand"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="rating" className={labelClass}>
              Rating
            </label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="0 - 5"
              className={inputClass}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="stock" className={labelClass}>
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              placeholder="Stock quantity"
              className={inputClass}
              required
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={labelClass}>Product Image</label>
          <ImageDropzone onImageSelect={setImage} />
        </div>

        {error && <p className="text-sm text-red-400">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="rounded-lg border border-nexel-sage bg-nexel-sage px-5 py-3 text-sm font-medium text-nexel-cream disabled:opacity-50"
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </main>
  );
}
