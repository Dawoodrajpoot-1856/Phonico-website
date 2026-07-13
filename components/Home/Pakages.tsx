"use client";
import React, { useEffect, useState } from "react";
import { PackageSearch } from "lucide-react";
import Link from "next/link";
// Redux hooks aur actions import karein
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedPlan } from "@/redux/planSlice";

const Packages = () => {
  const [plans, setPlans] = useState<any[]>([]);
  const dispatch = useAppDispatch(); // Redux dispatch function initialize karein

  const fetchPlans = async () => {
    try {
      const res = await fetch("https://platform.phonico.com/api/guest-plans", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      });
      const data = await res.json();
      console.log("Data plans coming inside component:", data);
      return data;
    } catch (error) {
      console.error("Failed to fetch plans inside component:", error);
      return null;
    }
  };

  useEffect(() => {
    const getPlans = async () => {
      const data = await fetchPlans();
      if (data) {
        setPlans(data.data || data);
      }
    };
    getPlans();
  }, []);

  // API se aane wale raw objects ko display structure ke sath map karne ke liye helper function
  const handlePlanClick = (index: number) => {
    const rawPlanApiData = plans[index];
    const displayInfo = displayPlans[index];

    if (rawPlanApiData) {
      // Dono structures (API text aur displays info) ko combine karke redux mein bhej rahe hain
      dispatch(
        setSelectedPlan({
          ...rawPlanApiData,
          customPlanName: displayInfo.planName,
          customDetails: displayInfo.planDetails,
          customBgColor: displayInfo.bgColor,
        }),
      );
    }
  };

  const displayPlans = [
    {
      title: `${plans[0]?.data_usable}Gb`,
      price: `${plans[0]?.price}/month`,
      description: `${plans[0]?.name}`,
      planName: "Quick Start Plan",
      planDetails:
        "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
      link: "/plans/1gb-data-and-unlimited-talk-text",
      bgColor: "#fd577d",
    },
    {
      title: `${plans[1]?.data_usable}GB`,
      price: `${plans[1]?.price}/month`,
      description: `${plans[1]?.name}`,
      planName: "Traveler’s Choice Plan",
      planDetails:
        "Planning another adventure trip? Don’t forget to buy the best eSIM Plan for Staying Connected.",
      link: "/plans/3gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[2]?.data_usable}Gb`,
      price: `${plans[2]?.price}/month`,
      description: `${plans[2]?.name}`,
      planName: "Business Boost Plan",
      planDetails:
        "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
      link: "/plans/5gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[3]?.data_usable}Gb`,
      price: `${plans[3]?.price}/month`,
      description: `${plans[3]?.name}`,
      planName: "Explorer’s Dream Plan",
      planDetails:
        "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
      link: "/plans/10gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[4]?.data_usable}Gb`,
      price: `${plans[4]?.price}/month`,
      description: `${plans[4]?.name}`,
      planName: "Premium Plan",
      planDetails:
        "Enjoy our Going to Sign Deals with the Staff with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
      link: "/plans/20gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
  ];

  return (
    <section
      className="w-full max-w-[1270px] mx-auto py-16 bg-cover bg-center bg-no-repeat mt-10 overflow-hidden"
      style={{
        backgroundImage: "url('https://phonico.com/images/wavyBlob.svg')",
      }}
    >
      <div className="max-w-[1330px] px-4 mx-auto">
        <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center text-gray-900 leading-tight">
          Buy the Best eSIM Prepaid Plans Meeting All Your{" "}
          <br className="hidden md:inline" />
          <span className="text-[#ec3c65] mt-2 block">Expectations!</span>
        </h1>

        {/* Responsive Grid adjusted for Mobile, Tablet (md), and Desktop (lg) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16 justify-center max-w-[1300px] mx-auto px-4">
          {displayPlans.map((plan, i) => {
            const isFifthCard = i === 4;

            return (
              <div
                key={i}
                className={`w-full flex justify-center relative ${
                  isFifthCard
                    ? "sm:col-span-2 md:col-span-3 lg:col-start-2 lg:col-span-2 mx-auto"
                    : ""
                }`}
              >
                <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 pt-28 flex flex-col justify-between border border-pink-100 min-h-[520px] h-full relative z-10 overflow-visible max-w-[290px]">
                  <div>
                    <h3 className="absolute top-6 left-0 right-0 text-2xl font-semibold text-gray-800 text-center tracking-tight">
                      {plan.title}
                    </h3>

                    <div
                      className="absolute left-[-12px] right-[-12px] top-[72px] rounded-md px-4 py-3 text-white text-center shadow-lg z-20"
                      style={{ backgroundColor: plan.bgColor }}
                    >
                      <div
                        className="absolute bottom-[-6px] left-0 w-0 h-0 border-t-[6px] border-r-[6px] border-r-transparent filter brightness-75"
                        style={{ borderTopColor: plan.bgColor }}
                      />
                      <div
                        className="absolute bottom-[-6px] right-0 w-0 h-0 border-t-[6px] border-l-[6px] border-l-transparent filter brightness-75"
                        style={{ borderTopColor: plan.bgColor }}
                      />

                      <h4 className="font-semibold text-xl tracking-wide drop-shadow-sm">
                        {plan.price}
                      </h4>
                      <p className="mt-1 text-[11px] text-white opacity-95 leading-tight tracking-wide">
                        {plan.description}
                      </p>
                    </div>

                    <div className="mt-12">
                      <h5 className="text-sm sm:text-base font-semibold text-gray-900 text-center line-clamp-1">
                        {plan.planName}
                      </h5>

                      <p className="mt-2 text-xs text-black text-center leading-relaxed h-[36px] overflow-hidden line-clamp-2">
                        {plan.planDetails}
                      </p>
                    </div>

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

                  {/* Button Wrapper with onClick to Save in Redux */}
                  <div className="mt-6 w-full">
                    <Link
                      href={plan.link}
                      className="w-full block"
                      onClick={() => handlePlanClick(i)} // Click karne pe data redux state me chala jayega
                    >
                      <button className="w-full bg-[#f34b72] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-10 rounded-lg text-white font-medium text-xs tracking-wider shadow-sm uppercase cursor-pointer">
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
