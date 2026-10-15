import { Suspense } from "react";
import BlogsServer from "@/components/apiData/BlogServer";
import { getBlogs } from "@/services/blogs.services";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>;
}) {
  const initialBlogs = await getBlogs();

  return (
    <Suspense
      fallback={
        <div className="max-w-[1270px] mx-auto px-4 py-8 animate-pulse">
          <div className="h-48 rounded-3xl bg-gray-100" />
          <div className="h-8 w-48 mt-10 rounded bg-gray-100" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={index} className="h-96 rounded-2xl bg-gray-100" />
            ))}
          </div>
        </div>
      }
    >
      <BlogsServer initialBlogs={initialBlogs} searchParams={searchParams} />
    </Suspense>
  );
}
