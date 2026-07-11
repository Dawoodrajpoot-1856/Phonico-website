"use client";
import React, { use, useEffect, useState } from "react";
import Header from "../../../../components/Home/header";
import Footer from "../../../../components/Home/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

const BlogDetailsPage = ({ params }: PageProps) => {
  const { category, slug } = use(params);
  const router = useRouter();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [availableSlugs, setAvailableSlugs] = useState<string[]>([]);

  useEffect(() => {
    const getBlogFromList = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://platform.phonico.com/api/landing/blog",
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            cache: "no-store",
          },
        );
const data = await res.json();
        const blogList = data.data || data;

        if (Array.isArray(blogList)) {
          setAvailableSlugs(blogList.map((b: any) => b.slug));
        }

        const foundBlog = blogList.find(
          (b: any) => b.slug === slug || b.slug === decodeURIComponent(slug),
        );

        setBlog(foundBlog);
      } catch (error) {
        console.error("Error finding blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getBlogFromList();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ee5e7f]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-md border max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-red-500">
            ❌ Blog Data Match Nahi Hua!
          </h2>

          <div className="mt-4 p-4 bg-red-50 rounded-xl text-left text-sm space-y-2 border border-red-100">
            <p>
              <strong>URL se jo Slug mila:</strong>{" "}
              <span className="text-blue-600 font-mono">"{slug}"</span>
            </p>
            <p>
              <strong>Decoded Slug:</strong>{" "}
              <span className="text-purple-600 font-mono">
                "{decodeURIComponent(slug)}"
              </span>
            </p>
          </div>

          <div className="mt-6 text-left">
            <p className="font-semibold text-gray-700 mb-2">
              API ke paas yeh waale Slugs maujood hain:
            </p>
            <div className="bg-gray-50 p-3 rounded-xl max-h-40 overflow-y-auto border text-xs font-mono text-gray-600 space-y-1">
              {availableSlugs.length > 0 ? (
                availableSlugs.map((s, idx) => (
                  <p
                    key={idx}
                    className={
                      s === slug
                        ? "bg-yellow-200 font-bold text-black p-1 rounded"
                        : ""
                    }
                  >
                    • "{s}"
                  </p>
                ))
              ) : (
                <p className="text-gray-400 italic">
                  API se koi slugs nahi mile...
                </p>
              )}
            </div>
          </div>

          <button
            onClick={() => router.push("/blog")}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 bg-[#ee5e7f] text-white rounded-xl font-medium shadow-sm hover:bg-[#d64b6b] transition"
          >
            <ArrowLeft size={18} /> Back to All Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen  pb-10">
        <article className="max-w-[1270px]    mx-auto border border-gray-100 shadow-sm overflow-hidden ">
          <div className="overflow-hidden aspect-video bg-gray-100">
            <img
              src={blog.image || "https://via.placeholder.com/900x500"}
              alt={blog.name || "Cover Image"}
              className="w-full  h-full object-cover"
            />
          </div>
          <div className="flex flex-row justify-between p-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <img
                src={blog.author_image || "https://via.placeholder.com/40"}
                alt={blog.author_name || "Author"}
                className="w-10 h-10 rounded-full object-cover border border-gray-200"
              />
              <p className="text-sm font-semibold text-gray-800">
                {blog.author_name || "Anonymous"}
              </p>
            </div>
            <Calendar size={16} />
            <span>9 months ago</span>
          </div>
        </article>
      </main>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-4xl mx-auto font-semibold text-gray-900  leading-tight">
          {blog.name || "Untitled Blog"}
        </h1>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-600 leading-8">
          As an iPhone user, you know that every year Apple introduces a newer
          model. Since you are into iPhones and always try to grab the latest,
          you need a shift.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-8">
          As an eSIM user and traveller, you may wonder:{" "}
          <strong>
            How do you transfer an eSIM from one iPhone to another?
          </strong>
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-8">
          Most users don’t know the accurate steps to activate the eSIM on a new
          iPhone. People face activation and compatibility issues while shifting
          to eSIM.
        </p>

        <p className="mt-4 text-lg text-gray-600 leading-8">
          You can switch your embedded SIM from one Apple device to another
          without hassle. This article is a guide for seamless switching.
        </p>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-5">
          What should you consider before switching eSIM to another iPhone?
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 text-lg leading-8">
          <li>The other device should support eSIM.</li>
          <li>Use a stable internet connection.</li>
          <li>Check if your carrier supports eSIM transfer.</li>
          <li>Sign in with the same Apple ID on both iPhones.</li>
        </ul>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-5">
          How do you transfer eSIM from one iPhone to another?
        </h2>

        <p className="text-lg text-gray-600 leading-8">
          You can transfer your embedded SIM to another device with a few
          clicks.
        </p>

        <h3 className="text-2xl font-semibold mt-8">
          eSIM Transfer Through Scanning QR Code
        </h3>

        <ol className="list-decimal pl-6 mt-4 space-y-3 text-lg text-gray-700 leading-8">
          <li>Connect both iPhones to the internet.</li>
          <li>
            Open <strong>Settings → Cellular</strong> on the new iPhone.
          </li>
          <li>
            Tap <strong>Add eSIM</strong>.
          </li>
          <li>Choose QR Code or Nearby iPhone transfer.</li>
          <li>Follow the instructions on both devices.</li>
          <li>Enter the verification code if prompted.</li>
          <li>Contact your carrier if redirected.</li>
          <li>Once activated, the eSIM will be removed from the old iPhone.</li>
        </ol>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-5">
          What should you do if transferring an eSIM doesn’t work?
        </h2>

        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 leading-8">
          <li>Your new iPhone may not support eSIM.</li>
          <li>Incorrect settings can cause activation issues.</li>
          <li>A poor internet connection may interrupt the transfer.</li>
          <li>Your iPhone may need the latest iOS update.</li>
          <li>Your carrier may restrict eSIM transfers.</li>
        </ul>

        {/* Section */}
        <h2 className="text-3xl font-bold mt-12 mb-5">Troubleshooting Tips</h2>

        <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700 leading-8">
          <li>Update your iPhone to the latest iOS version.</li>
          <li>Check carrier support for eSIM transfer.</li>
          <li>Verify that your new iPhone supports eSIM.</li>
        </ul>

        {/* Conclusion */}
        <h2 className="text-3xl font-bold mt-12 mb-5">Conclusion</h2>

        <p className="text-lg text-gray-600 leading-8">
          Switching an eSIM to another iPhone is simple when both devices
          support eSIM and your carrier allows the transfer. Follow the steps
          above for a smooth setup and use the troubleshooting tips if you
          encounter issues.
        </p>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mt-14 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Can I transfer an eSIM to another iPhone?
            </h3>
            <p className="mt-2 text-gray-600 leading-7">
              Yes. Open Settings → Cellular → Add eSIM and follow the transfer
              process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              How long does the transfer take?
            </h3>
            <p className="mt-2 text-gray-600 leading-7">
              Usually only a few minutes if your internet connection is stable.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Should I erase my eSIM from the old iPhone?
            </h3>
            <p className="mt-2 text-gray-600 leading-7">
              Yes. After activation on the new iPhone, remove it from the old
              device to protect your personal information.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col h-[200px] p-4 w-2xl mx-auto mt-10 mb-5 rounded-xl bg-gray-100 shadow-sm justify-center items-center">
        <img
          className="h-20 w-20 rounded-full"
          src={blog.author_image}
          alt=""
        />
        <h1 className="font-semibold underline">{blog.author_name}</h1>
        <p>{blog.description}</p>
      </div>

      <Footer />
    </>
  );
};

export default BlogDetailsPage;
