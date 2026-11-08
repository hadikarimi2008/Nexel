import { ProductsType } from "@/types/ProductsType";
import Image from "next/image";
import Link from "next/link";
import { BadgePercentIcon, ImageOff } from "lucide-react";
import AddToCartButton from "./AddToCartButton";

export default function CardComponents({ product }: { product: ProductsType }) {
  const imageUrl = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `http://localhost:5000/uploads/products/${product.image}`
    : null;

  const discount = Number(product.discount) || 0;

  const finalPrice = product.price - (product.price * discount) / 100;

  return (
    <article className="overflow-hidden rounded-2xl border border-neutral-700 bg-neutral-900 relative">
      <div className="relative flex h-72 items-center justify-center border-b border-neutral-700 bg-neutral-950 p-6">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={product.title}
            width={400}
            height={400}
            unoptimized
            className="h-full w-full object-contain"
          />
        ) : (
          <ImageOff
            size={64}
            strokeWidth={1.2}
            className="text-neutral-500"
            aria-label="No image available"
          />
        )}
      </div>

      <div className="p-5">
        <p className="text-xs text-neutral-400">{product.category}</p>

        <h2 className="mt-2 text-lg font-medium text-neutral-100">
          {product.title}
        </h2>

        <div className="mt-4 flex min-h-[64px] items-center justify-between">
          <div className="flex min-h-[64px] flex-col justify-center gap-1">
            {discount > 0 ? (
              <>
                <p className="text-lg font-semibold text-white">
                  $
                  {finalPrice.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </p>

                <div className="flex items-center gap-2">
                  <del className="text-sm text-neutral-400">
                    ${product.price.toLocaleString("en-US")}
                  </del>

                  <span className="text-xs text-red-400">{discount}% OFF</span>
                </div>
              </>
            ) : (
              <p className="text-lg font-semibold text-white">
                ${product.price.toLocaleString("en-US")}
              </p>
            )}
          </div>

          <p className="text-sm text-neutral-300">
            <span className="text-amber-400">★</span> {product.rating}
          </p>
        </div>

        <AddToCartButton productId={product.id} />

        <Link
          href={`/store/${product.slug}`}
          className="mt-3 block w-full rounded-xl border border-neutral-600 px-4 py-3 text-center text-sm font-medium text-white"
        >
          View Product
        </Link>
      </div>
    </article>
  );
}
