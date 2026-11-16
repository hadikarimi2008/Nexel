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
  (item) => item.slug === "samsung-galaxy-s25-ultra-still-worth-buying-in-2026",
) as Blog;

export const metadata: Metadata = {
  title: blog.title,
  description: blog.description,
};

const intro =
  "Samsung introduced the Galaxy S25 Ultra at its Unpacked event on January 22, 2025, and it reached stores on February 7, 2025. In 2026 Samsung followed it with the Galaxy S26 Ultra. So is the S25 Ultra still a good buy? Here are its key specs and how it compares with its successor.";

const sections: Section[] = [
  {
    title: "Short answer",
    paragraphs: [
      "For most people, yes. The S25 Ultra has the same 6.9-inch screen, the same 5,000mAh battery and the same camera resolution and zoom as the S26 Ultra. If you can find it at a clearly lower price, it is still a strong flagship.",
      "If you want the newest features, such as the Privacy Display, the S26 Ultra is the better choice.",
    ],
  },
  {
    title: "Specs at a glance",
    specs: [
      ["Announced", "January 22, 2025"],
      ["In stores", "February 7, 2025"],
      ["Launch price (US)", "$1,299.99 for 256GB"],
      [
        "Display",
        "6.9-inch AMOLED, QHD+ (3,120 × 1,440), 120Hz, up to 2,600 nits",
      ],
      ["Chipset", "Snapdragon 8 Elite for Galaxy, up to 4.47GHz"],
      ["RAM and storage", "12GB RAM, with 256GB, 512GB or 1TB storage"],
      [
        "Rear cameras",
        "200MP main (f/1.7), 50MP ultra-wide (f/1.9), 10MP 3x telephoto (f/2.4), 50MP 5x telephoto (f/3.4)",
      ],
      ["Front camera", "12MP (f/2.2)"],
      ["Battery", "5,000mAh"],
      ["Charging", "45W wired, 25W wireless (Qi2-ready)"],
      ["Build", "Titanium frame, IP68 water and dust resistance"],
      ["Size and weight", "162.8 × 77.6 × 8.2 mm, 218g"],
      [
        "Software",
        "Android 15 with One UI 7, and seven years of OS and security updates",
      ],
    ],
  },
  {
    title: "What the S25 Ultra does well",
    points: [
      "Camera: a 200MP main camera and a new 50MP ultra-wide, up from 12MP on the S24 Ultra. It also has a 10MP 3x telephoto and a 50MP 5x telephoto, records 8K video at 30fps and supports up to 100x digital zoom.",
      "Performance: the Snapdragon 8 Elite chip, with a vapor chamber 40 percent larger than on the previous generation to help with heat.",
      "Design: a titanium frame with slightly rounded corners, a change from the sharper edges of the S24 Ultra.",
      "Software: it launched with Android 15 and One UI 7, and Samsung promises seven years of OS and security updates.",
      "Charging: 45W wired and 25W wireless charging. It is Qi2-ready, but magnetic charging needs a special case.",
      "S Pen: still built in, but it no longer has Bluetooth features.",
    ],
  },
  {
    title: "Galaxy S25 Ultra vs Galaxy S26 Ultra",
    paragraphs: [
      "The S26 Ultra launched at the same US starting price, $1,299 for 256GB. Both phones have a 6.9-inch 3,120 × 1,440 display at 120Hz, a 5,000mAh battery, and the same camera resolution and zoom.",
      "Here is what is new on the S26 Ultra:",
    ],
    points: [
      "A Privacy Display.",
      "A brighter main camera aperture, which helps in low light.",
      "Newer Galaxy AI features and One UI 8.5.",
      "Faster charging.",
      "An aluminum frame instead of titanium.",
    ],
  },
  {
    title: "Who should buy it",
    paragraphs: [
      "Buy the S25 Ultra if you want a top Android flagship and care more about price than the newest features. Prices have dropped since launch, so compare the current price before you decide.",
      "Choose the S26 Ultra if you want the Privacy Display, the brighter main camera aperture and the latest Galaxy AI features, and the price difference does not bother you.",
      "Specifications can vary by region, so check Samsung's official pages for details in your country.",
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
