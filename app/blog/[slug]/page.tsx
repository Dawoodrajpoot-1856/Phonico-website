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

      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6">
        <img
          src={blog.image || "https://via.placeholder.com/1270x700"}
          alt={blog.name || "Blog Image"}
          className="w-full h-[90vh] object-cover rounded-b-3xl"
        />
      </div>

      {/* Content */}
      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-8">
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
        {/* Title */}
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
          {blog.name || "Untitled Blog"}
        </h1>
        {/* Sub content */}
        {blog.sub_content && (
          <p className="mt-6 text-lg text-gray-800 leading-relaxed">
            As an iPhone user, you know that every year Apple introduces a newer
            model. Since you are into iPhones and always try to grab the latest,
            you need a shift. As an eSIM user and traveller, you may wonder: How
            do you transfer an eSIM from one iPhone to another? Most users don’t
            know the accurate steps to activate the eSIM on a new iPhone. People
            face activation and compatibility issues while shifting to eSIM. You
            can switch your embedded SIM from one Apple device to another
            without hassle. This article is a guide for seamless switching.
            Here, you will learn the exact steps to transfer your eSIM
            effortlessly.{" "}
          </p>
        )}
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
          What should you consider before switching eSIM to another iPhone?{" "}
        </h1>
        <p className="text-base md:text-lg text-gray-800 leading-7 mt-4">
          Here are the things you must consider before switching eSIM from one
          device to another.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li className="text-gray-700 ml-3">
            You need a stable internet connection for hassle-free eSIM transfer.
            It helps to set up eSIM on a new device.
          </li>
          <li className="text-gray-700 ml-3">
            You need a stable internet connection for hassle-free eSIM transfer.
            It helps to set up eSIM on a new device.
          </li>
          <li className="text-gray-700 ml-3">
            You need a stable internet connection for hassle-free eSIM transfer.
            It helps to set up eSIM on a new device.
          </li>
        </ul>
        <h1 className="font-bold text-3xl sm:text-4xl text-gray-900 mt-4 leading-tight">
          How do you transfer eSIM from one iPhone to another​?
        </h1>
        <p className="text-base md:text-lg text-gray-800 leading-7 mt-4">
          Switching embedded SIM to another iPhone is straightforward. However,
          you should confirm that your new device is compatible with eSIM
          technology. You can follow the eSIM switching methods mentioned in the
          article to access a hassle-free connection. Sometimes, users face
          issues while transferring an eSIM, which can interfere with eSIM's
          function on the new device. I have mentioned troubleshooting tips for
          hassle-free digital SIM transfer.
        </p>
        {blog.content && <div className=" text-2xl mt-6 text-gray-800" />}
        Can I transfer an eSIM to another iPhone?
      </div>

      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-12 mb-12">
        {/* What to do section */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            What should you do if transferring an eSIM doesn’t work?
          </h1>
          <p className="text-lg text-gray-800 mb-4">
            If your eSIM is not transferring to the new iPhone, there may be the
            following reasons for this:
          </p>
          <ul className="list-disc pl-5 space-y-3 ml-3 text-lg text-gray-800">
            <li>
              Your new device may not be compatible with eSIM technology. It
              restricts the eSIM services while traveling with your new device.
            </li>
            <li>
              The incorrect settings in new or old iPhones cause issues with
              eSIM working.
            </li>
            <li>
              An unstable internet connection will cause issues while
              transferring the eSIM from one iPhone to another.
            </li>
            <li>
              If you don't have the latest iOS version, it can restrict the
              virtual SIM transfer.
            </li>
            <li>
              If your carrier restricts eSIM transfer to another device, your
              eSIM will not work.
            </li>
          </ul>
        </div>

        {/* Troubleshooting section */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Troubleshooting Tips to Shift your eSIM
          </h1>
          <p className="text-lg text-gray-800 mb-4">
            Here are some troubleshooting tips that will help you to fix your
            issues:
          </p>
          <ul className="list-disc pl-5 space-y-3 ml-3 text-lg text-gray-800">
            <li>
              <strong>iPhone:</strong> Go to settings and check your device
              software settings. If it is outdated, update it to the latest iOS
              version.
            </li>
            <li>
              Check the carrier restrictions for transferring eSIM to another
              device. If it does not support you, contact your carrier for
              further details.
            </li>
            <li>
              If your eSIM is not transferring to another device, there are
              compatibility issues. Confirm your new iPhone eSIM support from
              the device's settings app.
            </li>
          </ul>
        </div>

        {/* Conclusion section */}
        <div className="mb-12">
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Conclusion
          </h1>
          <p className="text-lg text-gray-800 mb-4 leading-relaxed">
            Switching embedded SIM to another iPhone is straightforward.
            However, you should confirm that your new device is compatible with
            eSIM technology. You can follow the eSIM switching methods mentioned
            in the article to access a hassle-free connection.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed">
            Sometimes, users face issues while transferring an eSIM, which can
            interfere with eSIM's function on the new device. I have mentioned
            troubleshooting tips for hassle-free digital SIM transfer.
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1270px] mx-auto px-4 sm:px-6 mt-12 mb-12">
        {/* FAQ Section Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-10">FAQs</h1>

        {/* FAQ Item 1 */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Can I transfer an eSIM to another iPhone?
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            You can transfer an eSIM from one iPhone to another. Open the
            settings of your new iPhone and move to Cellular. Then, find the Add
            Cellular Plan and choose the plan to transfer to another iPhone.
          </p>
        </div>

        {/* FAQ Item 2 */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            How long does transferring an eSIM from one iPhone to another take?
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Transferring embedded SIMs from one iPhone to another is quick.
            However, users face difficulties during the process. For easy
            shifting, ensure a stable internet connection.
          </p>
        </div>

        {/* FAQ Item 3 */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-3">
            Should I erase my eSIM from an old iPhone?
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            After eSIM activation, erase the virtual SIM from the old iPhone. It
            keeps your personal information secure.
          </p>
        </div>
      </div>
      {/* White Card — center mein */}
      <div className="w-full flex justify-center mt-10 px-4">
        <div className="bg-white  rounded-2xl border border-gray-100 bg-gray-200 shadow-sm p-8 w-full max-w-2xl text-center">
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

export default BlogDetailPage;
