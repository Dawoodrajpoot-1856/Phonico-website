import React from "react";
import Header from "../../components/Home/header";
import Footer from "../../components/Home/Footer";

const page = () => {
  return (
    <>
      <Header />

      <div className="bg-[#fff4eeb1] mx-auto  max-w-[1270px]  p-2">
        <div className=" px-4 max-w-[1270px] sm:px-6  mt-10 text-center lg:text-left">
          <h1 className=" font-medium text-4xl  sm:text-4xl lg:text-[40px]">
            <span className="text-[#ee5e7f]">EasyPay </span>eSIM Services:
            Manage Your Line with Ease
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center  mt-10 px-4 sm:px-6 ">
          {/* Form */}
          <div className="flex flex-col gap-5 w-full lg:w-1/2 mt-10">
            <div className="flex flex-col gap-1">
              <label
                className="font-semibold text-gray-600"
                htmlFor="lineNumber"
              >
                Line Number
              </label>
              <input
                id="lineNumber"
                className="bg-white border-gray-400 rounded border w-full p-3"
                type="number"
                placeholder="Enter Your Line Number"
              />
            </div>

            <div className="flex flex-col gap-1 mt-2">
              <label
                className="font-semibold text-gray-600"
                htmlFor="confirmLineNumber"
              >
                Confirm Line Number
              </label>
              <input
                id="confirmLineNumber"
                className="bg-white border border-gray-400 rounded w-full p-3"
                type="number"
                placeholder="Confirm Your Line Number"
              />
            </div>

            {/* reCAPTCHA Section */}
            <div className="mt-4 flex justify-start">
              {/* अगर आप react-google-recaptcha लाइब्रेरी यूज़ कर रहे हैं तो यहाँ <ReCAPTCHA sitekey="..." /> आएगा */}
              <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded p-3 flex items-center gap-4 w-full sm:w-[304px] h-[78px] shadow-sm select-none">
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="checkbox"
                    id="captcha"
                    className="w-6 h-6 border-2 border-gray-300 rounded cursor-pointer accent-[#ee5e7f]"
                  />
                  <label
                    htmlFor="captcha"
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    I'm not a robot
                  </label>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                    alt="reCAPTCHA"
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-[10px] text-gray-500 mt-0.5">
                    reCAPTCHA
                  </span>
                </div>
              </div>
            </div>

            <button className="mt-2 p-3 w-full sm:w-auto text-white font-bold rounded bg-[#e28399] hover:bg-[#f77896] transition-colors duration-200">
              Renew Number
            </button>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center ">
            <img
              className="rounded ml-12 w-full   object-cover"
              src="https://phonico.com/_next/image/?url=%2Fimages%2Feasypay.jpg&w=1200&q=75"
              alt="EasyPay"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;


