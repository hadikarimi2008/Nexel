import AdminGuard from "@/components/auth/AdminGuard";
import { LayOutType } from "@/types/LayOutType";

export default function layout({ children }: LayOutType) {
  return <AdminGuard>{children}</AdminGuard>;
}
