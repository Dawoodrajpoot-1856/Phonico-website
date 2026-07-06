import React from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";

const page = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />

      <div className="px-4 sm:px-6 lg:px-20 mt-10 text-center lg:text-left">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
          <span className="text-[#ee5e7f]">EasyPay </span>eSIM Services: Manage
          Your Line with Ease
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 mt-10 px-4 sm:px-6 lg:px-20">
        {/* Form */}
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Line Number</label>
            <input
              className="border-gray-300 rounded border w-full p-3"
              type="number"
              placeholder="Enter Your Line Number"
            />
          </div>

          <div className="flex flex-col gap-1 mt-5">
            <label htmlFor="">Confirm Line Number</label>
            <input
              className="border-gray-300 border rounded w-full p-3"
              type="number"
              placeholder="Confirm Your Line Number"
            />
          </div>

          <button className="mt-5 p-3 w-full sm:w-auto text-white font-bold rounded bg-[#e28399] hover:bg-[#f77896]">
            Renew Number
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="rounded-2xl w-full max-w-md h-auto object-cover"
            src="https://phonico.com/_next/image/?url=%2Fimages%2Feasypay.jpg&w=1200&q=75"
            alt="EasyPay"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
