import { Metadata } from "next";
import ProductsFilter from "@/components/ProductsFilter";

import { ProductsType } from "@/types/ProductsType";

export const metadata: Metadata = {
  title: "Nexel || Store Page",
  description: "Explore products at Nexel Store.",
};

export default async function Store() {
  const data: ProductsType[] = await fetch(
    "http://localhost:5000/api/products",
  ).then((res) => res.json());

  return (
    <main className="mx-auto mt-[3%]">
      <div className="mb-8">
        <p className="text-sm text-neutral-400">Nexel Collection</p>

        <h1 className="mt-2 text-3xl font-semibold text-white">Store</h1>

        <p className="mt-2 text-sm text-neutral-400">
          Explore our latest products.
        </p>
      </div>

      <ProductsFilter products={data} />
    </main>
  );
}
