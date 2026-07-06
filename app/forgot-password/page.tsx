import React from "react";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/header";

const page = () => {
  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      <Header />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10 px-4 sm:px-6 lg:px-20 mt-10">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            className="rounded-2xl w-full max-w-sm h-auto object-cover"
            src="/blue.jpg"
            alt="Forgot Password"
          />
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl text-center lg:text-left">
            Forgot Password
          </h1>
          <p className="font-semibold text-center lg:text-left text-gray-700">
            Don’t worry! We are here to help recover your password. <br />
            Remember your details?
          </p>

          <div className="flex flex-col gap-2 mt-4">
            <label htmlFor="email" className="font-medium">
              Enter Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="border border-gray-300 rounded p-3 w-full"
            />
          </div>

          <button className="mt-4 w-full sm:w-auto text-white bg-pink-400 hover:bg-[#f06989] font-bold p-3 rounded self-center lg:self-start">
            Submit
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
