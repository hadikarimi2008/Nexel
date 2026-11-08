"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn } from "@/lib/auth/auth";
import { CartItem } from "@/types/CartItemType";
import { CartContextType } from "@/types/CartContextType";

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [items, setItems] = useState<CartItem[]>([]);

  const reload = useCallback(async () => {
    if (!isLoggedIn()) return setItems([]);

    const res = await fetch("http://localhost:5000/api/cart", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    const data = await res.json();

    setItems(res.ok ? data : []);
  }, []);

  useEffect(() => {
    reload();
  }, [reload]);

  async function addToCart(productId: number) {
    if (!isLoggedIn()) return router.push("/login");

    await fetch("http://localhost:5000/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId }),
    });
    await reload();
  }

  async function updateQuantity(productId: number, quantity: number) {
    await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ quantity }),
    });
    await reload();
  }

  async function removeItem(productId: number) {
    await fetch(`http://localhost:5000/api/cart/${productId}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    await reload();
  }

  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items,
        count,
        total,
        reload,
        addToCart,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
