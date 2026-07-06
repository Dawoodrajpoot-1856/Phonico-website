"use client";
import React, { useState } from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";
// Define the type for a single gallery item
export interface GalleryItem {
  src: string;
  title?: string; // optional because one item doesn't have title
  content: string;
  id: number;
}

// Define the type for the gallery object
export type GalleryType = {
  [category: string]: GalleryItem[];
};
const page = () => {
  const Gallery: GalleryType = {
    "Trouble Shooting": [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fhow-do-you-transfer-esim-from-one-iphone-to-another_image_1749031168.webp&w=1920&q=75",
        title: "eSim",
        content: "Transfer your eSIm to a new IPhone",
        id: 1,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fwhat-is-an-esim-and-how-does-esim-work_image_1749550136.webp&w=1920&q=75",
        title: "eSim",
        content: "Transfer your eSIm to a new IPhone",
        id: 2,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fhow-to-delete-esim-from-iphone-step-by-step-guide_image_1755670419.webp&w=1920&q=75",
        title: "eSim",
        content: "Transfer your eSIm to a new IPhone",
        id: 3,
      },
    ],
    Android: [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fhow-to-activate-esim-on-android-the-ultimate-phonico-guide_image_1748515660.webp&w=1920&q=75",
        title: "eSim",
        content: "Android eSIM Guide",
        id: 4,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fesim-security-assessing-the-risks-and-benefits_image_1748516458.webp&w=1920&q=75",
        title: "eSim",
        content: "Security Risks",
        id: 5,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fwhat-is-sm-dp-address-how-does-it-work-with-esim_image_1749633179.webp&w=1920&q=75",
        title: "eSim",
        content: "SM-DP Address Info",
        id: 6,
      },
    ],
    IPhone: [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fare-esims-subject-to-sim-swap-attacks-a-security-guide_image_1759921957.webp&w=1920&q=75",
        title: "eSim",
        content: "SIM Swap Security",
        id: 7,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fhow-to-receive-an-sms-on-esim_image_1753946047.jpeg&w=1920&q=75",
        title: "eSim",
        content: "Receive SMS on eSIM",
        id: 8,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fhow-to-make-a-phone-call-with-a-data-only-esim_image_1754047955.webp&w=1920&q=75",
        title: "eSim",
        content: "Data Only Calls",
        id: 9,
      },
    ],
    "How to": [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fhow-to-check-if-the-iphone-is-carrier-locked_image_1754308394.webp&w=1920&q=75",
        title: "eSim",
        content: "Check Carrier Lock",
        id: 10,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fwhat-is-iccid-number-the-secret-code-behind-your-sim_image_1754467016.webp&w=1920&q=75",
        title: "eSim",
        content: "Activate eSIM",
        id: 11,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fwhat-is-the-eid-number-and-how-can-you-find_image_1754395733.webp&w=1920&q=75",
        content: "Transfer eSIM",
        id: 12,
      },
    ],
    "Travel Tips": [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fdoes-bluetooth-work-in-airplane-mode-a-complete-guide_image_1754898319.webp&w=1920&q=75",
        title: "Travel",
        content: "Travel Tip 1",
        id: 13,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fcan-esim-be-used-during-long-haul-flights-and-layovers_image_1754905237.webp&w=1920&q=75",
        title: "Travel",
        content: "Travel Tip 2",
        id: 14,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fwhat-is-an-imsi-number-role-in-esim-iot-and-connectivity_image_1754645413.webp&w=1920&q=75",
        title: "Travel",
        content: "Travel Tip 3",
        id: 15,
      },
    ],
    Info: [
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fbest-esim-for-fifa-world-cup-2026-phonico-esim_image_1754380843.webp&w=1920&q=75",
        title: "Info",
        content: "Info 1",
        id: 16,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fstorage%2Fimages%2Fblogs%2Fhow-to-switch-between-esims-on-an-iphone-and-android_image_1754389301.webp&w=1920&q=75",
        title: "Info",
        content: "Info 2",
        id: 17,
      },
      {
        src: "https://phonico.com/_next/image/?url=https%3A%2F%2Fplatform.phonico.com%2Fstorage%2Fimages%2Fblogs%2Fis-iphone-15-esim-only-everything-you-need-to-know_image_1754484318.webp&w=1920&q=75",
        title: "Info",
        content: "Info 3",
        id: 18,
      },
    ],
  };

  const categories = Object.keys(Gallery);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <div className="bg-pink-100 min-h-screen">
        <Header />

        <div className="text-center mt-10 px-4 sm:px-6 lg:px-20">
          <h1 className="font-bold text-pink-400 text-3xl sm:text-4xl lg:text-5xl">
            Our Blogs
          </h1>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-5xl font-semibold">
            Learn with <span className="text-pink-400">Phonico</span>
          </h2>
          <p className="font-semibold text-md sm:text-lg lg:text-xl mt-3">
            Stay informed and sweeten your eSIM experience with our expert
            insights and practical tips.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              className="p-3 border border-gray-200 bg-white w-full sm:w-72 lg:w-96 rounded"
              placeholder="Search blogs"
              type="text"
            />
            <button className="font-bold rounded p-3 w-full sm:w-32 bg-[#ee5e7f] hover:bg-[#ec3c65] text-white">
              Search
            </button>
          </div>
        </div>

        <div className="mt-16 px-4 sm:px-6 lg:px-20">
          <h3 className="font-bold text-xl sm:text-2xl mb-4 text-center sm:text-left">
            Categories to Explore
          </h3>
          <div className="flex flex-wrap justify-center sm:justify-center gap-3 bg-white p-4 rounded-2xl">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`font-semibold px-3 py-1 rounded ${
                  selectedCategory === cat
                    ? "bg-pink-400 text-white"
                    : "hover:text-pink-400"
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 mt-10 px-4 sm:px-6 lg:px-20">
          {Gallery[selectedCategory].map((img) => (
            <div key={img.id} className="bg-white rounded-xl shadow-lg p-3">
              <img
                src={img.src}
                alt={img.title}
                className="rounded-xl w-full h-48 object-cover"
              />
              <h2 className="font-bold mt-2">{img.title}</h2>
              <p className="text-gray-600">{img.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
