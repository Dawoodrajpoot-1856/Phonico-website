"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  // Kaun sa item open hai uski state track karne ke liye (value directly save hogi)
  const [openValue, setOpenValue] = useState<string | null>(null);

  const faqData = [
    {
      id: "shipping",
      num: "01",
      title: "What is an eSIM?",
      content:
        "An eSIM is a digital SIM card that lets you activate a cellular plan without using a physical SIM.",
    },
    {
      id: "returns",
      num: "02",
      title: "Is Phonico eSIM Compatible with my Phone?",
      content:
        "Most newer devices, including iPhones and Android models from 2018 onward, support eSIM. Check compatibility in your phone settings or check the Phonico eSIM-compatible devices list.",
    },
    {
      id: "support",
      num: "03",
      title: "How do I Install my eSIM?",
      content:
        "After purchasing a plan, you’ll receive a QR code via email. Scan it, and your eSIM will be installed automatically. Download the Phonico App to take control of your personal dashboard.",
    },
    {
      id: "shipping2",
      num: "04",
      title: "Can I use Phonico Outside USA?",
      content:
        "Phonico eSIM currently provides nationwide coverage across the United States only. All states are covered with the best network carrier support locally.",
    },
    {
      id: "returns2",
      num: "05",
      title: "What Payment Methods does Phonico eSIM Accept?",
      content:
        "We accept major credit cards, Stripe, and PayPal for secure online payment methods.",
    },
  ];

  // Agar koi state active ho toh sirf wahi object filter hokar list hoga
  const visibleData = openValue
    ? faqData.filter((item) => item.id === openValue)
    : faqData;

  return (
    <div className="min-h-screen bg-[#faf5f0] pt-16 pb-20 antialiased">
      {/* Header with dynamic Back Button */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="mt-3 text-gray-600">
          Everything you need to know before getting started
        </p>

        {openValue && (
          <button
            onClick={() => setOpenValue(null)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pink-600 hover:text-pink-700 bg-white px-5 py-2.5 rounded-full shadow-sm border border-pink-100 transition-all hover:shadow-md"
          >
            ← View All Questions
          </button>
        )}
      </div>

      {/* Responsive Grid layout for Shadcn Accordions */}
      <div
        className={`max-w-4xl mx-auto grid gap-6 px-4 transition-all duration-300 ${
          openValue ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        {visibleData.map((item) => {
          const isOpen = openValue === item.id;

          return (
            <div
              key={item.id}
              className={`rounded-xl bg-white shadow-sm transition-all duration-300 ${
                isOpen
                  ? "border border-pink-300 ring-2 ring-pink-100 md:col-span-2 scale-[1.01]"
                  : "border border-gray-200"
              }`}
            >
              <Accordion
                type="single"
                collapsible
                value={openValue || ""}
                onValueChange={(val) => setOpenValue(val || null)}
                className="w-full px-4 py-2"
              >
                <AccordionItem value={item.id} className="border-b-0">
                  <AccordionTrigger className="font-semibold text-lg sm:text-xl text-left hover:no-underline py-4 [&[data-state=open]>svg]:text-pink-600">
                    <div className="flex items-center text-gray-900">
                      {/* Sirf Number active hone par Pink hoga, text custom dark rahega */}
                      <span
                        className={`mr-3 font-bold text-xl transition-colors duration-300 ${
                          isOpen ? "text-pink-600" : "text-gray-400"
                        }`}
                      >
                        {item.num}:
                      </span>
                      <span>{item.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-gray-700 pt-2 pb-4 bg-white border-t border-gray-100 mt-2">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
