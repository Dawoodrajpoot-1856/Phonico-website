import Link from "next/link";

const Package = () => {
  return (
    <div>
      <div className="mt-10 px-4 sm:px-6 lg:px-8">
        {/* Top Banner: Width 1050px kar di hai taaki baki sections se match kare */}
        <div className="bg-[#fef7f2] p-6 mt-10 rounded-3xl w-full max-w-[1050px] mx-auto min-h-32 sm:h-56 flex items-center justify-center">
          <h1 className="font-semibold text-2xl sm:text-5xl text-center text-slate-900 leading-tight">
            Full Coverage With the Best Prepaid{" "}
            <br className="hidden sm:inline" />
            <span className="text-[#f17a96]">USA</span> eSIM Plans
          </h1>
        </div>

        {/* Heading Section */}
        <div className="w-full max-w-[1050px] mx-auto mt-12 sm:mt-16">
          <h2 className="font-semibold text-3xl sm:text-5xl text-left text-slate-900 leading-tight">
            You can get your <span className="text-[#f34b72]">Phonico</span>
            <br />
            <span className="mt-2 block">eSIM in 3 easy steps!</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="w-full max-w-[1050px] mx-auto mt-10 sm:mt-6">
          {/* Mobile/Tablet View (Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:hidden bg-[#faf5f0]/50 p-6 rounded-2xl border border-orange-50">
            <div className="flex gap-4 items-start">
              <span className="bg-[#f34b72] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                1
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Choose Your Plan
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  Select the best eSIM plan that meets your needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-[#5cbfea] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                2
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Buy Your eSIM Online
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  You can buy your eSIM online, and it’s ready to use in
                  minutes.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="bg-[#EE5E7F] text-white font-extrabold rounded-full w-10 h-10 flex items-center justify-center shrink-0 shadow-sm text-lg">
                3
              </span>
              <div>
                <h2 className="font-bold text-xl text-slate-950">
                  Activate Instantly
                </h2>
                <p className="font-medium mt-1 text-sm text-slate-600 leading-relaxed">
                  There is no wait or paperwork. Just click buy now, and you
                  will receive a QR code in your e-mail.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop View with SVG background */}
          <div className="hidden lg:block relative mx-auto w-full max-w-[1050px] min-h-[550px]">
            <img
              src="/stepsBg.svg"
              alt="Steps Background"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-0"
            />

            <div className="absolute z-10 top-[75%] left-[8%] max-w-[320px]">
              <h2 className="font-bold text-xl text-slate-950">
                Choose Your Plan
              </h2>
              <p className="font-semibold mt-2 text-base text-slate-500 leading-relaxed">
                Select the best eSIM plan that meets your needs.
              </p>
            </div>

            <div className="absolute z-10 top-[48%] left-[38%] max-w-[260px]">
              <h2 className="font-bold text-xl text-slate-950">
                Buy Your eSIM Online
              </h2>
              <p className="font-semibold mt-2 text-base text-slate-500 leading-relaxed">
                You can buy your eSIM online, and it’s ready to use in minutes.
              </p>
            </div>

            <div className="absolute z-10 top-[15%] right-[5%] max-w-[300px]">
              <h2 className="font-bold text-xl text-slate-950">
                Activate Instantly
              </h2>
              <p className="font-semibold mt-2 text-base text-slate-500 leading-relaxed">
                There is no wait, and there is no paperwork. Just click buy now,
                and you will receive a QR code in your e-mail for activation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
