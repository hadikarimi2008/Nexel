import BlogCardComponent from "@/components/BlogCardComponent";
import { blogs } from "./blogs";

export default function page() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-xs uppercase tracking-widest text-nexel-sage">Blog</p>
      <h1 className="mt-2 text-3xl font-semibold text-nexel-cream">
        Latest from Nexel
      </h1>
      <p className="mt-2 text-sm text-nexel-cream/70">
        News, reviews and guides about the latest tech.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCardComponent
            key={`${blog.category}-${blog.slug}`}
            blog={blog}
          />
        ))}
      </div>
    </section>
  );
}
