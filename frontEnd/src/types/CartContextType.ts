import { CartItem } from "./CartItemType";

export type CartContextType = {
  items: CartItem[];
  count: number;
  total: number;
  reload: () => Promise<void>;
  addToCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
  removeItem: (productId: number) => Promise<void>;
};
