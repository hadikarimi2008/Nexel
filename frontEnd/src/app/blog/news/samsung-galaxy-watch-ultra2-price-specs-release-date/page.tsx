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
  (item) =>
    item.slug === "samsung-galaxy-watch-ultra2-price-specs-release-date",
) as Blog;

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

const intro =
  "Samsung announced the Galaxy Watch Ultra2 on July 22, 2026, at its Unpacked event in London, and it went on sale on August 7. It is Samsung's rugged flagship smartwatch, with a much brighter display, a bigger battery and a new chip. Here are the confirmed details.";

const sections: Section[] = [
  {
    title: "Release date and price",
    paragraphs: [
      "Pre-orders opened on July 22 in select markets, and general availability started on August 7, 2026. In the United States the Galaxy Watch Ultra2 costs $699.99, which is $50 more than the original Galaxy Watch Ultra at $649.99.",
      "There is a single 47mm size, and the US model has 4G LTE.",
    ],
  },
  {
    title: "Display and design",
    paragraphs: [
      "The watch has a 1.52-inch Super AMOLED display at 498 × 498 with up to 5,000 nits of peak brightness. Samsung says it is the first smartwatch display with that peak brightness. The screen is protected by sapphire crystal.",
      "It measures 47.4 × 47.1 × 10.7 mm and weighs 61.5g, which makes it 1.4mm thinner than the original and about 1g heavier. Titanium covers the front and back of the metal frame, and it comes in Titanium Silver and Titanium Gray.",
    ],
  },
  {
    title: "Battery and performance",
    paragraphs: [
      "The battery is 800mAh, which is 35 percent larger than the original Watch Ultra. Samsung's specs page rates fast charging at about 40 percent in around 30 minutes under lab conditions, and its New Zealand listing gives up to 60 hours with the Always On Display on and up to 80 hours with it off. Battery figures can differ by region.",
      "Inside is the Snapdragon Wear Elite platform with a penta-core CPU, replacing the Exynos W1000 of the original, along with 2GB of RAM and 64GB of storage.",
    ],
  },
  {
    title: "Outdoor and health features",
    points: [
      "Durability: 10ATM water resistance, IP69K dust and water protection, and MIL-STD-810H compliance.",
      "Diving: EN13319 diving instrument certification for dives down to 40 meters. A Diving app developed with Mares is due later this year.",
      "Training: Trail Run tracking and other outdoor sport modes, plus Nutrition Alert, which extends Sweat Loss with real-time hydration guidance.",
      "Location: built-in dual-frequency GPS (L1 and L5).",
      "Health: ECG, blood pressure (needs calibration), sleep tracking, SpO2 and stress tracking through Samsung Health.",
    ],
  },
  {
    title: "Connectivity and compatibility",
    paragraphs: [
      "The watch supports LTE with eSIM, Wi-Fi on 2.4 and 5GHz, Bluetooth 6.0 and NFC. It does not have 5G or satellite connectivity. It runs Wear OS 7 with Samsung's One UI Watch.",
      "It works with Android 13 or later and does not work with iPhone. Some features, such as Samsung Wallet and the ECG and blood pressure tools, need a Galaxy phone.",
    ],
  },
  {
    title: "Specs at a glance",
    specs: [
      ["Announced", "July 22, 2026"],
      ["On sale", "August 7, 2026"],
      ["Price (US)", "$699.99 (47mm, 4G LTE)"],
      ["Display", "1.52-inch Super AMOLED, 498 × 498, up to 5,000 nits"],
      ["Size and weight", "47.4 × 47.1 × 10.7 mm, 61.5g"],
      ["Chipset", "Snapdragon Wear Elite (penta-core)"],
      ["RAM and storage", "2GB RAM, 64GB storage"],
      ["Battery", "800mAh"],
      ["Water and durability", "10ATM, IP69K, MIL-STD-810H, EN13319"],
      [
        "Connectivity",
        "LTE (eSIM), Wi-Fi, Bluetooth 6.0, NFC, dual-frequency GPS",
      ],
      ["Software", "Wear OS 7 with One UI Watch"],
      ["Compatibility", "Android 13 or later, not iPhone"],
      ["Colors", "Titanium Silver, Titanium Gray"],
    ],
  },
  {
    title: "Is it worth it?",
    paragraphs: [
      "If you use an Android phone and want a durable smartwatch for hiking, running or diving, the Ultra2 is a strong choice. The brighter display, bigger battery and newer chip all improve on the original.",
      "If you already own the original Galaxy Watch Ultra, the upgrade is more modest, and the $50 higher price is worth weighing. If you use an iPhone, this watch will not work with it.",
      "Specifications, prices and features can vary by region, so check Samsung's official pages for details in your country.",
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
