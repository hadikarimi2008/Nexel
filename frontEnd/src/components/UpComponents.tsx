"use client";

import { ArrowUp } from "lucide-react";

export default function UpComponents() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC] transition-colors duration-200"
    >
      <ArrowUp size={22} strokeWidth={1.8} />
    </button>
  );
}
