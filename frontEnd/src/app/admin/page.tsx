"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isAdmin, logout } from "@/lib/auth/auth";
import { Usertype } from "@/types/UsersType";
import { ProductsType } from "@/types/ProductsType";
import Link from "next/link";

const buttonClass =
  "rounded-lg border border-nexel-gray px-3 py-1 text-xs text-nexel-cream";

async function getResponseData(res: Response) {
  const text = await res.text();

  let data;

  try {
    data = JSON.parse(text);
  } catch {
    console.error("Invalid API response:", text);
    throw new Error(
      `Server returned HTML or invalid JSON. Status: ${res.status}`,
    );
  }

  if (!res.ok) {
    throw new Error(data.message || `Request failed: ${res.status}`);
  }

  return data;
}

export default function AdminPage() {
  const router = useRouter();

  const [users, setUsers] = useState<Usertype[] | null>(null);
  const [products, setProducts] = useState<ProductsType[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        if (!isAdmin()) {
          router.replace("/login");
          return;
        }

        const token = localStorage.getItem("token");

        if (!token) {
          logout();
          router.replace("/login");
          return;
        }

        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [usersRes, productsRes] = await Promise.all([
          fetch("http://localhost:5000/api/users", { headers }),
          fetch("http://localhost:5000/api/products", { headers }),
        ]);

        if (
          usersRes.status === 401 ||
          usersRes.status === 403 ||
          productsRes.status === 401 ||
          productsRes.status === 403
        ) {
          logout();
          router.replace("/login");
          return;
        }

        const [usersData, productsData] = await Promise.all([
          getResponseData(usersRes),
          getResponseData(productsRes),
        ]);

        setUsers(usersData);
        setProducts(productsData);
      } catch (error) {
        console.error("Admin Load Error:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load data.",
        );
      }
    }

    loadData();
  }, [router]);

  async function handleDeleteUser(id: number) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        logout();
        router.replace("/login");
        return;
      }

      const res = await fetch(`http://localhost:5000/api/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await getResponseData(res);

      setUsers((prev) =>
        prev ? prev.filter((user) => Number(user.id) !== id) : [],
      );
    } catch (error) {
      console.error("Delete User Error:", error);

      alert(error instanceof Error ? error.message : "Could not delete user.");
    }
  }

  async function handleDeleteProduct(id: string) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmed) return;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        logout();
        router.replace("/login");
        return;
      }

      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await getResponseData(res);

      setProducts((prev) =>
        prev ? prev.filter((product) => String(product.id) !== String(id)) : [],
      );
    } catch (error) {
      console.error("Delete Product Error:", error);

      alert(
        error instanceof Error ? error.message : "Could not delete product.",
      );
    }
  }

  if (error) {
    return <p className="py-12 text-center text-red-400">{error}</p>;
  }

  if (!users || !products) {
    return <p className="py-12 text-center text-nexel-sage">Loading...</p>;
  }

  return (
    <main className="mx-auto flex max-w-screen-xl flex-col gap-10 px-4 py-12 sm:px-6">
      <div className="flex justify-end">
        <Link
          href="/admin/add"
          className="rounded-lg border border-nexel-sage bg-nexel-sage px-5 py-2 text-sm font-medium text-nexel-cream"
        >
          Add Product
        </Link>
      </div>
      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Users{" "}
          <span className="text-sm text-nexel-sage">({users.length})</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-nexel-gray">
          <table className="w-full text-left text-sm">
            <thead className="text-nexel-sage">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Family</th>
                <th className="px-4 py-3 font-medium">Username</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-nexel-gray">
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.family}</td>
                  <td className="px-4 py-3">{user.username}</td>
                  <td className="px-4 py-3 text-right">
                    <button
                      type="button"
                      onClick={() => handleDeleteUser(Number(user.id))}
                      className={buttonClass}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold tracking-tight">
          Products{" "}
          <span className="text-sm text-nexel-sage">({products.length})</span>
        </h2>

        <div className="overflow-x-auto rounded-lg border border-nexel-gray">
          <table className="w-full text-left text-sm">
            <thead className="text-nexel-sage">
              <tr>
                <th className="px-4 py-3 font-medium">ID</th>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-t border-nexel-gray">
                  <td className="px-4 py-3">{product.id}</td>
                  <td className="px-4 py-3">{product.title}</td>
                  <td className="px-4 py-3">{product.price}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/edit/${product.id}`}
                        className="flex items-center justify-center "
                      >
                        Edit
                      </Link>

                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(String(product.id))}
                        className={buttonClass}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
