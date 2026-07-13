import React from "react";

const Connectivity = () => {
  return (
    <>
      {/* Section 1: Why Choose Phonico */}
      <div className="relative overflow-hidden max-w-[1320px] w-full mx-auto mt-10 flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-10">
        {/* Wavy Blob Background Image - Mobile & Tablet par clean readability ke liye */}
        <img
          src="https://phonico.com/images/wavyBlobRight.svg"
          alt=""
          className="absolute right-0 top-0 h-full w-[80%] md:w-[60%] lg:w-[50%] object-cover object-right pointer-events-none z-0 opacity-30 md:opacity-80"
        />

        <div className="relative z-10 w-full md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="font-semibold text-3xl sm:text-5xl text-center md:text-left text-slate-900 leading-tight">
            Why Choose <br />
            <span className="text-[#ec3c65] mt-2 md:mt-3 block">
              PHONICO eSIM?
            </span>
          </h1>

          {/* Text alignment fixing for standard screens */}
          <p className="font-medium mt-6 text-sm sm:text-base text-center md:text-left max-w-xl text-slate-600 leading-relaxed">
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
        <div className="relative z-10 w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[450px] object-contain"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FbenefitsImg1.png&w=2048&q=75"
            alt="Phonico eSIM Benefits"
          />
        </div>
      </div>

      {/* Section 2: Uninterrupted Connectivity Features */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 mt-10 bg-white border border-gray-200 rounded-2xl justify-between items-center mx-4 xl:mx-auto w-auto max-w-[1270px] shadow-2xs">
        <h1 className="font-semibold text-2xl sm:text-3xl text-center lg:text-left lg:max-w-[320px] leading-tight text-gray-900">
          Uninterrupted <br className="hidden lg:block" /> Connectivity{" "}
          <br className="hidden lg:block" /> Across the USA
        </h1>

        {/* Handled beautifully on tablets using grid grid-cols-3 instead of messy flex wraps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto lg:flex-1 lg:max-w-[850px] items-center justify-items-center sm:justify-items-start">
          {/* Feature 1 */}
          <div className="flex flex-row items-center gap-4 w-full justify-center sm:justify-start">
            <img
              src="https://phonico.com/images/Coverage.svg"
              alt="Coverage"
              className="w-12 h-12 object-contain shrink-0"
            />
            <h2 className="font-semibold text-base sm:text-lg text-left leading-snug text-gray-800">
              Effortless <br /> Coverage
            </h2>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-row items-center gap-4 w-full justify-center sm:justify-start">
            <img
              src="https://phonico.com/images/Plans.svg"
              alt="Plans"
              className="w-12 h-12 object-contain shrink-0"
            />
            <h2 className="font-semibold text-base sm:text-lg text-left leading-snug text-gray-800">
              Custom Plans <br /> To Choose
            </h2>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-row items-center gap-4 w-full justify-center sm:justify-start">
            <img
              src="https://phonico.com/images/247Support.svg"
              alt="Support"
              className="w-12 h-12 object-contain shrink-0"
            />
            <h2 className="font-semibold text-base sm:text-lg text-left leading-snug text-gray-800">
              24/7 <br /> Support
            </h2>
          </div>
        </div>
      </div>

      {/* Section 3: Introducing App Section (Bottom Image Locked) */}
      <div className="flex flex-col md:flex-row gap-8 mt-10 p-0 bg-gray-50 rounded-3xl mx-4 xl:mx-auto max-w-[1270px] items-center overflow-hidden border border-gray-100">
        <div className="md:w-1/2 flex flex-col items-center md:items-start w-full py-8 md:py-12 md:pl-10 px-6 md:pr-4">
          <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl mb-4 text-center md:text-left leading-tight text-gray-900">
            Introducing a World <br /> of Connectivity with <br />
            the <span className="text-[#ec3c65]">Phonico</span> eSIM App
          </h1>

          <p className="font-medium text-sm sm:text-base text-center md:text-left mb-6 text-slate-600 leading-relaxed max-w-xl md:max-w-full">
            Download our eSIM App for monitoring your real-time data usage. You
            can also use this app to activate your eSIM, manage profiles, and
            get updates on new features and promotions. You can find this app on
            the Play Store and Apple Store.
          </p>

          <p className="font-bold text-sm sm:text-base text-center md:text-left text-gray-800 mb-3">
            Download the App now
          </p>

          {/* App Store Buttons wrapper */}
          <div className="flex flex-row gap-3 justify-center items-center md:justify-start w-full max-w-[320px] sm:max-w-full">
            <img
              className="w-32 sm:w-36 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              src="https://phonico.com/images/appleLink.svg"
              alt="App Store"
            />
            <img
              className="w-32 sm:w-36 cursor-pointer hover:opacity-90 transition-opacity duration-200"
              src="https://phonico.com/images/playLink.svg"
              alt="Play Store"
            />
          </div>
        </div>

        {/* Right Side: Mockup Image - Locked seamlessly to the bottom row */}
        <div className="md:w-1/2 flex justify-center md:justify-end w-full self-end m-0 p-0 pt-6 md:pt-0">
          <img
            className="w-48 sm:w-64 md:w-80 lg:w-[350px] object-contain block translate-y-2 md:translate-y-4"
            src="https://phonico.com/_next/image/?url=%2Fimages%2FmobileImg.png&w=1920&q=75"
            alt="Phonico App Mockup"
          />
        </div>
      </div>

      {/* Trust Badges / Social proof heading */}
      <div className="mt-12 sm:mt-16 text-center px-4 mb-8">
        <p className="font-semibold text-sm sm:text-xl text-slate-600">
          2,157 people have said how good Phonico is
        </p>
        <h1 className="font-semibold text-3xl sm:text-5xl mt-3 text-slate-900 leading-tight">
          The Love We’ve Earned From Our{" "}
          <span className="text-[#ec3c65]">Users</span>
        </h1>
      </div>
    </>
  );
};

export default Connectivity;
