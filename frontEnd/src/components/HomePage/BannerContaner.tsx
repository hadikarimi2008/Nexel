import Image from "next/image";
import NexelHomeHero01 from "../../../public/images/banner/nexel-home-hero-01.webp.png";

export default function BannerContainer() {
  return (
    <section className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto w-full max-w-screen-2xl overflow-hidden rounded-2xl bg-nexel-dark">
        <Image
          src={NexelHomeHero01}
          alt="Nexel premium smartphones, laptops, and tech accessories"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1536px) 100vw, 1536px"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
