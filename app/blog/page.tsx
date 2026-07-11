"use client";
import React, { useEffect, useState } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      const res = await fetch("https://platform.phonico.com/api/landing/blog", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      const data = await res.json();
      console.log("Data coming..", data);

      return data;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return null;
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      if (data) setBlogs(data.data || data);
    };
    getBlogs();
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => {
          const categoryName = blog.blog_category?.name || blog.name || "";
          return categoryName.toLowerCase() === selectedCategory.toLowerCase();
        });

  const categories = [
    "All",
    "Trouble shooting",
    "Android",
    "iPhone",
    "How To",
    "Travel Tips",
    "Info",
  ];

  const handleBlogClick = (categorySlug: string, blogSlug: string) => {
    const category = categorySlug || "general";
    router.push(`/blog/${category}/${blogSlug}`);
  };

  return (
    <>
      <Header />

      {/* Banner Section - Made width fluid and height auto on mobile */}
      <div className="w-full max-w-[1270px] min-h-[300px] md:h-[400px] flex flex-col justify-center items-center mx-auto bg-[#fff4eeb1] px-4 py-8 text-center">
        <div className="w-25 p-2 rounded-2xl text-center bg-red-100">
          <h1>Our Blogs</h1>
        </div>
        <h1 className="font-semibold mt-3 text-3xl sm:text-4xl md:text-5xl leading-tight">
          Learn with <span className="text-red-400">Phonico</span>
        </h1>
        <p className="text-lg sm:text-xl mt-2 max-w-xl">
          Stay informed and sweeten your eSIM experience.
        </p>
      </div>

      {/* Categories Buttons - Added horizontal margins so it doesn't touch screen edges on mobile */}
      <div className="flex flex-row flex-wrap justify-center gap-2 sm:gap-4 font-semibold p-3 sm:p-4 mx-4 sm:mx-auto mt-5 border-black rounded-2xl border max-w-[800px]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xl transition duration-200 ${
              selectedCategory.toLowerCase() === cat.toLowerCase()
                ? "bg-[#ee5e7f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blogs Grid - Adjusted padding for mobile screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-2 mx-auto max-w-[1270px] mt-6">
        {filteredBlogs &&
          filteredBlogs.map((blog: any, index: number) => {
            const categorySlug =
              blog.blog_category?.slug ||
              blog.name?.toLowerCase().replace(/\s+/g, "-") ||
              "general";
            const blogSlug = blog.slug;

            return (
              <div
                key={blog.id || index}
                onClick={() => handleBlogClick(categorySlug, blogSlug)}
                className="w-full flex flex-col justify-between rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition duration-300 cursor-pointer"
              >
                <div className="p-2">
                  <img
                    src={blog.image || "https://via.placeholder.com/390x240"}
                    alt={blog.name || "Blog Image"}
                    className="w-full h-48 sm:h-56 md:h-60 rounded object-cover"
                  />
                  <div className="p-4 sm:p-5 pb-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium text-[#ee5e7f] bg-red-50 rounded-full">
                      {blog.blog_category?.name || "Travel Tips"}
                    </span>
                    <div className="flex flex-row justify-between items-start gap-2 mt-3">
                      <h2 className="text-lg sm:text-xl font-bold text-gray-900 line-clamp-2 leading-tight">
                        {blog.name || "Untitled Blog"}
                      </h2>
                      <button className="text-gray-500 hover:text-[#ee5e7f] p-1 transition flex-shrink-0">
                        <ArrowUpRight size={20} />
                      </button>
                    </div>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
                      {blog.sub_content || "No description available."}
                    </p>
                  </div>
                </div>
                <div className="p-4 sm:p-5 pt-2 flex flex-row items-center justify-between border-t border-gray-50 mt-auto">
                  <span className="text-sm font-medium text-gray-700">
                    {blog.author_name || "Anonymous"}
                  </span>
                  <p className="text-xs text-gray-400">9 months ago</p>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default Page;
