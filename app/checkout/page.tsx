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

      {/* Main Container: w-[900px] hata kar w-full max-w-4xl kiya taaki screen size ke mutabiq adjust ho */}
      <div className="w-full max-w-4xl mx-auto bg-[#faf5f0] p-4 sm:p-6 flex flex-col gap-6 my-6 sm:my-10 rounded-lg shadow-xs">
        {/* Top Header Section: Mobile par flex-col aur center kiya, tablet/desktop par row aur spaced out */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center border-b border-orange-100 pb-4 sm:pb-0">
          <img
            src="https://phonico.com/_next/image/?url=%2Fimages%2FsiteLogo.png&w=128&q=75"
            alt="Logo"
            className="h-auto max-w-[128px]"
          />
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <h1 className="font-bold text-2xl sm:text-3xl text-gray-900">
              {currentPlan?.data_usable}GB
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              {currentPlan?.name}
            </p>
          </div>
          <h1 className="font-bold text-2xl text-gray-900">
            ${currentPlan?.price}
          </h1>
        </div>

        {/* Inputs Section */}
        <div className="flex flex-col gap-4">
          <input
            className="bg-white p-3 rounded-xl w-full border border-gray-300 focus:outline-none focus:border-[#EE5E7F] transition-colors text-sm sm:text-base"
            type="number"
            placeholder="Enter 15-digit IMEI"
          />
          <input
            className="bg-white p-3 rounded-xl w-full border border-gray-300 focus:outline-none focus:border-[#EE5E7F] transition-colors text-sm sm:text-base"
            type="number"
            placeholder="Enter 5-digit ZIP CODE"
          />
        </div>

        {/* Pricing Breakdown */}
        <div className="flex flex-col gap-3 bg-white border border-gray-200 p-4 rounded-xl shadow-2xs">
          <div className="flex justify-between border-b border-gray-100 pb-2 items-center text-sm sm:text-base">
            <h1 className="font-semibold text-gray-700">Discount</h1>
            <h1 className="font-bold text-gray-900">$0</h1>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2 items-center text-sm sm:text-base">
            <h1 className="font-semibold text-gray-700">Amount from wallet</h1>
            <h1 className="font-bold text-gray-900">$0</h1>
          </div>

          <div className="flex justify-between border-b border-gray-100 pb-2 items-center text-sm sm:text-base">
            <h1 className="font-semibold text-gray-700">Amount from card</h1>
            <h1 className="font-bold text-gray-900">${currentPlan?.price}</h1>
          </div>

          {/* Subtotal border and alignment fix */}
          <div className="flex justify-between items-center pt-3 mt-1 border-t-2 border-dashed border-orange-100">
            <h1 className="font-bold text-gray-800 text-base sm:text-lg">
              Subtotal
            </h1>
            <h1 className="font-extrabold text-xl sm:text-2xl text-gray-900">
              ${currentPlan?.price}
            </h1>
          </div>
        </div>

        {/* Pay Button: Fixed w-[850px] hata kar container ke mutabiq auto-adjust (w-full) kiya */}
        <button className="w-full p-3 rounded-xl font-bold bg-white hover:text-white hover:bg-[#EE5E7F] text-[#EE5E7F] border-[#fbc4d0] border-2 transition-all text-sm tracking-wide shadow-sm uppercase">
          Pay now
        </button>
      </div>

      <AccordionPage />
      <Footer />
    </>
  );
};

export default Page;
