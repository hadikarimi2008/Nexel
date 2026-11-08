"use client";

import { useState } from "react";
import CardComponents from "@/components/CardComponents";
import { ProductsType } from "@/types/ProductsType";

type Product = ProductsType & {
  brand?: string | null;
  category?: string | null;
};

const emptyFilters = {
  q: "",
  min: "",
  max: "",
  brand: "",
  category: "",
  sort: "default",
};

const fieldClass =
  "w-full rounded-md border border-neutral-700 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 outline-none focus:border-neutral-400";

export default function ProductsFilter({ products }: { products: Product[] }) {
  const [filters, setFilters] = useState(emptyFilters);

  const brands = [
    ...new Set(products.map((p) => p.brand).filter((b): b is string => !!b)),
  ].sort();

  const categories = [
    ...new Set(products.map((p) => p.category).filter((c): c is string => !!c)),
  ].sort();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  }

  const words = filters.q.toLowerCase().split(" ").filter(Boolean);
  const min = filters.min === "" ? 0 : Number(filters.min);
  const max = filters.max === "" ? Infinity : Number(filters.max);

  const filtered = products
    .filter((p) => words.every((word) => p.title.toLowerCase().includes(word)))
    .filter((p) => Number(p.price) >= min && Number(p.price) <= max)
    .filter((p) => filters.brand === "" || p.brand === filters.brand)
    .filter((p) => filters.category === "" || p.category === filters.category);

  const sorted = [...filtered].sort((a, b) =>
    filters.sort === "cheap"
      ? Number(a.price) - Number(b.price)
      : filters.sort === "expensive"
        ? Number(b.price) - Number(a.price)
        : filters.sort === "newest"
          ? Number(b.id) - Number(a.id)
          : 0,
  );

  return (
    <>
      <div className="mb-8 flex flex-col gap-3">
        <input
          name="q"
          value={filters.q}
          onChange={handleChange}
          placeholder="Search products"
          className={fieldClass}
        />

        <div className="grid grid-cols-2 gap-3 md:grid-cols-6">
          <input
            type="number"
            name="min"
            value={filters.min}
            onChange={handleChange}
            placeholder="Min price"
            className={fieldClass}
          />
          <input
            type="number"
            name="max"
            value={filters.max}
            onChange={handleChange}
            placeholder="Max price"
            className={fieldClass}
          />

          {brands.length > 0 && (
            <select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className={fieldClass}
            >
              <option value="">All brands</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          )}

          {categories.length > 0 && (
            <select
              name="category"
              value={filters.category}
              onChange={handleChange}
              className={fieldClass}
            >
              <option value="">All categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          )}

          <select
            name="sort"
            value={filters.sort}
            onChange={handleChange}
            className={fieldClass}
          >
            <option value="default">Sort by</option>
            <option value="newest">Newest</option>
            <option value="cheap">Price: low to high</option>
            <option value="expensive">Price: high to low</option>
          </select>

          <button
            type="button"
            onClick={() => setFilters(emptyFilters)}
            className="w-full rounded-md border border-neutral-700 px-4 py-2.5 text-sm text-neutral-300"
          >
            Reset
          </button>
        </div>
      </div>

      {sorted.length === 0 ? (
        <p className="text-sm text-neutral-400">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((product) => (
            <CardComponents product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
