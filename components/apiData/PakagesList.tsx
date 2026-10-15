import Link from "next/link";
import { getGuestPlanSlug, type GuestPlan } from "@/lib/planPresentation";

interface PackagesListProps {
  plans: GuestPlan[];
}

export default function PackagesList({ plans }: PackagesListProps) {
  if (plans.length === 0) {
    return (
      <div className="text-center mt-20 text-gray-500 text-lg">
        No plans available.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20 justify-center max-w-[1300px] mx-auto">
      {plans.map((plan, i) => {
        const slug = getGuestPlanSlug(plan);
        const link = slug ? `/plans/${slug}` : null;
        const bgColor = i === 0 ? "#fd577d" : "rgb(81,176,253)";
        const isFifthCard = i === 4;

        const planDetails =
          plan.description?.trim() ||
          [
            plan.data_usable && `${plan.data_usable}GB data`,
            plan.validity_in_days && `${plan.validity_in_days} days`,
            plan.minutes_usable && `${plan.minutes_usable} minutes`,
            plan.sms_usable && `${plan.sms_usable} SMS`,
          ]
            .filter(Boolean)
            .join(" · ");

        return (
          <div
            key={plan.id ?? link ?? i}
            className={`w-full flex justify-center relative ${
              isFifthCard
                ? "sm:col-span-2 md:col-span-3 lg:col-start-2 lg:col-span-2 mx-auto"
                : ""
            }`}
          >
            <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 pt-28 flex flex-col justify-between border border-pink-100 min-h-[520px] h-full relative z-10 overflow-visible max-w-[290px]">
              <div>
                <h3 className="absolute top-6 left-0 right-0 text-2xl font-semibold text-gray-800 text-center tracking-tight">
                  {plan.data_usable ?? ""}GB
                </h3>

                <div
                  className="absolute left-[-12px] right-[-12px] top-[72px] rounded-md px-4 py-3 text-white text-center shadow-lg z-20"
                  style={{ backgroundColor: bgColor }}
                >
                  <h4 className="font-semibold text-xl tracking-wide drop-shadow-sm">
                    ${plan.price ?? "0"}/month
                  </h4>
                  <p className="mt-1 text-[11px] text-white opacity-95 leading-tight tracking-wide">
                    {plan.name || "Plan"}
                  </p>
                </div>

                <div className="mt-12">
                  <h5 className="text-sm sm:text-base font-semibold text-gray-900 text-center line-clamp-1">
                    {plan.name || "eSIM Plan"}
                  </h5>
                  <p className="mt-2 text-xs text-black text-center leading-relaxed h-[36px] overflow-hidden line-clamp-2">
                    {planDetails}
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
                {link ? (
                  <Link href={link} className="w-full block">
                    <button className="w-full bg-[#f34b72] hover:bg-[#f33f69] active:scale-[0.99] transition-all h-10 rounded-lg text-white font-medium text-xs tracking-wider shadow-sm uppercase cursor-pointer">
                      View Plan
                    </button>
                  </Link>
                ) : (
                  <button
                    disabled
                    className="w-full h-10 rounded-lg bg-gray-300 text-gray-600 font-medium text-xs uppercase cursor-not-allowed"
                  >
                    Plan unavailable
                  </button>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
