import React from "react";

const Connectivity = () => {
  return (
    <>
      <div className="relative overflow-hidden w-[1320px] mt-10 md:ml-20 flex flex-col md:flex-row gap-30 p-4 md:p-10">
        {/* Wavy Blob Background Image */}
        <img
          src="https://phonico.com/images/wavyBlobRight.svg"
          alt=""
          className="absolute right-0 top-0 h-full w-[50%] md:w-[60%] lg:w-[90%] object-cover object-right pointer-events-none z-0 opacity-80"
        />

        {/* Left Side Content */}
        <div className="relative z-10 md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="font-semibold text-3xl sm:text-5xl mt-10 text-center md:text-left">
            Why Choose <br />
            <span className="text-[#ec3c65] mt-3 block">PHONICO eSIM?</span>
          </h1>

          {/* Paragraph with single-line flow and beautiful gray color */}
          <p className="font-medium mt-6 text-sm sm:text-base text-center md:text-left max-w-xl md:max-w-[650px] text-slate-600 leading-relaxed">
            When you are in the United States, there should be no complications,
            especially with connectivity. Phonico makes it simple with
            affordable USA eSIM plans built for travellers, remote workers, and
            locals who want fast, reliable mobile data without the extra hassle.
            From Alaska to Hawaii or California to Maine, you’ll get strong
            nationwide coverage with instant activation, and clear voice quality
            powered by trusted U.S. carrier networks. No contracts & no hidden
            charges. Just seamless connectivity wherever you go. Phonico keeps
            you online with flexible data, call, and text plans that fit the way
            you travel and live. Choose Phonico to stay connected in the USA
            effortlessly.
          </p>
        </div>

        {/* Content Right Side (Benefits Image) */}
        <div className="relative z-10 md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-72 sm:w-96 mt-6 md:mt-20 object-contain"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FbenefitsImg1.png&w=2048&q=75"
            alt="Benefits"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-2 sm:p-6 mt-10 bg-white border border-gray-300 rounded-2xl justify-between items-center mx-4 sm:mx-auto w-full max-w-[1270px]">
        <h1 className="font-semibold text-2xl sm:text-3xl text-center lg:text-left mb-6 lg:mb-0 lg:max-w-[320px] leading-tight text-gray-900">
          Uninterrupted <br className="hidden lg:block" /> Connectivity{" "}
          <br className="hidden lg:block" /> Across the USA
        </h1>

        <div className="flex flex-col sm:flex-row flex-wrap lg:flex-nowrap justify-between  items-start gap-8 sm:gap-6 md:gap-8 w-full lg:w-auto lg:flex-1 lg:max-w-[850px]">
          <div className="flex flex-row items-center sm:items-start gap-4 w-full sm:w-[45%] lg:w-auto min-w-[200px] justify-center sm:justify-start">
            <img
              src="https://phonico.com/images/Coverage.svg"
              alt="Coverage"
              className="w-12 h-12 object-contain shrink-0" // Icons ko bhi halka sa bada kiya h badi screen ke liye
            />
            <h2 className="font-semibold text-lg sm:text-xl text-left leading-snug text-gray-800">
              Effortless <br /> Coverage
            </h2>
          </div>

          {/* Feature 2: Custom Plans */}
          <div className="flex flex-row items-center sm:items-start gap-4 w-full sm:w-[45%] lg:w-auto min-w-[200px] justify-center sm:justify-start">
            <img
              src="https://phonico.com/images/Plans.svg"
              alt="Plans"
              className="w-12 h-12 object-contain shrink-0"
            />
            <h2 className="font-semibold text-lg sm:text-xl text-left leading-snug text-gray-800">
              Custom Plans <br /> To Choose
            </h2>
          </div>

          {/* Feature 3: 24/7 Support */}
          <div className="flex flex-row items-center sm:items-start gap-4 w-full sm:w-full lg:w-auto min-w-[200px] justify-center sm:justify-start sm:mt-4 lg:mt-0">
            <img
              src="https://phonico.com/images/247Support.svg"
              alt="Support"
              className="w-12 h-12 object-contain shrink-0"
            />
            <h2 className="font-semibold text-lg sm:text-xl text-left leading-snug text-gray-800">
              24/7 <br className="hidden sm:block lg:hidden" /> Support
            </h2>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 mt-6 p-0 bg-gray-100 rounded-3xl mx-4 sm:mx-auto max-w-[1270px] items-center overflow-hidden">
        <div className="md:w-1/2 flex flex-col items-center md:items-start w-full py-6 md:py-8 md:pl-10 px-4 md:pr-0">
          <h1 className="font-semibold text-3xl sm:text-5xl mb-4 text-center md:text-left leading-tight text-gray-900">
            Introducing a World <br /> of Connectivity with <br />
            the <span className="text-[#ec3c65]">Phonico</span> eSIM App
          </h1>

          {/* Paragraph with tighter margin */}
          <p className="font-medium text-sm sm:text-base text-center md:text-left mb-4 text-slate-600 leading-relaxed max-w-xl md:max-w-full">
            Download our eSIM App for monitoring your real-time data usage. You
            can also use this app to activate your eSIM, manage profiles, and
            get updates on new features and promotions. You can find this app on
            the Play Store and Apple Store.
          </p>

          {/* Download text with tighter margin */}
          <p className="font-bold mt-2 text-sm sm:text-base text-center md:text-left text-gray-800">
            Download the App now
          </p>

          {/* App Store Buttons - Compact spacing */}
          <div className="flex flex-col sm:flex-row gap-3 mt-3 justify-center items-center md:justify-start w-full">
            <img
              className="w-36 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              src="https://phonico.com/images/appleLink.svg"
              alt="Apple Store"
            />
            <img
              className="w-36 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              src="https://phonico.com/images/playLink.svg"
              alt="Play Store"
            />
          </div>
        </div>

        {/* Right Side: Mockup Image - Aligned directly to the bottom edge */}
        <div className="md:w-1/2 flex justify-center md:justify-end w-full self-end m-0 p-0">
          <img
            className="w-56 sm:w-80 object-contain block"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FmobileImg.png&w=1920&q=75"
            alt="Phonico App Mockup"
          />
        </div>
      </div>
      <div className="mt-10 text-center px-4">
        <p className="font-semibold text-sm sm:text-xl">
          2,157 people have said how good Phonico
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl mt-4">
          The Love We’ve Earned From Our{" "}
          <span className="text-[#ec3c65]">Users</span>
        </h1>
      </div>
    </>
  );
};

export default Connectivity;
