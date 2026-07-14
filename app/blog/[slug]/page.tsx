"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Home/header";
import Footer from "@/components/Home/Footer";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const BlogDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const [blog, setBlog] = useState<any>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          "https://platform.phonico.com/api/landing/blog",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          },
        );
        const data = await res.json();
        const allBlogs = data.data || data;

        const matched = allBlogs.find((b: any) => b.slug === slug);

        if (matched) {
          setBlog(matched);
          // current blog ko exclude kar ke 3 related blogs nikalo
          const others = allBlogs.filter((b: any) => b.slug !== slug);
          setRelatedBlogs(others.slice(0, 3));
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setNotFound(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  const handleBlogClick = (blogSlug: string) => {
    if (blogSlug) {
      router.push(`/blog/${blogSlug}`);
    }
  };

  const getCategoryName = (b: any) => b?.blog_category?.name || "Travel Tips";

  if (isLoading) {
    return (
      <>
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="h-8 w-8 border-2 border-[#ee5e7f] border-t-transparent rounded-full animate-spin" />
        </div>
        <Footer />
      </>
    );
  }

  if (notFound || !blog) {
    return (
      <>
        <Header />
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
      <Header />

      {/* Main Image — Header ke sath chipki hui, full width */}
      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6">
        <img
          src={blog.image || "https://via.placeholder.com/1270x700"}
          alt={blog.name || "Blog Image"}
          className="w-full h-[80vh] object-cover rounded-2xl"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-8">
        {/* Back button */}
        <button
          onClick={() => router.push("/blog")}
          className="flex items-center gap-2 text-gray-600 hover:text-[#ee5e7f] transition-colors mb-6 font-medium"
        >
          <ArrowLeft size={18} /> Back to Blogs
        </button>

        {/* Category badge */}
        <span className="inline-block px-3 py-1 text-sm font-medium text-[#ee5e7f] bg-red-50 rounded-full">
          {getCategoryName(blog)}
        </span>

        {/* Title */}
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
          {blog.name || "Untitled Blog"}
        </h1>

        {/* Author + Date */}
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

        {/* Sub content */}
        {blog.sub_content && (
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            {blog.sub_content}
          </p>
        )}

        {/* Full content — HTML ho sakta hai API se */}
        {blog.content && (
          <div
            className="prose prose-lg max-w-none mt-6 text-gray-800"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        )}
      </div>

      {/* White Card — center mein */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="bg-white shadow-md rounded-2xl border border-gray-100 p-8 w-full max-w-2xl text-center">
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

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-14 mb-16">
          <h2 className="font-semibold text-2xl mb-6">You Might Also Like</h2>
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

export default BlogDetailPage;
