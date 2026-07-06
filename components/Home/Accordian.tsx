"use client";

import { useState } from "react";

export default function AccordionPage() {
  const [open, setOpen] = useState<number | null>(null);

  const data = [
    {
      title: "What is an eSIM?",
      content:
        "An eSIM is a digital SIM that lets you activate a mobile plan without using a physical SIM card.",
    },
    {
      title: "Is coverage available nationwide?",
      content:
        "Yes, you can enjoy uninterrupted connectivity across the USA with wide network coverage.",
    },
    {
      title: "How fast is the internet?",
      content:
        "You get high-speed data suitable for browsing, streaming and video calls.",
    },
    {
      title: "Can I use it on any device?",
      content:
        "Most modern smartphones support eSIM. Please check your device compatibility.",
    },
    {
      title: "How do I activate my plan?",
      content:
        "Simply scan the QR code or follow the activation instructions sent to your email.",
    },
  ];

  return (
    <div className=" bg-[#faf5f0] antialiased">
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-semibold text-gray-900 tracking-tight sm:text-5xl">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Curious About Our Services?
        </p>
      </div>

      {/* Accordions Main Grid Section - Bottom padding ko kam kar diya hai */}
      <div className="pb-10">
        <div className="max-w-[1330px] mx-auto grid gap-4 px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2">
          {data.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`w-full overflow-hidden bg-white border transition-all duration-300
                  ${isOpen ? "border-pink-300 ring-2 ring-pink-100 scale-[1.01]" : "border-gray-200 hover:border-gray-300"}
                `}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 font-semibold text-left bg-white text-lg sm:text-xl group"
                >
                  <div className="flex items-center pr-4">
                    <div
                      className={`flex items-center mr-4 font-bold text-xl transition-colors duration-300 ${
                        isOpen ? "text-pink-600" : "text-gray-400"
                      }`}
                    >
                      <span>{index + 1}</span>
                      <span className="mx-2 font-light opacity-60">|</span>
                    </div>

                    <span className="text-gray-900 font-semibold transition-colors duration-300">
                      {item.title}
                    </span>
                  </div>

                  <svg
                    className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 text-pink-600"
                        : "rotate-0 text-gray-600"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Smooth Height Expansion Wrapper */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-6 text-gray-700 border-t border-gray-100 text-base leading-relaxed bg-white">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
