import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogs, type Blog } from "../../blogs";

type Section = {
  title: string;
  paragraphs?: string[];
  points?: string[];
  compare?: {
    headers: [string, string];
    rows: [string, string, string][];
  };
};

const blog = blogs.find(
  (item) =>
    item.slug === "apple-iphone-18-pro-vs-iphone-18-pro-max-which-to-buy",
) as Blog;

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

const intro =
  "Apple announced the iPhone 18 Pro and iPhone 18 Pro Max together on September 9, 2026. Apple lists the same chip, the same main camera and the same Dynamic Island for both, so the choice mostly comes down to screen size, battery life and price. Here is how they compare, based on Apple's announcement.";

const sections: Section[] = [
  {
    title: "Short answer",
    paragraphs: [
      "Buy the iPhone 18 Pro if you want a more compact phone and a lower price. Buy the iPhone 18 Pro Max if battery life and a bigger screen matter most to you. In the United States the Pro Max costs $100 more.",
    ],
  },
  {
    title: "Side by side",
    compare: {
      headers: ["iPhone 18 Pro", "iPhone 18 Pro Max"],
      rows: [
        ["Display size", "6.3-inch", "6.9-inch"],
        ["Starting price (US)", "$1,199", "$1,299"],
        ["Monthly price (24 months, US)", "$49.95", "$54.12"],
        ["Video playback", "Up to 34 hours", "Up to 43 hours"],
        [
          "Video playback (eSIM-only models)",
          "Up to 36 hours",
          "Up to 45 hours",
        ],
        [
          "Charging",
          "About 50% in 15 minutes wired, 50% in 30 minutes wireless",
          "About 7 hours of video playback from 5 minutes wired",
        ],
        ["Chip", "A20 Pro (2nm)", "A20 Pro (2nm)"],
        [
          "Main camera",
          "48MP Fusion Main, variable aperture",
          "48MP Fusion Main, variable aperture",
        ],
        ["Storage", "256GB, 512GB, 1TB, 2TB", "256GB, 512GB, 1TB, 2TB"],
        [
          "Finishes",
          "Black, silver, glacier, burgundy",
          "Black, silver, glacier, burgundy",
        ],
        ["Software", "iOS 27", "iOS 27"],
      ],
    },
  },
  {
    title: "What is the same",
    points: [
      "The A20 Pro chip, Apple's first 2nm chip, with a new vapor chamber for better sustained performance.",
      "The 48MP Fusion Main camera with variable aperture, Pro controls and upgraded Photographic Styles.",
      "Apple Reference Image, which keeps an unalterable reference photo of what the sensor captured.",
      "A smaller Dynamic Island that can show up to three Live Activities at once.",
      "The N1 wireless chip (Wi-Fi 7, Bluetooth 6, Thread) and the C2 cellular modem.",
      "iOS 27 with Apple Intelligence and Siri AI, which is rolling out in beta.",
    ],
  },
  {
    title: "Where they differ",
    paragraphs: [
      "Size and price are the obvious differences. The iPhone 18 Pro has a 6.3-inch display and starts at $1,199. The iPhone 18 Pro Max has a 6.9-inch display and starts at $1,299.",
      "Battery life is the other big one. Apple says the Pro Max has a larger battery and delivers the largest increase in battery life ever on an iPhone. It is rated for up to 43 hours of video playback, against up to 34 hours for the Pro. Apple also rates the Pro Max for up to 29 hours of use on a full charge under its new usage model. eSIM-only models, sold in the United States, Canada, Japan, Mexico and several other markets, have a larger battery that adds about 2 more hours of video playback on both phones.",
      "Apple quotes charging figures in different ways for each phone, so they do not show which one charges faster. The Pro reaches about 50 percent in around 15 minutes with wired charging, or 50 percent in 30 minutes wirelessly. For the Pro Max, Apple says 5 minutes of wired charging gives around 7 hours of video playback.",
    ],
  },
  {
    title: "Which one should you buy?",
    points: [
      "Choose the iPhone 18 Pro if you want a phone that is easier to hold and carry, and you want to save $100.",
      "Choose the iPhone 18 Pro Max if you watch a lot of video, travel often, or simply want the biggest screen and the longest battery life.",
      "Either way you get the same chip and the same main camera, so you are not giving up performance or photo quality by picking the smaller model.",
    ],
    paragraphs: [
      "Prices and availability can vary by country, so check Apple's official pages for details in your region.",
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

            {section.compare && (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse border-t border-nexel-gray text-sm">
                  <thead>
                    <tr className="border-b border-nexel-gray">
                      <td className="w-1/3 py-3 pr-4" />
                      {section.compare.headers.map((header) => (
                        <th
                          key={header}
                          scope="col"
                          className="py-3 pr-4 text-left font-medium text-nexel-cream"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.compare.rows.map(([label, first, second]) => (
                      <tr key={label} className="border-b border-nexel-gray">
                        <th
                          scope="row"
                          className="py-3 pr-4 text-left align-top font-normal text-nexel-sage"
                        >
                          {label}
                        </th>
                        <td className="py-3 pr-4 align-top text-nexel-cream">
                          {first}
                        </td>
                        <td className="py-3 pr-4 align-top text-nexel-cream">
                          {second}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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
