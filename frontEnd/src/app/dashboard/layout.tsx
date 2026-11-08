import AuthGuard from "@/components/auth/AuthGuard";
import { LayOutType } from "@/types/LayOutType";
import React from "react";

export default function layout({ children }: LayOutType) {
  return (
    <div>
      <AuthGuard>{children}</AuthGuard>
    </div>
  );
}
