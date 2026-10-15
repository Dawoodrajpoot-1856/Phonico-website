import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Blog = {
  id?: string | number;
  slug: string;
  name?: string;
  image?: string;
  sub_content?: string;
  content?: string;
  author_image?: string;
  author_name?: string;
  created_at?: string;
  blog_category?: {
    name?: string;
    slug?: string;
  };
};

interface BlogsServerProps {
  initialBlogs: Blog[];
  searchParams?: Promise<{
    category?: string;
    search?: string;
  }>;
}

export default async function BlogsServer({
  initialBlogs,
  searchParams,
}: BlogsServerProps) {
  const resolvedParams = searchParams ? await searchParams : {};
  const activeCategory = resolvedParams.category || "All";
  const searchQuery = resolvedParams.search || "";

  const categoriesMap = new Map();
  initialBlogs.forEach((blog) => {
    const catName = blog?.blog_category?.name;
    const catSlug = blog?.blog_category?.slug;
    if (catName && catSlug) {
      categoriesMap.set(catSlug, catName);
    }
  });

  const dynamicCategories = Array.from(categoriesMap.entries()).map(
    ([slug, name]) => ({
      name,
      slug,
    }),
  );

  const getCategoryName = (blog: Blog) =>
    blog?.blog_category?.name || "Travel Tips";

  const getCategorySlug = (blog: Blog) => blog?.blog_category?.slug || "info";

  const filteredBlogs = initialBlogs.filter((blog: Blog) => {
    const query = searchQuery.toLowerCase().trim();

    const matchesSearch =
      !query ||
      blog.name?.toLowerCase().includes(query) ||
      blog.sub_content?.toLowerCase().includes(query) ||
      blog.content?.toLowerCase().includes(query);

    const matchesCategory =
      activeCategory === "All" ||
      getCategorySlug(blog).toLowerCase() === activeCategory.toLowerCase() ||
      getCategoryName(blog).toLowerCase() === activeCategory.toLowerCase();

    if (query) {
      return matchesSearch;
    }

    return matchesCategory;
  });

  return (
    <div className="max-w-[1270px] mx-auto px-4 py-8">
      <div className="flex flex-col justify-center items-center gap-3 text-center bg-[#fff4eeb1] py-12 px-4 rounded-3xl">
        <div>
          <span className="p-2 px-4 rounded-full text-sm font-medium text-[#ee5e7f] bg-red-100">
            Our Blogs
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold">
          Learn with <span className="text-[#ee5e7f]">Phonico</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-600 max-w-[600px]">
          Stay informed and sweeten your eSIM experience with our expert
          insights and practical tips.
        </p>

        <form
          action="/blog"
          method="GET"
          className="flex justify-center items-center relative mt-3 w-full max-w-[450px]"
        >
          {activeCategory !== "All" && (
            <input type="hidden" name="category" value={activeCategory} />
          )}
          <input
            type="text"
            name="search"
            defaultValue={searchQuery}
            placeholder="Search blogs"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg outline-none pr-28"
          />
          <button
            type="submit"
            className="absolute right-1 px-5 py-2.5 bg-[#ee5e7f] text-white font-medium rounded-md hover:bg-[#e04d6f] transition"
          >
            Search
          </button>
        </form>
      </div>

      <div className="flex flex-col items-center gap-3 my-10">
        <h2 className="text-2xl font-semibold">Categories to Explore</h2>
        <div className="flex justify-center items-center flex-wrap p-4 gap-3">
          <Link
            href={`/blog?category=All${searchQuery ? `&search=${searchQuery}` : ""}`}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeCategory === "All"
                ? "bg-[#ee5e7f] text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            All
          </Link>

          {dynamicCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/blog?category=${cat.slug}${
                searchQuery ? `&search=${searchQuery}` : ""
              }`}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeCategory.toLowerCase() === cat.slug.toLowerCase()
                  ? "bg-[#ee5e7f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6">
          {activeCategory === "All" ? "All Blogs" : activeCategory}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs && filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog: Blog, index: number) => {
              const catSlug = getCategorySlug(blog);
              return (
                <div key={blog.id || index} className="h-full">
                  <Link
                    href={`/blog/${catSlug}/${blog.slug}`}
                    className="block h-full group"
                  >
                    <div className="border border-gray-100 p-2  bg-white rounded-2xl  flex flex-col justify-between gap-5 h-full shadow-sm ">
                      <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gray-50">
                        <Image
                          src={
                            blog.image ||
                            "https://platform.phonico.com/storage/storage/images/blogs/how-do-you-transfer-esim-from-one-iphone-to-another_image_1749031168.webp"
                          }
                          alt={blog.name || "Blog Image"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover w-full h-full rounded-xl group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      <div className="flex flex-col gap-3 flex-grow">
                        <p className="text-sm font-semibold text-[#ee5e7f]">
                          {getCategoryName(blog)}
                        </p>

                        <div className="text-xl font-bold text-gray-900 flex justify-between items-start gap-2 leading-tight group-hover:text-[#ee5e7f] transition-colors">
                          <span className="line-clamp-2">
                            {blog.name || "Untitled Blog"}
                          </span>
                          <span className="shrink-0">
                            <ArrowUpRight
                              size={22}
                              className="text-gray-600 group-hover:text-[#ee5e7f]"
                            />
                          </span>
                        </div>

                        <p className="text-gray-500 text-sm line-clamp-3">
                          {blog.sub_content || "No description available."}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                            <Image
                              src={
                                blog.author_image ||
                                "https://via.placeholder.com/40"
                              }
                              alt={blog.author_name || "Author"}
                              fill
                              sizes="40px"
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <p className="m-0 text-sm font-semibold text-gray-800">
                              {blog.author_name || "Joe Fedewa"}
                            </p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">1 year ago</p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })
          ) : (
            <p className="col-span-full text-center text-gray-500 py-10">
              No blogs found matching your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
