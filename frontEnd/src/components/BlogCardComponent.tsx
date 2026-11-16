import Image from "next/image";
import Link from "next/link";
import { Blog, getBlogHref } from "../app/blog/blogs";

type BlogCardComponentProps = {
  blog: Blog;
};

export default function BlogCardComponent({ blog }: BlogCardComponentProps) {
  const date = new Date(blog.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-nexel-gray bg-nexel-dark">
      <div className="relative aspect-video w-full bg-black">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="text-xs uppercase tracking-widest text-nexel-sage">
          {blog.category}
        </span>

        <h2 className="text-lg font-medium text-nexel-cream">{blog.title}</h2>

        <p className="text-sm leading-6 text-nexel-cream/70">
          {blog.description}
        </p>

        <div className="mt-auto flex items-center justify-between pt-2 text-xs text-nexel-sage">
          <span>{date}</span>
          <span>{blog.readingTime} min read</span>
        </div>

        <Link
          href={getBlogHref(blog)}
          className="rounded-lg border border-nexel-gray py-2.5 text-center text-sm text-nexel-cream"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
