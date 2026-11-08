"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ productId }: { productId: number }) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        addToCart(productId);
      }}
      className="mt-3 w-full rounded-lg bg-white py-2 text-sm font-medium text-neutral-950"
    >
      Add to cart
    </button>
  );
}
