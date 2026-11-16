import iPhone18ProMaxPromotionalBanner from "../../../public/images/blog/iPhone18ProMaxPromotionalBanner.png";
import GalaxyS25UltraWorthIt from "../../../public/images/blog/SamsungGalaxyS25Ultra_2026WorthBuying.png";
import iPhone18ProVsProMax from "../../../public/images/blog/iPhone18ProvsProMaxComparison.png";
import GalaxyS26Ultra from "../../../public/images/blog/samsung-galaxy-s26-ultra-price-specs-release-date.png";
import GalaxyWatchUltra2 from "../../../public/images/blog/SamsungGalaxyWatchUltra2Promo.png";
import { StaticImageData } from "next/image";

export type Blog = {
  slug: string;
  title: string;
  description: string;
  category: string;
  image: string | StaticImageData;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: string[];
};

export const blogs: Blog[] = [
  {
    slug: "apple-iphone-18-pro-max-price-specs-release-date",
    title: "iPhone 18 Pro Max: Price, Specs and Release Date",
    description:
      "Apple's iPhone 18 Pro Max brings the 2nm A20 Pro chip, a 48MP variable aperture main camera and up to 43 hours of video playback. Here are the confirmed specs, storage options and what changed from last year.",
    category: "news",
    image: iPhone18ProMaxPromotionalBanner,
    author: "Nexel Team",
    publishedAt: "2026-11-16",
    readingTime: 4,
    tags: ["Apple", "iPhone 18 Pro Max", "A20 Pro", "Smartphones"],
  },
  {
    slug: "samsung-galaxy-s25-ultra-still-worth-buying-in-2026",
    title: "Samsung Galaxy S25 Ultra in 2026: Is It Still Worth Buying?",
    description:
      "The Galaxy S25 Ultra pairs the Snapdragon 8 Elite with a 200MP main camera, a 5,000mAh battery and the S Pen. We look at its specs and whether it still makes sense to buy today.",
    category: "news",
    image: GalaxyS25UltraWorthIt,
    author: "Nexel Team",
    publishedAt: "2026-11-16",
    readingTime: 3,
    tags: ["Samsung", "Galaxy S25 Ultra", "Snapdragon 8 Elite", "Smartphones"],
  },
  {
    slug: "apple-iphone-18-pro-vs-iphone-18-pro-max-which-to-buy",
    title: "iPhone 18 Pro vs iPhone 18 Pro Max: Which One Should You Buy?",
    description:
      "The iPhone 18 Pro and iPhone 18 Pro Max share the same A20 Pro chip and 48MP variable aperture camera. The real differences are screen size, battery life and a $100 price gap.",
    category: "news",
    image: iPhone18ProVsProMax,
    author: "Nexel Team",
    publishedAt: "2026-11-16",
    readingTime: 3,
    tags: ["Apple", "iPhone 18 Pro", "iPhone 18 Pro Max", "Comparison"],
  },
  {
    slug: "samsung-galaxy-watch-ultra2-price-specs-release-date",
    title: "Samsung Galaxy Watch Ultra2: Price, Specs and Release Date",
    description:
      "The Galaxy Watch Ultra2 has a 5,000-nit display, an 800mAh battery that is 35 percent larger than before and a new Snapdragon Wear Elite chip. Here are the confirmed specs, price and new health features.",
    category: "news",
    image: GalaxyWatchUltra2,
    author: "Nexel Team",
    publishedAt: "2026-11-16",
    readingTime: 3,
    tags: ["Samsung", "Galaxy Watch Ultra2", "Smartwatches", "Wear OS"],
  },
];

export function getBlogHref(blog: Blog) {
  return `/blog/${blog.category}/${blog.slug}`;
}
