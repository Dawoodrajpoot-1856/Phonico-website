"use client";

import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setSelectedPlan } from "@/redux/planSlice";

interface PackagesListProps {
  plans: any[];
}

export default function PackagesList({ plans }: PackagesListProps) {
  const dispatch = useAppDispatch();

  const displayPlans = [
    {
      title: `${plans[0]?.data_usable || 1}Gb`,
      price: plans[0]?.price ? `${plans[0].price}/month` : "$0/month",
      description: plans[0]?.name || "Basic Plan",
      planName: "Quick Start Plan",
      planDetails:
        "Enjoy our basic eSIM plan for a Month of Travel without getting a hole in your Pocket.",
      link: "/plans/1gb-data-and-unlimited-talk-text",
      bgColor: "#fd577d",
    },
    {
      title: `${plans[1]?.data_usable || 3}GB`,
      price: plans[1]?.price ? `${plans[1].price}/month` : "$0/month",
      description: plans[1]?.name || "Travel Plan",
      planName: "Traveler’s Choice Plan",
      planDetails:
        "Planning another adventure trip? Don’t forget to buy the best eSIM Plan for Staying Connected.",
      link: "/plans/3gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[2]?.data_usable || 5}Gb`,
      price: plans[2]?.price ? `${plans[2].price}/month` : "$0/month",
      description: plans[2]?.name || "Business Plan",
      planName: "Business Boost Plan",
      planDetails:
        "Rushing to an International Conference for New Business Ventures? Enjoy Hi-Speed Connectivity.",
      link: "/plans/5gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[3]?.data_usable || 10}Gb`,
      price: plans[3]?.price ? `${plans[3].price}/month` : "$0/month",
      description: plans[3]?.name || "Explorer Plan",
      planName: "Explorer’s Dream Plan",
      planDetails:
        "Are you a Browsing Addict or an Explorer? Get the best prepaid eSIM Plan that Covers all Your Journey.",
      link: "/plans/10gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
    {
      title: `${plans[4]?.data_usable || 20}Gb`,
      price: plans[4]?.price ? `${plans[4].price}/month` : "$0/month",
      description: plans[4]?.name || "Premium Plan",
      planName: "Premium Plan",
      planDetails:
        "Enjoy our Going to Sign Deals with the Staff with you? Buy Perfect eSIM Prepaid Plan to Share Data via Hotspot.",
      link: "/plans/20gb-data-and-unlimited-talk-text",
      bgColor: "rgb(81,176,253)",
    },
  ];

  const handlePlanClick = (index: number) => {
    const rawPlanApiData = plans[index];
    const displayInfo = displayPlans[index];

    if (rawPlanApiData && displayInfo) {
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

  if (plans.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        No plans available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20 justify-center max-w-[1300px] mx-auto">
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

              <div className="mt-6 w-full">
                <Link
                  href={plan.link}
                  className="w-full block"
                  onClick={() => handlePlanClick(i)}
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
  );
}
