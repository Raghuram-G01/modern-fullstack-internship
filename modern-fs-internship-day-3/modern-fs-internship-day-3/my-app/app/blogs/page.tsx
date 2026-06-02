import Link from "next/link";

import { blogs } from "./blogData";

export default function Blogs() {
  return (
    <div>
      <h1>All Blogs</h1>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link href={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
