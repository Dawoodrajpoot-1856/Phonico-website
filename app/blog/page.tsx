"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
import { ArrowUpRight } from "lucide-react";

const categories = [
  "All",
  "Trouble shooting",
  "Android",
  "iPhone",
  "How To",
  "Travel Tips",
  "Info",
];

const Page = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const router = useRouter();

  const fetchBlogs = async () => {
    try {
      console.log("Fetching blogs...");

      const res = await fetch("https://platform.phonico.com/api/landing/blog", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      const data = await res.json();

      console.log(data);

      return data;
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
      return null;
    }
  };

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      if (data) {
        setBlogs(data.data || data);
      }
    };

    getBlogs();
  }, []);

  // 👇 ab sirf slug se navigate hoga — route "blog/[slug]/page.tsx" ke sath match karega
  const handleBlogClick = (slug: string) => {
    if (slug) {
      router.push(`/blog/${slug}`);
    }
  };

  const getCategoryName = (blog: any) =>
    blog?.blog_category?.name || "Travel Tips";

  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter(
          (blog: any) =>
            getCategoryName(blog).toLowerCase() ===
            activeCategory.toLowerCase(),
        );

  return (
    <>
      <Header />
      <div className="w-full max-w-[1270px] h-auto min-h-[400px] flex flex-col justify-center items-center mx-auto bg-[#fff4eeb1] px-4 py-8 text-center">
        <div className="w-25 p-2 rounded-2xl text-center bg-red-100">
          <h1>Our Blogs</h1>
        </div>

        <h1 className="font-semibold mt-3 text-3xl md:text-5xl">
          Learn with <span className="text-red-400">Phonico</span>
        </h1>

        <p className="text-lg md:text-xl mt-2 max-w-xl">
          Stay informed and sweeten your eSIM experience with our expert
          insights and practical tips.
        </p>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          <input
            placeholder="Search Blogs"
            className="p-3 bg-white border w-full max-w-[320px] rounded"
            type="text"
          />
          <button className="p-3 bg-[#ee5e7f] w-full max-w-[100px] rounded text-white font-semibold">
            Search
          </button>
        </div>
      </div>

      <h1 className=" text-2xl font-bold mt-10 text-center">
        Categories to Explore
      </h1>
      <div className="flex flex-row flex-wrap gap-4 font-semibold p-4 mx-auto mt-5 border-black rounded-2xl border w-fit max-w-[95%] justify-center">
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

      <h1 className="font-semibold text-2xl ml-30 mt-14">
        {activeCategory === "All" ? "All Blogs" : activeCategory}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 mx-auto max-w-[1270px] mt-6">
        {filteredBlogs && filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog: any, index: number) => (
            <div
              key={blog.id || index}
              className="w-full flex flex-col justify-between rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition duration-300"
            >
              <div className="p-2">
                <img
                  src={blog.image || "https://via.placeholder.com/390x240"}
                  alt={blog.name || "Blog Image"}
                  className="w-90 h-65 rounded ml-3 cursor-pointer"
                  onClick={() => handleBlogClick(blog.slug)}
                />

                <div className="p-5 pb-2">
                  <span className="inline-block px-3 py-1 text-sm font-medium text-[#ee5e7f] bg-red-50 rounded-full">
                    {getCategoryName(blog)}
                  </span>

                  <div className="flex flex-row justify-between items-start gap-2 mt-3">
                    <h2
                      onClick={() => handleBlogClick(blog.slug)}
                      className="text-xl font-bold text-gray-900 line-clamp-2 leading-tight cursor-pointer hover:text-[#ee5e7f] transition-colors"
                    >
                      {blog.name || "Untitled Blog"}
                    </h2>
                    <button
                      onClick={() => handleBlogClick(blog.slug)}
                      className="text-gray-500 hover:text-[#ee5e7f] p-1 transition flex-shrink-0"
                    >
                      <ArrowUpRight size={20} />
                    </button>
                  </div>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed line-clamp-3">
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
                <p className="text-xs text-gray-400">9 months ago</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 py-10">
            No blogs found in this category.
          </p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Page;
