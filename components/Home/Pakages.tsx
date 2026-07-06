"use client";
import { PackageSearch } from "lucide-react";
import Link from "next/link";

const Packages = () => {
  return (
    <section
      className="w-full max-w-[1270px] mx-auto py-16 bg-cover bg-center bg-no-repeat mt-10"
      style={{
        backgroundImage: "url('https://phonico.com/images/wavyBlob.svg')",
      }}
    >
      {/* Container strictly matching 1330px layout width */}
      <div className="max-w-[1330px] px-4 mx-auto">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center text-gray-900 leading-tight">
          Buy the Best eSIM Prepaid Plans Meeting All Your{" "}
          <br className="hidden md:inline" />
          <span className="text-[#ec3c65] mt-2 block">Expectations!</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12 mt-16 justify-center max-w-7xl mx-auto">
          {[
            {
              title: "1GB",
              price: "$15/month",
              description: "1GB Data and Unlimited Talk & Text",
              planName: "Quick Start Plan",
              planDetails:
                "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
              link: "/plans/1gb-data-and-unlimited-talk-text",
              bgColor: "#fd577d",
            },
            {
              title: "3GB",
              price: "$20/month",
              description: "3GB Data and Unlimited Talk & Text",
              planName: "Traveler’s Choice Plan",
              planDetails:
                "Planning another adventure trip? Don’t forget to buy the best eSIM Plan for Staying Connected.",
              link: "/plans/3gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "5GB",
              price: "$25/month",
              description: "5GB Data and Unlimited Talk & Text",
              planName: "Business Boost Plan",
              planDetails:
                "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
              link: "/plans/5gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "10GB",
              price: "$35/month",
              description: "10GB Data and Unlimited Talk & Text",
              planName: "Explorer’s Dream Plan",
              planDetails:
                "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
              link: "/plans/10gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
            {
              title: "20GB",
              price: "$50/month",
              description: "20GB Data and Unlimited Talk & Text",
              planName: "Premium Plan",
              planDetails:
                "Enjoy our Going to Sign Deals with the Staff with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
              link: "/plans/20gb-data-and-unlimited-talk-text",
              bgColor: "rgb(81,176,253)",
            },
          ].map((plan, i) => {
            const isFifthCard = i === 4;

            return (
              <div
                key={i}
                className={`w-full flex justify-center relative ${
                  isFifthCard ? "lg:col-start-2 lg:col-span-2 mx-auto" : ""
                }`}
              >
                <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 pt-6 flex flex-col justify-between border border-pink-100 min-h-[460px] h-full relative z-10 overflow-visible max-w-[300px]">
                  <div>
                    {/* Title Section */}
                    <h3 className="text-2xl font-semibold text-gray-800 text-center tracking-tight mb-4">
                      {plan.title}
                    </h3>

                    <div
                      className="-mx-7 w-[calc(100%+56px)] relative rounded-r-lg rounded-l-lg px-4 py-4 text-white text-center shadow-md z-20 transition-transform hover:scale-[1.01]"
                      style={{ backgroundColor: plan.bgColor }}
                    >
                      <h4 className="font-semibold text-xl tracking-wide drop-shadow-sm">
                        {plan.price}
                      </h4>
                      <p className="mt-1 text-[11px] text-white opacity-95 leading-tight tracking-wide">
                        {plan.description}
                      </p>
                    </div>

                    {/* Plan Name */}
                    <h5 className="mt-5 text-sm sm:text-base font-semibold text-gray-900 text-center line-clamp-1">
                      {plan.planName}
                    </h5>

                    {/* Plan Details */}
                    <p className="mt-2 text-xs text-black text-center leading-relaxed h-[36px] overflow-hidden line-clamp-2">
                      {plan.planDetails}
                    </p>

                    {/* Features List */}
                    <div className="mt-5 space-y-2.5 border-t border-gray-100 pt-3.5">
                      {[
                        "High-speed internet",
                        "Unlimited talk & text",
                        "High-quality video streaming",
                        "No hidden fees",
                        "No contract (cancel anytime)",
                      ].map((text, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 tracking-wide text-left text-gray-700"
                        >
                          <img
                            src="https://phonico.com/images/checkIcon.svg"
                            className="w-5 h-5 mt-0.5 flex-shrink-0"
                            alt="Check"
                          />
                          <p className="text-sm font-medium leading-tight">
                            {text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button Section */}
                  <div className="mt-6 w-full">
                    <Link href={plan.link} className="w-full block">
                      <button className="w-full bg-[#f34b72] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-10 rounded-lg text-white font-medium text-xs tracking-wider shadow-sm uppercase">
                        View Plan
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
