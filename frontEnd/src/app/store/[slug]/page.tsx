import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImageOff, ArrowLeft } from "lucide-react";
import { ProductsType } from "@/types/ProductsType";

async function getProduct(slug: string): Promise<ProductsType | null> {
  try {
    const response = await fetch(
      `http://localhost:5000/api/products/slug/${slug}`,
      { cache: "no-store" },
    );

    if (!response.ok) return null;

    return response.json();
  } catch {
    return null;
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) notFound();

  const originalPrice = Number(product.price) || 0;
  const discount = Number(product.discount) || 0;
  const finalPrice = originalPrice - (originalPrice * discount) / 100;

  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `http://localhost:5000/uploads/products/${product.image}`
    : null;

  return (
    <main className="min-h-screen bg-nexel-dark px-5 py-12 text-nexel-cream sm:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/store"
          className="mb-10 inline-flex items-center gap-2 text-sm text-nexel-sage"
        >
          <ArrowLeft size={18} />
          Back to Store
        </Link>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex min-h-[350px] items-center justify-center rounded-2xl border border-nexel-sage/30 bg-nexel-gray/30 p-8 sm:min-h-[500px]">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={product.title}
                width={700}
                height={700}
                unoptimized
                className="max-h-[450px] w-full object-contain"
              />
            ) : (
              <ImageOff size={80} strokeWidth={1} className="text-nexel-sage" />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-nexel-sage/40 px-3 py-1 text-xs text-nexel-sage">
                {product.category}
              </span>

              <span className="text-sm text-nexel-sage">{product.brand}</span>
            </div>

            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              {product.title}
            </h1>

            <p className="mt-6 leading-8 text-nexel-cream/70">
              {product.description}
            </p>

            <div className="mt-8 border-y border-nexel-sage/30 py-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-3xl font-semibold">
                  $
                  {finalPrice.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </span>

                {discount > 0 && (
                  <>
                    <del className="text-lg text-nexel-sage">
                      ${originalPrice.toLocaleString("en-US")}
                    </del>

                    <span className="rounded-md bg-nexel-sage/20 px-2 py-1 text-sm text-nexel-cream">
                      {discount}% OFF
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5">
              <div>
                <p className="text-xs text-nexel-sage">Product Rating</p>
                <p className="mt-2 text-lg">
                  <span className="text-nexel-sage">★</span> {product.rating}
                </p>
              </div>

              <div>
                <p className="text-xs text-nexel-sage">Available Stock</p>
                <p className="mt-2 text-lg">{product.stock}</p>
              </div>

              <div>
                <p className="text-xs text-nexel-sage">Brand</p>
                <p className="mt-2 text-lg">{product.brand}</p>
              </div>

              <div>
                <p className="text-xs text-nexel-sage">Category</p>
                <p className="mt-2 text-lg">{product.category}</p>
              </div>
            </div>

            <div className="mt-10 border-t border-nexel-sage/30 pt-6">
              <p className="text-sm text-nexel-sage">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
