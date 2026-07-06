"use client";
import { AccordionDemo } from "@/components/Accordian";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/header";
import React, { useEffect, useState } from "react";

// Type for a single plan/cart item
export interface Plan {
  title: string;
  duration: string;
  type: string;
  price: number;
}

const Page: React.FC = () => {
  const [cart, setCart] = useState<Plan[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data: Plan[] = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(data);
    }
  }, []);

  const plan: Plan = {
    title: "10GB",
    duration: "1 Month",
    type: "Quick Start Plan",
    price: 35,
  };

  const handleAddToCart = (plan: Plan) => {
    const newCart = [...cart, plan];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert(`${plan.title} added to cart`);
  };

  const features: string[] = [
    "High-speed internet",
    "Unlimited talk & text",
    "High-quality video streaming",
    "No hidden fees",
    "No contract (cancel anytime)",
  ];

  return (
    <>
      <Header />

      <div className="bg-[#ffecf1] py-10 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-start">
          {/* Plan Card */}
          <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-4">
            <h1 className="text-3xl font-bold text-gray-800 text-center">
              {plan.title}
            </h1>
            <div className="mt-6 rounded-lg w-full px-4 py-6 text-white bg-blue-400 text-center">
              <h1 className="font-bold text-2xl">${plan.price}/month</h1>
              <p className="mt-2 text-sm">
                10GB Data and Unlimited Talk & Text
              </p>
            </div>
            <h1 className="mt-5 text-lg font-semibold text-gray-800 text-center">
              {plan.type}
            </h1>
            <p className="mt-3 text-sm text-gray-600 text-center">
              Enjoy our basic eSIM plan for a Month of Travel without getting a
              hole in your Pocket.
            </p>
            <div className="mt-5 space-y-2">
              {features.map((text, i) => (
                <div key={i} className="flex items-center gap-2">
                  <img
                    src="https://phonico.com/images/checkIcon.svg"
                    alt="check"
                    className="w-4 h-4"
                  />
                  <p className="text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Details */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <button className="w-full md:w-96 border-pink-400 font-semibold border text-pink-400 p-2 hover:bg-[#f33f69] hover:text-white rounded text-center">
              Check if your Phone is eSIM compatible
            </button>

            <h1 className="font-semibold text-2xl mt-4">What's included</h1>
            <div className="w-full max-w-md h-12 border-2 mt-4 rounded flex justify-between items-center px-4">
              <h1 className="font-semibold text-xl">Unlimited SMS & Minutes</h1>
              <h1 className="font-semibold text-pink-400 text-xl">Included</h1>
            </div>

            <div className="shadow-lg w-full max-w-md p-4 mt-5 rounded-lg">
              <div className="flex justify-between border-b py-2">
                <h1 className="font-semibold text-xl">Monthly</h1>
                <h1 className="font-semibold text-xl">${plan.price}/mo</h1>
              </div>
              <div className="flex justify-between border-b py-2 mt-2">
                <h1 className="font-semibold text-xl">Subtotal</h1>
                <h1 className="font-semibold text-xl">
                  ${plan.price} for 1 month
                </h1>
              </div>
            </div>

            <button
              onClick={() => handleAddToCart(plan)}
              className="mt-5 w-full max-w-md bg-[#f34b72] hover:bg-[#f33f69] text-xl h-10 rounded text-white block"
            >
              Add to Cart
            </button>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <p className="font-semibold text-center sm:text-left">
                No Contract Required
              </p>
              <p className="font-semibold text-center sm:text-left">
                Cancel Anytime
              </p>
            </div>
          </div>
        </div>
      </div>

      <AccordionDemo />
      <Footer />
    </>
  );
};

export default Page;
