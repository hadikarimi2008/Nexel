import AuthGuard from "@/components/auth/AuthGuard";

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard>{children}</AuthGuard>;
}
