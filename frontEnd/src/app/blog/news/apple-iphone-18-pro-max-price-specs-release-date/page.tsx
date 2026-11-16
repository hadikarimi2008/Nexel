import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs, type Blog } from "../../blogs";

type Section = {
  title: string;
  paragraphs?: string[];
  points?: string[];
  specs?: [string, string][];
};

const blog = blogs.find(
  (item) => item.slug === "apple-iphone-18-pro-max-price-specs-release-date",
) as Blog;

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

const intro =
  "Apple announced the iPhone 18 Pro and iPhone 18 Pro Max on September 9, 2026. The Pro Max is the larger model, with a 6.9-inch display, and Apple says it gets the biggest battery life increase ever on an iPhone. This guide covers the confirmed price, release date and specs, based on Apple's announcement.";

const sections: Section[] = [
  {
    title: "Release date and price",
    paragraphs: [
      "Pre-orders opened on Saturday, September 12, and the iPhone 18 Pro Max went on sale on Friday, September 18, 2026, in 65 countries and regions. A further 20 countries and regions follow on September 25.",
      "In the United States the iPhone 18 Pro Max starts at $1,299 for 256GB, while the smaller iPhone 18 Pro starts at $1,199. That is $100 more than the iPhone 17 Pro Max cost at launch. Storage options are 256GB, 512GB, 1TB and 2TB. Prices vary by country.",
    ],
  },
  {
    title: "Design and display",
    paragraphs: [
      "The iPhone 18 Pro Max has a 6.9-inch Super Retina XDR display with a smaller Dynamic Island. The Dynamic Island can now show up to three Live Activities at once, and it still handles Face ID.",
      "It comes in four finishes: black, silver, glacier and a new burgundy. Apple says the phone is made with 40 percent recycled materials overall, including 85 percent recycled aluminum in the enclosure.",
    ],
  },
  {
    title: "A20 Pro chip and performance",
    paragraphs: [
      "Both Pro models use the A20 Pro, Apple's first 2nm chip. It has a 6-core CPU and a Dual 16-core Neural Engine, which Apple says doubles the AI processing power of the A19 Pro.",
      "Apple also redesigned the cooling. The new vapor chamber has three times the surface area of the one in the iPhone 17 Pro, and Apple says it improves sustained performance by up to 40 percent over the previous generation. The A20 Pro is also packaged side by side with its memory, which keeps the memory out of the chip's heat path.",
    ],
  },
  {
    title: "Camera",
    paragraphs: [
      "The headline feature is the 48MP Fusion Main camera with variable aperture. It is the first time an iPhone can change its aperture, using six laser-cut blades.",
    ],
    points: [
      "Pro controls in the Camera app give manual control over shutter speed, white balance and aperture, plus a histogram.",
      "Apple Reference Image uses the new sensor to sign every pixel and keep an unalterable reference photo, so you can prove a photo is real.",
      "Apple says support for the SynthID standard is coming, to help identify images generated or edited with AI.",
      "Photographic Styles and video tools were upgraded as well.",
    ],
  },
  {
    title: "Battery and charging",
    paragraphs: [
      "Apple rates the iPhone 18 Pro Max for up to 43 hours of video playback, and up to 29 hours of use on a full charge based on its new usage model. eSIM-only models, sold in the United States, Canada, Japan, Mexico and several other markets, have a larger battery that adds about 2 more hours of video playback.",
      "Wired charging is faster too. Five minutes of charging gives around seven hours of video playback on the Pro Max.",
    ],
  },
  {
    title: "Connectivity and software",
    points: [
      "The N1 wireless chip supports Wi-Fi 7, Bluetooth 6 and Thread.",
      "The C2 modem is Apple's next-generation cellular modem, with faster uploads than the C1X and about 15 percent lower power use.",
      "It runs iOS 27 with Apple Intelligence and Siri AI, which is rolling out in beta.",
      "iPhone Handoff lets you switch between two iPhones that share a phone number on supported carriers.",
    ],
  },
  {
    title: "Specs at a glance",
    specs: [
      ["Announced", "September 9, 2026"],
      ["Available", "September 18, 2026 (pre-orders from September 12)"],
      ["Starting price (US)", "$1,299 for 256GB"],
      ["Storage", "256GB, 512GB, 1TB, 2TB"],
      ["Display", "6.9-inch Super Retina XDR"],
      ["Chip", "A20 Pro (2nm)"],
      ["Main camera", "48MP Fusion Main with variable aperture"],
      ["Video playback", "Up to 43 hours (45 hours on eSIM-only models)"],
      ["Connectivity", "Wi-Fi 7, Bluetooth 6, Thread (N1) and Apple C2 modem"],
      ["Software", "iOS 27"],
      ["Finishes", "Black, silver, glacier, burgundy"],
    ],
  },
  {
    title: "Should you upgrade?",
    paragraphs: [
      "The biggest changes are the longer battery life, better sustained performance and the variable aperture camera. If you already own an iPhone 17 Pro Max, the jump is real but incremental, and the $100 higher starting price is worth weighing.",
      "If you are coming from an older model, such as the iPhone 15 Pro Max or earlier, the 2nm chip, the camera and the battery add up to a much bigger step.",
      "Specifications and availability can vary by country, so check Apple's official pages for details in your region.",
    ],
  },
];

export default function page() {
  const date = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/blog" className="text-sm text-nexel-sage">
        ← Back to Blog
      </Link>

      <header className="mt-8 flex flex-col gap-4">
        <span className="text-xs uppercase tracking-widest text-nexel-sage">
          {blog.category}
        </span>
        <h1 className="text-3xl font-semibold leading-tight text-nexel-cream sm:text-4xl">
          {blog.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-nexel-sage">
          <span>{blog.author}</span>
          <span>{date}</span>
          <span>{blog.readingTime} min read</span>
        </div>
      </header>

      <div className="relative mt-10 aspect-video w-full overflow-hidden rounded-2xl border border-nexel-gray bg-black">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <p className="mt-10 text-lg leading-8 text-nexel-cream/80">{intro}</p>

      <div className="mt-12 flex flex-col gap-12">
        {sections.map((section) => (
          <section key={section.title} className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-nexel-cream">
              {section.title}
            </h2>

            {section.paragraphs?.map((text) => (
              <p key={text} className="leading-8 text-nexel-cream/80">
                {text}
              </p>
            ))}

            {section.points && (
              <ul className="flex list-disc flex-col gap-2 pl-5 leading-8 text-nexel-cream/80">
                {section.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}

            {section.specs && (
              <table className="w-full border-collapse border-t border-nexel-gray text-sm">
                <tbody>
                  {section.specs.map(([label, value]) => (
                    <tr key={label} className="border-b border-nexel-gray">
                      <th
                        scope="row"
                        className="w-1/3 py-3 pr-4 text-left align-top font-normal text-nexel-sage"
                      >
                        {label}
                      </th>
                      <td className="py-3 text-nexel-cream">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-16 flex flex-col gap-6 border-t border-nexel-gray pt-8">
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-nexel-gray px-3 py-1 text-xs text-nexel-sage"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href="/blog" className="text-sm text-nexel-sage">
          ← Back to Blog
        </Link>
      </footer>
    </article>
  );
}
