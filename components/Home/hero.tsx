import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div>
        <div className="flex flex-col md:flex-row">
          <div>
            <p className="text-gray-600  text-lg text-md mt-10 ml-4 md:ml-30 ">
              Phonico - Your Gateway to USA Connectivity
            </p>
            <img
              className="ml-4 md:ml-32 mt-1"
              src="https://phonico.com/images/blueLine.svg"
              alt=""
            />
            <h1 className="text-4xl md:text-5xl font-semibold ml-2 md:ml-32 mt-5 leading-tight">
              Stay Connected With <br />
              <span className="text-[#ee5e7f] inline-block">Phonico</span> eSIM
              Across the
              <br />
              USA, Instantly!
            </h1>

            <p className="text-lg md:text-xl text-gray-700 ml-2 md:ml-32 mt-4 max-w-2xl leading-relaxed">
              With Phonico eSIM, getting online in the U.S. is fast, easy, and
              <br /> completely digital. No KYC and no restrictions on Hotspot{" "}
              <br />
              Sharing or Tethering. Select your Plan, Scan the QR, Activate, and{" "}
              <br />
              Explore with uninterrupted coverage in all 50 states of the USA.
              <br />
              Starting from $15/Month!
            </p>
            <Link href="/plans">
              <button className="p-3 font-bold w-60 ml-4 md:ml-32 mt-5 transition-colors duration-200 bg-[#f5577c] hover:bg-[#d83b60] rounded text-white">
                Get Your USA eSIM Now
              </button>
            </Link>
          </div>
          <div className="flex justify-center md:justify-start mt-5 md:mt-16">
            <img
              className="h-auto w-full max-w-[450px] md:max-w-[600px] ml-0 md:ml-28 object-contain"
              src="/femaleHero2.webp"
              alt="Phonico eSIM User"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-5 justify-center  flex-wrap">
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
          <h1 className="ml-5  text-xl mt-2 font-semibold">
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
