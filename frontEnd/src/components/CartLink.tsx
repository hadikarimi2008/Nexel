"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartLink() {
  const { count } = useCart();

  return (
    <Link
      href="/cart"
      className="relative flex h-8 w-8 items-center justify-center"
    >
      <ShoppingCart size={20} />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-neutral-200 px-1 text-[10px] text-neutral-950">
          {count}
        </span>
      )}
    </Link>
  );
}
