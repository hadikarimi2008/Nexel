import { ProductsType } from "@/types/ProductsType";
import CardComponents from "../CardComponents";

export default async function RandomProducts() {
  const data: ProductsType[] = await fetch(
    "http://localhost:5000/api/products",
  ).then((res) => res.json());

  const randomProducts = [...data].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-16">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-[#A3AD9D]">
          Discover
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#ECDFCC] sm:text-4xl">
          Featured Products
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#C2C6BC]">
          Discover a random selection of products from our collection.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {randomProducts.map((product) => (
          <CardComponents key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
