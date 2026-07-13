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
    <div className="bg-[#faf5f0] antialiased">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-16 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight">
          Frequently Asked <span className="text-pink-600">Questions</span>
        </h1>
        <p className="mt-3 md:mt-4 text-base sm:text-lg text-gray-600">
          Curious About Our Services?
        </p>
      </div>

      {/* Accordions Main Grid Section */}
      <div className="pb-16">
        {/* Changed grid activation to md:grid-cols-2 for perfect side-by-side tablet consistency */}
        <div className="max-w-[1330px] mx-auto grid gap-4 md:gap-5 px-4 sm:px-6 lg:px-8 grid-cols-1 md:grid-cols-2">
          {data.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className={`w-full overflow-hidden bg-white border rounded-xl transition-all duration-300 h-fit
                  ${isOpen ? "border-pink-300 ring-2 ring-pink-100 md:scale-[1.01]" : "border-gray-200 hover:border-gray-300"}
                `}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-5 md:p-6 font-semibold text-left bg-white text-base sm:text-lg md:text-xl group"
                >
                  <div className="flex items-center pr-2 min-w-0 w-full">
                    {/* Number block kept intact but fixed shrink on tablet */}
                    <div
                      className={`flex items-center mr-3 md:mr-4 font-bold text-base sm:text-lg md:text-xl transition-colors duration-300 shrink-0 ${
                        isOpen ? "text-pink-600" : "text-gray-400"
                      }`}
                    >
                      <span>{index + 1}</span>
                      <span className="mx-1.5 md:mx-2 font-light opacity-60">
                        |
                      </span>
                    </div>

                    <span className="text-gray-900 font-semibold text-sm sm:text-base md:text-lg transition-colors duration-300 break-words line-clamp-2 md:line-clamp-none">
                      {item.title}
                    </span>
                  </div>

                  <svg
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ml-2 ${
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
                    <div className="p-5 md:p-6 text-gray-700 border-t border-gray-100 text-xs sm:text-sm md:text-base leading-relaxed bg-white">
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
