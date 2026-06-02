import { blogs } from "../blogData";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetails({
  params,
}: Props) {
  const { id } = await params;

  const blog = blogs.find(
    (blog) =>
      blog.id === Number(id)
  );

  return (
    <div>
      {blog ? (
        <>
          <h1>
            {blog.title}
          </h1>

          <p>
            {blog.content}
          </p>
        </>
      ) : (
        <h1>
          Blog not found
        </h1>
      )}
    </div>
  );
}