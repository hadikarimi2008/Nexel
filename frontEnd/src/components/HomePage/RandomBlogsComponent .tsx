import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";
import { blogs, getBlogHref, type Blog } from "@/app/blog/blogs";

type RandomBlogsComponentProps = {
  count?: number;
  excludeSlug?: string;
  title?: string;
};

function pickRandom(items: Blog[], count: number) {
  const pool = [...items];

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

function BlogMiniCard({ blog }: { blog: Blog }) {
  const date = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <Link
      href={getBlogHref(blog)}
      className="flex flex-row overflow-hidden rounded-xl border border-nexel-gray bg-nexel-dark sm:flex-col"
    >
      <div className="relative aspect-[4/3] w-28 shrink-0 bg-black sm:aspect-video sm:w-full">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(min-width: 640px) 33vw, 112px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 p-3">
        <span className="text-[11px] uppercase tracking-widest text-nexel-sage">
          {blog.category}
        </span>
        <h3 className="line-clamp-2 text-sm font-medium leading-5 text-nexel-cream">
          {blog.title}
        </h3>
        <span className="text-xs text-nexel-sage">
          {date} · {blog.readingTime} min read
        </span>
      </div>
    </Link>
  );
}

export default async function RandomBlogsComponent({
  count = 3,
  excludeSlug,
  title = "More from the Blog",
}: RandomBlogsComponentProps) {
  await connection();

  const pool = blogs.filter((blog) => blog.slug !== excludeSlug);
  const picked = pickRandom(pool, count);

  if (picked.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto w-[90%] max-w-5xl py-16">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#A3AD9D]">
            Blog
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-nexel-cream sm:text-3xl">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#C2C6BC]">
            News, comparisons and guides about the latest tech.
          </p>
        </div>

        <Link href="/blog" className="shrink-0 text-sm text-nexel-sage">
          View all →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {picked.map((blog) => (
          <BlogMiniCard key={`${blog.category}-${blog.slug}`} blog={blog} />
        ))}
      </div>
    </section>
  );
}
