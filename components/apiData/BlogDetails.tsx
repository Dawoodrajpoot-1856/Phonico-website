"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/components/Home/Footer";
import { ArrowUpRight } from "lucide-react";

interface BlogDetailContentProps {
  initialBlog: any;
  initialRelatedBlogs: any[];
  slug: string;
}

const BlogDetailContent = ({
  initialBlog,
  initialRelatedBlogs,
  slug,
}: BlogDetailContentProps) => {
  const router = useRouter();
  const blog = initialBlog;
  const relatedBlogs = initialRelatedBlogs;

  const handleBlogClick = (blogSlug: string) => {
    if (blogSlug) {
      router.push(`/blog/${blogSlug}`);
    }
  };

  const getCategoryName = (b: any) => b?.blog_category?.name || "Travel Tips";

  if (!blog) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Blog not found!</h1>
          <p className="text-gray-500 mt-2">
            The blog you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <button className="mt-4 font-bold rounded p-2 px-5 text-white bg-[#ee5e7f] hover:bg-[#ec3c65] text-sm">
              Back to Blogs
            </button>
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6">
        <img
          src={blog.image || "https://via.placeholder.com/1270x700"}
          alt={blog.name || "Blog Image"}
          className="w-full h-[90vh] object-cover rounded-b-3xl"
        />
      </div>

      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-8">
        <div className="flex flex-row items-center gap-3 mt-5">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src={blog.author_image || "https://via.placeholder.com/40"}
            alt={blog.author_name || "Author"}
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">
              {blog.author_name || "Anonymous"}
            </p>
            <p className="text-xs text-gray-400">9 months ago</p>
          </div>
        </div>

        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
          {blog.name || "Untitled Blog"}
        </h1>

        {blog.sub_content && (
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            {blog.sub_content}
          </p>
        )}

        {blog.content && (
          <div
            className="mt-8 text-gray-800 text-lg leading-relaxed space-y-4 prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        )}
      </div>

      <div className="w-full flex justify-center mt-12 px-4">
        <div className="bg-white rounded-2xl border border-gray-100 bg-gray-50 shadow-sm p-8 w-full max-w-2xl text-center">
          <img
            className="w-14 h-14 rounded-full object-cover mx-auto"
            src={blog.author_image || "https://via.placeholder.com/56"}
            alt={blog.author_name || "Author"}
          />
          <p className="font-bold text-gray-900 mt-3 text-lg">
            {blog.author_name || "Anonymous"}
          </p>
          <p className="text-gray-500 text-sm mt-1">Writer at Phonico</p>
        </div>
      </div>

      {relatedBlogs.length > 0 && (
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-14 mb-16">
          <h2 className="font-semibold text-2xl mb-6">Related Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((rBlog: any, index: number) => (
              <div
                key={rBlog.id || index}
                className="w-full flex flex-col justify-between rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
              >
                <div className="p-2">
                  <img
                    src={rBlog.image || "https://via.placeholder.com/390x240"}
                    alt={rBlog.name || "Blog Image"}
                    className="w-full h-56 rounded object-cover cursor-pointer"
                    onClick={() => handleBlogClick(rBlog.slug)}
                  />

                  <div className="p-5 pb-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[#ee5e7f] bg-red-50 rounded-full">
                      {getCategoryName(rBlog)}
                    </span>

                    <div className="flex flex-row justify-between items-start gap-2 mt-3">
                      <h3
                        onClick={() => handleBlogClick(rBlog.slug)}
                        className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight cursor-pointer hover:text-[#ee5e7f] transition-colors"
                      >
                        {rBlog.name || "Untitled Blog"}
                      </h3>
                      <button
                        onClick={() => handleBlogClick(rBlog.slug)}
                        className="text-gray-500 hover:text-[#ee5e7f] p-1 transition flex-shrink-0"
                      >
                        <ArrowUpRight size={18} />
                      </button>
                    </div>

                    <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {rBlog.sub_content || "No description available."}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-2 flex flex-row items-center justify-between border-t border-gray-50 mt-auto">
                  <div className="flex flex-row items-center gap-3">
                    <img
                      className="w-9 h-9 rounded-full object-cover"
                      src={
                        rBlog.author_image || "https://via.placeholder.com/40"
                      }
                      alt={rBlog.author_name || "Author"}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {rBlog.author_name || "Anonymous"}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400">9 months ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default BlogDetailContent;
