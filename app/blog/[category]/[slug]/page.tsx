import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getBlogs } from "@/services/blogs.services";
import BlogDetailContent from "@/components/apiData/BlogDetails";

interface PageProps {
  params: Promise<{ category: string; slug: string }>;
}

async function BlogContent({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const allBlogs = await getBlogs();

  const matched = allBlogs.find(
    (b: any) => (b.slug || b.blog_slug || b.url) === decodedSlug,
  );

  if (!matched) notFound();

  const relatedBlogs = allBlogs
    .filter((b: any) => (b.slug || b.blog_slug || b.url) !== decodedSlug)
    .slice(0, 3);

  return (
    <BlogDetailContent
      initialBlog={matched}
      initialRelatedBlogs={relatedBlogs}
      slug={decodedSlug}
    />
  );
}

export default function Page({ params }: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 py-12 animate-pulse">
          <div className="h-8 w-2/3 bg-gray-200 rounded mb-6" />
          <div className="h-[320px] w-full bg-gray-200 rounded-xl mb-6" />
          <div className="h-4 w-full bg-gray-200 rounded mb-3" />
          <div className="h-4 w-5/6 bg-gray-200 rounded" />
        </div>
      }
    >
      <BlogContent params={params} />
    </Suspense>
  );
}
