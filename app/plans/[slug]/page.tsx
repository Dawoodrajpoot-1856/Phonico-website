"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/header";
import AccordionPage from "@/components/Home/Accordian";
import { addToCart } from "@/redux/planSlice";

export default function PlanDetailPage() {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (currentPlan) {
      dispatch(addToCart(currentPlan));
      alert("Plan added to cart!"); // Testing ke liye alert, aap toast bhi laga sakte hain
    }
  };
  const params = useParams();
  const slug = params?.slug;

  // 2. Redux Store se selectedPlan ka data nikalen
  const currentPlan = useAppSelector((state) => state.plan.selectedPlan);

  // Safeguard: Agar store khali hai ya user direct URL par aaya hai bina card click kiye
  if (!currentPlan) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl font-bold text-gray-800">
            No Plan Selected!
          </h1>
          <p className="text-gray-500 mt-2">
            Please go back to homepage and select a plan.
          </p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <div className="w-[1260px] mx-auto mt-10 mb-10 flex flex-row">
        <div className="w-full max-w-[520px] bg-[#f5fcff] rounded-l-xl hover:shadow-sm transition-all duration-300 border border-pink-100 p-6 flex flex-col justify-between min-h-[500px]">
          <div className="text-center mb-6">
            <h1 className="text-4xl font-semibold text-gray-900 mt-4 tracking-tight">
              {currentPlan.data_usable}GB
            </h1>
          </div>
          <div className="bg-[#5cbfea] w-[330px] flex flex-col items-center justify-center h-30 mx-auto rounded p-4 text-center border border-gray-100 mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              ${currentPlan.price}/mo
            </h2>
            <p className="mt-1 font-medium">{currentPlan.name}</p>
          </div>
          <div className="flex-grow ml-20">
            <div className="space-y-3.5 border-t border-gray-100 pt-2">
              {[
                "High-speed internet",
                "Unlimited talk & text",
                "No hotspot data included",
                "High-quality video streaming",
                "No hidden fees",
                "No contract (cancel anytime)",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-left text-gray-700"
                >
                  <img
                    src="https://phonico.com/images/checkIcon.svg"
                    className="w-6 h-6 flex-shrink-0"
                    alt="Check icon"
                  />
                  <p className="text-sm font-medium leading-tight text-gray-700">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
          l
        </div>

        <div className="bg-[#fef7f2] w-full max-w-[750px] p-6 flex flex-col gap-6 rounded-r-xl border border-orange-100 mx-auto">
          {/* eSIM Compatibility Button */}
          <button className="w-[400px] mx-auto p-3 rounded font-bold bg-white hover:text-white hover:bg-[#EE5E7F] text-[#EE5E7F] border-[#fbc4d0] border-2 transition-all text-sm tracking-wide shadow-sm">
            Check if your phone is eSIM compatible
          </button>
          {/* Whats Included Section */}
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-xl text-gray-900 tracking-tight">
              Whats included
            </h2>

            <div className="bg-white border border-gray-200 flex flex-row justify-between items-center p-4 rounded-xl shadow-xs">
              <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                Unlimited SMS & Minutes
              </h3>
              <span className="font-bold text-[#EE5E7F] px-3 py-1 rounded-full text-xl sm:text-sm">
                Included
              </span>
            </div>
          </div>
          {/* Pricing & Checkout Summary Box */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col gap-4 shadow-xs">
            <div className="flex flex-row justify-between items-center border-b border-gray-200 pb-3">
              <span className="text-sm font-medium text-gray-700">Monthly</span>
              <span className="font-bold text-gray-900 text-lg">
                ${currentPlan.price}/mo
              </span>
            </div>

            {/* Row 2: Subtotal */}
            <div className="flex flex-row font-semibold justify-between items-center border-gray-200 border-b">
              <span className="text-sm font-bold text-gray-800">Subtotal</span>$
              {currentPlan.price} for 1 month
            </div>

            <button
              onClick={handleAddToCart}
              className="w-[600px] mt-2 mx-auto bg-[#EE5E7F] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-12 rounded text-white font-bold text-sm tracking-wider shadow-md uppercase"
            >
              Add to cart
            </button>
          </div>

          <div className="flex flex-row gap-3 mx-auto">
            <div className="flex flex-row gap-2">
              <img src="https://phonico.com/images/clipboard.svg" alt="" />{" "}
              <h1 className="text-gray-500">No Contract Required</h1>
            </div>
            <div className="flex flex-row gap-2">
              <img src="https://phonico.com/images/clipboard.svg" alt="" />
              <h1 className="text-gray-500">Cancel Anytime</h1>
            </div>
          </div>
        </div>
      </div>
      <AccordionPage />

      {/* <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentPlan.customPlanName ||
              (currentPlan.data_usable
                ? `${currentPlan.data_usable}GB Plan`
                : currentPlan.title)}
          </h1>
          <p className="text-2xl font-semibold text-[#ec3c65] mb-6">
            {currentPlan.price ? `$${currentPlan.price}/month` : "$0.00"}
          </p>
          <div className="text-gray-700 space-y-4">
            <p className="text-lg font-medium">
              {currentPlan.customDetails || currentPlan.description}
            </p>
            <h1>{currentPlan.name}</h1>
            <p className="text-sm text-gray-500">Plan ID: {currentPlan.id}</p>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}
