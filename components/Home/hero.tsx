import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Section wrapper with clean responsive padding */}
      <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Row layout triggers on desktop (lg), stacks gracefully on mobile and tablets */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1400px] mx-auto py-10 gap-10">
          {/* Left Text Column: Centered on mobile/tablet, left-aligned on desktop */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10 xl:pl-20">
            <p className="text-gray-600 text-lg mt-5">
              Phonico - Your Gateway to USA Connectivity
            </p>
            <img
              className="mx-auto lg:mx-0 mt-1"
              src="https://phonico.com/images/blueLine.svg"
              alt=""
            />
            <h1 className="text-4xl md:text-5xl font-semibold mt-5 leading-tight text-gray-900">
              Stay Connected With <br className="hidden md:inline" />
              <span className="text-[#ee5e7f] inline-block">Phonico</span> eSIM
              Across the USA, Instantly!
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With Phonico eSIM, getting online in the U.S. is fast, easy, and
              completely digital. No KYC and Sharing or Tethering. Select your
              Plan, Scan the QR, Activate, and Explore with uninterrupted
              coverage in all 50 states of the USA. Starting from $15/Month!
            </p>

            <Link href="/plans">
              <button className="p-3 font-bold w-60 mt-5 transition-colors duration-200 bg-[#f5577c] hover:bg-[#d83b60] rounded text-white shadow-sm cursor-pointer">
                Get Your USA eSIM Now
              </button>
            </Link>
          </div>

          {/* Right Image Column */}
          <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
            <img
              className="h-auto w-full max-w-[400px] xl:max-w-[500px] object-contain"
              src="/femaleHero2.webp"
              alt="Phonico eSIM User"
            />
          </div>
        </div>
      </div>

      {/* Cards Section: Desktop par Flex, Tablets (md) par clean 2x2 grid, Mobile par stacked */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row lg:justify-center gap-5">
          {/* Card 1 */}
          <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
            <img className="mt-4 ml-5" src="/phoneIcon.svg" alt="" />
            <h1 className="ml-5 mt-2 text-xl font-semibold">
              Unlimited Calls & Sms
            </h1>
            <p className="ml-5 mt-3 text-gray-500 font-semibold pr-3 text-sm md:text-base leading-normal">
              Phonico wants you to stay connected with your loved ones all the
              time with no limits on Calls and Sms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
            <img className="mt-4 ml-5" src="/moneybag.svg" alt="" />
            <h1 className="ml-5 text-xl mt-2 font-semibold">
              Variety of Data Plans
            </h1>
            <p className="ml-5 text-gray-500 mt-3 font-semibold pr-3 text-sm md:text-base leading-normal">
              Multiple travel eSIM Data plans packages, tailored to your needs
              so you can stay connected.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
            <img className="mt-4 ml-5" src="/speaker.svg" alt="" />
            <h1 className="ml-5 mt-2 text-xl font-semibold">
              Easy Activation Process
            </h1>
            <p className="ml-5 mt-2 text-gray-500 font-semibold pr-3 text-sm md:text-base leading-normal">
              Phonico eSIM activation is so easy that anyone can do it. Just
              Scan the QR code or Activate it from the Phonico eSIM App.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
            <img className="mt-3 ml-5" src="/globe (1).svg" alt="" />
            <h1 className="ml-5 mt-2 text-xl font-semibold">
              WirelessSecure Network
            </h1>
            <p className="ml-5 mt-1 text-gray-500 font-semibold pr-3 text-sm md:text-base leading-normal">
              Phonico understands your data privacy. We have applied the highest
              standard of security protocols.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
