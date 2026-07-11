"use client";
import AccordionPage from "@/components/Home/Accordian";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/header";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addToCart } from "@/redux/planSlice";

const Page = () => {
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    if (currentPlan) {
      dispatch(addToCart(currentPlan));
      alert("Plan added to cart!"); // Testing ke liye alert, aap toast bhi laga sakte hain
    }
  };
  const currentPlan = useAppSelector((state) => state.plan.selectedPlan);

  return (
    <>
      <Header />
      <div className="w-[900px] mx-auto bg-[#faf5f0] p-4 flex flex-col gap-6 my-10 rounded-lg">
        <div className="flex flex-row justify-between items-center">
          <img
            src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=128&q=75"
            alt="Logo"
          />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{currentPlan?.data_usable}GB</h1>
            <p>{currentPlan?.name}</p>
          </div>
          <h1 className="font-bold text-xl">${currentPlan?.price}</h1>
        </div>

        {/* Inputs Section */}
        <div className="flex flex-col gap-4">
          <input
            className="bg-white p-3 rounded-xl w-full border border-gray-300 focus:outline-none "
            type="number"
            placeholder="Enter 15-digit IMEI"
          />
          <input
            className="bg-white p-3 rounded-xl w-full border border-gray-300 focus:outline-none focus:border-amber-500"
            type="number"
            placeholder="Enter 5-digit ZIP CODE"
          />
        </div>

        {/* Pricing Breakdown (Fixed Alignment) */}
        <div className="flex flex-col gap-3 bg-white border-gray-300 p-4 rounded">
          <div className="flex justify-between border-b border-gray-200 items-center">
            <h1 className="font-semibold">Discount</h1>
            <h1 className="font-bold">$0</h1>
          </div>

          <div className="flex justify-between border-b border-gray-200 items-center">
            <h1 className="font-semibold">Amount from wallet</h1>
            <h1 className="font-bold">$0</h1>
          </div>

          <div className="flex justify-between border-b border-gray-200 items-center">
            <h1 className="font-semibold">Amount from card</h1>
            <h1 className="font-bold">${currentPlan?.price}</h1>
          </div>

          <div className="flex justify-between border-b border-gray-200 items-center pt-2 border-t border-amber-200">
            <h1 className="font-semibold text-lg">Subtotal</h1>
            <h1 className="font-bold text-xl ">${currentPlan?.price}</h1>
          </div>
        </div>

        {/* Pay Button */}
        <button className="w-[850px] mx-auto p-3 rounded font-bold bg-white hover:text-white hover:bg-[#EE5E7F] text-[#EE5E7F] border-[#fbc4d0] border-2 transition-all text-sm tracking-wide shadow-sm">
          Pay now
        </button>
      </div>
      <AccordionPage />
      <Footer />
    </>
  );
};

export default Page;
