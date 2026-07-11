"use client";
import AccordionPage from "@/components/Home/Accordian";
import Connectivity from "@/components/Home/connectivity";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/header";
import Packages from "@/components/Home/Pakages";
import ReviewsCarousel from "@/components/Home/Slider";

const page = () => {
  return (
    <>
      <div>
        <Header />
        <Packages />
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
              Multiple travel eSIM Data plans packages, tailored to your needs
              so you can stay connected.
            </p>
          </div>
          <div className="w-75 bg-[#f1f1f1] h-60 p-2">
            <img className="mt-4 ml-5" src="/speaker.svg" alt="" />
            <h1 className="ml-5 mt-2 text-xl font-semibold">
              Easy Activation Process
            </h1>
            <p className="ml-5 mt-2 text-gray-500 font-semibold">
              Phonico eSIM activation is so easy that anyone can do it. Just
              Scan the QR code or Activate it from the Phonico eSIM App.
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
        <div className="bg-[#fef7f2] p-4 mt-10 rounded-3xl w-full max-w-[1260px] mx-auto min-h-32 sm:h-56 flex items-center justify-center">
          <h1 className="font-semibold text-2xl sm:text-5xl text-center text-slate-900 leading-tight">
            Full Coverage With the Best Prepaid <br />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>
      </div>
      <Connectivity />
      <ReviewsCarousel />
      <AccordionPage />
      <Footer />
    </>
  );
};

export default page;
