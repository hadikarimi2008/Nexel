"use client";

import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart();

  return (
    <main className="mx-auto mt-[3%] max-w-3xl">
      <h1 className="mb-6 text-3xl font-semibold text-white">Cart</h1>

      {items.length === 0 ? (
        <p className="text-sm text-neutral-400">Your cart is empty.</p>
      ) : (
        <>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.product_id}
                className="flex items-center gap-4 rounded-lg border border-neutral-700 bg-neutral-950 p-3"
              >
                <img
                  src={`http://localhost:5000/uploads/products/${item.image}`}
                  alt={item.title}
                  className="h-16 w-16 object-contain"
                />

                <div className="flex-1">
                  <p className="text-white">{item.title}</p>
                  <p className="text-sm text-neutral-400">{item.price}</p>
                </div>

                <div className="flex items-center gap-3 text-white">
                  <button
                    type="button"
                    disabled={item.quantity === 1}
                    onClick={() =>
                      updateQuantity(item.product_id, item.quantity - 1)
                    }
                    className="disabled:opacity-40"
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() =>
                      updateQuantity(item.product_id, item.quantity + 1)
                    }
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.product_id)}
                  className="text-white"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-neutral-700 pt-4 text-white">
            <span className="text-neutral-400">Total</span>
            <span className="text-lg">{total}</span>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-lg bg-white py-3 font-medium text-neutral-950"
          >
            Checkout
          </button>
        </>
      )}
    </main>
  );
}
