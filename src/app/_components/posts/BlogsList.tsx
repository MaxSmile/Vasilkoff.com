import { Blog } from "@/interfaces/docTypes";
import BlogCard from "./BlogCard";

export function BlogsList({ blogs }: {
  blogs: Blog[];
}) {

  return (
    <section>
      <div className="grid gap-x-[30px] gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {blogs && blogs.map((post, index) => (
          <BlogCard
            key={index}
            blog={post}
            slug={post.slug}
          />
        ))}
        {!blogs && <p>Nothing to show...</p>}
      </div>
    </section>
  );
}
