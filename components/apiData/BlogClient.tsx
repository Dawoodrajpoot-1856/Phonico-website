"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "Trouble shooting",
  "Android",
  "iPhone",
  "How To",
  "Travel Tips",
  "Info",
];

export default function BlogsClient({ initialBlogs }: { initialBlogs: any[] }) {
  const [blogs] = useState<any[]>(initialBlogs);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleBlogClick = (slug: string) => {
    if (slug) {
      router.push(`/blog/${slug}`);
    }
  };

  const handlePrefetch = (slug: string) => {
    if (slug) {
      router.prefetch(`/blog/${slug}`);
    }
  };

  const getCategoryName = (blog: any) =>
    blog?.blog_category?.name || "Travel Tips";

  const filteredBlogs = blogs.filter((blog: any) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !query ||
      blog.name?.toLowerCase().includes(query) ||
      blog.sub_content?.toLowerCase().includes(query) ||
      blog.content?.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "All" ||
      getCategoryName(blog).toLowerCase() === activeCategory.toLowerCase();

    if (query) {
      return matchesSearch;
    }

    return matchesCategory;
  });

  return (
    <>
      <div className="w-full max-w-[1270px] h-auto min-h-[480px] flex flex-col justify-center items-center mx-auto bg-[#fff4eeb1] px-4 py-10 text-center">
        <div className="w-auto px-4 p-2 rounded-2xl text-center bg-red-100">
          <h1 className="font-medium text-sm text-red-600">Our Blogs</h1>
        </div>

        <h1 className="font-semibold mt-3 text-3xl md:text-5xl px-2">
          Learn with <span className="text-red-400">Phonico</span>
        </h1>

        <p className="text-lg md:text-xl mt-2 max-w-[600px] px-2">
          Stay informed and sweeten your eSIM experience with our expert
          insights and practical tips.
        </p>

        <div className="mt-5 flex w-full justify-center px-2">
          <input
            type="text"
            placeholder="Search Blogs"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-3 bg-white border border-gray-400 w-full max-w-[320px] rounded-l outline-none"
          />
          <button
            onClick={() => {}}
            className="p-3 bg-[#ee5e7f] w-[100px] rounded-r text-white font-semibold cursor-pointer"
          >
            Search
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-10 text-center">
        Categories to Explore
      </h1>
      <div className="flex flex-row flex-wrap gap-2 font-semibold p-4 mx-auto mt-5 border-black rounded-2xl border w-fit max-w-[95%] justify-center">
        <button
          onClick={() => setActiveCategory("All")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeCategory === "All"
              ? "bg-[#ee5e7f] text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === cat
                ? "bg-[#ee5e7f] text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="max-w-[1270px] mx-auto px-4 mt-14">
        <h1 className="font-semibold text-2xl">
          {activeCategory === "All" ? "All Blogs" : activeCategory}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 mx-auto max-w-[1270px] mt-6">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog: any, index: number) => (
            <div
              key={blog.id || index}
              // Yahan onMouseEnter par prefetch function lagaya hai
              onMouseEnter={() => handlePrefetch(blog.slug)}
              className="w-full flex flex-col justify-between rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition duration-300 cursor-pointer"
            >
              <div className="p-2">
                <img
                  src={blog.image || "https://via.placeholder.com/390x240"}
                  alt={blog.name || "Blog Image"}
                  className="w-full h-56 rounded object-cover"
                  onClick={() => handleBlogClick(blog.slug)}
                />

                <div className="p-5 pb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-[#ee5e7f] bg-red-50 rounded-full">
                    {getCategoryName(blog)}
                  </span>

                  <div className="flex flex-row justify-between items-start gap-2 mt-3">
                    <h2
                      onClick={() => handleBlogClick(blog.slug)}
                      className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight transition-colors hover:text-[#ee5e7f]"
                    >
                      {blog.name || "Untitled Blog"}
                    </h2>
                    <button
                      onClick={() => handleBlogClick(blog.slug)}
                      className="text-gray-600 hover:text-red-400 p-1 transition flex-shrink-0"
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm line-clamp-3">
                    {blog.sub_content || "No description available."}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-2 flex flex-row items-center justify-between border-t border-gray-50 mt-auto">
                <div className="flex flex-row items-center gap-3">
                  <img
                    className="w-9 h-9 rounded-full object-cover"
                    src={blog.author_image || "https://via.placeholder.com/40"}
                    alt={blog.author_name || "Author"}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {blog.author_name || "Anonymous"}
                  </span>
                </div>
                <p className="text-xs text-gray-500">9 months ago</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No blogs found matching your search.
          </p>
        )}
      </div>
    </>
  );
}
