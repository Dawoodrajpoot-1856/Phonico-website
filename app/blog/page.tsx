import { Suspense } from "react";
import Footer from "@/components/Home/Footer";
import { getBlogs } from "@/services/blogs.services";
import BlogsClient from "@/components/BlogClient";

async function BlogsSection() {
  const blogs = await getBlogs();

  return <BlogsClient initialBlogs={blogs} />;
}

export default function Page() {
  return (
    <>
      <Suspense
        fallback={
          <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-pulse">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[320px] bg-gray-200 rounded-xl" />
            ))}
          </div>
        }
      >
        <BlogsSection />
      </Suspense>
      <Footer />
    </>
  );
}
