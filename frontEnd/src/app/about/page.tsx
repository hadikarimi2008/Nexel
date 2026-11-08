import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Nexel",
  description:
    "Learn more about Nexel, our mission, and our commitment to making technology accessible.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-[90%] max-w-7xl space-y-8 py-12 text-[#ECDFCC] sm:py-16">
      <section className="grid gap-8 border-b border-[#3C3D37] pb-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end lg:pb-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#A3AD9D]">
            Get to know us
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#ECDFCC] sm:text-5xl lg:text-6xl">
            Technology should make life better.
          </h1>
        </div>

        <div>
          <p className="text-base leading-8 text-[#C2C6BC]">
            At Nexel, we believe technology is more than just devices and
            specifications. It is about the experiences we create, the
            connections we build, and the possibilities we discover every day.
          </p>

          <Link
            href="/store"
            className="mt-6 inline-flex items-center justify-center rounded-xl border border-[#697565] bg-[#697565] px-6 py-3 text-sm font-medium text-[#ECDFCC]"
          >
            Explore Our Store
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-[#3C3D37] bg-[#292B27] p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-medium text-[#A3AD9D]">01 / Our Story</p>

          <h2 className="mt-4 text-2xl font-semibold text-[#ECDFCC] sm:text-3xl">
            Built around your needs
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#C2C6BC] sm:text-base">
            Nexel was created with a simple idea in mind: shopping for
            technology should feel clear, convenient, and enjoyable. With so
            many products and technical details to consider, finding the right
            device can sometimes become overwhelming.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#C2C6BC] sm:text-base">
            Our goal is to make that process easier by bringing products
            together in an organized environment where you can explore options,
            compare features, and make decisions with greater confidence.
          </p>
        </div>

        <div className="rounded-2xl border border-[#3C3D37] bg-[#343730] p-6 sm:p-8 lg:p-10">
          <p className="text-sm font-medium text-[#C4CCBC]">02 / Our Mission</p>

          <h2 className="mt-4 text-2xl font-semibold text-[#ECDFCC] sm:text-3xl">
            A simpler way to discover technology
          </h2>

          <p className="mt-5 text-sm leading-8 text-[#E0E0D5] sm:text-base">
            Our mission is to create a shopping experience that puts people
            first. We want to help customers discover technology that suits
            their preferences, daily routines, and budgets without unnecessary
            complexity.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#E0E0D5] sm:text-base">
            From exploring new smartphones to discovering everyday electronics,
            we aim to make every step of the journey more intuitive,
            informative, and accessible.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-[#3C3D37] bg-[#292B27] p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12 lg:p-10">
        <div>
          <p className="text-sm font-medium text-[#A3AD9D]">
            03 / The Experience
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-[#ECDFCC] sm:text-3xl">
            Designed for the way you shop
          </h2>
        </div>

        <div>
          <p className="text-sm leading-8 text-[#C2C6BC] sm:text-base">
            We want browsing Nexel to feel natural across different devices and
            screen sizes. A clean interface, organized product information, and
            a consistent visual identity help keep your attention on what
            matters: finding the right product.
          </p>

          <p className="mt-4 text-sm leading-8 text-[#C2C6BC] sm:text-base">
            We see the shopping experience as an ongoing process. As technology
            evolves and customer expectations change, we aim to keep improving
            the way people explore and interact with our store.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-2xl border border-[#697565] bg-[#343730] p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:p-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#C4CCBC]">
            The next step starts here
          </p>

          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-[#ECDFCC] sm:text-4xl">
            Find technology that fits your world.
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#E0E0D5] sm:text-base">
            Explore our collection and discover products that bring convenience,
            creativity, and new possibilities into your everyday life.
          </p>
        </div>

        <Link
          href="/store"
          className="inline-flex w-fit items-center justify-center rounded-xl border border-[#ECDFCC] px-6 py-3 text-sm font-medium text-[#ECDFCC]"
        >
          Browse Products
        </Link>
      </section>
    </main>
  );
}
