import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* Pure section ko responsive padding di hai taaki mobile par chipke na */}
      <div className="w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Row layout sirf laptop/desktop (lg) par activate hoga, choti screens par text upar image neeche tameez se dikhegi */}
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-[1400px] mx-auto py-10 gap-10">
          {/* Left Text Column: Mobile pe center align, desktop pe proper custom margins */}
          <div className="w-full lg:w-1/2 text-center lg:text-left lg:pl-10 xl:pl-20">
            <p className="text-gray-600 text-lg text-md mt-5">
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
              Across the
              <br className="hidden md:inline" />
              USA, Instantly!
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              With Phonico eSIM, getting online in the U.S. is fast, easy, and
              <br className="hidden md:inline" /> completely digital. No KYC and
              no restrictions on Hotspot <br className="hidden md:inline" />
              Sharing or Tethering. Select your Plan, Scan the QR, Activate, and{" "}
              <br className="hidden md:inline" />
              Explore with uninterrupted coverage in all 50 states of the USA.
              <br className="hidden md:inline" />
              Starting from $15/Month!
            </p>

            <Link href="/plans">
              <button className="p-3 font-bold w-60 mt-5 transition-colors duration-200 bg-[#f5577c] hover:bg-[#d83b60] rounded text-white shadow-sm">
                Get Your USA eSIM Now
              </button>
            </Link>
          </div>

          {/* Right Image Column: Kisi bhi screen par layout nahi todegi */}
          <div className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0">
            <img
              className="h-auto w-full max-w-[400px] xl:max-w-[500px] object-contain"
              src="/femaleHero2.webp"
              alt="Phonico eSIM User"
            />
          </div>
        </div>
      </div>

      {/* Cards Section with zero styling alterations */}
      <div className="flex flex-row gap-5 justify-center flex-wrap px-4 md:px-0 mt-10 mb-10">
        <div className="w-75 bg-[#f1f1f1] p-2 h-60">
          <img className="mt-4 ml-5" src="/phoneIcon.svg" alt="" />
          <h1 className="ml-5 mt-2 text-xl font-semibold">
            Unlimited Calls & Sms
          </h1>
          <p className="ml-5 mt-3 text-gray-500 font-semibold">
            Phonico wants you to stay connected with your loved ones all the
            time with no limits on Calls and Sms.
          </p>
        </div>
        <div className="w-75 bg-[#f1f1f1] p-2 h-60">
          <img className="mt-4 ml-5" src="/moneybag.svg" alt="" />
          <h1 className="ml-5 text-xl mt-2 font-semibold">
            Variety of Data Plans
          </h1>
          <p className="ml-5 text-gray-500 mt-3 font-semibold">
            Multiple travel eSIM Data plans packages, tailored to your needs so
            you can stay connected.
          </p>
        </div>
        <div className="w-75 bg-[#f1f1f1] h-60 p-2">
          <img className="mt-4 ml-5" src="/speaker.svg" alt="" />
          <h1 className="ml-5 mt-2 text-xl font-semibold">
            Easy Activation Process
          </h1>
          <p className="ml-5 mt-2 text-gray-500 font-semibold">
            Phonico eSIM activation is so easy that anyone can do it. Just Scan
            the QR code or Activate it from the Phonico eSIM App.
          </p>
        </div>
        <div className="w-75 bg-[#f1f1f1] p-2 h-60">
          <img className="mt-3 ml-5" src="/globe (1).svg" alt="" />
          <h1 className="ml-5 mt-2 text-xl font-semibold">
            WirelessSecure Network
          </h1>
          <p className="ml-5 mt-1 text-gray-500 font-semibold">
            Phonico understands your data privacy. We have applied the highest
            standard of security protocols.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
