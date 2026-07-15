import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-[calc(100%-0.75rem)] overflow-hidden mt-5 ml-3 px-4 lg:px-8 ">
        <div className="flex flex-col lg:flex-row max-w-[1270px] mx-auto py-14 gap-6">
          <div className="w-full  lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-600 mt-2 text-lg">
              Phonico - Your Gateway to USA Connectivity
            </p>
            <img
              className="mx-auto lg:mx-0 mt-1"
              src="https://phonico.com/images/blueLine.svg"
              alt=""
            />
            <h1 className="text-5xl sm:text-4xl mt-5 lg:text-5xl  font-semibold  leading-tight text-gray-900">
              Stay Connected With <br />
              <span className="text-[#ee5e7f] inline-block">Phonico</span> eSIM
              Across the USA, Instantly!
            </h1>

            <p className="text-xl text-gray-700 mt-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With Phonico eSIM, getting online in the U.S. is fast, easy, and
              completely digital. No KYC and no restrictions on Hotspot Sharing
              or Tethering. Select your Plan, Scan the QR, Activate, and Explore
              with uninterrupted coverage in all 50 states of the USA. Starting
              from $15/Month!
            </p>

            <Link href="/plans">
              <button className="p-3 font-bold w-full sm:w-auto lg:w-80 mt-6 transition-colors duration-200 bg-[#f5577c] hover:bg-[#d83b60] rounded text-white shadow-sm cursor-pointer">
                Get Your USA eSIM Now
              </button>
            </Link>
          </div>

          <div className="w-full lg:w-1/2 flex  justify-center lg:justify-end ">
            <img
              src="/femaleHero2.webp"
              alt="Phonico eSIM User"
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-[calc(100%-0.75rem)] px-4 lg:px-8 ml-3 mb-10 overflow-hidden">
        <div className="max-w-[1270px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-center gap-5">
            <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
              <img className="mt-4 ml-5" src="/phoneIcon.svg" alt="" />
              <h1 className="ml-5 mt-2 text-xl font-semibold">
                Unlimited Calls & Sms
              </h1>
              <p className="ml-5 mt-3 text-gray-500 font-semibold pr-3 text-sm leading-normal">
                Phonico wants you to stay connected with your loved ones all the
                time with no limits on Calls and Sms.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full lg:w-75 bg-[#f1f1f1] p-2 h-auto min-h-60 pb-4 rounded-sm mx-auto">
              <img className="mt-4 ml-5" src="/moneyBag.svg" alt="" />
              <h1 className="ml-5 text-xl mt-2 font-semibold">
                Variety of Data Plans
              </h1>
              <p className="ml-5 text-gray-500 mt-3 font-semibold pr-3 text-sm leading-normal">
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
              <p className="ml-5 mt-2 text-gray-500 font-semibold pr-3 text-sm leading-normal">
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
              <p className="ml-5 mt-1 text-gray-500 font-semibold pr-3 text-sm leading-normal">
                Phonico understands your data privacy. We have applied the
                highest standard of security protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
